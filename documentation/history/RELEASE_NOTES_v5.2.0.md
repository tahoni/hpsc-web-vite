# Release Notes – Version 5.2.0

**Release Date:** September 13, 2026 **Status:** ✨ Stable

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
a WCAG AA baseline checklist round out the release's process improvements. The release branch then went on to fully
clear the project's `tsdoc/syntax` backlog (escalating the rule to `"error"`), add Claude Code GitHub Action
integration for automated PR review and `@claude` mentions, update the attribution footer used by this project's
own release-prep skills, and fix the `prep-version-release` skill's release-tag guidance to match this repository's
actual tag format.

## ⭐ Key Highlights

### 🔬 CI/CD Quality Gate

- Added `.github/workflows/build.yml`, running `npm run lint`, `npm run build` and `npm run test:run` on push/PR to
  `main` and `develop`, so failures now gate merges instead of relying on contributor discipline
- Added an advisory-only `npm audit` step (`continue-on-error: true`); currently 0 vulnerabilities
- Added `.github/workflows/claude.yml`/`claude-code-review.yml`, so `@claude` mentions get a response and every pull
  request gets automated Claude Code review, both authenticated via repository secrets/variables

### 🧪 Testing Foundations

- Added `vitest.config.ts` (`jsdom` environment, `mergeConfig`-ing `vite.config.ts` for path-alias parity) and a
  `test:run` script for single CI-friendly runs
- Added the project's first tests: unit tests for `src/utils/htmlUtils.ts` and a smoke test for
  `builders/RoutesSitemap.ts`'s `generateRoutesSitemap`

### ♿ Accessibility & SEO

- Added `eslint-plugin-jsx-a11y`'s `recommended` rule set (the codebase was already clean against it) and a manual
  WCAG AA baseline checklist for what it can't catch statically
- Gave every page a unique `document.title`, meta-description and canonical link, sourced from a new
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
- Fully cleared Gap #11's `tsdoc/syntax` warning backlog — every doc comment across the codebase is now valid
  TSDoc — and escalated the ESLint rule from `"warn"` to `"error"` so a regression fails the build

### 🤖 Claude Code Integration

- Added `.github/workflows/claude.yml`, which runs Claude Code when `@claude` is mentioned in an issue, issue
  comment, or pull request review/review comment
- Added `.github/workflows/claude-code-review.yml`, which runs the `code-review` plugin automatically on every
  opened or updated pull request and posts findings as inline comments
- Updated the `generate-pr-summary` and `prep-version-release` skills to end their drafted PR descriptions with the
  standard Claude Code attribution footer
- Fixed `prep-version-release`'s Output section telling users to tag releases `version-$VERSION`, matching
  `AGENTS.md`'s Merging section and this repository's actual `v$VERSION` tag history instead

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
- Added `.github/workflows/claude.yml`, which runs Claude Code when `@claude` is mentioned in an issue, issue
  comment, or pull request review/review comment
- Added `.github/workflows/claude-code-review.yml`, which runs the `code-review` plugin automatically on every
  opened or updated pull request and posts findings as inline comments
- Both workflows authenticate via a `CLAUDE_CODE_OAUTH_TOKEN` repository secret; `claude-code-review.yml` also passes
  the `NPM_TOKEN_READ` secret through to its `Run Claude Code Review` step so `.npmrc`'s `@tahoni` scope can
  authenticate when Claude runs `npm install`/`npm ci` against a pull request, and the `VITE_GOOGLE_MAPS_API_KEY`/
  `VITE_RECAPTCHA_V2_SITE_KEY` secrets so the venue map and Contact Us captcha can render if Claude runs/builds the
  app while reviewing; `claude-code-review.yml` also sets the non-sensitive `VITE_SITE_URL` from a repository
  variable (Settings > Actions > Variables) rather than a secret

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

#### Build & Tooling

- Escalated `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule from `"warn"` to `"error"` in `eslint.config.js` and its
  legacy `.eslintrc.cjs` mirror, now that `npm run lint` reports zero `tsdoc/syntax` warnings — closing Gap #11 in
  `documentation/roadmap/improvement-plan.md`; a future TSDoc syntax regression now fails `npm run lint` and the CI
  gate instead of silently accumulating as a warning
- Updated the `generate-pr-summary` and `prep-version-release` skills to end their drafted PR descriptions with the
  standard Claude Code attribution footer, consistent with any other PR description it opens

#### Documentation

- Changed the `{@link ReactElement}` TSDoc tag to `{@see ReactElement}` in `AboutUsPage.tsx` and `ContactUsForm.tsx`'s
  `@returns` lines
- Added a `{@link SanitizedWidget}` cross-reference to `SanitizedBaseInputTemplate.tsx`'s TSDoc comment
- Reworded `ImageSidebar.tsx`'s `@param` line from "The properties object" to "The property object"

### 🐛 Fixed

#### Developer Experience

- Fixed `baseUrl` in `src/constants/commonConstants.ts` being a hardcoded string literal instead of sourced from an
  environment variable: it now reads `import.meta.env?.VITE_SITE_URL ?? process.env.VITE_SITE_URL` (the
  `process.env` fallback keeps `builders/RoutesSitemap.ts` working when run standalone via `tsx`, outside Vite),
  defaulting to `https://www.hpsc.co.za` via `.env.production`; `index.html`'s canonical link now uses the same
  `%VITE_SITE_URL%` build-time substitution instead of a static href, so it can't drift from `baseUrl` again
