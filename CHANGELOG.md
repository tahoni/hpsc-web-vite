# HPSC Website

## 🧾 Change Log

All notable changes to the HPSC Website project are documented in this file. The format is based
on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The legacy Version 3.x line predates this Keep a Changelog structure; see [HISTORY.md](HISTORY.md) for a narrative
account of the project's full evolution, including that era, and the read-only
[documentation/archive/ARCHIVE.md](documentation/archive/ARCHIVE.md) for those versions' original GitHub release
notes.

---

### Table of Contents

- [🧪 Unreleased](#-unreleased)
- [🧾 Version 5.2.0](#-520---2026-09-06) ← Current
- [🧾 Version 5.1.3](#-513---2026-09-05)
- [🧾 Version 5.1.2](#-512---2026-09-04)
- [🧾 Version 5.1.1](#-511---2026-09-04)
- [🧾 Version 5.1.0](#-510---2026-08-26)
- [🧾 Version 5.0.0](#-500---2026-08-25)
- [🧾 Version 4.2.3](#-423---2026-05-04)
- [🧾 Version 4.2.2](#-422---2026-02-10)
- [🧾 Version 4.2.1](#-421---2026-01-20)
- [🧾 Version 4.2.0](#-420---2026-01-20)
- [🧾 Version 4.1.4](#-414---2026-01-19)
- [🧾 Version 4.1.3](#-413---2026-01-11)
- [🧾 Version 4.1.2](#-412---2026-01-03)
- [🧾 Version 4.1.1](#-411---2026-01-02)
- [🧾 Version 4.1.0](#-410---2025-12-30)
- [🧾 Version 4.0.3](#-403---2025-11-26)
- [🧾 Version 4.0.2](#-402---2025-11-26)
- [🧾 Version 4.0.1](#-401---2025-10-27)
- [🧾 Version 4.0.0](#-400---2025-08-17)
- [📋 Version Policy](#-version-policy)
- [🚀 Upgrade Guide](#-upgrade-guide)
- [🤝 Contributing](#-contributing)
- [💬 Support](#-support)

---

### 🧪 [Unreleased]

#### ➕ Added

#### 🔄 Changed

#### 🐛 Fixed

#### ⚠️ Deprecated

#### 🗑️ Removed

#### 🔐 Security

---

### 🧾 [5.2.0] - 2026-09-06

#### ➕ Added

##### Developer Experience

- Documented `VITE_SITE_URL` and `VITE_SHOW_BREAKPOINTS` in `.env.example`, matching the existing
  `VITE_GOOGLE_MAPS_API_KEY`/`VITE_RECAPTCHA_V2_SITE_KEY` style, and added JSDoc to `vite-env.d.ts`'s
  `ImportMetaEnv`/`ImportMeta` interfaces with per-property comments synced to `.env.example`'s descriptions

##### Build & Tooling

- Added `.github/workflows/build.yml`, running `npm run lint`, `npm run build` and `npm run test:run` on push/PR to
  `main` and `develop` (mirroring `codeql.yml`'s trigger branches), so lint/build/test failures now gate merges
  instead of relying entirely on contributor discipline
- Added an advisory-only `npm audit` step to `build.yml` (`continue-on-error: true`, so findings are reported
  without blocking merges); `npm audit` currently finds 0 vulnerabilities
- Added `eslint-plugin-jsx-a11y`'s `recommended` rule set to `eslint.config.js`/`.eslintrc.cjs` at its native
  (mostly `"error"`) severity — the codebase was already clean against it, so no `"warn"`-first transition (like
  `tsdoc/syntax`'s) was needed
- Added `*.mdx` to `.prettierignore`, since Prettier doesn't format MDX well

##### Testing

- Added `vitest.config.ts`, `mergeConfig`-ing `vite.config.ts` (so path aliases stay in sync) with
  `test.environment: "jsdom"`, and `jsdom` as a dev dependency
- Added a `test:run` script (`vitest run`) for a single CI-friendly run, used by `build.yml`'s Test step and
  documented in `README.md`/`AGENTS.md`
- Added the project's first tests: unit tests for `src/utils/htmlUtils.ts` (`sanitizeValue`, `nonBreakingHyphens`,
  `nonBreakingSpaces`) and a smoke test for `builders/RoutesSitemap.ts`'s `generateRoutesSitemap`

##### Routing & Sitemap

- Wired the `News` feature into the app's live routes (`coreRoutes` in `BaseRoutes.ts`, `RouteAliases.tsx`,
  `routeHelpers.tsx`'s `routes` array), lazy-loaded like every other page — `/news` was previously defined but
  unreachable; added a matching `/news` rewrite condition to `public/.htaccess`

##### Components

- Added a top-level `ErrorBoundary` (`src/shared/layouts/ErrorBoundary/`) wrapping `App.tsx`'s
  `<Suspense>`/`<AppRoutes />` tree, rendering a friendly, dependency-free fallback (reload button, link home)
  instead of a blank page on an unhandled render error; logs the caught error via `console.error`

##### Documentation

- Added `documentation/recommendations/project-accessibility-checklist.md`, a manual WCAG AA baseline checklist
  covering what `eslint-plugin-jsx-a11y` can't check statically (colour contrast, heading structure, focus order,
  link purpose), linked from `AGENTS.md`'s Linting bullet and `CONTRIBUTING.md`'s Pull Request Checklist
- Added a palette token map and a `@use`-based usage example to `src/assets/styles/_colors.scss`'s header docblock
- Added a "🚀 Future Roadmap Implications" section to `HISTORY.md`, between Key Learnings and Conclusion per
  `AGENTS.md`'s Release Checklist step 7 ordering, synthesising five forward-looking implications this project's
  history carries for Major Version 5's planned redesign and the standing roadmap gaps that precede it; closes
  improvement-plan.md's Gap #9

##### SEO

- Gave every page a unique `document.title`, `<meta name="description">` and `<link rel="canonical">`
  (`src/shared/pages/Page.tsx`, sourced from a new `PageMapping.description` field populated per route in
  `BaseRoutes.ts`), instead of every route sharing `index.html`'s one static set of tags

##### Release Process

- Documented a monthly dependency-update cadence in `AGENTS.md`'s Code Quality & CI section (run
  `npm outdated`/`npm audit` locally, triage Dependabot alerts, bump patch/minor versions routinely, extra scrutiny
  for `sanitize-html`/`react-google-recaptcha-v3`), and added a new Release Checklist step, "Review dependencies",
  so it's actually run at each release instead of only whenever someone remembers

#### 🔄 Changed

##### Styling

- Migrated `src/vendors/bootstrap/styles/index.scss` from the legacy `@import` to `@use`/`@forward` —
  `bootstrap/scss/functions`/`custom` are now `@use`d, and `bootstrap/scss/bootstrap` is `@forward`ed with a
  `with (...)` map configuring its variables from `_custom.scss`, so `@use "@bootstrap/styles/index" as *`
  consumers (`App.scss`, `_forms.scss`) still see Bootstrap's forwarded variables/mixins; verified the compiled CSS
  is unaffected (byte-identical bundle vs. the pre-migration `@import` output)

#### 🐛 Fixed

##### Developer Experience

- Fixed `baseUrl` in `src/constants/commonConstants.ts` being a hardcoded string literal instead of sourced from an
  environment variable: it now reads `import.meta.env?.VITE_SITE_URL ?? process.env.VITE_SITE_URL` (the
  `process.env` fallback keeps `builders/RoutesSitemap.ts` working when run standalone via `tsx`, outside Vite),
  defaulting to `https://www.hpsc.co.za` via `.env.production`; `index.html`'s canonical link now uses the same
  `%VITE_SITE_URL%` build-time substitution instead of a static href, so it can't drift from `baseUrl` again

##### Routing & Sitemap

- Fixed `coreContactUsRoute`'s inverted `dateCreated`/`dateUpdated` in `BaseRoutes.ts` (`dateCreated` postdated
  `dateUpdated` by over nine months) and `public/sitemap.xml`'s malformed first `<loc>` entry
  (`https: www.hpsc.co.za`, missing slashes); regenerated the sitemap via `npm run sitemap`, now including
  `/contact` and `/news` (9 URLs total)
- Fixed `/contact` and `/venues` being commented out of `routeHelpers.tsx`'s `routes` array, despite both already
  being indexed in `public/sitemap.xml` and whitelisted in `public/.htaccess` — either URL previously rendered a
  blank page inside the site chrome; both pages are now reachable by direct URL. Both were intentionally left out
  of `menuHelpers.tsx`'s `menuItems` (the primary navigation menu)

##### Build & Tooling

- Fixed two `'process' is not defined` ESLint errors (`commonConstants.ts`, `vite.config.ts`) by adding
  `globals.node`/`env: { node: true }` to `eslint.config.js`/`.eslintrc.cjs`, which previously only declared browser
  globals despite this project's Node-side build scripts

##### Testing

- Guarded `builders/RoutesSitemap.ts`'s module-level `generateRoutesSitemap().then(...)` call behind an
  is-run-as-script check, so importing it for tests no longer triggers a real sitemap generation as a side effect

##### Components

- Fixed `Breakpoints.tsx` comparing `import.meta.env.VITE_SHOW_BREAKPOINTS` truthily instead of against the string
  `"true"` — a literal `VITE_SHOW_BREAKPOINTS=false` would have shown breakpoints instead of hiding them, since only
  an empty/unset value is falsy for a non-empty string; corrected `vite-env.d.ts`'s `ImportMetaEnv` typing for it
  from `boolean` to `string` to match

##### Documentation

- Fixed `CONTRIBUTING.md`'s Pull Request Checklist and `AGENTS.md`'s Code Quality & CI section still claiming no CI
  workflow runs `npm run build` automatically, and naming `npm test` instead of the actual `npm run test:run`
  `build.yml` uses
- Fixed `CONTRIBUTING.md`'s "CI/CD & Quality Gates" and "Testing" sections still claiming no CI workflow or test
  files exist, both closed earlier in this release by `build.yml` and the initial Vitest coverage
- Removed the non-standard `@module` JSDoc tag (invalid TSDoc syntax, one of the sources behind Gap #11's 264
  `tsdoc/syntax` warnings) from `builders/RoutesSitemap.ts`, `menuHelpers.tsx`, `main.tsx`, `BaseRoutes.ts`,
  `RouteAliases.tsx` and `htmlUtils.ts`
- Fixed `AGENTS.md`'s Release Checklist step 7 thread-through list omitting "Major Version Goals", a `HISTORY.md`
  section it never mentioned despite the section existing since `5.0.0`
- Fixed `improvement-plan.md`'s Purpose & Scope and 📚 Related Documentation sections describing `HISTORY.md`'s
  "🚀 Future Roadmap Implications" section as "per-release", which never matched its actual synthesised design

---

### 🧾 [5.1.3] - 2026-09-05

#### ➕ Added

##### Developer Experience

- Added a secret-free `.env.example` documenting `VITE_GOOGLE_MAPS_API_KEY` and `VITE_RECAPTCHA_V2_SITE_KEY` (plus
  guidance for `NPM_TOKEN_READ`, which isn't read from a `.env` file), so a new contributor can see every required
  environment variable in one place without reading `AGENTS.md`/`README.md` first

#### 🔄 Changed

##### Documentation

- `AGENTS.md`'s Environment Variables table, `README.md`'s Environment Variables subsection and
  `CONTRIBUTING.md`'s Prerequisites/Getting Started steps no longer name `.env.local`'s/`.env.production`'s exact
  `VITE_`-prefixed variable names or values — all three now point to the new `.env.example` as the single source
  of truth, instead of duplicating (and risking drifting from) its content

#### 🗑️ Removed

##### Version Control

- Removed `.env.local` and `.env.production` from version control — both are covered by `.gitignore`'s
  `.env`/`.env.*` rule (with only `.env.example` excluded from it) but had been tracked from before that rule
  existed; `.env.example` now documents every variable they held, secret-free

#### 🐛 Fixed

##### Documentation

- Fixed `AGENTS.md`'s British English exceptions note and icon table, which told every other doc linking to
  `LICENSE.md` to spell it "License" for consistency and labelled the 📜 icon "License / licence" — both now
  correctly say "Licence", per the British English convention; the `LICENSE.md` file's own name and content remain
  the fixed American-English legal term

##### SEO

- Fixed `index.html`'s `<link rel="canonical">`, `public/robots.txt`'s `Sitemap` line and `README.md`'s
  introductory link, all still pointing to the bare `https://hpsc.co.za` (a deliberate choice as of `3.6.5`, per
  `documentation/archive/ARCHIVE.md`), to `https://www.hpsc.co.za` instead — confirmed the bare domain now
  301-redirects there, matching the `baseUrl` constant already used elsewhere (e.g. the sitemap builder)

---

### 🧾 [5.1.2] - 2026-09-04

#### ➕ Added

##### Release Process

- Backfilled `documentation/history/RELEASE_NOTES_vX.Y.Z.md` archives for versions `4.0.0` through `4.2.2`
  (`4.2.3` onward already had theirs), derived from `CHANGELOG.md`'s existing entries and matching
  `RELEASE_NOTES_v4.2.3.md`'s Theme/Key Highlights lead-in format
- Added `documentation/archive/ARCHIVE.md`, a read-only legacy release archive covering every version predating
  `CHANGELOG.md`/`HISTORY.md`'s Keep a Changelog structure introduced in `4.0.0` — `1.0.0` through `3.6.9`. Versions
  `3.0.0` onward reproduce GitHub's own release notes for the legacy Version 3.x line; `1.0.0` through `2.1.0`
  predate any release notes being generated, so those three are instead summarised from their commit history (the
  project's first Vite/React scaffold, the migration onto the `tahoni` component library and follow-up polish).
  Notes that `1.0.0`–`2.1.0` used a legacy, non-semantic versioning scheme, while `3.0.0` onward already followed
  SemVer, per `CHANGELOG.md`'s own Version Policy. Documented in `AGENTS.md`'s Documentation File Map

#### 🔄 Changed

##### Documentation

- `CHANGELOG.md`'s legacy-Version-3.x-line note now also points to the new `documentation/archive/ARCHIVE.md`
  alongside `HISTORY.md`
- Added `documentation/archive/ARCHIVE.md` to `README.md`'s Documentation section, matching the existing
  `documentation/history/`/`documentation/recommendations/` entries
- Expanded `CONTRIBUTING.md`'s intro paragraph to state explicitly that `AGENTS.md` is this repository's ultimate
  source of truth — if any other documentation ever contradicts it, `AGENTS.md` wins

#### 🐛 Fixed

##### Documentation

- Fixed `AGENTS.md`'s Merging section stating the release tag format is `version-X.Y.Z`, two majors behind actual
  practice: every release from `4.2.3` onward has tagged as `vX.Y.Z` (confirmed against this repository's GitHub
  releases), with `version-X.Y.Z` only used for the legacy Version 3.x/early 4.x line

---

### 🧾 [5.1.1] - 2026-09-04

#### ➕ Added

##### Tooling

- Added eight Claude Code skills under `.claude/skills/` (`generate-commit-message`, `generate-pr-summary`,
  `prep-version-release`, `scaffold-integration-tests`, `scaffold-unit-tests`, `sync-improvement-plan-gaps`,
  `sync-unreleased-changes`, `update-improvement-plan-gaps`), synced from the sibling `hpsc-web-springboot`
  repository and localised for this project: replaced Spring Boot/Java-specific content (Maven version bumps,
  Mockito/JUnit, `@SpringBootTest`) with this project's own npm/Vitest equivalents, fixed `CHANGELOG.md` heading
  levels and bullet style to match this repo's actual structure and added the missing `UI.md` reverse-sync and
  `ARCHITECTURE.md` tree-verification steps

##### Documentation

- **`AGENTS.md`:** `🧬` (Data model / DTOs) added to the "Reserved" sub-table under "Icons in headings", claimed in
  the sibling `hpsc-web-springboot` repository's own icon registry since the reserved table was last synced, so it
  isn't accidentally repurposed here for an unrelated concept

#### 🔄 Changed

##### Documentation

- Renamed `documentation/roadmap/IMPROVEMENT_PLAN.md`/`TASKS.md` to `improvement-plan.md`/`improvement-plan-tasks.md`,
  matching `documentation/recommendations/`'s kebab-case file naming, and updated every cross-reference across
  `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `HISTORY.md`, `README.md`, `RELEASE_NOTES.md` and
  `documentation/history/`
- Reflowed every root Markdown file (`AGENTS.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, `CLAUDE.md`, `CONTRIBUTING.md`,
  `HISTORY.md`, `PACKAGES.md`, `README.md`, `RELEASE_NOTES.md`, `UI.md`) to wrap prose at 100–120 characters per line
  instead of one unbroken line per paragraph; added a new Line Wrapping convention to `AGENTS.md`'s Documentation
  Conventions documenting the rule, superseding the one-paragraph-per-line convention `5.1.0` had fixed toward
- Added icon-headed sections to `PACKAGES.md` (📖 Introduction, 💰 for its three funding-list sections), matching
  `AGENTS.md`'s Icons in headings convention that every other root doc already follows; added the new 💰
  Funding/sponsorship icon to `AGENTS.md`'s icon table
- Centralised `CLAUDE.md`'s Project Overview, Architecture, Build & Run Commands, Environment Variables and Code
  Quality & CI content into `AGENTS.md` as new sections, so the full guidance is usable by any AI coding agent, not
  only Claude Code; `CLAUDE.md` is now a thin pointer to `AGENTS.md` plus its one genuinely Claude-Code-specific
  instruction (use the TodoWrite tool for complex tasks). Updated every cross-reference to the moved sections in
  `README.md`, `CONTRIBUTING.md`, `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md` and the
  `.claude/commands/` slash commands
- Added a Serial Commas convention, a tracked-tooling-directories rule to Directory Tree Maintenance and three new
  Release Checklist steps (a roadmap check, a `CONTRIBUTING.md` update and an `ARCHITECTURE.md` tree verification) to
  `AGENTS.md`, synced from the more recently updated sibling `hpsc-web-springboot` repository; updated
  `ARCHITECTURE.md`'s Project Structure tree to include the previously-missing `.claude`/`.github` tooling directories
  per the new rule, and extended `CONTRIBUTING.md`'s Documentation Conventions and Pull Request Checklist to match
- Added a new Claude Code Skills section to `AGENTS.md`, listing all eight `.claude/skills/` and their purpose, and a
  shorter pointer to it from `CONTRIBUTING.md`'s new Claude Code Skills section, so both docs stay in sync with the
  skills each of them already relies on
- Reconciled two icon meanings that had drifted from the sibling `hpsc-web-springboot` repository's `AGENTS.md`:
  `🧩` now means "Tooling / automation" and `✅` now means "Quality attributes", matching `hpsc-web-springboot`'s
  icon table. Introduced `🗂️` for the "Feature-based organisation" concept `🧩` used to cover (`ARCHITECTURE.md`'s
  Feature-Based Organisation section and three headings in `documentation/recommendations/`) and split `✅`'s old
  "Checklist"/"Recommendation" usage into `☑️` Checklist (`CONTRIBUTING.md`'s Pull Request Checklist,
  `improvement-plan.md`'s Success Criteria) and `👍` Recommendation / best practices (nine headings across
  `documentation/recommendations/`); also fixed three American spellings ("Organizational", "Organization" ×2) found
  in `standard-directory-structure.md` along the way
- Reordered `AGENTS.md`'s icon table by where each icon is first used — `README.md`/`ARCHITECTURE.md`, then
  `AGENTS.md`/`CONTRIBUTING.md`, then `CHANGELOG.md`/`HISTORY.md`, then `RELEASE_NOTES.md`/`PR_DESCRIPTION_vX.Y.Z.md`,
  with icons used only elsewhere in the repository listed last; the icon-to-concept mappings themselves are unchanged
- Restructured `documentation/roadmap/improvement-plan.md`'s Gaps & Improvement Opportunities section, and mirrored
  the change into `improvement-plan-tasks.md`, into the ✅ Completed / 🟡 Partially Completed / ⚪ Open status
  grouping the `update-improvement-plan-gaps`/`sync-improvement-plan-gaps` skills already assume and the sibling
  `hpsc-web-springboot` repository's own `improvement-plan.md` uses, replacing `improvement-plan-tasks.md`'s old
  Now/Next/Later/Ongoing layout; added a new Gap #9 (`HISTORY.md`'s "Future Roadmap Implications" section, referenced
  by this plan's Purpose & Scope and `AGENTS.md`'s Release Checklist step 6, doesn't actually exist) and moved Gap #7
  to Partially Completed, since `README.md` already documents the three environment variables its Evidence had
  claimed it didn't; corrected Gap #1's stale CodeQL-trigger-branches evidence and the Goals & Constraints table's
  stale Vite 6/TypeScript 5/React Router 7 versions to Vite 8/TypeScript 6/React Router 8
- Added a new `CONTRIBUTING.md` Directory Tree Maintenance section and icon-reuse/evergreen-doc bullets to its
  Documentation Conventions section, extracted from `AGENTS.md`'s equivalent sections which had no contributor-facing
  summary yet; added matching Pull Request Checklist items
- **`CONTRIBUTING.md`:** All ~15 "see `AGENTS.md`'s X section" cross-references now link to the specific `AGENTS.md`
  anchor they name (Environment Variables, Test Conventions, Component/layout folder shape, Directory Tree
  Maintenance, Claude Code Skills, Documentation Conventions, Contributors, Icons in headings, Evergreen
  Documentation, Roadmap Planning, Git Workflow, Code Quality & CI ×2, Release Checklist), instead of unlinked plain
  text — matching the sibling `hpsc-web-springboot` repository's `CONTRIBUTING.md`, where the same pattern was
  already followed
- **`CONTRIBUTING.md`:** Six more unlinked references caught on a second pass now link properly too —
  `README.md`'s Available Scripts and Author sections, `ARCHITECTURE.md`'s Architecture at a Glance mention and
  two separate `documentation/roadmap/improvement-plan-tasks.md` mentions, and
  `documentation/recommendations/standard-utils-vs-helpers.md`
- **`AGENTS.md`:** Three more unlinked references, found while re-checking beyond `CONTRIBUTING.md` — the Tech
  Stack's routing bullet and the Architecture Overview's summary line now link to `ARCHITECTURE.md`, and the Build
  & Run Commands section's script-list pointer now links to `README.md`'s specific Available Scripts anchor
- **`CONTRIBUTING.md`:** Architecture at a Glance's "Routing is data-driven..." bullet restates `AGENTS.md`'s
  Project Overview bullet without citing it — now links to `AGENTS.md#-project-overview`
- **`CONTRIBUTING.md`:** Testing section repeated `AGENTS.md`'s Test Conventions bullets almost verbatim instead of
  summarising and linking, unlike every other shared section in the file — replaced with a pointer to
  `AGENTS.md#-test-conventions`
- Added two new gaps to `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md`: Gap #10
  (`AGENTS.md`'s Documentation File Map still describing `LICENSE.md` as "MIT License", despite an earlier fix in
  this same `[Unreleased]` section claiming it was already corrected — closed in the same pass, see Fixed below) and
  Gap #11 (264 pre-existing `tsdoc/syntax` warnings, surfaced by the `eslint.config.js` fix below but not yet
  cleaned up since the rule is `"warn"`, not `"error"`)

#### 🐛 Fixed

##### Build & Tooling

- Fixed the `@routes` path alias in `vite.config.ts`/`tsconfig.app.json` to resolve to `src/shared/routes` (its actual
  location) instead of the nonexistent `src/routes` — resolves the `TODO: remove` comment added when the dead alias was
  first flagged
- Fixed `npm run build`'s "chunks are larger than 500 kB" warning: `vite.config.ts`'s `manualChunks` now splits
  `react`/`react-dom`/`scheduler`, `react-router`/`react-router-dom`, `bootstrap`/`react-bootstrap`/`bootstrap-icons`,
  `sweetalert2` and `@tahoni` into their own vendor chunks instead of leaving them bundled into the main entry chunk
  (514 kB before the fix, 242 kB after); also corrected a `manualChunks` case that matched the non-existent
  `react-google-recaptcha` package name instead of the installed `react-google-recaptcha-v3`, which meant that library
  was never actually being split out
- Fixed `scaffold-unit-tests`/`scaffold-integration-tests` skills missing the `## 🔍 Gather current state` section
  every other `.claude/skills/*.md` file has before its `## 🚀 Instructions`; converted their existing "Read
  `AGENTS.md` in full before starting" line into that section for structural consistency across all eight skills
- Fixed `eslint.config.js` missing `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule, despite `AGENTS.md`/`CONTRIBUTING.md`
  documenting it as enabled: ESLint 9's flat config takes precedence over the legacy `.eslintrc.cjs` mirror that
  actually had the rule, so `npm run lint` was silently skipping all TSDoc validation. Added the plugin and rule to
  `eslint.config.js` to match, surfacing 288 pre-existing `tsdoc/syntax` warnings across the codebase; also fixed
  `AGENTS.md`'s TSDoc convention to cite `eslint.config.js` instead of the now-stale `.eslintrc.cjs`
- Fixed `EmailService.ts`, `HeaderMenu.tsx` and `AppRoutes.tsx` importing via relative `../../`-style paths instead of
  the `@models`/`@helpers` aliases already configured in `vite.config.ts`/`tsconfig.app.json` and used elsewhere in
  these same files

##### Components

- Moved `Layout.tsx`/`Layout.module.scss`/`LayoutProps.ts` into a new `src/shared/layouts/Layout/` folder, matching the
  folder-per-component shape every sibling layout (`Header/`, `Footer/`, `Body/`, `Content/`, `Breakpoints/`) already
  follows; fixed the resulting broken `LayoutProps` import in `Body.tsx` and the `@use "../Layout.module"` Sass imports
  in `Header.module.scss`/`Footer.module.scss`
- Fixed `SanitizedBaseInputTemplate.tsx`'s doc comment using the American spelling "sanitized" instead of "sanitised",
  per `AGENTS.md`'s British English convention

##### Styling

- Fixed Bootstrap component classes (`.btn`, `.card`, `.navbar`, etc.) rendering with stock Bootstrap colours instead of
  the club's theme: `src/assets/styles/_forms.scss` independently `@use`d `bootstrap/scss/bootstrap` directly, compiling
  a second, unthemed copy of Bootstrap that never saw `src/vendors/bootstrap/styles/_custom.scss`'s variable overrides
  ($primary rendered as Bootstrap's stock `#0d6efd` instead of the club's `#0a07fb`); it now `@use`s the already-themed
  `@bootstrap/styles/index` module instead, which itself now imports the full `bootstrap/scss/bootstrap` entry point
  (rather than stopping at `root`) so every component partial compiles using the overrides; documented the required
  pattern in `documentation/recommendations/project-css-naming.md`
- Fixed `src/main.tsx` importing an empty, dead `src/index.css` left over from the Vite template default — contradicted
  `project-css-naming.md`'s claim that `App.scss` is the only global-style entry point; removed the import and deleted
  the file

##### Documentation

- Fixed a stale `documentation/recommendations/standard-naming.md` reference in
  `.claude/commands/scaffold-unit-tests.md`, left over from that file's own earlier rename to
  `standard-component-naming.md`
- Trimmed `CLAUDE.md` of content already derivable from `package.json`/`vite.config.ts`/`tsconfig.app.json`: a
  runtime-versions line, five standard `npm run` command descriptions (`dev`/`build`/`preview`/`lint`/`test`) and the
  entire Path Aliases section
- Removed the Oxford comma throughout `README.md`, `UI.md`, `CONTRIBUTING.md`, `AGENTS.md`, `ARCHITECTURE.md`,
  `CHANGELOG.md`, `HISTORY.md`, `RELEASE_NOTES.md` and the `documentation/roadmap`/`documentation/recommendations`
  files, applying the new Serial Commas convention retroactively; left the byte-for-byte `documentation/history/`
  release archives untouched, as `AGENTS.md`'s Release Checklist requires
- Fixed structural and spelling conformance issues found in a full audit of `README.md`, `ARCHITECTURE.md`, `UI.md`,
  `PACKAGES.md` and `HISTORY.md` against `AGENTS.md`'s Documentation Conventions: added the missing `---` section
  separators to `README.md` and `PACKAGES.md`, replaced quadruple-backtick inline code with single backticks in
  `README.md`'s Environment Variables section, fixed American spellings ("Organization", "Externalized", "Centered"),
  corrected `HISTORY.md`'s heading structure (removed a redundant `##` duplicating the H1, promoted its Table of
  Contents heading from `###` to `##`, renamed the H1 to "HPSC Website History" to match its sibling docs) and its
  stale `LICENCE` reference and rewrapped several over-length prose lines in `AGENTS.md` and `HISTORY.md`
- Fixed `README.md`'s Documentation table and `AGENTS.md`'s Documentation File Map describing `LICENSE.md` as "MIT
  License", when its actual content is a plain "All Rights Reserved" copyright notice — both now describe it
  accurately; `LICENSE.md` itself is left untouched, per its own fixed-legal-text exception
- Fixed inconsistent icon usage across `documentation/recommendations/`/`documentation/roadmap/`: `🔀` (Git workflow),
  `🔗` (Repository/links), `📊` (Statistics) and `📋` (Version policy/prerequisites) were each reused for unrelated
  headings in six files, and the roadmap's Next/Later/Ongoing phases duplicated `🏗️`/an undocumented `🔬`/`🔄`
  (Changed items) rather than having their own icons; reassigned the misused headings to an already-established
  matching icon (`⚖️`, `🛣️`, `🎓` or `📚`) and gave the roadmap phases their own `⏭️`/`⏳`/`🔁`. Also added nine
  previously undocumented or newly introduced icons to `AGENTS.md`'s icon table: `🧱`, `🌳`, `🏆`, `🗝️`, `🏷️`, `⚖️`
  and the three roadmap phase icons above
- Reconciled three more icon meanings against the sibling `hpsc-web-springboot` repository's `AGENTS.md`, which had
  grown substantially since the last sync: `🧭` now means "Design notes" (matching `RELEASE_NOTES.md`'s own existing
  usage, which needed no change), `🏗️` now means "Layered architecture" and `🌐` now means "Presentation / API
  layer" — none of which apply to this project, so both are left unused here for now. Introduced `🛣️` for the
  "Routing / navigation" concept `🧭` used to cover (`ARCHITECTURE.md`, `UI.md` and two Path Aliases headings in
  `documentation/recommendations/`), `🌊` for the "Global scope" concept `🌐` used to cover
  (`project-css-naming.md`'s Global Styles section) and `🧵` for the "Shared / cross-feature infrastructure" concept
  `🏗️` used to cover (`project-directory-structure.md`'s `src/shared/` section); left Java/Spring-specific additions
  (data model/DTOs, request-response flow, roadmap status markers, etc.) out of this project's icon table
- Restructured `AGENTS.md` and `CONTRIBUTING.md` to match `hpsc-web-springboot`'s section skeleton: reordered
  `AGENTS.md` to Overview → Tech Stack → Build & Run Commands → Environment Variables → Architecture → Code Quality
  & CI → Documentation Conventions → Documentation File Map → Roadmap Planning → Claude Code Skills → Test
  Conventions → Directory Tree Maintenance → Git Workflow → Release Checklist → Evergreen Documentation, and
  promoted its "Roadmap Planning" subsection to a full `##` section (reusing the already-established `🗺️` icon, not
  springboot's `🎯`, since that already means something else here); added `CONTRIBUTING.md`'s missing Prerequisites,
  Architecture at a Glance, Roadmap, CI/CD & Quality Gates and Cutting a Release sections (all brief pointers to
  `AGENTS.md`, matching this project's existing thin-summary approach) and folded its redundant Introduction section
  into the pre-ToC intro paragraph, matching springboot's leaner shape; springboot's Database Profiles section has
  no equivalent here, so it wasn't added
- Added a "reserved" table to `AGENTS.md`'s icon registry for ten `hpsc-web-springboot` icons genuinely specific to
  that project's Java/Spring Boot backend (`⚡`, `📈`, `📥`, `🔓`, `🔢`, `🔬`, `🗄️`, `🛡️`, `🤔`, `🧬`) — kept out of
  the main table since they're unused here, but reserved so they're never accidentally repurposed for an unrelated
  concept in this project
- Resolved three more issues found while diffing against `hpsc-web-springboot`'s still-evolving icon table: sidestepped
  its new `🗂️` (Documentation file index) conflict — rather than reassigning this project's actively-used `🗂️`
  (Feature-based organisation) again — by fixing this project's own pre-existing `🗺️` reuse across two adjacent
  `AGENTS.md` headings (Documentation File Map and Roadmap Planning) with a new `🛤️` icon dedicated to Roadmap
  Planning (and `README.md`'s matching Roadmap section), leaving `🗺️` to mean only "Documentation map"; updated `✅`'s
  entry to "Quality attributes / completed (roadmap gap status)", reflecting that this project's own
  `sync-improvement-plan-gaps`/`update-improvement-plan-gaps` skills already describe a
  ✅ Completed/🟡 Partially Completed/⚪ Open status system for `improvement-plan.md`; added `🟡` and `⚪` as real
  registry entries for that same reason, rather than reserving them as irrelevant
- Resolved a `📝` conflict with `hpsc-web-springboot`'s icon table by adopting its "Notes" meaning as-is —
  `RELEASE_NOTES.md`'s own `## 📝 Notes` section already matched it and needed no change — and introducing a new
  `✍️` icon for the displaced "Content strategy / documentation conventions" concept across `AGENTS.md`'s and
  `CONTRIBUTING.md`'s Documentation Conventions sections, `ARCHITECTURE.md`'s Content Strategy (MDX) section and
  `RELEASE_NOTES.md`'s Documentation Clean-up subsection; left the frozen
  `documentation/history/RELEASE_NOTES_v5.0.0.md`/`v5.1.0.md` archives untouched per the byte-for-byte archive rule
- Adopted `hpsc-web-springboot`'s `🔬` icon for `AGENTS.md`'s Code Quality & CI section and `CONTRIBUTING.md`'s CI/CD &
  Quality Gates section, freeing `🔍` to mean only "Current state / inspection" — the concept it already carries in
  every `.claude/skills/*/SKILL.md` "Gather current state" section and `improvement-plan.md`'s Gaps & Improvement
  Opportunities section — and removing the now-obsolete "this project uses 🔍 instead" reservation note on `🔬`
- Fixed `AGENTS.md`'s Tech Stack section stating "Vite 6", two majors behind `package.json`'s actual `vite@^8.2.2` —
  `RELEASE_NOTES.md`'s own v5.1.0 Migration Guide already documents Vite-8-specific behaviour that release shipped
  around

#### 🗑️ Removed

##### Build & Tooling

- Removed the six `.claude/commands/` slash commands, now fully superseded by their `.claude/skills/` equivalents
  (same names, same behaviour); updated `AGENTS.md`'s Directory Tree Maintenance rule and `ARCHITECTURE.md`'s Project
  Structure tree to describe `.claude/` as holding "custom skills" rather than "commands"
- Removed the `overrides` entry pinning `@babel/plugin-transform-runtime` to `^7.29.7` in `package.json` — added to
  resolve an `ERESOLVE` conflict when `@vitejs/plugin-react` was first bumped to v6, but that plugin's optional
  Rolldown/React Compiler peer chain (`@rolldown/plugin-babel`, `babel-plugin-react-compiler`) was never installed in
  this project, so `@babel/plugin-transform-runtime` no longer appears anywhere in the dependency tree; confirmed safe
  via `npm install` (no resolution changes beyond an unrelated stale lockfile `version` field) and a clean
  `npm run build`

##### Dependencies

- Removed `react-router-dom` from `package.json` — it never published a `v8` release, so `5.1.0` deferred it on `7.18.2`
  while `react-router` moved on to `8.3.0`; `react-router` `v8` absorbed `react-router-dom`'s DOM bindings
  (`BrowserRouter`, `Link`, etc.) into its main package, making the separate package redundant. Migrated
  `src/main.tsx`'s `BrowserRouter` import and `Header.tsx`'s `Link` import to `react-router`, removed the now-unneeded
  `react-router-dom` case from `vite.config.ts`'s `manualChunks` and updated `AGENTS.md`/`CLAUDE.md`'s Tech Stack entry
  from "React Router 7" to "React Router 8"

---

### 🧾 [5.1.0] - 2026-08-26

#### ➕ Added

##### Build & Tooling

- Added a `/sync-unreleased-changes` Claude Code command — audits the current branch's diff against its base branch and
  adds any missing `CHANGELOG.md` Unreleased entries for notable changes
- Added an `.aiignore` file, mirroring most of `.gitignore`'s coverage, so AI coding agents don't read build artefacts,
  secrets and IDE/tool-specific files as part of their context; it additionally excludes `.mvn/`, commented as not
  excluded by `.gitignore`

#### 🔄 Changed

##### Build & Tooling

- Expanded `.gitignore` with newer JetBrains (AWS, SonarLint, Apifox, GitHub Copilot migration files), OS (`.DS_Store`,
  `Thumbs.db`, `desktop.ini`), secrets/credentials (`*.pem`, `*.key`, `*credentials*`, `*secrets*`), pnpm, Yarn v3 and
  Vite timestamp-file patterns
- Widened `.gitignore`'s project-specific `TAHONI` rule from `.claude/*.local.json` to `.claude/*.local.*` and removed
  the now-unneeded `.junie/` entry
- Updated `vite` (`^6.4.2` → `^8.2.2`), `@vitejs/plugin-react` (`^4.3.4` → `^6.1.0`, required for Vite 8 support),
  `vitest` (`^3.0.5` → `^4.1.11`), `eslint` and `@eslint/js` (`^9.20.1`/`^9.17.0` → `^9.39.5`), `eslint-plugin-react`
  (`^7.37.4` → `^7.37.5`), `eslint-plugin-react-hooks` (`^5.1.0` → `^7.1.1`), `eslint-plugin-react-refresh` (`^0.4.19` →
  `^0.5.5`) and `typescript-eslint` (`^8.24.0` → `^8.68.0`) to their latest mutually-compatible versions; kept `eslint`
  on the 9.x line rather than 10.x since `eslint-plugin-react`'s peer range doesn't yet support ESLint 10, and kept
  `typescript` on the 5.x line (`~5.6.2` → `~5.9.3`) rather than 7.x since `typescript-eslint`'s peer range doesn't yet
  support TypeScript 7's native-compiler major release
- Added an `overrides` entry pinning `@babel/plugin-transform-runtime` to `^7.29.7` in `package.json`, resolving an
  `ERESOLVE` conflict between `@rollup/plugin-babel`'s `@babel/core@^7` requirement and `@vitejs/plugin-react@6`'s
  optional Rolldown/React Compiler peer chain, which otherwise pulled in `@babel/core@^8`
- Updated the remaining `devDependencies` to their latest versions: `@rollup/plugin-babel` (`^6.0.4` → `^7.1.0`),
  `@types/react` (`~19.0.3` → `~19.2.18`), `@types/react-dom` (`~19.0.2` → `~19.2.5`), `@types/sanitize-html`
  (`^2.13.0` → `^2.16.1`), `globals` (`^15.15.0` → `^17.11.0`), `rollup-plugin-visualizer` (`^5.14.0` → `^7.1.1`),
  `sass` (`^1.85.0` → `^1.103.1`), `sitemap` (`^8.0.0` → `^9.0.1`), `tsx` (`^4.19.4` → `^4.23.12`) and `typedoc`
  (`^0.28.15` → `^0.28.20`)
- Widened `react`/`react-dom` from `~19.0.0` to `~19.2.8`, now matching the `@types/react`/`@types/react-dom` versions
  already updated above; left every other outdated runtime dependency with a major-version jump available
  (`@fortawesome/*`, `@fullcalendar/*`, `@react-email/components`, `@rjsf/*`, `react-email`, `react-router`/
  `react-router-dom`) untouched, since those require code changes and manual testing beyond a version bump

##### Dependencies

- Updated `@tahoni/tahoni-lib-react` (`^3.3.0` → `^3.3.3`), which now peers on `react`/`react-dom` `~19.2.0`,
  `bootstrap` `^5.3.8`, `eslint-plugin-react` `^7.37.5`, `glob` `^13.0.6`, `react-bootstrap` `^2.10.10` and
  `react-spinners` `^0.17.0`
- Updated the remaining deferred major dependencies to their latest versions: `@fortawesome/fontawesome-svg-core`/
  `@fortawesome/free-brands-svg-icons`/`@fortawesome/free-regular-svg-icons`/`@fortawesome/free-solid-svg-icons`
  (`^6.7.2` → `^7.3.1`), `@fortawesome/react-fontawesome` (`^0.2.6` → `^3.5.0`), `@fullcalendar/*` (`^6.1.15` →
  `^6.1.21`), `@mdx-js/react`/`@mdx-js/rollup` (`^3.1.0` → `^3.1.1`), `@react-email/components` (`^0.0.36` → `^1.0.12`),
  `@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` (`^5.24.3` → `^6.8.0`), `@vis.gl/react-google-maps` (`^1.5.2` →
  `^1.9.0`), `bootstrap` (`^5.3.3` → `^5.3.8`), `react-bootstrap` (`^2.10.9` → `^2.10.10`), `react-email` (`^4.0.7` →
  `^6.9.3`), `react-router` (`^7.12.0` → `^8.3.0`), `react-router-dom` (`^7.12.0` → `^7.18.2`), `sanitize-html`
  (`^2.14.0` → `^2.17.7`) and `sweetalert2` (`^11.22.4` → `^11.26.25`)
- Updated `typescript` (`~5.9.3` → `~6.0.3`); updated `tsconfig.app.json` accordingly, dropping `baseUrl` in favour of
  explicit `./`-relative `paths` entries and adding `"types": ["mdx"]`

##### Documentation

- Expanded `AGENTS.md`'s Release Checklist template for `RELEASE_NOTES.md` with Migration Guide, Statistics, Design
  Notes, Testing, Known Issues, Future Enhancements, Contributors and Notes sections, added matching ⭐/📊/🔮/👥 icons to
  the icon table and rewrote `RELEASE_NOTES.md` to follow the expanded template
- Consolidated `README.md`'s per-file documentation links into a new Documentation section, now referenced by
  `AGENTS.md`'s Documentation File Map, and clarified its Prerequisites/Installation and Execution steps

#### 🐛 Fixed

##### Build & Tooling

- Fixed `npm run build` failing with `Unsupported target "ES2023"` under Vite 8 by setting `vite.config.ts`'s
  `build.cssMinify` to `"esbuild"`; Vite 8 defaults CSS minification to `lightningcss`, which expects browser targets
  rather than the JS-version string already configured in `build.target`
- Fixed `npm run sitemap` failing with `Cannot find package '@/models'`; `tsx` resolves path aliases from the nearest
  `tsconfig.json`, but the root `tsconfig.json` only references `tsconfig.app.json`/`tsconfig.node.json` and carries no
  `compilerOptions.paths` of its own, so the `@/*` alias used by `builders/RoutesSitemap.ts` went unresolved — pointed
  the `sitemap` script at `tsconfig.app.json` (which already defines the aliases and includes `builders`) via `tsx`'s
  `--tsconfig` flag

##### Forms

- Fixed `ContactUsForm.tsx` and its `SanitizedWidget`/`SanitizedTextareaWidget`/`SanitizedBaseInputTemplate` components
  failing to build under the `@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` v6 upgrade: `SanitizedWidget.tsx` no
  longer deep-imports `@rjsf/core/lib/components/widgets/TextWidget`/`TextareaWidget` (blocked by v6's stricter package
  `exports` map), using `getDefaultRegistry()` instead, and all three components are now properly generic over RJSF's
  type parameters; `ContactUsForm.tsx` builds its validator via `customizeValidator<ContactUsFormData>()` and imports
  `FormValidation` from `@rjsf/utils`'s root export; `CaptchaField.tsx`'s `onChange` call now passes the `path` argument
  v6's `FieldProps.onChange` requires

##### Documentation

- Fixed hard-wrapped paragraphs in `ARCHITECTURE.md`, `README.md`, `UI.md`, `PACKAGES.md`,
  `documentation/recommendations/project-css-naming.md` and
  `documentation/recommendations/standard-utils-vs-helpers.md` that broke mid-sentence or mid-clause instead of matching
  the rest of the repo's one-paragraph-per-line convention; also converted `PACKAGES.md` from UTF-16 to UTF-8, matching
  every other Markdown file in the repo
- Fixed additional hard-wrapped list-item descriptions in `ARCHITECTURE.md` (the `RouteAliases.tsx`/`AppRoutes.tsx`,
  Sass Modules/Bootstrap Overrides and Build and Tooling bullets) missed by the earlier paragraph rewrap
- Fixed `documentation/history/RELEASE_NOTES_v5.0.0.md`'s stale archive snapshot, which had fallen out of sync with
  `RELEASE_NOTES.md`'s expanded Migration Guide/Statistics/Design Notes/Testing/Known Issues/Future
  Enhancements/Contributors/Notes template — resynced it byte-for-byte per AGENTS.md's Release Checklist archive rule
- Fixed `ARCHITECTURE.md`'s Project Structure tree missing the `src/enums/` directory, which had been added without
  updating the tree

#### ⚠️ Deprecated

#### 🗑️ Removed

#### 🔐 Security

---

### 🧾 [5.0.0] - 2026-08-25

#### ➕ Added

##### Release Process

- Added a `documentation/history/` archive folder — each release now archives a `RELEASE_NOTES_vX.Y.Z.md` snapshot and a
  `PR_DESCRIPTION_vX.Y.Z.md`, and `RELEASE_NOTES.md` gains a Theme/Key Highlights lead-in — enabling the new
  `/generate-pr-summary` command, converted from a sibling project, to condense a release into a short Bitbucket-style
  PR summary

##### Build & Tooling

- Added five Claude Code slash commands under `.claude/commands/`: `/generate-commit-message` (drafts a commit message
  and matching `CHANGELOG.md` entry from the working tree diff), `/generate-pr-description` (prepares a new version
  release per the Release Checklist), `/generate-pr-summary` (condenses a release into a short PR summary) and
  `/scaffold-unit-tests`/`/scaffold-integration-tests` (scaffold Vitest unit/integration tests following this project's
  testing conventions)
- Added `build/` to `.gitignore`; replaced the blanket `.claude/` ignore entry with `.claude/*.local.json`, so
  `.claude/commands/` can be tracked while local-only Claude config stays ignored
- Added `.junie/` to `.gitignore`

##### Documentation

- Added `AGENTS.md` and `CLAUDE.md`, establishing cross-tool documentation conventions (British English, icon-headed
  sections, GFM tables, GitFlow git workflow and the Release Checklist) shared by any AI coding agent working in this
  repository
- Added a Contributors convention to `AGENTS.md`'s Documentation Conventions — when docs credit contributors or authors,
  source the list from `git log`/GitHub history (including bot accounts) rather than assuming
- Added `CONTRIBUTING.md` with project setup, git workflow, documentation and testing conventions and a pull request
  checklist, and linked it from `README.md`'s new Contributing section
- Added `documentation/roadmap/improvement-plan.md` — a synthesis of this project's own goals/constraints into eight
  evidence-backed gaps (each with its Evidence, Why it matters and Proposed improvement), a Roadmap table and Success
  Criteria — and added it to `AGENTS.md`'s Documentation File Map
- Added `documentation/roadmap/improvement-plan-tasks.md` — a checkbox-level task breakdown of
  `documentation/roadmap/improvement-plan.md`'s eight gaps, organised by the plan's Now/Next/Later/Ongoing phasing, each
  item tagging its originating gap number for traceability
- Added a "Working on Complex Tasks" section to `CLAUDE.md`, instructing use of the TodoWrite tool for multistep or
  non-trivial tasks, per `AGENTS.md`'s Git Workflow Conventions

#### 🔄 Changed

##### Components & Helpers

- Refactored email-related models: removed `EmailContent`, merging its functionality into `EmailMessage`; added an
  `EmailType` enum (`HTML`/`TEXT`) under `src/enums/email/`; and moved `menuHelpers.tsx`/`routeHelpers.tsx` from
  `src/shared/helpers/` to `src/helpers/`, adjusting all dependent components (`ContactUsForm`,
  `ContactUsEmailTemplate` and every feature's barrel `index.ts`)

##### Documentation

- Restructured `CHANGELOG.md` and `HISTORY.md` into the icon-based Keep a Changelog format, backfilling historical
  entries for prior versions
- Applied the icon-heading and section-separator convention to `README.md`, `ARCHITECTURE.md`, `UI.md` and
  `RELEASE_NOTES.md`; documented the previously-missing `npm run host`, `npm test` and `npm run sitemap` scripts in
  `README.md`; added a Theme/Key Highlights lead-in to `RELEASE_NOTES.md`'s 4.2.3 entry
- Renamed `documentation/roadmap/` to `documentation/roadmap-old/`, superseded by the recreated
  `documentation/roadmap/improvement-plan.md` and `documentation/roadmap/improvement-plan-tasks.md`;
  `documentation/roadmap-old/` is now a fully archived, no-longer-maintained snapshot. Updated the resulting stale
  cross-references in `AGENTS.md`, `CLAUDE.md` and `CONTRIBUTING.md`
- Split `AGENTS.md`'s Documentation File Map into a new "Roadmap Planning" subsection for `documentation/roadmap/`'s two
  files, separate from the reference-material folders (`documentation/history/`, `documentation/recommendations/`) —
  it's the project's active improvement backlog, not standard documentation

#### 🐛 Fixed

##### Build & Tooling

- Fixed broken `src/helpers/routeHelpers.tsx`/`menuHelpers.tsx` imports left as unresolvable bare `src/...` specifiers
  after the helpers relocation, which only type-checked (via `tsc`'s `baseUrl`) but broke `npm run build`; corrected
  them to the `@/` and `@shared` path aliases already used elsewhere and fixed the `@helpers`/`@models`/`@utils`/
  `@constants` alias mappings in `vite.config.ts`/`tsconfig.app.json`, which still pointed at their pre-relocation
  `src/shared/*` locations

##### Documentation

- Fixed `UI.md`'s unlabelled Designers heading

#### 🗑️ Removed

##### Documentation

- Removed `HISTORY.md`'s "🚀 Future Roadmap Implications" section and its Table of Contents entry — it restated the
  now-superseded `documentation/roadmap/tasks.md`/`plan.md` backlog

##### Release Process

- Removed the `documentation/templates/` scaffold (`CHANGELOG.md`/`RELEASE_NOTES.md` templates) — superseded by inline
  Release Checklist instructions in `AGENTS.md` and the new `documentation/history/` per-version archive

#### 🔐 Security

##### Dependencies

- Updated `vitest`, `react-router`, `postcss`, `vite`, `sanitize-html`, `ws`, `js-yaml`, `nanoid`, `brace-expansion`,
  `fast-uri`, `immutable`, `linkify-it`, `markdown-it`, `socket.io-parser` and `@babel/core` to their patched versions,
  closing all currently open GitHub Dependabot alerts (1 critical, 25 high, 12 moderate, 2 low)

---

### 🧾 [4.2.3] - 2026-05-04

#### 🔄 Changed

##### Content

- Updated club office-bearer names — Chairman: Jan Kleynhans → Jan Lubbinge; Secretary: Albert van Herk → Engela
  Lubbinge

##### Dependencies

- Updated `eslint-plugin-tsdoc` from 0.4.0 to 0.5.2 and related dependencies

#### 🐛 Fixed

##### Build & Tooling

- Fixed the case-sensitive import path in `WorldShootConstants` — the `worldShoot2025` component directory was
  referenced with incorrect casing, causing build failures on case-sensitive file systems

#### 🗑️ Removed

##### Repository Hygiene

- Removed `.idea` (JetBrains IDE) and `.junie` directories from version control; added `.idea` to the VCS ignore list

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in `lodash-es`, `brace-expansion`, `minimatch`, `picomatch`

---

### 🧾 [4.2.2] - 2026-02-10

#### 🔄 Changed

##### Documentation

- Updated `CHANGELOG.md` and `RELEASE_NOTES.md` to reflect repository and title changes; normalised filenames and
  updated `.gitignore`

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies

---

### 🧾 [4.2.1] - 2026-01-20

#### ➕ Added

##### Documentation

- Added `PACKAGES.md` documenting dependencies in the project that are looking for funding

#### 🔄 Changed

##### Components & Helpers

- Moved helpers for route management back under `src/shared/helpers/`

##### Dependencies

- Updated `@tahoni/tahoni-lib-react` to version `3.3.0`

#### 🗑️ Removed

##### Dependencies

- Removed the unused `lightgallery` and `react-pdf` dependencies

---

### 🧾 [4.2.0] - 2026-01-20

#### ➕ Added

##### Constants

- Added a constant for the default file extension, and a constant for the default images folder, for easier
  maintainability

#### 🔄 Changed

##### Assets

- Decreased the size of all images by converting them to the `webp` format

#### 🐛 Fixed

##### Assets

- Fixed the corrupt `ipsc-target-with-bullet-holes.png` image file and converted it to the `webp` format

---

### 🧾 [4.1.4] - 2026-01-19

#### ➕ Added

##### Documentation

- Added/updated `README.md` with quickstart and prerequisites, install and development steps, build and preview
  instructions, test and lint commands and contribution guidelines

#### 🔄 Changed

##### Documentation

- Clarified the usage of `package.json` scripts (`dev`, `build`, `host`, `preview`, `test`, `docs`, `sitemap`) in
  `README.md`
- Small editorial fixes to `ARCHITECTURE.md` and `UI.md`
- Small formatting changes in `plan.md`/`improvement-plan-tasks.md` under `documentation/roadmap/`

#### 🗑️ Removed

##### Documentation

- Removed the screenshot from `README.md` and deleted the `documentation/screenshots/` folder, to reduce maintenance
  overhead

---

### 🧾 [4.1.3] - 2026-01-11

#### ➕ Added

##### CI/CD

- Added a CodeQL analysis workflow configuration for automated security scanning and code quality checks

#### 🔄 Changed

##### Components

- `HeaderMenu`'s navigation bar now collapses at the `lg` breakpoint instead of `xl`, for a better experience on
  medium-sized screens

##### Assets

- Updated favicons in `index.html` and cleaned up metadata

##### Build & Tooling

- Updated `.gitignore` to exclude IDE-specific theme files (`_theme_*.xml`); updated `.idea` code style settings for
  team consistency

##### Dependencies

- Upgraded `react-router-dom` to `7.12.0`; updated `@typescript-eslint`, `@rollup` packages and `eslint-utils` to their
  latest compatible versions

---

### 🧾 [4.1.2] - 2026-01-03

#### ➕ Added

##### Components

- Introduced a generic `Section` component in `src/shared/components/Section/` to handle arrays of `ReactElement` with
  optional collapsed states

#### 🔄 Changed

##### Content

- Temporarily commented out the "Apparel" section in the World Shoot summary

##### Components

- Moved `WorldShoot2025`-related components, constants and styles into a new nested directory structure under
  `src/features/Events/content/2025/WorldShoot2025/`
- Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss`, updating `@extend` rules to maintain
  visual consistency
- Renamed `WorldShootContent` to `WorldShoot2025Content` to be more specific to the event year
- Simplified imports within `WorldShoot2025.mdx`
- Relocated `ClubShirts` content to a `2025` subfolder within the `Members` feature
- Added `index.ts` files to the `2025` content folders to simplify exports and improve modularity

##### Build & Tooling

- Cleaned up relative imports and added missing `.tsx` extensions across several files

---

### 🧾 [4.1.1] - 2026-01-02

#### ➕ Added

##### Maps

- Added support for unique Google Maps IDs, for better management of map styles and features

#### 🔄 Changed

##### Components

- Improved `HeaderMenu` breakpoints and layout adjustments for better responsiveness on extra-large screens
- Streamlined the `Header` structure by removing `HeaderTitle` and consolidating `HeaderMenu` into `HeaderContent` for
  better maintainability

##### Styling

- Refactored SCSS for the header and footer to ensure alignment across different viewports
- Improved layout consistency in `index.html`

##### Documentation

- Expanded TypeDoc entry points and enhanced TSDoc documentation across multiple features for better API clarity
- Corrected date-formatting inconsistencies in `CHANGELOG.md` and `RELEASE_NOTES.md`
- Refreshed project screenshots and updated links to reflect the latest UI changes
- Updated copyright years to 2026 and standardised British English in code annotations and TSDoc

#### 🗑️ Removed

##### Components

- Removed unused icon constants and simplified the overall component architecture

---

### 🧾 [4.1.0] - 2025-12-30

#### ➕ Added

##### Maps

- Introduced `aboutUsMapId` and `footerMapId` to provide unique identifiers for Google Maps instances, allowing better
  referencing and configuration via the Google Maps Platform
- Updated `VenueMap` and `SimpleVenueMap` to support an optional `mapId` prop, falling back to a generated key if not
  provided

##### Dependencies

- Added `lightgallery` to the project dependencies and integrated its SCSS into the global styles, preparing the site
  for enhanced image gallery features

#### 🔄 Changed

##### Styling

- Simplified menu styles in `_standard.scss`, moving away from custom dropdown overrides to standard `nav-link` styling
  with an italicised touch
- Significant updates to `Layout.module.scss` to handle header and footer sidebar ordering across different breakpoints
  (`md` and `lg`), ensuring logos and headings stack correctly on mobile devices

##### Build & Tooling

- Reorganised imports in `App.scss` to better categorise package, library and project styles

---

### 🧾 [4.0.3] - 2025-11-26

#### 🐛 Fixed

##### Assets

- Moved the `public/images` directory to `public/assets/images` to display the images again

---

### 🧾 [4.0.2] - 2025-11-26

#### ➕ Added

##### Dependencies

- Added the `react-pdf` dependency for PDF rendering

#### 🔄 Changed

##### Build & Tooling

- Configured the resources to use a relative path via the `@` notation
- Refactored the directory structure and renamed the stylesheets to align with industry standards
- `.env` files are no longer ignored when checking into Git

#### 🐛 Fixed

##### Documentation

- Fixed the formatting of the `LICENSE.md` file

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies

---

### 🧾 [4.0.1] - 2025-10-27

#### ➕ Added

##### Documentation

- Added JSDoc comments for better documentation

##### Dependencies

- Added `bootstrap-icons` for icon library support
- Added `react-google-recaptcha-v3` and `@types/react-google-recaptcha-v3` for reCAPTCHA integration

#### 🔄 Changed

##### Build & Tooling

- Upgraded Bootstrap framework integration with Bootstrap Icons
- Applied `fs.strict` checking to HTML files (via the Vite upgrade)
- Improved the `GeneratePrDescription.ts`/`GenerateReleaseNotes.ts` builder scripts
- Improved code readability, maintainability and type safety; resolved outstanding project errors and warnings

##### Components

- Refactored conditional rendering logic across components for improved readability and maintainability
- Improved error handling and type annotations

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies; **Vite** upgraded `6.3.5` → `6.3.6` → `6.4.1` (security fixes and
  improvements)

---

### 🧾 [4.0.0] - 2025-08-17

#### ➕ Added

##### Assets

- Added the Bosninja logo in black and white

##### Components

- Created new Content components

#### 🔄 Changed

##### Routing & Sitemap

- Updated the sitemap

##### Styling

- Used `@use` and `@forward` instead of `@import` in the stylesheets
- Renamed the partial stylesheets to start with an underscore
- Overrode some default Bootstrap styles and used namespaces in the project stylesheets
- Created a `vendors` subdirectory for Bootstrap overrides

##### Build & Tooling

- Refactored the directory structure
- Updated the build targets to `ES2023`
- Integrated with Junie

##### Documentation

- Improved the `ARCHITECTURE.md` file
- Moved the `CHANGELOG.md` file contents for Version 3 to `HISTORY.md`
- Created templates for `CHANGELOG.md` and `RELEASE_NOTES.md`

#### 🐛 Fixed

##### Forms

- Fixed the e-mail address regular expression

#### 🔐 Security

##### Dependencies

- Updated vulnerable dependencies

---

### 📋 Version Policy

This project follows [Semantic Versioning 2.0.0](https://semver.org/):

- **MAJOR** version for a significant redesign or structural overhaul of the site (routing, directory layout or the
  underlying framework)
- **MINOR** version for new pages, features or backward-compatible additions
- **PATCH** version for fixes, content updates and small improvements

The legacy Version 3.x line, narrated in [HISTORY.md](HISTORY.md), already followed this same `MAJOR.MINOR.PATCH`
scheme.

---

### 🚀 Upgrade Guide

#### From v3.x to v4.x

**Breaking changes for local development:** Yes

- The directory structure was refactored and stylesheets renamed to align with industry standards (v4.0.0/v4.0.2)
- Relative imports were replaced with path aliases (`@`, `@components`, `@features`, etc. — see `CLAUDE.md`'s Path
  Aliases section); re-run `npm install` and check any local branches for stale relative imports
- `.env` files are no longer excluded from Git (v4.0.2) — review your local `.env.local`/`.env.production` before
  pulling to avoid conflicts
- `public/images` moved to `public/assets/images` (v4.0.3)

#### Within the v4.x line

**Breaking changes:** None. Each v4.x release is a backward-compatible content, feature or maintenance update — pull
the latest `develop`/`main`, run `npm install` and rebuild.

---

### 🤝 Contributing

Project setup, this repository's git workflow and the pull request checklist are documented in [
`CONTRIBUTING.md`](CONTRIBUTING.md), which follows the conventions in [AGENTS.md](AGENTS.md) and [CLAUDE.md](CLAUDE.md).
In short:

1. Branch from `develop` using the GitFlow model (`feature/<short-description>`, `hotfix/<short-description>` or
   `release/vX.Y.Z` — see AGENTS.md's Git Workflow)
2. Run `npm run lint`, `npm run build` and `npm test` before opening a PR
3. Add a `CHANGELOG.md` entry under `### 🧪 [Unreleased]` in the same change, per AGENTS.md's Git Workflow conventions
4. Open the PR against `develop`, never `main`

---

### 💬 Support

For issues, feature requests or questions:

- **GitHub Issues:** [tahoni/hpsc-web-vite/issues](https://github.com/tahoni/hpsc-web-vite/issues)
- **Repository:** [tahoni/hpsc-web-vite](https://github.com/tahoni/hpsc-web-vite)
