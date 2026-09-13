## 🎯 Summary

- Closes out most of the improvement plan's "Now" phase in one release: a CI quality gate, initial automated test
  coverage, accessibility linting, per-page SEO metadata and a top-level error boundary — the concrete quality
  infrastructure the planned Major Version 5 redesign depends on being in place first.
- Fixes a batch of routing/sitemap defects (`News` unreachable, `/contact`/`/venues` unreachable, an inverted date,
  a malformed sitemap entry) uncovered while auditing the roadmap, then deliberately trims `Contact Us`/`Venues`
  back off the primary navigation menu once they were confirmed reachable by direct URL.
- Completes the `src/vendors/bootstrap/styles/index.scss` `@use`/`@forward` migration and sources `baseUrl` from
  `VITE_SITE_URL` instead of a hardcoded literal.
- Formalises a monthly dependency-review cadence, adds `HISTORY.md`'s "🚀 Future Roadmap Implications" section, fully
  clears the `tsdoc/syntax` lint backlog, and adds Claude Code GitHub Action integration for automated PR review.

## 📦 Key Changes

**Added**

- `.github/workflows/build.yml` — lint/build/test CI gate on PRs to `main`/`develop`, plus an advisory `npm audit`
  step
- `.github/workflows/claude.yml`/`claude-code-review.yml` — `@claude`-mention responses and automated Claude Code
  PR review
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
- `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule escalated from `"warn"` to `"error"`, now that the codebase is fully
  clean against it (closes Gap #11)

**Fixed**

- `baseUrl` now sourced from `VITE_SITE_URL` instead of a hardcoded string literal, with a hardcoded fallback so
  it never resolves to `undefined` in an environment (e.g. Vitest) that doesn't set it
- `/contact`/`/venues` unreachable routes, `Contact Us`'s inverted dates, `public/sitemap.xml`'s malformed entry
- Two `'process' is not defined` ESLint errors; a `RoutesSitemap.ts` test side effect; `Breakpoints.tsx`'s
  `VITE_SHOW_BREAKPOINTS` truthiness check
- Several stale `CONTRIBUTING.md`/`AGENTS.md`/`improvement-plan.md` claims, and a large batch of non-standard
  TSDoc tags/JSDoc syntax and American-English spellings across the codebase's doc comments

**Removed**

- Non-standard `@module`/`@type`/`@interface`/`@property`/`@prop` TSDoc tags and dead, commented-out
  `APIProvider`/`GoogleReCaptchaProvider` markup in `App.tsx`

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors, 26 pre-existing non-`tsdoc/syntax` warnings (down from 284 including
  `tsdoc/syntax`, now fully cleared and enforced as an error)
- [x] `npm run build` — passes
- [x] `npm run test:run` — 3 test files, 14 tests, all passing, including from a clean checkout with no ambient
  `VITE_SITE_URL` set (Gap #15, closed by giving `baseUrl` a hardcoded ultimate fallback)
- [x] Manually verified `/contact`, `/venues` and `/news` render correctly by direct URL, and are absent from the
  primary navigation menu
- [x] Manually verified `npm run sitemap` regenerates `public/sitemap.xml` correctly
- [x] Manually verified the Bootstrap `@use`/`@forward` migration produces a byte-identical compiled CSS bundle

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md#-520---2026-09-13)
- [HISTORY.md](../../HISTORY.md)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
