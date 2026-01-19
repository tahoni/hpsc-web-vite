import { EmailAttachment } from "./EmailAttachment.ts";

/**
 * Represents an email with properties such as sender, recipients, subject, message content,
 * and optional attachments.
 *
 * Properties:
 * - `from`: Sender's email address.
 * - `to`: Primary recipient's email address.
 * - `cc`: Optional list of CC recipient addresses.
 * - `subject`: Email subject.
 * - `message`: Email body content.
 * - `messageType`: Content type (e.g. "html" or "text").
 * - `attachments`: Optional list of attachments.
 * - `inlineAttachments`: Optional list of inline attachments.
 */
export class Email {
  private _from: string;
  private _to: string;
  private _cc?: string[];
  private _subject: string;
  private _message: string;
  private _messageType: string;
  private _attachments: EmailAttachment[];
  private _inlineAttachments: EmailAttachment[];

  /**
   * Creates a new Email instance with the specified details
   *
   * @param mail - Initialisation object for the email.
   * @param mail.from - Sender's email address.
   * @param mail.to - Primary recipient's email address.
   * @param mail.cc - Optional list of CC recipient addresses.
   * @param mail.subject - Email subject. Defaults to an empty string.
   * @param mail.message - Email body content. Defaults to an empty string.
   * @param mail.messageType - Content type (e.g. "html" or "text"). Defaults to "html".
   * @param mail.attachments - Optional list of attachments. Defaults to an empty array.
   * @param mail.inlineAttachments - Optional list of inline attachments. Defaults to an empty array.
   */
  constructor(mail: {
    from: string;
    to: string;
    cc?: string[];
    subject?: string;
    message?: string;
    messageType?: string;
    attachments?: EmailAttachment[];
    inlineAttachments?: EmailAttachment[];
  }) {
    this._from = mail.from;
    this._to = mail.to;
    this._cc = mail.cc;
    this._subject = mail.subject ?? "";
    this._message = mail.message ?? "";
    this._messageType = mail.messageType ?? "html";
    this._attachments = mail.attachments ?? [];
    this._inlineAttachments = mail.inlineAttachments ?? [];
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

  get inlineAttachments(): EmailAttachment[] {
    return this._inlineAttachments;
  }

  set inlineAttachments(value: EmailAttachment[]) {
    this._inlineAttachments = value;
  }
}
