import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

export interface BodyProps {
  leftSideImage?: ImageWithSourceAndDescription;
  rightSideImage?: ImageWithSourceAndDescription;
  pageTitle?: string;
}

export interface SimpleLayoutProps extends BodyProps {}

export interface LayoutProps extends SimpleLayoutProps {}
