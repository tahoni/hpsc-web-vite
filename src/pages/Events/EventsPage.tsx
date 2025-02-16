import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const EventsPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Matches" />
        </Col>
      </Row>
    </>
  );
});

export default EventsPage;
