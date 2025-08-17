HPSC Web (Vite + React) – Development Guidelines

Audience: Advanced contributors to this repository. This document captures project-specific practices that are not obvious from generic Vite/React knowledge.

1. Build and Configuration
- Toolchain overview
  - Bundler: Vite (vite.config.ts)
  - Language: TypeScript (strict; see tsconfig.app.json)
  - UI: React 19, SCSS (Sass), Bootstrap 5 with custom theming under src\vendors\bootstrap\stylesheets
  - MDX: @mdx-js/rollup integrated directly into Vite plugins
  - Linting: ESLint with @typescript-eslint and react-refresh plugin (.eslintrc.cjs)
- Building locally
  - Install dependencies: npm ci (preferred for reproducible builds) or npm install
  - Dev server: npm run dev (default host/port) or npm run host to bind to hpsc.local (ensure your hosts/DNS maps hpsc.local appropriately)
  - Production build: npm run build
    - This runs: tsc -b && vite build
    - Output goes to dist/
    - Build target is ESNext; sourcemaps disabled; minification enabled
    - Manual chunking groups some node_modules packages into stable vendor chunks (see vite.config.ts manualChunks switch for @fortawesome, @mdx-js, @rjsf, @fullcalendar, react-google-recaptcha, @vis.gl)
    - rollup-plugin-visualizer is always enabled with open: true and writes target/bundle-visualization.html. In CI/headless environments it may attempt to open a browser; if this is undesirable, temporarily comment out the plugin or change open to false when running CI builds
- TypeScript configuration highlights
  - Bundler moduleResolution and moduleDetection: "bundler" and "force"; avoid path aliases unless you also configure Vite resolve.alias consistently
  - Strictness: strict true with additional no* rules (noImplicitAny, noUncheckedIndexedAccess, noUncheckedSideEffectImports, etc.). Expect to fix type issues rather than suppress them
  - JSX: react-jsx (automatic runtime)
- SCSS and Bootstrap theming
  - Project uses Sass modules (@use) with a colors module at src\assets\stylesheets\_colors.scss and variables at src\assets\stylesheets\_variables.scss
  - Bootstrap overrides live in src\vendors\bootstrap\stylesheets\_custom.scss. Example: sets CSS custom properties and SASS variables for body, headings, borders, links, and focus styles, e.g.:
    @use "../../../assets/stylesheets/colors" as hpsc-colors;
    $body-color: hpsc-colors.$club-butterscotch-5;
  - When adjusting Bootstrap theme variables, prefer editing _custom.scss or introducing new partials under that vendor folder and ensure Vite includes them where needed
- Content and routes
  - Static route metadata originates from src\config\Routes\BaseRoutes.ts (PageMapping instances with created/updated dates). The sitemap builder (builders\RoutesSitemap.ts) consumes coreRoutes
  - MDX support is enabled globally; React plugin includes .mdx files (react({ include: /\.(jsx|js|mdx|tsx|ts)$/ }))
- Sitemap generation
  - Command: npm run sitemap (uses tsx to execute builders/RoutesSitemap.ts)
  - Output is printed to stdout; redirect to a file if needed: npm run sitemap > target/sitemap.xml
  - baseUrl is read from src\constants\AppConstants; keep it current for correct hostnames in sitemap

2. Testing
- Framework: Vitest (already installed in devDependencies). No project-specific config file is required for basic unit tests
- Running tests
  - Ad-hoc: npx vitest run (CI-friendly, headless)
  - Watch/UI mode: npx vitest (interactive)
  - If you prefer npm scripts, you can add these locally while developing (not committed unless agreed):
    "test": "vitest",
    "test:run": "vitest run"
- Test file discovery
  - Default Vitest patterns apply; any file matching **/*.test.{ts,tsx,js,jsx} will be picked up (e.g., tests/basic.test.ts or src/__tests__/foo.test.ts)
- DOM and React component tests
  - For pure logic tests, the default environment is fine
  - For DOM/React component tests, run with jsdom: npx vitest run --environment=jsdom
  - Alternatively, introduce a vitest.config.ts with test.environment = 'jsdom' if the project adopts component tests broadly
  - React 19 note: prefer @testing-library/react with Vitest for component testing; install it as a devDependency when you start adding component tests
- Example: creating and running a simple test
  - Create a file tests/basic.test.ts with contents:
    import { describe, it, expect } from 'vitest';
    describe('sanity', () => {
      it('adds numbers correctly', () => {
        expect(1 + 2).toBe(3);
      });
      it('string contains substring', () => {
        expect('hpsc-web-vite').toContain('vite');
      });
    });
  - Run: npx vitest run
  - Expected output: 1 test file, 2 tests passed in under a second
  - After verifying, you can delete tests/basic.test.ts if it was purely illustrative
- Lint before commit
  - Run eslint with: npm run lint
  - The config enforces recommended TS and React Hooks rules and react-refresh/only-export-components (warn). Keep exports of React components stable; prefer named exports of components

3. Additional Development Notes
- React 19 stack
  - Ensure all libraries you add are compatible with React 19; the project uses react-router v7, react-bootstrap 2.x, and @mdx-js 3
- Routing and content dates
  - coreRoutes define dateCreated/dateUpdated. If you add routes or pages, remember to set these dates; sitemap priority is derived (Home gets 1.0, others 0.5)
- Bundle analysis
  - On build, bundle-visualization.html is generated under target/ and configured to auto-open. Use it to keep vendor chunk boundaries healthy and notice bloat early
- Styling and forms
  - Shared SCSS variables live under src\assets\stylesheets (colors, variables, forms). Prefer using the Sass module syntax (@use) and namespaced variables. Avoid @import to keep the graph explicit
- Configuration hygiene
  - Because TypeScript is strict and moduleResolution is 'bundler', avoid untyped JSON imports or path hacks without updating Vite resolve.alias and TS config together
  - Do not rely on Node.js globals (e.g., __dirname) in browser code; use Vite import.meta.env and standard web APIs
- Generating assets during build
  - If you add builders (scripts under builders/ using tsx), keep their outputs directed to target/ or dist/ and avoid side effects in the main build unless intentional

4. Quick Setup Checklist for New Contributors
- Node LTS installed
- npm ci
- npm run dev (or npm run host for hpsc.local)
- Optional: run tests with npx vitest run
- Optional: build and inspect target/bundle-visualization.html after npm run build

Appendix: Verified Test Run
- A sample test (tests/basic.test.ts) was created and executed during preparation of this guide with npx vitest run; it passed (2 tests). The sample was then removed to keep the repo clean. You can recreate it using the snippet above.
