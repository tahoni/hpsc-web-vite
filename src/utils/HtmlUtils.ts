import sanitizeHtml from "sanitize-html";

export const sanitizeValue = (value: string): string => {
  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });
};
