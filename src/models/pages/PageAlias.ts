import { JSX } from "react";
import { PageMapping } from "./PageMapping.ts";

/**
 * Represents a page alias which defines a specific path and its associated mapping
 * for navigation or routing purposes. Optionally includes a JSX element for rendering.
 *
 * Properties:
 * - `mapping`: An instance of PageMapping that defines the relationships or data
 *   relevant to this alias.
 * - `path`: An optional path associated with the alias. Typically, a string
 *   describing the URL or route.
 * - `element`: An optional React JSX Element that can represent or render the component
 *   associated with this page alias.
 */
export interface PageAlias {
  mapping: PageMapping;
  path?: string;
  element?: JSX.Element;
}
