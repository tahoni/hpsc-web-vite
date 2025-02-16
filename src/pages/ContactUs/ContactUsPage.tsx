import React, { ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";
import { Loader } from "@tahoni/tahoni-lib-react";

const ContactUsForm = React.lazy(() => import("../../forms/ContactUs/ContactUsForm.tsx"));

const ContactUsPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Contact Us" />
        </Col>
      </Row>
      <Suspense fallback={<Loader isLoading={true} key={"contactUsPage"} />}>
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
