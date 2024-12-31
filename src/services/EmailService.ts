import { EmailMessage } from "../model/EmailMessage.ts";

export const sendEmail = (email: EmailMessage): boolean => {
  return email.isValid();
};
