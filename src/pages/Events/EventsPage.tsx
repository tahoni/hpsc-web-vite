import React, { ReactElement } from "react";
import { EventsContent } from "../../content";
import { Col, Row } from "react-bootstrap";

export const EventsPage = React.memo((): ReactElement => {
  return (
    <Row>
      <Col>
        <EventsContent />
      </Col>
    </Row>
  );
});
