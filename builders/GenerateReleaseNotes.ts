import { execSync } from "child_process";
import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

function run(cmd: string): string {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
  } catch {
    return "";
  }
}

function detectBaseBranch(argBase?: string): string {
  const base = argBase || process.env.PR_BASE || "main";
  const hasOriginBase = run(`git rev-parse --verify --quiet origin/${base}`);
  if (hasOriginBase) return `origin/${base}`;
  const hasLocalBase = run(`git rev-parse --verify --quiet ${base}`);
  if (hasLocalBase) return base;
  const upstream = run("git remote show origin");
  const match = upstream.match(/HEAD branch: (.+)/);
  if (match) {
    const head = match[1];
    const hasOriginHead = run(`git rev-parse --verify --quiet origin/${head}`);
    if (hasOriginHead) return `origin/${head}`;
  }
  return base;
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

function getPackageVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync("package.json", "utf-8"));
    return pkg.version || "0.0.0";
  } catch {
    return "0.0.0";
  }
}

type CommitRec = {
  hash: string;
  short: string;
  subject: string;
  author: string;
  date: string; // YYYY-MM-DD
  type: string; // feat, fix, chore, etc.
};

function parseCommitType(subject: string): string {
  const m = subject.match(/^([a-zA-Z]+)(\([^)]+\))?!?:\s/);
  if (m) {
    return m[1].toLowerCase();
  }
  // fallback: detect simple prefixes
  const lower = subject.toLowerCase();
  for (const t of ["feat", "fix", "perf", "refactor", "docs", "chore", "test", "build", "ci", "revert"]) {
    if (lower.startsWith(t + ":")) return t;
  }
  return "other";
}

function generate(): { markdown: string; outPath: string } {
  const args = process.argv.slice(2);
  const baseArg = args.find((a) => a.startsWith("--base="))?.split("=")[1];

  const headBranch = getCurrentBranch();
  const baseRef = detectBaseBranch(baseArg);

  // Best effort: refresh remotes
  run("git fetch --all --prune");

  const mergeBase = getMergeBase(baseRef, "HEAD") || baseRef;

  const shortstat = run(`git diff --shortstat ${mergeBase}..HEAD`);
  const filesChangedList = run(`git diff --name-status ${mergeBase}..HEAD`);

  const logFmt = "%H%x1f%h%x1f%s%x1f%an%x1f%ad"; // SEP = \x1f
  const rawCommits = run(`git log --no-merges --pretty=format:"${logFmt}" --date=short ${mergeBase}..HEAD`);

  const commits: CommitRec[] = rawCommits
    ? rawCommits.split(/\r?\n/).filter(Boolean).map((line) => {
        const [hash, short, subject, author, date] = line.split("\x1f");
        return { hash, short, subject, author, date, type: parseCommitType(subject) };
      })
    : [];

  const groups = new Map<string, CommitRec[]>();
  const knownTypes = ["feat", "fix", "perf", "refactor", "docs", "chore", "test", "build", "ci", "revert", "other"];
  for (const t of knownTypes) groups.set(t, []);
  for (const c of commits) {
    const key = knownTypes.includes(c.type) ? c.type : "other";
    groups.get(key)!.push(c);
  }

  const counts = {
    features: groups.get("feat")!.length,
    fixes: groups.get("fix")!.length,
    docs: groups.get("docs")!.length,
    refactors: groups.get("refactor")!.length,
    chores: groups.get("chore")!.length,
  };

  const version = getPackageVersion();
  const now = new Date();
  const nowStr = formatDateTime(now);

  const summarizeCounts = () => {
    const parts: string[] = [];
    if (counts.features) parts.push(`${counts.features} feature(s)`);
    if (counts.fixes) parts.push(`${counts.fixes} fix(es)`);
    if (counts.docs) parts.push(`${counts.docs} docs change(s)`);
    if (counts.refactors) parts.push(`${counts.refactors} refactor(s)`);
    if (counts.chores) parts.push(`${counts.chores} chore(s)`);
    return parts.length ? parts.join(", ") : "No categorised changes";
  };

  function section(title: string, body: string): string {
    return `## ${title}\n${body}\n`;
  }

  const header = `# Release Notes: v${version} — ${headBranch} → ${baseRef}\n\nGenerated: ${nowStr}`;

  const overviewLines = [
    `Base: ${baseRef}`,
    `Head: ${headBranch}`,
    mergeBase ? `Merge-base: ${mergeBase}` : undefined,
    shortstat ? `Stats: ${shortstat}` : "Stats: No differences detected",
    `Summary: ${summarizeCounts()}`,
  ].filter(Boolean) as string[];

  const overview = overviewLines.join("\n\n");

  function renderGroup(label: string, type: string): string {
    const list = groups.get(type)!;
    if (!list.length) return "";
    const items = list.map((c) => `- ${c.short} ${c.subject} (${c.author}, ${c.date})`).join("\n");
    return section(label, items);
  }

  const filesBody = filesChangedList
    ? filesChangedList
        .split(/\r?\n/)
        .filter(Boolean)
        .map((line) => {
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

  const allCommitsBody = commits.length
    ? commits.map((c) => `- ${c.short} ${c.subject} (${c.author}, ${c.date})`).join("\n")
    : "(No commits differ from base)";

  const bodySections = [
    section("Overview", overview),
    renderGroup("Features", "feat"),
    renderGroup("Fixes", "fix"),
    renderGroup("Documentation", "docs"),
    renderGroup("Refactoring", "refactor"),
    renderGroup("Chores / Maintenance", "chore"),
    renderGroup("Performance", "perf"),
    renderGroup("Build / CI", "build") + renderGroup("CI", "ci"),
    renderGroup("Reverts", "revert"),
    section("Files Changed", filesBody),
    section("All Commits", allCommitsBody),
    section("Metadata", `Generator: builders/GenerateReleaseNotes.ts`),
  ].filter(Boolean).join("\n");

  const markdown = `${header}\n\n${bodySections}\n`;

  const baseName = baseRef.replace(/^origin\//, "");
  const fileName = `release-notes-${headBranch}-to-${baseName}.md`.replace(/[^a-zA-Z0-9_.-]/g, "_");
  const outDir = join("target");
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // ignore errors creating the directory; writeFile may fail later if path is invalid
  }
  const outPath = join(outDir, fileName);
  writeFileSync(outPath, markdown, "utf-8");

  return { markdown, outPath };
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith("GenerateReleaseNotes.ts")) {
  const { markdown, outPath } = generate();
  console.log(markdown);
  console.error(`\n[info] Release notes also written to: ${outPath}`);
}

export {};
