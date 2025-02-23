# HPSC website
## Release Notes

### [Version 3.4.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.4.0) - _2025-02-25_
Added lazy loading of pages.<br/>
Fixed the form styling.<br/>

#### Enhancements and Updates
- Created a page component for the common elements of all pages.
- Added lazy loading of pages in the page component.
- Added a `styles-classes.scss` stylesheet to create generic form control styles.
- Added these styles to the `style.scss` stylesheet to style all forms consistently.
- Added a variable to change the colour of the loader.

#### General Code Improvements
- Components are exported by default instead of by name in preparation for lazy loading.
- Built the menu and routes dynamically from a single source.
- Renamed all stylesheets starting with `style-` to start with `styles-`.

#### Changes by
@tahoni
