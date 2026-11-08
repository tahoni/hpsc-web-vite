# Release Notes – Version 5.2.3

**Release Date:** November 8, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Dependency Currency & Zero Known Vulnerabilities**

Version 5.2.3 brings the dependency tree up to date without introducing peer-dependency conflicts: every package moves
to the newest version its declared range allows, five dependencies take a major or minor-range upgrade (`vitest` 5,
`jsdom` 31, `sitemap` 10, React 19.3, `@vitejs/plugin-react` 6.2), and three scoped `overrides` clear every open
`npm audit` finding, taking it from 15 vulnerabilities to 0 — without the downgrades `npm audit fix --force` proposed.

## ⭐ Key Highlights

### 🔐 Security

- Cleared all 15 `npm audit` findings (4 low, 11 moderate) with scoped `overrides` rather than
  `npm audit fix --force`, which would have downgraded `typedoc` and `@tahoni/tahoni-lib-react`
- Resolved the `glob` and `minimatch` advisories (`glob` → `^14.0.4`, `minimatch` → `^11.0.5` for `typedoc` and
  `@typescript-eslint/typescript-estree`) and the `deepmerge` prototype-poisoning advisory (`@react-email/render` →
  `^2.2.0`)

### ⬆️ Dependency Upgrades

- React and React DOM to 19.3.1 (with `@types/react`/`@types/react-dom` 19.3.0), loosening the `~19.2.x` tilde pins
  to caret ranges
- `vitest` 5.1.0, `jsdom` 31.0.0 and `sitemap` 10.0.0 (all major), plus in-range updates across `react-router`,
  `react-email`, `vite`, `@vitejs/plugin-react`, `sass`, `@rjsf/*`, `@fullcalendar/*` and others
- Removed the unused `@rollup/plugin-babel`, whose Babel 7 peer blocked `@vitejs/plugin-react` 6.2.1

### 📚 Roadmap Follow-Through

- Recorded Gap #19: no minimum Node.js version is declared or documented, though `jsdom` 31 and `sitemap` 10 now
  require it

## 📦 What's New

### 🔄 Changed

#### Dependencies

- Updated dependencies to the latest versions allowed by their existing semver ranges, including `react-router`
  (`^8.5.1`), `react-email` (`^6.11.8`), `vite` (`^8.3.6`), `@vitejs/plugin-react` (`^6.2.1`), `sass`, `@rjsf/*`,
  `@fullcalendar/*` and `@vis.gl/react-google-maps`
- Upgraded `vitest` to `^5.1.0`; the existing test suite passes unchanged
- Upgraded `jsdom` to `^31.0.0` and `sitemap` to `^10.0.0`; `jsdom` 31 requires Node `^22.22.2 || ^24.15.0` and
  `sitemap` 10 requires Node `>=22.22.1`, which the CI `node-version: 22` and local Node 24 satisfy
- Upgraded `react`/`react-dom` to `^19.3.1` and `@types/react`/`@types/react-dom` to `^19.3.0`, loosening the previous
  `~19.2.x` tilde pins to caret ranges so future 19.x minors install without a manual range change
