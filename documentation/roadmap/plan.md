# HPSC Web Improvement Plan

Generated: 2025-08-09 10:30 (local)

This plan synthesizes key goals and constraints from the repository’s documentation and configuration (README.md, ARCHITECTURE.md, vite.config.ts, package.json) and the HPSC Web Development Guidelines. It proposes concrete improvements organized by theme, with rationale and expected impact for each item.

## 1. Architecture and Code Quality

### 1.1 Enforce and extend strict TypeScript usage
- Actions:
  - Maintain strict mode across tsconfig and fix outstanding any/implicit types as found.
  - Introduce stricter lint rules where appropriate (no-floating-promises via typescript-eslint, consistent-type-imports).
  - Add types for external JSON/MDX data where used, leveraging module declarations if needed.
- Rationale: The project already runs strict TS with bundler moduleResolution. Tightening types reduces runtime bugs and improves IntelliSense.
- Impact: Fewer regressions, clearer contracts, easier refactors.

### 1.2 Stabilize component exports
- Actions:
  - Prefer named exports for React components and keep export surface stable per eslint react-refresh guidance.
  - Add index files for barrel exports where folders contain multiple components.
- Rationale: Hot refresh and tree-shaking work better with predictable exports.
- Impact: Better DX during dev and smaller bundles.

### 1.3 Directory and naming conventions audit
- Actions:
  - Validate adherence to conventions in ARCHITECTURE.md (PascalCase leaf dirs, snake_case CSS classes, camelCase variables).
  - Add lint-staged or custom script to flag deviations (optional).
- Rationale: Consistency speeds onboarding and reduces cognitive load.
- Impact: Uniform codebase; easier navigation.

## 2. Build, Tooling, and Performance

### 2.1 Vite build optimizations and manual chunk hygiene
- Actions:
  - Review vite.config.ts manualChunks switching; verify major vendors are properly grouped and update if new heavy deps are added.
  - Keep rollup-plugin-visualizer but gate auto-open in CI by environment variable (e.g., VISUALIZER_OPEN=false) or set open: false in CI.
- Rationale: Stable vendor chunking improves cacheability; avoiding auto-open prevents CI flakiness.
- Impact: Faster loads, reliable CI builds.

### 2.2 Sourcemap strategy
- Actions:
  - Consider enabling hidden sourcemaps in production for error tracking (hidden to users) if error monitoring is introduced.
- Rationale: Useful stack traces without exposing code maps in the web UI.
- Impact: Faster debugging of production issues.

### 2.3 MDX integration checks
- Actions:
  - Verify @mdx-js/rollup pre-enforcement is applied consistently; document authoring guidance for MDX content (frontmatter, components allowed).
- Rationale: Content authors need clear rules; ensures build consistency.
- Impact: Fewer MDX content build issues.

## 3. Styling and Theming (SCSS, Bootstrap)

### 3.1 Centralize Bootstrap overrides
- Actions:
  - Keep overrides in src/vendors/bootstrap/stylesheets/_custom.scss.
  - Document commonly changed variables and the mapping to CSS custom properties.
- Rationale: Predictable theming changes with minimal risk.
- Impact: Easier theme adjustments.

### 3.2 Sass module usage (@use)
- Actions:
  - Ensure all new stylesheets use @use with namespacing; avoid @import.
  - Maintain colors/variables in src/assets/stylesheets; provide palette token map and usage examples in docs.
- Rationale: Modern Sass module system prevents global leakage.
- Impact: Fewer style collisions and faster compiles.

### 3.3 Forms styling consistency
- Actions:
  - Audit _forms.scss and form components for consistent spacing, focus states, and validation styles matching Bootstrap 5.
- Rationale: Accessibility and UX consistency across forms.
- Impact: Better usability and visual consistency.

## 4. Content, Routing, and Sitemap

### 4.1 Route metadata integrity
- Actions:
  - Ensure coreRoutes (BaseRoutes.ts) maintain correct dateCreated/dateUpdated for sitemap.
  - Add a lightweight script or unit test that scans route metadata and warns on missing dates.
- Rationale: Sitemap priority and freshness rely on accurate metadata.
- Impact: Better SEO signals.

### 4.2 Base URL source of truth
- Actions:
  - Confirm baseUrl lives in src/constants/AppConstants (per guideline). Expose a single constant used by the sitemap builder and any canonical link tags.
- Rationale: Avoid mismatched hostnames in generated outputs.
- Impact: Correct links in sitemap and metadata.

### 4.3 MDX authoring guidance
- Actions:
  - Add a contributor note on how to add content under src/content/pages and posts, including directory structure and date conventions.
- Rationale: Lower barrier for content updates.
- Impact: Faster content iteration with fewer PR back-and-forths.

## 5. Accessibility (a11y) and SEO

### 5.1 Accessibility baseline
- Actions:
  - Define a checklist: semantic headings, focus outlines, colour contrast compliance (WCAG AA), ARIA landmarks, link purpose clarity.
  - Integrate an automated a11y check in dev (optional: axe-core in dev-only tests or playwright/axe in CI later).
