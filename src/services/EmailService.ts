import { Email } from "../model/Email.ts";

export const sendEmail = (email: Email): boolean => {
  console.log("email", email);
  return email.isValid();
};
