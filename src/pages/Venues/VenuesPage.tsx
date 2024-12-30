import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { VenuesContent } from "../../content";

export const VenuesPage = React.memo((): ReactElement => {
  return (
    <Row>
      <Col>
        <VenuesContent />
      </Col>
    </Row>
  );
});
