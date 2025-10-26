/**
 * @packageDocumentation
 *
 * This module contains constants related to CAPTCHA functionality used throughout the application.
 *
 * These constants define properties such as:
 * - Google reCAPTCHA v2 site key used for bot protection
 * - Any other CAPTCHA-related configuration values
 *
 * These constants are sourced from environment variables to allow for different values
 * across development, testing, and production environments.
 */

export const reCaptchaV2SiteKey: string = import.meta.env
  .VITE_RECAPTCHA_V2_SITE_KEY;
