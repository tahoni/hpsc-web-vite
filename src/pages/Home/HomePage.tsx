import React from "react";
import { Col, Row } from "react-bootstrap";
import { HomeContent } from "../../content";

export const HomePage = React.memo(() => {
  return (
    <Row>
      <Col>
        <HomeContent />
      </Col>
    </Row>
  );
});
