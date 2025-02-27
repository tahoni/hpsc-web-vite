import { ReactElement } from "react";
import { Heading, Hr, Html, Section } from "@react-email/components";
import { EmailContent } from "../../model/EmailContent.ts";

class ContactUsEmailTemplateProps extends EmailContent {}

const ContactUsEmailTemplate = (
  props: ContactUsEmailTemplateProps,
): ReactElement => {
  return (
    <Html lang={"en"} style={{ backgroundColor: "red" }}>
      <Heading as={"h1"}>Contact Us</Heading>
      <Hr />

      <Section>
        <Heading as={"h2"}>Sender</Heading>
        <Heading as={"h3"}>Name</Heading>
        {props.name}
        <Heading as={"h3"}>E-mail address</Heading>
        {props.email}
      </Section>
      <Hr />

      <Section>
        <Heading as={"h2"}>Message</Heading>
        <Heading as={"h3"}>Subject</Heading>
        {props.subject}
        <Heading as={"h3"}>Content</Heading>
        {props.content}
      </Section>
      <Hr />
    </Html>
  );
};

export default ContactUsEmailTemplate;
