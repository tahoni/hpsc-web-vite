import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

export interface BodyProps {
  leftSideImage?: ImageWithSourceAndDescription;
  rightSideImage?: ImageWithSourceAndDescription;
  pageTitle?: string;
}

export type SimpleLayoutProps = BodyProps

export type LayoutProps = SimpleLayoutProps
