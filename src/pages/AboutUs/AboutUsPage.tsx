import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";
import { Loader } from "@tahoni/tahoni-lib-react";

const AboutUsContent = React.lazy(() => import("../../content/pages/AboutUs/AboutUsContent.tsx"));

const AboutUsPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="About Us" />
        </Col>
      </Row>
      <Suspense fallback={<Loader isLoading={true} key={"aboutUsPage"} />}>
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
