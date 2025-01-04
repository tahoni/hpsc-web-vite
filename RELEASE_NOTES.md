# HPSC website
## Release Notes

### [Version 3.3.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.2) - _2025-01-04_
Created a Links page.<br/>
Created a Members page.<br/>

#### Enhancements and Updates
- Created a Links page with links to NGPSA, SAPSA, and IPSC.
- Created a Member page with a photo of the club shirts.
- Modified the key of the map pin component.
- Moved the logo files to the public directory.
- Store the names of the logo files as constants.
- Removed all low-resolution logo files.
- Removed all links to uncompleted pages from the website.
- Moved all page contents to the content directory.
- Don't add content to the page; add content components instead.
- Populate the member's page with an array of components.

#### General Code Improvements
- Only run CodeQL analysis on the `develop` and `main` branches.
- Wrap all components with `React.memo`.
- Added `index.ts` or `index.tsx` files for all components, including content.

#### Dependencies
- Removed the `js-md5`` dependency.

#### Changes by
@tahoni
