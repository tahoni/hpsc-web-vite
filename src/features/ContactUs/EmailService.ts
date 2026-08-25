import { EmailMessage } from "../../models/email/EmailMessage";
import { Email } from "@/models/email/Email";
import { contactUsEmail, noReplyEmail } from "@/constants/about/clubConstants";

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
      message: emailMessage.content,
      attachments: emailMessage.attachments,
    });
    return true;
  }
}
