import React from "react";
import { Col, Row } from "react-bootstrap";
import { NewsContent } from "../../content";

export const NewsPage = React.memo(() => {
  return (
    <Row>
      <Col>
        <NewsContent />
      </Col>
    </Row>
  );
});
