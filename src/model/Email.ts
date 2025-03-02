import { EmailMessage } from "./EmailMessage.ts";
import { sanitizeValue } from "../utils/HtmlUtils.ts";

export class Email extends EmailMessage {
  private _message: string;

  constructor(email: {
    name?: string;
    email?: string;
    subject?: string;
    content?: string;
    message?: string;
  }) {
    super({ ...email });
    this._message = (email.message ?? "").trim();
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
}
