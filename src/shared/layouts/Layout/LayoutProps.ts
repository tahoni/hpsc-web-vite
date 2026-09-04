import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

/**
 * Represents the properties used to define the structure and visual elements of a body component.
 *
 * - `leftSideImage`: Represents an optional image displayed on the left side with its source and
 *   description.
 * - `rightSideImage`: Represents an optional image displayed on the right
 *   side with its source and description.
 * - `pageTitle`: Specifies the optional title of the page or body component.
 */
export interface BodyProps {
  leftSideImage?: ImageWithSourceAndDescription;
  rightSideImage?: ImageWithSourceAndDescription;
  pageTitle?: string;
}

/**
 * LayoutProps is a type alias for the BodyProps type. It is designed to encapsulate
 * and inherit all properties from BodyProps, typically defining layout-related
 * configuration or attributes for a specific component or context.
 *
 * This abstraction ensures consistency and reusability by relying on the BodyProps
 * type definition rather than recreating or redefining a similar structure.
 *
 * Use LayoutProps where layout configuration alignment with BodyProps is necessary.
 */
export type LayoutProps = BodyProps;
