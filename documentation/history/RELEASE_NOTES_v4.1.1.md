# HPSC Website

## 🧾 Release Notes

### [4.1.1] - 2026-01-02

**Theme:** Header Consolidation & Documentation Polish

**Key Highlights:**

- Streamlined `Header` by removing `HeaderTitle` and folding `HeaderMenu` into `HeaderContent`; improved extra-large
  breakpoint behaviour
- Added unique Google Maps IDs; expanded TypeDoc/TSDoc coverage; standardised British English throughout

#### ➕ Added

##### Maps

- Added support for unique Google Maps IDs, for better management of map styles and features

#### 🔄 Changed

##### Components

- Improved `HeaderMenu` breakpoints and layout adjustments for better responsiveness on extra-large screens
- Streamlined the `Header` structure by removing `HeaderTitle` and consolidating `HeaderMenu` into `HeaderContent`
  for better maintainability

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
