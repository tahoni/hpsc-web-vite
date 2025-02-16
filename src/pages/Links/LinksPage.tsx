import React, { ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const LinksContent = React.lazy(() => import("../../content/pages/Links/LinksContent.tsx"));

const LinksPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Links" />
        </Col>
      </Row>
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          <Col>
            <LinksContent />
          </Col>
        </Row>
      </Suspense>
    </>
  );
});

export default LinksPage;
