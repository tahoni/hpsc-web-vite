import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const AboutUsContent = React.lazy(() => import("../../content/pages/AboutUs/AboutUsContent.tsx"));

const AboutUsPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="About Us" />
        </Col>
      </Row>
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          <Col>
            <AboutUsContent />
          </Col>
        </Row>
      </Suspense>
    </>
  );
});

export default AboutUsPage;
