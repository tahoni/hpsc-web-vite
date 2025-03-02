import { EmailMessage } from "../model/EmailMessage.ts";
import { Email } from "../model/Email.ts";
import {
  contactUsEmail,
  noReplyEmail,
} from "../constants/about/ClubConstants.ts";

export class EmailService {
  // TODO: call back-end
  async sendEmail(emailMessage: EmailMessage): Promise<boolean> {
    new Email({
      from: noReplyEmail,
      to: contactUsEmail,
      subject: emailMessage.subject,
      message: emailMessage.message,
      attachments: emailMessage.attachments,
    });
    return true;
  }
}
