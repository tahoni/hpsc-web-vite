# HPSC Website Improvement Plan

This document synthesises the goals and constraints stated across this repository's documentation and configuration into a single set of prioritised improvement opportunities. Unlike [`../../README.md`](../../README.md) and [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md), it is not evergreen — it reflects a point-in-time reading of the project and should be revisited whenever a major gap it names is closed or a new one is identified.

## Table of Contents

- [🎯 Purpose & Scope](#-purpose--scope)
- [⚙️ Goals & Constraints (Synthesised)](#-goals--constraints-synthesised)
- [🔍 Gaps & Improvement Opportunities](#-gaps--improvement-opportunities)
- [🚀 Roadmap](#-roadmap)
- [✅ Success Criteria](#-success-criteria)
- [📚 Related Documentation](#-related-documentation)

---

## 🎯 Purpose & Scope

This plan draws only on what the repository already states about itself — `../../README.md`, `../../ARCHITECTURE.md`, `../../UI.md`, `../../AGENTS.md`, `../../CLAUDE.md`, `../../CONTRIBUTING.md`, `../../HISTORY.md`'s Future Roadmap sections, `../../package.json`, and `../../vite.config.ts` — rather than introducing new goals. Where the documentation and the configuration disagree, or where a stated goal has no corresponding work item yet, that gap is called out below as an improvement opportunity.

It complements, rather than duplicates, `../../HISTORY.md`'s per-release "🚀 Future Roadmap Implications" section: that section tracks what changed release-to-release, while this document tracks the standing, cross-release gaps between the project's stated intent and its current state.

---

## ⚙️ Goals & Constraints (Synthesised)

| Source                                               | Goal / constraint                                                                                                                                                                                                                                               |
|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `../../README.md`, `../../CLAUDE.md`                 | Deliver an informative, content-driven club website; there is no backend in this repository — contact-form email delivery and reCAPTCHA verification are the only server-side dependencies, both third-party, called directly from the client                   |
| `../../ARCHITECTURE.md` (Data-Driven Routing)        | Routing is driven by `PageMapping` instances (`BaseRoutes.ts` → `RouteAliases.tsx` → `AppRoutes.tsx`), reused as-is by the sitemap builder — not static JSX route trees                                                                                         |
| `../../ARCHITECTURE.md` (Feature-Based Organization) | Code is organised by feature under `../../src/features`, each self-contained with a page component, content component(s), MDX, styles, and a barrel `index.ts`                                                                                                  |
| `../../CLAUDE.md` (Code Quality & CI)                | Only CodeQL runs automatically (push/PR to `main`, and weekly); `npm run lint`/`build`/`test` must be run locally before opening a PR — no automated build/test gate exists yet                                                                                 |
| `../../AGENTS.md` (Documentation Conventions)        | British English spelling throughout prose; every ToC-listed heading carries a reused or deliberately new emoji; `../../README.md`/`../../ARCHITECTURE.md`/`../../UI.md` stay version-agnostic (reverse-synced from release docs, not the other way round)       |
| `../../AGENTS.md` (Git Workflow, Release Checklist)  | GitFlow branching (`develop` → `release/vX.Y.Z` → `main`, `hotfix/*` direct to `main`), and a fixed, ordered Release Checklist covering `../../package.json`, `../../CHANGELOG.md`, `../../RELEASE_NOTES.md`, `../../HISTORY.md`, and archived per-version docs |
| `../../AGENTS.md` (Test Conventions)                 | Vitest is configured but no test files exist yet; when added, co-locate `*.test.ts`/`*.test.tsx`, use `@testing-library/react` with a `jsdom` environment, and don't test the type system or trivial pass-through props                                         |
| `../../package.json`, `../../vite.config.ts`         | React 19, Vite 6, TypeScript 5 strict mode, React Router 7 — a fixed stack; `../../vite.config.ts`'s `manualChunks` already splits FontAwesome/MDX/RJSF/FullCalendar/react-google/vis.gl into separate vendor chunks                                            |
| `../../CONTRIBUTING.md`                              | New contributors need `NPM_TOKEN_READ` just to `npm install`; `GOOGLE_MAPS_API_KEY`/`RECAPTCHA_V2_SITE_KEY` are optional locally but needed for the venue map and Contact Us captcha to render                                                                  |

---

## 🔍 Gaps & Improvement Opportunities

### 1. No automatic lint/build/test gate on pull requests

**Evidence:** `../../.github/workflows` contains only `codeql.yml` (security analysis, on push/PR to `main` and weekly). `../../CLAUDE.md`'s Code Quality & CI section states plainly: "There is currently no CI workflow that runs `npm run lint`, `npm run build`, or `npm test` — only CodeQL runs automatically. Run these locally before opening a PR." `../../CONTRIBUTING.md`'s Pull Request Checklist relies entirely on the contributor remembering to run all three.

**Why it matters:** GitFlow's `feature/*` → `develop` → `release/*` → `main` promotion (per `../../AGENTS.md`'s Git Workflow) depends on lint/build/test genuinely passing at each merge; today that depends entirely on reviewer and contributor discipline, with nothing enforcing it automatically.

**Proposed improvement:** Add a workflow (e.g. `build.yml`) triggered on push/PR to `develop` and `main`, mirroring `codeql.yml`'s trigger branches, running `npm ci`, `npm run lint`, `npm run build`, and `npm test`. Gate the bundle visualiser's auto-open behind the same CI check — `../../vite.config.ts`'s `rollup-plugin-visualizer` currently always opens (`open: true`), which would be disruptive in a headless runner.

### 2. Two concrete route-metadata defects, one already visible in production output

**Evidence:** `../../src/features/News` exists as a complete feature folder but is referenced by no route mapping — absent from `BaseRoutes.ts`'s `coreRoutes`, `RouteAliases.tsx`, and consequently the generated sitemap. Separately, `coreContactUsRoute` in `BaseRoutes.ts` sets `dateCreated: new Date("2025-12-26")` after its own `dateUpdated: new Date("2025-03-03")` — an internally inconsistent pair that also feeds `../../builders/RoutesSitemap.ts`'s `lastmod` output.

**Why it matters:** `../../builders/RoutesSitemap.ts` and its output, `../../public/sitemap.xml`, are the site's only mechanism for surfacing content freshness and priority to search engines; the checked-in `../../public/sitemap.xml` is already visibly stale — its first `<loc>` entry is malformed (`https: www.hpsc.co.za`, missing slashes) and the file predates the Events route entirely.

**Proposed improvement:** Wire `News` into `coreRoutes`/`RouteAliases.tsx`/`AppRoutes.tsx`, or delete the folder if the feature isn't ready to ship. Fix the inverted Contact Us dates. Regenerate `../../public/sitemap.xml` via `npm run sitemap` once both are fixed.

### 3. Zero test coverage despite a configured test runner

**Evidence:** `../../package.json` has a working `test` script (`vitest`) and `vitest` as a dependency, but no `*.test.ts`/`*.test.tsx` file exists anywhere under `../../src`. There is no `vitest.config.ts`, no `jsdom` environment, and `@testing-library/react`/`@testing-library/user-event` aren't dev dependencies.

**Why it matters:** Every route, the Contact Us forms RJSF schema/validation, and the data-driven route mappings (`PageMapping`) currently ship with no regression safety net. `EmailService.sendEmail()` is still a `// TODO: call back-end` stub that unconditionally returns `true` — its eventual real implementation will have nothing to test against unless test infrastructure exists first.

**Proposed improvement:** Add `vitest.config.ts` (`test.environment = 'jsdom'`) and the missing dev dependencies, then start with unit/smoke tests for pure logic (`htmlUtils.ts`, `RoutesSitemap.ts`) before component tests.

### 4. No error boundary or production error handling

**Evidence:** No `ErrorBoundary` component exists anywhere under `../../src`; a rendering error in any route currently produces a blank or broken page with no fallback UI.

**Why it matters:** The site has no backend and no logging/monitoring integration (per `../../CLAUDE.md`'s Project Overview) — an unhandled render error is currently invisible to both the visitor and the maintainer.

**Proposed improvement:** Add a top-level React error boundary around the route tree with a friendly fallback; evaluate lightweight client-side logging alongside it once the boundary exists.

### 5. Accessibility has no lint enforcement or documented baseline

**Evidence:** `../../eslint.config.js` has no `eslint-plugin-jsx-a11y` (or equivalent) rule set configured; no accessibility checklist or colour-contrast review exists in any doc.

**Why it matters:** The site is public-facing and content-driven — accessibility gaps here (colour contrast, focus order, ARIA landmarks) directly affect real visitors, not just internal code quality.

**Proposed improvement:** Add `eslint-plugin-jsx-a11y` to `../../eslint.config.js`; define a WCAG AA baseline checklist; validate unique page titles/meta-descriptions/canonical URLs alongside it as a combined a11y-and-SEO pass.

### 6. A documented styling convention is violated in one known place

**Evidence:** `../../AGENTS.md`'s and `../../ARCHITECTURE.md`'s styling conventions require `@use`-only Sass, but `../../src/vendors/bootstrap/styles/index.scss` still uses the legacy `@import`.

**Why it matters:** It's the one place in the codebase actively contradicting a documented, otherwise-followed convention — every other stylesheet already uses `@use`.

**Proposed improvement:** Migrate `index.scss` to `@use` with proper namespacing; use the same pass to add a palette token map and usage examples for `src/assets/stylesheets`'s colours/variables.

### 7. Required environment variables aren't documented where a new contributor is likely to look first, and `baseUrl` is hardcoded

**Evidence:** `../../CLAUDE.md`'s Environment Variables table documents `NPM_TOKEN_READ`, `GOOGLE_MAPS_API_KEY`, and `RECAPTCHA_V2_SITE_KEY`, but `../../README.md`'s own Environment Variables subsection doesn't name or explain them. Separately, `baseUrl` in `../../src/constants/commonConstants.ts` is a hardcoded string literal, not sourced from an environment variable, despite feeding both the sitemap builder and (implicitly) canonical link tags.

**Why it matters:** A missing or misconfigured env var currently fails silently — the venue map and Contact Us captcha just don't render, with no warning. A hardcoded `baseUrl` risks the wrong hostname shipping if the site is ever deployed to a staging domain.

**Proposed improvement:** Add a secret-free `.env.example`, and document the three variables in `../../README.md` itself, not only `../../CLAUDE.md`. Source `baseUrl` from an environment variable with a safe production default.

### 8. Dependency surface has no ongoing audit discipline

**Evidence:** `../../package.json` currently pins around 30 runtime and 21 dev dependencies; there is no `npm audit` step anywhere (CI or documented local practice), and GitHub's own Dependabot alerts on this repository aren't tied to a documented remediation cadence beyond ad hoc commits.

**Why it matters:** `sanitize-html` and `react-google-recaptcha-v3` in particular sit on a security-sensitive boundary (user-submitted content, bot protection) — an unaudited dependency surface is the highest-leverage place a real vulnerability could land undetected.

**Proposed improvement:** Run `npm audit` (advisory-only initially) in the CI gate proposed in Gap 1; document a periodic (e.g. monthly) dependency-update cadence in `../../AGENTS.md`.

---

## 🚀 Roadmap

| Phase       | Focus                                                                                                                                                     |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Now**     | Add the CI lint/build/test gate (#1) — lowest effort, closes a gap the project's own docs already flag — and fix the two shipped route-metadata bugs (#2) |
| **Next**    | Stand up initial test coverage (#3) and a top-level error boundary (#4), so the CI gate added in Now has something real to enforce                        |
| **Later**   | Accessibility baseline (#5), the styling-convention cleanup (#6), and environment-variable/base-URL documentation (#7)                                    |
| **Ongoing** | Dependency-audit discipline (#8), re-checked at each release per the Release Checklist                                                                    |

---

## ✅ Success Criteria

- A CI workflow runs `npm run lint`, `npm run build`, and `npm test` automatically on PRs to `develop`/`main`, so `../../CLAUDE.md`'s Code Quality & CI section can drop its "run these locally" caveat.
- `News` is either reachable through a real route or the folder is removed; `coreContactUsRoute`'s dates are internally consistent; `../../public/sitemap.xml` is regenerated and no longer malformed.
- At least one test file exists under `../../src` and passes in CI.
- This document's Gaps section shrinks over time as items close — closed items should move into `../../HISTORY.md`'s per-version Future Roadmap notes rather than being deleted silently from here.

---

## 📚 Related Documentation

- [`../../ARCHITECTURE.md`](../../ARCHITECTURE.md) — the data-driven routing and feature-based organisation this plan builds on.
- [`../../AGENTS.md`](../../AGENTS.md) — the Git Workflow, Release Checklist, and Test Conventions referenced throughout.
- [`../../HISTORY.md`](../../HISTORY.md) — per-release "🚀 Future Roadmap Implications" sections this plan complements.
- [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md) — contributor-facing setup and pull request checklist.
- [`TASKS.md`](TASKS.md) — the checkbox-level task breakdown derived from this plan's gaps.
