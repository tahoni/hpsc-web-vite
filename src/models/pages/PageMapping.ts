import { JSX } from "react";

/**
 * Represents the mapping of a page within an application, including its name, path,
 * optional display element, and optional creation or update timestamps.
 *
 * This class can be used to define the structure of page-related configurations for routing purposes,
 * content rendering, or metadata storage.
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
