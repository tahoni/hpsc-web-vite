/**
 * @packageDocumentation
 * Constants describing the Hartbeespoortdam Practical Shooting Club (HPSC).
 *
 * This module centralizes club-related metadata such as the club name,
 * primary shooting range information, contact e-mails, social links, and logo paths.
 * These values are used across the site for display and configuration.
 */

// Name, description and abbreviation
import {
  ShootingRanges,
  shootingRangeVenues,
} from "../../content/posts/Venues/VenueConstants.ts";
import { VenueType } from "../../models/Venue.ts";
import { logoAlt } from "../AppConstants.ts";

// Summary
export const clubName: string = "Hartbeespoortdam Practical Shooting Club";
export const clubAbbreviation: string = "HPSC";

// Shooting range
export const clubShootingRangeKey: string = ShootingRanges.EUFEES;
export const clubShootingRangeVenue: VenueType =
  shootingRangeVenues.get(clubShootingRangeKey);
export const clubShootingRangeName: string | undefined =
  clubShootingRangeVenue?.name;
export const clubShootingRangeDescription: string | undefined =
  clubShootingRangeVenue?.club;

// E-mails
export const chairmanEmail: string = "chairman@hpsc.co.za";
export const adminEmail: string = "admin@hpsc.co.za";
export const enquiriesEmail: string = "enquiries@hpsc.co.za";
export const contactUsEmail: string = "contact-us@hpsc.co.za";
export const webmasterEmail: string = "webmaster@hpsc.co.za";
export const noReplyEmail: string = "no-reply@hpsc.co.za";

// People
export const chairmanName: string = "Jan Kleynhans";
export const secretaryName: string = "Albert van Herk";

// Social media
export const facebookUrl: string = "https://www.facebook.com/";
export const facebookPage: string =
  facebookUrl + "profile.php?id=100063707311881";
export const facebookGroup: string = facebookUrl + "groups/933580883991020";

// Logos
export const clubLogoFilename: string = "hpsc-logo.png";
export const clubLogoPath: string = "/assets/images/logos";
export const clubLogo: string = clubLogoPath + "/" + clubLogoFilename;
export const clubLogoAlt: string = clubName + " " + logoAlt;
