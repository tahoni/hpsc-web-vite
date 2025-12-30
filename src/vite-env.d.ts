/**
 * TypeScript type definitions for the Vite environment.
 *
 * This file provides:
 * - Reference to standard Vite client types (import.meta.env, etc.).
 * - Ambient module declarations for SCSS files, allowing them to be imported
 *   directly into TypeScript files (handling both standard and CSS Module styles).
 *
 * @module
 */

/// <reference types="vite/client" />

/**
 * Type definitions for SCSS file imports.
 *
 * This module declaration allows TypeScript to process imports of `.scss` files.
 * The exported content is typed as a key-value dictionary of strings, typically
 * representing class names mapped to their final string values (or themselves).
 *
 * @module *.scss
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
 *
 * @module *.module.scss
 */
declare module "*.module.scss" {
  export const content: { [className: string]: string };
  export default content;
}
