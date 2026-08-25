# HPSC Website

## 🧾 Change Log

All notable changes to the HPSC Website project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The legacy Version 3.x line predates this Keep a Changelog structure; see [HISTORY.md](HISTORY.md) for a narrative account of the project's full evolution, including that era.

---

### Table of Contents

- [🧪 Unreleased](#-unreleased)
- [🧾 Version 4.2.3](#-423---2026-05-04) ← Current
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

##### Release Process

- Added a `documentation/history/` archive folder — each release now archives a `RELEASE_NOTES_vX.Y.Z.md` snapshot and a `PR_DESCRIPTION_vX.Y.Z.md`, and `RELEASE_NOTES.md` gains a Theme/Key Highlights lead-in — enabling the new `/generate-pr-summary` command, converted from a sibling project, to condense a release into a short Bitbucket-style PR summary

##### Documentation

- Added a Contributors convention to `AGENTS.md`'s Documentation Conventions — when docs credit contributors or authors, source the list from `git log`/GitHub history (including bot accounts) rather than assuming
- Added `CONTRIBUTING.md` with project setup, git workflow, documentation and testing conventions, and a pull request checklist, and linked it from `README.md`'s new Contributing section — closes `documentation/roadmap/tasks.md` item 43
- Filed `documentation/roadmap/tasks.md` items 51 and 52 (with matching `plan.md` §4.1 actions) for two bugs found while auditing the roadmap checklist: `src/features/News` isn't wired into any route mapping, and `coreContactUsRoute` in `BaseRoutes.ts` has a `dateCreated` that postdates its own `dateUpdated`
- Added `IMPROVEMENT_PLAN.md` — a root-level synthesis of the project's goals, constraints, and improvement themes with rationale/impact per item — and added it to `AGENTS.md`'s Documentation File Map

#### 🔄 Changed

##### Documentation

- Renamed `documentation/roadmap/` to `documentation/roadmap-old/` and merged `plan.md`'s full themed content into the root `IMPROVEMENT_PLAN.md`, which now supersedes it; `tasks.md` remains the live task backlog at its new path. Updated the resulting stale cross-references in `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`, and `HISTORY.md`'s Future Roadmap Implications section

#### 🐛 Fixed

#### ⚠️ Deprecated

#### 🗑️ Removed

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

- Fixed case-sensitive import path in `WorldShootConstants` — the `worldShoot2025` component directory was referenced with incorrect casing, causing build failures on case-sensitive file systems

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

- Fixed the corrupt `ipsc-target-with-bullet-holes.png` image file, and converted it to the `webp` format

---

### 🧾 [4.1.4] - 2026-01-19

#### ➕ Added

##### Documentation

- Added/updated `README.md` with quickstart and prerequisites, install and development steps, build and preview instructions, test and lint commands, and contribution guidelines

#### 🔄 Changed

##### Documentation

- Clarified the usage of `package.json` scripts (`dev`, `build`, `host`, `preview`, `test`, `docs`, `sitemap`) in `README.md`
- Small editorial fixes to `ARCHITECTURE.md` and `UI.md`
- Small formatting changes in `plan.md`/`tasks.md` under `documentation/roadmap/`

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

This project does not yet have a dedicated `CONTRIBUTING.md` (tracked in [`documentation/roadmap/tasks.md`](documentation/roadmap/tasks.md)). Until then, follow the conventions in [AGENTS.md](AGENTS.md) and [CLAUDE.md](CLAUDE.md):

1. Branch from `develop` using the GitFlow model (`feature/<short-description>`, `hotfix/<short-description>`, or `release/vX.Y.Z` — see AGENTS.md's Git Workflow)
2. Run `npm run lint`, `npm run build`, and `npm test` before opening a PR
3. Add a `CHANGELOG.md` entry under `### 🧪 [Unreleased]` in the same change, per AGENTS.md's Git Workflow conventions
4. Open the PR against `develop`, never `main`

---

### 💬 Support

For issues, feature requests, or questions:

- **GitHub Issues:** [tahoni/hpsc-web-vite/issues](https://github.com/tahoni/hpsc-web-vite/issues)
- **Repository:** [tahoni/hpsc-web-vite](https://github.com/tahoni/hpsc-web-vite)
