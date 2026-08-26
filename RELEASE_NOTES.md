# Release Notes – Version 5.0.0

**Release Date:** August 25, 2026
**Status:** ✨ Stable

## 🎯 Theme

**AI Agent Conventions & Release Process Foundations**

Version 5.0.0 establishes `AGENTS.md`/`CLAUDE.md` as this project's cross-tool AI agent conventions — documentation style, git workflow, and a Release Checklist — backed by five Claude Code slash commands and a new `CONTRIBUTING.md`. `CHANGELOG.md`/`HISTORY.md` are restructured into the icon-based Keep a Changelog format, and a `documentation/history/` per-version archive replaces the old `documentation/templates/` scaffold. Alongside the process work, `documentation/roadmap/IMPROVEMENT_PLAN.md`/`TASKS.md` turn ad-hoc improvement ideas into an evidence-backed, trackable backlog, email-related models are refactored and helpers relocated as internal clean-up, and all open GitHub Dependabot alerts are closed.

## ⭐ Key Highlights

### 🚢 AI Agent Conventions & Release Process

- Added `AGENTS.md`/`CLAUDE.md` cross-tool AI agent conventions and `CONTRIBUTING.md`, backed by five Claude Code slash commands (`/generate-commit-message`, `/generate-pr-description`, `/generate-pr-summary`, `/scaffold-unit-tests`, `/scaffold-integration-tests`)
- Restructured `CHANGELOG.md`/`HISTORY.md` into the icon-based Keep a Changelog format and introduced a `documentation/history/` per-version release archive, replacing the old `documentation/templates/` scaffold

### 📝 Improvement Backlog

- Added `documentation/roadmap/IMPROVEMENT_PLAN.md` — a synthesis of this project's own goals/constraints into eight evidence-backed gaps (each with its Evidence, Why it matters, and Proposed improvement) — and `TASKS.md`, its checkbox-level task breakdown

### ♻️ Email Model Refactor & Dependency Security

- Refactored email-related models: removed `EmailContent`, merging its functionality into `EmailMessage`; added an `EmailType` enum (`HTML`/`TEXT`); relocated `menuHelpers.tsx`/`routeHelpers.tsx` from `src/shared/helpers/` to `src/helpers/`
- Closed all open GitHub Dependabot alerts (1 critical, 25 high, 12 moderate, 2 low)

### 🐛 Build Fix

