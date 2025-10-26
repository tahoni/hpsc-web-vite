import { Venue, VenueMapLatLngType } from "../models/Venue.ts";

/**
 * @packageDocumentation
 * Utility functions for working with map-related features.
 * Provides methods for generating unique keys for venues and maps.
 */

/**
 * Generates a unique key for a venue by combining the club name and its latitude/longitude.
 *
 * The key is generated in the format: `venue_<club>:<latitude>,<longitude>`.
 * If the venue or its properties are undefined, the resulting string may include `undefined`.
 *
 * @param {Venue} [venue] - The venue object containing club and location details.
 * @returns {string} The generated key representing the venue.
 */
export const generateMapVenueKey = (venue?: Venue): string => {
  return (
    "venue_" + venue?.club + ":" + venue?.latLng?.lat + "," + venue?.latLng?.lng
  );
};

/**
 * Generates a unique map key string based on a random UUID and optional center latitude and longitude.
 *
 * @param {VenueMapLatLngType} [center] - An optional object containing the latitude (`lat`) and longitude (`lng`) of the map center.
 * @returns {string} A string composed of a "map_" prefix, followed by a randomly generated UUID and the latitude and longitude coordinates from the center, if provided.
 */
export const generateMapKey = (center?: VenueMapLatLngType): string => {
  return "map_" + crypto.randomUUID + ":" + center?.lat + "," + center?.lng;
};
