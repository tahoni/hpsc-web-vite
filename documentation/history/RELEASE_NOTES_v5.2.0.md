# Release Notes – Version 5.2.0

**Release Date:** September 6, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Quality Gate Foundations: CI, Testing, Accessibility & SEO**

Version 5.2.0 is this project's biggest quality-infrastructure release since `4.0.0`'s Keep a Changelog adoption,
closing out most of `documentation/roadmap/improvement-plan.md`'s "Now" phase in one branch. `build.yml` now gates
every pull request against `main`/`develop` on `npm run lint`, `npm run build` and `npm run test:run` passing, backed
by the project's first Vitest infrastructure and initial test coverage. `eslint-plugin-jsx-a11y` catches accessibility
regressions automatically, every route now renders a unique `document.title`/meta description/canonical link instead
of sharing `index.html`'s static tags, and a top-level `ErrorBoundary` replaces a blank page with a friendly fallback
on an unhandled render error. Alongside that, `src/vendors/bootstrap/styles/index.scss` completes its migration to
`@use`/`@forward`, `baseUrl` is finally sourced from `VITE_SITE_URL` instead of a hardcoded literal, `News` is wired
into live routing, and `Contact Us`/`Venues` are reachable again (by direct URL — both were deliberately kept off the
primary navigation menu, which now lists only the site's core sections). A new monthly dependency-review cadence and
a WCAG AA baseline checklist round out the release's process improvements.

## ⭐ Key Highlights

### 🔬 CI/CD Quality Gate

- Added `.github/workflows/build.yml`, running `npm run lint`, `npm run build` and `npm run test:run` on push/PR to
  `main` and `develop`, so failures now gate merges instead of relying on contributor discipline
- Added an advisory-only `npm audit` step (`continue-on-error: true`); currently 0 vulnerabilities

### 🧪 Testing Foundations

- Added `vitest.config.ts` (`jsdom` environment, `mergeConfig`-ing `vite.config.ts` for path-alias parity) and a
  `test:run` script for single CI-friendly runs
- Added the project's first tests: unit tests for `src/utils/htmlUtils.ts` and a smoke test for
  `builders/RoutesSitemap.ts`'s `generateRoutesSitemap`

### ♿ Accessibility & SEO

- Added `eslint-plugin-jsx-a11y`'s `recommended` rule set (the codebase was already clean against it) and a manual
  WCAG AA baseline checklist for what it can't catch statically
- Gave every page a unique `document.title`, meta description and canonical link, sourced from a new
  `PageMapping.description` field, instead of every route sharing one static set of tags

### 🛡️ Resilience & Styling

- Added a top-level `ErrorBoundary` wrapping `App.tsx`'s route tree, rendering a friendly fallback instead of a
  blank page on an unhandled render error
- Migrated `src/vendors/bootstrap/styles/index.scss` from the legacy `@import` to `@use`/`@forward`, verified
  byte-identical against the pre-migration compiled CSS

### 🛣️ Routing, Sitemap & Navigation Cleanup

- Wired `News` into the app's live routes (was previously defined but unreachable)
- Fixed `/contact` and `/venues` being commented out of `routeHelpers.tsx`, and `Contact Us`'s inverted
  `dateCreated`/`dateUpdated`; both routes are reachable by direct URL, and were then deliberately removed from
  `menuHelpers.tsx`'s primary navigation menu, leaving it focused on the site's core sections
- Fixed `public/sitemap.xml`'s malformed first `<loc>` entry and sourced `baseUrl` from `VITE_SITE_URL` instead of a
  hardcoded string literal, so `index.html`'s canonical link can no longer drift from it

### 📚 Documentation & Release Process

- Documented a monthly dependency-update cadence and added a "Review dependencies" step to `AGENTS.md`'s Release
  Checklist
- Added `HISTORY.md`'s "🚀 Future Roadmap Implications" section, synthesising forward-looking implications for
  Major Version 5's planned redesign
- Removed the non-standard `@module` JSDoc tag from six files, progressing (not yet closing) Gap #11's `tsdoc/syntax`
  warning cleanup

## 📦 What's New

### ➕ Added

#### Developer Experience

- Documented `VITE_SITE_URL` and `VITE_SHOW_BREAKPOINTS` in `.env.example`, matching the existing
  `VITE_GOOGLE_MAPS_API_KEY`/`VITE_RECAPTCHA_V2_SITE_KEY` style, and added JSDoc to `vite-env.d.ts`'s
  `ImportMetaEnv`/`ImportMeta` interfaces with per-property comments synced to `.env.example`'s descriptions

#### Build & Tooling

- Added `.github/workflows/build.yml`, running `npm run lint`, `npm run build` and `npm run test:run` on push/PR to
  `main` and `develop` (mirroring `codeql.yml`'s trigger branches), so lint/build/test failures now gate merges
  instead of relying entirely on contributor discipline
- Added an advisory-only `npm audit` step to `build.yml` (`continue-on-error: true`, so findings are reported
  without blocking merges); `npm audit` currently finds 0 vulnerabilities
- Added `eslint-plugin-jsx-a11y`'s `recommended` rule set to `eslint.config.js`/`.eslintrc.cjs` at its native
  (mostly `"error"`) severity — the codebase was already clean against it, so no `"warn"`-first transition (like
  `tsdoc/syntax`'s) was needed
- Added `*.mdx` to `.prettierignore`, since Prettier doesn't format MDX well

#### Testing

- Added `vitest.config.ts`, `mergeConfig`-ing `vite.config.ts` (so path aliases stay in sync) with
  `test.environment: "jsdom"`, and `jsdom` as a dev dependency
- Added a `test:run` script (`vitest run`) for a single CI-friendly run, used by `build.yml`'s Test step and
  documented in `README.md`/`AGENTS.md`
- Added the project's first tests: unit tests for `src/utils/htmlUtils.ts` (`sanitizeValue`, `nonBreakingHyphens`,
  `nonBreakingSpaces`) and a smoke test for `builders/RoutesSitemap.ts`'s `generateRoutesSitemap`

#### Routing & Sitemap

- Wired the `News` feature into the app's live routes (`coreRoutes` in `BaseRoutes.ts`, `RouteAliases.tsx`,
  `routeHelpers.tsx`'s `routes` array), lazy-loaded like every other page — `/news` was previously defined but
  unreachable; added a matching `/news` rewrite condition to `public/.htaccess`

#### Components

- Added a top-level `ErrorBoundary` (`src/shared/layouts/ErrorBoundary/`) wrapping `App.tsx`'s
  `<Suspense>`/`<AppRoutes />` tree, rendering a friendly, dependency-free fallback (reload button, link home)
  instead of a blank page on an unhandled render error; logs the caught error via `console.error`

#### Documentation

- Added `documentation/recommendations/project-accessibility-checklist.md`, a manual WCAG AA baseline checklist
  covering what `eslint-plugin-jsx-a11y` can't check statically (colour contrast, heading structure, focus order,
  link purpose), linked from `AGENTS.md`'s Linting bullet and `CONTRIBUTING.md`'s Pull Request Checklist
- Added a palette token map and a `@use`-based usage example to `src/assets/styles/_colors.scss`'s header docblock
- Added a "🚀 Future Roadmap Implications" section to `HISTORY.md`, between Key Learnings and Conclusion per
  `AGENTS.md`'s Release Checklist step 7 ordering, synthesising five forward-looking implications this project's
  history carries for Major Version 5's planned redesign and the standing roadmap gaps that precede it; closes
  improvement-plan.md's Gap #9

#### SEO

- Gave every page a unique `document.title`, `<meta name="description">` and `<link rel="canonical">`
  (`src/shared/pages/Page.tsx`, sourced from a new `PageMapping.description` field populated per route in
  `BaseRoutes.ts`), instead of every route sharing `index.html`'s one static set of tags

#### Release Process

- Documented a monthly dependency-update cadence in `AGENTS.md`'s Code Quality & CI section (run
  `npm outdated`/`npm audit` locally, triage Dependabot alerts, bump patch/minor versions routinely, extra scrutiny
  for `sanitize-html`/`react-google-recaptcha-v3`), and added a new Release Checklist step, "Review dependencies",
  so it's actually run at each release instead of only whenever someone remembers

