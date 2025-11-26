import { sanitizeValue } from "@/utils/htmlUtils.ts";

/**
 * Represents the content of an email, including sender details, subject, and message content.
 */
export class EmailContent {
  private _name: string = "";
  private _email: string = "";
  private _subject: string = "";
  private _content: string = "";

  /**
   * Creates a new EmailContent instance.
   *
   * @constructor
   * @param message - Optional initialisation object.
   * @param message.name - Sender display name. Defaults to an empty string; value is sanitised and trimmed.
   * @param message.email - Sender email address. Defaults to an empty string; value is sanitised and trimmed.
   * @param message.subject - Email subject. Defaults to an empty string; value is sanitised and trimmed.
   * @param message.content - Email content/body. Defaults to an empty string; value is sanitised and trimmed.
   */
  constructor(message?: {
    name?: string;
    email?: string;
    subject?: string;
    content?: string;
  }) {
    if (message) {
      this._name = sanitizeValue(message.name ?? "").trim();
      this._email = sanitizeValue(message.email ?? "").trim();
      this._subject = sanitizeValue(message.subject ?? "").trim();
      this._content = sanitizeValue(message.content ?? "").trim();
    }
  }

  isValid(): boolean {
    console.log("emailMessage", this);
    return (
      this._name !== "" &&
      this._email !== "" &&
      this._subject !== "" &&
      this._content !== ""
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

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = sanitizeValue(value).trim();
  }
}
