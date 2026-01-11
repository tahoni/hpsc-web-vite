# HPSC website

## Change Log

### Table of Contents

- [Version 4.1.3](#version-413---_2026-01-11_)
- [Version 4.1.2](#version-412---_2026-01-03_)
- [Version 4.1.1](#version-411---_2026-01-02_)
- [Version 4.1.0](#version-410---_2025-12-30_)

### [Version 4.1.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.3) - _2026-01-11_
Improved responsive behaviour and enhanced the development workflow with better security tooling.

#### Enhancements and Updates
- Updated the `HeaderMenu` component's breakpoint. The navigation bar now collapses at the `lg` size instead of `xl`, providing a better experience on medium-sized screens.
- Updated favicons in `index.html` and cleaned up metadata for a more polished look.

#### General Technical Changes
- Added a CodeQL analysis workflow configuration to enhance automated security scanning and code quality checks.
- Updated `.gitignore` to exclude IDE-specific theme files (`_theme_*.xml`) and updated `.idea` code style settings for team consistency.

#### Dependencies
- Upgraded `react-router-dom` to `7.12.0` to support React 18.
- Updated several internal dev-dependencies including `@typescript-eslint`, `@rollup` packages, and `eslint-utils` to their latest compatible versions.
  
#### Changes by
@dependabot
@tahoni

### [Version 4.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.2) - _2026-01-03_
Refactored the `Events` and `Members` features to better organise content by year (specifically for 2025). 
Introduced a cleaner directory structure, relocates "World Shoot 2025" and "Club Shirts" content into dedicated namespaces, and fixes several import paths.

#### Enhancements and Updates
- Introduced a generic `Section` component in `src/shared/components/Section/` to handle arrays of `ReactElement` with optional collapsed states.
- Temporarily commented out the "Apparel" section in the World Shoot summary.

#### General Code Improvements
- Moved `WorldShoot2025` related components, constants, and styles into a new nested directory structure under `src/features/Events/content/2025/WorldShoot2025/`.
- Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss` and updated `@extend` rules to maintain visual consistency.
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
Refined the user interface, improved the responsive design for navigation components, and updated project documentation and assets.

#### Enhancements & Updates
- Updated `HeaderMenu` with improved breakpoints and layout adjustments to ensure better responsiveness on extra-large screens.
- Streamlined the `Header` structure by removing redundant components (like `HeaderTitle`) and consolidating `HeaderMenu` into `HeaderContent` for better maintainability.
- Refactored SCSS for the header and footer to ensure perfect alignment across different viewports.
- Improved layout consistency in `index.html`.
- Added support for unique Google Maps IDs to allow for better management of map styles and features.

#### General Code Improvements
- Expanded TypeDoc entry points and enhanced TSDoc documentation across multiple features for better API clarity.

#### Licence and Documentation
- Corrected date formatting inconsistencies in `CHANGELOG` and `RELEASE_NOTES`.
- Refreshed project screenshots and updated links to reflect the latest UI changes.
- Updated copyright years to 2026 and standardised British English in code annotations and TSDoc.

#### General Technical Changes
- Removed unused icon constants and simplified the overall component architecture.

#### Changes by
@tahoni

### [Version 4.1.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-4.1.0) - _2025-12-30_
Modernised the navigation experience, ensured the layouts are robust across various device sizes, and leveraged unique Google Map IDs for better management of map styles and features.

#### Enhancements and Updates
- Simplified menu styles in `_standard.scss`, moving away from custom dropdown overrides to standard `nav-link` styling with an italicised touch.
- Introduced `aboutUsMapId` and `footerMapId` to provide unique identifiers for Google Maps instances. This allows for better referencing and configuration via the Google Maps Platform.
- Updated `VenueMap` and `SimpleVenueMap` to support an optional `mapId` prop, falling back to a generated key if not provided.
- Significant updates to `Layout.module.scss` to handle header and footer sidebar ordering across different breakpoints (`md` and `lg`). This ensures logos and headings stack correctly on mobile devices.

#### General Code Improvements
- Reorganised imports in `App.scss` to better categorise package, library, and project styles.

#### Dependencies
Added `lightgallery` to the project dependencies and integrated its SCSS into the global styles, preparing the site for enhanced image gallery features.

#### Changes by
@tahoni
