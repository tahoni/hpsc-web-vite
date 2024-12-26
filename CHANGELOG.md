# HPSC website
## Change Log

### Table of Contents
- [Version 3.2.5](#version-325---2024-12-25)
- [Version 3.2.4](#version-324---2024-12-24)
- [Version 3.2.3](#version-323---2024-12-22)
- [Version 3.2.2](#version-322---2024-12-18)
- [Version 3.2.1](#version-321---2024-12-17)
- [Version 3.2.0](#version-320---2024-12-17)
- [Version 3.1.4](#version-314---2024-12-16)
- [Version 3.1.3](#version-313---2024-12-16)
- [Version 3.1.2](#version-312---2024-12-16)
- [Version 3.1.1](#version-311---2024-12-15)
- [Version 3.1.0](#version-310---2024-12-14)
- [Version 3.0.5](#version-305---2024-12-06)
- [Version 3.0.4](#version-304---2024-11-02)
- [Version 3.0.3](#version-303---2024-10-29)
- [Version 3.0.2](#version-302---2024-08-27)
- [Version 3.0.1](#version-301---2024-08-27)
- [Version 3.0.0](#version-300---2024-08-18)


### Unreleased
Improved the documentation.<br />

#### Licence and Documentation
- Bring the readme file up to date.
- Bring the licence file up to date.
- Added release notes.
- Added a change log.


### [Version 3.2.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.5) - 2024-12-25
Moved all common static content to global constants.<br />

#### General Code Improvements
- Moved all common static content to global constants.
- Used these constants in:
  - the header. 
  - the footer.
  - the About page.


### [Version 3.2.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.4) - 2024-12-24
Made the About page the homepage.<br />
Finished the website layout by completing the footer.<br />
Completed the footer by adding contact details and copyright.<br />
Improved the responsiveness of the website.<br />
Added more keywords for SEO purposes.<br />

#### Enhancements and Updates
- Made the About page the homepage.
- Added contact details in the footer, including an e-mail and links to Facebook.
- Added copyright in the footer.
- Changed the styling of the footer to include the new content and make it more responsive.
- Improved the responsiveness of the website.
- Added more keywords for SEO on the base page.

### Bug Fixes
- Fixed the hover colour of the hyperlinks.

#### General Code Improvements
- Moved the styling of the icon image to the CSS layout component.
- Removed styling and JavaScript from the website preamble.
- Decreased the maximum size of the generated chunks by chunking the tahoni React library in its own chunk.

#### Dependencies
- Updated the Vite React libraries.


### [Version 3.2.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.3) - 2024-12-22
Added the SAPSA and IPSC logos to the footer.<br />
Completed the map to the shooting range in the footer.<br />

#### Enhancements and Updates
- A working map of the club shooting range was added to the footer.
- Changed the styling of the footer to include the map component.
- Ordered the footer content to make it responsive.
- Removed uncompleted shooting range map components and replaced them with the new generic map components.
- Created map components with simple and clustered markers using the standard Google Maps components.
- Improved the text and background contrast, including the background gradient.
- Add the image of the IPSC target with bullet holes to the `public\assets` directory.

#### General Code Improvements
- Wrapped all components in a React memo.
- Moved icon styling to the layout component CSS.
- MD5 hashes were used as keys for the map component markers.
- Renamed all CSS classes to camel case.
- Added CSS variables.

#### Dependencies
- Added the Google Maps clustered marker library.
- Added an MD5 library.

#### Security
- Removed the Google Maps API key included in the last commit.


### [Version 3.2.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.2) - 2024-12-18
Allowed React to handle page routing.<br />

#### General Technical Changes
- Added a `.htaccess` file to allow React to handle the page routing.


### [Version 3.2.1](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.1) - 2024-12-17
Added an About page with the club's history.<br />
Added hyperlinks to the About component.<br />
A map of the shooting range was added in the footer.<br />

#### Enhancements and Updates
- A range map component was added to the footer.
- Basic styling for the footer component was added.
- Added an About page with the About component.
- Added hyperlinks in the About component.
- Added hyperlink styling.

#### General Code Improvements
- Removed the page component and called the content components directly.
- Moved the sidebar component to the `components` directory.

#### General Technical Changes
- Created a `_redirects` file to allow React to handle the page routing in Netlify.

#### Dependencies
- Added the React Google Maps library


### [Version 3.2.0](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.0) - 2024-12-17
Read all page content from Markdown components.<br />

#### Enhancements and Updates
- Added React MDX Markdown components.
- Read all page content from the Markdown components.
- Removed the home page with HTML content and replaced it with content from an MDX component.
- Removed all simple Markdown files and replaced them with MDX Markdown components.
- Added an About page.
- Added a page component.
- A content component was added to the body component.
- Open the NGPSA hyperlink in a new window.

#### General Code Improvements
- Added sidebar component properties to the template page.

#### General Technical Changes
- Pre-process MDX components in vite.config.ts.

#### Dependencies
- Added support for MDX with new dependencies from `@mdx-js`.


### [Version 3.1.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.1) - 2024-12-15

#### Enhancements and Updates
- Aligned the body content between the logos in the header.


### [Version 3.1.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.0) - 2024-12-14
Created an SVG favicon.<br />
Added a gradient background.<br />
Completed the header by adding logos and a heading.<br />

#### Enhancements and Updates
- Added pages from the old website without making any changes.
- Updated the index page for better metadata and manifest linkage.
- Updated the index page with more keywords.
- Replaced the ICO favicon with an SVG one.
- Added new icon fonts to the `public/assets` directory.
- Replaced outdated images and icons in the `public/assets` directory with up-to-date ones.
- Deleted unused images from the `public/assets` directory
- A layout skeleton with a header, footer and body was created.
- A gradient background was added to the layout.
- A header with the HPSC and NGPSA logos was added.
- A new homepage was created to replace the under-construction page.

#### General Code Improvements
- Replaced CSS variables with SCSS variables.

#### General Technical Changes
- The `_redirects` file was no longer needed and was deleted.

#### Dependencies
- Upgraded several dependencies to their latest versions.


### [Version 3.0.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.5) - 2024-12-06
Fixed the spelling of the "_Hartbeespoortdam Practical Shooting Club_" properly.<br />

#### Enhancements and Updates
- Corrected the name of the club everywhere.


### [Version 3.0.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.4) - 2024-11-02
Changed the website's title to "_Hartebeespoortdam Practical Shooting Club_".<br />

#### Enhancements and Updates
- Changed the title of the index page to the club's name.


### [Version 3.0.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.3) - 2024-10-29
Fixed the spelling of the "_Hartebeespoortdam Practical Shooting Club_".<br />

#### Bug Fixes
- Fixed the spelling of the club everywhere

#### Dependencies
- Bumped the Vite library to get rid of vulnerabilities.


### [Version 3.0.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.2) - 2024-08-27
Removed the background image to improve the look and feel.<br />

#### Enhancements and Updates
- Removed the background image.


### [Version 3.0.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.1) - 2024-08-27
Tried to improve the styling of the background.<br />

#### Enhancements and Updates
- A header and a body were added to the layout component.
- Attempted to improve the background styling.
- Allowed the under-construction carousel to autoplay.
- Added small, black-and-white and small black-and-white logos.

#### Dependencies
- Updated the Vite libraries.
- Updated the Slick Carousel library.


### [Version 3.0.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.0) - 2024-08-18
Created a homepage with an under-construction carousel.<br />

#### Enhancements and Updates
- Scaffolded the initial React application using Vite.
- Added icons and logos.
- Resized the icon and logo images to make them smaller.
- Added an image with an IPSC target with bullet holes.
- Added another image to be displayed in the under-construction carousel.
- Optimized the images displayed in the carousel.
- Use the tahoni React library for standard components like the carousel.
- Use the tahoni React library for data structures. 

#### Licence and Documentation
- Added a readme file with a detailed project description, structure, technology stack, instructions, screenshots, licence, author, and support information.
- Added a licence file.

#### General Technical Changes
- Modified `.gitignore` to exclude additional files and directories.
- Modified `tsconfig.app.json` to add more linting rules.
- Added `.env.local` and `.env.production` files.
- Added `.npmrc` configuration for GitHub NPM registry.
- Created GitHub Actions workflow for CodeQL analysis (`.github/workflows/codeql.yml`).
- Created a `_redirects` file to allow React to handle the page routing in Netlify.

#### Dependencies
- The standard Vite and React libraries were added.
- Added Font Awesome libraries.
- Added Bootstrap and React Bootstrap libraries.
- Added the tahoni React library.


### [Version 3.1.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.4) - 2024-12-16

### [Version 3.1.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.3) - 2024-12-16

### [Version 3.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.2) - 2024-12-16
