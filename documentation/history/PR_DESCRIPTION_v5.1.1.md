## 🎯 Summary

- Replaces all six `.claude/commands/` slash commands with eight `.claude/skills/` equivalents, synced and localised from the sibling `hpsc-web-springboot` repository
- Reconciles `AGENTS.md`/`CONTRIBUTING.md` against `hpsc-web-springboot`'s more recently updated conventions (section skeleton, icon registry, a new Serial Commas convention applied repo-wide) and links roughly 20 previously unlinked cross-references
- Fixes `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule being silently inert under ESLint 9's flat config despite being documented as enabled — surfaces 264 pre-existing warnings, tracked as a new roadmap gap rather than fixed outright
- Fixes a handful of concrete build/styling/import bugs found along the way: a chunk-size build warning, a Bootstrap theming regression, a dead CSS import, an inconsistent `Layout/` folder shape, an unresolved `@routes` alias and several relative imports that should have used the project's own path aliases

## 📦 Key Changes

- **Tooling (Added/Removed):** eight `.claude/skills/` added, replacing all six `.claude/commands/`
- **Documentation (Changed):** `AGENTS.md`/`CONTRIBUTING.md` restructured to match `hpsc-web-springboot`'s section skeleton and icon registry; new Serial Commas and Line Wrapping conventions applied repo-wide; `CLAUDE.md` trimmed to a thin pointer; `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md` restructured into a status-based grouping, with Gap #10 (`LICENSE.md` description) closed and Gaps #9/#11 tracked
- **Build & Tooling (Fixed):** `eslint.config.js`'s `tsdoc/syntax` rule wired up; the `@routes` path alias; `npm run build`'s chunk-size warning; relative imports in `EmailService.ts`/`HeaderMenu.tsx`/`AppRoutes.tsx` switched to `@models`/`@helpers` aliases
- **Styling/Components (Fixed):** a Bootstrap theming regression restoring the club's colour palette; a dead `src/index.css` import removed; `Layout.tsx` moved into its own `Layout/` folder
- **Dependencies (Removed):** `react-router-dom` (absorbed by `react-router` v8) and the now-unneeded `@babel/plugin-transform-runtime` override

## 🧪 Test Plan

- [x] `npm run lint` (0 errors; 264 `tsdoc/syntax` warnings newly surfaced — tracked as Gap #11 — plus pre-existing unrelated warnings)
- [x] `npm run build`
- [x] `npx tsc --noEmit`
- [x] `npm test` (no test files exist yet in this repository — tracked in `../roadmap/improvement-plan-tasks.md`)
- [ ] Manual: smoke-test the Bootstrap theming fix, the `Layout/` folder restructuring and the `react-router-dom` removal in a browser
- [ ] Manual: confirm no version-specific detail leaked into `README.md`/`ARCHITECTURE.md`/`UI.md`

## 🔗 Related Documentation

- [CHANGELOG.md — Version 5.1.1](../../CHANGELOG.md#-511---2026-09-04)
- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [HISTORY.md — Version 5.1.1](../../HISTORY.md#version-511-september-4-2026)
