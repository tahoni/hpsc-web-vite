# HPSC Website History

A narrative overview of the HPSC Website project's evolution from its first scaffold to the current release, documenting
how its architecture, features and design philosophy have developed across every version. For the technical,
entry-by-entry record of the current Version 4.x line, see [CHANGELOG.md](CHANGELOG.md); this file additionally narrates
the legacy Version 3.x line that predates it.

---

## Table of Contents

- [📅 Historical Timeline](#-historical-timeline)
- [📖 Evolution Overview](#-evolution-overview)
- [🎯 Major Version Goals](#-major-version-goals)
- [🎯 Major Milestones](#-major-milestones)
- [🏛️ Architectural Evolution](#-architectural-evolution)
- [✨ Feature Timeline](#-feature-timeline)
- [💡 Project Philosophy Evolution](#-project-philosophy-evolution)
- [📚 Key Learnings](#-key-learnings)
- [🚀 Future Roadmap Implications](#-future-roadmap-implications)
- [🎓 Conclusion](#-conclusion)

---

## 📅 Historical Timeline

### Version 5.2.0 (September 6, 2026)

**Theme:** Quality Gate Foundations: CI, Testing, Accessibility & SEO

**Key Focus:**

- Added `.github/workflows/build.yml`, gating `main`/`develop` pull requests on `npm run lint`, `npm run build` and
  `npm run test:run`, plus an advisory-only `npm audit` step, and the project's first Vitest infrastructure and
  test coverage (`htmlUtils.ts`, `builders/RoutesSitemap.ts`)
- Added `eslint-plugin-jsx-a11y`'s `recommended` rule set and a manual WCAG AA baseline checklist, and gave every
  page a unique `document.title`, meta-description and canonical link instead of sharing `index.html`'s static tags
- Added a top-level `ErrorBoundary` with a friendly fallback, completed `src/vendors/bootstrap/styles/index.scss`'s
  migration to `@use`/`@forward`, and sourced `baseUrl` from `VITE_SITE_URL` instead of a hardcoded string literal
- Wired `News` into live routing, fixed `/contact`/`/venues` being unreachable and `public/sitemap.xml`'s malformed
  entry, then deliberately removed `Contact Us`/`Venues` from the primary navigation menu, leaving it focused on
  the site's core sections
- Documented a monthly dependency-update cadence and added `HISTORY.md`'s "🚀 Future Roadmap Implications" section,
  closing improvement-plan.md's Gaps #1 through #9 and #12/#13

### Version 5.1.3 (September 5, 2026)

**Theme:** Canonical Domain Cleanup & Environment Variable Onboarding

**Key Focus:**

- Fixed `index.html`, `public/robots.txt` and `README.md` to point at the site's actual served domain,
  `https://www.hpsc.co.za`, and the `baseUrl` constant already used elsewhere (e.g. the sitemap builder), instead of
  the bare `https://hpsc.co.za` — a `3.6.5`-era choice the site's server no longer honours (confirmed via a live
  redirect check)
- Corrected `AGENTS.md`'s British English exceptions note and icon table, which had the `LICENSE.md` naming
  convention backwards — every other doc linking to it now correctly spells it "Licence", not "License"
- Added a secret-free `.env.example` documenting `.env.local`'s exact `VITE_`-prefixed variable names;
  `AGENTS.md`/`README.md`/`CONTRIBUTING.md` now point to it instead of duplicating its content, and
  `.env.local`/`.env.production` themselves are no longer tracked in version control

### Version 5.1.2 (September 4, 2026)

**Theme:** Release-History Backfill & the Legacy `ARCHIVE.md`

**Key Focus:**

- Backfilled `documentation/history/RELEASE_NOTES_vX.Y.Z.md` archives for versions `4.0.0` through `4.2.2`, closing
  the gap left when `documentation/history/` was introduced in `5.0.0` with only `4.2.3` backfilled
- Added `documentation/archive/ARCHIVE.md`, a read-only legacy release archive reproducing GitHub's own release
  notes for the Version 3.x line (`3.0.0` through `3.6.9`), with `1.0.0` through `2.1.0` summarised from their
  commit history since no release notes were ever generated for those three
- Fixed `AGENTS.md`'s Merging section stating the release tag format is `version-X.Y.Z`, two majors behind actual
  practice since `4.2.3`, which tags as `vX.Y.Z`

### Version 5.1.1 (September 4, 2026)

**Theme:** Documentation Conformance, Claude Code Skills Migration & TSDoc Enforcement

**Key Focus:**

- Replaced all six `.claude/commands/` slash commands with eight `.claude/skills/` equivalents, synced and localised
  from the sibling `hpsc-web-springboot` repository
- Reconciled `AGENTS.md`'s section skeleton and icon registry against `hpsc-web-springboot`'s more recently updated
  copy; added a Serial Commas convention, applied retroactively repo-wide
- Fixed `eslint-plugin-tsdoc`'s `tsdoc/syntax` rule being silently inert under ESLint 9's flat config, surfacing 264
  pre-existing warnings tracked as a new roadmap gap rather than fixed outright
- Restructured `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md` into a status-based grouping;
  found and closed a stale `LICENSE.md` description in `AGENTS.md`
- Fixed a Bootstrap theming regression, an `npm run build` chunk-size warning, the unresolved `@routes` alias, a dead
  `src/index.css` import, an inconsistent `Layout/` folder shape and several relative imports that should have used
  the project's own path aliases

### Version 5.1.0 (August 26, 2026)

**Theme:** Dependency Modernisation Completion & @rjsf v6 Migration

**Key Focus:**

- Updated every dependency 5.0.0 left deferred pending code changes (`@fortawesome/*`, `@fullcalendar/*`, `@mdx-js/*`,
  `@react-email/components`, `@rjsf/*`, `@vis.gl/react-google-maps`, `bootstrap`, `react-bootstrap`, `react-email`,
  `react-router`/`react-router-dom`, `sanitize-html`, `sweetalert2`) plus `typescript` to `~6.0.3`
- Fixed the Contact Us form and its sanitised widgets, broken by `@rjsf/core` v6's stricter package `exports` map and
  `FieldProps.onChange`'s new required `path` argument
- Fixed `npm run build` under Vite 8's CSS minification default and `npm run sitemap`'s path-alias resolution
- Added a `/sync-unreleased-changes` Claude Code command and an `.aiignore` file; expanded the Release Checklist's
  `RELEASE_NOTES.md` template
- Cleaned up documentation hard-wrap and archive-sync issues carried over from the 5.0.0 release prep

### Version 5.0.0 (August 25, 2026)

**Theme:** AI Agent Conventions & Release Process Foundations

**Key Focus:**

- Added `AGENTS.md`/`CLAUDE.md` cross-tool AI agent conventions and five Claude Code slash commands for release prep and
  test scaffolding, plus `CONTRIBUTING.md`
- Restructured `CHANGELOG.md`/`HISTORY.md` into the icon-based Keep a Changelog format and introduced a
  `documentation/history/` per-version release archive
- Added `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md`, an evidence-backed improvement backlog
- Refactored email models and relocated `menuHelpers`/`routeHelpers` to `src/helpers/`; closed all open GitHub
  Dependabot alerts
- Fixed broken imports left behind by the helpers relocation, and stale `@helpers`/`@models`/`@utils`/`@constants` path
  aliases, which were breaking `npm run build`

### Version 4.2.3 (May 4, 2026)

**Theme:** Office-Bearer Update & Case-Sensitivity Fix

**Key Focus:**

- Updated club office-bearer names (Chairman, Secretary) and fixed a case-sensitive `WorldShootConstants` import path
  that broke builds on case-sensitive file systems
- Removed `.idea`/`.junie` from version control; fixed vulnerable dependencies (`lodash-es`, `brace-expansion`,
  `minimatch`, `picomatch`)

### Version 4.2.2 (February 10, 2026)

**Theme:** Documentation Clean-up & Dependency Security

**Key Focus:**

- Updated `CHANGELOG.md`/`RELEASE_NOTES.md` for repository and title changes; normalised filenames and `.gitignore`
- Fixed security vulnerabilities in dependencies

### Version 4.2.1 (January 20, 2026)

**Theme:** Helper Relocation & Funding Transparency

**Key Focus:**

- Moved route-management helpers back under `src/shared/helpers/`
- Added `PACKAGES.md` documenting dependencies seeking funding; removed unused `lightgallery`/`react-pdf`

### Version 4.2.0 (January 20, 2026)

**Theme:** Image Optimisation

**Key Focus:**

- Converted all images to `webp`, fixing a corrupt source image in the process
- Added constants for the default file extension and images folder

### Version 4.1.4 (January 19, 2026)

**Theme:** Documentation & Onboarding

**Key Focus:**

- Overhauled `README.md` with quickstart, install/build/test instructions and contribution guidelines
- Removed the maintenance-heavy screenshots folder; editorial fixes across `ARCHITECTURE.md`/`UI.md`

### Version 4.1.3 (January 11, 2026)

**Theme:** Responsive Navigation & Security Tooling

**Key Focus:**

- `HeaderMenu` now collapses at the `lg` breakpoint instead of `xl`, for a better mid-size experience
- Added a CodeQL analysis workflow; upgraded `react-router-dom` to `7.12.0`

### Version 4.1.2 (January 3, 2026)

**Theme:** Year-Namespaced Content Reorganisation

**Key Focus:**

- Introduced the generic `Section` component for collapsible content groups
- Moved `WorldShoot2025` and `ClubShirts` content into dedicated `2025/`-namespaced directories under `Events`/`Members`

### Version 4.1.1 (January 2, 2026)

**Theme:** Header Consolidation & Documentation Polish

**Key Focus:**

- Streamlined `Header` by removing `HeaderTitle` and folding `HeaderMenu` into `HeaderContent`; improved extra-large
  breakpoint behaviour
- Added unique Google Maps IDs; expanded TypeDoc/TSDoc coverage; standardised British English throughout

### Version 4.1.0 (December 30, 2025)

**Theme:** Map Identity & Responsive Layout Robustness

**Key Focus:**

- Introduced `aboutUsMapId`/`footerMapId` for per-instance Google Maps configuration
- Reworked `Layout.module.scss` so header/footer sidebar ordering holds up across `md`/`lg` breakpoints

### Version 4.0.3 (November 26, 2025)

**Theme:** Image Display Fix

**Key Focus:**

- Moved `public/images` to `public/assets/images`, restoring images that had stopped rendering

### Version 4.0.2 (November 26, 2025)

**Theme:** Path Aliases & Directory Standardisation

**Key Focus:**

- Adopted `@`-notation path aliases in place of relative imports; refactored the directory structure and stylesheet
  names to industry conventions
- `.env` files are no longer excluded from Git; fixed dependency vulnerabilities

### Version 4.0.1 (October 27, 2025)

**Theme:** Bootstrap Icons & reCAPTCHA v3

**Key Focus:**

- Upgraded the Bootstrap integration to Bootstrap Icons; upgraded Vite `6.3.5` → `6.4.1` for security fixes
- Added `react-google-recaptcha-v3`; refactored conditional rendering across components for readability

### Version 4.0.0 (August 17, 2025)

**Theme:** Stylesheet Standards & the CHANGELOG/HISTORY Split

**Key Focus:**

- Adopted `@use`/`@forward` over `@import`, underscore-prefixed partials and a dedicated `vendors/` directory for
  Bootstrap overrides
- Moved the Version 3.x changelog content into a new `HISTORY.md`, and created the `CHANGELOG.md`/`RELEASE_NOTES.md`
  templates — the point at which this project's release documentation took its current shape

### Version 3.6.9 (July 12, 2025)

**Theme:** Dependency Security Mitigation

**Key Focus:**

- Updated the vulnerable `brace-expansion` transitive dependency

### Version 3.6.8 (June 2, 2025)

**Theme:** Frontier Range Video

**Key Focus:**

- Added a YouTube video embed for the Frontier shooting range

### Version 3.6.7 (June 1, 2025)

**Theme:** World Shoot Apparel & the First Architecture Document

**Key Focus:**

- Linked the Bosninja IPSC Handgun World Shoot 2025 apparel from the World Shoot post
- Added `ARCHITECTURE.md`, seeded from `README.md`'s content — the project's first dedicated architecture document

### Version 3.6.6 (June 1, 2025)

**Theme:** Sitemap Generation

**Key Focus:**

- Added a sitemap builder generating `public/sitemap.xml` from route metadata, referenced from `robots.txt`
- Introduced route metadata (e.g. last-updated dates) feeding the sitemap

### Version 3.6.5 (May 15, 2025)

**Theme:** Canonical URL & Refresh-Redirect Fix

**Key Focus:**

- Simplified the canonical URL to the bare domain; removed a permanent redirect that broke manual page refreshes

### Version 3.6.4 (May 14, 2025)

**Theme:** Redirect Simplification

**Key Focus:**

- Removed the `www` root-domain redirect, since the web server already handled it

### Version 3.6.3 (May 14, 2025)

**Theme:** Subdomain Redirect Correction

**Key Focus:**

- Fixed erroneous `.htaccess` regular expressions redirecting non-`www`/`api`/`members` hosts to the `www` root domain

### Version 3.6.2 (May 4, 2025)

**Theme:** HTTPS Redirect Fix

**Key Focus:**

- Corrected `.htaccess` rules to redirect HTTP to HTTPS and match only full valid path names

### Version 3.6.1 (May 2, 2025)

**Theme:** Events/Venues Routing Fix

**Key Focus:**

- Fixed a 404 on the Events page and stopped image paths being rewritten by `.htaccess`; added the World Shoot 2025 logo

### Version 3.6.0 (May 1, 2025)

**Theme:** The Events Page

**Key Focus:**

- Created the Events page and a `Venue Event` model class; added the first World Shoot 2025 post
- Fixed a dropdown-menu accessibility issue

### Version 3.5.2 (April 30, 2025)

**Theme:** Header/Footer Overlap Fix

**Key Focus:**

- Corrected overlapping elements in the header and footer across both JSX and CSS

### Version 3.5.1 (April 26, 2025)

**Theme:** Real 404 Handling

**Key Focus:**

- `.htaccess` now only allows known routes; unknown routes correctly return an HTTP 404 rather than a soft redirect

### Version 3.5.0 (April 26, 2025)

**Theme:** Google Maps Migration & 404 Clean-up

**Key Focus:**

- Replaced the `@react-google-maps` library with `@vis.gl/react-google-maps`
- Removed the client-side "Page Not Found" component now that `.htaccess` returns real 404s; introduced per-environment
  environment variables

### Version 3.4.1 (March 28, 2025)

**Theme:** Contact Us Completion

**Key Focus:**

- Finished the Contact Us page: sections/articles for content grouping, input sanitisation and e-mail delivery on
  submission
- Split the build into sensible bundles for load performance

### Version 3.4.0 (February 25, 2025)

**Theme:** Lazy Loading & the Page Component

**Key Focus:**

- Introduced a shared `Page` component and lazy-loaded route components behind it
- Standardised form-control styling via a new `styles-classes.scss`; components switched to default exports in
  preparation for lazy loading

### Version 3.3.9 (February 15, 2025)

**Theme:** Footer Contact Icons

**Key Focus:**

- Added icons to the footer's contact details; fixed a `tahoni-lib-react` stylesheet import

### Version 3.3.8 (February 9, 2025)

**Theme:** Critical Vulnerability Mitigation

**Key Focus:**

- Mitigated a critical-severity dependency vulnerability (Vitest 3, Vite 6); temporarily removed the Contact Us menu
  option

### Version 3.3.7 (January 8, 2025)

**Theme:** Documentation Sync

**Key Focus:**

- Improved `README.md` structure and documented the reCAPTCHA site key environment variable
- Synced conventions with the sibling `hpsc-template-react` project

### Version 3.3.6 (January 7, 2025)

**Theme:** A Safer reCAPTCHA & Accessibility Fix

**Key Focus:**

- Replaced the CAPTCHA implementation with the `ReCAPTCHA` class; upgraded to React 19
- Fixed nested-hyperlink menu items causing an accessibility issue

### Version 3.3.5 (January 6, 2025)

**Theme:** Small-Screen Accessibility

**Key Focus:**

- Split content onto two lines where the screen was too narrow to display it together; removed paragraph-in-paragraph
  markup errors

### Version 3.3.4 (January 5, 2025)

**Theme:** Dropdown Menu & 404 Page

**Key Focus:**

- Added a hamburger dropdown menu styled with theme colours, and a "page not found" page for unknown routes

### Version 3.3.3 (January 5, 2025)

**Theme:** CAPTCHA Library Removal

**Key Focus:**

- Removed the `react-recaptcha-x` dependency after it was found injecting suspicious code into the HTML

### Version 3.3.2 (January 4, 2025)

**Theme:** Links & Member Pages

**Key Focus:**

- Created the Links page (NGPSA/SAPSA/IPSC) and the Member page (club shirts)
- Wrapped all components in `React.memo`; restricted CodeQL to the `develop`/`main` branches

### Version 3.3.1 (January 2, 2025)

**Theme:** The About Us Page

**Key Focus:**

- Created the About Us page with contact details and a satellite map of the shooting range

### Version 3.3.0 (January 2, 2025)

**Theme:** The Contact Us Page

**Key Focus:**

- Built the Contact Us page on a JSON Schema Form (`@rjsf`) with a custom-validated CAPTCHA field, `sanitize-html` and
  SweetAlert2 confirmation
- Formatted the codebase with Prettier for the first time

### Version 3.2.6 (December 26, 2024)

**Theme:** Documentation Baseline

**Key Focus:**

- Brought `README.md`/`LICENSE.md` up to date; added the project's first release notes and change the log

### Version 3.2.5 (December 25, 2024)

**Theme:** Global Constants Consolidation

**Key Focus:**

- Moved common static content (header, footer, About page) into shared global constants

### Version 3.2.4 (December 24, 2024)

**Theme:** About Us as Homepage

**Key Focus:**

- Made the About Us page the homepage; completed the footer with contact details, copyright and responsive styling
- Added SEO keywords; fixed hyperlink hover colour

### Version 3.2.3 (December 22, 2024)

**Theme:** Footer Map & Logos

**Key Focus:**

- Added a working shooting-range map and the SAPSA/IPSC logos to the footer, using new generic (simple and clustered)
  map components
- Removed an accidentally committed Google Maps API key

### Version 3.2.2 (December 18, 2024)

**Theme:** Client-Side Routing Support

**Key Focus:**

- Added a `.htaccess` file so the web server defers page routing to React

### Version 3.2.1 (December 17, 2024)

**Theme:** The About Page & Footer Map

**Key Focus:**

- Added an About page with the club's history and hyperlinks; added a range map component to the footer

### Version 3.2.0 (December 17, 2024)

**Theme:** MDX-Based Content

**Key Focus:**

- Replaced static HTML/Markdown page content with React MDX components — the foundation of this project's current
  content model
- Added the `Page` and `Content` component scaffolding that later pages build on

### Version 3.1.4 (December 16, 2024)

**Theme:** Image Optimisation

**Key Focus:**

- Optimised all site images for size

### Version 3.1.3 (December 16, 2024)

**Theme:** Sticky Sidebars

**Key Focus:**

- Styled the sidebar component to remain sticky while scrolling

### Version 3.1.2 (December 16, 2024)

**Theme:** Sidebar & Homepage Content

**Key Focus:**

- Added the sidebar component (with semi-transparent shooter imagery) directly to the homepage; made the HPSC/NGPSA
  logos hyperlinks

### Version 3.1.1 (December 15, 2024)

**Theme:** Gradient Background & Responsive Header

**Key Focus:**

- Added a gradient background to the layout; made the header responsive and aligned the heading with the logos

### Version 3.1.0 (December 14, 2024)

**Theme:** Layout Skeleton & First Real Content

**Key Focus:**

- Built the header/footer/body layout skeleton, replaced the ICO favicon with SVG and replaced the under-construction
  placeholder with a real homepage

### Version 3.0.5 (December 6, 2024)

**Theme:** Club Name Correction

**Key Focus:**

- Corrected the spelling of "Hartbeespoortdam Practical Shooting Club" throughout the site

### Version 3.0.4 (November 2, 2024)

**Theme:** Site Title Update

**Key Focus:**

- Changed the site title to the club's full name

### Version 3.0.3 (October 29, 2024)

**Theme:** Club Name Spelling Fix & Vite Bump

**Key Focus:**

- Corrected an earlier misspelling of the club's name; bumped Vite to clear vulnerabilities

### Version 3.0.2 (August 27, 2024)

**Theme:** Background Simplification

**Key Focus:**

- Removed the background image to improve visual clarity

### Version 3.0.1 (August 27, 2024)

**Theme:** Background Styling Attempt

**Key Focus:**

- Attempted improved background styling; enabled the under-construction carousel to autoplay

### Version 3.0.0 (August 18, 2024)

**Theme:** Initial Scaffold

**Key Focus:**

- Scaffolded the React application on Vite with an under-construction carousel, using the `tahoni` React library for
  shared components and data structures — the project's starting point

---

## 📖 Evolution Overview

The HPSC Website has evolved through distinct phases, each addressing a different stage of the site's growth from an
under-construction placeholder to a full club website:

### Phase 1: Foundation & Layout Skeleton (v3.0.0 – v3.1.4)

**Duration:** August 18, 2024 – December 16, 2024

**Key Accomplishments:**

- Initial Vite + React scaffold with an under-construction carousel
- Header/footer/body layout skeleton; SVG favicon; gradient background; sticky, image-backed sidebar
- First real homepage content, replacing the placeholder

**Technical Focus:** Getting a deployable React/Vite shell in front of users, with the visual identity (logos, gradient,
sidebar) established early.

---

### Phase 2: Content & Interactivity (v3.2.0 – v3.3.9)

**Duration:** December 17, 2024 – February 15, 2025

**Key Accomplishments:**

- MDX adopted as the content model for all pages — the pattern still in use today
- About, Links, Member and Contact Us pages built out; Contact Us gained a JSON-Schema-driven form with a validated
  CAPTCHA field and sanitised inputs
- `.htaccess`-based client-side routing support; accessibility fixes (nested hyperlinks, two-line small-screen content)
- A CAPTCHA dependency was removed after it was found injecting suspicious code — an early, formative security lesson

**Technical Focus:** Turning a static shell into a real, interactive multipage site, with security and accessibility
corrections along the way.

---

### Phase 3: Forms, Routing Correctness & the Google Maps Migration (v3.4.0 – v3.5.2)

**Duration:** February 25, 2025 – April 30, 2025

**Key Accomplishments:**

- Lazy-loaded routes behind a shared `Page` component; standardised form-control styling
- Contact Us finished end-to-end, including e-mail delivery on submission
- Migrated from `@react-google-maps` to `@vis.gl/react-google-maps`
- `.htaccess` corrected to return real HTTP 404s for unknown routes, retiring the client-side "Page Not Found" component

**Technical Focus:** Correctness — routing that behaves like a real multipage site under refresh/direct-link, and a
maps library the project could build on longer-term.

---

### Phase 4: Events & Site Infrastructure (v3.6.0 – v3.6.9)

**Duration:** May 1, 2025 – July 12, 2025

**Key Accomplishments:**

- Events page and the first World Shoot 2025 content; a `sitemap.xml` builder driven by route metadata
- A string of `.htaccess` redirect corrections (canonical URL, HTTPS, subdomain handling, refresh-on-page bug)
- `ARCHITECTURE.md` created — the project's first dedicated architecture document, seeded from `README.md`

**Technical Focus:** SEO and infrastructure correctness (sitemap, redirects, canonical URL) alongside the first
substantial event content.

---

### Phase 5: Standards & Restructuring (v4.0.0 – v4.0.3)

**Duration:** August 17, 2025 – November 26, 2025

**Key Accomplishments:**

- Stylesheets standardised on `@use`/`@forward`, underscore-prefixed partials and a dedicated `vendors/` directory for
  Bootstrap overrides
- Directory structure refactored and `@`-notation path aliases adopted in place of relative imports
- `CHANGELOG.md`/`HISTORY.md` split introduced, with the Version 3.x record moved into `HISTORY.md`
- Bootstrap Icons, `react-google-recaptcha-v3` and `react-pdf` added; Vite upgraded for security fixes

**Technical Focus:** Paying down structural debt — aligning the codebase and its documentation with industry-standard
conventions ahead of further feature growth.

---

### Phase 6: Maps, Layout Polish & Documentation (v4.1.0 – v4.1.4)

**Duration:** December 30, 2025 – January 19, 2026

**Key Accomplishments:**

- Per-instance Google Maps IDs (`aboutUsMapId`, `footerMapId`); responsive header/footer sidebar ordering hardened
  across breakpoints
- `Header` consolidated (`HeaderTitle` removed, `HeaderMenu` folded into `HeaderContent`); TypeDoc/TSDoc coverage
  expanded
- `README.md` overhauled with quickstart, build and contribution guidance; maintenance-heavy screenshots removed

**Technical Focus:** Visual and structural polish on the layout, paired with a substantial documentation catch-up.

---

### Phase 7: Content Reorganisation & Image Optimisation (v4.2.0 – v4.2.3)

**Duration:** January 20, 2026 – May 4, 2026

**Key Accomplishments:**

- All images converted to `webp`; a corrupt source image fixed in the process
- `WorldShoot2025`/`ClubShirts` content reorganised into year-namespaced directories; a generic `Section` component
  introduced for collapsible content groups
- `PACKAGES.md` added for dependency-funding transparency; route-management helpers relocated back under `shared/`
- Office-bearer details refreshed; a case-sensitive import path fixed ahead of builds on case-sensitive file systems

**Technical Focus:** Housekeeping — asset size, content organisation for recurring yearly events and small correctness
fixes — consolidating the codebase ahead of the next major redesign.

---

### Phase 8: AI Agent Tooling & Release Process Foundations (v5.0.0)

**Duration:** May 4, 2026 – August 25, 2026

**Key Accomplishments:**

- `AGENTS.md`/`CLAUDE.md` established as cross-tool AI agent conventions, alongside five Claude Code slash commands
  automating release prep and test scaffolding
- `CONTRIBUTING.md` added; `CHANGELOG.md`/`HISTORY.md` restructured into the icon-based Keep a Changelog format, with a
  `documentation/history/` per-version archive introduced
- `documentation/roadmap/improvement-plan.md`/`improvement-plan-tasks.md` added, turning ad-hoc improvement ideas into
  an evidence-backed, trackable backlog
- Email models refactored (`EmailContent` merged into `EmailMessage`, an `EmailType` enum introduced) and helpers
  relocated to `src/helpers/`; all open GitHub Dependabot alerts closed

**Technical Focus:** Establishing durable, tool-agnostic documentation and process conventions, and paying down internal
model debt, as groundwork ahead of the site's own visual/structural redesign — the branch this release ships from is
named for it.

---

## 🎯 Major Version Goals

Zooming out from the per-release Historical Timeline and per-phase Evolution Overview above, each `MAJOR` line (per
[`CHANGELOG.md`'s Version Policy](CHANGELOG.md#-version-policy) — "a significant redesign or structural overhaul of
the site") has pursued a distinct overarching goal:

### Major Version 4 (v4.0.0 – v4.2.3)

**Goal:** Pay down structural debt and align the codebase and its documentation with industry-standard conventions,
consolidating the project before attempting a further redesign.

- Standardise stylesheets on `@use`/`@forward`, adopt `@`-notation path aliases in place of relative imports and
  reorganise the directory structure around features (Phase 5)
- Split release documentation into a current `CHANGELOG.md` and a narrative `HISTORY.md`, so the active release record
  stays short while the full project story remains available (Phase 5)
- Catch up on documentation debt (`README.md` overhaul, expanded TypeDoc/TSDoc) and harden responsive layout behaviour
  across breakpoints (Phase 6)
- Housekeep before the next major phase: optimise image assets, reorganise recurring-event content by year and keep
  dependencies patched (Phase 7)

**Outcome:** The feature-organised, path-aliased architecture this project still has today (see Milestone 6, below) —
later v4.1.x/v4.2.x work refined it without changing its shape.

### Major Version 5 (v5.0.0 – present)

**Goal:** Make the project legible to both human and AI coding agents; formalise its release process; and modernise its
dependency stack — groundwork ahead concerning a planned visual/structural redesign of the site itself.

- Establish `AGENTS.md`/`CLAUDE.md` as a durable, cross-tool contract for documentation, git workflow and the Release
  Checklist, backed by Claude Code slash commands automating release prep and test scaffolding (v5.0.0)
- Turn ad-hoc improvement ideas into an evidence-backed, trackable backlog under `documentation/roadmap/` (v5.0.0)
- Close out every dependency 5.0.0 left deferred pending code changes — `@fortawesome/*`, `@fullcalendar/*`,
  `@mdx-js/*`, `@rjsf/*` (a major-version migration), `@vis.gl/react-google-maps`, `bootstrap`/`react-bootstrap`,
  `react-router`/`react-router-dom`, `sweetalert2` and `typescript` (v5.1.0)
- Correct internal structural and build issues surfaced by that modernisation — path-alias drift, an unthemed
  duplicate Bootstrap compile, inconsistent component/layout folder shapes and oversized production JS chunks — so
  the codebase is on solid footing before the redesign begins (v5.1.1)
- Complete the release-history record ahead of the redesign — backfill `documentation/history/`'s missing
  `4.0.0`–`4.2.2` archives and add a `documentation/archive/ARCHIVE.md` for the pre-`CHANGELOG.md` era, so every
  version back to the project's first commit has a documented home (v5.1.2)
- Close out the roadmap's "Now"-phase gaps: a CI quality gate, initial Vitest coverage, automated accessibility
  linting, per-page SEO metadata, a top-level error boundary, the completed Bootstrap `@use` migration and an
  environment-sourced `baseUrl` — the concrete quality-infrastructure precondition the redesign itself depends on
  (v5.2.0)

**Status:** In progress — establishing this foundation is the stated precondition for the redesign the release branch
is named for, not the redesign itself; see
[`documentation/roadmap/improvement-plan.md`](documentation/roadmap/improvement-plan.md) for the standing gaps still
being worked through.

---

## 🎯 Major Milestones

### Milestone 1: Initial Scaffold (v3.0.0)

- React application scaffolded on Vite, using the `tahoni` React library for shared components

**Achievement:** Established the technical foundation — the Vite + React + `tahoni` stack — that every later version
builds on.

---

### Milestone 2: Layout & First Content (v3.1.0 – v3.1.4)

- Header/footer/body layout skeleton, SVG favicon, sticky sidebar and the first real homepage content

**Achievement:** Replaced the under-construction placeholder with a real, navigable site shell.

---

### Milestone 3: MDX Content Model (v3.2.0)

- All page content moved into React MDX components

**Achievement:** Established the content authoring pattern — MDX plus content components — still used by every
feature page today.

---

### Milestone 4: The Contact Us Form (v3.3.0 – v3.4.1)

- JSON-Schema-driven Contact Us form with a validated CAPTCHA field, sanitised inputs and e-mail delivery on submission

**Achievement:** Delivered the site's only interactive, data-submitting feature, including its security and validation
groundwork.

---

### Milestone 5: Routing & SEO Correctness (v3.5.0 – v3.6.9)

- Real HTTP 404 handling, canonical URL and redirect fixes and a route-metadata-driven `sitemap.xml` builder

**Achievement:** Made the site behave correctly as a genuine multipage site under direct links, refreshes and
search-engine crawling.

---

### Milestone 6: Standards & Path Aliases (v4.0.0 – v4.0.3)

- `@use`/`@forward` SCSS conventions, a `vendors/` Bootstrap-override directory and `@`-notation path aliases replacing
  relative imports
- The `CHANGELOG.md`/`HISTORY.md` documentation split introduced

**Achievement:** Brought the codebase and its documentation in line with industry-standard conventions, setting up the
structure this file itself follows.

---

### Milestone 7: Documentation Catch-Up (v4.1.0 – v4.1.4)

- `README.md` overhaul, expanded TypeDoc/TSDoc coverage, British English standardisation across docs and code
  annotations

**Achievement:** Closed a substantial documentation gap, making the project easier for new contributors to onboard onto.

---

### Milestone 8: Content Reorganisation for Recurring Events (v4.1.2 – v4.2.3)

- Year-namespaced `2025/` content directories for `WorldShoot2025`/`ClubShirts`; a generic collapsible `Section`
  component; `webp` image optimisation

**Achievement:** Established a repeatable pattern for yearly event content, ahead of future years' World Shoot and
club-shirt updates.

---

### Milestone 9: AI Agent Documentation & Process Conventions (v5.0.0)

- `AGENTS.md`/`CLAUDE.md` conventions, `CONTRIBUTING.md`, five Claude Code slash commands, `documentation/roadmap/`
  planning docs and the `documentation/history/` per-version archive

**Achievement:** Established a durable, cross-tool contract for how AI coding agents and human contributors work in this
repository — documentation conventions, git workflow and a Release Checklist — ahead of the redesign the branch is
named for.

### Milestone 10: Quality Gate Foundations (v5.2.0)

- `.github/workflows/build.yml`'s lint/build/test CI gate, the project's first Vitest infrastructure and test
  coverage, `eslint-plugin-jsx-a11y`, per-page SEO metadata, a top-level `ErrorBoundary`, the completed Bootstrap
  `@use` migration and an environment-sourced `baseUrl`

**Achievement:** Closed the roadmap's "Now"-phase gaps in a single release — a merge-blocking quality gate,
initial automated test and accessibility coverage, and the last of the pre-redesign structural cleanup — turning
the improvement plan's evidence-backed backlog into shipped infrastructure ahead of Major Version 5's redesign.

---

## 🏛️ Architectural Evolution

### v3.0.0: Bare Scaffold

```
main.tsx
   ↓
 App
   ↓
Under-Construction Carousel (tahoni library)
```

**Characteristics:**

- Single-purpose placeholder page
- No routing, no content model — a Vite + React starting point

---

### v3.2.0: MDX Content Model

```
Route
   ↓
 Page
   ↓
Content Component
   ↓
  MDX
```

**Characteristics:**

- Content authored in MDX, wrapped by a per-page content component
- Introduces the Page → Content → MDX pattern this project still follows

---

### v3.4.0 – v3.5.0: Lazy-Loaded Routing

```
React Router
   ↓
Lazy-Loaded Page (React.lazy)
   ↓
 Layout (Header / Body / Footer)
   ↓
Content Component → MDX / Feature Components
```

**Characteristics:**

- Routes lazy-load their page components
- `.htaccess` corrected to hand real 404s to the server rather than a client-side fallback page

---

### v4.0.0 – v4.0.2: Path-Aliased, Feature-Organised Structure

```
Route (React Router, data-driven)
    → Feature Page   (src/features/<Feature>/<Feature>Page.tsx)
    → Feature Content (…Content.tsx, .mdx)
    → Shared components / layouts (src/shared/)
```

**Characteristics:**

- Directory structure reorganised by feature, matching `ARCHITECTURE.md`'s current description
- Relative imports replaced by `@`-notation path aliases (`@components`, `@features`, `@shared`, etc.)
- SCSS standardised on `@use`/`@forward`, with a dedicated `vendors/` directory for Bootstrap overrides

**This is, in essence, the architecture the project still has today** — later versions (v4.1.x – v4.2.x) refined it
(year-namespaced content, a generic `Section` component, consolidated header structure) without changing its shape.

---

## ✨ Feature Timeline

### Pages & Routing

- **v3.0.0:** Under-construction placeholder only
- **v3.1.0 – v3.2.1:** Homepage, About page
- **v3.2.4:** About Us promoted to the homepage
- **v3.3.0 – v3.3.2:** Contact Us, Links, Member pages
- **v3.5.0:** Client-side "Page Not Found" component removed in favour of real server-side 404s
- **v3.6.0:** Events page
- **v4.1.2 – v4.2.1:** Events/Members content reorganised into year-namespaced subdirectories

### Forms & Validation

- **v3.3.0:** JSON-Schema-driven Contact Us form (`@rjsf`) with a custom CAPTCHA field validator
- **v3.3.3:** Removed `react-recaptcha-x` after it was found injecting suspicious code
- **v3.3.6:** Reimplemented CAPTCHA using the `ReCAPTCHA` class
- **v3.4.1:** Contact Us form sends e-mail on submission, with sanitised inputs
- **v4.0.1:** Migrated to `react-google-recaptcha-v3`
- **v5.0.0:** Refactored email models — merged `EmailContent` into `EmailMessage`, added an `EmailType` enum

### Maps

- **v3.2.1 – v3.2.3:** Footer shooting-range map, then simple/clustered marker components
- **v3.5.0:** Migrated from `@react-google-maps` to `@vis.gl/react-google-maps`
- **v4.1.0 – v4.1.1:** Per-instance map IDs (`aboutUsMapId`, `footerMapId`) for Google Maps Platform styling

### Routing Infrastructure & SEO

- **v3.2.2:** `.htaccess` added for client-side routing support
- **v3.5.1 – v3.6.5:** Real 404s, canonical URL, HTTPS and subdomain redirect corrections
- **v3.6.6:** `sitemap.xml` builder driven by route metadata, referenced from `robots.txt`
- **v5.2.0:** `News` wired into live routing; per-page `document.title`/meta description/canonical link; `baseUrl`
  sourced from `VITE_SITE_URL`; `sitemap.xml` malformed-entry and inverted-date fixes

### Styling & Layout

- **v3.1.1 – v3.1.3:** Responsive header, gradient background, sticky sidebar
- **v3.5.2:** Header/footer overlap fix
- **v4.0.0:** `@use`/`@forward` SCSS standards, `vendors/` directory for Bootstrap overrides
- **v4.1.0 – v4.1.1:** Responsive sidebar ordering hardened across breakpoints; `Header` consolidated
- **v4.1.3:** `HeaderMenu` collapse breakpoint moved from `xl` to `lg`
- **v5.2.0:** `vendors/bootstrap/styles/index.scss` completed its migration from `@import` to `@use`/`@forward`;
  top-level `ErrorBoundary` added for a friendly fallback on unhandled render errors

### Build, Tooling & Dependencies

- **v3.3.8:** Critical dependency vulnerability mitigated (Vitest 3, Vite 6)
- **v4.0.0:** Build target raised to `ES2023`; Junie integration
- **v4.0.1:** Vite upgraded `6.3.5` → `6.4.1`; Bootstrap Icons added
- **v4.0.2:** `@`-notation path aliases adopted; directory/stylesheet restructuring
- **v4.1.3:** CodeQL analysis workflow added
- **v4.2.0:** Images converted to `webp`
- **v5.0.0:** Five Claude Code slash commands added for release prep and test scaffolding; all open GitHub Dependabot
  alerts closed
- **v5.2.0:** `.github/workflows/build.yml` CI quality gate (lint/build/test on PR to `main`/`develop`) with an
  advisory `npm audit` step; first Vitest infrastructure and test coverage; `eslint-plugin-jsx-a11y` added

### Documentation

- **v3.2.6:** First `README`/release notes/change log
- **v3.6.7:** `ARCHITECTURE.md` created
- **v4.0.0:** `CHANGELOG.md`/`HISTORY.md` split introduced; templates created
- **v4.1.4:** `README.md` overhaul with quickstart and contribution guidance
- **v4.2.1:** `PACKAGES.md` added for dependency-funding transparency
- **v5.0.0:** `AGENTS.md`/`CLAUDE.md` cross-tool AI agent conventions and `CONTRIBUTING.md` added;
  `documentation/roadmap/` planning docs (`improvement-plan.md`, `improvement-plan-tasks.md`) and a
  `documentation/history/` per-version archive introduced
- **v5.2.0:** `documentation/recommendations/project-accessibility-checklist.md` WCAG AA baseline checklist added;
  a monthly dependency-update cadence documented in `AGENTS.md`'s Release Checklist; `HISTORY.md`'s "🚀 Future
  Roadmap Implications" section added

---

## 💡 Project Philosophy Evolution

### Placeholder Phase (v3.0.0 – v3.1.4)

**Focus:** Get Something Real in Front of Users

- Replace the under-construction carousel with an actual site shell
- Establish the visual identity (logos, gradient, sidebar imagery)

### Content Phase (v3.2.0 – v3.3.9)

**Focus:** Real Pages, Real Interactivity

- Adopt MDX as the content model
- Build out every core page, including the only data-submitting feature (Contact Us)
- Learn from an early security incident (a CAPTCHA dependency injecting suspicious code) by removing it and replacing it
  with a trusted implementation

### Correctness Phase (v3.4.0 – v3.6.9)

**Focus:** Behave Like a Real Multi-Page Site

- Fix routing so refreshes and direct links work, not just in-app navigation
- Get canonical URLs, redirects and the sitemap right for SEO
- Migrate to a maps library the project could build on long-term

### Standards Phase (v4.0.0 – v4.0.3)

**Focus:** Pay Down Structural Debt

- Align stylesheets, directory structure and imports with industry conventions
- Split release documentation into a current `CHANGELOG.md` and a narrative `HISTORY.md` for the legacy line

### Polish & Documentation Phase (v4.1.0 – v4.1.4)

**Focus:** Make the Project Easier to Work In

- Harden responsive layout behaviour across breakpoints
- Catch up on documentation (`README.md`, TSDoc) after a period of feature-focused work

### Housekeeping Phase (v4.2.0 – v4.2.3)

**Focus:** Consolidate Before the Next Redesign

- Optimise assets, reorganise recurring-event content by year and fix small correctness issues
- Keep dependencies and documentation current

### AI-Agent Process Phase (v5.0.0)

**Focus:** Make the Project Legible to AI Coding Agents

- Establish `AGENTS.md`/`CLAUDE.md` as the single source of truth for documentation, git workflow and release
  conventions, shared across tools
- Automate release-prep and test-scaffolding steps via Claude Code slash commands
- Turn ad-hoc improvement ideas into an evidence-backed, trackable roadmap (`documentation/roadmap/`)

---

## 📚 Key Learnings

### Architectural Insights

1. **Content Model Longevity:** The Page → Content → MDX pattern introduced in v3.2.0 has needed no structural
   change since — later work extended it (year-namespaced directories, a generic `Section` component) rather than
   replacing it
2. **Structural Debt Compounds:** Deferring the `@`-alias/directory-standards work until v4.0.0 – v4.0.2 meant a
   dedicated restructuring phase was needed later, rather than the convention being established from the start
3. **Server-Side Routing Correctness Matters Early:** Several `.htaccess` fixes (v3.5.0 – v3.6.5) were needed to get
   404 handling, canonical URLs and redirects right — client-side routing alone was not sufficient for a production
   static site

### Design Decisions

1. **MDX Over Plain Markdown:** Chosen in v3.2.0 specifically to allow embedding real React components inside content,
   not just formatted text
2. **A Dedicated Maps Migration:** Moving from `@react-google-maps` to `@vis.gl/react-google-maps` (v3.5.0) was a
   deliberate bet on a more actively maintained library, paying off with the per-instance map ID support added in v4.1.0
3. **Documentation Split by Audience:** `CHANGELOG.md` (current, technical) and `HISTORY.md` (narrative, full history)
   were split in v4.0.0 so the current release record stays short while the full story remains available
4. **Tool-Agnostic Agent Conventions:** `AGENTS.md` was introduced in v5.0.0 as the cross-tool source of truth, with
   `CLAUDE.md` kept as a Claude-Code-specific quick reference — so conventions hold regardless of which AI coding tool
   is in use
5. **Gate Before You Grow Coverage:** v5.2.0 added `build.yml`'s CI quality gate before a large test suite existed,
   so lint/build/test failures start blocking merges immediately rather than after a bigger, harder-to-enforce
   backlog accumulates

### Technical Evolution

1. **Security Response:** The v3.3.3 removal of a CAPTCHA dependency injecting suspicious code, followed by a
   from-scratch reimplementation in v3.3.6, shows a willingness to cut a dependency rather than work around a security
   problem
2. **Dependency Currency:** Regular, focused security-vulnerability patches (v3.3.8, v3.6.9, v4.0.1, v4.0.2, v4.2.2,
   v4.2.3) rather than large, infrequent upgrade batches
3. **Recurring-Content Pattern:** Year-namespaced directories for `WorldShoot2025`/`ClubShirts` (v4.1.2 – v4.2.1)
   establish a repeatable structure for future years' equivalent content, rather than a one-off fix

---

## 🚀 Future Roadmap Implications

Forward-looking implications this project's own history carries for Major Version 5's planned visual/structural
redesign and the standing work that precedes it:

1. **The Redesign Should Extend, Not Replace, the Content Model:** Per Key Learnings' Content Model Longevity insight,
   the Page → Content → MDX pattern has absorbed eight major/minor phases of change without a structural rewrite. The
   redesign should keep this contract intact and confine itself to layout and presentation, rather than re-litigating
   how content is authored
2. **Establish Redesign-Era Conventions from the Start:** Key Learnings' Structural Debt Compounds insight shows that
   deferring `@`-alias/directory-standards work until v4.0.0 forced a dedicated restructuring phase later. Any new
   code the redesign introduces should follow this project's existing feature-organised, path-aliased conventions from
   its first commit, not retrofit them afterwards
3. **Finish the Standing Foundation Gaps Before the Redesign Proper Begins:** Major Version 5's stated goal is to make
   the project legible to human and AI coding agents and modernise its dependency stack as groundwork ahead of the
   redesign. v5.2.0 closed most of this backlog in one release (CI quality gate, initial test coverage, accessibility
   linting, SEO metadata, error resilience) — see
   [`documentation/roadmap/improvement-plan.md`](documentation/roadmap/improvement-plan.md) for the remaining gaps
   (e.g. pre-existing `tsdoc/syntax` lint warnings) still being worked through before the redesign itself starts
4. **Keep the Security Response Pattern Ready:** The willingness to cut and replace a compromised dependency outright
   (v3.3.3) rather than patch around it, and the steady cadence of focused vulnerability fixes since, should carry
   into the redesign — a structural overhaul is exactly when a stale or newly-vulnerable dependency is easiest to
   silently carry forward unnoticed
5. **Keep Documentation Reverse-Synced as the Redesign Lands:** The `CHANGELOG.md`/`HISTORY.md` split (v4.0.0) and the
   tool-agnostic `AGENTS.md`/`CLAUDE.md` conventions (v5.0.0) only stay useful if every release keeps threading its
   changes through them — a redesign spanning several releases is exactly the scenario where that discipline is most
   at risk of lapsing

---

## 🎓 Conclusion

The HPSC Website has evolved from a single under-construction placeholder page into a full club website — covering
news, events, history, venues, membership and a working Contact Us form — while keeping a consistent, MDX-based
content architecture since v3.2.0. This evolution demonstrates a commitment to:

- **Incremental, Frequent Releases:** A steady cadence of small, focused versions rather than infrequent large rewrites
- **Correctness Before Polish:** Investing early in routing, redirect and SEO correctness (v3.5.0 – v3.6.9) before
  further feature work
- **Willingness to Cut and Replace:** Removing a compromised CAPTCHA dependency outright (v3.3.3) rather than working
  around it
- **Structural Debt Repayment:** A dedicated standards phase (v4.0.0 – v4.0.3) to align the codebase with industry
  conventions once it had grown enough to warrant it
- **Documentation as a First-Class Concern:** From the first `README`/changelog (v3.2.6) through the `CHANGELOG.md`/
  `HISTORY.md` split (v4.0.0) to the most recent `README.md` overhaul (v4.1.4)
- **Content Reuse for Recurring Events:** A repeatable, year-namespaced pattern for annual content (World Shoot, club
  shirts) established in v4.1.2 and extended since
- **Agent-Legible Process:** Formalising `AGENTS.md`/`CLAUDE.md` conventions and Claude Code slash commands in v5.0.0,
  so human and AI contributors alike follow the same documentation and release process
- **Quality Infrastructure Ahead of the Redesign:** A CI quality gate, initial automated test coverage and
  accessibility linting (v5.2.0), closing most of the improvement plan's foundation work before the planned
  visual/structural redesign begins

The architecture settled in v4.0.0 – v4.0.2 — feature-organised directories, path aliases and the Route → Page →
Content → MDX pattern from v3.2.0 — remains the foundation the project builds on today.
