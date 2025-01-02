# HPSC website
## Release Notes

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
- Sanitized all input before submitting it to the service.
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
- Added the `sanitize-html` dependency.
- Added the SweetAlert2 dependency.
- Added the Prettier dependency to format the source code.

#### Changes by
@tahoni
