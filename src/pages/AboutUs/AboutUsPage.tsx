import React from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { AboutUsContent } from "../../content/pages";

export const AboutUsPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="About Us" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AboutUsContent />
        </Col>
      </Row>
    </>
  );
});