- Deliberately left major releases (`eslint` 10, `typescript` 7, `@fullcalendar/*` 7) out, as their peer dependencies
  (`eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `typescript-eslint`, `typedoc`, `@fullcalendar/daygrid`/`list`)
  don't yet support them

#### Documentation

- Recorded Gap #19 in `documentation/roadmap/improvement-plan.md` and `improvement-plan-tasks.md`

### 🗑️ Removed

#### Dependencies

- Removed the unused `@rollup/plugin-babel` dev dependency, whose `@babel/core@^7` peer conflicted with the Babel 8
  optional peer pulled in by `@vitejs/plugin-react@6.2.1`

### 🔐 Security

#### Dependencies

- Added `overrides` in `package.json` forcing `glob` to `^14.0.4` and `minimatch` to `^11.0.5` (scoped to `typedoc` and
  `@typescript-eslint/typescript-estree`) to resolve the moderate `glob` (GHSA-3g3m-2fjr-6pw4) and `minimatch`
  (GHSA-g3hv-75wg-m249) advisories, avoiding the `typedoc`/`@tahoni/tahoni-lib-react` downgrades that
  `npm audit fix --force` proposed
- Added an `overrides` entry forcing `@react-email/render` to `^2.2.0` (otherwise pinned to 2.0.6 by
  `@react-email/components`), which moves to `html-to-text` 10 and `deepmerge-ts`, resolving the `deepmerge`
  prototype-poisoning advisory (GHSA-gcqx-w48m-w2h4); `npm audit` now reports no vulnerabilities

## 🔄 Migration Guide

### For Deployers

- **No new environment variables and no application behaviour changes** — this release only updates dependencies.
- **Build agents need Node.js `^22.22.2`, `^24.15.0` or `>=26`**, as enforced by `jsdom` 31 (`sitemap` 10 needs
  `>=22.22.1`). `build.yml`'s floating `node-version: 22` normally satisfies this, but a stale or pinned older 22.x
  runner will fail `npm ci`/`npm test`/`npm run sitemap`.

### For Developers

- **Run `npm install` after pulling** — `package-lock.json` changed substantially (React 19.3, `vitest` 5, `jsdom` 31,
  `sitemap` 10, the three `overrides`).
- **Upgrade local Node.js to `^22.22.2` or `^24.15.0`** if you're on an older version.
- **React is no longer tilde-pinned**, so `npm update` may pick up later 19.x minors; `typescript` (`~6.0.3`) and
  `eslint` (`^9`) deliberately stay put until their ecosystem peers catch up.

## 📊 Statistics

- **Total Commits:** 6 (plus this release's own prep changes, committed separately)
- **Files Changed:** 3 (+962 / −1,502 lines, almost all of it `package-lock.json`)

## 🧭 Design Notes

- **Prefer scoped `overrides` to `npm audit fix --force`.** The forced fix would have downgraded `typedoc` to 0.23 and
  `@tahoni/tahoni-lib-react` to 3.1.2; overriding only the vulnerable transitive packages for the dependents that need
  it (leaving ESLint's `minimatch@3` untouched) cleared every finding without regressing a direct dependency.
- **Remove a blocker instead of forcing past it.** `@rollup/plugin-babel` was unused, so uninstalling it resolved the
  Babel 7/8 peer conflict that `--legacy-peer-deps` would only have hidden.
- **Don't upgrade past what the tooling supports.** `typescript` 7 and `eslint` 10 were evaluated and deliberately
  skipped: `typescript-eslint`/`typedoc` cap TypeScript at 6.0.x, and `eslint-plugin-react`/`eslint-plugin-jsx-a11y`
  cap ESLint at 9.

## 🧪 Testing

- `npm run lint` — 0 errors, 0 warnings
- `npm run build` — passes
- `npm run test:run` — 3 test files, 14 tests, all passing (on `vitest` 5.1.0 and `jsdom` 31.0.0)
- `npm audit` — 0 vulnerabilities, down from 15 (4 low, 11 moderate)
- `npm run sitemap` — still generates valid `public/sitemap.xml` under `sitemap` 10

## 🐛 Known Issues

- No minimum Node.js version is declared in `package.json`'s `engines` or documented in `CONTRIBUTING.md`/`README.md`,
  though `jsdom` 31 and `sitemap` 10 now require `>=22.22` (tracked as Gap #19)
- `EmailService.sendEmail()` is a `TODO: call back-end` stub that always reports success without actually sending
  an e-mail — every real Contact Us submission is silently dropped while the visitor is told it succeeded (tracked
  as Gap #17)
- Test coverage is still thin — three test files covering `htmlUtils.ts` and `RoutesSitemap.ts` only; most
  components, hooks and helpers remain untested
- `typescript` 7, `eslint` 10 and `@fullcalendar/*` 7 remain unadopted until their peer dependencies support them

## 🔮 Future Enhancements

- Declare and document the minimum Node.js version — `engines`, an `.nvmrc`, `build.yml` reading from it, and the
  setup docs (Gap #19)
- Wire `EmailService.sendEmail()` to a real third-party e-mail-delivery service, or correct `AGENTS.md`/
  `ContactUsForm.tsx`'s docblock to stop describing it as a working dependency (Gap #17)
- Revisit `typescript` 7, `eslint` 10 and `@fullcalendar/*` 7 once `typescript-eslint`, `typedoc`,
  `eslint-plugin-react`, `eslint-plugin-jsx-a11y` and `@fullcalendar/daygrid`/`list` publish supporting releases
- Expand Vitest coverage beyond the initial `htmlUtils.ts`/`RoutesSitemap.ts` tests to components, hooks and
  helpers

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This is a routine maintenance patch release with no application changes: it brings the dependency tree current,
clears every open `npm audit` finding and records the one new roadmap gap the upgrades revealed. `Gap #17` (the
`EmailService` stub) remains this project's most significant open gap and the clear starting point for the next
release.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
