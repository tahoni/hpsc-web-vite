import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { LinksContent } from "../../content/pages";

export const LinksPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Links" />
        </Col>
      </Row>
      <Row>
        <Col>
          <LinksContent />
        </Col>
      </Row>
    </>
  );
});
