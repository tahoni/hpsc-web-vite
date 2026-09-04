# HPSC Website

## 🧾 Release Notes

### [4.1.3] - 2026-01-11

**Theme:** Responsive Navigation & Security Tooling

**Key Highlights:**

- `HeaderMenu` now collapses at the `lg` breakpoint instead of `xl`, for a better mid-size experience
- Added a CodeQL analysis workflow; upgraded `react-router-dom` to `7.12.0`

#### ➕ Added

##### CI/CD

- Added a CodeQL analysis workflow configuration for automated security scanning and code quality checks

#### 🔄 Changed

##### Components

- `HeaderMenu`'s navigation bar now collapses at the `lg` breakpoint instead of `xl`, for a better experience on
  medium-sized screens

##### Assets

- Updated favicons in `index.html` and cleaned up metadata

##### Build & Tooling

- Updated `.gitignore` to exclude IDE-specific theme files (`_theme_*.xml`); updated `.idea` code style settings for
  team consistency

##### Dependencies

- Upgraded `react-router-dom` to `7.12.0`; updated `@typescript-eslint`, `@rollup` packages and `eslint-utils` to
  their latest compatible versions
