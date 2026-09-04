# HPSC Website

## 🧾 Release Notes

### [4.1.0] - 2025-12-30

**Theme:** Map Identity & Responsive Layout Robustness

**Key Highlights:**

- Introduced `aboutUsMapId`/`footerMapId` for per-instance Google Maps configuration
- Reworked `Layout.module.scss` so header/footer sidebar ordering holds up across `md`/`lg` breakpoints

#### ➕ Added

##### Maps

- Introduced `aboutUsMapId` and `footerMapId` to provide unique identifiers for Google Maps instances, allowing
  better referencing and configuration via the Google Maps Platform
- Updated `VenueMap` and `SimpleVenueMap` to support an optional `mapId` prop, falling back to a generated key if not
  provided

##### Dependencies

- Added `lightgallery` to the project dependencies and integrated its SCSS into the global styles, preparing the
  site for enhanced image gallery features

#### 🔄 Changed

##### Styling

- Simplified menu styles in `_standard.scss`, moving away from custom dropdown overrides to standard `nav-link`
  styling with an italicised touch
- Significant updates to `Layout.module.scss` to handle header and footer sidebar ordering across different
  breakpoints (`md` and `lg`), ensuring logos and headings stack correctly on mobile devices

##### Build & Tooling

- Reorganised imports in `App.scss` to better categorise package, library and project styles
