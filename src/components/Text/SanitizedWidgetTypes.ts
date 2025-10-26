/**
 * @packageDocumentation
 * 
 * This module defines the enumeration of supported widget types for the sanitized input components.
 * 
 * The SanitizedWidgetTypes enum provides a type-safe way to specify which input widget variant
 * should be used when rendering sanitized form inputs. This ensures consistent typing across
 * the application's form components and enables proper type checking during development.
 * 
 * @remarks
 * When extending the available widget types, add new enum values here and implement the
 * corresponding rendering logic in the SanitizedWidget component.
 */

export enum SanitizedWidgetTypes {
  TEMPLATE = "TEMPLATE",
  TEXT_AREA = "TEXT_AREA",
  TEXT = "TEXT",
}
