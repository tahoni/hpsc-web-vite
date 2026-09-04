# Release Notes – Version 5.1.1

**Release Date:** September 4, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Documentation Conformance, Claude Code Skills Migration & TSDoc Enforcement**

Version 5.1.1 is a documentation- and tooling-focused release. The six `.claude/commands/` slash commands are fully
superseded by eight `.claude/skills/`, synced and localised from the sibling `hpsc-web-springboot` repository, which
had also drifted ahead on `AGENTS.md`'s section skeleton, icon registry and Serial Commas convention — this release
reconciles both repositories' conventions and threads the resulting rules through `CONTRIBUTING.md`. Along the way,
`eslint-plugin-tsdoc`'s `tsdoc/syntax` rule turned out to be silently disabled by ESLint 9's flat config despite being
documented as enforced; re-enabling it surfaces 264 pre-existing warnings, tracked as a new roadmap gap rather than
fixed outright in this release. A handful of concrete bugs also land: a chunk-size build warning, a Bootstrap theming
regression, a dead CSS import, an inconsistent `Layout/` folder shape, an unresolved `@routes` alias, and several
relative imports that should have used the project's own path aliases.

## ⭐ Key Highlights

### 🛠️ Claude Code Skills Migration

- Replaced all six `.claude/commands/` slash commands with eight `.claude/skills/` equivalents, synced and localised
  from `hpsc-web-springboot` (Spring Boot/Java content replaced with this project's npm/Vitest equivalents)

### ✍️ AGENTS.md/CONTRIBUTING.md Documentation Conformance

- Reconciled `AGENTS.md`'s section skeleton and icon registry against `hpsc-web-springboot`'s more recently updated
  copy; added a Serial Commas convention (retroactively applied repo-wide); linked roughly 20 previously unlinked
  `CONTRIBUTING.md`/`AGENTS.md` cross-references to their specific anchors
- Restructured `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md` into a
  ✅ Completed/🟡 Partially Completed/⚪ Open status grouping; found and closed a stale `LICENSE.md` description in
  `AGENTS.md` (Gap #10) and tracked two further gaps (#9, #11 — see Known Issues)

### 🐛 TSDoc Enforcement & Path Alias Fixes

- Fixed `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule being silently inert under ESLint 9's flat config despite being
  documented as enabled, surfacing 264 pre-existing warnings (tracked, not yet cleaned up — see Known Issues)
- Fixed several relative `../../`-style imports that should have used the project's own `@models`/`@helpers` aliases

### 🔧 Build & Routing Fixes

- Fixed a Bootstrap theming regression (components rendering with stock colours instead of the club's palette), a
  `npm run build` chunk-size warning, the unresolved `@routes` alias, a dead `src/index.css` import and an
  inconsistent `Layout/` folder shape

## 📦 What's New

### ➕ Added

#### Tooling

- Added eight Claude Code skills under `.claude/skills/` (`generate-commit-message`, `generate-pr-summary`,
  `prep-version-release`, `scaffold-integration-tests`, `scaffold-unit-tests`, `sync-improvement-plan-gaps`,
  `sync-unreleased-changes`, `update-improvement-plan-gaps`), synced from the sibling `hpsc-web-springboot`
  repository and localised for this project

#### Documentation

- Added the `🧬` (Data model / DTOs) icon to `AGENTS.md`'s Reserved icon sub-table, claimed in
  `hpsc-web-springboot`'s own icon registry since the reserved table was last synced

### 🔄 Changed

#### Documentation

- Renamed `documentation/roadmap/IMPROVEMENT_PLAN.md`/`TASKS.md` to `improvement-plan.md`/`improvement-plan-tasks.md`,
  matching the project's kebab-case file naming, updating every cross-reference
- Reflowed every root Markdown file to wrap prose at 100–120 characters per line instead of one unbroken line per
  paragraph, and documented the new Line Wrapping convention in `AGENTS.md`
- Centralised `CLAUDE.md`'s Project Overview, Architecture, Build & Run Commands, Environment Variables and Code
  Quality & CI content into `AGENTS.md`, so the full guidance is usable by any AI coding agent; `CLAUDE.md` is now a
  thin pointer plus its one Claude-Code-specific instruction
- Added a Serial Commas convention, a tracked-tooling-directories rule and three new Release Checklist steps to
  `AGENTS.md`, synced from `hpsc-web-springboot`; extended `CONTRIBUTING.md` to match
- Reconciled several icon meanings that had drifted from `hpsc-web-springboot`'s `AGENTS.md` (`🧩`, `✅`, and three
  more on a follow-up diff pass), introducing `🗂️`, `☑️`, `👍`, `🛣️`, `🌊` and `🧵` for the concepts each displaced;
  reordered `AGENTS.md`'s icon table by where each icon is first used
- Restructured `documentation/roadmap/improvement-plan.md`'s Gaps & Improvement Opportunities section (and its
  `improvement-plan-tasks.md` mirror) into a ✅ Completed/🟡 Partially Completed/⚪ Open status grouping; added Gap
  #9 (`HISTORY.md`'s referenced-but-missing "Future Roadmap Implications" section) and moved Gap #7 to Partially
  Completed
- Added a new `CONTRIBUTING.md` Directory Tree Maintenance section and icon-reuse/evergreen-doc guidance, extracted
  from `AGENTS.md`'s equivalent sections
- Linked roughly 20 previously unlinked "see `AGENTS.md`'s X section" cross-references in `CONTRIBUTING.md`/
  `AGENTS.md` to their specific anchors, matching `hpsc-web-springboot`'s `CONTRIBUTING.md`
- Replaced `CONTRIBUTING.md`'s Testing section's near-verbatim copy of `AGENTS.md`'s Test Conventions bullets with a
  pointer to `AGENTS.md#-test-conventions`, matching every other shared section in the file
- Added Gap #10 (`AGENTS.md`'s stale `LICENSE.md` description) and Gap #11 (264 pre-existing `tsdoc/syntax`
  warnings) to `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md`; Gap #10 closed in this same
  release (see Fixed below)

### 🐛 Fixed

#### Build & Tooling

- Fixed the `@routes` path alias in `vite.config.ts`/`tsconfig.app.json` resolving to the nonexistent `src/routes`
  instead of its actual location, `src/shared/routes`
- Fixed `npm run build`'s "chunks are larger than 500 kB" warning by splitting `react`/`react-dom`, `react-router`,
  `bootstrap`/`react-bootstrap`, `sweetalert2` and `@tahoni` into their own vendor chunks (514 kB → 242 kB), and
  corrected a `manualChunks` case matching the wrong `react-google-recaptcha` package name
- Fixed `eslint.config.js` missing `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule — ESLint 9's flat config takes
  precedence over the legacy `.eslintrc.cjs` mirror that actually had it, so `npm run lint` was silently skipping
  all TSDoc validation; surfaced 264 pre-existing warnings (tracked as Gap #11, not fixed in this release)
- Fixed `EmailService.ts`, `HeaderMenu.tsx` and `AppRoutes.tsx` importing via relative `../../`-style paths instead
  of the already-configured `@models`/`@helpers` aliases

#### Components

- Moved `Layout.tsx`/`Layout.module.scss`/`LayoutProps.ts` into a new `src/shared/layouts/Layout/` folder, matching
  every sibling layout's folder-per-component shape
- Fixed `SanitizedBaseInputTemplate.tsx`'s doc comment using the American spelling "sanitized" instead of "sanitised"

#### Styling

- Fixed Bootstrap component classes rendering with stock colours instead of the club's theme: `_forms.scss`
  independently `@use`d `bootstrap/scss/bootstrap` directly, compiling a second, unthemed copy that never saw the
  club's variable overrides
- Fixed `src/main.tsx` importing an empty, dead `src/index.css` left over from the Vite template default

#### Documentation

- Removed the Oxford comma throughout every root documentation file and the `documentation/roadmap`/
  `documentation/recommendations` files, applying the new Serial Commas convention retroactively
- Fixed structural and spelling conformance issues found in a full audit of `README.md`, `ARCHITECTURE.md`, `UI.md`,
  `PACKAGES.md` and `HISTORY.md` against `AGENTS.md`'s Documentation Conventions
- Fixed `README.md`'s Documentation table and `AGENTS.md`'s Documentation File Map describing `LICENSE.md` as "MIT
  License", when its actual content is a plain "All Rights Reserved" copyright notice
- Fixed inconsistent icon usage across `documentation/recommendations/`/`documentation/roadmap/` (four icons each
  reused for unrelated headings) and reconciled three more icon meanings against `hpsc-web-springboot`
- Restructured `AGENTS.md` and `CONTRIBUTING.md` to match `hpsc-web-springboot`'s section skeleton, and added
  `CONTRIBUTING.md`'s previously-missing Prerequisites, Architecture at a Glance, Roadmap, CI/CD & Quality Gates and
  Cutting a Release sections
- Fixed `AGENTS.md`'s Tech Stack section stating "Vite 6", two majors behind the actual `vite@^8.2.2`

### 🗑️ Removed

#### Build & Tooling

- Removed the six `.claude/commands/` slash commands, now fully superseded by their `.claude/skills/` equivalents
- Removed the now-unneeded `overrides` entry pinning `@babel/plugin-transform-runtime` in `package.json`

#### Dependencies

- Removed `react-router-dom` from `package.json` — it never published a `v8` release; `react-router` `v8` absorbed
  its DOM bindings (`BrowserRouter`, `Link`, etc.) into its main package, making the separate package redundant

## 🔄 Migration Guide

### For Deployers

- **No schema, environment variable or deployment changes in this release** — documentation, tooling and a handful
  of internal bug fixes only.

### For Developers

- **`.claude/commands/` removed.** Use the equivalent `.claude/skills/` instead (same names, same behaviour).
- **`react-router-dom` removed from `package.json`.** Import `BrowserRouter`/`Link`/etc. from `react-router` directly
  — `react-router` `v8` already absorbs `react-router-dom`'s exports.
- **`npm run lint` now surfaces 264 `tsdoc/syntax` warnings** it previously silently skipped (the rule is `"warn"`,
  not `"error"`, so this doesn't fail a lint run or block a merge) — see Known Issues.
- **New Serial Commas / Line Wrapping conventions** in `AGENTS.md` apply to any new or edited documentation prose.
- Run `npm install` after pulling to pick up the updated lockfile.

## 📊 Statistics

- **Total Commits:** 53
- **Files Changed:** 66 (+3,714 / −1,676 lines)

## 🧭 Design Notes

- **Sync sibling-repo conventions deliberately, not incrementally.** `hpsc-web-springboot`'s `AGENTS.md` had drifted
  ahead on its section skeleton, icon registry and Serial Commas convention since the last sync; this release
  reconciles both in full rather than picking up individual pieces piecemeal, so the two repositories' conventions
  stay comparable.
- **Track, don't silently absorb, a large enforcement backlog.** Re-enabling `tsdoc/syntax` surfaced 264 warnings
  across 65 files — rather than mass-editing doc comments as a side effect of a lint-config fix, this release records
  the backlog as Gap #11 and leaves it for a dedicated pass.

## 🧪 Testing

- `npm run lint` — 0 errors; 264 `tsdoc/syntax` warnings newly surfaced (tracked as Gap #11), plus 24 pre-existing
  `no-unused-vars`/`react-refresh` warnings unrelated to this release
- `npm run build` — passes
- `npx tsc --noEmit` — passes
- `npm test` — no test files exist yet in this repository (tracked in `documentation/roadmap/improvement-plan-tasks.md`)
- **Not performed:** a manual browser smoke test of the Bootstrap theming fix, the Layout folder restructuring or the
  removed `react-router-dom` import paths — recommended before merging to `main`

## 🐛 Known Issues

- No CI workflow runs `npm run lint`/`npm run build`/`npm test` automatically — only CodeQL runs on push/PR
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #1)
- `News` isn't wired into routing, and the Contact Us route's `dateCreated`/`dateUpdated` metadata is inverted
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #2)
- No automated test coverage exists yet — `npm test` has no test files
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #3)
- `HISTORY.md` doesn't have the "Future Roadmap Implications" section this plan and `AGENTS.md`'s Release Checklist
  reference (`documentation/roadmap/improvement-plan-tasks.md` → Gap #9)
- 264 `tsdoc/syntax` warnings, surfaced by this release's `eslint.config.js` fix, remain unfixed — the rule is
  `"warn"`, not `"error"`, so they don't fail a lint run (`documentation/roadmap/improvement-plan-tasks.md` → Gap #11)

## 🔮 Future Enhancements

- Add a CI workflow (`.github/workflows/build.yml`) that runs `npm run lint`, `npm run build` and `npm test` on
  push/PR
- Wire `News` into routing (or remove it) and fix the Contact Us route's inverted dates
- Establish initial Vitest test coverage with a `jsdom` environment
- Clear the 264 `tsdoc/syntax` warnings and escalate the rule from `"warn"` to `"error"`
- Decide whether `HISTORY.md` gains a "Future Roadmap Implications" section or the references to it are removed

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release is primarily documentation and tooling conformance work — migrating from `.claude/commands/` to
`.claude/skills/`, reconciling `AGENTS.md`/`CONTRIBUTING.md` against the sibling `hpsc-web-springboot` repository,
and re-enabling TSDoc lint enforcement — alongside a handful of concrete build, styling and import bug fixes. No
page content or user-facing routing was intentionally changed, though the Bootstrap theming fix does change rendered
component colours back to the club's palette.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
