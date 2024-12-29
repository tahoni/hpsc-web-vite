export interface ContactUs {
  name: string;
  email: string;
  content: string;
  subject: Subject;
}

export enum Subject {
  Complaints = "Complaints",
  General = "General",
  Suggestions = "Suggestions",
  Website = "Website",
}
