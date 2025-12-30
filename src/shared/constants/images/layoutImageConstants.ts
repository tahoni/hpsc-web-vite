/**
 * This module defines constants for layout-related images used throughout the application's interface.
 *
 * It exports both simple string paths to images and enhanced image objects with additional metadata
 * using the ImageWithSourceAndDescription class. These constants ensure consistent use of layout
 * images across the application and provide proper descriptions for accessibility purposes.
 *
 * @remarks
 * All layout images are stored in the /assets/images/layout/ directory and follow a consistent
 * naming convention. The transparent PNG format is used for elements that need to be overlaid
 * on different backgrounds.
 *
 * @module
 */
import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";

export const leftShooterImage: string =
  "/assets/images/layout/shooter-left-transparent.png";
export const rightShooterImage: string =
  "/assets/images/layout/shooter-right-transparent.png";

export const leftShooter: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: leftShooterImage,
    description: "Shooter",
  });

export const rightShooter: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: rightShooterImage,
    description: "Shooter",
  });
