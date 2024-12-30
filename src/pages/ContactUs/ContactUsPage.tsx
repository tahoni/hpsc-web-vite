import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactUsForm } from "../../forms";

export const ContactUsPage = React.memo((): ReactElement => {
  return (
    <Row>
      <Col>
        <ContactUsForm />
      </Col>
    </Row>
  );
});
