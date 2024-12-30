import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactUsForm } from "../../forms";
import { PageTitle } from "../../components/Title/PageTitle.tsx";

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
