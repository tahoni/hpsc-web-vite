# HPSC website
## Release Notes

### [Version 3.5.0](https://github.com/tahoni/hpsc-web-vite/releases/tag/version-3.5.0) - _2025-04-26_
Used a better library for Google Maps.<br/>
Return HTTP status 404 for pages not found.<br/>

#### Enhancements and Updates
- Removed the Not Found component.
- Removed the Page Not Found page.

#### General Code Improvements
- Changed the `.htaccess` file to only allow known routes and return 404 for all other routes.

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
