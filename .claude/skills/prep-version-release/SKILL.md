---
name: prep-version-release
description: Prepare a new version release — RELEASE_NOTES.md, CHANGELOG.md, HISTORY.md, reverse-synced docs and a draft release PR description — following AGENTS.md's Release Checklist. Use whenever the user is preparing/cutting a release PR or asks to draft release documentation for a version.
user-invocable: true
allowed-tools:
  - Bash(git log:*)
  - Bash(git --no-pager log:*)
  - Bash(git diff:*)
  - Bash(git --no-pager diff:*)
  - Bash(git branch:*)
  - Bash(git status:*)
  - Bash(git merge-base:*)
  - Read
  - Edit
  - Write
---

# Prepare Version Release

The version to prepare a release for is passed as `args` (e.g. `7.2.0`) — if not supplied, ask the user for it before
proceeding. The rest of this skill refers to that value as `$VERSION`.

## 🔍 Gather current state

Before drafting, run these yourself and read their output:

1. `git branch --show-current`
2. `git --no-pager diff --stat main...HEAD` (changes relative to `main`)
3. `git log main..HEAD --oneline` (commit log relative to `main`)
4. Read `AGENTS.md` in full for conventions.

## 🚀 Instructions

Read and strictly follow **all conventions defined in AGENTS.md** (loaded above) — in particular its **Release
Checklist**, **Documentation Conventions**, **Git Workflow** (Branching Model), **Evergreen Documentation** (reverse
sync rule), **Build & Run Commands** and **Architecture Overview** sections for accurate technical detail (build/test
commands, directory layout) when writing `RELEASE_NOTES.md`/the PR description. Treat it as the single source of
truth; do not reinterpret or contradict its rules. Follow the Release Checklist steps **in order** — the version
number and date must be final before anything downstream references them.

Steps:

1. **Confirm the diff against `main`** (gathered above) covers everything that changed for this release — re-run
   `git log main..HEAD` / `git diff --stat main...HEAD` yourself if the branch has moved on since this skill started.
2. **Run the `update-improvement-plan-gaps` skill, then the `sync-improvement-plan-gaps` skill, in that order.** The
   first does a full codebase sweep for brand-new gaps against `documentation/roadmap/improvement-plan.md`/
   `improvement-plan-tasks.md`; the second then checks whether this branch's own diff has closed or progressed any of
   the gaps already tracked there (its own diff-gathering step needs the plan to already reflect anything new the
   first skill just found). Neither commits on its own — review their draft edits with the user before continuing.
   This satisfies AGENTS.md's Release Checklist step of checking the roadmap docs before starting version-specific
   work.
