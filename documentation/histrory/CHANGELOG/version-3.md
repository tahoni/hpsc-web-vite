# HPSC website

## Change Log

### Version 3.x.x

- [Version 3.6.8](#version-368---_2025-06-02_)
- [Version 3.6.7](#version-367---_2025-06-01_)
- [Version 3.6.6](#version-366---_2025-06-01_)
- [Version 3.6.5](#version-365---_2025-05-15_)
- [Version 3.6.4](#version-364---_2025-05-14_)
- [Version 3.6.3](#version-363---_2025-05-14_)
- [Version 3.6.2](#version-362---_2025-05-04_)
- [Version 3.6.1](#version-361---_2025-05-02_)
- [Version 3.6.0](#version-300---_2024-08-18_)
- [Version 3.5.2](#version-352---_2025-04-30_)
- [Version 3.5.1](#version-351---_2025-04-26_)
- [Version 3.5.0](#version-350---_2025-04-26_)
- [Version 3.4.1](#version-341---_2025-03-28_)
- [Version 3.4.0](#version-340---_2025-02-25_)
- [Version 3.3.9](#version-339---_2025-02-15_)
- [Version 3.3.8](#version-338---_2025-02-09_)
- [Version 3.3.7](#version-337---_2025-01-08_)
- [Version 3.3.6](#version-336---_2025-01-07_)
- [Version 3.3.5](#version-335---_2025-01-06_)
- [Version 3.3.4](#version-334---_2025-01-05_)
- [Version 3.3.3](#version-333---_2025-01-05_)
- [Version 3.3.2](#version-332---_2025-01-04_)
- [Version 3.3.1](#version-331---_2025-01-02_)
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

### [Version 3.6.8](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.8) - _2025-06-02_

Add a YouTube video to the Frontier shooting range.

#### Enhancements and Updates

- Add an iframe with the YouTube video for the Frontier shooting range.

#### Changes by

@tahoni

### [Version 3.6.7](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.7) - _2025-06-01_

Add a link to the World Shoot 2025 apparel at Bosninja.
Add an `ARCHITECTURE` file.

#### Enhancements and Updates

- Add a link to the Bosninja IPSC Handgun World Shoot 2025 apparel for the 2025 World Shoot Handgun post.
- Add the link to the Bosninja webpage to the constants.

#### Licence and Documentation

- Add an `ARCHITCTURE.md` file and copied the content of the `README.md` file there.

#### Changes by

@tahoni

### [Version 3.6.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.6) - _2025-06-01_

Create a sitemap of the website.

#### Enhancements and Updates

- Add a sitemap builder to the `builder` directory that generates a sitemap and logs it to the console.
- Create a new model class for the sitemap builder to use.
- Split off the page info needed by the sitemap builder into a separate TypeScript file.
- Add metadata to the pages for the sitemap, like the date last updated.

#### General Technical Changes

- Generate a `sitemap.xml` file with all the pages of the website.
- Refer to this file in the `robots.txt` file.

#### Dependencies

- Add the `sitemap` dependency.
- Add the `tsx` dependency as a dev dependency.

#### Changes by

@tahoni

### [Version 3.6.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.5) - _2025-05-15_

Change the canonical URL to just the domain name, since it is served like that
by the web server.
Fix all the pages being redirected to the home page on refresh.

#### Enhancements and Updates

- Update the canonical URL in `index.html` to just [https://hpsc.co.za](https://hpsc.co.za),
  without the `www` prefix.

#### General Technical Changes

- Remove the permanent redirect (HTTP status 301) from the `.htaccess` rules
  that was redirecting all pages to the home page on manual refresh.

#### Changes by

@tahoni

### [Version 3.6.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.4) - _2025-05-14_

Remove the redirect to the `www` root domain, since it is always redirected
without it by the web server.

#### General Technical Changes

- Modify the `.htacess` file to remove the redirect to the `www` root domain.

#### Changes by

@tahoni

### [Version 3.6.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.3) - _2025-05-14_

Redirect all URLs, without valid subdomains, to the `www` root domain.

#### General Technical Changes

- Modify the `.htaccess` file to correct all the current erroneous regular expressions.
- Modify the `.htacess` file to redirect hosts not starting with a `www`, `api`
  or `members` subdomain to the `www` root domain.
- Modify the `.htacess` rules to do a permanent (HTTP status 301) redirect.

#### Changes by

@tahoni

### [Version 3.6.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.2) - _2025-05-04_

Fix the redirect of pages on the website.

#### General Technical Changes

- Modify the `.htacess` file to redirect HTTP requests to HTTPS.
- Modify the `.htaccess` file to correctly redirect only full valid path names.

#### Changes by

@tahoni

### [Version 3.6.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.1) - _2025-05-02_

Don't display a 404 error for the Events page.
Display the World Shoot 2025 logo on the Events page.

#### General Technical Changes

- Modify the `.htaccess` file to allow the Events and Venues pages.
- Modify the `.htaccess` file to not rewrite image paths.

#### Changes by

@tahoni

### [Version 3.6.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.6.0) - _2025-05-01_

Create the Events page.
Add a new post for the "World Shoot" event on this page.

#### Enhancements and Updates

- Create an Events page.
- Create a Venue Event class to handle all Event properties.
- Create a World Shoot component.

#### General Code Improvements

- Fix an accessibility issue with the dropdown menu.

#### Dependencies

- Bump `vite` from version 6.3.3 to 6.3.4 to include the latest updates
  and bug fixes.

#### Changes by

@tahoni
@dependabot

### [Version 3.5.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.2) - _2025-04-30_

Fix the overlapping elements in the header and footer.

#### Enhancements and Updates

- Update the JSX code to prevent the elements in the header and footer overlapping.
- Update the CSS stylesheets to prevent the elements in the header and footer overlapping.

#### Changes by

@tahoni

### [Version 3.5.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.1) - _2025-04-26_

Really return HTTP status 404 for pages not found.

#### General Code Improvements

- Change the `.htaccess` file to only allow known routes, other routes will
  automatically return a 404 HTTP status.

#### Changes by

@tahoni

### [Version 3.5.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.0) - _2025-04-26_

Use a better library for Google Maps.
Return HTTP status 404 for pages not found.

#### Enhancements and Updates

- Remove the Not Found component.
- Remove the page: Page Not Found.

#### General Code Improvements

- Change the `.htaccess` file to only allow known routes and return 404
  for all other routes.

#### General Technical Changes

- Remove the IntelliJ config files.
- Add the Visual Studio Code files.
- Create environment variables for sensitive configs for all environments.

#### Dependencies

- Remove the Google Maps dependencies from `@react-google-maps`.
- Add the Google Maps library from `@vis.gl/react-google-map`.
- Mitigate vulnerable dependencies.

#### Changes by

@tahoni
@dependabot

### [Version 3.4.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.4.1) - _2025-03-28_

Add a maximum width to the web content.
Add sections and articles to the pages.
Finish the Contact Us page.
Send an e-mail upon submission of the Contact Us form.

#### Enhancements and Updates

- Limit the width of the web content in the global stylesheet.
- Add a section element to all pages to group related content.
- Add article elements for all independent content.
- Clean all user inputs when an element loses focus or a form is submitted.
- Create an e-mail to send with the Contact Us message.

#### General Technical Changes

- Split the code into sensible bundles.

#### Dependencies

- Add a dependency to help split bundles by displaying the
  bundles' composition after each build.
- Mitigate vulnerable dependencies.

#### Changes by

@dependabot
@tahoni

### [Version 3.4.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.4.0) - _2025-02-25_

Add lazy loading of pages.
Fix the form styling.

#### Enhancements and Updates

- Create a page component for the common elements of all pages.
- Add lazy loading of pages in the page component.
- Add a `styles-classes.scss` stylesheet to create generic form control styles.
- Add these styles to the `style.scss` stylesheet to style all forms consistently.
- Add a variable to change the colour of the loader.

#### General Code Improvements

- Components are exported by default instead of by name in preparation for lazy loading.
- Build the menu and routes dynamically from a single source.
- Rename all stylesheets starting with `style-` to start with `styles-`.

#### Changes by

@tahoni

### [Version 3.3.9](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.9) - _2025-02-15_

Add icons to the contact details in the footer.

#### Enhancements and Updates

- Add icons to the contact details in the Footer component.

#### General Code Improvements

- Include `index.css` from `tahoni-lib-react`, not `styles.css`.

#### Dependencies

- Update the `esbuild` dependency to mitigate a moderate security vulnerability.
- Update the `@tahoni/tahoni-lib-react` dependency.
- Update all other outdated dependencies.

#### Changes by

- @dependabot
- @tahoni

### [Version 3.3.8](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.8) - _2025-02-09_

Mitigate security vulnerability with severity of critical.
Remove the Contact Us menu option for now.

#### Enhancements and Updates

- Remove the Contact Us menu option.

#### General Code Improvements

- Update the `favicon` images and web manifest.

#### General Technical Changes

- Remove a setting from `vite.config.ts` to roll back the changes to
  build the project with smaller chunks.

#### Dependencies

- Update the `vitest` dependency to version 3 to mitigate a critical security vulnerability.
- Update the `vite` dependency to version 6 to mitigate a moderate security vulnerability.
- Update the Font Awesome `@fortawesome` dependencies.

#### Changes by

- @dependabot
- @tahoni

### [Version 3.3.7](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.7) - _2025-01-08_

Improve the documentation.
Sync with the `hpsc-template-react` project.

#### Enhancements and Updates

- Improve the naming of the web font glyphs.

#### General Code Improvements

- Add some more options to the `tsconfig.json` files.

#### Licence and Documentation

- Improve the directory structure in the `README` file.
- Document the Google reCAPTCHA site key environment variable in the `README`.

#### General Technical Changes

- Remove `.xcf` files from the `webfont` directory.

#### Changes by

- @tahoni

### [Version 3.3.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.6) - _2025-01-07_

Implement the reCAPTCHA component with a safe library.
Improve accessibility.

#### Enhancements and Updates

- Implement the reCAPTCHA component using the `ReCAPTCHA` class.
- Give the CAPTCHA component a valid language attribute.

#### Bug Fixes

- Modify the menu items that are causing nested hyperlinks.

#### General Technical Changes

- Change the `@import` directive in the SCSS pages to `@use` where possible.
- Re-order the elements at the head of the HTML page.

#### Dependencies

- Upgrade to React 19.
- Add the `react-google-recaptcha` dependency.

#### Changes by

- @tahoni

### [Version 3.3.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.5) - _2025-01-06_

Improve accessibility.

#### Enhancements and Updates

- Display all content in two lines where the screen is too small to
  display it together.

#### Bug Fixes

- Remove the section elements causing paragraphs-in-paragraph errors.

#### Changes by

- @tahoni

### [Version 3.3.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.4) - _2025-01-05_

Add a dropdown menu.
Add a page not found page.

#### Enhancements and Updates

- Add a hamburger menu styled using theme colours.
- Add a page not found page.
- Redirect any unknown pages to that page.

#### General Code Improvements

- Move the `icomoon` web fonts to a separate directory under the `fonts` directory.

#### Changes by

- @tahoni

### [Version 3.3.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.3) - _2025-01-05_

Remove the CAPTCHA library as it was injecting suspicious code into the HTML.

#### Dependencies

- Remove the `react-recaptcha-x` dependency.

#### Changes by

- @tahoni

### [Version 3.3.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.2) - _2025-01-04_

Create a Links page.
Create a Member page.

#### Enhancements and Updates

- Create a Links page with hyperlinks to the NGPSA, SAPSA, and IPSC websites.
- Create a Member page with a photo of the club shirts.
- Modify the key of the map pin component.
- Move the logo files to the public directory.
- Store the names of the logo files as constants.
- Remove all low-resolution logo files.
- Remove all links to uncompleted pages from the website.
- Move all the page contents to the content directory.
- Don't add content to the page; add content components instead.
- Populate the member's page with an array of components.

#### General Code Improvements

- Only run CodeQL analysis on the `develop` and `main` branches.
- Wrap all components with `React.memo`.
- Add `index.ts` or `index.tsx` files for all components, including content.

#### Dependencies

- Remove the `js-md5` dependency.

#### Changes by

- @tahoni

### [Version 3.3.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.1) - _2025-01-02_

Create the About Us page.

#### Enhancements and Updates

- Add a mode property to the map component.
- Add a centre property to the map component.
- Create an About Us page with contact details and a satellite map
  of the shooting range.

#### Dependencies

- Add the Google Maps info window library from `@react-google-maps`.

#### Changes by

- @tahoni

### [Version 3.3.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.0) - _2025-01-02_

Create a Contact Us page.

#### Enhancements and Updates

- Create a page title component.
- Create a CAPTCHA component for Google reCAPTCHA.
- Create a CAPTCHA field for the JSON schema form using the
  Google ReCAPTCHA component.
- Validate the CAPTCHA field with a custom validator function.
- Create a JSON schema with validations for the Contact Us page.
- Add the CAPTCHA field to the JSON schema.
- Create a Contact Us page using this JSON schema with a CAPTCHA puzzle.
- All user inputs are cleaned when submitting to the service.
- Display a message is displayed when the request is successfully sent.
- The back-end is not working yet.

#### General Code Improvements

- Overrode some Bootstrap SASS variables and simplified the custom styles.
- Change all CSS classes to camel case.

#### General Technical Changes

- Format the source code using the Prettier formatter.

#### Dependencies

- Add the JSON schema form dependencies from `@rjsf`.
- Add the Google reCAPTCHA dependency from `react-recaptcha-x`.
- Add the `sanitize-html` dependency.
- Add the SweetAlert2 dependency.
- Add the Prettier dependency to format the source code.

#### Changes by

- @tahoni

### [Version 3.2.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.6) - _2024-12-26_

Improve the documentation.

#### Licence and Documentation

- Bring the `README` file up to date.
- Bring the `LICENCE` file up to date.
- Add release notes.
- Add a change log.

#### Changes by

- @tahoni

### [Version 3.2.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.5) - _2024-12-25_

Move all common static content to global constants.

#### General Code Improvements

- Move all common static content to global constants.
- Use these constants in:
  - the header.
  - the footer.
  - the About page.

#### Changes by

- @tahoni

### [Version 3.2.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.4) - _2024-12-24_

Make the About Us page the homepage.
Finish the website layout by completing the footer.
Complete the footer by adding contact details and copyright.
Improve the responsiveness of the website.
Add more keywords for SEO purposes.

#### Enhancements and Updates

- Make the About Us page the homepage.
- Add contact details in the footer, including an e-mail and links to
  Facebook.
- Add copyright in the footer.
- Change the styling of the footer to include the new content and make it more
  responsive.
- Improve the responsiveness of the website.
- Add more keywords for SEO on the base page.

#### Bug Fixes

- Fix the hover colour of the hyperlinks.

#### General Code Improvements

- Move the styling of the icon image to the CSS layout component.
- Remove styling and JavaScript from the website preamble.
- Decrease the maximum size of the generated chunks by chunking the tahoni
  React library on its own.

#### Dependencies

- Update the Vite React libraries.

#### Changes by

- @tahoni

### [Version 3.2.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.3) - _2024-12-22_

Add the SAPSA and IPSC logos to the footer.
Complete the map to the shooting range in the footer.

#### Enhancements and Updates

- Add a working map of the club shooting range to the footer.
- Change the styling of the footer to include the map component.
- Order the footer content to make it responsive.
- Remove uncompleted shooting range map components and replace them with the
  new generic map components.
- Create map components with simple and clustered markers using the standard
  Google Maps components.
- Improve the text and background contrast, including the background gradient.
- Add the image of the IPSC target with bullet holes to the `public/assets` directory.

#### General Code Improvements

- Wrap all components in a React memo.
- Move icon styling to the layout component CSS.
- Use MD5 hashes as keys for the map component markers.
- Rename all CSS classes to camel case.
- Add CSS variables.

#### Dependencies

- Add the Google Maps clustered marker library from `@react-google-maps`.

#### Security

- Remove the Google Maps API key included in the last commit.

#### Changes by

- @tahoni

### [Version 3.2.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.2) - _2024-12-18_

Allow React to handle page routing.

#### General Technical Changes

- Add a `.htaccess` file to allow React to handle the page routing.

#### Changes by

- @tahoni

### [Version 3.2.1](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.1) - _2024-12-17_

Add an About page with the club's history.
Add hyperlinks to the About component.
Add a map of the shooting range in the footer.

#### Enhancements and Updates

- Add a range map component to the footer.
- Add basic styling for the footer component.
- Add an About page with the About component.
- Add hyperlinks in the About component.
- Add hyperlink styling.

#### General Code Improvements

- Remove the page component and call the content components directly.
- Move the sidebar component to the `components` directory.

#### General Technical Changes

- Create a `_redirects` file to allow React to handle the page routing in
  Netlify.

#### Dependencies

- Add the React Google Maps library from `@react-google-maps`.

#### Changes by

- @tahoni

### [Version 3.2.0](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.0) - _2024-12-17_

Read all page content from Markdown components.

#### Enhancements and Updates

- Add React MDX Markdown components.
- Read all page content from the Markdown components.
- Remove the home page with HTML content and replace it with content from an
  MDX component.
- Remove all simple Markdown files and replace them with MDX Markdown
  components.
- Add an About page.
- Add a page component.
- Add a content component to the body component.
- Open the NGPSA hyperlink in a new window.

#### General Code Improvements

- Add sidebar component properties to the template page.

#### General Technical Changes

- Pre-process MDX components in vite.config.ts.

#### Dependencies

- Add support for MDX with new dependencies from `@mdx-js`.

#### Changes by

- @tahoni

### [Version 3.1.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.4) - _2024-12-16_

Optimise the images.

#### Enhancements and Updated

- Optimise all images.

#### Changes by

- @tahoni

### [Version 3.1.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.3) - _2024-12-16_

Make the sidebars sticky.

#### Enhancements and Updates

- Style the sidebar component to make them sticky.

#### Changes by

- @tahoni
- @ImgBotApp

### [Version 3.1.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.2) - _2024-12-16_

Make the logos in the header hyperlinks.
Create the sidebar component and added it to the homepage.

#### Enhancements and Updates

- Create a Markdown file containing the About Us content.
- Make the NGPSA logo a hyperlink to the NGPSA website.
- Change the HPSC logo to redirect to the homepage.
- Add the sidebar component and added it directly to the homepage.
- Add the semi-transparent sidebar images of two shooters.
- Add content to the homepage.

#### General Code Improvements

- Rename the global stylesheets to `style-` from `styles-` to conform to
  standard practice.
- Add a `styles-icon.scss` stylesheet.
- Remove unused components.
- Remove unused images.

#### Licence and Documentation

- Change the licence to "All rights reserved".
- Add the homepage to the `README` file.

#### Dependencies

- Remove unused dependencies.

#### Changes by

- @tahoni
- @ImgBotApp

### [Version 3.1.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.1) - _2024-12-15_

Add a gradient background.
Make the header responsive.

#### Enhancements and Updates

- Add a gradient background to the layout.
- Align the heading with the logos.
- Make the header responsive.
- Align the body content between the logos.

#### Dependencies

- Remove the unused Slick Carousel library.

#### Changes by

- @tahoni

### [Version 3.1.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.1.0) - _2024-12-14_

Create an SVG favicon.
Add the HPSC and SAPSA logos to the header.
Add content to the homepage.

#### Enhancements and Updates

- Add pages from the old website without making any changes.
- Update the index page for better metadata and manifest linkage.
- Update the index page with more keywords.
- Replace the ICO favicon with an SVG one.
- Add new icon fonts to the `public/assets` directory.
- Replace outdated images and icons in the `public/assets` directory with
  up-to-date ones.
- Delete unused images from the `public/assets` directory
- Create a layout skeleton with a header, footer, and body.
- Add a header with the HPSC and NGPSA logos.
- Create a new homepage to replace the under-construction page.
- Populate the homepage content.

#### General Code Improvements

- Replace CSS variables with SCSS variables.

#### General Technical Changes

- The `_redirects` file is no longer needed and was deleted.

#### Dependencies

- Upgrade several dependencies to their latest versions.

#### Changes by

- @tahoni
- @ImgBotApp

### [Version 3.0.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.5) - _2024-12-06_

Fix the spelling of the "_Hartbeespoortdam Practical Shooting Club_"
properly.

#### Enhancements and Updates

- Correct the name of the club everywhere.

#### Changes by

- @tahoni
- @ImgBotApp

### [Version 3.0.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.4) - _2024-11-02_

Change the website's title to "_Hartebeespoortdam Practical Shooting Club_".

#### Enhancements and Updates

- Change the title of the index page to the club's name.

#### Changes by

- @tahoni
- @dependabot
- @ImgBotApp

### [Version 3.0.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.3) - _2024-10-29_

Fix the spelling of the "_Hartebeespoortdam Practical Shooting Club_".

#### Bug Fixes

- Fix the spelling of the club everywhere

#### Dependencies

- Bump the Vite library to get rid of vulnerabilities.

#### Changes by

- @tahoni
- @dependabot
- @ImgBotApp

### [Version 3.0.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.2) - _2024-08-27_

Remove the background image to improve the look and feel.

#### Enhancements and Updates

- Remove the background image.

#### Changes by

- @tahoni
- @dependabot
- @ImgBotApp

### [Version 3.0.1](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.1) - _2024-08-27_

Try to improve the styling of the background.

#### Enhancements and Updates

- Add a header and a body to the layout component.
- Attempt to improve the background styling.
- Allow the under-construction carousel to autoplay.
- Add small, black-and-white and small black-and-white logos.

#### Dependencies

- Update the Vite libraries.
- Update the Slick Carousel library.

#### Changes by

- @tahoni
- @dependabot

### [Version 3.0.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.0.0) - _2024-08-18_

Create a homepage with an under-construction carousel.

#### Enhancements and Updates

- Scaffold the initial React application using Vite.
- Add icons and logos.
- Resize the icon and logo images to make them smaller.
- Add an image with an IPSC target with bullet holes.
- Add another image to be displayed in the under-construction carousel.
- Optimise the images displayed in the carousel.
- Use the tahoni React library for standard components like the carousel.
- Use the tahoni React library for data structures.

#### Licence and Documentation

- Create a `README` file with a detailed project description, structure,
  technology stack, instructions, screenshots, licence, author, and support
  information.
- Add a `LICENCE` file.

#### General Technical Changes

- Modify `.gitignore` to exclude additional files and directories.
- Modify `tsconfig.app.json` to add more linting rules.
- Add `.env.local` and `.env.production` files.
- Add `.npmrc` configuration for GitHub NPM registry.
- Create GitHub Actions workflow for CodeQL analysis
  (`.github/workflows/codeql.yml`).
- Create a `_redirects` file to allow React to handle the page routing in
  Netlify.

#### Dependencies

- The standard Vite and React libraries were added.
- Add Font Awesome libraries.
- Add Bootstrap and React Bootstrap libraries.
- Add the tahoni React library.

#### Changes by

- @tahoni
- @dependabot
