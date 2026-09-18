import { JSX } from "react";
import { PageMapping } from "./PageMapping.ts";

/**
 * Represents a page alias which defines a specific path and its associated mapping
 * for navigation or routing purposes. Optionally includes a JSX element for rendering.
 */
export interface PageAlias {
  mapping: PageMapping;
  path?: string;
  element?: JSX.Element;
}
