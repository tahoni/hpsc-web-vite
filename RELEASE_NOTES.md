# Release Notes – Version 5.1.0

**Release Date:** August 26, 2026 **Status:** ✨ Stable

## 🎯 Theme

**Dependency Modernisation Completion & @rjsf v6 Migration**

Version 5.1.0 completes the dependency-modernisation effort carried over from 5.0.0, updating every previously deferred
major dependency (`@fortawesome/*`, `@fullcalendar/*`, `@mdx-js/*`, `@react-email/components`, `@rjsf/*`,
`@vis.gl/react-google-maps`, `bootstrap`, `react-bootstrap`, `react-email`, `react-router`/`react-router-dom`,
`sanitize-html`, `sweetalert2`) to its latest version, alongside `typescript` and the remaining toolchain. The
`@rjsf/core` v6 upgrade broke the Contact Us form's build; this release fixes it by replacing deep internal imports with
the public registry API and making the sanitised widget/template components properly generic. Alongside the dependency
work, this release continues the release-process tooling started in 5.0.0 and cleans up several documentation formatting
and archive-sync issues.

## ⭐ Key Highlights

### 📦 Dependency Modernisation

- Updated every dependency `5.0.0` left deferred pending code changes — `@fortawesome/*` (`6` → `7`), `@fullcalendar/*`,
  `@mdx-js/*`, `@react-email/components` (`0.0.36` → `1.0.12`), `@rjsf/*` (`5` → `6`), `@vis.gl/react-google-maps`,
  `bootstrap`, `react-bootstrap`, `react-email` (`4` → `6`), `react-router` (`7` → `8`), `react-router-dom`,
  `sanitize-html` and `sweetalert2` — plus `@tahoni/tahoni-lib-react`
- Updated `typescript` (`~5.9.3` → `~6.0.3`); updated `tsconfig.app.json` accordingly, dropping `baseUrl` in favour of
  explicit `./`-relative `paths` entries and adding `"types": ["mdx"]`

### 🐛 @rjsf v6 Compatibility Fix

- Fixed the Contact Us form and its `SanitizedWidget`/`SanitizedTextareaWidget`/`SanitizedBaseInputTemplate` components,
  broken by `@rjsf/core` v6's stricter package `exports` map and `FieldProps.onChange`'s new required `path` argument

### 🔧 Build & Process Tooling

- Fixed `npm run build` failing under Vite 8's `lightningcss`-based CSS minification default, and `npm run sitemap`
  failing to resolve the `@/*` path alias
- Added a `/sync-unreleased-changes` Claude Code command and an `.aiignore` file; expanded `AGENTS.md`'s Release
  Checklist template for `RELEASE_NOTES.md`

### ✍️ Documentation Clean-up

- Fixed hard-wrapped paragraphs across `ARCHITECTURE.md`, `README.md`, `UI.md`, `PACKAGES.md` and two
  `documentation/recommendations/` files, and resynced `documentation/history/RELEASE_NOTES_v5.0.0.md`'s stale archive
  snapshot

## 📦 What's New

### ➕ Added

#### Build & Tooling

- Added a `/sync-unreleased-changes` Claude Code command — audits the current branch's diff against its base branch and
  adds any missing `CHANGELOG.md` Unreleased entries for notable changes
- Added an `.aiignore` file, mirroring most of `.gitignore`'s coverage, so AI coding agents don't read build artefacts,
  secrets and IDE/tool-specific files as part of their context; it additionally excludes `.mvn/`, commented as not
  excluded by `.gitignore`

### 🔄 Changed

#### Build & Tooling

- Expanded `.gitignore` with newer JetBrains (AWS, SonarLint, Apifox, GitHub Copilot migration files), OS (`.DS_Store`,
  `Thumbs.db`, `desktop.ini`), secrets/credentials (`*.pem`, `*.key`, `*credentials*`, `*secrets*`), pnpm, Yarn v3 and
  Vite timestamp-file patterns
- Widened `.gitignore`'s project-specific `TAHONI` rule from `.claude/*.local.json` to `.claude/*.local.*` and removed
  the now-unneeded `.junie/` entry
