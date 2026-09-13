/**
 * Constants describing provincial, national, and international associations used
 * across the application.
 *
 * This module centralises association-related metadata such as the association name,
 * abbreviation, websites, and logo paths with their alternative text descriptions.
 * These values are used across the site for display and configuration.
 */

import {
  defaultImageExtension,
  defaultImagePath,
  logoAlt,
} from "@/constants/commonConstants.ts";

// Summary
export const provincialAssociationName: string =
  "Northern Gauteng Practical Shooting Association";
export const nationalAssociationName: string =
  "South African Practical Shooting Association";
export const internationalAssociationName: string =
  "International Practical Shooting Confederation";

// Abbreviations
export const provincialAssociationAbbreviation: string = "NGPSA";
export const nationalAssociationAbbreviation: string = "SAPSA";
export const internationalAssociationAbbreviation: string = "IPSC";

// Websites
export const provincialAssociationWebsite: string = "https://ngpsa.co.za/";
export const nationalAssociationWebsite: string = "https://sapsa.co.za/";
export const internationalAssociationWebsite: string = "https://www.ipsc.org/";

// Logos
export const provincialAssociationLogo =
  defaultImagePath + "/logos/ngpsa-logo" + defaultImageExtension;
export const nationalAssociationLogo =
  defaultImagePath + "/logos/sapsa-logo" + defaultImageExtension;
export const internationalAssociationLogo =
  defaultImagePath + "/logos/ipsc-logo" + defaultImageExtension;

// Alternative text
export const provincialAssociationLogoAlt =
  provincialAssociationName + " " + logoAlt;
export const nationalAssociationLogoAlt =
  nationalAssociationName + " " + logoAlt;
export const internationalAssociationLogoAlt =
  internationalAssociationName + " " + logoAlt;
