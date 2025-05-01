import sanitizeHtml from "sanitize-html";

export const sanitizeValue = (value?: string): string => {
  return sanitizeHtml(value ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  });
};

export const nonBreakingHyphens = (value?: string): string => {
  return value ? value.replace(/\-/gm, "\u2011") : "";
};

export const nonBreakingSpaces = (value?: string): string => {
  return value ? value.replace(/ /gm, "\u00A0") : "";
};
