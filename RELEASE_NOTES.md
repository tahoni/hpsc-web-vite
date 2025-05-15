# HPSC website

## Release Notes

### Version 3.6.5 - _2025-05-15_

Changed the canonical URL to just the domain name, since it is served like that
by the web server.
Fixed all the pages being redirected to the home page on refresh.

#### Enhancements and Updates

- Updated the canonical URL in `index.html` to just [https://hpsc.co.za](https://hpsc.co.za),
  without the `www` prefix.

#### General Technical Changes

- Removed the permanent redirect (HTTP status 301) from the `.htaccess` rules
  that was redirecting all pages to the home page on manual refresh.

#### Changes by

@tahoni
