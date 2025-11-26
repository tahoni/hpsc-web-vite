import { JSX } from "react";
import { PageMapping } from "./PageMapping";

/**
 * Represents a page alias which defines a specific path and its associated mapping
 * for navigation or routing purposes. Optionally includes a JSX element for rendering.
 *
 * Properties:
 * - path (optional): Specifies the path associated with the alias. Typically, a string
 *   describing the URL or route.
 * - mapping: An instance of PageMapping that defines the relationships or data
 *   relevant to this alias.
 * - element (optional): A React JSX.Element that can represent or render the component
 *   associated with this page alias.
 */
export interface PageAlias {
  path?: string;
  mapping: PageMapping;
  element?: JSX.Element;
}
