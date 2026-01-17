import { sanitizeValue } from "@/utils/htmlUtils";
import { EmailContent } from "./EmailContent";
import { EmailAttachment } from "./EmailAttachment";

/**
 * Represents an email message, extending the base functionality of EmailContent.
 * Provides additional support for an email's message body and attachments.
 */
export class EmailMessage extends EmailContent {
  private _message: string;
  private _attachments: EmailAttachment[] = [];

  /**
   * Creates a new EmailMessage instance.
   *
   * @param email - Initialisation object.
   * @param email.name - Optional sender display name. Defaults to an empty string.
   * @param email.email - Optional sender email address. Defaults to an empty string.
   * @param email.subject - Optional message subject. Defaults to an empty string.
   * @param email.content - Optional content/preview text. Defaults to an empty string.
   * @param email.message - Optional message body. Leading/trailing whitespace is trimmed. Defaults to an empty string.
   */
  constructor(email: {
    name?: string;
    email?: string;
    subject?: string;
    content?: string;
    message?: string;
  }) {
    super({ ...email });
    this._message = (email.message ?? "").trim();
    this._attachments = [];
  }

  override isValid(): boolean {
    return super.isValid() ? this._message !== "" : false;
  }

  get message(): string | undefined {
    return this._message;
  }

  set message(value: string) {
    this._message = sanitizeValue(value).trim();
  }

  get attachments(): EmailAttachment[] {
    return this._attachments;
  }

  set attachments(value: EmailAttachment[]) {
    this._attachments = value;
  }
}
