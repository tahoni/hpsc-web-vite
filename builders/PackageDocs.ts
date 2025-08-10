/**
 * Collect and print TSDoc package documentation blocks.
 *
 * Scans TypeScript/TSX sources under ./src and ./builders for comment blocks
 * containing the @packageDocumentation tag, extracts their content, and prints
 * a consolidated Markdown document to stdout. Redirect output to a file if needed.
 *
 * Usage:
 *   - npm run package-docs > target/package-docs.md
 *   - or: tsx builders/PackageDocs.ts > target/package-docs.md
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { cwd, stdout } from "node:process";

const ROOT = cwd();
const SCAN_DIRS = ["src", "builders"] as const;
const EXTENSIONS = new Set([".ts", ".tsx"]);

function walk(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    // Ignore node_modules/dist/target/public
    if (
      entry.name === "node_modules" ||
      entry.name === "dist" ||
      entry.name === "target" ||
      entry.name === "public"
    ) {
      continue;
    }
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile()) {
      const ext = entry.name.slice(entry.name.lastIndexOf("."));
      if (EXTENSIONS.has(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

function extractPackageDoc(content: string): string | null {
  // Find the first TSDoc block that contains @packageDocumentation
  // Pattern: /** ... */ containing @packageDocumentation
  const blockRegex = /\/\*\*([\s\S]*?)\*\//g;
  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(content)) !== null) {
    const block: string = match[1] ?? "";
    if (/@packageDocumentation\b/.test(block)) {
      // Normalise lines: remove leading * and spaces
      const lines = block
        .split(/\r?\n/)
        .map((line) => line.replace(/^\s*\*\s?/, ""))
        .map((line) => line.replace(/\s+$/g, ""));

      // Remove the @packageDocumentation tag line itself, keep the rest as a description
      const filtered = lines.filter((l) => !/^@packageDocumentation\b/.test(l));

      // Trim leading/trailing empty lines
      while (filtered.length > 0 && (filtered[0] ?? "").trim() === "")
        filtered.shift();
      while (
        filtered.length > 0 &&
        (filtered[filtered.length - 1] ?? "").trim() === ""
      )
        filtered.pop();

      const text = filtered.join("\n").trim();
      return text.length > 0 ? text : "(no additional description)";
    }
  }
  return null;
}

function main(): void {
  type Entry = { path: string; text: string };
  const entries: Entry[] = [];

  for (const dir of SCAN_DIRS) {
    const absDir = join(ROOT, dir);
    try {
      const st = statSync(absDir);
      if (!st.isDirectory()) continue;
    } catch {
      continue;
    }

    const files = walk(absDir);
    for (const file of files) {
      const content = readFileSync(file, "utf8");
      const doc = extractPackageDoc(content);
      if (doc) {
        entries.push({
          path: relative(ROOT, file).replace(/\\/g, "/"),
          text: doc,
        });
      }
    }
  }

  // Sort by path for stable output
  entries.sort((a, b) => a.path.localeCompare(b.path));

  // Print Markdown
  let out = "# Package Documentation\n\n";
  out += `Generated: ${new Date().toISOString()}\n\n`;
  for (const e of entries) {
    out += `## ${e.path}\n\n`;
    out += `${e.text}\n\n`;
  }

  stdout.write(out);
}

main();
