# HPSC website

## Change Log

### Table of Contents

- [Version 4.1.2](#version-412---_2026-01-03_)
- [Version 4.1.1](#version-411---_2026-01-02_)
- [Version 4.1.0](#version-410---_2025-12-30_)
- [Version 4.0.3](#version-403---_2025-11-26_)
- [Version 4.0.2](#version-402---_2025-11-26_)
- [Version 4.0.1](#version-401---_2025-10-27_)
- [Version 4.0.0](#version-400---_2025-08-17_)

### [Version 4.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.2) - _2026-01-03_

Refactored the `Events` and `Members` features to better organise content by year (specifically for 2025). 
It introduces a cleaner directory structure, relocates "World Shoot 2025" and "Club Shirts" content into dedicated namespaces, 
and fixes several import paths.

#### Refactoring & Organisation
- _Namespace Restructuring:_ Moved `WorldShoot2025` related components, constants, and styles into a new nested directory 
structure under `src/features/Events/content/2025/WorldShoot2025/`.
- _Component Renaming:_ Updated `WorldShootContent` to `WorldShoot2025Content` to be more specific to the event year.
- _Member Content Update:_ Relocated `ClubShirts` content to a `2025` subfolder within the `Members` feature.
- _Index Exports:_ Added `index.ts` files to the `2025` content folders to simplify exports and improve modularity.

#### Styles & Assets
- _Style Consolidation:_ Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss` and 
updated `@extend` rules to maintain visual consistency.

#### New Components
- _Section Component_: Introduced a generic `Section` component in `src/shared/components/Section/` to handle 
arrays of `ReactElement` with optional collapsed states.

#### Cleanup & Maintenance
- _Import Fixes:_ Cleaned up relative imports and added missing `.tsx` extensions across several files.
- _Version Bump:_ Incremented project version in `package.json` from `4.1.1` to `4.1.2`.
- _MDX Updates:_ Simplified imports within `WorldShoot2025.mdx`.
- _Commented Code:_ Temporarily commented out the "Apparel" section in the World Shoot summary.

#### Changes by

@imgbot
@tahoni

### [Version 4.1.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.1) - _2026-01-02_

Refined the user interface, improved the responsive design for navigation components, and updated project documentation and assets.

#### Enhancements & UI Improvements
- _Navigation Refinement:_ Updated `HeaderMenu` with improved breakpoints and layout adjustments to ensure 
better responsiveness on extra-large screens.
- _Header Simplification:_ Streamlined the `Header` structure by removing redundant components (like `HeaderTitle`) 
and consolidating `HeaderMenu` into `HeaderContent` for better maintainability.
- _Styling Updates:_ 
  - Refactored SCSS for the header and footer to ensure perfect alignment across different viewports.
  - Improved layout consistency in `index.html`.
- _Maps Integration:_ Added support for unique Google Map IDs to allow for better management of map styles and features.

#### Documentation & Assets
- _README Updates:_ Refreshed project screenshots and updated links to reflect the latest UI changes.
- _Legal & Metadata:_ Updated copyright years to 2025 and standardised British English in code annotations and TSDoc.
- _Developer Experience:_ Expanded TypeDoc entry points and enhanced TSDoc documentation across multiple features 
for better API clarity.

#### Technical Maintenance
- _Bug Fixes:_ Corrected date formatting inconsistencies in `CHANGELOG` and `RELEASE_NOTES`.
- _Clean-up:_ Removed unused icon constants and simplified the overall component architecture.

#### Changes by

@tahoni

### [Version 4.1.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.0) - _2025-12-30_

Modernised the navigation experience, ensured the layouts are robust across various device sizes, 
and leveraged unique Google Map IDs for better management of map styles and features.

#### Enhancements and Updates
- _Menu Styling:_ Simplified menu styles in `_standard.scss`, moving away from custom dropdown overrides 
to standard `nav-link` styling with an italicised touch.
- _Map Identifier:_ Introduced `aboutUsMapId` and `footerMapId` to provide unique identifiers 
for Google Maps instances. This allows for better referencing and configuration via the Google Maps Platform.
- _Component Enhancement:_ Updated `VenueMap` and `SimpleVenueMap` to support an optional `mapId` prop, 
falling back to a generated key if not provided.
- _Layout Responsiveness:_ Significant updates to `Layout.module.scss` to handle header and footer sidebar 
ordering across different breakpoints (`md` and `lg`). 
This ensures logos and headings stack correctly on mobile devices.

#### General Code Improvements
- _Sass Clean-up:_ Reorganised imports in `App.scss` to better categorise package, library, and project styles.

#### Dependencies

- _LightGallery:_ Added `lightgallery` to the project dependencies and integrated 
its SCSS into the global styles, preparing the site for enhanced image gallery features.

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
