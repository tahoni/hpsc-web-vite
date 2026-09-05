# HPSC Website Improvement Plan

This document synthesises the goals and constraints stated across this repository's documentation and configuration into
a single set of prioritised improvement opportunities. Unlike [`../../README.md`](../../README.md) and
[`../../ARCHITECTURE.md`](../../ARCHITECTURE.md), it is not evergreen — it reflects a point-in-time reading of the
project and should be revisited whenever a major gap it names is closed or a new one is identified.

## Table of Contents

- [🎯 Purpose & Scope](#-purpose--scope)
- [⚙️ Goals & Constraints (Synthesised)](#-goals--constraints-synthesised)
- [🔍 Gaps & Improvement Opportunities](#-gaps--improvement-opportunities)
- [🚀 Roadmap](#-roadmap)
- [☑️ Success Criteria](#-success-criteria)
- [📚 Related Documentation](#-related-documentation)

---

## 🎯 Purpose & Scope

This plan draws only on what the repository already states about itself — `../../README.md`, `../../ARCHITECTURE.md`,
`../../UI.md`, `../../AGENTS.md`, `../../CLAUDE.md`, `../../CONTRIBUTING.md`, `../../HISTORY.md`'s Future Roadmap
sections, `../../package.json` and `../../vite.config.ts` — rather than introducing new goals. Where the documentation
and the configuration disagree, or where a stated goal has no corresponding work item yet, that gap is called out below
as an improvement opportunity.

It complements, rather than duplicates, `../../HISTORY.md`'s per-release "🚀 Future Roadmap Implications" section: that
section tracks what changed release-to-release, while this document tracks the standing, cross-release gaps between the
project's stated intent and its current state.

---

## ⚙️ Goals & Constraints (Synthesised)

| Source                                               | Goal / constraint                                                                                                                                                                                                                                              |
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `../../README.md`, `../../AGENTS.md`                 | Deliver an informative, content-driven club website; there is no backend in this repository — contact-form email delivery and reCAPTCHA verification are the only server-side dependencies, both third-party, called directly from the client                  |
| `../../ARCHITECTURE.md` (Data-Driven Routing)        | Routing is driven by `PageMapping` instances (`BaseRoutes.ts` → `RouteAliases.tsx` → `AppRoutes.tsx`), reused as-is by the sitemap builder — not static JSX route trees                                                                                        |
| `../../ARCHITECTURE.md` (Feature-Based Organization) | Code is organised by feature under `../../src/features`, each self-contained with a page component, content component(s), MDX, styles and a barrel `index.ts`                                                                                                  |
| `../../AGENTS.md` (Code Quality & CI)                | Only CodeQL runs automatically (push/PR to `main`, and weekly); `npm run lint`/`build`/`test` must be run locally before opening a PR — no automated build/test gate exists yet                                                                                |
| `../../AGENTS.md` (Documentation Conventions)        | British English spelling throughout prose; every ToC-listed heading carries a reused or deliberately new emoji; `../../README.md`/`../../ARCHITECTURE.md`/`../../UI.md` stay version-agnostic (reverse-synced from release docs, not the other way round)      |
| `../../AGENTS.md` (Git Workflow, Release Checklist)  | GitFlow branching (`develop` → `release/vX.Y.Z` → `main`, `hotfix/*` direct to `main`), and a fixed, ordered Release Checklist covering `../../package.json`, `../../CHANGELOG.md`, `../../RELEASE_NOTES.md`, `../../HISTORY.md` and archived per-version docs |
| `../../AGENTS.md` (Test Conventions)                 | Vitest is configured but no test files exist yet; when added, co-locate `*.test.ts`/`*.test.tsx`, use `@testing-library/react` with a `jsdom` environment and don't test the type system or trivial pass-through props                                         |
| `../../package.json`, `../../vite.config.ts`         | React 19, Vite 8, TypeScript 6 strict mode, React Router 8 — a fixed stack; `../../vite.config.ts`'s `manualChunks` already splits FontAwesome/MDX/RJSF/FullCalendar/react-google/vis.gl into separate vendor chunks                                           |
| `../../CONTRIBUTING.md`                              | New contributors need `NPM_TOKEN_READ` just to `npm install`; `GOOGLE_MAPS_API_KEY`/`RECAPTCHA_V2_SITE_KEY` are optional locally but needed for the venue map and Contact Us captcha to render                                                                 |

---

## 🔍 Gaps & Improvement Opportunities

Gaps are grouped by completion status — ✅ Completed, 🟡 Partially Completed, ⚪ Open — and numbered sequentially
across the whole document; a number is assigned once and never reused or resequenced, so it stays a gap's stable
identifier even after it moves between sections as its status changes (e.g. Open → Partially Completed → Completed).
Within each section, gaps stay in ascending number order.

### ✅ Completed

#### 1. No automatic lint/build/test gate on pull requests — ✅ Closed in v5.2.0

**Evidence:** `../../.github/workflows` contains only `codeql.yml` (security analysis, on push/PR to `main`/`develop`
and weekly). `../../AGENTS.md`'s Code Quality & CI section states plainly: "There is currently no CI workflow that
runs `npm run lint`, `npm run build` or `npm test` — only CodeQL runs automatically. Run these locally before opening
a PR." `../../CONTRIBUTING.md`'s Pull Request Checklist relies entirely on the contributor remembering to run all
three.

**Why it matters:** GitFlow's `feature/*` → `develop` → `release/*` → `main` promotion (per `../../AGENTS.md`'s Git
Workflow) depends on lint/build/test genuinely passing at each merge; today that depends entirely on reviewer and
contributor discipline, with nothing enforcing it automatically.

**Proposed improvement:** Add a workflow (e.g. `build.yml`) triggered on push/PR to `develop` and `main`, mirroring
`codeql.yml`'s trigger branches, running `npm ci`, `npm run lint`, `npm run build` and `npm test`. Gate the bundle
visualiser's auto-open behind the same CI check — `../../vite.config.ts`'s `rollup-plugin-visualizer` currently always
opens (`open: true`), which would be disruptive in a headless runner.

**Outcome:** In `5.2.0`, `../../.github/workflows/build.yml` was added, mirroring `codeql.yml`'s trigger branches
(`main`, `develop`) and running `npm ci`, `npm run lint`, `npm run build` and `npm test`; `npm ci` authenticates
against the `@tahoni` GitHub Packages scope via the `NPM_TOKEN_READ` secret, per `../../.npmrc`.
`../../vite.config.ts`'s `rollup-plugin-visualizer` now opens conditionally (`open: !process.env.CI`) instead of
always, so it still pops up for a local `npm run build` but stays silent in the headless runner.
`../../AGENTS.md`'s Code Quality & CI section was updated to describe the new workflow instead of stating no CI gate
exists. Locally confirmed (with `CI=true`) that `npm run lint` and `npm test` both exit non-zero on a real failure —
a probe ESLint error and, separately, `npm test` against zero test files (`vitest`'s "No test files found, exiting
with code 1") — so the workflow genuinely gates rather than silently succeeding; `npm run build` failing on a type
error is `tsc -b`'s well-established behaviour.

#### 2. Two concrete route-metadata defects, one already visible in production output — ✅ Closed in v5.2.0

**Evidence:** `../../src/features/News` exists as a complete feature folder but is referenced by no route mapping —
absent from `BaseRoutes.ts`'s `coreRoutes`, `RouteAliases.tsx` and consequently the generated sitemap. Separately,
`coreContactUsRoute` in `BaseRoutes.ts` sets `dateCreated: new Date("2025-12-26")` after its own
`dateUpdated: new Date("2025-03-03")` — an internally inconsistent pair that also feeds
`../../builders/RoutesSitemap.ts`'s `lastmod` output.

**Why it matters:** `../../builders/RoutesSitemap.ts` and its output, `../../public/sitemap.xml`, are the site's only
mechanism for surfacing content freshness and priority to search engines; the checked-in `../../public/sitemap.xml` is
already visibly stale — its first `<loc>` entry is malformed (`https: www.hpsc.co.za`, missing slashes) and the file
predates the Events route entirely.

**Proposed improvement:** Wire `News` into `coreRoutes`/`RouteAliases.tsx`/`AppRoutes.tsx`, or delete the folder if the
feature isn't ready to ship. Fix the inverted Contact Us dates. Regenerate `../../public/sitemap.xml` via
`npm run sitemap` once both are fixed.

**Outcome:** In `5.2.0`, `coreNewsRoute` (dated `2026-09-05`) was added to `../../src/shared/routes/BaseRoutes.ts`'s
`coreRoutes` and wired all the way through: `../../src/shared/routes/RouteAliases.tsx` now `React.lazy`-loads
`NewsPage` (matching every other feature page, instead of the static import it started with) and exports a `news`
mapping, `../../src/helpers/routeHelpers.tsx`'s `routes` array includes `{ mapping: news }` so `/news` is actually
reachable rather than merely defined, and `../../public/.htaccess`'s rewrite whitelist gained a `/news` condition so
a direct hit doesn't 404. `coreContactUsRoute`'s `dateCreated`/`dateUpdated` were swapped into chronological order.
`../../public/sitemap.xml` was regenerated via `npm run sitemap`, fixing the malformed first `<loc>` entry and
adding the `/contact` and `/news` URLs — 9 entries in total.

#### 3. Zero test coverage despite a configured test runner — ✅ Closed in v5.2.0

**Evidence:** `../../package.json` has a working `test` script (`vitest`) and `vitest` as a dependency, but no
`*.test.ts`/`*.test.tsx` file exists anywhere under `../../src`. There is no `vitest.config.ts`, no `jsdom` environment,
and `@testing-library/react`/`@testing-library/user-event` aren't dev dependencies.

**Why it matters:** Every route, the Contact Us forms RJSF schema/validation and the data-driven route mappings
(`PageMapping`) currently ship with no regression safety net. `EmailService.sendEmail()` is still a
`// TODO: call back-end` stub that unconditionally returns `true` — its eventual real implementation will have nothing
to test against unless test infrastructure exists first.

**Proposed improvement:** Add `vitest.config.ts` (`test.environment = 'jsdom'`) and the missing dev dependencies, then
start with unit/smoke tests for pure logic (`htmlUtils.ts`, `RoutesSitemap.ts`) before component tests.

**Outcome:** In `5.2.0`, `../../vitest.config.ts` was added, `mergeConfig`-ing `../../vite.config.ts` (so path aliases
stay in sync) with `test.environment: "jsdom"`; `jsdom` was added as a dev dependency (`@testing-library/react`/
`@testing-library/user-event` were already present). A `test:run` script (`vitest run`) was added for a single
CI-friendly run — `../../.github/workflows/build.yml`'s Test step now uses it instead of `npm test`'s watch-mode
default — and documented in `../../README.md`'s Available Scripts and `../../AGENTS.md`'s Test Conventions. Unit/smoke
tests were added for `../../src/utils/htmlUtils.ts` (`sanitizeValue`, `nonBreakingHyphens`, `nonBreakingSpaces`) and
`../../builders/RoutesSitemap.ts` (`generateRoutesSitemap`'s XML structure, one `<url>` per core route, Home's higher
priority). `../../builders/RoutesSitemap.ts`'s module-level `generateRoutesSitemap().then(...)` call — which used to
run automatically on import — was guarded behind an "is this file being run directly" check so importing it for tests
no longer triggers a real sitemap generation as a side effect.

#### 4. No error boundary or production error handling — ✅ Closed in v5.2.0

**Evidence:** No `ErrorBoundary` component exists anywhere under `../../src`; a rendering error in any route currently
produces a blank or broken page with no fallback UI.

**Why it matters:** The site has no backend and no logging/monitoring integration (per `../../AGENTS.md`'s Project
Overview) — an unhandled render error is currently invisible to both the visitor and the maintainer.

**Proposed improvement:** Add a top-level React error boundary around the route tree with a friendly fallback; evaluate
lightweight client-side logging alongside it once the boundary exists.

**Outcome:** In `5.2.0`, `../../src/shared/layouts/ErrorBoundary/ErrorBoundary.tsx` was added — a class component
(error boundaries can't yet be written as hooks) wrapping `../../src/App.tsx`'s `<Suspense>`/`<AppRoutes />` tree,
rendering a friendly, dependency-free fallback (a reload button and a plain link home, deliberately not composed
from anything that could itself be part of what broke) instead of a blank page. Verified with a unit test
(`ErrorBoundary.test.tsx`, rendering a throwing child via `@testing-library/react`) and, live, by temporarily making
a real page throw in a running `npm run dev` session and confirming the fallback renders with zero uncaught page
errors, then reverting the temporary throw. On the "evaluate lightweight client-side logging" half: `componentDidCatch`
logs the caught error via `console.error` unconditionally (dev and production alike), since that's the only
diagnostic channel available without adding a third-party dependency this pass didn't seek approval for. Blanket
production console suppression and remote error monitoring (e.g. Sentry) were evaluated and deliberately deferred —
the former would risk silencing this very logging, and the latter needs a maintainer decision on adopting an external
service; hidden sourcemaps (`../../vite.config.ts`'s `build.sourcemap`) are correspondingly left off, since that was
conditioned on adopting real remote logging.

#### 6. A documented styling convention is violated in one known place — ✅ Closed in v5.2.0

**Evidence:** `../../AGENTS.md`'s and `../../ARCHITECTURE.md`'s styling conventions require `@use`-only Sass, but
`../../src/vendors/bootstrap/styles/index.scss` still uses the legacy `@import`.

**Why it matters:** It's the one place in the codebase actively contradicting a documented, otherwise-followed
convention — every other stylesheet already uses `@use`.

**Proposed improvement:** Migrate `styles.scss` to `@use` with proper namespacing; use the same pass to add a palette
token map and usage examples for `src/assets/stylesheets`'s colours/variables.

**Outcome:** In `5.2.0`, `../../src/vendors/bootstrap/styles/index.scss`'s three `@import`s were replaced.
`bootstrap/scss/functions` and `custom` are now `@use`d, and `bootstrap/scss/bootstrap` is now `@forward`ed with a
`with (...)` map configuring Bootstrap's `!default` variables (`$primary`, `$font-family-sans-serif`, etc.) from
`../../src/vendors/bootstrap/styles/_custom.scss`'s values — `@forward` (rather than plain `@use`) so consumers that
still do `@use "@bootstrap/styles/index" as *` (`../../src/App.scss`, `../../src/assets/styles/_forms.scss`) keep
seeing Bootstrap's variables/mixins. Verified the compiled CSS is unaffected (byte-identical bundle size and colour
occurrence counts against the pre-migration `@import` output) and, in a running `npm run dev` session, that
`.text-primary` computes to the club's actual override colour (`rgb(10, 7, 251)`) with no console errors. A palette
token map and a `@use`-based usage example were added to `../../src/assets/styles/_colors.scss`'s header docblock,
covering the primary/shaded colour tokens that feed both Bootstrap's overrides and the rest of the UI.

#### 7. Required environment variables aren't documented where a new contributor is likely to look first, and `baseUrl` is hardcoded — ✅ Closed in v5.2.0

**Evidence:** `../../AGENTS.md`'s Environment Variables table documents `NPM_TOKEN_READ`, `GOOGLE_MAPS_API_KEY` and
`RECAPTCHA_V2_SITE_KEY`. Separately, `baseUrl` in `../../src/constants/commonConstants.ts` is a hardcoded string
literal, not sourced from an environment variable, despite feeding both the sitemap builder and (implicitly)
canonical link tags.

**Why it matters:** A missing or misconfigured env var currently fails silently — the venue map and Contact Us
captcha just don't render, with no warning. A hardcoded `baseUrl` risks the wrong hostname shipping if the site is
ever deployed to a staging domain.

**Proposed improvement:** Add a secret-free `.env.example`, and document the three variables in `../../README.md`
itself, not only `../../AGENTS.md`. Source `baseUrl` from an environment variable with a safe production default.

**Progress:** `../../README.md`'s own Environment Variables subsection already documented all three variables
(`NPM_TOKEN_READ`, `GOOGLE_MAPS_API_KEY`, `RECAPTCHA_V2_SITE_KEY`) — true since well before this gap was first
written, not new work done since. In `5.1.3`: `../../index.html`'s static `<link rel="canonical">` (which had
drifted to the bare `https://hpsc.co.za`, missing the `www` subdomain `baseUrl` already uses),
`../../public/robots.txt`'s `Sitemap` line and `../../README.md`'s introductory link were all corrected to match
`baseUrl` — closing the immediate symptom this gap's Why-it-matters warned about. A secret-free
`../../.env.example` was added, documenting `.env.local`'s exact `VITE_`-prefixed variable names; `../../AGENTS.md`,
`../../README.md` and `../../CONTRIBUTING.md` were then simplified to point to it instead of each separately
naming `GOOGLE_MAPS_API_KEY`/`RECAPTCHA_V2_SITE_KEY` (the Evidence above is now stale on that point — `AGENTS.md`
no longer names them individually, by design), and `.env.local`/`.env.production` themselves were removed from
version control in favour of it. The remaining ask — sourcing `baseUrl` itself from an environment variable with a
safe production default — is still open.

**Outcome:** In `5.2.0`, `../../src/constants/commonConstants.ts`'s `baseUrl` was changed from the hardcoded
`"https://www.hpsc.co.za"` literal to `import.meta.env.VITE_SITE_URL`. A new `VITE_SITE_URL` variable was added to
`../../.env.example` (documented alongside the existing three) and typed as a required, non-optional entry on
`../../src/vite-env.d.ts`'s `ImportMetaEnv` interface, which itself gained JSDoc explaining it's kept in sync with
`../../.env.example`. `../../.env.production` sets `VITE_SITE_URL=https://www.hpsc.co.za`, the safe production
default the Proposed improvement asked for, while `../../.env.local` overrides it for local/preview use
(`http://localhost:4173`). `../../index.html`'s `<link rel="canonical">` was also switched from its static href to
`%VITE_SITE_URL%`, the build-time substitution Vite performs on `index.html`, so it now tracks the same source of
truth as `baseUrl` instead of risking independent drift again. This closes the gap's last remaining item.

#### 10. `../../AGENTS.md`'s Documentation File Map still describes `LICENSE.md` as "MIT License", contradicting `../../README.md` and `../../LICENSE.md` itself — ✅ Closed in v5.1.1

**Evidence:** `../../AGENTS.md`'s Documentation File Map lists `LICENSE.md` as "MIT License". `../../LICENSE.md`
itself is a plain "Copyright © 2026 Hartbeespoortdam Practical Shooting Club. All Rights Reserved." notice, and
`../../README.md`'s own Documentation table already correctly describes it as "All Rights Reserved". This project's
`../../CHANGELOG.md`, under its current `### 🧪 [Unreleased]` section, even claims this was already fixed ("Fixed
`README.md`'s Documentation table and `AGENTS.md`'s Documentation File Map describing `LICENSE.md` as 'MIT
License' ... both now describe it accurately") — but only `../../README.md` was actually corrected;
`../../AGENTS.md` still reads "MIT License".

**Why it matters:** `../../AGENTS.md` is this project's documented single source of truth for cross-tool agent
conventions, and it now contradicts both `../../README.md` and the licence file it's describing — exactly the kind
of doc-vs-doc drift this plan exists to catch. It also means the current `../../CHANGELOG.md` `[Unreleased]` entry
is itself inaccurate about what was actually done, risking a release note that overstates the fix once promoted to a
dated version entry.

**Proposed improvement:** Correct `../../AGENTS.md`'s Documentation File Map entry for `LICENSE.md` to "All Rights
Reserved", matching `../../README.md` and the file's actual content.

**Outcome:** `../../AGENTS.md`'s Documentation File Map now reads "All Rights Reserved", matching `../../README.md`
and `../../LICENSE.md`'s actual content; the `../../CHANGELOG.md` `[Unreleased]` entry's claim is now accurate.

### 🟡 Partially Completed

*No gaps are currently partially completed.*

### ⚪ Open

#### 5. Accessibility has no lint enforcement or documented baseline

**Evidence:** `../../eslint.config.js` has no `eslint-plugin-jsx-a11y` (or equivalent) rule set configured; no
accessibility checklist or colour-contrast review exists in any doc.

**Why it matters:** The site is public-facing and content-driven — accessibility gaps here (colour contrast, focus
order, ARIA landmarks) directly affect real visitors, not just internal code quality.

**Proposed improvement:** Add `eslint-plugin-jsx-a11y` to `../../eslint.config.js`; define a WCAG AA baseline checklist;
validate unique page titles/meta-descriptions/canonical URLs alongside it as a combined a11y-and-SEO pass.

#### 8. Dependency surface has no ongoing audit discipline

**Evidence:** `../../package.json` currently pins around 30 runtime and 21 dev dependencies; there is no `npm audit`
step anywhere (CI or documented local practice), and GitHub's own Dependabot alerts on this repository aren't tied to a
documented remediation cadence beyond ad hoc commits.

**Why it matters:** `sanitize-html` and `react-google-recaptcha-v3` in particular sit on a security-sensitive boundary
(user-submitted content, bot protection) — an unaudited dependency surface is the highest-leverage place a real
vulnerability could land undetected.

**Proposed improvement:** Run `npm audit` (advisory-only initially) in the CI gate proposed in Gap 1; document a
periodic (e.g. monthly) dependency-update cadence in `../../AGENTS.md`.

#### 9. `HISTORY.md`'s "Future Roadmap Implications" section, referenced by both this plan and the Release Checklist, doesn't exist

**Evidence:** This plan's own 🎯 Purpose & Scope section above states it "complements... `../../HISTORY.md`'s
per-release '🚀 Future Roadmap Implications' section", and `../../AGENTS.md`'s Release Checklist step 6 lists
"Future Roadmap Implications" among the sections a significant release should thread new content through. No such
section, heading or even a passing mention exists anywhere in `../../HISTORY.md`; its actual Table of Contents runs
Historical Timeline → Evolution Overview → Major Version Goals → Major Milestones → Architectural Evolution →
Feature Timeline → Project Philosophy Evolution → Key Learnings → Conclusion. The Release Checklist's own
thread-through list also predates and omits "Major Version Goals" — a section `../../HISTORY.md` does have.

**Why it matters:** A contributor following the Release Checklist at step 6, or reading this plan's Purpose & Scope,
would look in `../../HISTORY.md` for a section that was never built — the two documents describe a structure
`../../HISTORY.md` doesn't actually have.

**Proposed improvement:** Either add a "🚀 Future Roadmap Implications" section to `../../HISTORY.md` (per-version,
alongside its Historical Timeline entries) and thread it through past releases retroactively, or update this plan's
Purpose & Scope and `../../AGENTS.md`'s Release Checklist step 6 to stop referencing a section that isn't part of
`../../HISTORY.md`'s actual structure — whichever this project decides is the intended design — and add "Major
Version Goals" to the Release Checklist's thread-through list either way.

#### 11. 264 pre-existing `tsdoc/syntax` lint warnings, now surfaced but not yet fixed

**Evidence:** `../../eslint.config.js:48` sets `"tsdoc/syntax": "warn"`, enabled per the `../../CHANGELOG.md`
`[Unreleased]` fix that wired `eslint-plugin-tsdoc` into the flat config (it had only ever been active in the legacy,
now-superseded `.eslintrc.cjs` mirror). Running `npm run lint` currently reports 264 `tsdoc/syntax` warnings across 65
files — `tsdoc-undefined-tag` (69), `tsdoc-malformed-inline-tag` (62) and `tsdoc-escape-right-brace` (62) account for
most of them, largely from JSDoc-style `@param {type}` annotations and unescaped `{`/`}` characters in doc comments
that predate the rule's enforcement. `npm run lint`'s own summary line reports "288 problems (0 errors, 288
warnings)" — the other 24 are pre-existing `no-unused-vars`/`react-refresh` warnings unrelated to this rule; the
`../../CHANGELOG.md` entry's "288 pre-existing `tsdoc/syntax` warnings" figure conflates the two.

**Why it matters:** `../../AGENTS.md`'s TSDoc convention states doc comments "must be syntactically valid TSDoc, not
JSDoc-only syntax" — with the rule now actually wired up (per Gap #1's related CI-gate proposal), 65 files currently
violate that documented convention. Because the rule is `"warn"`, not `"error"`, `npm run lint` still exits `0`, so
these warnings don't fail a local lint run or (once Gap #1 lands) a CI gate — they're easy to miss and can keep
accumulating rather than being caught at the point a doc comment is written or changed.

**Proposed improvement:** Work through the 264 warnings in batches by rule type across the 65 affected files,
starting with the highest-count patterns (`tsdoc-undefined-tag`, `tsdoc-malformed-inline-tag`/
`tsdoc-escape-right-brace` from JSDoc-style `{type}` annotations) — converting `@param {type} name` to plain TSDoc's
`@param name`. Once clean, escalate `"tsdoc/syntax"` from `"warn"` to `"error"` in `../../eslint.config.js` so a
regression is caught immediately rather than silently re-accumulating.

---

## 🚀 Roadmap

| Phase       | Focus                                                                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Now**     | Accessibility baseline (#5)                                                                                                                  |
| **Next**    | The `HISTORY.md`/Release Checklist "Future Roadmap Implications" mismatch (#9) and clearing the 264 `tsdoc/syntax` warnings (#11)            |
| **Later**   | Nothing currently queued — see Success Criteria for what's still outstanding                                                                |
| **Ongoing** | Dependency-audit discipline (#8), re-checked at each release per the Release Checklist                                                       |

---

## ☑️ Success Criteria

- A CI workflow runs `npm run lint`, `npm run build` and `npm test` automatically on PRs to `develop`/`main`, so
  `../../AGENTS.md`'s Code Quality & CI section can drop its "run these locally" caveat (#1) — ✅ Met in v5.2.0.
- `News` is either reachable through a real route or the folder is removed; `coreContactUsRoute`'s dates are internally
  consistent; `../../public/sitemap.xml` is regenerated and no longer malformed (#2) — ✅ Met in v5.2.0.
- At least one test file exists under `../../src` and passes in CI (#3) — ✅ Met in v5.2.0.
- A secret-free `.env.example` exists and `baseUrl` is sourced from an environment variable (#7) — ✅ Met in v5.2.0.
- `../../HISTORY.md` either gains a "Future Roadmap Implications" section or this plan's Purpose & Scope and
  `../../AGENTS.md`'s Release Checklist stop referencing one that doesn't exist (#9).
- `npm run lint` reports zero `tsdoc/syntax` warnings, and the rule is escalated from `"warn"` to `"error"` in
  `../../eslint.config.js` once clean (#11).
- This document's Gaps section shrinks over time as items close — closed items should move into `../../HISTORY.md`'s
  per-version Future Roadmap notes rather than being deleted silently from here.

---

## 📚 Related Documentation

- [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md) — the data-driven routing and feature-based organisation this plan
  builds on.
- [`../../AGENTS.md`](../../AGENTS.md) — the Git Workflow, Release Checklist and Test Conventions referenced
  throughout.
- [`../../HISTORY.md`](../../HISTORY.md) — per-release "🚀 Future Roadmap Implications" sections this plan complements.
- [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md) — contributor-facing setup and pull request checklist.
- [`improvement-plan-tasks.md`](improvement-plan-tasks.md) — the checkbox-level task breakdown derived from this plan's
  gaps.