- Updated `vite` (`^6.4.2` → `^8.2.2`), `@vitejs/plugin-react` (`^4.3.4` → `^6.1.0`, required for Vite 8 support),
  `vitest` (`^3.0.5` → `^4.1.11`), `eslint` and `@eslint/js` (`^9.20.1`/`^9.17.0` → `^9.39.5`), `eslint-plugin-react`
  (`^7.37.4` → `^7.37.5`), `eslint-plugin-react-hooks` (`^5.1.0` → `^7.1.1`), `eslint-plugin-react-refresh` (`^0.4.19` →
  `^0.5.5`) and `typescript-eslint` (`^8.24.0` → `^8.68.0`) to their latest mutually-compatible versions; kept `eslint`
  on the 9.x line rather than 10.x since `eslint-plugin-react`'s peer range doesn't yet support ESLint 10, and kept
  `typescript` on the 5.x line (`~5.6.2` → `~5.9.3`) rather than 7.x since `typescript-eslint`'s peer range doesn't yet
  support TypeScript 7's native-compiler major release
- Added an `overrides` entry pinning `@babel/plugin-transform-runtime` to `^7.29.7` in `package.json`, resolving an
  `ERESOLVE` conflict between `@rollup/plugin-babel`'s `@babel/core@^7` requirement and `@vitejs/plugin-react@6`'s
  optional Rolldown/React Compiler peer chain, which otherwise pulled in `@babel/core@^8`
- Updated the remaining `devDependencies` to their latest versions: `@rollup/plugin-babel` (`^6.0.4` → `^7.1.0`),
  `@types/react` (`~19.0.3` → `~19.2.18`), `@types/react-dom` (`~19.0.2` → `~19.2.5`), `@types/sanitize-html`
  (`^2.13.0` → `^2.16.1`), `globals` (`^15.15.0` → `^17.11.0`), `rollup-plugin-visualizer` (`^5.14.0` → `^7.1.1`),
  `sass` (`^1.85.0` → `^1.103.1`), `sitemap` (`^8.0.0` → `^9.0.1`), `tsx` (`^4.19.4` → `^4.23.12`) and `typedoc`
  (`^0.28.15` → `^0.28.20`)
- Widened `react`/`react-dom` from `~19.0.0` to `~19.2.8`, now matching the `@types/react`/`@types/react-dom` versions
  already updated above; left every other outdated runtime dependency with a major-version jump available
  (`@fortawesome/*`, `@fullcalendar/*`, `@react-email/components`, `@rjsf/*`, `react-email`, `react-router`/
  `react-router-dom`) untouched, since those require code changes and manual testing beyond a version bump

#### Dependencies

- Updated `@tahoni/tahoni-lib-react` (`^3.3.0` → `^3.3.3`), which now peers on `react`/`react-dom` `~19.2.0`,
  `bootstrap` `^5.3.8`, `eslint-plugin-react` `^7.37.5`, `glob` `^13.0.6`, `react-bootstrap` `^2.10.10` and
  `react-spinners` `^0.17.0`
- Updated the remaining deferred major dependencies to their latest versions: `@fortawesome/fontawesome-svg-core`/
  `@fortawesome/free-brands-svg-icons`/`@fortawesome/free-regular-svg-icons`/`@fortawesome/free-solid-svg-icons`
  (`^6.7.2` → `^7.3.1`), `@fortawesome/react-fontawesome` (`^0.2.6` → `^3.5.0`), `@fullcalendar/*` (`^6.1.15` →
  `^6.1.21`), `@mdx-js/react`/`@mdx-js/rollup` (`^3.1.0` → `^3.1.1`), `@react-email/components` (`^0.0.36` → `^1.0.12`),
  `@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` (`^5.24.3` → `^6.8.0`), `@vis.gl/react-google-maps` (`^1.5.2` →
  `^1.9.0`), `bootstrap` (`^5.3.3` → `^5.3.8`), `react-bootstrap` (`^2.10.9` → `^2.10.10`), `react-email` (`^4.0.7` →
  `^6.9.3`), `react-router` (`^7.12.0` → `^8.3.0`), `react-router-dom` (`^7.12.0` → `^7.18.2`), `sanitize-html`
  (`^2.14.0` → `^2.17.7`) and `sweetalert2` (`^11.22.4` → `^11.26.25`)
