# HPSC website

## Change Log

### Table of Contents

- [Version 4.1.0](#version-410---_2025-12_30_)
- [Version 4.0.3](#version-403---_2025-11_26_)
- [Version 4.0.2](#version-402---_2025-11_26_)
- [Version 4.0.1](#version-401---_2025-10-27_)
- [Version 4.0.0](#version-400---_2025-08-17_)

### Version 4.1.0 - _2025-12_30_

Modernise the navigation experience, ensure the layouts are robust across various device sizes, 
and leverage unique Google Map IDs for better management of map styles and features.

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

### [Version 4.0.3](https://github.com/tahoni/template-react/releases/tag/version-4.0.3) - _2025-11_26_

Fixed the display of images.

#### Bug Fixes

- Moved the `public/images` directory to `public/assets/images` to display the images again.

#### Changes by

@tahoni

### [Version 4.0.2](https://github.com/tahoni/template-react/releases/tag/version-4.0.2) - _2025-11_26_

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

### [Version 4.0.1](https://github.com/tahoni/template-react/releases/tag/version-4.0.1) - _2025-10-27_

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

### [Version 4.0.0](https://github.com/tahoni/template-react/releases/tag/version-4.0.0) - _2025-08-17_

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
