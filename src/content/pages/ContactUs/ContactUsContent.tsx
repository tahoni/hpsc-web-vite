import React, { ReactElement } from "react";
import ContactUsForm from "../../../forms/ContactUs/ContactUsForm.tsx";

const ContactUsContent = React.memo((): ReactElement => {
  return (
    <>
      <ContactUsForm />
    </>
  );
});

export default ContactUsContent;
