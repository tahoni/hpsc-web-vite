import { JSX } from "react";

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
