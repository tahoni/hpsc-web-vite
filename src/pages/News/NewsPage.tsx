import React from "react";
import { Col, Row } from "react-bootstrap";
import News from "../../content/markdown/pages/News.mdx";

export const NewsPage = React.memo(() => {
  return (
    <Row>
      <Col>
        <News />
      </Col>
    </Row>
  );
});