3. **Bump `package.json`.** Update the `version` field to `$VERSION`.
4. **Run the `sync-unreleased-changes` skill before touching CHANGELOG.md.** Release branches are cut from `develop`
   (per AGENTS.md's Branching Model), so invoke it with its default base (`develop`) — never skip this even if
   `[Unreleased]` looks complete: it cross-checks every commit and any uncommitted diff against the actual
   `[Unreleased]` entries, fills in anything missing, flags drifted entries and consolidates duplicate `##### <Area>`
   sub-headers. The next step renames `[Unreleased]` wholesale, so it must be fully accurate first. If it flags any
   entries as drifted, resolve those with the user before continuing — don't fold a flagged entry into the new version
   section unresolved.
5. **Promote `### 🧪 [Unreleased]` to a dated version entry.** Rename it `### 🧾 [$VERSION] - YYYY-MM-DD` (its
   entries now synced in the previous step), keeping only the categories that apply (`➕ Added`, `🔄 Changed`,
   `🐛 Fixed`, `⚠️ Deprecated`, `🗑️ Removed`, `🔐 Security`) and their `##### <Area>` subheadings. Update the Table of
   Contents and move the "← Current" marker to the new version, then start a fresh, fully-empty `### 🧪 [Unreleased]`
   section above it (six empty category headings).
6. **Replace `RELEASE_NOTES.md`.** Unlike `CHANGELOG.md`, this file holds only the *current* release. Follow the
   established section order: Theme → Key Highlights → What's New (Added/Changed/Fixed/Removed) → Migration Guide →
   Statistics → Design Notes → Testing → Known Issues → Future Enhancements → Contributors → Notes. Cover
   **everything** that changed for this version, not just the most recent commit. For the **Contributors** section,
   list every unique commit author on the release branch since it diverged from `main` — `git log main..HEAD
   --format='%an'` (or the equivalent GitHub "Contributors" view for the release's PRs), deduplicated — rather than a
   generic placeholder like "Development Team", and include every account found; bots (e.g. `dependabot[bot]`,
   `ImgBotApp`) included. Replace the previous version's content outright rather than appending to it.
7. **Verify links and dates.** Confirm the `version-$VERSION` tag slug and the `YYYY-MM-DD` date match between
   `CHANGELOG.md` and `RELEASE_NOTES.md`.
8. **Extend `HISTORY.md`.** Add a Historical Timeline entry, a Phase and a Milestone for `$VERSION`, at the same
   narrative depth and style as the existing entries, placed at the top (immediately below the Overview section) to keep
   reverse chronological order. If the release is significant enough to have shifted the project's trajectory, also
   thread it through the other version-by-version sections (Architectural Evolution, Feature Timeline, Key Learnings,
   Future Roadmap, Conclusion/footer), using the immediately preceding version's treatment as the template. Then
   check whether `documentation/roadmap/improvement-plan.md`'s "⚙️ Goals & Constraints" table needs a matching
   update — it's synthesised partly from `HISTORY.md`'s Future Roadmap Implications sections, so a change here can
   leave that table stale.
9. **Update `CONTRIBUTING.md`** only if this version's changes affect developer setup, environment variables,
   development scripts, git workflow or testing conventions documented there.
10. **Verify `ARCHITECTURE.md`'s Project Structure tree against disk.** Per-change Directory Tree Maintenance still
    lets drift slip through, so treat every release as a backstop: cross-check the tree against the actual repository
    structure and correct any directory that's missing, renamed or gone stale, including tracked tooling directories
    (`.claude/`, `.github/`) — not just `src/`.
11. **Apply the reverse sync rule**: check whether any of this version's changes are relevant to `README.md` (goal,
    tech stack, project structure, quick start), `ARCHITECTURE.md` (system design, layering, data flows) or `UI.md`
    (layout, navigation, design) and update those files accordingly — keeping all three release-agnostic (no version
    numbers or counts that drift, per AGENTS.md's Evergreen Documentation rules).
12. **Archive `RELEASE_NOTES.md`.** Once finalised, copy it byte-for-byte (no edits, no trimming) to
    `documentation/history/RELEASE_NOTES_v$VERSION.md`.
13. **Write `documentation/history/PR_DESCRIPTION_v$VERSION.md`** — the body text for the release pull request. Keep
    it small — a PR body, not a second `RELEASE_NOTES.md`: a few bullets per section, high-level only. Structure:
    - `## 🎯 Summary` — two to four bullets on what the release is and why
    - `## 📦 Key Changes` — condensed from the CHANGELOG entry's categories (Added/Changed/Fixed/Removed), high-level
      rather than exhaustive
    - `## 🧪 Test Plan` — checklist of what was verified (`npm run lint`, `npm run build`, `npm test`, manual checks)
    - `## 🔗 Related Documentation` — links to `RELEASE_NOTES.md`, `CHANGELOG.md`, `HISTORY.md`

Commit these in logical chunks per AGENTS.md's Git Workflow — the version bump, the CHANGELOG/HISTORY/RELEASE_NOTES
documentation, any README/ARCHITECTURE/UI reverse-sync updates and the PR description are separate concerns unless
trivially small. Do not run `git commit`, `git push` or open the PR yourself — draft the files and stop for review.

## 📤 Output

Once all files above are written, tell the user the release branch (`release/v$VERSION`) is ready to open as a PR
against `develop` (per the GitFlow branching model in AGENTS.md), using
`documentation/history/PR_DESCRIPTION_v$VERSION.md` as the PR body. Once that PR merges, remind them a second PR
promoting `develop` into `main` is still needed to actually ship the release — tag the resulting commit on `main` as
`version-$VERSION` (this project's tag format, matching the links used in `CHANGELOG.md`/`RELEASE_NOTES.md` — **not**
`v$VERSION`).

Remind the user to run `npm run lint`, `npm run build` and `npm test` before finishing, and confirm no
version-specific info leaked into `README.md`/`ARCHITECTURE.md`/`UI.md`.
