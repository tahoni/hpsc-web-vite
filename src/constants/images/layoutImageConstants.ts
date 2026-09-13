/**
 * This module defines constants for layout-related images used throughout the application's interface.
 *
 * It exports both simple string paths to images and enhanced image objects with additional metadata
 * using the ImageWithSourceAndDescription class. These constants ensure consistent use of layout
 * images across the application and provide proper descriptions for accessibility purposes.
 *
 * @remarks
 * All layout images are stored in the /assets/images/layout/ directory, follow a consistent
 * naming convention, and are referenced using relative paths. The transparent PNG format is used
 * for elements that need to be overlaid on different backgrounds. When adding new images,
 * follow the existing pattern to maintain consistency.
 */

import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  defaultImageExtension,
  defaultImagePath,
} from "@/constants/commonConstants.ts";

export const leftShooterImage: string =
  defaultImagePath + "/layout/shooter-left-transparent" + defaultImageExtension;
export const rightShooterImage: string =
  defaultImagePath +
  "/layout/shooter-right-transparent" +
  defaultImageExtension;

export const leftShooter: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: leftShooterImage,
    description: "Shooter Left",
  });

export const rightShooter: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: rightShooterImage,
    description: "Shooter Right",
  });
