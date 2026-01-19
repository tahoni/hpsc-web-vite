import { sanitizeValue } from "@/utils/htmlUtils.ts";
import { EmailContent } from "./EmailContent.ts";
import { EmailAttachment } from "./EmailAttachment.ts";

/**
 * Represents an email message, extending the base functionality of EmailContent.
 * Provides additional support for an email's message body and attachments.
 */
export class EmailMessage extends EmailContent {
  private _message: string;
  private _attachments: EmailAttachment[] = [];
  private _inlineAttachments: EmailAttachment[] = [];

  /**
   * Creates a new EmailMessage instance.
   *
   * @param message - Initialisation object for the email message.
   */
  constructor(message: {
    name?: string;
    email?: string;
    subject?: string;
    preview?: string;
    message?: string;
  }) {
    super({ ...message });
    this._message = (sanitizeValue(message.message) ?? "").trim();
    this._attachments = [];
    this._inlineAttachments = [];
  }

  /**
   * Checks if the necessary properties: name, email, subject, preview, and message
   * are valid and non-empty.
   *
   * @return Returns true if all required properties are non-empty, otherwise false.
   */
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

  get inlineAttachments(): EmailAttachment[] {
    return this._inlineAttachments;
  }

  set inlineAttachments(value: EmailAttachment[]) {
    this._inlineAttachments = value;
  }
}
