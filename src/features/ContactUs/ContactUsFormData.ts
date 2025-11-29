/**
 * Represents the data structure for a Contact Us form.
 *
 * This interface defines the properties of the form data, which may include
 * optional fields for user information, the subject of the message, the message content,
 * and captcha validation.
 *
 * @prop {string} name - The full name of the person submitting the form.
 * @prop {string} email - The email address of the person submitting the form.
 * @prop {string} subject - The subject of the message.
 * @prop {string} content - The main body text of the message.
 * @prop {boolean} captcha - Indicates whether the CAPTCHA challenge has been solved.
 */
export interface ContactUsFormData {
  name?: string;
  email?: string;
  subject?: string;
  content?: string;
  captcha?: boolean;
}
