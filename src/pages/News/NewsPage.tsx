import React from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { NewsContent } from "../../content";

export const NewsPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="News" />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewsContent />
        </Col>
      </Row>
    </>
  );
});
