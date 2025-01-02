import sanitizeHtml from "sanitize-html";

export const sanitizeValue = (value: string): string | undefined => {
  const sanitizedValue = sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });
  return sanitizedValue.trim() ? sanitizedValue.trim() : undefined;
};
