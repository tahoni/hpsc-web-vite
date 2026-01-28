# HPSC Website – Improvement Tasks Checklist

Note: Each item is actionable and intended to be checked off when completed. Items are ordered from
foundational/tooling improvements through architecture, code quality, UX/a11y, performance, and documentation.

1. [ ] Establish CI pipeline (GitHub Actions): run npm install, lint, type-check, build and vitest in headless
   mode on push/PR
2. [ ] Update Vite visualizer plugin to open: false in CI (detect via CI env) while keeping open: true locally
3. [ ] Add npm scripts for tests: "test" and "test:run" mapping to Vitest (incl. jsdom option for
   component tests)
4. [ ] Introduce a minimal vitest.config.ts setting test.environment = 'jsdom' for future React
   component tests
5. [ ] Enforce consistent Node/TypeScript versions via .nvmrc or engines field in package.json and document
   in README
6. [ ] Add Prettier and a basic config; wire up "format" script and optional lint-staged hook for consistent
   code style
7. [ ] Expand ESLint config to include react-refresh rule (already present), React 19 best practices and
   stricter TS rules where beneficial
8. [ ] Add a npm script for strict type-check only (e.g., "typecheck": "tsc -b --noEmit") and use in CI
9. [ ] Replace internal import of @rjsf/utils/src/types.ts with public typings from @rjsf/utils to avoid
   relying on private paths
10. [ ] Validate and fix any future-dated route metadata (e.g. Contact Us dateCreated set to 2025-12-26) to
    reflect accurate created/updated dates
11. [ ] Ensure all routes that exist in the UI are represented in coreRoutes with dateCreated/dateUpdated for
    accurate sitemap generation
12. [ ] Add a guard in builders/RoutesSitemap to fall back to dateCreated when dateUpdated is absent and to
    default to today if both are missing
13. [ ] Consider deriving sitemap changefreq and priority from the route type (Home=1.0; others adjust based
    on update recency) for better SEO
14. [ ] Externalize baseUrl for sitemap via an environment variable (e.g., SITEMAP_BASE_URL) with a safe
    default; document usage in README
15. [ ] Add a package.json "host" dev script note to README with hosts/DNS mapping guidance (align
    with guidelines)
16. [ ] Create a basic unit test for generateRoutesSitemap to validate URL formation, priority rules and
    lastmod formatting
17. [ ] Add testing-library/react and @testing-library/user-event as devDependencies for future React 19
    component tests
18. [ ] Introduce an App error boundary component and route-level Suspense/loader boundaries (React Router 7)
    for better UX
19. [ ] Audit and remove commented-out routes or re-enable them deliberately; document rationale to keep
    coreRoutes authoritative
20. [ ] Ensure RouteAliases.tsx exports have stable named exports and match coreRoutes; add a lightweight test
    to detect drift
21. [ ] Implement accessibility linting (eslint-plugin-jsx-a11y) and fix common issues across layout
    and components
22. [ ] Review colour contrast and focus styles in src/vendors/bootstrap/stylesheets/_custom.scss; align
    with WCAG AA
23. [ ] Add accessible names/labels on interactive elements (HeaderMenu, Footer links) and ARIA attributes
    where appropriate
24. [ ] Provide a non-reCAPTCHA fallback or clear error messaging; ensure CAPTCHA field has accessible
    description/help text
25. [ ] Sanitise all user-generated HTML/MDX content paths; verify sanitize-html usage and add a central
    sanitiser utility
26. [ ] For MDX, ensure only trusted components are allowed; review mdx plugin usage for potential XSS vectors
27. [ ] Review EmailService: add robust error handling, timeouts, and retry/backoff; surface user-friendly
    errors in ContactUsForm
28. [ ] Debounce or disable the Submit button during ContactUsForm submission; show a loading state to
    prevent duplicate emails
29. [ ] Validate and update email regex/pattern to modern, practical validation and rely on server
    verification for true validity
30. [ ] Move email-related constants (from ClubConstants) and attachments to a single source; validate paths
    exist at build/runtime
31. [ ] Introduce runtime configuration for service endpoints via import.meta.env (no Node globals in browser
    code)
32. [ ] Performance: review manualChunks grouping; ensure high-churn deps are split to keep long-term
    caching effective
33. [ ] Lazy-load heavy routes/components (FullCalendar, Google Maps) with React.lazy and route-level
    code-splitting
34. [ ] Add an image optimisation pipeline for public/assets images (pre-compress SVG/PNG/JPG); consider
    responsive images where relevant
35. [ ] Consider preconnect/prefetch for critical third-party origins (Google Fonts/Maps) in index.html
36. [ ] Enable source maps in development only (already off in prod); verify dev sourcemap ergonomics and
    bundle speeds
37. [ ] Styles: consolidate global SCSS with @use module syntax; remove any legacy @import and ensure variable
    namespaces (hpsc-*)
38. [ ] Ensure SCSS variables in _variables.scss are consumed consistently by _custom.scss and theme partials
39. [ ] Add CSS module typing where necessary and purge unused styles; verify Bootstrap overrides take effect
    without duplication
40. [ ] Strengthen models typing (PageMapping) with readonly fields where applicable and ensure immutability
    in mappings
41. [ ] Add data-testids or roles to critical components to ease UI testing without polluting production UX
42. [ ] Document environment variables (GITHUB_TOKEN, GOOGLE_MAPS_API_KEY, RECAPTCHA_V2_SITE_KEY,
    SITEMAP_BASE_URL) in README
43. [ ] Add a CONTRIBUTING.md with project setup, branching, lint/test/build expectations and PR checklist
44. [ ] Update ARCHITECTURE.md to include current routing, sitemap assumptions and any new builders or
    env-driven behaviour
45. [ ] Create a release checklist in documentation/templates and reference it from RELEASE_NOTES.md for
    consistent releases
46. [ ] Add a basic smoke test (Vitest) that renders the app shell with jsdom and verifies essential layout
    components mount
47. [ ] Verify robots.txt and sitemap.xml alignment with routes; add a script to write sitemap to
    public/sitemap.xml if desired
48. [ ] Consider adding Rollup visualizer output to .gitignore or keep under target/ only; ensure no
    accidental commit of large HTML
49. [ ] Add a security checklist (CSP, dependency audit via npm audit, periodic update cadence) to
    documentation
50. [ ] Schedule dependency updates (e.g. monthly) and pin React Router minor where breaking changes are
    likely; document policy
