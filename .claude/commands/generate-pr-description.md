---
description: Prepare a new version release — CHANGELOG.md, RELEASE_NOTES.md, HISTORY.md, reverse-synced docs, and an archived release PR description — following AGENTS.md's Release Checklist.
argument-hint: [version, e.g. 5.0.0 — defaults to package.json's current version]
allowed-tools: Bash(git log:*), Bash(git diff:*), Bash(git --no-pager diff:*), Bash(git branch:*), Bash(grep:*), Bash(cp:*), Bash(mkdir:*), Read, Edit, Write
---

# Generate New Version PR

Prepare a release for version: $1 (if omitted, use package.json's current `version` field, shown below)

## 🔍 Current state

Branch:
!`git branch --show-current`

package.json version:
!`grep -m1 "\"version\"" package.json`

CHANGELOG.md's Unreleased section:
!`grep -A 20 "^### 🧪 \[Unreleased\]" CHANGELOG.md`

Changes relative to main:
!`git --no-pager diff --stat main...HEAD`

Commit log relative to main:
!`git log main..HEAD --oneline`

Conventions to follow: @AGENTS.md @CLAUDE.md

## 🚀 Instructions

Read and strictly follow **all conventions defined in AGENTS.md and CLAUDE.md** (both loaded above) — in particular AGENTS.md's **Release Checklist**, **Documentation Conventions**, **Git Workflow** (Branching Model), and **Evergreen Documentation** (reverse sync rule) sections, and CLAUDE.md for accurate technical detail (build/test/lint commands, path aliases, architecture) when writing `RELEASE_NOTES.md`/the PR description. Treat both as the single source of truth; do not reinterpret or contradict their rules. Follow the Release Checklist steps **in order** — the version number and date must be final before anything downstream references them.

This project's checklist has no OpenAPI version to bump, but it does extend `HISTORY.md`, since that file narrates the project's full evolution (all versions, not just a closed legacy line), and it does archive each version's `RELEASE_NOTES.md` snapshot and PR description into `documentation/history/`.

Steps:
1. **Confirm the diff against `main`** (shown above) covers everything that changed for this release — re-run `git log main..HEAD` / `git diff --stat main...HEAD` yourself if the branch has moved on since this command started.
2. **Resolve the target version.** Use `$1` if given; otherwise use package.json's current version (shown above). If package.json's `version` field doesn't already equal the target version, bump it now (Release Checklist step 1).
3. **Promote the `### 🧪 [Unreleased]` section to the dated version entry.** Rename it `### 🧾 [<target>] - YYYY-MM-DD`, keeping only the categories that actually have entries (`➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`) and their `##### <Area>` subheadings. Add the new version to the Table of Contents, move the "← Current" marker onto it, then start a fresh, fully-empty `### 🧪 [Unreleased]` section above it (six empty category headings: `➕ Added`, `🔄 Changed`, `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`).
   - Cover **everything** that changed for this release across the full `main...HEAD` diff, not just what's already under Unreleased — fold in anything missing before renaming.
4. **Replace `RELEASE_NOTES.md`.** Unlike `CHANGELOG.md`, this file holds only the *current* release. Follow this section order: **Theme** (one line naming the release's focus, matching the Theme going into the `HISTORY.md` entry in step 6) → **Key Highlights** (a short bullet list of the release's most notable points, matching that entry's Key Focus bullets) → the categorised change list (same categories and Area subheadings as the new CHANGELOG entry, without the Table of Contents). **Replace** the previous version's content outright rather than appending to it.
5. **Verify links and dates.** Confirm the `version-<target>` tag slug and the `YYYY-MM-DD` date match between `CHANGELOG.md` and `RELEASE_NOTES.md`.
6. **Extend `HISTORY.md`.** Add a new Historical Timeline entry (Theme and Key Focus bullets, placed at the top to keep reverse chronological order). If the release is significant enough to have shifted the project's trajectory, also thread it through Evolution Overview's Phases, Major Milestones, Architectural Evolution, Feature Timeline, Project Philosophy Evolution, Key Learnings, Future Roadmap Implications, and the Conclusion — use the immediately preceding version's treatment as the template. A routine patch release may only need the Historical Timeline entry.
7. **Apply the reverse sync rule.** Check whether any of this release's changes are relevant to `README.md` (goal, tech stack, quick start), `ARCHITECTURE.md` (project structure, core concepts, build/tooling), or `UI.md` (layout, navigation, design) and update those files accordingly — keeping all three release-agnostic per AGENTS.md's Evergreen Documentation rules (no version numbers, no drifting counts, no version-coupled narrative).
8. **Archive `RELEASE_NOTES.md`.** Once finalised, copy it byte-for-byte (no edits, no trimming) to `documentation/history/RELEASE_NOTES_v<target>.md` (create the `documentation/history/` folder first if it doesn't exist yet).
9. **Write `documentation/history/PR_DESCRIPTION_v<target>.md`** — the release PR's body text. Keep it small — a PR body, not a second `RELEASE_NOTES.md`: a few bullets per section, high-level only. Structure:
   - `## 🎯 Summary` — two to four bullets on what the release is and why
   - `## 📦 Key Changes` — condensed from the CHANGELOG entry's categories actually used, high-level rather than exhaustive
   - `## 🧪 Test Plan` — checklist of what was verified (`npm run lint`, `npm run build`, `npm test`, manual checks)
   - `## 🔗 Related Documentation` — links to the new `CHANGELOG.md` entry, `RELEASE_NOTES.md`, and the new `HISTORY.md` Historical Timeline entry

Commit these in logical chunks per AGENTS.md's Git Workflow — the version bump, the CHANGELOG/RELEASE_NOTES/HISTORY documentation, any README/ARCHITECTURE/UI reverse-sync updates, and the archived `documentation/history/` files are separate concerns unless trivially small. Do not run `git commit`, `git push`, or open the PR yourself — draft the files and stop for review.

## 📤 Output

1. A summary of the files written/updated
2. The contents of `documentation/history/PR_DESCRIPTION_v<target>.md` as a fenced Markdown block, ready to paste when opening the PR
3. Tell the user the release branch (`release/v<target>`, per the GitFlow branching model in AGENTS.md) is ready to open as a PR against `develop`, using `documentation/history/PR_DESCRIPTION_v<target>.md` as the PR body. Once that PR merges, remind them a second PR promoting `develop` into `main` is still needed to actually ship the release — tag the resulting commit on `main` as `version-<target>` (this project's tag format, matching the links used in `CHANGELOG.md`/`RELEASE_NOTES.md` — **not** `v<target>`).

Remind the user to run `npm run lint`, `npm run build`, and `npm test` before finishing, and confirm no version-specific info leaked into `README.md`/`ARCHITECTURE.md`/`UI.md`.
