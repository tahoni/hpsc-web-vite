# HPSC website
## Change Log


### Table of Contents
- [Version 3.2.5](#version-325---2024-12-25)
- [Version 3.2.4](#version-324---2024-12-24)
- [Version 3.2.3](#version-323---2024-12-22)
- [Version 3.2.2](#version-322---2024-12-18)
- [Version 3.2.1](#version-321---2024-12-17)
- [Version 3.2.0](#version-320---2024-12-17)


### Unreleased
Improve the documentation.<br/>

#### Licence and Documentation
- Bring the readme file up to date.
- Bring the licence file up to date.
- Add release notes.
- Add a change log.


### [Version 3.2.5](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.5) - 2024-12-25
Move all common static content to global constants.<br/>

#### General Code Improvements
- Move all common static content to global constants.
- Use these constants in:
  - the header. 
  - the footer.
  - the About page.


### [Version 3.2.4](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.4) - 2024-12-24
Make the About page the homepage.<br/>
Finish the website layout by completing the footer.<br/>
Complete the footer by adding contact details and copyright.<br/>
Improve the responsiveness of the website.<br/>
Add more keywords for SEO purposes.<br/>

#### Enhancements and Updates
- Make the About page the homepage.
- Add contact details in the footer, including an e-mail and links to Facebook.
- Add copyright in the footer.
- Change the styling of the footer to include the new content and make it more responsive.
- Fix the hover colour of the hyperlinks.
- Improve the responsiveness of the website.
- Add more keywords for SEO on the base page.

#### General Code Improvements
- Move the styling of the icon image to the layout component CSS.
- Remove styling and JavaScript from the website preamble.
- Decrease the maximum size of the generated chunks by chunking the tahoni React library in its own chunk.

#### Dependencies
- Update the Vite React libraries.


### [Version 3.2.3](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.3) - 2024-12-22
Add the SAPSA and IPSC logos to the footer.<br/>
Complete the map to the shooting range in the footer.<br/>

#### Enhancements and Updates
- Add a working map of the club shooting range in the footer.
- Change the styling of the footer to include the map component.
- Order the footer content to make it responsive.
- Remove the uncompleted shooting range map components and replace them with the new generic map components.
- Create map components with simple and clustered markers using the standard Google Maps components.
- Improve the text and background contrast, including the background gradient.
- Add the image of the IPSC target with bullet holes to the public assets directory.

#### General Code Improvements
- Wrap all components in a React memo.
- Move the icon styling to the layout component CSS.
- Use MD5 hashes as keys for the map component markers.
- Rename all CSS classes to camel case.
- Add CSS variables.

#### Dependencies
- Add the Google Maps clustered marker library.
- Add an MD5 library.

#### Security
- Remove security violations caused by including the Google Maps API key in the previous commit.


### [Version 3.2.2](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.2.2) - 2024-12-18
Allow React to handle page routing.<br/>

#### General Technical Improvements
- Add a .htaccess file to allow React to handle the page routing.


### [Version 3.2.1](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.1) - 2024-12-17
Add an About page with the club's history.<br/>
Add hyperlinks to the About component.<br/>
Add a map to the shooting range in the footer.<br/>

#### Enhancements and Updates
- Add a range map component to the footer.
- Add basic styling for the footer component.
- Add an About page with the About component.
- Add hyperlinks in the About component.
- Add hyperlink styling.

#### General Code Improvements
- Remove the page component and call the content components directly.
- Move the sidebar component to the components directory

#### General Technical Improvements
- Add a _redirects file to allow React to handle the page routing in Netlify.

#### Dependencies
- Add the React Google Maps library


### [Version 3.2.0](https://github.com/tahoni/hpsc-web-vite/releases/edit/version-3.2.0) - 2024-12-17
Read all page content from Markdown components.<br/>

#### Enhancements and Updates
- Add React MDX Markdown components.
- Read all page content from the Markdown components.
- Remove the home page with HTML content and replace it with content from an MDX component.
- Remove all simple Markdown files and replace them with MDX markdown components.
- Add an About page.
- Add a page component.
- Add a content component in the body component.
- Open the NGPSA hyperlink in a new window.

#### General Code Improvements
- Add the sidebar component properties to the template page.

#### General Technical Improvements
- Pre-process MDX components in vite.config.ts.

#### Dependencies
- Add the MDX JavaScript library.
