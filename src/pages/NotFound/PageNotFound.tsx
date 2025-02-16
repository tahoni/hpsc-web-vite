import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import NotFound from "../../components/NotFound/NotFound.tsx";
import PageTitle from "../../components/Title/PageTitle.tsx";

const PageNotFound = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Page Not Found" />
        </Col>
      </Row>
      <Row>
        <Col>
          <NotFound message="the page you are looking for does not exist" />
        </Col>
      </Row>
    </>
  );
});

export default PageNotFound;
