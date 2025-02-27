import { EmailContent } from "./EmailContent.ts";

export class EmailMessage extends EmailContent {
  constructor(
    name?: string,
    email?: string,
    subject?: string,
    content?: string,
  ) {
    super(name, email, subject, content);
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
