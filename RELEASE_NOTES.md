# HPSC website

## Release Notes

### Version 3.6.3 - _2025-05-14_

Redirected all URLs, without valid subdomains, to the `www` root domain.

#### General Technical Changes

- Modified the `.htaccess` file to correct all the current erroneous regular expressions.
- Modified the `.htacess` file to redirect hosts not starting with a `www`, `api`
    or `members` subdomain to the `www` root domain.

#### Changes by

@tahoni
