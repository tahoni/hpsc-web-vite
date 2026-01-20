import { defaultImageExtension, defaultImagePath, logoAlt } from "@/constants/commonConstants.ts";

/**
 * @packageDocumentation
 * Constants related to external links and partner organizations.
 * Contains website URLs, logo paths, alternate text descriptions,
 * and other metadata for linked resources.
 */

// Websites
export const bosninjaWebsite: string = "https://www.bosninja.co.za/";

// Logos
export const bosninjaLogo =
  defaultImagePath + "/logos/bosninja-logo" + defaultImageExtension;

// Alternative text
export const bosninjaLogoAlt = bosninjaLogo + " " + logoAlt;

// Names
export const bosninjaName: string = "BosNinja";

// Detail
export const bosninjaDetail: string =
  "suppliers of superb sport shooting apparel";
