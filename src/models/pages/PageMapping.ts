import { JSX } from "react";

/**
 * Represents the mapping of a page within an application, including its name, path,
 * optional display element, and optional creation or update timestamps.
 *
 * This class can be used to define the structure of page-related configurations for routing purposes,
 * content rendering, or metadata storage.
 *
 * Properties:
 * - `name`: The unique name of the page.
 * - `path`: The route path associated with the page.
 * - `element`: An optional React JSX Element that can represent or render the component.
 * - `dateCreated`: An optional timestamp indicating when the page mapping was created.
 * - `dateUpdated`: An optional timestamp indicating the last update to the page mapping.
 */
export class PageMapping {
  name: string;
  path: string;
  element?: JSX.Element;
  dateCreated?: Date;
  dateUpdated?: Date;

  /**
   * Creates a new PageMapping instance with the specified details.
   *
   * @param mapping - Initialisation object for the page mapping.
   * @param mapping.name - The unique name of the page.
   * @param mapping.path - The route path associated with the page.
   * @param mapping.element - Optional JSX element/component to render for the page.
   * @param mapping.dateCreated - Optional creation timestamp for this mapping.
   * @param mapping.dateUpdated - Optional last update timestamp for this mapping.
   */
  constructor(mapping: {
    name: string;
    path: string;
    element?: JSX.Element;
    dateCreated?: Date;
    dateUpdated?: Date;
  }) {
    this.name = mapping.name;
    this.path = mapping.path;
    this.element = mapping.element;
    this.dateCreated = mapping.dateCreated;
    this.dateUpdated = mapping.dateUpdated;
  }
}
