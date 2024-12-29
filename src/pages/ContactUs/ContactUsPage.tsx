import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactUs } from "../../forms/json/pages/ContactUs.tsx";

export const ContactUsPage = React.memo((): ReactElement => {
  return (
    <Row>
      <Col>
        <ContactUs />
      </Col>
    </Row>
  );
});
