import React, { ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const ContactUsForm = React.lazy(() => import("../../forms/ContactUs/ContactUsForm.tsx"));

const ContactUsPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Contact Us" />
        </Col>
      </Row>
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          <Col>
            <ContactUsForm />
          </Col>
        </Row>
      </Suspense>
    </>
  );
});

export default ContactUsPage;
