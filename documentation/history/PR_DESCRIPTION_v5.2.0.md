## 🎯 Summary

- Closes out most of the improvement plan's "Now" phase in one release: a CI quality gate, initial automated test
  coverage, accessibility linting, per-page SEO metadata and a top-level error boundary — the concrete quality
  infrastructure the planned Major Version 5 redesign depends on being in place first.
- Fixes a batch of routing/sitemap defects (`News` unreachable, `/contact`/`/venues` unreachable, an inverted date,
  a malformed sitemap entry) uncovered while auditing the roadmap, then deliberately trims `Contact Us`/`Venues`
  back off the primary navigation menu once they were confirmed reachable by direct URL.
- Completes the `src/vendors/bootstrap/styles/index.scss` `@use`/`@forward` migration and sources `baseUrl` from
  `VITE_SITE_URL` instead of a hardcoded literal.
- Formalises a monthly dependency-review cadence and adds `HISTORY.md`'s "🚀 Future Roadmap Implications" section.

## 📦 Key Changes

**Added**

- `.github/workflows/build.yml` — lint/build/test CI gate on PRs to `main`/`develop`, plus an advisory `npm audit`
  step
- Vitest infrastructure (`vitest.config.ts`, `jsdom`) and the project's first tests, plus a `test:run` script
- `eslint-plugin-jsx-a11y`'s recommended rule set and a manual WCAG AA baseline checklist
- Per-page `document.title`/meta description/canonical link (`PageMapping.description`)
- A top-level `ErrorBoundary` with a friendly fallback
- `News` wired into live routing
- A monthly dependency-update cadence documented in `AGENTS.md`'s Release Checklist
- `HISTORY.md`'s "🚀 Future Roadmap Implications" section

**Changed**

- `src/vendors/bootstrap/styles/index.scss` migrated from `@import` to `@use`/`@forward` (verified byte-identical
  compiled CSS)

**Fixed**

- `baseUrl` now sourced from `VITE_SITE_URL` instead of a hardcoded string literal
- `/contact`/`/venues` unreachable routes, `Contact Us`'s inverted dates, `public/sitemap.xml`'s malformed entry
- Two `'process' is not defined` ESLint errors; a `RoutesSitemap.ts` test side-effect; `Breakpoints.tsx`'s
  `VITE_SHOW_BREAKPOINTS` truthiness check
- Several stale `CONTRIBUTING.md`/`AGENTS.md`/`improvement-plan.md` claims, and non-standard `@module` JSDoc tags

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors (284 pre-existing warnings, unchanged, tracked as Gap #11)
- [x] `npm run build` — passes
- [x] `npm run test:run` — 3 test files, 14 tests, all passing
- [x] Manually verified `/contact`, `/venues` and `/news` render correctly by direct URL, and are absent from the
  primary navigation menu
- [x] Manually verified `npm run sitemap` regenerates `public/sitemap.xml` correctly
- [x] Manually verified the Bootstrap `@use`/`@forward` migration produces a byte-identical compiled CSS bundle

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md#-520---2026-09-06)
- [HISTORY.md](../../HISTORY.md)
