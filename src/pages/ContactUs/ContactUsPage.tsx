import React, { ReactElement } from "react";
import ContactUsContent
  from "../../content/pages/ContactUs/ContactUsContent.tsx";

const ContactUsPage = React.memo((): ReactElement => {
  return (
    <>
      <ContactUsContent />
    </>
  );
});

export default ContactUsPage;