- Fixed `routeHelpers.tsx`/`menuHelpers.tsx` imports left as unresolvable bare `src/...` specifiers after the helpers relocation — these only type-checked (via `tsc`'s `baseUrl`) but broke `npm run build`

## 📦 What's New

### ➕ Added

#### Release Process

- Added a `documentation/history/` archive folder — each release now archives a `RELEASE_NOTES_vX.Y.Z.md` snapshot and a `PR_DESCRIPTION_vX.Y.Z.md`, and `RELEASE_NOTES.md` gains a Theme/Key Highlights lead-in — enabling the new `/generate-pr-summary` command, converted from a sibling project, to condense a release into a short Bitbucket-style PR summary

#### Build & Tooling

- Added five Claude Code slash commands under `.claude/commands/`: `/generate-commit-message` (drafts a commit message and matching `CHANGELOG.md` entry from the working tree diff), `/generate-pr-description` (prepares a new version release per the Release Checklist), `/generate-pr-summary` (condenses a release into a short PR summary), and `/scaffold-unit-tests`/`/scaffold-integration-tests` (scaffold Vitest unit/integration tests following this project's testing conventions)
- Added `build/` to `.gitignore`; replaced the blanket `.claude/` ignore entry with `.claude/*.local.json`, so `.claude/commands/` can be tracked while local-only Claude config stays ignored
- Added `.junie/` to `.gitignore`

#### Documentation

- Added `AGENTS.md` and `CLAUDE.md`, establishing cross-tool documentation conventions (British English, icon-headed sections, GFM tables, GitFlow git workflow, and the Release Checklist) shared by any AI coding agent working in this repository
- Added a Contributors convention to `AGENTS.md`'s Documentation Conventions — when docs credit contributors or authors, source the list from `git log`/GitHub history (including bot accounts) rather than assuming
- Added `CONTRIBUTING.md` with project setup, git workflow, documentation and testing conventions, and a pull request checklist, and linked it from `README.md`'s new Contributing section
- Added `documentation/roadmap/IMPROVEMENT_PLAN.md` — a synthesis of this project's own goals/constraints into eight evidence-backed gaps (each with its Evidence, Why it matters, and Proposed improvement), a Roadmap table, and Success Criteria — and added it to `AGENTS.md`'s Documentation File Map
- Added `documentation/roadmap/TASKS.md` — a checkbox-level task breakdown of `documentation/roadmap/IMPROVEMENT_PLAN.md`'s eight gaps, organised by the plan's Now/Next/Later/Ongoing phasing, each item tagging its originating gap number for traceability
- Added a "Working on Complex Tasks" section to `CLAUDE.md`, instructing use of the TodoWrite tool for multistep or non-trivial tasks, per `AGENTS.md`'s Git Workflow Conventions

### 🔄 Changed

#### Components & Helpers

- Refactored email-related models: removed `EmailContent`, merging its functionality into `EmailMessage`; added an `EmailType` enum (`HTML`/`TEXT`) under `src/enums/email/`; and moved `menuHelpers.tsx`/`routeHelpers.tsx` from `src/shared/helpers/` to `src/helpers/`, adjusting all dependent components (`ContactUsForm`, `ContactUsEmailTemplate`, and every feature's barrel `index.ts`)

#### Documentation

- Restructured `CHANGELOG.md` and `HISTORY.md` into the icon-based Keep a Changelog format, backfilling historical entries for prior versions
- Applied the icon-heading and section-separator convention to `README.md`, `ARCHITECTURE.md`, `UI.md`, and `RELEASE_NOTES.md`; documented the previously-missing `npm run host`, `npm test`, and `npm run sitemap` scripts in `README.md`; added a Theme/Key Highlights lead-in to `RELEASE_NOTES.md`'s 4.2.3 entry
- Renamed `documentation/roadmap/` to `documentation/roadmap-old/`, superseded by the recreated `documentation/roadmap/IMPROVEMENT_PLAN.md` and `documentation/roadmap/TASKS.md`; `documentation/roadmap-old/` is now a fully archived, no-longer-maintained snapshot. Updated the resulting stale cross-references in `AGENTS.md`, `CLAUDE.md`, and `CONTRIBUTING.md`
- Split `AGENTS.md`'s Documentation File Map into a new "Roadmap Planning" subsection for `documentation/roadmap/`'s two files, separate from the reference-material folders (`documentation/history/`, `documentation/recommendations/`) — it's the project's active improvement backlog, not standard documentation

### 🐛 Fixed

#### Build & Tooling

- Fixed broken `src/helpers/routeHelpers.tsx`/`menuHelpers.tsx` imports left as unresolvable bare `src/...` specifiers after the helpers relocation, which only type-checked (via `tsc`'s `baseUrl`) but broke `npm run build`; corrected them to the `@/` and `@shared` path aliases already used elsewhere, and fixed the `@helpers`/`@models`/`@utils`/`@constants` alias mappings in `vite.config.ts`/`tsconfig.app.json`, which still pointed at their pre-relocation `src/shared/*` locations

#### Documentation

- Fixed `UI.md`'s unlabelled Designers heading

### 🗑️ Removed

#### Documentation

- Removed `HISTORY.md`'s "🚀 Future Roadmap Implications" section and its Table of Contents entry — it restated the now-superseded `documentation/roadmap/tasks.md`/`plan.md` backlog

#### Release Process

- Removed the `documentation/templates/` scaffold (`CHANGELOG.md`/`RELEASE_NOTES.md` templates) — superseded by inline Release Checklist instructions in `AGENTS.md` and the new `documentation/history/` per-version archive

### 🔐 Security

#### Dependencies

- Updated `vitest`, `react-router`, `postcss`, `vite`, `sanitize-html`, `ws`, `js-yaml`, `nanoid`, `brace-expansion`, `fast-uri`, `immutable`, `linkify-it`, `markdown-it`, `socket.io-parser`, and `@babel/core` to their patched versions, closing all currently open GitHub Dependabot alerts (1 critical, 25 high, 12 moderate, 2 low)

## 🔄 Migration Guide

### For Deployers

- **No schema, environment variable, or deployment changes in this release** — documentation, tooling, and an internal model refactor only.

### For Developers

- **`EmailContent` removed** — use `EmailMessage` directly; select the email format via the new `EmailType` enum (`HTML`/`TEXT`).
- **`menuHelpers.tsx`/`routeHelpers.tsx` moved** from `src/shared/helpers/` to `src/helpers/` — update any local imports still referencing the old path.
- **`npm run build` is fixed** in this release; it was broken by the helpers-relocation import and path-alias bugs listed above.

## 📊 Statistics

- **Total Commits:** 17
- **Files Changed:** 26 (+1,303 / −700 lines)

## 🧭 Design Notes

- **Separate the release archive from the working docs.** `documentation/history/` replaces the old `documentation/templates/` scaffold, so each release's `RELEASE_NOTES.md`/PR description stays individually referenceable instead of being overwritten by the next release.
- **A broken build can hide behind a passing type-check.** `tsc`'s `baseUrl` resolved the post-relocation `routeHelpers`/`menuHelpers` imports well enough to type-check, but `npm run build` (Vite's actual bundler resolution) failed — a reminder to run the real build, not just `tsc`, before trusting a refactor.

## 🧪 Testing

- `npm run lint` — 0 errors (pre-existing warnings only, plus unrelated errors in the gitignored, locally-generated `/target/docs/` output)
- `npm run build` — was broken by the `routeHelpers`/`menuHelpers` import and path-alias bugs above; passes after the fix
- `npm test` — no test files exist yet in this repository (tracked in `documentation/roadmap/TASKS.md`)
- Manually confirmed the Contact Us form still sends e-mail correctly after the `EmailMessage`/`EmailType` refactor
- Manually confirmed no version-specific detail leaked into `README.md`/`ARCHITECTURE.md`/`UI.md`

## 🐛 Known Issues

- No CI workflow runs `npm run lint`/`npm run build`/`npm test` automatically — only CodeQL runs on push/PR (`documentation/roadmap/TASKS.md` → Gap #1)
- `News` isn't wired into routing, and the Contact Us route's `dateCreated`/`dateUpdated` metadata is inverted (`documentation/roadmap/TASKS.md` → Gap #2)
- No automated test coverage exists yet — `npm test` has no test files (`documentation/roadmap/TASKS.md` → Gap #3)

## 🔮 Future Enhancements

- Add a CI workflow (`.github/workflows/build.yml`) that runs `npm run lint`, `npm run build`, and `npm test` on push/PR
- Wire `News` into routing (or remove it) and fix the Contact Us route's inverted dates
- Establish initial Vitest test coverage with a `jsdom` environment

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release is primarily a documentation and process-tooling milestone — establishing AI agent conventions, a release archive, and an improvement backlog — alongside a small internal email-model refactor and the build fix it required. No page content, routing, or user-facing behaviour changed.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
