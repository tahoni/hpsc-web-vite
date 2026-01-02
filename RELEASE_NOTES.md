# HPSC website

## Release Notes

### Version 4.1.1 - _2026-01-02_

Refine the user interface, improve the responsive design for navigation components, and update project documentation and assets.

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
