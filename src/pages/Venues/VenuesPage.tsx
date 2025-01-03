import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { VenuesContent } from "../../content";

export const VenuesPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Shooting Ranges" />
        </Col>
      </Row>
      <Row>
        <Col>
          <VenuesContent />
        </Col>
      </Row>
    </>
  );
});
