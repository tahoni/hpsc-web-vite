import React, { PropsWithChildren, ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../components/Title/PageTitle.tsx";
import { Loader } from "@tahoni/tahoni-lib-react";

import("../App.scss");

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
      <Suspense fallback={<Loader isLoading={true} key={props.keyValue} />}>
        <Row>
          <Col>
            {props.children}
          </Col>
        </Row>
      </Suspense>
    </>
  );
});

export default Page;
