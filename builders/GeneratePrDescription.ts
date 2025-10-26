import { execSync } from "child_process";

/**
 * Executes a shell command and returns the output as a trimmed string.
 * Returns an empty string if the command fails.
 */
function run(cmd: string): string {
  try {
    const output = execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] });
    return output.toString().trim();
  } catch {
    return "";
  }
}

/**
 * Detects the base branch for the PR, with fallback logic.
 */
function detectBaseBranch(argBase?: string): string {
  const base = argBase ?? process.env.PR_BASE ?? "main";

  // Prefer remote if available
  const hasOriginMain = run(`git rev-parse --verify --quiet origin/${base}`);
  if (hasOriginMain) return `origin/${base}`;

  const hasLocalBase = run(`git rev-parse --verify --quiet ${base}`);
  if (hasLocalBase) return base;

  // Fallback to the default branch from remote
  const upstream = run("git remote show origin");
  const match = upstream.match(/HEAD branch: (.+)/);
  if (match?.[1]) {
    const head = match[1];
    const hasOriginHead = run(`git rev-parse --verify --quiet origin/${head}`);
    if (hasOriginHead) return `origin/${head}`;
  }

  return base; // last resort
}

/**
 * Gets the current Git branch name.
 */
function getCurrentBranch(): string {
  const branch = run("git rev-parse --abbrev-ref HEAD");
  return branch || "(detached)";
}

/**
 * Gets the merge base between two Git references.
 */
function getMergeBase(base: string, head: string): string {
  const mb = run(`git merge-base ${base} ${head}`);
  return mb || base;
}

/**
 * Formats a Date object as a local datetime string with timezone.
 */
function formatDateTime(d: Date): string {
  const pad = (n: number): string => n.toString().padStart(2, "0");

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

/**
 * Creates a Markdown section with a title and body.
 */
function section(title: string, body: string): string {
  return `## ${title}\n${body}\n`;
}

/**
 * Parses a file change line from git diff output.
 */
function parseFileChangeLine(line: string): string {
  const parts = line.split(/\t/);
  const status = parts[0];

  if (!status) {
    return "";
  }

  if (status.startsWith("R")) {
    // Rename: "R100\told\tnew"
    const from = parts[1];
    const to = parts[2];
    if (from && to) {
      return `- ${status}: ${from} → ${to}`;
    }
  }

  // Add, Modify, Delete: "M\tpath"
  const file = parts[1];
  if (file) {
    return `- ${status}: ${file}`;
  }

  return "";
}

/**
 * Generates a PR description based on Git history.
 */
function generate(): string {
  const args = process.argv.slice(2);
  const baseArg = args.find((a) => a.startsWith("--base="))?.split("=")[1];

  const headBranch = getCurrentBranch();
  const baseRef = detectBaseBranch(baseArg);

  // Ensure we have up-to-date remote info (best-effort; ignore errors)
  run("git fetch --all --prune");

  const mergeBase = getMergeBase(baseRef, "HEAD");

  const shortstat = run(`git diff --shortstat ${mergeBase}..HEAD`);
  const filesChangedList = run(`git diff --name-status ${mergeBase}..HEAD`);
  const commits = run(
    `git log --no-merges --pretty=format:"- %h %s (%an, %ad)" --date=short ${mergeBase}..HEAD`,
  );

  // Try to propose a title from the most recent commit subject
  const latestSubject = run(`git log -1 --pretty=%s`);
  const defaultTitle = latestSubject || `Update: ${headBranch}`;

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
        .map(parseFileChangeLine)
        .filter(Boolean)
        .join("\n")
    : "(No files changed)";

  const checklist = [
    "- [ ] Code builds locally (npm run build)",
    "- [ ] Lint passes (npm run lint)",
    "- [ ] Tests added/updated if needed (npx vitest run)",
    "- [ ] Docs/README updated if behaviour changed",
    "- [ ] No sensitive secrets or keys committed",
  ].join("\n");

  const metadata = [
    `Generated: ${nowStr}`,
    `Generator: builders/GeneratePrDescription.ts`,
  ].join("\n");

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

// Execute when run directly
if (
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith("GeneratePrDescription.ts")
) {
  const output = generate();
  console.log(output);
}

export {};
