import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { memberContent } from "../../content/posts";

export const MembersPage = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="Members" />
        </Col>
      </Row>
      <Row>
        <Col>
          {memberContent.map((MemberContentComponent, index) => {
            return <MemberContentComponent key={index} />;
          })}
        </Col>
      </Row>
    </>
  );
});
