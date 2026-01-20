import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  defaultImageExtension,
  defaultImagePath,
} from "@/constants/commonConstants.ts";

/**
 * @packageDocumentation
 * Constants related to club members and membership.
 * Includes image assets and related resources for member content.
 */

export const clubShirts2024ImageFile: string =
  defaultImagePath + "/club/Bosninja_ HPSC_Club_shirts" + defaultImageExtension;

export const clubShirts2024Image: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: clubShirts2024ImageFile,
    description: "HPSC club shirt",
  });
