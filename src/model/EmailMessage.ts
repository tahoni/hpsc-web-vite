import { sanitizeValue } from "../utils/HtmlUtils.ts";

export class EmailMessage {
  name: string;
  email: string;
  subject: string;
  content: string;

  constructor(name: string, email: string, subject: string, content: string) {
    this.name = (sanitizeValue(name) ?? "").trim();
    this.email = (sanitizeValue(email) ?? "").trim();
    this.subject = (sanitizeValue(subject) ?? "").trim();
    this.content = (sanitizeValue(content) ?? "").trim();
  }

  isValid(): boolean {
    return (
      this.name.trim() !== "" &&
      this.email.trim() !== "" &&
      this.subject.trim() !== "" &&
      this.content.trim() !== ""
    );
  }
}
