import React from "react";
import { Col, Row } from "react-bootstrap";
import HistoryContent from "../../content/pages/History/HistoryContent.tsx";

const HomePage = React.memo(() => {
  return (
    <Row>
      <Col>
        <HistoryContent />
      </Col>
    </Row>
  );
});

export default HomePage;
