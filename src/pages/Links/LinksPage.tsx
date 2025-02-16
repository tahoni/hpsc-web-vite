import React, { ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";
import { Loader } from "@tahoni/tahoni-lib-react";

const LinksContent = React.lazy(() => import("../../content/pages/Links/LinksContent.tsx"));

const LinksPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Links" />
        </Col>
      </Row>
      <Suspense fallback={<Loader isLoading={true} key={"linksPage"} />}>
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
