import sanitizeHtml from "sanitize-html";

export const sanitizeValue = (value?: string): string => {
  const sanitizedValue = sanitizeHtml(value ?? "", {
    allowedTags: [],
    allowedAttributes: {},
  });
  return sanitizedValue.trim() ?? "";
};

export const clearValue = (value: string, clearValue?: any): string => {
  return value && value.length ? value : clearValue;
};
