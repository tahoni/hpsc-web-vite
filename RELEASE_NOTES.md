# HPSC Website

## 🧾 Release Notes

### [5.0.0] - 2026-08-25

**Theme:** AI Agent Conventions & Release Process Foundations

**Key Highlights:**

- Added `AGENTS.md`/`CLAUDE.md` cross-tool AI agent conventions and five Claude Code slash commands (`/generate-commit-message`, `/generate-pr-description`, `/generate-pr-summary`, `/scaffold-unit-tests`, `/scaffold-integration-tests`), plus `CONTRIBUTING.md`
- Restructured `CHANGELOG.md`/`HISTORY.md` into the icon-based Keep a Changelog format and introduced a `documentation/history/` per-version release archive
- Added `documentation/roadmap/IMPROVEMENT_PLAN.md`/`TASKS.md`, an evidence-backed improvement backlog
- Refactored email models (merged `EmailContent` into `EmailMessage`, added an `EmailType` enum) and relocated `menuHelpers`/`routeHelpers` to `src/helpers/`; closed all open GitHub Dependabot alerts (1 critical, 25 high, 12 moderate, 2 low)
- Fixed broken imports left behind by the helpers relocation, and stale `@helpers`/`@models`/`@utils`/`@constants` path aliases, which were breaking `npm run build`

#### ➕ Added

##### Release Process

- Added a `documentation/history/` archive folder — each release now archives a `RELEASE_NOTES_vX.Y.Z.md` snapshot and a `PR_DESCRIPTION_vX.Y.Z.md`, and `RELEASE_NOTES.md` gains a Theme/Key Highlights lead-in — enabling the new `/generate-pr-summary` command, converted from a sibling project, to condense a release into a short Bitbucket-style PR summary

##### Build & Tooling

- Added five Claude Code slash commands under `.claude/commands/`: `/generate-commit-message` (drafts a commit message and matching `CHANGELOG.md` entry from the working tree diff), `/generate-pr-description` (prepares a new version release per the Release Checklist), `/generate-pr-summary` (condenses a release into a short PR summary), and `/scaffold-unit-tests`/`/scaffold-integration-tests` (scaffold Vitest unit/integration tests following this project's testing conventions)
- Added `build/` to `.gitignore`; replaced the blanket `.claude/` ignore entry with `.claude/*.local.json`, so `.claude/commands/` can be tracked while local-only Claude config stays ignored
- Added `.junie/` to `.gitignore`

##### Documentation

- Added `AGENTS.md` and `CLAUDE.md`, establishing cross-tool documentation conventions (British English, icon-headed sections, GFM tables, GitFlow git workflow, and the Release Checklist) shared by any AI coding agent working in this repository
- Added a Contributors convention to `AGENTS.md`'s Documentation Conventions — when docs credit contributors or authors, source the list from `git log`/GitHub history (including bot accounts) rather than assuming
- Added `CONTRIBUTING.md` with project setup, git workflow, documentation and testing conventions, and a pull request checklist, and linked it from `README.md`'s new Contributing section
- Added `documentation/roadmap/IMPROVEMENT_PLAN.md` — a synthesis of this project's own goals/constraints into eight evidence-backed gaps (each with its Evidence, Why it matters, and Proposed improvement), a Roadmap table, and Success Criteria — and added it to `AGENTS.md`'s Documentation File Map
- Added `documentation/roadmap/TASKS.md` — a checkbox-level task breakdown of `documentation/roadmap/IMPROVEMENT_PLAN.md`'s eight gaps, organised by the plan's Now/Next/Later/Ongoing phasing, each item tagging its originating gap number for traceability
- Added a "Working on Complex Tasks" section to `CLAUDE.md`, instructing use of the TodoWrite tool for multistep or non-trivial tasks, per `AGENTS.md`'s Git Workflow Conventions

#### 🔄 Changed

##### Components & Helpers

- Refactored email-related models: removed `EmailContent`, merging its functionality into `EmailMessage`; added an `EmailType` enum (`HTML`/`TEXT`) under `src/enums/email/`; and moved `menuHelpers.tsx`/`routeHelpers.tsx` from `src/shared/helpers/` to `src/helpers/`, adjusting all dependent components (`ContactUsForm`, `ContactUsEmailTemplate`, and every feature's barrel `index.ts`)

##### Documentation

- Restructured `CHANGELOG.md` and `HISTORY.md` into the icon-based Keep a Changelog format, backfilling historical entries for prior versions
- Applied the icon-heading and section-separator convention to `README.md`, `ARCHITECTURE.md`, `UI.md`, and `RELEASE_NOTES.md`; documented the previously-missing `npm run host`, `npm test`, and `npm run sitemap` scripts in `README.md`; added a Theme/Key Highlights lead-in to `RELEASE_NOTES.md`'s 4.2.3 entry
- Renamed `documentation/roadmap/` to `documentation/roadmap-old/`, superseded by the recreated `documentation/roadmap/IMPROVEMENT_PLAN.md` and `documentation/roadmap/TASKS.md`; `documentation/roadmap-old/` is now a fully archived, no-longer-maintained snapshot. Updated the resulting stale cross-references in `AGENTS.md`, `CLAUDE.md`, and `CONTRIBUTING.md`
- Split `AGENTS.md`'s Documentation File Map into a new "Roadmap Planning" subsection for `documentation/roadmap/`'s two files, separate from the reference-material folders (`documentation/history/`, `documentation/recommendations/`) — it's the project's active improvement backlog, not standard documentation

#### 🐛 Fixed

##### Build & Tooling

- Fixed broken `src/helpers/routeHelpers.tsx`/`menuHelpers.tsx` imports left as unresolvable bare `src/...` specifiers after the helpers relocation, which only type-checked (via `tsc`'s `baseUrl`) but broke `npm run build`; corrected them to the `@/` and `@shared` path aliases already used elsewhere, and fixed the `@helpers`/`@models`/`@utils`/`@constants` alias mappings in `vite.config.ts`/`tsconfig.app.json`, which still pointed at their pre-relocation `src/shared/*` locations

##### Documentation

- Fixed `UI.md`'s unlabelled Designers heading

#### 🗑️ Removed

##### Documentation

- Removed `HISTORY.md`'s "🚀 Future Roadmap Implications" section and its Table of Contents entry — it restated the now-superseded `documentation/roadmap/tasks.md`/`plan.md` backlog

##### Release Process

- Removed the `documentation/templates/` scaffold (`CHANGELOG.md`/`RELEASE_NOTES.md` templates) — superseded by inline Release Checklist instructions in `AGENTS.md` and the new `documentation/history/` per-version archive

#### 🔐 Security

##### Dependencies

- Updated `vitest`, `react-router`, `postcss`, `vite`, `sanitize-html`, `ws`, `js-yaml`, `nanoid`, `brace-expansion`, `fast-uri`, `immutable`, `linkify-it`, `markdown-it`, `socket.io-parser`, and `@babel/core` to their patched versions, closing all currently open GitHub Dependabot alerts (1 critical, 25 high, 12 moderate, 2 low)
