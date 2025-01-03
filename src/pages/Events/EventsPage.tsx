import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { EventsContent } from "../../content";

export const EventsPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Matches" />
        </Col>
      </Row>
      <Row>
        <Col>
          <EventsContent />
        </Col>
      </Row>
    </>
  );
});
