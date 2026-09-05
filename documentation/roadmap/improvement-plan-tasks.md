# Roadmap Task List

A concrete, checkbox-level breakdown of [`improvement-plan.md`](improvement-plan.md)'s eleven gaps, grouped by that
document's completion status — ✅ Completed, 🟡 Partially Completed, ⚪ Open — matching its own "🔍 Gaps &
Improvement Opportunities" grouping. Each block names its originating gap number for traceability back to the
evidence and reasoning there; within each section, gaps stay in ascending number order.

## Table of Contents

- [✅ Completed](#-completed)
- [🟡 Partially Completed](#-partially-completed)
- [⚪ Open](#-open)

---

## ✅ Completed

**No automatic lint/build/test gate on pull requests — ✅ Closed in v5.2.0** *(improvement-plan.md → Gap #1)*

- [x] Add `.github/workflows/build.yml`, triggered on push/PR to `develop` and `main`, mirroring `codeql.yml`'s trigger
  branches
- [x] Run `npm ci`, `npm run lint`, `npm run build` and `npm test` as the workflow's steps
- [x] Gate `rollup-plugin-visualizer`'s auto-open behind the CI environment (e.g. `open: !process.env.CI`) — done in
  `5.2.0` via `open: !process.env.CI` in `vite.config.ts`
- [x] Confirm the workflow fails the PR check on a lint, build or test failure — not just a compile error — verified
  locally with `CI=true`: `npm run lint` exits non-zero on a real ESLint error, and `npm test` exits non-zero when no
  test files match (`vitest`'s "No test files found, exiting with code 1"); `npm run build` failing on a type error
  is `tsc -b`'s established behaviour
- [x] Once live, update `AGENTS.md`'s Code Quality & CI section to drop the "run these locally" caveat — done in
  `5.2.0`

**Two route-metadata defects — ✅ Closed in v5.2.0** *(improvement-plan.md → Gap #2)*

- [x] Wire `src/features/News` into `coreRoutes` (`BaseRoutes.ts`) and `RouteAliases.tsx`/`AppRoutes.tsx`, or delete the
  folder if the feature isn't ready to ship — wired in `5.2.0`: `coreNewsRoute` added to `coreRoutes`,
  `RouteAliases.tsx` now `React.lazy`-loads it like every other feature page, and `routeHelpers.tsx`'s `routes` array
  includes it so `/news` is actually reachable, not just defined; `public/.htaccess` gained a `/news` rewrite
  condition
- [x] Fix `coreContactUsRoute`'s inverted dates in `BaseRoutes.ts` — `dateCreated` (2025-12-26) currently postdates
  `dateUpdated` (2025-03-03) — swapped in `5.2.0` so `dateCreated` (2025-03-03) precedes `dateUpdated` (2025-12-26)
- [ ] Add a lightweight script or unit test that scans route metadata and warns on missing/invalid `dateCreated`/
  `dateUpdated` — not part of this gap's original Proposed improvement; left open as a nice-to-have, not required
  for closure
- [x] Regenerate `public/sitemap.xml` via `npm run sitemap` once the above are fixed and confirm the malformed first
  `<loc>` entry is resolved — regenerated in `5.2.0`; the malformed `https: www.hpsc.co.za` entry is fixed and
  `/contact`/`/news` are now included (9 URLs total)

**Zero test coverage despite a configured test runner — ✅ Closed in v5.2.0** *(improvement-plan.md → Gap #3)*

- [x] Add `vitest.config.ts` with `test.environment = 'jsdom'` — added in `5.2.0`, `mergeConfig`-ing `vite.config.ts`
  so path aliases stay in sync
- [x] Add `@testing-library/react`/`@testing-library/user-event` as dev dependencies — already present
- [x] Add unit/smoke tests for `src/utils/htmlUtils.ts` and `builders/RoutesSitemap.ts` first (pure logic, no
  rendering) — added in `5.2.0`; `RoutesSitemap.ts`'s module-level side effect was also guarded so importing it for
  tests doesn't trigger a real sitemap generation
- [x] Add a CI-friendly `test:run` script (`vitest run`) and document its usage — added in `5.2.0`, used by
  `build.yml`'s Test step, documented in `README.md`/`AGENTS.md`

**Required environment variables aren't documented where a new contributor is likely to look first, and `baseUrl`
is hardcoded — ✅ Closed in v5.2.0** *(improvement-plan.md → Gap #7)*

- [x] Add a secret-free `.env.example` — done in `5.1.3`, documenting all three variables and linked from
  `README.md`/`AGENTS.md`
- [x] Document `NPM_TOKEN_READ`, `GOOGLE_MAPS_API_KEY` and `RECAPTCHA_V2_SITE_KEY` in `README.md` itself, not only
  `AGENTS.md` — already done; `README.md`'s own Environment Variables subsection documents all three, and has done
  since before this gap was first written
- [x] Source `baseUrl` in `src/constants/commonConstants.ts` from an environment variable with a safe production
  default — done in `5.2.0`: `baseUrl` now reads `import.meta.env.VITE_SITE_URL`, a new variable documented in
  `.env.example`, typed on `vite-env.d.ts`'s `ImportMetaEnv`, and defaulted to `https://www.hpsc.co.za` in
  `.env.production`; `index.html`'s canonical link was switched to the same `%VITE_SITE_URL%` build-time
  substitution so it can't drift from `baseUrl` again

**`AGENTS.md`'s Documentation File Map still describes `LICENSE.md` as "MIT License", contradicting `README.md` and
`LICENSE.md` itself — ✅ Closed in v5.1.1** *(improvement-plan.md → Gap #10)*

- [x] Correct `AGENTS.md`'s Documentation File Map entry for `LICENSE.md` to "All Rights Reserved", matching
  `README.md` and the file's actual content
- [x] Correct the `CHANGELOG.md` `[Unreleased]` entry that currently (and incorrectly) claims this fix was already
  made to `AGENTS.md`, once the actual fix lands — no wording change needed; the existing entry is now accurate

---

## 🟡 Partially Completed

*No gaps are currently partially completed.*

---

## ⚪ Open

**No error boundary or production error handling** *(improvement-plan.md → Gap #4)*

- [ ] Add a top-level React error boundary component around the route tree, with a friendly fallback UI
- [ ] Evaluate lightweight client-side logging (console suppression in prod, optional remote logging); enable hidden
  sourcemaps if adopted

**Accessibility has no lint enforcement or documented baseline** *(improvement-plan.md → Gap #5)*

- [ ] Add `eslint-plugin-jsx-a11y` to `eslint.config.js`
- [ ] Define a WCAG AA baseline checklist (semantic headings, focus outlines, colour contrast, ARIA landmarks, link
  purpose)
- [ ] Ensure every page has a unique title, meta-description and canonical URL
- [ ] Validate `robots.txt`/`sitemap.xml` generation and document the `public/sitemap.xml` write step

**A documented styling convention is violated in one known place** *(improvement-plan.md → Gap #6)*

- [ ] Replace the legacy `@import` in `src/vendors/bootstrap/styles/index.scss` with `@use`
- [ ] Provide a palette token map and usage examples in the docs for `src/assets/stylesheets`'s colours/variables

**Dependency surface has no ongoing audit discipline** *(improvement-plan.md → Gap #8)*

- [ ] Run `npm audit` (advisory-only initially) in the CI gate added in Gap #1
- [ ] Document a periodic (e.g. monthly) dependency-update cadence in `AGENTS.md`
- [ ] Track heavy or risky packages (e.g. `sanitize-html`, `react-google-recaptcha-v3`) and pin versions thoughtfully at
  each review

**`HISTORY.md`'s "Future Roadmap Implications" section, referenced by both `improvement-plan.md` and the Release
Checklist, doesn't exist** *(improvement-plan.md → Gap #9)*

- [ ] Decide whether to add a "Future Roadmap Implications" section to `HISTORY.md`, or update
  `improvement-plan.md`'s Purpose & Scope and `AGENTS.md`'s Release Checklist step 6 to stop referencing one that
  doesn't exist
- [ ] If adding it: thread a "Future Roadmap Implications" section through `HISTORY.md`'s past Historical Timeline
  entries retroactively, not only future ones
- [ ] Either way, add "Major Version Goals" to the Release Checklist step 6's thread-through list, since that
  section already exists in `HISTORY.md` but isn't mentioned there

**264 pre-existing `tsdoc/syntax` lint warnings, now surfaced but not yet fixed** *(improvement-plan.md → Gap #11)*

- [ ] Fix the `tsdoc-undefined-tag` warnings (69, the largest group)
- [ ] Fix the `tsdoc-malformed-inline-tag`/`tsdoc-escape-right-brace` warnings (62 each), mostly JSDoc-style
  `@param {type}` annotations that need converting to plain TSDoc's `@param name`
- [ ] Fix the remaining `tsdoc-escape-greater-than` (34), `tsdoc-malformed-html-name` (17),
  `tsdoc-param-tag-with-invalid-type` (14) and smaller one-off warnings
- [ ] Escalate `"tsdoc/syntax"` from `"warn"` to `"error"` in `eslint.config.js` once `npm run lint` reports zero
  `tsdoc/syntax` warnings

---

Check items off in place as work lands; don't delete a task outright. When a gap's first item gets checked, move its
whole block from ⚪ Open into 🟡 Partially Completed; once every item under it is checked, move the block again into
✅ Completed and mark the gap closed there (e.g. strike it through with a "✅ Closed in vX.Y.Z" note) — matching
whatever change was made to its section in `improvement-plan.md`, per that document's Success Criteria.
