# HPSC website

## Release Notes

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
