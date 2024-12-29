import React, { ReactElement } from "react";
import { ContactUs } from "./pages/ContactUs.tsx";

export const ContactUsForm = React.memo((): ReactElement => {
  return <ContactUs />;
});
