---
description: Audit the current branch's full diff against its base branch and ensure every notable change is reflected in CHANGELOG.md's Unreleased section, adding any missing entries.
argument-hint: [optional base branch to diff against — defaults to develop, or main for hotfix/* branches]
allowed-tools: Bash(git branch:*), Bash(git log:*), Bash(git diff:*), Bash(git --no-pager diff:*), Bash(git merge-base:*), Bash(grep:*), Read, Edit
---

# Sync Unreleased Changes

Base branch override: $ARGUMENTS (if omitted, resolve it per step 1 below)

## 🔍 Current state

Current branch:
!`git branch --show-current`

Commits ahead of develop:
!`git log develop..HEAD --oneline`

Diff stat vs develop:
!`git --no-pager diff --stat develop...HEAD`

Commits ahead of main:
!`git log main..HEAD --oneline`

CHANGELOG.md's Unreleased section:
!`grep -A 60 "^### 🧪 \[Unreleased\]" CHANGELOG.md`

Conventions to follow: @AGENTS.md

## 🚀 Instructions

Read and strictly follow AGENTS.md's **Git Workflow** section (loaded above) — in particular the Branching Model and the "Update `CHANGELOG.md` in the same change" convention. Treat it as the single source of truth; do not reinterpret or contradict its rules.

1. **Resolve the base branch.** Use `$ARGUMENTS` if given. Otherwise, per AGENTS.md's GitFlow branching model: if the current branch starts with `hotfix/`, the base is `main`; for every other branch (`feature/*`, `release/*`, or anything else), the base is `develop`.
2. **Confirm the diff is current**, re-running `git log <base>..HEAD --oneline` and `git --no-pager diff <base>...HEAD` yourself if the branch has moved on since this command started, or if you need full hunks rather than the stat summary shown above.
3. **Walk every commit and file in that diff** and check whether its notable, user/developer-facing effect already has a matching bullet in CHANGELOG.md's Unreleased section (shown above — re-fetch with a larger `grep -A` if it has grown past what's shown). A change is already covered if an existing bullet plainly describes it, even if the wording differs — don't duplicate.
4. **Skip non-notable changes** that this repository's own Keep a Changelog practice doesn't log:
   - Commits whose sole purpose is adding a previous commit's own CHANGELOG.md entry (a "Add CHANGELOG.md entry for X" commit doesn't need its own entry).
   - A version-bump commit at the very start of a release branch (logged implicitly by the version promotion itself, not as its own Unreleased bullet).
5. **Draft a bullet for every remaining gap**, following the same rules as `/generate-commit-message`'s CHANGELOG step:
   - Place it under the matching category heading (`#### ➕ Added`, `#### 🔄 Changed`, `#### 🐛 Fixed`, `#### ⚠️ Deprecated`, `#### 🗑️ Removed`, `#### 🔐 Security`) and, within it, the relevant `##### <Area>` sub-heading — reuse an existing Area already present in the Unreleased section or CHANGELOG.md's most recent version entry where one fits, rather than inventing a near-duplicate.
   - Be specific: name the actual component/file/behaviour changed and, where non-obvious, why. Backtick identifiers (component, file, constant, class). No vague statements like "improved tests" or "various fixes".
   - British English spelling, grammar, and punctuation throughout (e.g. "licence", "colour", "initialise"), per AGENTS.md's Documentation Conventions.
6. **Insert the missing bullets directly into `CHANGELOG.md`**, under their correct existing category/Area headings. Only add a new `##### <Area>` sub-heading if none of the existing ones genuinely fit; the six category headings already exist in every Unreleased section and should never need creating.
7. **Never remove or reword an existing bullet**, even one that looks stale or inaccurate — that's not this command's job. Flag it in your final report instead and let the user decide.
8. **Do not run `git add` or `git commit`** — stop after editing `CHANGELOG.md` for the user to review.

## 📤 Output

1. State which base branch was used and why.
2. A short list of the notable changes found in the diff, each marked already covered or newly added.
3. The bullets actually inserted into `CHANGELOG.md`, as a fenced `markdown` block, for the user to double-check against the diff.
4. If nothing was missing, say so plainly and confirm no edits were made.
5. Any existing Unreleased bullets that look stale or no longer match the diff — reported, not touched.
