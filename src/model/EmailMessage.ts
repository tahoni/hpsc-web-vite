import { EmailContent } from "./EmailContent.ts";
import { sanitizeValue } from "../utils/HtmlUtils.ts";

export class EmailMessage extends EmailContent {
  private _message: string;
  private _attachments: any[];

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

  get attachments(): any[] {
    return this._attachments;
  }

  set attachments(value: any[]) {
    this._attachments = value;
  }
}
