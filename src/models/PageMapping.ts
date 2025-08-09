import { JSX } from "react";

/**
 * Represents the mapping of a page within an application,
 * including its name, path, optional display element,
 * and optional creation or update timestamps.
 *
 * This class can be used to define the structure of page-related configurations for routing purposes,
 * content rendering, or metadata storage.
 *
 * Properties:
 * @property `name`: The unique name of the page.
 * @property `path`: The route path associated with the page.
 * @property `element`: An optional JSX.Element representing the page's content or component.
 * @property `dateCreated`: An optional timestamp indicating when the page mapping was created.
 * @property `dateUpdated`: An optional timestamp indicating the last update to the page mapping.
 *
 * The class is initialised with a configuration object containing these properties.
 */
export class PageMapping {
  name: string;
  path: string;
  element?: JSX.Element;
  dateCreated?: Date;
  dateUpdated?: Date;

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
