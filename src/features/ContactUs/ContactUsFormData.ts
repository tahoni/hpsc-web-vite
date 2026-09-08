/**
 * Represents the data structure for a Contact Us form.
 *
 * This interface defines the properties of the form data, which may include
 * optional fields for user information, the subject of the message, the message content,
 * and captcha validation.
 */
export interface ContactUsFormData {
  name?: string;
  email?: string;
  subject?: string;
  content?: string;
  captcha?: boolean;
}
