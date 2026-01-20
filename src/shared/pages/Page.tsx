import React, { PropsWithChildren, ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import { Loader } from "@tahoni/tahoni-lib-react";
import { PageTitle } from "@components/Title";

interface PageProps {
  title: string;
  keyValue: string;
}

/**
 * Functional component that serves as a wrapper for rendering page content.
 * It displays an optional page title and provides support for suspense-based loading
 * of child components.
 *
 * The component uses `React.memo` for performance optimisation by memoising its rendering output
 * to prevent unnecessary re-renders when props do not change.
 *
 * @param props - The properties required to render the component, wrapped in `PropsWithChildren`
 *   to provide a child component to render.
 * @returns A React element that defines the page structure.
 */
const Page = React.memo((props: PropsWithChildren<PageProps>): ReactElement => {
  return (
    <section>
      {props.title && (
        <Row>
          <Col>
            <PageTitle title={props.title} />
          </Col>
        </Row>
      )}
      <Suspense fallback={<Loader isLoading={true} />} key={props.keyValue}>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Suspense>
    </section>
  );
});

export default Page;
