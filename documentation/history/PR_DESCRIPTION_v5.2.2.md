## 🎯 Summary

- Fixes `eslint.config.js`'s misconfigured `no-unused-vars` rule (18 false positives), mirrored into `.eslintrc.cjs`
- Escalates `@typescript-eslint/no-unused-vars` and `react-refresh/only-export-components` from `"warn"` to
  `"error"`, now that `npm run lint` reports zero warnings of either rule
- Closes Gap #18, found within the same release: `CONTRIBUTING.md`'s Pull Request Checklist understated the
  zero-warnings lint bar `AGENTS.md` already documented

## 📦 Key Changes

- **Build & Tooling:** `eslint.config.js`/`.eslintrc.cjs` now use `@typescript-eslint/no-unused-vars` instead of
  the base rule; `@typescript-eslint/no-unused-vars` and `react-refresh/only-export-components` escalated to
  `"error"`, with a scoped override for `RouteAliases.tsx`'s deliberate data-driven-routing exports
- **Documentation:** `CONTRIBUTING.md`'s Pull Request Checklist corrected to say lint must pass with zero
  warnings, not just zero errors

## 🧪 Test Plan

- [x] `npm run lint` — 0 errors, 0 warnings (down from 26 warnings at `5.2.1`'s baseline)
- [x] `npm run build` — passes
- [x] `npm test` — 3 test files, 14 tests, all passing

## 🔗 Related Documentation

- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [HISTORY.md](../../HISTORY.md)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
