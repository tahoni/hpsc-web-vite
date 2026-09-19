# Release Notes – Version 5.2.2

**Release Date:** September 19, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Zero-Tolerance Lint Enforcement**

Version 5.2.2 closes out `5.2.1`'s last known lint gap: `eslint.config.js` was using the base `no-unused-vars`
rule instead of `@typescript-eslint/no-unused-vars`, which doesn't understand TypeScript enum member usage or
type-only function parameters and was producing 18 false-positive warnings. With that fixed, both
`@typescript-eslint/no-unused-vars` and `react-refresh/only-export-components` are escalated from `"warn"` to
`"error"` in `eslint.config.js`/`.eslintrc.cjs`, so `npm run lint` now reports zero warnings, not just zero
errors — matching what `AGENTS.md`'s Code Quality & CI section already documented as this project's bar.
`RouteAliases.tsx` keeps a scoped `react-refresh/only-export-components: "off"` override, since it deliberately
exports `PageMapping` data alongside `React.lazy`-loaded components by design. The pass also caught and closed a
newly found gap (#18): `CONTRIBUTING.md`'s Pull Request Checklist still said lint must pass "with no errors",
understating the zero-warnings bar `AGENTS.md` already required.

## ⭐ Key Highlights

### 🔬 Lint Strictness

- Fixed `eslint.config.js`'s misconfigured `no-unused-vars` rule (18 false positives), mirrored into `.eslintrc.cjs`
- Escalated `@typescript-eslint/no-unused-vars` and `react-refresh/only-export-components` from `"warn"` to
  `"error"`, with a scoped override for `RouteAliases.tsx`'s deliberate data-driven-routing exports

### 📚 Roadmap Follow-Through

- Closed Gap #18: `CONTRIBUTING.md`'s Pull Request Checklist now states the zero-warnings lint bar accurately

## 📦 What's New

### 🐛 Fixed

#### Build & Tooling

- Fixed `eslint.config.js` using the base `no-unused-vars` rule instead of `@typescript-eslint/no-unused-vars`,
  which doesn't understand TypeScript enum member usage or type-only function parameters — it was producing 18
  false-positive warnings (`SanitizedWidgetTypes`, `ShootingRanges`, `EmailType`, `SitemapChangeFrequency`'s enum
  members, `SimpleCaptchaProps`'s `token` parameter, `vite-env.d.ts`'s `ImportMeta` augmentation), all of which
  disappear under the TS-aware rule; mirrored the same fix into `.eslintrc.cjs`
- Escalated `@typescript-eslint/no-unused-vars` and `react-refresh/only-export-components` from `"warn"` to
  `"error"` in `eslint.config.js`/`.eslintrc.cjs`, now that `npm run lint` reports zero warnings of either rule;
  added a scoped `react-refresh/only-export-components: "off"` override for `RouteAliases.tsx`, which deliberately
  exports `PageMapping` data alongside `React.lazy`-loaded components by design (`ARCHITECTURE.md`'s Data-Driven
  Routing) rather than being lint debt

#### Documentation

- Corrected `CONTRIBUTING.md`'s Pull Request Checklist, which said `npm run lint` must pass "with no errors" —
  it must report zero warnings too, per `AGENTS.md`'s Code Quality & CI section, now genuinely true with every
  rule at `"error"` severity

## 🔄 Migration Guide

### For Deployers

- **No new environment variables, no build or runtime behaviour changes.** This release only tightens lint
  enforcement.

### For Developers

- **`npm run lint` now fails on any `no-unused-vars`/`react-refresh/only-export-components` warning**, not just
  errors. Existing code is already clean (0 errors, 0 warnings as of `5.2.1`'s fix pass), so this only affects new
  work: an unused variable or a stray non-component export from a `React.lazy` file will now fail CI instead of
  passing with a warning.

## 📊 Statistics

- **Total Commits:** 1 (plus this release's own prep changes, committed separately)
- **Files Changed:** 8 (+99 / −11 lines)

## 🧭 Design Notes

- **Fix the rule before escalating it.** `no-unused-vars`'s false positives were corrected first, then the rule was
  escalated to `"error"` — escalating a misconfigured rule first would have turned false positives into build
  failures.
- **Close a gap the moment it's found, not in a later release.** Gap #18 (`CONTRIBUTING.md`'s checklist wording)
  was identified and fixed within this same release, matching `5.2.0`'s Gap #15 precedent.

## 🧪 Testing

- `npm run lint` — 0 errors, 0 warnings, down from 26 `no-unused-vars`/`react-refresh/only-export-components`
  warnings at `5.2.1`'s baseline
- `npm run build` — passes
- `npm run test:run` — 3 test files, 14 tests, all passing

## 🐛 Known Issues

- Test coverage is still thin — three test files covering `htmlUtils.ts` and `RoutesSitemap.ts` only; most
  components, hooks and helpers remain untested
- `EmailService.sendEmail()` is a `TODO: call back-end` stub that always reports success without actually sending
  an e-mail — every real Contact Us submission is silently dropped while the visitor is told it succeeded (tracked
  as Gap #17)

## 🔮 Future Enhancements

- Wire `EmailService.sendEmail()` to a real third-party e-mail-delivery service, or correct `AGENTS.md`/
  `ContactUsForm.tsx`'s docblock to stop describing it as a working dependency (Gap #17)
- Expand Vitest coverage beyond the initial `htmlUtils.ts`/`RoutesSitemap.ts` tests to components, hooks and
  helpers

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This is a small, routine patch release: it finishes tightening lint enforcement that `5.2.1` left as a known
issue, and closes the one small documentation gap the pass itself revealed. `Gap #17` (the `EmailService` stub)
remains this project's most significant open gap and the clear starting point for the next release.

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
