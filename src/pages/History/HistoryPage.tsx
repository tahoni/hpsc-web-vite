import React from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { HistoryContent } from "../../content/pages";

export const HistoryPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="History" />
        </Col>
      </Row>
      <Row>
        <Col>
          <HistoryContent />
        </Col>
      </Row>
    </>
  );
});
