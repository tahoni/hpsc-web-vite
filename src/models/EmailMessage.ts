import { EmailContent } from "./EmailContent.ts";
import { sanitizeValue } from "../utils/HtmlUtils.ts";
import { EmailAttachment } from "./EmailAttachment.ts";

/**
 * Represents an email message, extending the base functionality of EmailContent.
 * Provides additional support for an email's message body and attachments.
 */
export class EmailMessage extends EmailContent {
  private _message: string;
  private _attachments: EmailAttachment[] = [];

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
