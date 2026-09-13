/**
 * Utility functions for HTML content manipulation and security.
 * Provides methods for sanitising HTML content and handling special
 * characters like non-breaking spaces and hyphens.
 */

import sanitizeHtml from "sanitize-html";

/**
 * Sanitises a given string value by removing any HTML tags and attributes.
 * This function ensures that the input string does not contain any
 * potentially unsafe or unwanted HTML content.
 *
 * @param value - The input string to be sanitised.
 * @returns A sanitised string with all HTML tags and attributes removed or
 *   an empty string if no input is provided.
 */
export const sanitizeValue = (value?: string): string => {
  return sanitizeHtml(value ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  });
};

/**
 * Replaces all hyphens in the input string with non-breaking hyphens (U+2011).
 *
 * @param value - The input string in which hyphens will be replaced.
 * @returns A new string hyphens replaced by non-breaking hyphens or
 *   an empty string if no input is provided.
 */
export const nonBreakingHyphens = (value?: string): string => {
  return value ? value.replace(/-/gm, "\u2011") : "";
};

/**
 * Replaces all spaces in a given string with non-breaking spaces.
 *
 * @param value - The input string where spaces will be replaced.
 * @returns A new string with spaces replaced by non-breaking spaces or
 *   an empty string if no input is provided.
 */
export const nonBreakingSpaces = (value?: string): string => {
  return value ? value.replace(/ /gm, "\u00A0") : "";
};