### 🔄 Changed

#### Styling

- Migrated `src/vendors/bootstrap/styles/index.scss` from the legacy `@import` to `@use`/`@forward` —
  `bootstrap/scss/functions`/`custom` are now `@use`d, and `bootstrap/scss/bootstrap` is `@forward`ed with a
  `with (...)` map configuring its variables from `_custom.scss`, so `@use "@bootstrap/styles/index" as *`
  consumers (`App.scss`, `_forms.scss`) still see Bootstrap's forwarded variables/mixins; verified the compiled CSS
  is unaffected (byte-identical bundle vs. the pre-migration `@import` output)

### 🐛 Fixed

#### Developer Experience

- Fixed `baseUrl` in `src/constants/commonConstants.ts` being a hardcoded string literal instead of sourced from an
  environment variable: it now reads `import.meta.env?.VITE_SITE_URL ?? process.env.VITE_SITE_URL` (the
  `process.env` fallback keeps `builders/RoutesSitemap.ts` working when run standalone via `tsx`, outside Vite),
  defaulting to `https://www.hpsc.co.za` via `.env.production`; `index.html`'s canonical link now uses the same
  `%VITE_SITE_URL%` build-time substitution instead of a static href, so it can't drift from `baseUrl` again

#### Routing & Sitemap

- Fixed `coreContactUsRoute`'s inverted `dateCreated`/`dateUpdated` in `BaseRoutes.ts` (`dateCreated` postdated
  `dateUpdated` by over nine months) and `public/sitemap.xml`'s malformed first `<loc>` entry
  (`https: www.hpsc.co.za`, missing slashes); regenerated the sitemap via `npm run sitemap`, now including
  `/contact` and `/news` (9 URLs total)
