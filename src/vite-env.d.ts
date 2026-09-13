/**
 * TypeScript type definitions for the Vite environment.
 *
 * This file provides:
 * - Reference to standard Vite client types (import.meta.env, etc.).
 * - Ambient module declarations for SCSS files, allowing them to be imported
 *   directly into TypeScript files (handling both standard and CSS Module styles).
 */

/// <reference types="vite/client" />

/**
 * Type definitions for SCSS file imports.
 *
 * This module declaration allows TypeScript to process imports of `.scss` files.
 * The exported content is typed as a key-value dictionary of strings, typically
 * representing class names mapped to their final string values (or themselves).
 */
declare module "*.scss" {
  export const content: { [className: string]: string };
  export default content;
}

/**
 * Type definitions for SCSS Module imports.
 *
 * This declaration specifically handles `.module.scss` files, which are treated as
 * CSS Modules. It ensures that imports return an object where keys are the original
 * class names and values are the locally scoped, generated class names.
 */
declare module "*.module.scss" {
  export const content: { [className: string]: string };
  export default content;
}

/**
 * Type definitions for this project's Vite env variables (`VITE_`-prefixed, exposed via
 * `import.meta.env`). Keep this in sync with `.env.example`, which documents each variable's
 * purpose and where to obtain a real value.
 */
interface ImportMetaEnv {
  /** The URL of the website. */
  readonly VITE_SITE_URL: string;
  /** Whether to show breakpoints in the UI; compare against the string `"true"`. */
  readonly VITE_SHOW_BREAKPOINTS: string;
  /** reCAPTCHA v2 site key for the Contact Us form's Captcha component. */
  readonly VITE_RECAPTCHA_V2_SITE_KEY: string;
  /** Google Maps API key; without it the venue map does not render. */
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
  // Add other env variables here as needed...
}

/**
 * Augments Vite's built-in `ImportMeta` (from `vite/client`) so that `import.meta.env` is typed
 * against this project's {@link ImportMetaEnv} instead of the generic `Record<string, string>`.
 */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
