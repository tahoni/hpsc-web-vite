import { execSync } from "child_process";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

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
  const hasOriginBase = run(`git rev-parse --verify --quiet origin/${base}`);
  if (hasOriginBase) return `origin/${base}`;

  const hasLocalBase = run(`git rev-parse --verify --quiet ${base}`);
  if (hasLocalBase) return base;

  const upstream = run("git remote show origin");
  const match = upstream.match(/HEAD branch: (.+)/);
  if (match?.[1]) {
    const head = match[1];
    const hasOriginHead = run(`git rev-parse --verify --quiet origin/${head}`);
    if (hasOriginHead) return `origin/${head}`;
  }
  return base;
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
 * Reads and parses the package.json version field.
 */
function getPackageVersion(): string {
  try {
    const content = readFileSync("package.json", "utf-8");
    const pkg = JSON.parse(content) as { version?: string };
    return pkg.version ?? "0.0.0";
  } catch {
    return "0.0.0";
  }
}

/**
 * Represents a parsed Git commit record.
 */
interface CommitRecord {
  hash: string;
  short: string;
  subject: string;
  author: string;
  date: string; // YYYY-MM-DD
  type: string; // feat, fix, chore, etc.
}

/**
 * Known commit models for categorisation.
 */
const KNOWN_TYPES = [
  "feat",
  "fix",
  "perf",
  "refactor",
  "docs",
  "chore",
  "test",
  "build",
  "ci",
  "revert",
  "other",
] as const;

type CommitType = (typeof KNOWN_TYPES)[number];

/**
 * Parses the commit type from a conventional commit subject.
 */
function parseCommitType(subject: string): CommitType {
  const m = subject.match(/^([a-zA-Z]+)(?:\([^)]+\))?!?:\s/);
  if (m?.[1]) {
    const type = m[1].toLowerCase();
    if (KNOWN_TYPES.includes(type as CommitType)) {
      return type as CommitType;
    }
  }

  // Fallback: detect simple prefixes
  const lower = subject.toLowerCase();
  for (const t of KNOWN_TYPES) {
    if (lower.startsWith(t + ":")) return t;
  }

  return "other";
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
 * Result of the release notes generation.
 */
interface GenerateResult {
  markdown: string;
  outPath: string;
}

/**
 * Change count summary for the release.
 */
interface ChangeCounts {
  features: number;
  fixes: number;
  docs: number;
  refactors: number;
  chores: number;
}

/**
 * Generates a PR description based on Git history.
 */
function generate(): GenerateResult {
  const args = process.argv.slice(2);
  const baseArg = args.find((a) => a.startsWith("--base="))?.split("=")[1];

  const headBranch = getCurrentBranch();
  const baseRef = detectBaseBranch(baseArg);

  // Best effort: refresh remotes
  run("git fetch --all --prune");

  const mergeBase = getMergeBase(baseRef, "HEAD");

  const shortstat = run(`git diff --shortstat ${mergeBase}..HEAD`);
  const filesChangedList = run(`git diff --name-status ${mergeBase}..HEAD`);

  const logFmt = "%H%x1f%h%x1f%s%x1f%an%x1f%ad"; // SEP = \x1f
  const rawCommits = run(
    `git log --no-merges --pretty=format:"${logFmt}" --date=short ${mergeBase}..HEAD`,
  );

  const commits: CommitRecord[] = rawCommits
    ? rawCommits
        .split(/\r?\n/)
        .filter(Boolean)
        .map((line): CommitRecord => {
          const parts = line.split("\x1f");
          const [hash = "", short = "", subject = "", author = "", date = ""] =
            parts;
          return {
            hash,
            short,
            subject,
            author,
            date,
            type: parseCommitType(subject),
          };
        })
    : [];

  const groups = new Map<CommitType, CommitRecord[]>();
  for (const t of KNOWN_TYPES) {
    groups.set(t, []);
  }

  for (const c of commits) {
    const key = KNOWN_TYPES.includes(c.type as CommitType)
      ? (c.type as CommitType)
      : "other";
    const group = groups.get(key);
    if (group) {
      group.push(c);
    }
  }

  const counts: ChangeCounts = {
    features: groups.get("feat")?.length ?? 0,
    fixes: groups.get("fix")?.length ?? 0,
    docs: groups.get("docs")?.length ?? 0,
    refactors: groups.get("refactor")?.length ?? 0,
    chores: groups.get("chore")?.length ?? 0,
  };

  const version = getPackageVersion();
  const now = new Date();
  const nowStr = formatDateTime(now);

  const summarizeCounts = (): string => {
    const parts: string[] = [];
    if (counts.features) parts.push(`${counts.features} feature(s)`);
    if (counts.fixes) parts.push(`${counts.fixes} fix(es)`);
    if (counts.docs) parts.push(`${counts.docs} docs change(s)`);
    if (counts.refactors) parts.push(`${counts.refactors} refactor(s)`);
    if (counts.chores) parts.push(`${counts.chores} chore(s)`);
    return parts.length ? parts.join(", ") : "No categorised changes";
  };

  const header = `# Release Notes: v${version} — ${headBranch} → ${baseRef}\n\nGenerated: ${nowStr}`;

  const overviewLines = [
    `Base: ${baseRef}`,
    `Head: ${headBranch}`,
    mergeBase !== baseRef ? `Merge-base: ${mergeBase}` : null,
    shortstat ? `Stats: ${shortstat}` : "Stats: No differences detected",
    `Summary: ${summarizeCounts()}`,
  ].filter((line): line is string => line !== null);

  const overview = overviewLines.join("\n\n");

  function renderGroup(label: string, type: CommitType): string {
    const list = groups.get(type);
    if (!list || list.length === 0) return "";
    const items = list
      .map((c) => `- ${c.short} ${c.subject} (${c.author}, ${c.date})`)
      .join("\n");
    return section(label, items);
  }

  const filesBody = filesChangedList
    ? filesChangedList
        .split(/\r?\n/)
        .filter(Boolean)
        .map(parseFileChangeLine)
        .filter(Boolean)
        .join("\n")
    : "(No files changed)";

  const allCommitsBody = commits.length
    ? commits
        .map((c) => `- ${c.short} ${c.subject} (${c.author}, ${c.date})`)
        .join("\n")
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
  ]
    .filter(Boolean)
    .join("\n");

  const markdown = `${header}\n\n${bodySections}\n`;

  const baseName = baseRef.replace(/^origin\//, "");
  const fileName = `release-notes-${headBranch}-to-${baseName}.md`.replace(
    /[^a-zA-Z0-9_.-]/g,
    "_",
  );
  const outDir = join("target");

  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // Ignore errors creating the directory;
    // writeFile may fail later if a path is invalid
  }

  const outPath = join(outDir, fileName);
  writeFileSync(outPath, markdown, "utf-8");

  return { markdown, outPath };
}

// Execute when run directly
if (
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith("GenerateReleaseNotes.ts")
) {
  const { markdown, outPath } = generate();
  console.log(markdown);
  console.error(`\n[info] Release notes also written to: ${outPath}`);
}

export {};
