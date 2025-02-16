import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const VenuesPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Shooting Ranges" />
        </Col>
      </Row>
    </>
  );
});

export default VenuesPage;