- Fixed `baseUrl` resolving to `undefined` (and crashing `builders/RoutesSitemap.test.ts` with `TypeError: Invalid
  URL`) whenever `VITE_SITE_URL` isn't set — Vitest, unlike Vite's own dev/build modes, doesn't load
  `.env.production` automatically — by giving `baseUrl` a third, hardcoded fallback of `https://www.hpsc.co.za`,
  matching `.env.production`'s own default; closes Gap #15 in `documentation/roadmap/improvement-plan.md`

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
- Fixed the `prep-version-release` skill telling the user to tag releases as `version-$VERSION`, contradicting
  `AGENTS.md`'s Merging section and this repository's actual tag history (`v5.0.0`–`v5.1.3`), both of which say the
  tag format since `4.2.3` is `v$VERSION`; `version-X.Y.Z` was only ever used for the legacy Version 3.x/early 4.x
  line

#### Testing

- Guarded `builders/RoutesSitemap.ts`'s module-level `generateRoutesSitemap().then(...)` call behind an
  is-run-as-script check, so importing it for tests no longer triggers a real sitemap generation as a side effect
- Fixed all 3 `RoutesSitemap.test.ts` tests failing when `VITE_SITE_URL` isn't set in the shell (see the `baseUrl`
  fix above); `npm run test:run` now passes 14/14 tests from a clean checkout with no ambient `VITE_SITE_URL`

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
- Fixed the non-standard `@return` TSDoc tag to the standard `@returns` in `src/models/email/EmailMessage.ts`'s
  `isValid` method and `src/App.tsx`'s `App` component
- Fixed a mismatched quote/backtick around `React.memo` in `AboutUsPage.tsx`'s TSDoc comment
- Fixed a missing hyphen between the `@param` name and description in `EmailAttachment.ts`
- Fixed the JSDoc-style `@param [name]` optional-name brackets (invalid TSDoc syntax) to plain `@param name` in
  `MapUtils.ts`'s `generateMapVenueKey`/`generateMapKey`
