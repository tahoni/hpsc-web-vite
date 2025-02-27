import sanitizeHtml from "sanitize-html";

export const sanitizeValue = (value?: string): string => {
  const sanitizedValue = sanitizeHtml(value ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  });
  return sanitizedValue.trim() ?? "";
};
