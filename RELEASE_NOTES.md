# HPSC website
## Release Notes

### [Version 3.3.6](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.3.6) - _2025-01-07_
Implemented the reCAPTCHA component with a safe library.<br/>
Improved accessibility.<br/>

#### Enhancements and Updates
- Implemented the reCAPTCHA component using the `ReCAPTCHA` class.
- Gave the CAPTCHA component a valid language attribute.

#### Bug Fixes
- Modified the menu items causing nested hyperlinks.

#### General Technical Changes
- Changed the @import directive in the SCSS pages to @use where possible.
- The elements in the head of the HTML page were re-ordered.

#### Dependencies
- Upgraded to React 19.
- Added the `react-google-recaptcha` dependency.

#### Changes by
@tahoni
