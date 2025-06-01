# HPSC website

## Release Notes

### Version 3.6.6 - _2025-06-01_

Created a sitemap of the website.

#### Enhancements and Updates

- Added a sitemap builder to the `builder` directory that generates a sitemap and logs it to the console.
- Created a new model class for the sitemap builder to use.
- Split off the page info needed by the sitemap builder into a separate TypeScript file.
- Added metadata to the pages for the sitemap, like date last updated.

#### General Technical Changes

- Generated a `sitemap.xml` file with all the pages of the website.
- Referred to this file in the `robots.txt` file.

#### Dependencies

- Added the `sitemap` dependency.
- Added the `tsx` dependency as a dev dependency.

#### Changes by

@tahoni