- Updated `typescript` (`~5.9.3` → `~6.0.3`); updated `tsconfig.app.json` accordingly, dropping `baseUrl` in favour of
  explicit `./`-relative `paths` entries and adding `"types": ["mdx"]`

#### Documentation

- Expanded `AGENTS.md`'s Release Checklist template for `RELEASE_NOTES.md` with Migration Guide, Statistics, Design
  Notes, Testing, Known Issues, Future Enhancements, Contributors and Notes sections, added matching ⭐/📊/🔮/👥 icons to
  the icon table and rewrote `RELEASE_NOTES.md` to follow the expanded template
- Consolidated `README.md`'s per-file documentation links into a new Documentation section, now referenced by
  `AGENTS.md`'s Documentation File Map, and clarified its Prerequisites/Installation and Execution steps

### 🐛 Fixed

#### Build & Tooling

- Fixed `npm run build` failing with `Unsupported target "ES2023"` under Vite 8 by setting `vite.config.ts`'s
  `build.cssMinify` to `"esbuild"`; Vite 8 defaults CSS minification to `lightningcss`, which expects browser targets
  rather than the JS-version string already configured in `build.target`
- Fixed `npm run sitemap` failing with `Cannot find package '@/models'`; `tsx` resolves path aliases from the nearest
  `tsconfig.json`, but the root `tsconfig.json` only references `tsconfig.app.json`/`tsconfig.node.json` and carries no
  `compilerOptions.paths` of its own, so the `@/*` alias used by `builders/RoutesSitemap.ts` went unresolved — pointed
  the `sitemap` script at `tsconfig.app.json` (which already defines the aliases and includes `builders`) via `tsx`'s
  `--tsconfig` flag

#### Forms

- Fixed `ContactUsForm.tsx` and its `SanitizedWidget`/`SanitizedTextareaWidget`/`SanitizedBaseInputTemplate` components
  failing to build under the `@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` v6 upgrade: `SanitizedWidget.tsx` no
  longer deep-imports `@rjsf/core/lib/components/widgets/TextWidget`/`TextareaWidget` (blocked by v6's stricter package
  `exports` map), using `getDefaultRegistry()` instead, and all three components are now properly generic over RJSF's
  type parameters; `ContactUsForm.tsx` builds its validator via `customizeValidator<ContactUsFormData>()` and imports
  `FormValidation` from `@rjsf/utils`'s root export; `CaptchaField.tsx`'s `onChange` call now passes the `path` argument
  v6's `FieldProps.onChange` requires

#### Documentation

- Fixed hard-wrapped paragraphs in `ARCHITECTURE.md`, `README.md`, `UI.md`, `PACKAGES.md`,
  `documentation/recommendations/project-css-naming.md` and
  `documentation/recommendations/standard-utils-vs-helpers.md` that broke mid-sentence or mid-clause instead of matching
  the rest of the repo's one-paragraph-per-line convention; also converted `PACKAGES.md` from UTF-16 to UTF-8, matching
  every other Markdown file in the repo
- Fixed additional hard-wrapped list-item descriptions in `ARCHITECTURE.md` (the `RouteAliases.tsx`/`AppRoutes.tsx`,
  Sass Modules/Bootstrap Overrides and Build and Tooling bullets) missed by the earlier paragraph rewrap
- Fixed `documentation/history/RELEASE_NOTES_v5.0.0.md`'s stale archive snapshot, which had fallen out of sync with
  `RELEASE_NOTES.md`'s expanded Migration Guide/Statistics/Design Notes/Testing/Known Issues/Future
  Enhancements/Contributors/Notes template — resynced it byte-for-byte per AGENTS.md's Release Checklist archive rule
- Fixed `ARCHITECTURE.md`'s Project Structure tree missing the `src/enums/` directory, which had been added without
  updating the tree

## 🔄 Migration Guide

### For Deployers

- **No schema, environment variable or deployment changes in this release** — dependency upgrades, a compatibility fix
  and documentation/tooling only.

### For Developers

