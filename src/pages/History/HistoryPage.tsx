import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";
import { Loader } from "@tahoni/tahoni-lib-react";

const HistoryContent = React.lazy(() => import("../../content/pages/History/HistoryContent.tsx"));

const HistoryPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="History" />
        </Col>
      </Row>
      <Suspense fallback={<Loader isLoading={true} key={"historyPage"} />}>
        <Row>
          <Col>
            <HistoryContent />
          </Col>
        </Row>
      </Suspense>
    </>
  );
});

export default HistoryPage;
