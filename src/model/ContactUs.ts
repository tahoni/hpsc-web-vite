/**
 * ApidogModel, A Contact Us e-mail
 */
export interface ContactUs {
  /**
   * Message, The e-mail content
   */
  content: string;
  /**
   * E-mail address, The e-mail of the sender
   */
  email: string;
  /**
   * Name, The name of the sender
   */
  name: string;
  /**
   * Subject, The subject of the e-mail
   */
  subject: Subject;
}

/**
 * Subject, The subject of the e-mail
 */
export enum Subject {
  Complaints = "Complaints",
  General = "General",
  Suggestions = "Suggestions",
  Website = "Website",
}
