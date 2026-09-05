import React, { PropsWithChildren, ReactElement, Suspense, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Loader } from "@tahoni/tahoni-lib-react";
import { PageTitle } from "@components/Title";
import { baseUrl } from "@/constants/commonConstants.ts";

export interface PageProps {
  title: string;
  keyValue: string;
  path: string;
  description?: string;
}

/**
 * The site-wide `<title>`/meta description `index.html` sets statically, captured once when this
 * module first loads (before any route's effect below has a chance to overwrite them). Used as
 * the fallback for a route that doesn't provide its own, so it never needs duplicating here.
 */
const DEFAULT_TITLE = document.title;
const DEFAULT_DESCRIPTION =
  document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";

/**
 * Finds the given meta/link tag in the document head, creating and appending it first if it
 * isn't there yet, so it can then have its value set.
 *
 * @param selector - A `document.head.querySelector` selector identifying the tag.
 * @param createElement - Builds the tag when `selector` doesn't match anything yet.
 * @returns The existing or newly created element.
 */
const upsertHeadTag = (
  selector: string,
  createElement: () => HTMLElement,
): HTMLElement => {
  const element =
    document.head.querySelector<HTMLElement>(selector) ?? createElement();
  if (!element.isConnected) {
    document.head.appendChild(element);
  }
  return element;
};

/**
 * Functional component that serves as a wrapper for rendering page content.
 * It displays an optional page title and provides support for suspense-based loading
 * of child components.
 *
 * Also keeps the browser tab title, the meta-description and the canonical link in sync with the
 * route being rendered, so each page is genuinely unique to search engines and assistive
 * technology, rather than sharing `index.html`'s single static set of tags across every route.
 *
 * The component uses `React.memo` for performance optimisation by memoising its rendering output
 * to prevent unnecessary re-renders when props do not change.
 *
 * @param props - The properties required to render the component, wrapped in `PropsWithChildren`
 *   to provide a child component to render.
 * @returns A React element that defines the page structure.
 */
const Page = React.memo((props: PropsWithChildren<PageProps>): ReactElement => {
  useEffect(() => {
    document.title = props.title ? `${props.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    upsertHeadTag('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      return meta;
    }).setAttribute("content", props.description ?? DEFAULT_DESCRIPTION);

    upsertHeadTag('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    }).setAttribute("href", `${baseUrl}${props.path}`);
  }, [props.title, props.description, props.path]);

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
