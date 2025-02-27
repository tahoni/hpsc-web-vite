import { sanitizeValue } from "../utils/HtmlUtils.ts";

export class EmailContent {
  name: string;
  email: string;
  subject: string;
  content: string;

  constructor(
    name?: string,
    email?: string,
    subject?: string,
    content?: string,
  ) {
    this.name = sanitizeValue(name).trim();
    this.email = sanitizeValue(email).trim();
    this.subject = sanitizeValue(subject).trim();
    this.content = sanitizeValue(content).trim();
  }
}
