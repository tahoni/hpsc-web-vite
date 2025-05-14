# HPSC website

## Change Log

### Table of Contents

- [Version 3.6.3](#version-363---2025-05-14)
- [Version 3.6.2](#version-362---2025-05-04)
- [Version 3.6.1](#version-361---2025-05-02)
- [Version 3.6.0](#version-300---2024-08-18)
- [Version 3.5.2](#version-352---2025-04-30)
- [Version 3.5.1](#version-351---2025-04-26)
- [Version 3.5.0](#version-350---2025-04-26)
- [Version 3.4.1](#version-341---2025-03-28)
- [Version 3.4.0](#version-340---2025-02-25)
- [Version 3.3.9](#version-339---2025-02-15)
- [Version 3.3.8](#version-338---2025-02-09)
- [Version 3.3.7](#version-337---2025-01-08)
- [Version 3.3.6](#version-336---2025-01-07)
- [Version 3.3.5](#version-335---2025-01-06)
- [Version 3.3.4](#version-334---2025-01-05)
- [Version 3.3.3](#version-333---2025-01-05)
- [Version 3.3.2](#version-332---2025-01-04)
- [Version 3.3.1](#version-331---2025-01-02)
- [Version 3.3.0](#version-330---2025-01-02)
- [Version 3.2.6](#version-326---2024-12-26)
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

### [Version 3.6.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.3) - _2025-05-14_

Redirected all URLs, without valid subdomains, to the `www` root domain.

#### General Technical Changes

- Modified the `.htaccess` file to correct all the current erroneous regular expressions.
- Modified the `.htacess` file to redirect hosts not starting with a `www`, `api`
    or `members` subdomain to the `www` root domain.

#### Changes by

@tahoni

### [Version 3.6.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.2) - _2025-05-04_

Fixed the redirect of pages on the website.

#### General Technical Changes

- Modified the `.htacess` file to redirect HTTP requests to HTTPS.
- Modified the `.htaccess` file to correctly redirect only full valid path names.

#### Changes by

@tahoni

### [Version 3.6.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.1) - _2025-05-02_

Don't display a 404 error for the Events page.
Display the World Shoot 2025 logo on the Events page.

#### General Technical Changes

- Modified the `.htaccess` file to allow the Events and Venues pages.
- Modified the `.htaccess` file to not rewrite image paths.

#### Changes by

@tahoni

### [Version 3.6.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.0) - _2025-05-01_

Created the Events page.
Added a new post for the "World Shoot" event on this page.

#### Enhancements and Updates

- Created an Events page.
- Created a Venue Event class to handle all Event properties.
- Created a World Shoot component.

#### General Code Improvements

- Fixed an accessibility issue with the dropdown menu.

#### Dependencies

- Bumped `vite` from version 6.3.3 to 6.3.4 to include the latest updates
        and bug fixes.

#### Changes by

@tahoni
@dependabot

### [Version 3.5.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.2) - _2025-04-30_

Fixed the overlapping elements in the header and footer.

#### Enhancements and Updates

- Updated the JSX code to prevent the elements in the header and footer overlapping.
- Updated the CSS stylesheets to prevent the elements in the header and footer overlapping.

#### Changes by

@tahoni

### [Version 3.5.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.1) - _2025-04-26_

Really return HTTP status 404 for pages not found.

#### General Code Improvements

- Changed the `.htaccess` file to only allow known routes, other routes will
        automatically returns a 404 HTTP status.

#### Changes by

@tahoni

### [Version 3.5.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.0) - _2025-04-26_

Used a better library for Google Maps.
Return HTTP status 404 for pages not found.

#### Enhancements and Updates

- Removed the Not Found component.
- Removed the Page Not Found page.

#### General Code Improvements

- Changed the `.htaccess` file to only allow known routes and return 404
        for all other routes.

#### General Technical Changes

- Removed the IntelliJ config files.
- Added the Visual Studio Code files.
- Created environment variables for sensitive configs for all environments.

#### Dependencies

- Removed the Google Maps dependencies from `@react-google-maps`.
- Added the Google Maps library from `@vis.gl/react-google-map`.
- Mitigated vulnerable dependencies.

#### Changes by

@tahoni
@dependabot

### [Version 3.4.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.4.1) - _2025-03-28_

Added a maximum width to the web content.
Added sections and articles to the pages.
Finished the Contact Us page.
An e-mail is sent upon submission of the Contact Us form.

#### Enhancements and Updates

- Limit the width of the web content in the global stylesheet.
- Added a section element to all pages to group related content.
- Added article elements for all independent content.
- Clean all user inputs when an element loses focus or a form is submitted.
- Created an e-mail to send with the Contact Us message.

#### General Technical Changes

- Split the code into sensible bundles.

#### Dependencies

- A dependency was added to help split bundles by displaying the
        bundles' composition after each build.
- Mitigated vulnerable dependencies.

#### Changes by

@dependabot
@tahoni

### [Version 3.4.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.4.0) - _2025-02-25_

Added lazy loading of pages.
Fixed the form styling.

#### Enhancements and Updates

- A page component was created for the common elements of all pages.
- Added lazy loading of pages in the page component.
- Added a `styles-classes.scss` stylesheet to create generic form control styles.
- Added these styles to the `style.scss` stylesheet to style all forms consistently.
- A variable to change the colour of the loader was added.

#### General Code Improvements

- Components are exported by default instead of by name in preparation for lazy loading.
- Built the menu and routes dynamically from a single source.
- Renamed all stylesheets starting with `style-` to start with `styles-`.

#### Changes by

@tahoni

### [Version 3.3.9](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.9) - _2025-02-15_

Added icons to the contact details in the footer.

#### Enhancements and Updates

- Added icons to the contact details in the Footer component.

#### General Code Improvements

- Include `index.css` from `tahoni-lib-react`, not `styles.css`.

#### Dependencies

- Updated the `esbuild` dependency to mitigate a moderate security vulnerability.
- Updated the `@tahoni/tahoni-lib-react` dependency.
- Updated all other outdated dependencies.

#### Changes by

@dependabot
@tahoni

### [Version 3.3.8](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.8) - _2025-02-09_

Mitigated a critical severity security vulnerability.
Removed the Contact Us menu option for now.

#### Enhancements and Updates

- Removed the Contact Us menu option.

#### General Code Improvements

- Updated the `favicon` images and web manifest.

#### General Technical Changes

- A setting was removed from `vite.config.ts` to roll back the changes to
        build the project with smaller chunks.

#### Dependencies

- Updated the `vitest` dependency to version 3 to mitigate a critical security vulnerability.
- Updated the `vite` dependency to version 6 to mitigate a moderate security vulnerability.
- Updated the Font Awesome `@fortawesome` dependencies.

#### Changes by

@dependabot
@tahoni

### [Version 3.3.7](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.7) - _2025-01-08_

Improved the documentation.
Synced with the `hpsc-template-react` project.

#### Enhancements and Updates

- Improved the naming of the web font glyphs.

#### General Code Improvements

- Added some more options to the `tsconfig.json` files.

#### Licence and Documentation

- Improved the directory structure in the README file.
- Documented the Google reCAPTCHA site key environment variable in the README.

#### General Technical Changes

- Removed `.xcf` files from the `webfont` directory.

#### Changes by

@tahoni

### [Version 3.3.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.6) - _2025-01-07_

Implemented the reCAPTCHA component with a safe library.
Improved accessibility.

#### Enhancements and Updates

- Implemented the reCAPTCHA component using the `ReCAPTCHA` class.
- Gave the CAPTCHA component a valid language attribute.

#### Bug Fixes

- Modified the menu items causing nested hyperlinks.

#### General Technical Changes

- Changed the `@import` directive in the SCSS pages to `@use` where possible.
- The elements in the head of the HTML page were re-ordered.

#### Dependencies

- Upgraded to React 19.
- Added the `react-google-recaptcha` dependency.

#### Changes by

@tahoni

### [Version 3.3.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.5) - _2025-01-06_

Improved accessibility.

#### Enhancements and Updates

- Displayed all content in two lines where the screen is too small to
        display it together.

#### Bug Fixes

- Removed the section elements causing paragraphs-in-paragraph errors.

#### Changes by

@tahoni

### [Version 3.3.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.4) - _2025-01-05_

Added a dropdown menu.
Added a page not found page.

#### Enhancements and Updates

- Added a hamburger menu styled using theme colours.
- Added a page not found page.
- Redirected any unknown pages to that page.

#### General Code Improvements

- Moved the `icomoon` web fonts to a separate directory under the `fonts` directory.

#### Changes by

@tahoni

### [Version 3.3.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.3) - _2025-01-05_

Removed the CAPTCHA library as it was injecting suspicious code into the HTML.

#### Dependencies

- Removed the `react-recaptcha-x` dependency.

#### Changes by

@tahoni

### [Version 3.3.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.2) - _2025-01-04_

Created a Links page.
Created a Members page.

#### Enhancements and Updates

- Created a Links page with hyperlinks to the NGPSA, SAPSA, and IPSC websites.
- Created a Member page with a photo of the club shirts.
- Modified the key of the map pin component.
- The logo files were moved to the public directory.
- Store the names of the logo files as constants.
- Removed all low-resolution logo files.
- Removed all links to uncompleted pages from the website.
- All the page contents were moved to the content directory.
- Don't add content to the page; add content components instead.
- Populate the member's page with an array of components.

#### General Code Improvements

- Only run CodeQL analysis on the `develop` and `main` branches.
- Wrap all components with `React.memo`.
- Added `index.ts` or `index.tsx` files for all components, including content.

#### Dependencies

- Removed the `js-md5` dependency.

#### Changes by

@tahoni

### [Version 3.3.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.1) - _2025-01-02_

Created About Us page.

#### Enhancements and Updates

- A mode property was added to the map component.
- A centre property was added to the map component.
- An About Us page was created with contact details and a satellite map
        of the shooting range.

#### Dependencies

- Added the Google Maps info window library from `@react-google-maps`.

#### Changes by

@tahoni

### [Version 3.3.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.0) - _2025-01-02_

A Contact Us page was created.

#### Enhancements and Updates

- A page title component was created.
- Created a CAPTCHA component for Google reCAPTCHA.
- A CAPTCHA field was created for the JSON schema form using the
        Google ReCAPTCHA component.
- Validated the CAPTCHA field with a custom validator function.
- A JSON schema with validations for the Contact Us page was created.
- The CAPTCHA field was added to the JSON schema.
- A Contact Us page was created using this JSON schema with a CAPTCHA puzzle.
- When submitting to the service, all user inputs are cleaned.
- A message is displayed when the request is successfully sent.
- The back-end is not working yet.

#### General Code Improvements

- Overrode some Bootstrap SASS variables and simplified the custom styles.
- Change all CSS classes to camel case.

#### General Technical Changes

- Format the source code using the Prettier formatter.

#### Dependencies

- Added the JSON schema form dependencies from `@rjsf`.
- Added the Google reCAPTCHA dependency from `react-recaptcha-x`.
- Added the `sanitize-html` dependency.
- Added the SweetAlert2 dependency.
- Added the Prettier dependency to format the source code.

#### Changes by

@tahoni

### [Version 3.2.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.6) - _2024-12-26_

Improved the documentation.)

#### Licence and Documentation

- The README file was brought up to date.
- The licence file was brought up to date.
- Added release notes.
- Added a change log.

#### Changes by

@tahoni

### [Version 3.2.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.5) - _2024-12-25_

Moved all common static content to global constants.)

#### General Code Improvements

- Moved all common static content to global constants.
- Used these constants in:
        - the header.
        - the footer.
        - the About page.

#### Changes by

@tahoni

### [Version 3.2.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.4) - _2024-12-24_

Made the About Us page the homepage.)
Finished the website layout by completing the footer.)
Completed the footer by adding contact details and copyright.)
Improved the responsiveness of the website.)
Added more keywords for SEO purposes.)

#### Enhancements and Updates

- Made the About Us page the homepage.
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

Added the SAPSA and IPSC logos to the footer.)
Completed the map to the shooting range in the footer.)

#### Enhancements and Updates

- A working map of the club shooting range was added to the footer.
- Changed the styling of the footer to include the map component.
- Ordered the footer content to make it responsive.
- Removed uncompleted shooting range map components and replaced them with the
        new generic map components.
- Created map components with simple and clustered markers using the standard
        Google Maps components.
- Improved the text and background contrast, including the background gradient.
- Added the image of the IPSC target with bullet holes to the `public/assets` directory.

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

Allowed React to handle page routing.)

#### General Technical Changes

- Added a `.htaccess` file to allow React to handle the page routing.

#### Changes by

@tahoni

### [Version 3.2.1](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.1) - _2024-12-17_

Added an About page with the club's history.)
Added hyperlinks to the About component.)
A map of the shooting range was added in the footer.)

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

Read all page content from Markdown components.)

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

Optimised the images.)

#### Enhancements and Updated

- Optimised all images.

#### Changes by

@tahoni

### [Version 3.1.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.3) - _2024-12-16_

Made the sidebars sticky.)

#### Enhancements and Updates

- Styled the sidebar component to make them sticky.

#### Changes by

@tahoni
@ImgBotApp

### [Version 3.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.2) - _2024-12-16_

Made the logos in the header hyperlinks.)
Created the sidebar component and added it to the homepage.)

#### Enhancements and Updates

- A Markdown file containing the About Us content was added.
- Made the NGPSA logo a hyperlink to the NGPSA website.
- The HPSC logo was changed to redirect to the homepage.
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
- The homepage was added to the README file.

#### Dependencies

- Removed unused dependencies.

#### Changes by

@tahoni
@ImgBotApp

### [Version 3.1.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.1) - _2024-12-15_

Added a gradient background.)
Made the header responsive.)

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

Created an SVG favicon.)
Added the HPSC and SAPSA logos to the header.)
Added content to the homepage.)

