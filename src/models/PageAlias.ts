import { JSX } from "react";
import { PageMapping } from "./PageMapping.ts";

export interface PageAlias {
  path?: string;
  mapping: PageMapping;
  element?: JSX.Element;
}
