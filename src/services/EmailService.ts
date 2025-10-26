import { EmailMessage } from "../models/EmailMessage.ts";
import { Email } from "../models/Email.ts";
import {
  contactUsEmail,
  noReplyEmail,
} from "../constants/about/ClubConstants.ts";

/**
 * The EmailService class provides functionality for sending emails.
 * It includes methods to handle email-related operations.
 */
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
