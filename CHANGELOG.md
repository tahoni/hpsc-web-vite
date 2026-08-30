# HPSC Website

## 🧾 Change Log

All notable changes to the HPSC Website project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The legacy Version 3.x line predates this Keep a Changelog structure; see [HISTORY.md](HISTORY.md) for a narrative account of the project's full evolution, including that era.

---

### Table of Contents

- [🧪 Unreleased](#-unreleased)
- [🧾 Version 5.1.0](#-510---2026-08-26) ← Current
- [🧾 Version 5.0.0](#-500---2026-08-25)
- [🧾 Version 4.2.3](#-423---2026-05-04)
- [🧾 Version 4.2.2](#-422---2026-02-10)
- [🧾 Version 4.2.1](#-421---2026-01-20)
- [🧾 Version 4.2.0](#-420---2026-01-20)
- [🧾 Version 4.1.4](#-414---2026-01-19)
- [🧾 Version 4.1.3](#-413---2026-01-11)
- [🧾 Version 4.1.2](#-412---2026-01-03)
- [🧾 Version 4.1.1](#-411---2026-01-02)
- [🧾 Version 4.1.0](#-410---2025-12-30)
- [🧾 Version 4.0.3](#-403---2025-11-26)
- [🧾 Version 4.0.2](#-402---2025-11-26)
- [🧾 Version 4.0.1](#-401---2025-10-27)
- [🧾 Version 4.0.0](#-400---2025-08-17)
- [📋 Version Policy](#-version-policy)
- [🚀 Upgrade Guide](#-upgrade-guide)
- [🤝 Contributing](#-contributing)
- [💬 Support](#-support)

---

### 🧪 [Unreleased]

#### ➕ Added

#### 🔄 Changed

##### Documentation

- Renamed `documentation/roadmap/IMPROVEMENT_PLAN.md`/`TASKS.md` to `improvement-plan.md`/`improvement-plan-tasks.md`, matching `documentation/recommendations/`'s kebab-case file naming, and updated every cross-reference across `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `HISTORY.md`, `README.md`, `RELEASE_NOTES.md`, and `documentation/history/`

#### 🐛 Fixed

##### Build & Tooling

- Fixed the `@routes` path alias in `vite.config.ts`/`tsconfig.app.json` to resolve to `src/shared/routes` (its actual location) instead of the nonexistent `src/routes` — resolves the `TODO: remove` comment added when the dead alias was first flagged

##### Styling

- Fixed Bootstrap component classes (`.btn`, `.card`, `.navbar`, etc.) rendering with stock Bootstrap colours instead of the club's theme: `src/assets/styles/_forms.scss` independently `@use`d `bootstrap/scss/bootstrap` directly, compiling a second, unthemed copy of Bootstrap that never saw `src/vendors/bootstrap/styles/_custom.scss`'s variable overrides ($primary rendered as Bootstrap's stock `#0d6efd` instead of the club's `#0a07fb`); it now `@use`s the already-themed `@bootstrap/styles/index` module instead, which itself now imports the full `bootstrap/scss/bootstrap` entry point (rather than stopping at `root`) so every component partial compiles using the overrides; documented the required pattern in `documentation/recommendations/project-css-naming.md`

##### Documentation

- Fixed a stale `documentation/recommendations/standard-naming.md` reference in `.claude/commands/scaffold-unit-tests.md`, left over from that file's own earlier rename to `standard-component-naming.md`

#### ⚠️ Deprecated

#### 🗑️ Removed

#### 🔐 Security

---

### 🧾 [5.1.0] - 2026-08-26

#### ➕ Added

##### Build & Tooling

- Added a `/sync-unreleased-changes` Claude Code command — audits the current branch's diff against its base branch and adds any missing `CHANGELOG.md` Unreleased entries for notable changes
- Added an `.aiignore` file, mirroring most of `.gitignore`'s coverage, so AI coding agents don't read build artefacts, secrets, and IDE/tool-specific files as part of their context; it additionally excludes `.mvn/`, commented as not excluded by `.gitignore`

#### 🔄 Changed

##### Build & Tooling

- Expanded `.gitignore` with newer JetBrains (AWS, SonarLint, Apifox, GitHub Copilot migration files), OS (`.DS_Store`, `Thumbs.db`, `desktop.ini`), secrets/credentials (`*.pem`, `*.key`, `*credentials*`, `*secrets*`), pnpm, Yarn v3, and Vite timestamp-file patterns
- Widened `.gitignore`'s project-specific `TAHONI` rule from `.claude/*.local.json` to `.claude/*.local.*` and removed the now-unneeded `.junie/` entry
- Updated `vite` (`^6.4.2` → `^8.2.2`), `@vitejs/plugin-react` (`^4.3.4` → `^6.1.0`, required for Vite 8 support), `vitest` (`^3.0.5` → `^4.1.11`), `eslint` and `@eslint/js` (`^9.20.1`/`^9.17.0` → `^9.39.5`), `eslint-plugin-react` (`^7.37.4` → `^7.37.5`), `eslint-plugin-react-hooks` (`^5.1.0` → `^7.1.1`), `eslint-plugin-react-refresh` (`^0.4.19` → `^0.5.5`), and `typescript-eslint` (`^8.24.0` → `^8.68.0`) to their latest mutually-compatible versions; kept `eslint` on the 9.x line rather than 10.x since `eslint-plugin-react`'s peer range doesn't yet support ESLint 10, and kept `typescript` on the 5.x line (`~5.6.2` → `~5.9.3`) rather than 7.x since `typescript-eslint`'s peer range doesn't yet support TypeScript 7's native-compiler major release
- Added an `overrides` entry pinning `@babel/plugin-transform-runtime` to `^7.29.7` in `package.json`, resolving an `ERESOLVE` conflict between `@rollup/plugin-babel`'s `@babel/core@^7` requirement and `@vitejs/plugin-react@6`'s optional Rolldown/React Compiler peer chain, which otherwise pulled in `@babel/core@^8`
- Updated the remaining `devDependencies` to their latest versions: `@rollup/plugin-babel` (`^6.0.4` → `^7.1.0`), `@types/react` (`~19.0.3` → `~19.2.18`), `@types/react-dom` (`~19.0.2` → `~19.2.5`), `@types/sanitize-html` (`^2.13.0` → `^2.16.1`), `globals` (`^15.15.0` → `^17.11.0`), `rollup-plugin-visualizer` (`^5.14.0` → `^7.1.1`), `sass` (`^1.85.0` → `^1.103.1`), `sitemap` (`^8.0.0` → `^9.0.1`), `tsx` (`^4.19.4` → `^4.23.12`), and `typedoc` (`^0.28.15` → `^0.28.20`)
- Widened `react`/`react-dom` from `~19.0.0` to `~19.2.8`, now matching the `@types/react`/`@types/react-dom` versions already updated above; left every other outdated runtime dependency with a major-version jump available (`@fortawesome/*`, `@fullcalendar/*`, `@react-email/components`, `@rjsf/*`, `react-email`, `react-router`/`react-router-dom`) untouched, since those require code changes and manual testing beyond a version bump

##### Dependencies

- Updated `@tahoni/tahoni-lib-react` (`^3.3.0` → `^3.3.3`), which now peers on `react`/`react-dom` `~19.2.0`, `bootstrap` `^5.3.8`, `eslint-plugin-react` `^7.37.5`, `glob` `^13.0.6`, `react-bootstrap` `^2.10.10`, and `react-spinners` `^0.17.0`
- Updated the remaining deferred major dependencies to their latest versions: `@fortawesome/fontawesome-svg-core`/`@fortawesome/free-brands-svg-icons`/`@fortawesome/free-regular-svg-icons`/`@fortawesome/free-solid-svg-icons` (`^6.7.2` → `^7.3.1`), `@fortawesome/react-fontawesome` (`^0.2.6` → `^3.5.0`), `@fullcalendar/*` (`^6.1.15` → `^6.1.21`), `@mdx-js/react`/`@mdx-js/rollup` (`^3.1.0` → `^3.1.1`), `@react-email/components` (`^0.0.36` → `^1.0.12`), `@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` (`^5.24.3` → `^6.8.0`), `@vis.gl/react-google-maps` (`^1.5.2` → `^1.9.0`), `bootstrap` (`^5.3.3` → `^5.3.8`), `react-bootstrap` (`^2.10.9` → `^2.10.10`), `react-email` (`^4.0.7` → `^6.9.3`), `react-router` (`^7.12.0` → `^8.3.0`), `react-router-dom` (`^7.12.0` → `^7.18.2`), `sanitize-html` (`^2.14.0` → `^2.17.7`), and `sweetalert2` (`^11.22.4` → `^11.26.25`)
- Updated `typescript` (`~5.9.3` → `~6.0.3`); updated `tsconfig.app.json` accordingly, dropping `baseUrl` in favour of explicit `./`-relative `paths` entries and adding `"types": ["mdx"]`

##### Documentation

- Expanded `AGENTS.md`'s Release Checklist template for `RELEASE_NOTES.md` with Migration Guide, Statistics, Design Notes, Testing, Known Issues, Future Enhancements, Contributors, and Notes sections, added matching ⭐/📊/🔮/👥 icons to the icon table, and rewrote `RELEASE_NOTES.md` to follow the expanded template
- Consolidated `README.md`'s per-file documentation links into a new Documentation section, now referenced by `AGENTS.md`'s Documentation File Map, and clarified its Prerequisites/Installation and Execution steps

#### 🐛 Fixed

##### Build & Tooling

- Fixed `npm run build` failing with `Unsupported target "ES2023"` under Vite 8 by setting `vite.config.ts`'s `build.cssMinify` to `"esbuild"`; Vite 8 defaults CSS minification to `lightningcss`, which expects browser targets rather than the JS-version string already configured in `build.target`
- Fixed `npm run sitemap` failing with `Cannot find package '@/models'`; `tsx` resolves path aliases from the nearest `tsconfig.json`, but the root `tsconfig.json` only references `tsconfig.app.json`/`tsconfig.node.json` and carries no `compilerOptions.paths` of its own, so the `@/*` alias used by `builders/RoutesSitemap.ts` went unresolved — pointed the `sitemap` script at `tsconfig.app.json` (which already defines the aliases and includes `builders`) via `tsx`'s `--tsconfig` flag

##### Forms

- Fixed `ContactUsForm.tsx` and its `SanitizedWidget`/`SanitizedTextareaWidget`/`SanitizedBaseInputTemplate` components failing to build under the `@rjsf/core`/`@rjsf/utils`/`@rjsf/validator-ajv8` v6 upgrade: `SanitizedWidget.tsx` no longer deep-imports `@rjsf/core/lib/components/widgets/TextWidget`/`TextareaWidget` (blocked by v6's stricter package `exports` map), using `getDefaultRegistry()` instead, and all three components are now properly generic over RJSF's type parameters; `ContactUsForm.tsx` builds its validator via `customizeValidator<ContactUsFormData>()` and imports `FormValidation` from `@rjsf/utils`'s root export; `CaptchaField.tsx`'s `onChange` call now passes the `path` argument v6's `FieldProps.onChange` requires

##### Documentation

- Fixed hard-wrapped paragraphs in `ARCHITECTURE.md`, `README.md`, `UI.md`, `PACKAGES.md`, `documentation/recommendations/project-css-naming.md`, and `documentation/recommendations/standard-utils-vs-helpers.md` that broke mid-sentence or mid-clause instead of matching the rest of the repo's one-paragraph-per-line convention; also converted `PACKAGES.md` from UTF-16 to UTF-8, matching every other Markdown file in the repo
- Fixed additional hard-wrapped list-item descriptions in `ARCHITECTURE.md` (the `RouteAliases.tsx`/`AppRoutes.tsx`, Sass Modules/Bootstrap Overrides, and Build and Tooling bullets) missed by the earlier paragraph rewrap
- Fixed `documentation/history/RELEASE_NOTES_v5.0.0.md`'s stale archive snapshot, which had fallen out of sync with `RELEASE_NOTES.md`'s expanded Migration Guide/Statistics/Design Notes/Testing/Known Issues/Future Enhancements/Contributors/Notes template — resynced it byte-for-byte per AGENTS.md's Release Checklist archive rule
- Fixed `ARCHITECTURE.md`'s Project Structure tree missing the `src/enums/` directory, which had been added without updating the tree

#### ⚠️ Deprecated

#### 🗑️ Removed

#### 🔐 Security

---

### 🧾 [5.0.0] - 2026-08-25

#### ➕ Added

##### Release Process

- Added a `documentation/history/` archive folder — each release now archives a `RELEASE_NOTES_vX.Y.Z.md` snapshot and a `PR_DESCRIPTION_vX.Y.Z.md`, and `RELEASE_NOTES.md` gains a Theme/Key Highlights lead-in — enabling the new `/generate-pr-summary` command, converted from a sibling project, to condense a release into a short Bitbucket-style PR summary

##### Build & Tooling

- Added five Claude Code slash commands under `.claude/commands/`: `/generate-commit-message` (drafts a commit message and matching `CHANGELOG.md` entry from the working tree diff), `/generate-pr-description` (prepares a new version release per the Release Checklist), `/generate-pr-summary` (condenses a release into a short PR summary), and `/scaffold-unit-tests`/`/scaffold-integration-tests` (scaffold Vitest unit/integration tests following this project's testing conventions)
- Added `build/` to `.gitignore`; replaced the blanket `.claude/` ignore entry with `.claude/*.local.json`, so `.claude/commands/` can be tracked while local-only Claude config stays ignored
- Added `.junie/` to `.gitignore`

##### Documentation

- Added `AGENTS.md` and `CLAUDE.md`, establishing cross-tool documentation conventions (British English, icon-headed sections, GFM tables, GitFlow git workflow, and the Release Checklist) shared by any AI coding agent working in this repository
- Added a Contributors convention to `AGENTS.md`'s Documentation Conventions — when docs credit contributors or authors, source the list from `git log`/GitHub history (including bot accounts) rather than assuming
- Added `CONTRIBUTING.md` with project setup, git workflow, documentation and testing conventions, and a pull request checklist, and linked it from `README.md`'s new Contributing section
- Added `documentation/roadmap/improvement-plan.md` — a synthesis of this project's own goals/constraints into eight evidence-backed gaps (each with its Evidence, Why it matters, and Proposed improvement), a Roadmap table, and Success Criteria — and added it to `AGENTS.md`'s Documentation File Map
- Added `documentation/roadmap/improvement-plan-tasks.md` — a checkbox-level task breakdown of `documentation/roadmap/improvement-plan.md`'s eight gaps, organised by the plan's Now/Next/Later/Ongoing phasing, each item tagging its originating gap number for traceability
- Added a "Working on Complex Tasks" section to `CLAUDE.md`, instructing use of the TodoWrite tool for multistep or non-trivial tasks, per `AGENTS.md`'s Git Workflow Conventions

#### 🔄 Changed

##### Components & Helpers

- Refactored email-related models: removed `EmailContent`, merging its functionality into `EmailMessage`; added an `EmailType` enum (`HTML`/`TEXT`) under `src/enums/email/`; and moved `menuHelpers.tsx`/`routeHelpers.tsx` from `src/shared/helpers/` to `src/helpers/`, adjusting all dependent components (`ContactUsForm`, `ContactUsEmailTemplate`, and every feature's barrel `index.ts`)

##### Documentation

- Restructured `CHANGELOG.md` and `HISTORY.md` into the icon-based Keep a Changelog format, backfilling historical entries for prior versions
- Applied the icon-heading and section-separator convention to `README.md`, `ARCHITECTURE.md`, `UI.md`, and `RELEASE_NOTES.md`; documented the previously-missing `npm run host`, `npm test`, and `npm run sitemap` scripts in `README.md`; added a Theme/Key Highlights lead-in to `RELEASE_NOTES.md`'s 4.2.3 entry
- Renamed `documentation/roadmap/` to `documentation/roadmap-old/`, superseded by the recreated `documentation/roadmap/improvement-plan.md` and `documentation/roadmap/improvement-plan-tasks.md`; `documentation/roadmap-old/` is now a fully archived, no-longer-maintained snapshot. Updated the resulting stale cross-references in `AGENTS.md`, `CLAUDE.md`, and `CONTRIBUTING.md`
- Split `AGENTS.md`'s Documentation File Map into a new "Roadmap Planning" subsection for `documentation/roadmap/`'s two files, separate from the reference-material folders (`documentation/history/`, `documentation/recommendations/`) — it's the project's active improvement backlog, not standard documentation

#### 🐛 Fixed

##### Build & Tooling

- Fixed broken `src/helpers/routeHelpers.tsx`/`menuHelpers.tsx` imports left as unresolvable bare `src/...` specifiers after the helpers relocation, which only type-checked (via `tsc`'s `baseUrl`) but broke `npm run build`; corrected them to the `@/` and `@shared` path aliases already used elsewhere, and fixed the `@helpers`/`@models`/`@utils`/`@constants` alias mappings in `vite.config.ts`/`tsconfig.app.json`, which still pointed at their pre-relocation `src/shared/*` locations

##### Documentation

- Fixed `UI.md`'s unlabelled Designers heading

#### 🗑️ Removed

##### Documentation

- Removed `HISTORY.md`'s "🚀 Future Roadmap Implications" section and its Table of Contents entry — it restated the now-superseded `documentation/roadmap/tasks.md`/`plan.md` backlog

##### Release Process

- Removed the `documentation/templates/` scaffold (`CHANGELOG.md`/`RELEASE_NOTES.md` templates) — superseded by inline Release Checklist instructions in `AGENTS.md` and the new `documentation/history/` per-version archive

#### 🔐 Security

##### Dependencies

- Updated `vitest`, `react-router`, `postcss`, `vite`, `sanitize-html`, `ws`, `js-yaml`, `nanoid`, `brace-expansion`, `fast-uri`, `immutable`, `linkify-it`, `markdown-it`, `socket.io-parser`, and `@babel/core` to their patched versions, closing all currently open GitHub Dependabot alerts (1 critical, 25 high, 12 moderate, 2 low)

---

### 🧾 [4.2.3] - 2026-05-04

#### 🔄 Changed

##### Content

- Updated club office-bearer names — Chairman: Jan Kleynhans → Jan Lubbinge; Secretary: Albert van Herk → Engela Lubbinge

##### Dependencies

- Updated `eslint-plugin-tsdoc` from 0.4.0 to 0.5.2 and related dependencies

#### 🐛 Fixed

##### Build & Tooling

- Fixed the case-sensitive import path in `WorldShootConstants` — the `worldShoot2025` component directory was referenced with incorrect casing, causing build failures on case-sensitive file systems

#### 🗑️ Removed

##### Repository Hygiene

- Removed `.idea` (JetBrains IDE) and `.junie` directories from version control; added `.idea` to the VCS ignore list

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in `lodash-es`, `brace-expansion`, `minimatch`, `picomatch`

---

### 🧾 [4.2.2] - 2026-02-10

#### 🔄 Changed

##### Documentation

- Updated `CHANGELOG.md` and `RELEASE_NOTES.md` to reflect repository and title changes; normalised filenames and updated `.gitignore`

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies

---

### 🧾 [4.2.1] - 2026-01-20

#### ➕ Added

##### Documentation

- Added `PACKAGES.md` documenting dependencies in the project that are looking for funding

#### 🔄 Changed

##### Components & Helpers

- Moved helpers for route management back under `src/shared/helpers/`

##### Dependencies

- Updated `@tahoni/tahoni-lib-react` to version `3.3.0`

#### 🗑️ Removed

##### Dependencies

- Removed the unused `lightgallery` and `react-pdf` dependencies

---

### 🧾 [4.2.0] - 2026-01-20

#### ➕ Added

##### Constants

- Added a constant for the default file extension, and a constant for the default images folder, for easier maintainability

#### 🔄 Changed

##### Assets

- Decreased the size of all images by converting them to the `webp` format

#### 🐛 Fixed

##### Assets

- Fixed the corrupt `ipsc-target-with-bullet-holes.png` image file and converted it to the `webp` format

---

### 🧾 [4.1.4] - 2026-01-19

#### ➕ Added

##### Documentation

- Added/updated `README.md` with quickstart and prerequisites, install and development steps, build and preview instructions, test and lint commands, and contribution guidelines

#### 🔄 Changed

##### Documentation

- Clarified the usage of `package.json` scripts (`dev`, `build`, `host`, `preview`, `test`, `docs`, `sitemap`) in `README.md`
- Small editorial fixes to `ARCHITECTURE.md` and `UI.md`
- Small formatting changes in `plan.md`/`improvement-plan-tasks.md` under `documentation/roadmap/`

#### 🗑️ Removed

##### Documentation

- Removed the screenshot from `README.md` and deleted the `documentation/screenshots/` folder, to reduce maintenance overhead

---

### 🧾 [4.1.3] - 2026-01-11

#### ➕ Added

##### CI/CD

- Added a CodeQL analysis workflow configuration for automated security scanning and code quality checks

#### 🔄 Changed

##### Components

- `HeaderMenu`'s navigation bar now collapses at the `lg` breakpoint instead of `xl`, for a better experience on medium-sized screens

##### Assets

- Updated favicons in `index.html` and cleaned up metadata

##### Build & Tooling

- Updated `.gitignore` to exclude IDE-specific theme files (`_theme_*.xml`); updated `.idea` code style settings for team consistency

##### Dependencies

- Upgraded `react-router-dom` to `7.12.0`; updated `@typescript-eslint`, `@rollup` packages, and `eslint-utils` to their latest compatible versions

---

### 🧾 [4.1.2] - 2026-01-03

#### ➕ Added

##### Components

- Introduced a generic `Section` component in `src/shared/components/Section/` to handle arrays of `ReactElement` with optional collapsed states

#### 🔄 Changed

##### Content

- Temporarily commented out the "Apparel" section in the World Shoot summary

##### Components

- Moved `WorldShoot2025`-related components, constants and styles into a new nested directory structure under `src/features/Events/content/2025/WorldShoot2025/`
- Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss`, updating `@extend` rules to maintain visual consistency
- Renamed `WorldShootContent` to `WorldShoot2025Content` to be more specific to the event year
- Simplified imports within `WorldShoot2025.mdx`
- Relocated `ClubShirts` content to a `2025` subfolder within the `Members` feature
- Added `index.ts` files to the `2025` content folders to simplify exports and improve modularity

##### Build & Tooling

- Cleaned up relative imports and added missing `.tsx` extensions across several files

---

### 🧾 [4.1.1] - 2026-01-02

#### ➕ Added

##### Maps

- Added support for unique Google Maps IDs, for better management of map styles and features

#### 🔄 Changed

##### Components

- Improved `HeaderMenu` breakpoints and layout adjustments for better responsiveness on extra-large screens
- Streamlined the `Header` structure by removing `HeaderTitle` and consolidating `HeaderMenu` into `HeaderContent` for better maintainability

##### Styling

- Refactored SCSS for the header and footer to ensure alignment across different viewports
- Improved layout consistency in `index.html`

##### Documentation

- Expanded TypeDoc entry points and enhanced TSDoc documentation across multiple features for better API clarity
- Corrected date-formatting inconsistencies in `CHANGELOG.md` and `RELEASE_NOTES.md`
- Refreshed project screenshots and updated links to reflect the latest UI changes
- Updated copyright years to 2026 and standardised British English in code annotations and TSDoc

#### 🗑️ Removed

##### Components

- Removed unused icon constants and simplified the overall component architecture

---

### 🧾 [4.1.0] - 2025-12-30

#### ➕ Added

##### Maps

- Introduced `aboutUsMapId` and `footerMapId` to provide unique identifiers for Google Maps instances, allowing better referencing and configuration via the Google Maps Platform
- Updated `VenueMap` and `SimpleVenueMap` to support an optional `mapId` prop, falling back to a generated key if not provided

##### Dependencies

- Added `lightgallery` to the project dependencies and integrated its SCSS into the global styles, preparing the site for enhanced image gallery features

#### 🔄 Changed

##### Styling

- Simplified menu styles in `_standard.scss`, moving away from custom dropdown overrides to standard `nav-link` styling with an italicised touch
- Significant updates to `Layout.module.scss` to handle header and footer sidebar ordering across different breakpoints (`md` and `lg`), ensuring logos and headings stack correctly on mobile devices

##### Build & Tooling

- Reorganised imports in `App.scss` to better categorise package, library and project styles

---

### 🧾 [4.0.3] - 2025-11-26

#### 🐛 Fixed

##### Assets

- Moved the `public/images` directory to `public/assets/images` to display the images again

---

### 🧾 [4.0.2] - 2025-11-26

#### ➕ Added

##### Dependencies

- Added the `react-pdf` dependency for PDF rendering

#### 🔄 Changed

##### Build & Tooling

- Configured the resources to use a relative path via the `@` notation
- Refactored the directory structure and renamed the stylesheets to align with industry standards
- `.env` files are no longer ignored when checking into Git

#### 🐛 Fixed

##### Documentation

- Fixed the formatting of the `LICENSE.md` file

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies

---

### 🧾 [4.0.1] - 2025-10-27

#### ➕ Added

##### Documentation

- Added JSDoc comments for better documentation

##### Dependencies

- Added `bootstrap-icons` for icon library support
- Added `react-google-recaptcha-v3` and `@types/react-google-recaptcha-v3` for reCAPTCHA integration

#### 🔄 Changed

##### Build & Tooling

- Upgraded Bootstrap framework integration with Bootstrap Icons
- Applied `fs.strict` checking to HTML files (via the Vite upgrade)
- Improved the `GeneratePrDescription.ts`/`GenerateReleaseNotes.ts` builder scripts
- Improved code readability, maintainability and type safety; resolved outstanding project errors and warnings

##### Components

- Refactored conditional rendering logic across components for improved readability and maintainability
- Improved error handling and type annotations

#### 🔐 Security

##### Dependencies

- Fixed security vulnerabilities in dependencies; **Vite** upgraded `6.3.5` → `6.3.6` → `6.4.1` (security fixes and improvements)

---

### 🧾 [4.0.0] - 2025-08-17

#### ➕ Added

##### Assets

- Added the Bosninja logo in black and white

##### Components

- Created new Content components

#### 🔄 Changed

##### Routing & Sitemap

- Updated the sitemap

##### Styling

- Used `@use` and `@forward` instead of `@import` in the stylesheets
- Renamed the partial stylesheets to start with an underscore
- Overrode some default Bootstrap styles and used namespaces in the project stylesheets
- Created a `vendors` subdirectory for Bootstrap overrides

##### Build & Tooling

- Refactored the directory structure
- Updated the build targets to `ES2023`
- Integrated with Junie

##### Documentation

- Improved the `ARCHITECTURE.md` file
- Moved the `CHANGELOG.md` file contents for Version 3 to `HISTORY.md`
- Created templates for `CHANGELOG.md` and `RELEASE_NOTES.md`

#### 🐛 Fixed

##### Forms

- Fixed the e-mail address regular expression

#### 🔐 Security

##### Dependencies

- Updated vulnerable dependencies

---

### 📋 Version Policy

This project follows [Semantic Versioning 2.0.0](https://semver.org/):

- **MAJOR** version for a significant redesign or structural overhaul of the site (routing, directory layout, or the underlying framework)
- **MINOR** version for new pages, features, or backward-compatible additions
- **PATCH** version for fixes, content updates, and small improvements

The legacy Version 3.x line, narrated in [HISTORY.md](HISTORY.md), already followed this same `MAJOR.MINOR.PATCH` scheme.

---

### 🚀 Upgrade Guide

#### From v3.x to v4.x

**Breaking changes for local development:** Yes

- The directory structure was refactored and stylesheets renamed to align with industry standards (v4.0.0/v4.0.2)
- Relative imports were replaced with path aliases (`@`, `@components`, `@features`, etc. — see `CLAUDE.md`'s Path Aliases section); re-run `npm install` and check any local branches for stale relative imports
- `.env` files are no longer excluded from Git (v4.0.2) — review your local `.env.local`/`.env.production` before pulling to avoid conflicts
- `public/images` moved to `public/assets/images` (v4.0.3)

#### Within the v4.x line

**Breaking changes:** None. Each v4.x release is a backward-compatible content, feature, or maintenance update — pull the latest `develop`/`main`, run `npm install`, and rebuild.

---

### 🤝 Contributing

Project setup, this repository's git workflow, and the pull request checklist are documented in [`CONTRIBUTING.md`](CONTRIBUTING.md), which follows the conventions in [AGENTS.md](AGENTS.md) and [CLAUDE.md](CLAUDE.md). In short:

1. Branch from `develop` using the GitFlow model (`feature/<short-description>`, `hotfix/<short-description>`, or `release/vX.Y.Z` — see AGENTS.md's Git Workflow)
2. Run `npm run lint`, `npm run build`, and `npm test` before opening a PR
3. Add a `CHANGELOG.md` entry under `### 🧪 [Unreleased]` in the same change, per AGENTS.md's Git Workflow conventions
4. Open the PR against `develop`, never `main`

---

### 💬 Support

For issues, feature requests, or questions:

- **GitHub Issues:** [tahoni/hpsc-web-vite/issues](https://github.com/tahoni/hpsc-web-vite/issues)
- **Repository:** [tahoni/hpsc-web-vite](https://github.com/tahoni/hpsc-web-vite)