- Fixed `YouTubeVideo.tsx`'s corrupted `@*/` comment terminator (should have been a plain `*/`) and removed its
  invalid `@param props.url` tag (TSDoc doesn't support dotted parameter names)
- Fixed American-English spellings in TSDoc comments — `behavior`→`behaviour` and `sanitized`→`sanitised` in
  `ContactUsSchema.ts`, `center`→`centre` in `MapUtils.ts`'s `generateMapKey` — and minor grammar: a missing article
  in `LinkWithLogoAndDescription.tsx`, a doubled space in `venueConstants.ts` and in `ContactUsForm.tsx`'s `@returns`
  line, and a plain-text `console.error` reference in `ErrorBoundary.tsx`'s comment now code-formatted
- Fixed remaining Oxford commas and American-English spellings (`meta description`→`meta-description`,
  `mechanically-checkable`→`mechanically checkable`, `artifacts`→`artefacts`) in `HISTORY.md`, `RELEASE_NOTES.md`,
  `improvement-plan-tasks.md`, `project-accessibility-checklist.md`, `eslint.config.js`'s ignore-patterns comment
  and `.claude/skills/generate-pr-summary/SKILL.md`, per `AGENTS.md`'s British English/list-comma convention
- Fixed a stray digit corrupting a bullet list item (`3- #3` instead of `- #3`) in `improvement-plan.md`'s
  At a Glance summary

### 🗑️ Removed

#### Documentation

- Removed the `@module` TSDoc tag (and its preceding blank comment line) from `src/vite-env.d.ts`, the `constants`
  files and the feature `index.ts`/`ContactUsSchema.ts` files
- Removed the `@type` TSDoc tag (and its preceding blank comment line where it was the sole tag) from the memoised
  feature page/content components and other constants files
- Removed the `@interface` and `@property` TSDoc tags from `ContactUsSchema.ts`'s exported fields/widgets/schema
  constants, `ContactUsEmailTemplateProps` and `VenueMapProps`
- Removed the `{...}` type annotation (including the `{@see ReactElement}` tags added above) from every `@param`/
  `@returns` TSDoc tag across the feature page components, `ContactUsEmailTemplate.tsx`, `WorldShoot2025Content.tsx`,
  `MapUtils.ts`, `VenuesContent.tsx`, and the shared `Content`/`Map`/`Sidebar`/`Text`/`Title`/`Video` components
- Removed the `@prop` TSDoc tags (and their preceding blank comment line) from `ContactUsFormData.ts`

#### Components

- Removed dead, commented-out `APIProvider`/`GoogleReCaptchaProvider` wrapper markup from `App.tsx`

### 🔐 Security

#### Dependencies

- Bumped the transitive `js-yaml` dependency (via `eslint` → `@eslint/eslintrc`) from `4.3.1` to `4.3.2`, resolving a
  GitHub Dependabot high-severity advisory (`maxTotalMergeKeys` not limiting CPU use for empty merge sources,
  [GHSA-2883-xcg3-v3hh](https://github.com/advisories/GHSA-2883-xcg3-v3hh)) via `npm audit fix`; `js-yaml` is a
  dev-only dependency used to parse ESLint's own config, never bundled into the shipped app. `npm audit` now reports
  0 vulnerabilities

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
- **`tsdoc/syntax` is now an error, not a warning.** Any new doc comment with invalid TSDoc syntax now fails
  `npm run lint` and the CI gate; there's no remaining backlog to blame it on.
- **`@claude`/automated PR review requires repository configuration.** `claude.yml`/`claude-code-review.yml` need a
  `CLAUDE_CODE_OAUTH_TOKEN` secret, `claude-code-review.yml` additionally needs `NPM_TOKEN_READ`,
  `VITE_GOOGLE_MAPS_API_KEY` and `VITE_RECAPTCHA_V2_SITE_KEY` secrets and a `VITE_SITE_URL` repository variable — see
  `.github/workflows/claude-code-review.yml` for the exact names.

## 📊 Statistics

- **Total Commits:** 77
- **Files Changed:** 102 (+3,408 / −577 lines)

## 🧭 Design Notes

- **Gate on CI before growing test coverage.** `build.yml` was added before a large test suite existed, so failures
  start blocking merges immediately rather than after a bigger, harder-to-enforce backlog accumulates.
- **Reachable by URL is not the same as linked from the menu.** `/contact` and `/venues` being unreachable was a
  bug (Gap #2); once fixed, a separate, deliberate decision removed both from the primary navigation menu — the
  routes, sitemap entries and `.htaccess` rewrites for both stay in place.
- **Advisory before enforced.** `npm audit`'s new CI step is `continue-on-error: true` by design — it surfaces
  findings without blocking merges until the project has a documented triage process for acting on them.
- **Warn before error.** `tsdoc/syntax` shipped as `"warn"` while the backlog was cleared, then escalated to
  `"error"` only once `npm run lint` was genuinely clean — the same staged approach `eslint-plugin-jsx-a11y` didn't
  need, because that rule set started clean.

## 🧪 Testing

- `npm run lint` — 0 errors, 26 warnings (`no-unused-vars`, `react-refresh/only-export-components`); 0
  `tsdoc/syntax` warnings, down from 284 at the start of this release, now enforced as an error
- `npm run build` — passes
- `npm run test:run` — 3 test files, 14 tests, all passing, including from a clean checkout with no ambient
  `VITE_SITE_URL` set (Gap #15, closed)
- Manually verified `public/sitemap.xml` regenerates correctly via `npm run sitemap` and includes `/contact` and
  `/news`
- Manually verified `/contact`, `/venues` and `/news` render correctly by direct URL, and that neither `Contact Us`
  nor `Venues` appears in the primary navigation menu
- Manually verified the Bootstrap `@use`/`@forward` migration produces a byte-identical compiled CSS bundle against
  the pre-migration `@import` output

## 🐛 Known Issues

- 26 non-`tsdoc/syntax` lint warnings remain (`no-unused-vars`, `react-refresh/only-export-components`); the rules
  are `"warn"`, not `"error"`, so they don't fail a lint run
- Test coverage is still thin — three test files covering `htmlUtils.ts` and `RoutesSitemap.ts` only; most
  components, hooks and helpers remain untested
- An unexplained `TODO: missing imports` comment was added to `_forms.scss` with no accompanying import or
  explanation (tracked as Gap #14)

## 🔮 Future Enhancements

- Resolve or remove `_forms.scss`'s `TODO: missing imports` comment (Gap #14)
- Expand Vitest coverage beyond the initial `htmlUtils.ts`/`RoutesSitemap.ts` tests to components, hooks and
  helpers
- Run the newly documented monthly dependency-review cadence for the first time

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release closes out most of the improvement plan's "Now" phase in a single branch: a CI quality gate, initial
test coverage, automated accessibility linting, per-page SEO metadata, a top-level error boundary, a completed
Bootstrap `@use` migration and an environment-sourced `baseUrl`. It also fixes a batch of routing/sitemap defects
uncovered along the way and formalises a recurring dependency-review process. Before wrapping up, the branch also
fully cleared the `tsdoc/syntax` backlog (escalating the rule to `"error"`) and added Claude Code GitHub Action
integration for automated PR review — that same wrap-up work also surfaced two new gaps, one of which (a
`RoutesSitemap.test.ts` failure whenever `VITE_SITE_URL` isn't set) was closed before shipping by giving `baseUrl`
a hardcoded ultimate fallback; an unexplained `_forms.scss` TODO (Gap #14) remains the clear starting point for the
next release. A high-severity `js-yaml` Dependabot alert, surfaced by GitHub after this branch was pushed, was also
resolved before merging via a routine `npm audit fix`.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
