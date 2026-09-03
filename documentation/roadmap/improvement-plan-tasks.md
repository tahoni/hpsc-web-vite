# Roadmap Task List

A concrete, checkbox-level breakdown of [`improvement-plan.md`](improvement-plan.md)'s eight gaps, organised by that
document's Now/Next/Later/Ongoing phasing. Each section names its originating gap number for traceability back to the
evidence and reasoning there.

## Table of Contents

- [🚀 Now](#-now)
- [⏭️ Next](#-next)
- [⏳ Later](#-later)
- [🔁 Ongoing](#-ongoing)

---

## 🚀 Now

**No automatic lint/build/test gate on pull requests** *(IMPROVEMENT_PLAN.md → Gap #1)*

- [ ] Add `.github/workflows/build.yml`, triggered on push/PR to `develop` and `main`, mirroring `codeql.yml`'s trigger
  branches
- [ ] Run `npm ci`, `npm run lint`, `npm run build` and `npm test` as the workflow's steps
- [ ] Gate `rollup-plugin-visualizer`'s auto-open behind the CI environment (e.g. `open: !process.env.CI`)
- [ ] Confirm the workflow fails the PR check on a lint, build or test failure — not just a compile error
- [ ] Once live, update `AGENTS.md`'s Code Quality & CI section to drop the "run these locally" caveat

**Two route-metadata defects** *(IMPROVEMENT_PLAN.md → Gap #2)*

- [ ] Wire `src/features/News` into `coreRoutes` (`BaseRoutes.ts`) and `RouteAliases.tsx`/`AppRoutes.tsx`, or delete the
  folder if the feature isn't ready to ship
- [ ] Fix `coreContactUsRoute`'s inverted dates in `BaseRoutes.ts` — `dateCreated` (2025-12-26) currently postdates
  `dateUpdated` (2025-03-03)
- [ ] Add a lightweight script or unit test that scans route metadata and warns on missing/invalid `dateCreated`/
  `dateUpdated`
- [ ] Regenerate `public/sitemap.xml` via `npm run sitemap` once the above are fixed and confirm the malformed first
  `<loc>` entry is resolved

---

## ⏭️ Next

**Zero test coverage despite a configured test runner** *(IMPROVEMENT_PLAN.md → Gap #3)*

- [ ] Add `vitest.config.ts` with `test.environment = 'jsdom'`
- [ ] Add `@testing-library/react`/`@testing-library/user-event` as dev dependencies
- [ ] Add unit/smoke tests for `src/utils/htmlUtils.ts` and `builders/RoutesSitemap.ts` first (pure logic, no rendering)
- [ ] Add a CI-friendly `test:run` script (`vitest run`) and document its usage

**No error boundary or production error handling** *(IMPROVEMENT_PLAN.md → Gap #4)*

- [ ] Add a top-level React error boundary component around the route tree, with a friendly fallback UI
- [ ] Evaluate lightweight client-side logging (console suppression in prod, optional remote logging); enable hidden
  sourcemaps if adopted

---

## ⏳ Later

**Accessibility has no lint enforcement or documented baseline** *(IMPROVEMENT_PLAN.md → Gap #5)*

- [ ] Add `eslint-plugin-jsx-a11y` to `eslint.config.js`
- [ ] Define a WCAG AA baseline checklist (semantic headings, focus outlines, colour contrast, ARIA landmarks, link
  purpose)
- [ ] Ensure every page has a unique title, meta-description and canonical URL
- [ ] Validate `robots.txt`/`sitemap.xml` generation and document the `public/sitemap.xml` write step

**A documented styling convention is violated in one known place** *(IMPROVEMENT_PLAN.md → Gap #6)*

- [ ] Replace the legacy `@import` in `src/vendors/bootstrap/styles/index.scss` with `@use`
- [ ] Provide a palette token map and usage examples in the docs for `src/assets/stylesheets`'s colours/variables

**Environment variables undocumented in `README.md`; `baseUrl` hardcoded** *(IMPROVEMENT_PLAN.md → Gap #7)*

- [ ] Add a secret-free `.env.example`
- [ ] Document `NPM_TOKEN_READ`, `GOOGLE_MAPS_API_KEY` and `RECAPTCHA_V2_SITE_KEY` in `README.md` itself, not only
  `AGENTS.md`
- [ ] Source `baseUrl` in `src/constants/commonConstants.ts` from an environment variable with a safe production default

---

## 🔁 Ongoing

**Dependency surface has no ongoing audit discipline** *(IMPROVEMENT_PLAN.md → Gap #8)*

- [ ] Run `npm audit` (advisory-only initially) in the CI gate added in the Now phase
- [ ] Document a periodic (e.g. monthly) dependency-update cadence in `AGENTS.md`
- [ ] Track heavy or risky packages (e.g. `sanitize-html`, `react-google-recaptcha-v3`) and pin versions thoughtfully at
  each review

---

Check items off in place as work lands; don't delete a task outright. Once every item under a gap is checked, fold a
short summary into `HISTORY.md`'s next per-version Future Roadmap notes and mark the gap closed here (e.g. strike it
through with a "✅ Closed in vX.Y.Z" note), per `improvement-plan.md`'s Success Criteria.
