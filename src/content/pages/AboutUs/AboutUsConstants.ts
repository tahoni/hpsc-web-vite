import { clubShootingRangeVenue } from "../../../constants/about/ClubConstants";
import { VenueType } from "../../../models/Venue";

/**
 * @packageDocumentation
 * Constants for the About Us page of the HPSC website.
 *
 * This module centralizes configuration values for the About Us section,
 * including shooting range information and map display settings.
 * These constants are used to provide consistent venue details
 * and map visualization throughout the About Us components.
 */

// Eufees shooting range
export const eufeesShootingRange: VenueType = clubShootingRangeVenue;

// Eufees shooting range map
export const aboutUsMapMode: string = "satellite";
export const aboutUsMapZoom: number = 16;
