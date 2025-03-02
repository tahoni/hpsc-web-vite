import { ReactElement } from "react";
import { EmailMessage } from "../../model/EmailMessage.ts";
import { Heading, Html, Img, Section } from "@react-email/components";
import { baseUrl } from "../../constants/AppConstants.ts";

interface ContactUsEmailTemplateProps {
  emailMessage: EmailMessage;
}

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
          src={baseUrl + "/assets/images/logos/hpsc-logo.png"}
          alt={"HPSC Logo"}
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
        {props.emailMessage.content}
      </Section>
      <br />
      <br />
    </Html>
  );
};

export default ContactUsEmailTemplate;
