## 🎯 Summary

- Establishes `AGENTS.md`/`CLAUDE.md` as cross-tool AI agent conventions (documentation style, git workflow, Release Checklist), backed by five Claude Code slash commands and a new `CONTRIBUTING.md`
- Restructures `CHANGELOG.md`/`HISTORY.md` into an icon-based Keep a Changelog format and introduces a `documentation/history/` per-version release archive
- Adds `../roadmap/improvement-plan.md`/`improvement-plan-tasks.md`, turning ad-hoc improvement ideas into an evidence-backed, trackable backlog
- Refactors email models and relocates helpers as internal clean-up, and closes all open GitHub Dependabot alerts
- Fixes broken imports and stale path aliases left behind by the helpers relocation, which had been silently breaking `npm run build`

## 📦 Key Changes

- **Release Process & Build/Tooling:** `documentation/history/` archive folder; five Claude Code slash commands (`/generate-commit-message`, `/generate-pr-description`, `/generate-pr-summary`, `/scaffold-unit-tests`, `/scaffold-integration-tests`); `.gitignore` updated for `build/`, `.claude/commands/`, and `.junie/`
- **Documentation:** `AGENTS.md`, `CLAUDE.md`, and `CONTRIBUTING.md` added; `../roadmap/improvement-plan.md`/`improvement-plan-tasks.md` added; `CHANGELOG.md`/`HISTORY.md`/`README.md`/`ARCHITECTURE.md`/`UI.md`/`RELEASE_NOTES.md` restructured to the icon-heading convention; `UI.md`'s unlabelled Designers heading fixed
- **Components & Helpers:** `EmailContent` removed and merged into `EmailMessage`; new `EmailType` enum; `menuHelpers`/`routeHelpers` relocated to `src/helpers/`
- **Build & Tooling (Fixed):** corrected the `routeHelpers`/`menuHelpers` imports and the `@helpers`/`@models`/`@utils`/`@constants` path aliases in `vite.config.ts`/`tsconfig.app.json`, which had been broken since the helpers relocation and were failing `npm run build`
- **Removed:** the `documentation/templates/` scaffold and `HISTORY.md`'s superseded "Future Roadmap Implications" section
- **Security:** all currently open GitHub Dependabot alerts closed (1 critical, 25 high, 12 moderate, 2 low)

## 🧪 Test Plan

- [x] `npm run lint` (0 errors; pre-existing warnings only, plus unrelated errors in the gitignored, locally-generated `tsdocs/` output)
- [x] `npm run build` (was broken by the routeHelpers/menuHelpers import and path-alias bugs above; passes after the fix)
- [x] `npm test` (no test files exist yet in this repository — tracked in `../roadmap/improvement-plan-tasks.md`)
- [ ] Manual: confirm the Contact Us form still sends e-mail correctly after the `EmailMessage`/`EmailType` refactor
- [ ] Manual: confirm no version-specific detail leaked into `README.md`/`ARCHITECTURE.md`/`UI.md`

## 🔗 Related Documentation

- [CHANGELOG.md — Version 5.0.0](../../CHANGELOG.md#-500---2026-08-25)
- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [HISTORY.md — Version 5.0.0](../../HISTORY.md#version-500-august-25-2026)
