---
description: Generate a commit message (and matching CHANGELOG.md entry) for the current working tree changes, following AGENTS.md's Git Workflow conventions.
argument-hint: [optional scope to narrow the message to]
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git --no-pager diff:*), Bash(git log:*), Bash(grep:*), Read, Edit
---

# Generate Commit Message

Optional scope narrowing: $ARGUMENTS (limit the message to specific files/areas; leave blank for all staged/unstaged changes)

## 🔍 Current state

Status:
!`git status --short`

Diff stat:
!`git --no-pager diff --stat`

Full diff (staged and unstaged):
!`git --no-pager diff HEAD`

CHANGELOG.md's Unreleased section:
!`grep -A 20 "^### 🧪 \[Unreleased\]" CHANGELOG.md`

Conventions to follow: @AGENTS.md @CLAUDE.md

## 🚀 Instructions

Read and strictly follow the **Git Workflow** section in AGENTS.md (loaded above), plus its **Build & Run Commands** and **Architecture Overview** sections for accurate technical detail when describing what changed. Treat AGENTS.md as the single source of truth; do not reinterpret or contradict its rules.

1. **Inspect the changes above**, do not guess — review the actual diff hunks so the message describes real behaviour, not assumptions. If `$ARGUMENTS` narrows the scope, only consider matching files.
2. **Compose the message**, matching this repo's actual style (see `git log` above for reference):
   - This repository does **not** use Conventional Commits prefixes (`feat:`, `fix:`, `docs:`, etc.) — per AGENTS.md's Git Workflow Conventions, commit messages are **plain, imperative-mood descriptions** of the change, e.g. `Refactor email-related models: remove EmailContent, merge functionality into EmailMessage and adjust dependent components` or `Bump version to 5.0.0 in package.json for major release`.
   - Lead with an imperative verb (Add/Fix/Update/Remove/Refactor/Bump/Rename…), name the specific thing changed, optionally followed by a colon and further detail, or a second sentence for an unrelated but small follow-on change in the same commit.
   - Backtick identifiers named in the message (component, file, constant, class).
   - Keep it specific and factual — avoid vague messages like "fixed stuff" or "updates".
3. **Draft `CHANGELOG.md` entries** for the notable changes, to go under `### 🧪 [Unreleased]` (shown above). Per AGENTS.md's Git Workflow conventions and Keep a Changelog:
   - Place each bullet under the matching category subheading — `#### ➕ Added`, `#### 🔄 Changed`, `#### 🐛 Fixed`, `#### ⚠️ Deprecated`, `#### 🗑️ Removed`, `#### 🔐 Security` — and, within it, the relevant `##### <Area>` sub-heading (e.g. `##### Components`, `##### Styling`, `##### Build & Tooling`, `##### Dependencies`, `##### Documentation` — reuse an existing Area from CHANGELOG.md's recent entries where one fits, rather than inventing a near-duplicate). A security-relevant dependency fix goes under `🔐 Security`, not `🔄 Changed`.
   - Each bullet should be specific — name the actual component/file/behaviour changed and, where non-obvious, why — not vague statements like "improved tests". Backtick identifiers.
4. **Group unrelated work**: if the diff contains clearly unrelated changes, propose separate commits with a message and separate CHANGELOG entries for each rather than forcing one message.
5. **British English** spelling, grammar, and punctuation throughout (e.g. "licence", "colour", "initialise"), per AGENTS.md's Documentation Conventions.
6. **Sanity-check against conventions**: no secrets or credentials referenced (check `.env.local` isn't touched), no vague messages, no Conventional Commits prefix accidentally introduced.

## 📤 Output

Do **not** run `git add` or `git commit` yourself — this command only drafts, for the user to review and run.

1. The final commit message(s) as fenced code blocks, each followed by a ready-to-run `git commit` command
2. Any **CHANGELOG.md additions** in a separate fenced code block (just the new bullets under their `#### <Category>` / `##### <Area>` headings, exactly as they should be inserted into the existing `### 🧪 [Unreleased]` section) so the user can copy it directly into CHANGELOG.md
3. If proposing multiple commits, output one message block and one commit command per commit, in the order they should be made, followed by a single consolidated CHANGELOG.md block with all entries

Example output structure:

**Commit 1:**
```
Add Claude Code commands for commit messages and release prep
```

```bash
git commit -m "Add Claude Code commands for commit messages and release prep" -- .claude/commands/
```

**CHANGELOG.md entries (under `### 🧪 [Unreleased]`):**
```markdown
#### ➕ Added

##### Tooling

- Added `/generate-commit-message` and `/generate-pr-description` Claude Code commands — draft commit messages, CHANGELOG entries, and release documentation from the working tree diff
```
