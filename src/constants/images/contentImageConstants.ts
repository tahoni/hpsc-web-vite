/**
 * This module defines constants for content-related images used throughout the application.
 *
 * It exports both simple string paths to images and enhanced image objects with additional metadata
 * using the ImageWithSourceAndDescription class. These constants ensure consistent use of
 * images across the application and provide proper descriptions for accessibility purposes.
 *
 * @remarks
 * All content images are stored in the /assets/images/content/ directory and are referenced
 * using relative paths. The transparent PNG format is used for elements that need to be overlaid
 * on different backgrounds. When adding new images, follow the existing pattern to maintain
 * consistency.
 *
 * @module
 */

import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  defaultImageExtension,
  defaultImagePath,
} from "@/constants/commonConstants.ts";

export const targetWithBulletHolesImage: string =
  defaultImagePath +
  "/content/ipsc-target-with-bullet-holes" +
  defaultImageExtension;
export const targetWithBulletHoles: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: targetWithBulletHolesImage,
    description: "IPSC target with bullet holes",
  });
