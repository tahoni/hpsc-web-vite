import { EmailContent } from "@/models/email/EmailContent";
import { Heading, Html, Img, Section } from "@react-email/components";
import { clubLogoAlt } from "@/constants/about/clubConstants";
import { ReactElement } from "react";

/**
 * Represents the properties required for the Contact Us email template.
 * This interface is used to define the structure of the data needed
 * to populate a Contact Us email.
 *
 * @interface ContactUsEmailTemplateProps
 * @property {EmailContent} emailMessage - The content of the email message
 * passed to the template. It typically includes text and other email-specific data.
 */
interface ContactUsEmailTemplateProps {
  emailMessage: EmailContent;
}

/**
 * A functional React component that generates an HTML template for a "Contact Us" email.
 * This template displays the sender's information (name and email) and
 * the details of the message (subject and content).
 *
 * @param {ContactUsEmailTemplateProps} props - The properties required to generate the email content,
 * including the sender's details and message information.
 * @returns {ReactElement} The rendered HTML content for the "Contact Us" email template.
 */
const ContactUsEmailTemplate = (
  props: ContactUsEmailTemplateProps,
): ReactElement => {
  return (
    <Html
      lang={"en"}
      style={{
        background: "linear-gradient(0deg, #9c9bfd, #e6e6ff)",
        fontFamily: "Noto Sans, Arial, Helvetica, sans-serif",
        color: "#130c07",
      }}
    >
      <Section>
        <Img
          src={"cid:club_logo"}
          alt={clubLogoAlt}
          height="100px"
          width="100px"
        />
        <Heading
          as={"h1"}
          style={{
            fontFamily:
              "Noto Sans Display, Noto Sans, Arial, Helvetica, sans-serif",
          }}
        >
          Contact Us
        </Heading>
      </Section>
      <br />
      <br />

      <br />
      <Section>
        <Heading
          as={"h2"}
          style={{
            fontFamily:
              "Noto Sans Display, Noto Sans, Arial, Helvetica, sans-serif",
          }}
        >
          Sender
        </Heading>
        <Heading as={"h3"}>Name</Heading>
        {props.emailMessage.name}
        <Heading as={"h3"}>E-mail address</Heading>
        {props.emailMessage.email}
      </Section>
      <br />
      <br />

      <br />
      <Section>
        <Heading
          as={"h2"}
          style={{
            fontFamily:
              "Noto Sans Display, Noto Sans, Arial, Helvetica, sans-serif",
          }}
        >
          Message
        </Heading>
        <Heading as={"h3"}>Subject</Heading>
        {props.emailMessage.subject}
        <Heading as={"h3"}>Content</Heading>
        {props.emailMessage.preview}
      </Section>
      <br />
      <br />
    </Html>
  );
};

export default ContactUsEmailTemplate;
