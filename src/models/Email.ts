import { EmailAttachment } from "./EmailAttachment.ts";

/**
 * Represents an email with properties such as sender, recipients, subject, message content,
 * and optional attachments.
 */
export class Email {
  private _from: string;
  private _to: string;
  private _cc?: string[];
  private _subject: string;
  private _message: string;
  private _messageType: string;
  private _attachments: EmailAttachment[];

  /**
   * Initialises a new Email instance with the provided data.
   *
   * @constructor
   * @param email - Initialisation data for the email.
   *   - from: Sender's email address (required).
   *   - to: Primary recipient's email address (required).
   *   - cc: Optional list of CC recipient addresses.
   *   - subject: Email subject. Defaults to an empty string.
   *   - message: Email body content. Defaults to an empty string.
   *   - messageType: Content type (e.g., "html" or "text"). Defaults to "html".
   *   - attachments: Optional list of attachments. Defaults to an empty array.
   */
  constructor(email: {
    from: string;
    to: string;
    cc?: string[];
    subject?: string;
    message?: string;
    messageType?: string;
    attachments?: EmailAttachment[];
  }) {
    this._from = email.from;
    this._to = email.to;
    this._cc = email.cc;
    this._subject = email.subject ?? "";
    this._message = email.message ?? "";
    this._messageType = email.messageType ?? "html";
    this._attachments = email.attachments ?? [];
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get cc(): string[] | undefined {
    return this._cc;
  }

  set cc(value: string[]) {
    this._cc = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get messageType(): string {
    return this._messageType;
  }

  set messageType(value: string) {
    this._messageType = value;
  }

  get attachments(): EmailAttachment[] {
    return this._attachments;
  }

  set attachments(value: EmailAttachment[]) {
    this._attachments = value;
  }
}
