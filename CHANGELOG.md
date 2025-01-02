# HPSC website

## Change Log

### Table of Contents
- [Version 3.3.0](#version-330---_2025-01-02_)
- [Version 3.2.6](#version-326---_2024-12-26_)
- [Version 3.2.5](#version-325---_2024-12-25_)
- [Version 3.2.4](#version-324---_2024-12-24_)
- [Version 3.2.3](#version-323---_2024-12-22_)
- [Version 3.2.2](#version-322---_2024-12-18_)
- [Version 3.2.1](#version-321---_2024-12-17_)
- [Version 3.2.0](#version-320---_2024-12-17_)
- [Version 3.1.4](#version-314---_2024-12-16_)
- [Version 3.1.3](#version-313---_2024-12-16_)
- [Version 3.1.2](#version-312---_2024-12-16_)
- [Version 3.1.1](#version-311---_2024-12-15_)
- [Version 3.1.0](#version-310---_2024-12-14_)
- [Version 3.0.5](#version-305---_2024-12-06_)
- [Version 3.0.4](#version-304---_2024-11-02_)
- [Version 3.0.3](#version-303---_2024-10-29_)
- [Version 3.0.2](#version-302---_2024-08-27_)
- [Version 3.0.1](#version-301---_2024-08-27_)
- [Version 3.0.0](#version-300---_2024-08-18_)

### [Version 3.3.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.0) - _2025-01-02_
Created a Contact Us page.<br/>

#### Enhancements and Updates
- Created a page title component.
- Created a CAPTCHA component for Google reCAPTCHA.
- Created a CAPTCHA field for the JSON schema form using the above component.
- Validated the CAPTCHA field with a custom validator function.
- A JSON schema with validations for the Contact Us page was created.
- Added the CAPTCHA field to the JSON schema.
- Created a Contact Us page using this JSON schema with a CAPTCHA puzzle.
- A message is displayed when the request is successfully sent.
- The back-end is not working yet.

#### General Code Improvements
- Overrode some of the Bootstrap SASS variables and simplified the custom styles.
- Change all CSS classes to camel case.

#### General Technical Changes
- Format the source code using the Prettier formatter.

#### Dependencies
- Added the JSON schema form dependencies from `@rjsf`.
- Added the Google reCAPTCHA dependency from `react-recaptcha-x`.
- Added the SweetAlert2 dependency.
- Added the Prettier dependency to format the source code.

#### Changes by
@tahoni

### [Version 3.2.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.6) - _2024-12-26_
Improved the documentation.<br />

#### Licence and Documentation
- Brought the readme file up to date.
- Brought the licence file up to date.
- Added release notes.
- Added a change log.

#### Changes by
@tahoni

### [Version 3.2.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.5) - _2024-12-25_
Moved all common static content to global constants.<br />

#### General Code Improvements
- Moved all common static content to global constants.
- Used these constants in:
    - the header.
    - the footer.
    - the About page.

#### Changes by
@tahoni

### [Version 3.2.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.4) - _2024-12-24_
Made the About page the homepage.<br />
Finished the website layout by completing the footer.<br />
Completed the footer by adding contact details and copyright.<br />
Improved the responsiveness of the website.<br />
Added more keywords for SEO purposes.<br />

#### Enhancements and Updates
- Made the About page the homepage.
- Added contact details in the footer, including an e-mail and links to
  Facebook.
- Added copyright in the footer.
- Changed the styling of the footer to include the new content and make it more
  responsive.
- Improved the responsiveness of the website.
- Added more keywords for SEO on the base page.

#### Bug Fixes
- Fixed the hover colour of the hyperlinks.

#### General Code Improvements
- The styling of the icon image was moved to the CSS layout component.
- Removed styling and JavaScript from the website preamble.
- Decreased the maximum size of the generated chunks by chunking the tahoni
  React library in its own chunk.

#### Dependencies
- Updated the Vite React libraries.

#### Changes by
@tahoni

### [Version 3.2.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.3) - _2024-12-22_
Added the SAPSA and IPSC logos to the footer.<br />
Completed the map to the shooting range in the footer.<br />

#### Enhancements and Updates
- A working map of the club shooting range was added to the footer.
- Changed the styling of the footer to include the map component.
- Ordered the footer content to make it responsive.
- Removed uncompleted shooting range map components and replaced them with the
  new generic map components.
- Created map components with simple and clustered markers using the standard
  Google Maps components.
- Improved the text and background contrast, including the background gradient.
- Add the image of the IPSC target with bullet holes to the `public\assets`
  directory.

#### General Code Improvements
- Wrapped all components in a React memo.
- Moved icon styling to the layout component CSS.
- MD5 hashes were used as keys for the map component markers.
- Renamed all CSS classes to camel case.
- Added CSS variables.

#### Dependencies
- Added the Google Maps clustered marker library from `@react-google-maps`.

#### Security
- Removed the Google Maps API key included in the last commit.

#### Changes by
@tahoni

### [Version 3.2.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.2) - _2024-12-18_
Allowed React to handle page routing.<br />

#### General Technical Changes
- Added a `.htaccess` file to allow React to handle the page routing.

#### Changes by
@tahoni

### [Version 3.2.1](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.1) - _2024-12-17_
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
- Created a `_redirects` file to allow React to handle the page routing in
  Netlify.

#### Dependencies
- Added the React Google Maps library from `@react-google-maps`.

#### Changes by
@tahoni

### [Version 3.2.0](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.0) - _2024-12-17_
Read all page content from Markdown components.<br />

#### Enhancements and Updates
- Added React MDX Markdown components.
- Read all page content from the Markdown components.
- Removed the home page with HTML content and replaced it with content from an
  MDX component.
- Removed all simple Markdown files and replaced them with MDX Markdown
  components.
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

#### Changes by
@tahoni

### [Version 3.1.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.4) - _2024-12-16_
Optimized the images.<br />

#### Enhancements and Updated
- Optimized all images.

#### Changes by
@tahoni

### [Version 3.1.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.3) - _2024-12-16_
Made the sidebars sticky.<br />

#### Enhancements and Updates
- Styled the sidebar component to make them sticky.

#### Changes by
@tahoni
@ImgBotApp

### [Version 3.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.2) - _2024-12-16_
Made the logos in the header hyperlinks.<br />
Created the sidebar component and added it to the homepage.<br />

#### Enhancements and Updates
- A Markdown file containing the About Us content was added.
- Made the NGPSA logo a hyperlink to the NGPSA website.
- Changed the HPSC logo redirects to the homepage.
- Added the sidebar component and added it directly to the homepage.
- Added the semi-transparent sidebar images of two shooters.
- Added content to the homepage.

#### General Code Improvements
- Renamed the global stylesheets to `style-` from `styles-` to conform to
  standard practice.
- Added a `styles-icon.scss` stylesheet.
- Removed unused components.
- Removed unused images.

#### Licence and Documentation
- Changed the licence to "All rights reserved".
- Added the homepage to the readme file.

#### Dependencies
- Removed unused dependencies.

#### Changes by
@tahoni
@ImgBotApp

### [Version 3.1.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.1) - _2024-12-15_
Added a gradient background.<br />
Made the header responsive.<br />

#### Enhancements and Updates
- A gradient background was added to the layout.
- Aligned the heading with the logos.
- Made the header responsive.
- Aligned the body content between the logos.

#### Dependencies
- Removed the unused Slick Carousel library.

#### Changes by
@tahoni

### [Version 3.1.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.0) - _2024-12-14_
Created an SVG favicon.<br />
Added the HPSC and SAPSA logos to the header.<br />
Added content to the homepage.<br />

#### Enhancements and Updates
- Added pages from the old website without making any changes.
- Updated the index page for better metadata and manifest linkage.
- Updated the index page with more keywords.
- Replaced the ICO favicon with an SVG one.
- Added new icon fonts to the `public/assets` directory.
- Replaced outdated images and icons in the `public/assets` directory with
  up-to-date ones.
- Deleted unused images from the `public/assets` directory
- A layout skeleton with a header, footer and body was created.
- A header with the HPSC and NGPSA logos was added.
- A new homepage was created to replace the under-construction page.
- Populated the homepage content.

#### General Code Improvements
- Replaced CSS variables with SCSS variables.

#### General Technical Changes
- The `_redirects` file was no longer needed and was deleted.

#### Dependencies
- Upgraded several dependencies to their latest versions.

#### Changes by
@tahoni
@ImgBotApp

### [Version 3.0.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.5) - _2024-12-06_
Fixed the spelling of the "_Hartbeespoortdam Practical Shooting Club_"
properly.<br />

#### Enhancements and Updates
- Corrected the name of the club everywhere.

#### Changes by
@tahoni
@ImgBotApp

### [Version 3.0.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.4) - _2024-11-02_
Changed the website's title to "_Hartebeespoortdam Practical Shooting Club_".<br />

#### Enhancements and Updates
- Changed the title of the index page to the club's name.

#### Changes by
@tahoni
@dependabot
@ImgBotApp

### [Version 3.0.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.3) - _2024-10-29_
Fixed the spelling of the "_Hartebeespoortdam Practical Shooting Club_".<br />

#### Bug Fixes
- Fixed the spelling of the club everywhere

#### Dependencies
- Bumped the Vite library to get rid of vulnerabilities.

#### Changes by
@tahoni
@dependabot
@ImgBotApp

### [Version 3.0.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.2) - _2024-08-27_
Removed the background image to improve the look and feel.<br />

#### Enhancements and Updates
- Removed the background image.

#### Changes by
@tahoni
@dependabot
@ImgBotApp

### [Version 3.0.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.1) - _2024-08-27_
Tried to improve the styling of the background.<br />

#### Enhancements and Updates
- A header and a body were added to the layout component.
- Attempted to improve the background styling.
- Allowed the under-construction carousel to autoplay.
- Added small, black-and-white and small black-and-white logos.

#### Dependencies
- Updated the Vite libraries.
- Updated the Slick Carousel library.

#### Changes by
@tahoni
@dependabot

### [Version 3.0.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.0) - _2024-08-18_
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
- Created a readme file with a detailed project description, structure,
  technology stack, instructions, screenshots, licence, author, and support
  information.
- Added a licence file.

#### General Technical Changes
- Modified `.gitignore` to exclude additional files and directories.
- Modified `tsconfig.app.json` to add more linting rules.
- Added `.env.local` and `.env.production` files.
- Added `.npmrc` configuration for GitHub NPM registry.
- Created GitHub Actions workflow for CodeQL analysis (
  `.github/workflows/codeql.yml`).
- Created a `_redirects` file to allow React to handle the page routing in
  Netlify.

#### Dependencies
- The standard Vite and React libraries were added.
- Added Font Awesome libraries.
- Added Bootstrap and React Bootstrap libraries.
- Added the tahoni React library.

#### Changes by
tahoni
@dependabot
