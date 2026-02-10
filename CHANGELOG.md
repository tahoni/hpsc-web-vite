# HPSC Website

## Change Log

### Table of Contents

- [Version 4.2.2](#version-422---_2026-02-10_)
- [Version 4.2.1](#version-421---_2026-01-20_)
- [Version 4.2.0](#version-420---_2026-01-20_)
- [Version 4.1.4](#version-414---_2026-01-19_)
- [Version 4.1.3](#version-413---_2026-01-11_)
- [Version 4.1.2](#version-412---_2026-01-03_)
- [Version 4.1.1](#version-411---_2026-01-02_)
- [Version 4.1.0](#version-410---_2025-12-30_)
- [Version 4.0.3](#version-403---_2025-11-26_)
- [Version 4.0.2](#version-402---_2025-11-26_)
- [Version 4.0.1](#version-401---_2025-10-27_)
- [Version 4.0.0](#version-400---_2025-08-17_)

### [Version 4.2.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.2.2) - _2026-02-10_

Fixed security vulnerabilities in dependencies.

#### Licence and Documentation

- Updated `CHANGELOG.md` and `RELEASE_NOTES.md` to reflect repository and title changes.
- Normalised filenames and updated `.gitignore`.

#### Dependencies

- Fixed security vulnerabilities in dependencies.

#### Changes by

@dependabot[bot]
@tahoni

### [Version 4.2.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.2.1) - _2026-01-20_

Moved shared local helpers back under the `shared` directory.
Added a file documenting all the dependencies in the project that are looking for funding.

#### General Code Improvements

- Moved helpers for route management back under the `src/shared/helpers/` directory.

#### Licence and Documentation

- Added a `PACKAGES.md` file documenting all the dependencies in the project that are looking
  for funding.

#### Dependencies

- Removed the unused dependencies `lightgallery` and `react-pdf`.
- Updated the `@tahoni/tahoni-lib-react` dependency to version `3.3.0`.

#### Changes by

@tahoni

### [Version 4.2.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.2.0) - _2026-01-20_

Optimised the images by using the webp format.

#### Enhancements and Updates

- Decreased the size of all images by converting them to the webp format.

#### Bug Fixes

- Fixed the corrupt `ipsc-target-with-bullet-holes.png` image file, and
  converted it to the webp format.

#### General Code Improvements

- Added a constant for the default file extension for future maintainability.
- Added a constant for the default images folder for easier maintainability.

#### Changes by

@tahoni

### [Version 4.1.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.4) - _2026-01-19_

Adds or updates project documentation and onboarding material.
Documents development, build, test and deploy workflows for the project.

#### Licence and Documentation

- Added and updated `README.md` with:
    - Quickstart and prerequisites
    - Install and development steps
    - Build and preview instructions
    - Test and lint commands
    - Contribution guidelines
- Clarified the usage of scripts in `package.json` (examples: `dev`, `build`, `host`, `preview`, `test`,
  `docs`, `sitemap`) in `README.md`.
- Small editorial fixes `ARCHITECTURE.md` and `UI.md`.
- Small formatting changes in `plan.md` and `task.md` in the `documnetation/roadmap/` folder.
- Removed the screenshot from `README.md` to reduce maintenance overhead.
- Deleted the `documentation/screenshots/` folder as the content is not being used any more.

#### Changes by

@dependabot
@tahoni

### [Version 4.1.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.3) - _2026-01-11_

Improved responsive behaviour and enhanced the development workflow with better security tooling.

#### Enhancements and Updates

- Updated the `HeaderMenu` component's breakpoint. The navigation bar now collapses at the `lg` size instead
  of `xl`, providing a better experience on medium-sized screens.
- Updated favicons in `index.html` and cleaned up metadata for a more polished look.

#### General Technical Changes

- Added a CodeQL analysis workflow configuration to enhance automated security scanning and code quality
  checks.
- Updated `.gitignore` to exclude IDE-specific theme files (`_theme_*.xml`) and updated `.idea` code style
  settings for team consistency.

#### Dependencies

- Upgraded `react-router-dom` to `7.12.0` to support React 18.
- Updated several internal dev-dependencies including `@typescript-eslint`, `@rollup` packages, and
  `eslint-utils` to their latest compatible versions.

#### Changes by

@dependabot
@tahoni

### [Version 4.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.2) - _2026-01-03_

Refactored the `Events` and `Members` features to better organise content by year (specifically for 2025).
Introduced a cleaner directory structure, relocates "World Shoot 2025" and "Club Shirts" content into
dedicated namespaces and fixes several import paths.

#### Enhancements and Updates

- Introduced a generic `Section` component in `src/shared/components/Section/` to handle arrays of
  `ReactElement` with optional collapsed states.
- Temporarily commented out the "Apparel" section in the World Shoot summary.

#### General Code Improvements

- Moved `WorldShoot2025` related components, constants and styles into a new nested directory structure under
  `src/features/Events/content/2025/WorldShoot2025/`.
- Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss` and updated `@extend` rules to
  maintain visual consistency.
- Updated `WorldShootContent` to `WorldShoot2025Content` to be more specific to the event year.
- Simplified imports within `WorldShoot2025.mdx`.
- Relocated `ClubShirts` content to a `2025` subfolder within the `Members` feature.
- Added `index.ts` files to the `2025` content folders to simplify exports and improve modularity.

#### General Technical Changes

- Cleaned up relative imports and added missing `.tsx` extensions across several files.

#### Changes by

@imgbot
@tahoni

### [Version 4.1.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.1) - _2026-01-02_

Refined the user interface, improved the responsive design for navigation components and updated project
documentation and assets.

#### Enhancements & Updates

- Updated `HeaderMenu` with improved breakpoints and layout adjustments to ensure better responsiveness on
  extra-large screens.
- Streamlined the `Header` structure by removing redundant components (like `HeaderTitle`) and consolidating
  `HeaderMenu` into `HeaderContent` for better maintainability.
- Refactored SCSS for the header and footer to ensure perfect alignment across different viewports.
- Improved layout consistency in `index.html`.
- Added support for unique Google Maps IDs to allow for better management of map styles and features.

#### General Code Improvements

- Expanded TypeDoc entry points and enhanced TSDoc documentation across multiple features for better API
  clarity.

#### Licence and Documentation

- Corrected date formatting inconsistencies in `CHANGELOG` and `RELEASE_NOTES`.
- Refreshed project screenshots and updated links to reflect the latest UI changes.
- Updated copyright years to 2026 and standardised British English in code annotations and TSDoc.

#### General Technical Changes

- Removed unused icon constants and simplified the overall component architecture.

#### Changes by

@tahoni

### [Version 4.1.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.0) - _2025-12-30_

Modernised the navigation experience, ensured the layouts are robust across various device sizes and
leveraged unique Google Map IDs for better management of map styles and features.

#### Enhancements and Updates

- Simplified menu styles in `_standard.scss`, moving away from custom dropdown overrides to standard
  `nav-link` styling with an italicised touch.
- Introduced `aboutUsMapId` and `footerMapId` to provide unique identifiers for Google Maps instances. This
  allows for better referencing and configuration via the Google Maps Platform.
- Updated `VenueMap` and `SimpleVenueMap` to support an optional `mapId` prop, falling back to a generated key
  if not provided.
- Significant updates to `Layout.module.scss` to handle header and footer sidebar ordering across different
  breakpoints (`md` and `lg`). This ensures logos and headings stack correctly on mobile devices.

#### General Code Improvements

- Reorganised imports in `App.scss` to better categorise package, library and project styles.

#### Dependencies

Added `lightgallery` to the project dependencies and integrated its SCSS into the global styles, preparing the
site for enhanced image gallery features.

#### Changes by

@tahoni

### [Version 4.0.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.0.3) - _2025-11-26_

Fixed the display of images.

#### Bug Fixes

- Moved the `public/images` directory to `public/assets/images` to display the images again.

#### Changes by

@tahoni

### [Version 4.0.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.0.2) - _2025-11-26_

Configured the resources to use a relative path using the `@` notation.
Performed refactoring to align with industry standards.

#### General Code Improvements

- Configured the resources to use a relative path using the `@` notation.
- Refactored the directory structure to align with industry standards.
- Renamed the stylesheets to align with industry standards.

#### Licence and Documentation

- Fixed the formatting of the `LICENSE.md` file.

#### General Technical Changes

- Don't ignore `.env` files in when checking into Git.

#### Dependencies

- Fixed security vulnerabilities in dependencies.
- Added the `react-pdf` dependency for PDF rendering.

#### Changes by

@tahoni
@dependabot

### [Version 4.0.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.0.1) - _2025-10-27_

Upgraded Bootstrap framework integration with Bootstrap Icons.

#### Enhancements and Updates

- Upgraded Bootstrap framework integration with Bootstrap Icons.

#### General Code Improvements

- Applied `fs.strict` check to HTML files (via Vite upgrade).
- Refactored conditional rendering logic across components for improved readability and maintainability.
- Improved error handling and type annotations.

#### Licence and Documentation

- Added JSDoc comments for better documentation.

#### General Technical Changes

- Improved builder scripts (`GeneratePrDescription.ts`, `GenerateReleaseNotes.ts`).
- Improved code readability and maintainability.
- Enhanced type safety in utility functions.
- Resolved project errors and warnings.

#### Dependencies

- Fixed security vulnerabilities in dependencies.
- **Vite** upgraded from 6.3.5 → 6.3.6 → 6.4.1 (security fixes and improvements).
- Added `bootstrap-icons` for icon library support.
- Added `react-google-recaptcha-v3` for reCAPTCHA integration.
- Added `@types/react-google-recaptcha-v3` for type definitions.

#### Changes by

@tahoni
@dependabot

### [Version 4.0.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.0.0) - _2025-08-17_

Changed the stylesheets to conform to standards.

#### Enhancements and Updates

- Added the Bosninja logo in black and white.
- Created new Content components.
- Updated the sitemap.

#### Bug Fixes

- Fixed the e-mail address regular expression.

#### General Code Improvements

- Used `@use` and `@forward` instead of `@import` in the stylesheets.
- Renamed the partial stylesheets to start with an underscore.
- Overrode some default bootstrap styles.
- Used namespaces in the project stylesheets.
- Created a `vendors` subdirectory for bootstrap overrides.
- Refactored the directory structure.

#### General Technical Changes

- Updated the build targets to `ES2023`.
- Integrated with Junie.

#### Licence and Documentation

- Improved the `ARCHITECTURE.md` file.
- Moved the `CHANGELOG.md` file contents for version 3 to the `HISTORY.md` file.
- Created a template for the `CHANGELOG.md` file.
- Created a template for the `RELEASE_NOTES.md` file.

#### Dependencies

- Updated vulnerable dependencies.

#### Changes by

@tahoni
@dependabot
