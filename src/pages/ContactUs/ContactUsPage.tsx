import React, { ReactElement } from "react";

const ContactUsForm = React.lazy(
  () => import("../../forms/ContactUs/ContactUsForm.tsx"),
);

/**
 * A React functional component memoized with React.memo to optimize rendering.
 * Represents the "Contact Us" page, which includes the ContactUsForm component.
 *
 * The component is designed to render a standalone form for user inquiries
 * and feedback within the Contact Us section of the application.
 *
 * @constant {React.MemoExoticComponent<React.FC>} ContactUsPage
 */
const ContactUsPage = React.memo((): ReactElement => {
  return (
    <>
      <ContactUsForm />
    </>
  );
});

export default ContactUsPage;
