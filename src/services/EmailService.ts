import { EmailMessage } from "../model/EmailMessage.ts";

export const sendEmail = (email: EmailMessage): boolean => {
  if (!email.isValid()) {
    return false;
  }
  return true;
};
