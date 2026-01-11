# HPSC website

## Release Notes

### Version 4.1.3 - _2026-01-11_

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
