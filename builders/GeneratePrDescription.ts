import { execSync } from "child_process";

function run(cmd: string): string {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
  } catch {
    return "";
  }
}

function detectBaseBranch(argBase?: string): string {
  const base = argBase || process.env.PR_BASE || "main";
  // Prefer remote if available
  const hasOriginMain = run(`git rev-parse --verify --quiet origin/${base}`);
  if (hasOriginMain) return `origin/${base}`;
  const hasLocalBase = run(`git rev-parse --verify --quiet ${base}`);
  if (hasLocalBase) return base;
  // Fallback to default branch from remote
  const upstream = run("git remote show origin");
  const match = upstream.match(/HEAD branch: (.+)/);
  if (match) {
    const head = match[1];
    const hasOriginHead = run(`git rev-parse --verify --quiet origin/${head}`);
    if (hasOriginHead) return `origin/${head}`;
  }
  return base; // last resort
}

function getCurrentBranch(): string {
  const branch = run("git rev-parse --abbrev-ref HEAD");
  return branch || "(detached)";
}

function getMergeBase(base: string, head: string): string | null {
  const mb = run(`git merge-base ${base} ${head}`);
  return mb || null;
}

function formatDateTime(d: Date): string {
  // Use the user's local time; include offset
  const pad = (n: number) => n.toString().padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  const tz = -d.getTimezoneOffset();
  const sign = tz >= 0 ? "+" : "-";
  const tzh = pad(Math.floor(Math.abs(tz) / 60));
  const tzm = pad(Math.abs(tz) % 60);
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss} ${sign}${tzh}:${tzm}`;
}

function generate(): string {
  const args = process.argv.slice(2);
  const baseArg = args.find((a) => a.startsWith("--base="))?.split("=")[1];
  const section = (title: string, body: string) => `## ${title}\n${body}\n`;

  const headBranch = getCurrentBranch();
  const baseRef = detectBaseBranch(baseArg);

  // Ensure we have up-to-date remote info (best-effort; ignore errors)
  run("git fetch --all --prune");

  const mergeBase = getMergeBase(baseRef, "HEAD") || baseRef;

  const shortstat = run(`git diff --shortstat ${mergeBase}..HEAD`);
  const filesChangedList = run(`git diff --name-status ${mergeBase}..HEAD`);
  const commits = run(
    `git log --no-merges --pretty=format:"- %h %s (%an, %ad)" --date=short ${mergeBase}..HEAD`
  );

  // Try to propose a title from the most recent commit subject
  const latestSubject = run(`git log -1 --pretty=%s`);
  const defaultTitle = latestSubject ? latestSubject : `Update: ${headBranch}`;

  const now = new Date();
  const nowStr = formatDateTime(now);

  const overview = [
    `Base: ${baseRef}`,
    `Head: ${headBranch}`,
    shortstat ? `Stats: ${shortstat}` : "Stats: No differences detected",
  ].join("\n\n");

  const changes = `Describe the purpose and high-level changes introduced in this branch.\n\n- What problem does this solve?\n- Why is this approach chosen?\n- Any user-facing impacts or screenshots (if applicable)?`;

  const commitsBody = commits || "(No commits differ from base)";

  const filesBody = filesChangedList
    ? filesChangedList
        .split(/\r?\n/)
        .filter(Boolean)
        .map((line) => {
          // Example formats: "M\tpath", "A\tpath", "R100\told\tnew"
          const parts = line.split(/\t/);
          if (parts[0].startsWith("R")) {
            const status = parts[0];
            const from = parts[1];
            const to = parts[2];
            return `- ${status}: ${from} → ${to}`;
          }
          const status = parts[0];
          const file = parts[1];
          return `- ${status}: ${file}`;
        })
        .join("\n")
    : "(No files changed)";

  const checklist = [
    "- [ ] Code builds locally (npm run build)",
    "- [ ] Lint passes (npm run lint)",
    "- [ ] Tests added/updated if needed (npx vitest run)",
    "- [ ] Docs/README updated if behaviour changed",
    "- [ ] No sensitive secrets or keys committed",
  ].join("\n");

  const metadata = [`Generated: ${nowStr}`, `Generator: builders/GeneratePrDescription.ts`].join(
    "\n"
  );

  const header = `# ${defaultTitle}`;

  const body = [
    section("Overview", overview),
    section("Changes", changes),
    section("Commits", commitsBody),
    section("Files Changed", filesBody),
    section("Checklist", checklist),
    section("Metadata", metadata),
  ].join("\n");

  return `${header}\n\n${body}`;
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith("GeneratePrDescription.ts")) {
  const output = generate();
  console.log(output);
}

export {};