import React, { PropsWithChildren, ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../components/Title/PageTitle.tsx";

interface PageProps {
  title: string;
  keyValue: string;
}

const Page = React.memo((props: PropsWithChildren<PageProps>): ReactElement => {
  return (
    <>
      {props.title ?
        <Row>
          <Col>
            <PageTitle title={props.title} />
          </Col>
        </Row>
        :
        <></>
      }
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
    </>
  );
});

export default Page;
