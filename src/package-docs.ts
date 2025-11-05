/**
 * @packageDocumentation
 *
 * HPSC Web (Vite + React) application
 *
 * This package contains the web frontend for the HPSC project, built with:
 * - Vite (bundler)
 * - TypeScript (strict mode)
 * - React 19 with JSX (automatic runtime)
 * - SCSS/Sass with Bootstrap 5 theming
 * - MDX support via @mdx-js integrated into Vite
 *
 * Build and Development
 * - Install dependencies: `npm ci` (preferred) or `npm install`
 * - Start dev server: `npm run dev` (or `npm run host` for hpsc.local)
 * - Production build: `npm run build` (runs `tsc -b && vite build`)
 * - Sitemap generation: `npm run sitemap` (outputs to stdout)
 *
 * Testing
 * - Framework: Vitest
 * - Run tests: `npx vitest run` (headless) or `npx vitest` (watch/UI)
 * - For DOM/React tests use jsdom: `npx vitest run --environment=jsdom`
 *
 * Linting
 * - Run ESLint: `npm run lint`
 * - Enforces strict TypeScript and React hooks rules
 *
 * Notes
 * - TypeScript is configured with `moduleResolution: "bundler"` and strict type checks
 * - Avoid path alias drift unless synchronised with Vite resolve.alias and tsconfig
 * - Do not rely on Node.js globals in browser code; use Vite's `import.meta.env`
 *
 * @remarks
 * For project-specific conventions, see the repository documentation:
 * - README.md for an overview
 * - The development guidelines under the "HPSC Web (Vite + React) – Development Guidelines"
 *   describe build, styling, theming, routes, sitemap, and testing practices.
 *
 * @see README.md
 * @see ARCHITECTURE.md
 * @see vite.config.ts
 * @see tsconfig.app.json
 * @see src\\vendors\\bootstrap\\stylesheets\\_custom.scss
 */

// This file exists solely to provide package-level TSDoc. It has no runtime side effects.
export {};
