import { sanitizeValue } from "@/utils/htmlUtils.ts";

/**
 * Represents the content of an email, including sender details, subject, and message preview.
 *
 * Properties:
 * - `name`: Sender display name. The value is sanitised and trimmed.
 * - `email`: Sender email address. The value is sanitised and trimmed.
 * - `subject`: Email subject. The value is sanitised and trimmed.
 * - `preview`: Email preview. The value is sanitised and trimmed.
 */
export class EmailContent {
  private _name: string = "";
  private _email: string = "";
  private _subject: string = "";
  private _preview: string = "";

  /**
   * Creates a new EmailContent instance with the specified optional details.
   *
   * @param content - Optional initialisation object for the email content.
   * @param content.name - Sender display name. Defaults to an empty string.
   *   the value is sanitised and trimmed.
   * @param content.email - Sender email address. Defaults to an empty string.
   *   the value is sanitised and trimmed.
   * @param content.subject - Email subject. Defaults to an empty string.
   *   the value is sanitised and trimmed.
   * @param content.preview - Email preview. Defaults to an empty string.
   *   the value is sanitised and trimmed.
   */
  constructor(content?: {
    name?: string;
    email?: string;
    subject?: string;
    preview?: string;
  }) {
    if (content) {
      this._name = sanitizeValue(content.name ?? "").trim();
      this._email = sanitizeValue(content.email ?? "").trim();
      this._subject = sanitizeValue(content.subject ?? "").trim();
      this._preview = sanitizeValue(content.preview ?? "").trim();
    }
  }

  /**
   * Checks if the necessary properties: name, email, subject, and preview
   * are valid and non-empty.
   *
   * @return Returns true if all required properties are non-empty, otherwise false.
   */
  isValid(): boolean {
    return (
      this._name !== "" &&
      this._email !== "" &&
      this._subject !== "" &&
      this._preview !== ""
    );
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = sanitizeValue(value).trim();
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = sanitizeValue(value).trim();
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = sanitizeValue(value).trim();
  }

  get preview(): string {
    return this._preview;
  }

  set preview(value: string) {
    this._preview = sanitizeValue(value).trim();
  }
}
