import React, { ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const MemberContent = React.lazy(() => import("../../content/posts/Members/Members.tsx"));

const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Members" />
        </Col>
      </Row>
      <Suspense fallback={<div>Loading...</div>}>
        <Row>
          <Col>
            <MemberContent />
          </Col>
        </Row>
      </Suspense>
    </>
  );
});

export default MembersPage;
