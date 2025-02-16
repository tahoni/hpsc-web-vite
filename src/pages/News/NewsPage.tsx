import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../components/Title/PageTitle.tsx";

const NewsPage = React.memo(() => {
  return (
    <>
      <Row>
        <Col>
          <PageTitle title="News" />
        </Col>
      </Row>
    </>
  );
});

export default NewsPage;
