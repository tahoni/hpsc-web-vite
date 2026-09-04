## 🎯 Summary

- Completes the dependency-modernisation effort 5.0.0 deferred: every previously outdated major dependency (`@fortawesome/*`, `@fullcalendar/*`, `@mdx-js/*`, `@react-email/components`, `@rjsf/*`, `@vis.gl/react-google-maps`, `bootstrap`, `react-bootstrap`, `react-email`, `react-router`/`react-router-dom`, `sanitize-html`, `sweetalert2`) plus `typescript` is now current
- Fixes the Contact Us form and its sanitized widgets, which the `@rjsf/core` v6 upgrade broke via a stricter package `exports` map and a new required `FieldProps.onChange` argument
- Fixes `npm run build` under Vite 8's CSS minification default and `npm run sitemap`'s path-alias resolution (both already fixed on this branch, carried into this release)
- Continues the release-process tooling started in 5.0.0 (`/sync-unreleased-changes`, `.aiignore`) and cleans up documentation hard-wrap and archive-sync issues

## 📦 Key Changes

- **Dependencies:** `@fortawesome/*` (`6` → `7`), `@fullcalendar/*`, `@mdx-js/*`, `@react-email/components` (`0.0.36` → `1.0.12`), `@rjsf/*` (`5` → `6`), `@vis.gl/react-google-maps`, `bootstrap`, `react-bootstrap`, `react-email` (`4` → `6`), `react-router` (`7` → `8`), `react-router-dom`, `sanitize-html`, `sweetalert2`, and `@tahoni/tahoni-lib-react` updated; `typescript` updated to `~6.0.3` with matching `tsconfig.app.json` changes
- **Forms (Fixed):** `SanitizedWidget`/`SanitizedTextareaWidget`/`SanitizedBaseInputTemplate` made properly generic and switched from deep `@rjsf/core` imports to `getDefaultRegistry()`; `ContactUsForm.tsx` now builds its validator via `customizeValidator<ContactUsFormData>()`; `CaptchaField.tsx`'s `onChange` updated for the new `path` argument
- **Build & Tooling (Fixed):** `npm run build`'s Vite 8 CSS-minification failure and `npm run sitemap`'s `@/*` path-alias resolution failure
- **Build & Tooling (Added/Changed):** `/sync-unreleased-changes` Claude Code command; `.aiignore`; expanded `.gitignore`; `vite`/`eslint`/`typescript-eslint`/remaining `devDependencies` updated; `AGENTS.md`'s Release Checklist `RELEASE_NOTES.md` template expanded; `README.md`'s documentation links consolidated
- **Documentation (Fixed):** hard-wrapped paragraphs across `ARCHITECTURE.md`/`README.md`/`UI.md`/`PACKAGES.md`/two `documentation/recommendations/` files; `documentation/history/RELEASE_NOTES_v5.0.0.md` archive resynced; `ARCHITECTURE.md`'s Project Structure tree fixed

## 🧪 Test Plan

- [x] `npm run lint` (0 errors; pre-existing warnings only)
- [x] `npm run build` (was broken by `@rjsf/core` v6's `exports` map; passes after the fix)
- [x] `npx tsc --noEmit` (passes, including under the `typescript` 6.0.3 upgrade)
- [x] `npm test` (no test files exist yet in this repository — tracked in `../roadmap/improvement-plan-tasks.md`)
- [ ] Manual: smoke-test the runtime packages bumped across a major version (`@fortawesome/*` icons, `@fullcalendar/*` on the Events page, `sweetalert2` dialogs, `@vis.gl/react-google-maps`, and the Contact Us form's CAPTCHA/e-mail flow) in a browser
- [ ] Manual: confirm no version-specific detail leaked into `README.md`/`ARCHITECTURE.md`/`UI.md`

## 🔗 Related Documentation

- [CHANGELOG.md — Version 5.1.0](../../CHANGELOG.md#-510---2026-08-26)
- [RELEASE_NOTES.md](../../RELEASE_NOTES.md)
- [HISTORY.md — Version 5.1.0](../../HISTORY.md#version-510-august-26-2026)