- Fixed `/contact` and `/venues` being commented out of `routeHelpers.tsx`'s `routes` array, despite both already
  being indexed in `public/sitemap.xml` and whitelisted in `public/.htaccess` — either URL previously rendered a
  blank page inside the site chrome; both pages are now reachable by direct URL. Both were then deliberately removed
  from `menuHelpers.tsx`'s `menuItems` (the primary navigation menu), which now lists only the site's core sections

#### Build & Tooling

- Fixed two `'process' is not defined` ESLint errors (`commonConstants.ts`, `vite.config.ts`) by adding
  `globals.node`/`env: { node: true }` to `eslint.config.js`/`.eslintrc.cjs`, which previously only declared browser
  globals despite this project's Node-side build scripts

#### Testing

- Guarded `builders/RoutesSitemap.ts`'s module-level `generateRoutesSitemap().then(...)` call behind an
  is-run-as-script check, so importing it for tests no longer triggers a real sitemap generation as a side effect

#### Components

- Fixed `Breakpoints.tsx` comparing `import.meta.env.VITE_SHOW_BREAKPOINTS` truthily instead of against the string
  `"true"` — a literal `VITE_SHOW_BREAKPOINTS=false` would have shown breakpoints instead of hiding them, since only
  an empty/unset value is falsy for a non-empty string; corrected `vite-env.d.ts`'s `ImportMetaEnv` typing for it
  from `boolean` to `string` to match

#### Documentation

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

## 🔄 Migration Guide

### For Deployers

- **No new required environment variables.** `VITE_SITE_URL` was already set in `.env.production`
  (`https://www.hpsc.co.za`); `baseUrl` now reads it directly instead of a hardcoded literal, so no deployment
  configuration changes are needed.

### For Developers

- **Run `npm install`.** New dev dependencies: `jsdom`, `@testing-library/react`, `@testing-library/user-event`,
  `eslint-plugin-jsx-a11y`.
- **New `npm run test:run` script** runs the test suite once (CI-friendly), alongside the existing `npm test`
  watch-mode default.
- **`Contact Us`/`Venues` are off the primary navigation menu** but still reachable by direct URL and indexed in
  the sitemap — update any internal links or expectations that assumed they were unreachable rather than merely
  unlinked.

## 📊 Statistics

- **Total Commits:** 33
- **Files Changed:** 41 (+2,150 / −297 lines)

## 🧭 Design Notes

- **Gate on CI before growing test coverage.** `build.yml` was added before a large test suite existed, so failures
  start blocking merges immediately rather than after a bigger, harder-to-enforce backlog accumulates.
- **Reachable by URL is not the same as linked from the menu.** `/contact` and `/venues` being unreachable was a
  bug (Gap #2); once fixed, a separate, deliberate decision removed both from the primary navigation menu — the
  routes, sitemap entries and `.htaccess` rewrites for both stay in place.
- **Advisory before enforced.** `npm audit`'s new CI step is `continue-on-error: true` by design — it surfaces
  findings without blocking merges until the project has a documented triage process for acting on them.

## 🧪 Testing

- `npm run lint` — 0 errors; 284 pre-existing `tsdoc/syntax`/`react-refresh` warnings unchanged by this release
  (tracked as Gap #11)
- `npm run build` — passes
- `npm run test:run` — 3 test files, 14 tests, all passing (this release's first test coverage)
- Manually verified `public/sitemap.xml` regenerates correctly via `npm run sitemap` and includes `/contact` and
  `/news`
- Manually verified `/contact`, `/venues` and `/news` render correctly by direct URL, and that neither `Contact Us`
  nor `Venues` appears in the primary navigation menu
- Manually verified the Bootstrap `@use`/`@forward` migration produces a byte-identical compiled CSS bundle against
  the pre-migration `@import` output

## 🐛 Known Issues

- 284 `tsdoc/syntax`/`react-refresh` warnings remain unfixed — the rules are `"warn"`, not `"error"`, so they don't
  fail a lint run (`documentation/roadmap/improvement-plan-tasks.md` → Gap #11)
- Test coverage is still thin — three test files covering `htmlUtils.ts` and `RoutesSitemap.ts` only; most
  components, hooks and helpers remain untested

## 🔮 Future Enhancements

- Continue clearing Gap #11's remaining `tsdoc/syntax`/`react-refresh` warnings and escalate the rules from
  `"warn"` to `"error"`
- Expand Vitest coverage beyond the initial `htmlUtils.ts`/`RoutesSitemap.ts` tests to components, hooks and
  helpers
- Run the newly documented monthly dependency-review cadence for the first time

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release closes out most of the improvement plan's "Now" phase in a single branch: a CI quality gate, initial
test coverage, automated accessibility linting, per-page SEO metadata, a top-level error boundary, a completed
Bootstrap `@use` migration and an environment-sourced `baseUrl`. It also fixes a batch of routing/sitemap defects
uncovered along the way and formalises a recurring dependency-review process, leaving the roadmap's "Next" phase
(further test coverage, the remaining `tsdoc/syntax` warnings) as the clear focus for the next release.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