- Rationale: Inclusive design and better UX.
- Impact: Reduced accessibility issues; improved usability.

### 5.2 SEO essentials
- Actions:
  - Ensure pages have unique titles, meta descriptions, and canonical URLs.
  - Validate robots.txt, sitemap.xml generation via npm run sitemap; document the redirect to public/sitemap.xml.
- Rationale: Improve search visibility and avoid duplicate content issues.
- Impact: Better discoverability and crawl efficiency.

## 6. Testing Strategy

### 6.1 Adopt Vitest for unit tests
- Actions:
  - Add minimal smoke tests for critical utilities and helpers.
  - Create a CI-friendly command npx vitest run and document usage.
- Rationale: Catch regressions early with low overhead.
- Impact: Confidence in changes without heavy setup.

### 6.2 Component testing (optional, phased)
- Actions:
  - When adding component tests, use @testing-library/react with jsdom environment. Introduce vitest.config.ts with test.environment = 'jsdom' if component testing expands.
- Rationale: React 19 compatibility and testing best practices.
- Impact: Reliable UI behaviour validation.

## 7. CI/CD and Release Hygiene

### 7.1 Lint and test in CI
- Actions:
  - Ensure CI pipeline runs npm ci, eslint, and npx vitest run.
  - Disable visualizer auto-open during CI (env gate).
- Rationale: Prevents regressions and CI noise.
- Impact: Stable pipeline and consistent code quality.

### 7.2 Release checklist
- Actions:
  - Create a release checklist template in documentation/templates and reference it from RELEASE_NOTES.md.
- Rationale: Repeatable, low-risk releases.
- Impact: Fewer missed steps during releases.

## 8. Security and Secrets Management

### 8.1 Environment variables
- Actions:
  - Document required env vars (GITHUB_TOKEN, GOOGLE_MAPS_API_KEY, RECAPTCHA_V2_SITE_KEY) in README and a .env.example without secrets.
  - Validate at app startup: log non-sensitive warnings if env-dependent features are disabled.
- Rationale: Clear setup for contributors; avoid silent feature failures.
- Impact: Faster setup, fewer bug reports stemming from missing keys.

### 8.2 Dependency audits
- Actions:
  - Run npm audit in CI (advisory-only; fail on high/critical where feasible).
  - Track heavy or risky packages (e.g., sanitize-html) and pin versions thoughtfully.
- Rationale: Reduce known vulnerabilities.
- Impact: Improved security posture.

## 9. Observability and Error Handling

### 9.1 Error boundaries
- Actions:
  - Ensure a top-level React error boundary around routes to catch rendering errors and show a friendly fallback.
- Rationale: Prevents white screens and aids diagnosis.
- Impact: Better resilience in production.

### 9.2 Optional logging integration
- Actions:
  - Evaluate lightweight client-side logging (console suppression in prod, optional remote logging). If adopted, enable hidden source maps.
- Rationale: Faster production issue triage.
- Impact: Shorter MTTR.

## 10. Developer Experience and Documentation

### 10.1 Contributor guide
- Actions:
  - Add CONTRIBUTING.md with setup, branching, lint/test/build expectations, and PR checklist.
- Rationale: Onboarding acceleration and consistent PR quality.
- Impact: Less review churn.

### 10.2 Architecture doc updates
- Actions:
  - Update ARCHITECTURE.md to reflect any new builders or routing changes and ensure screenshots/demos are referenced from documentation/.
- Rationale: Keep docs truthful and useful.
- Impact: Reduced confusion and outdated guidance.

## 11. Performance Budget and Media

### 11.1 Bundle and route-level performance
- Actions:
  - Use route-level code splitting where feasible (lazy() + suspense) for pages not critical to initial paint.
  - Monitor target/bundle-visualization.html after each release for growth; document thresholds.
- Rationale: Maintain fast initial load and TTI.
- Impact: Better perceived performance.

### 11.2 Images and assets
- Actions:
  - Audit images under public/assets/images; convert large static images to modern formats (WebP/AVIF) where supported.
  - Ensure responsive images and width/height attributes to avoid CLS.
- Rationale: Reduce bytes over the wire and layout shifts.
- Impact: Faster loads and improved Core Web Vitals.

---

## Roadmap and Prioritization

- Short-term (0–2 weeks):
  - CI gating for visualizer, CONTRIBUTING.md, .env.example, route metadata audit script, top-level ErrorBoundary, initial unit tests, image audit kickoff.
- Mid-term (2–6 weeks):
  - Accessibility baseline automation, sourcemap strategy + optional logging, route-level code splitting, MDX authoring guide, performance budgets.
- Long-term (6+ weeks):
  - Broader component tests with jsdom, dependency audit automation with policy, extended docs and demos, periodic architecture review.

## Acceptance Criteria

- docs/plan.md exists (this file) with clear themed sections and rationales.
- Aligns with current tech stack (React 19, Vite, TypeScript strict, Bootstrap 5, MDX) and repository constraints (moduleResolution bundler, no Node globals in browser code).
- Action items are concrete and feasible within the project’s conventions.
