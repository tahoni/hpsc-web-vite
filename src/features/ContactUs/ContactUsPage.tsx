import React, { ReactElement } from "react";

const ContactUsForm = React.lazy(() => import("./ContactUsForm"));

/**
 * A React functional component memoized with React.memo to optimise rendering.
 * Represents the "Contact Us" page, which includes the ContactUsForm component.
 *
 * The component is designed to render a standalone form for user inquiries
 * and feedback within the Contact Us section of the application.
 *
 * @returns {ReactElement} The rendered JSX for the ContactUsPage, which includes the ContactUsContent component.
 */
const ContactUsPage: React.MemoExoticComponent<() => ReactElement> = React.memo(
  (): ReactElement => {
    return (
      <>
        <ContactUsForm />
      </>
    );
  },
);

export default ContactUsPage;
