import React, { PropsWithChildren, ReactElement, Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import { Loader } from "@tahoni/tahoni-lib-react";
import { PageTitle } from "@components/Title";

interface PageProps {
  title: string;
  keyValue: string;
}

/**
 * Page is a React functional component that serves as a wrapper for rendering page content.
 * It displays an optional page title and provides support for suspense-based loading of child components.
 *
 * The component uses React.memo for performance optimisation by memoising its rendering output
 * to prevent unnecessary re-renders when props do not change.
 *
 * @param {PropsWithChildren<PageProps>} props - The properties passed to the component.
 * @param {string} [props.title] - An optional title to be displayed at the top of the page.
 * @param {string | number} props.keyValue - A unique key used for the Suspense fallback mechanism.
 * @param {React.ReactNode} props.children - The child elements or components to be rendered within the page layout.
 *
 * @returns {ReactElement} A React element that represents the page structure.
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
