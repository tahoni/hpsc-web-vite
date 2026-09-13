/**
 * @packageDocumentation
 * Utility functions for working with map-related features.
 * Provides methods for generating unique keys for venues and maps.
 */

import { Venue } from "@/models/venues/Venue.ts";
import { VenueMapLatLngType } from "@/models/venues/VenueType.ts";

/**
 * Generates a unique key for a venue by combining the club name and its latitude/longitude.
 *
 * The key is generated in the format: `venue_<club>:<latitude>,<longitude>`.
 * If the venue or its properties are undefined, the resulting string may include `undefined`.
 *
 * @param venue - The venue object containing club and location details.
 * @returns The generated key representing the venue.
 */
export const generateMapVenueKey = (venue?: Venue): string => {
  return (
    "venue_" + venue?.club + ":" + venue?.latLng?.lat + "," + venue?.latLng?.lng
  );
};

/**
 * Generates a unique map key string based on a random UUID and optional centre latitude and longitude.
 *
 * @param center - An optional object containing the latitude (`lat`) and longitude (`lng`) of the map centre.
 * @returns A string composed of a "map_" prefix, followed by a randomly generated UUID and the latitude and longitude coordinates from the centre, if provided.
 */
export const generateMapKey = (center?: VenueMapLatLngType): string => {
  return "map_" + crypto.randomUUID + ":" + center?.lat + "," + center?.lng;
};