#### Enhancements and Updates

- Added pages from the old website without making any changes.
- Updated the index page for better metadata and manifest linkage.
- Updated the index page with more keywords.
- Replaced the ICO favicon with an SVG one.
- Added new icon fonts to the `public/assets` directory.
- Replaced outdated images and icons in the `public/assets` directory with
        up-to-date ones.
- Deleted unused images from the `public/assets` directory
- A layout skeleton with a header, footer, and body was created.
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
properly.)

#### Enhancements and Updates

- Corrected the name of the club everywhere.

#### Changes by

@tahoni
@ImgBotApp

### [Version 3.0.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.4) - _2024-11-02_

Changed the website's title to "_Hartebeespoortdam Practical Shooting Club_".)

#### Enhancements and Updates

- Changed the title of the index page to the club's name.

#### Changes by

@tahoni
@dependabot
@ImgBotApp

### [Version 3.0.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.3) - _2024-10-29_

Fixed the spelling of the "_Hartebeespoortdam Practical Shooting Club_".)

#### Bug Fixes

- Fixed the spelling of the club everywhere

#### Dependencies

- Bumped the Vite library to get rid of vulnerabilities.

#### Changes by

@tahoni
@dependabot
@ImgBotApp

### [Version 3.0.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.2) - _2024-08-27_

Removed the background image to improve the look and feel.)

#### Enhancements and Updates

- Removed the background image.

#### Changes by

@tahoni
@dependabot
@ImgBotApp

### [Version 3.0.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.1) - _2024-08-27_

Tried to improve the styling of the background.)

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

Created a homepage with an under-construction carousel.

#### Enhancements and Updates

- Scaffolded the initial React application using Vite.
- Added icons and logos.
- Resized the icon and logo images to make them smaller.
- Added an image with an IPSC target with bullet holes.
- Added another image to be displayed in the under-construction carousel.
- Optimised the images displayed in the carousel.
- Use the tahoni React library for standard components like the carousel.
- Use the tahoni React library for data structures.

#### Licence and Documentation

- A README file was created with a detailed project description, structure,
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
