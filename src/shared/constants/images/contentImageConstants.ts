import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

/**
 * @packageDocumentation
 * This module defines constants for content-related images used throughout the application.
 *
 * It exports image path constants as strings and also provides enhanced image objects with metadata
 * using the ImageWithSourceAndDescription class from the tahoni-lib-react package. These constants
 * enable consistent image usage and ensure proper descriptions for accessibility.
 *
 * @remarks
 * All content images are stored in the /assets/images/content/ directory and are referenced
 * using relative paths. When adding new images, follow the existing pattern to maintain consistency.
 */

export const targetWithBulletHolesImage: string =
  "/assets/images/content/ipsc-target-with-bullet-holes.png";
export const targetWithBulletHoles: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: targetWithBulletHolesImage,
    description: "IPSC target with bullet holes",
  });
