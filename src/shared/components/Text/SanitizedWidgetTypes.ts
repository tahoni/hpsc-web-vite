/**
 * @packageDocumentation
 *
 * This module defines the enumeration of supported widget models for the sanitised input components.
 *
 * The SanitizedWidgetTypes enum provides a type-safe way to specify which input widget variant
 * should be used when rendering sanitised form inputs. This ensures consistent typing across
 * the application's form components and enables proper type checking during development.
 *
 * @remarks
 * When extending the available widget models, add new enum values here and implement the
 * corresponding rendering logic in the SanitizedWidget component.
 */

export enum SanitizedWidgetTypes {
  TEMPLATE = "TEMPLATE",
  TEXT_AREA = "TEXT_AREA",
  TEXT = "TEXT",
}
