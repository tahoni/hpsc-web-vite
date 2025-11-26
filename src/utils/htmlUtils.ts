import sanitizeHtml from "sanitize-html";

/**
 * @packageDocumentation
 * Utility functions for HTML content manipulation and security.
 * Provides methods for sanitising HTML content and handling special
 * characters like non-breaking spaces and hyphens.
 */

/**
 * Sanitises a given string value by removing any HTML tags and attributes.
 * This function ensures that the input string does not contain any
 * potentially unsafe or unwanted HTML content.
 *
 * @param {string} [value] - The input string to be sanitised. Defaults to an empty string if not provided.
 * @returns {string} - A sanitised string with all HTML tags and attributes removed.
 */
export const sanitizeValue = (value?: string): string => {
  return sanitizeHtml(value ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  });
};

/**
 * Replaces all hyphens in the input string with non-breaking hyphens (U+2011).
 * If no input is provided returns an empty string.
 *
 * @param {string} [value] - The input string in which hyphens will be replaced.
 * @returns {string} The modified string with non-breaking hyphens or an empty string if no input is provided.
 */
export const nonBreakingHyphens = (value?: string): string => {
  return value ? value.replace(/-/gm, "\u2011") : "";
};

/**
 * Replaces all spaces in a given string with non-breaking spaces.
 *
 * This function takes an optional string input and replaces every occurrence
 * of a space character with a non-breaking space character (`\u00A0`). If no
 * value is provided, an empty string is returned.
 *
 * @param {string} [value] - The input string where spaces will be replaced.
 * @returns {string} A new string with spaces replaced by non-breaking spaces or
 * an empty string if no input is provided.
 */
export const nonBreakingSpaces = (value?: string): string => {
  return value ? value.replace(/ /gm, "\u00A0") : "";
};
