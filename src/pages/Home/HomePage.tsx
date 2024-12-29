import React from "react";
import { Col, Row } from "react-bootstrap";
import Home from "../../content/markdown/pages/Home.mdx";

export const HomePage = React.memo(() => {
  return (
    <Row>
      <Col>
        <Home />
      </Col>
    </Row>
  );
});