- **`@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` upgraded to v6** — deep imports into `@rjsf/core`'s internals
  (e.g. `@rjsf/core/lib/components/widgets/*`) no longer resolve; use `getDefaultRegistry().widgets`/`.templates`
  instead. Build validators with `customizeValidator<T>()` rather than the untyped default export when the form's data
  type needs to flow through. Custom `FieldProps.onChange` callers must now pass the field's `path`
  (`props.fieldPathId.path`) as the second argument.
- **`typescript` upgraded to `~6.0.3`** and `tsconfig.app.json`'s `baseUrl` was removed in favour of explicit `./`
  -relative `paths` entries — this repository's own path aliases (`@/*`, `@components/*`, etc.) are unaffected, but any
  local branch adding a new alias should follow the same `./`-relative pattern.
- **`react-router` upgraded to `8.3.0`** while `react-router-dom` (what this project imports from) stays on the `7.x`
  line at `7.18.2` — no code changes were needed for this repository, but be aware of the version split if you depend on
  `react-router` directly elsewhere.
- Run `npm install` after pulling to pick up the updated lockfile.

## 📊 Statistics

- **Total Commits:** 22
- **Files Changed:** 26 (+3,694 / −3,080 lines)

## 🧭 Design Notes

- **Batch deferred majors once, not one-by-one.** 5.0.0 deliberately deferred every dependency with a breaking
  major-version jump (`@rjsf`, `react-router`, `@fortawesome`, etc.) pending code changes; this release does that work
  in a single dependency-bump commit plus a single compatibility-fix commit, rather than opening a separate release per
  package.
- **Prefer the public registry API over `@rjsf`'s internals.** Rather than pinning `@rjsf/core` back to v5 or patching
  around the new `exports` map, the sanitised widget/template components were made properly generic and switched to
  `getDefaultRegistry()`/`customizeValidator<T>()` — the supported public API; so a future `@rjsf` upgrade is less
  likely to break them the same way.

## 🧪 Testing

- `npm run lint` — 0 errors (pre-existing warnings only)
- `npm run build` — was broken by `@rjsf/core` v6's package `exports` map rejecting `SanitizedWidget.tsx`'s deep
  imports; passes after the fix
- `npx tsc --noEmit` — passes, including under the `typescript` 6.0.3 upgrade
- `npm test` — no test files exist yet in this repository (tracked in `documentation/roadmap/improvement-plan-tasks.md`)
- **Not performed:** a manual browser smoke test of the runtime packages bumped across a major version in this release
  (`@fortawesome/*` icon rendering, `@fullcalendar/*` on the Events page, `react-router`/`react-router-dom`'s split
  versions, `sweetalert2` dialogs, `@vis.gl/react-google-maps` and the Contact Us form's CAPTCHA/e-mail flow under the
  new `@rjsf` validator) — recommended before merging to `main`

## 🐛 Known Issues

- No CI workflow runs `npm run lint`/`npm run build`/`npm test` automatically — only CodeQL runs on push/PR
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #1)
- The runtime dependencies bumped across a major version in this release have not been manually smoke-tested in a
  browser — see Testing above
- `News` isn't wired into routing, and the Contact Us route's `dateCreated`/`dateUpdated` metadata is inverted
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #2)
- No automated test coverage exists yet — `npm test` has no test files
  (`documentation/roadmap/improvement-plan-tasks.md` → Gap #3)

## 🔮 Future Enhancements

- Add a CI workflow (`.github/workflows/build.yml`) that runs `npm run lint`, `npm run build` and `npm test` on push/PR
- Manually verify the Contact Us form, Events page calendar and venue map in a browser before the next release, now
  that their underlying libraries have moved across major versions
- Wire `News` into routing (or remove it) and fix the Contact Us route's inverted dates
- Establish initial Vitest test coverage with a `jsdom` environment

## 👥 Contributors

Leoni Lubbinge

## 📝 Notes

This release closes out the dependency-modernisation effort started in 5.0.0 — every previously deferred major
dependency is now current — and fixes the `@rjsf/core` v6 breakage that upgrade introduced in the Contact Us form. No
page content, routing or user-facing behaviour was intentionally changed; the runtime library bumps have been verified
by type-check, lint and build only, not by manual browser testing (see Known Issues).

---

**For detailed change history, see [CHANGELOG.md](/CHANGELOG.md)**

**For previous releases, see the [history folder](/documentation/history)**
