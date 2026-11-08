## 🎯 Summary

- Brings the dependency tree current without peer-dependency conflicts: `vitest` 5, `jsdom` 31, `sitemap` 10, React 19.3
  and `@vitejs/plugin-react` 6.2, plus in-range updates across the rest
- Clears all 15 `npm audit` findings (4 low, 11 moderate) with scoped `overrides` instead of `npm audit fix --force`,
  which would have downgraded `typedoc` and `@tahoni/tahoni-lib-react`
- Records Gap #19, found within the same release: `jsdom` 31 and `sitemap` 10 now require Node `>=22.22`, which
  `package.json`, CI and the setup docs don't yet state

## 📦 Key Changes

- **Dependencies:** every package moved to the newest version its range allows; React/React DOM 19.3.1 (tilde pins
  loosened to caret ranges), `vitest` 5.1.0, `jsdom` 31.0.0 and `sitemap` 10.0.0; unused `@rollup/plugin-babel` removed
  to resolve a Babel 7/8 peer conflict; `typescript` 7, `eslint` 10 and `@fullcalendar/*` 7 deliberately left out
  because their peer dependencies don't yet support them
- **Security:** `overrides` for `glob` (`^14.0.4`), `minimatch` (`^11.0.5`, scoped to `typedoc` and
  `@typescript-eslint/typescript-estree`) and `@react-email/render` (`^2.2.0`); `npm audit` now reports 0
  vulnerabilities
- **Documentation:** Gap #19 added to `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md`

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors, 0 warnings
- [x] `npm run build` — passes
- [x] `npm test` — 3 test files, 14 tests, all passing (on `vitest` 5.1.0 and `jsdom` 31.0.0)
- [x] `npm audit` — 0 vulnerabilities, down from 15
- [x] `npm run sitemap` — still generates valid `public/sitemap.xml` under `sitemap` 10
- [ ] CI's `node-version: 22` resolves to a release satisfying `jsdom` 31's `^22.22.2` floor (confirm on the PR run)

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [HISTORY.md](../../HISTORY.md)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
