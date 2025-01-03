import { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components/Title/PageTitle.tsx";

export const LinksPage = (): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Links" />
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};
