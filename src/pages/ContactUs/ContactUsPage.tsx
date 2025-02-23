import React, { ReactElement } from "react";

const ContactUsForm = React.lazy(() => import("../../forms/ContactUs/ContactUsForm.tsx"));

const ContactUsPage = React.memo((): ReactElement => {
  return (
    <>
      <ContactUsForm />
    </>
  );
});

export default ContactUsPage;
