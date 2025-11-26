/**
 * @packageDocumentation
 *
 * Constants module for content-related configuration values used across the application.
 *
 * This module provides centralized management of UI and content-related constants such as
 * default sizes, dimensions, and display settings that affect how content is rendered
 * throughout the application.
 *
 * @remarks
 * Constants defined in this module help maintain consistency in the UI by providing
 * single sources of truth for commonly used values. When making adjustments to the
 * application's appearance, modifying these constants is preferable to hardcoding values
 * in individual components.
 *
 * @example
 * ```tsx
 * import { linkWithLogoIconDefaultHeight } from '@constants/content/ContentConstants';
 *
 * const LogoComponent = () => (
 *   <img src="logo.svg" height={linkWithLogoIconDefaultHeight} />
 * );
 * ```
 */

export const linkWithLogoIconDefaultHeight: string = "60px";
