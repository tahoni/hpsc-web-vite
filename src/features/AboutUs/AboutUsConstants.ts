import { clubShootingRangeVenue } from "@constants/about/clubConstants";
import { VenueType } from "@models/venues/VenueType";

/**
 * @packageDocumentation
 * Constants for the About Us page of the HPSC website.
 *
 * This module centralises configuration values for the About Us section,
 * including shooting range information and map display settings.
 * These constants are used to provide consistent venue details
 * and map visualisation throughout the About Us components.
 */

// Eufees shooting range
export const eufeesShootingRange: VenueType = clubShootingRangeVenue;

// Eufees shooting range map
export const aboutUsMapMode: string = "satellite";
export const aboutUsMapZoom: number = 16;
