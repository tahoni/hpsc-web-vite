import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { ContactUsForm } from "../../forms";

export const ContactUsPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Contact Us" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactUsForm />
        </Col>
      </Row>
    </>
  );
});
