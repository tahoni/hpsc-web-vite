import { Venue } from "@/models/venues/Venue.ts";

/**
 * Represents a geographic location using latitude and longitude coordinates.
 *
 * This type defines a point on a map, where:
 * - `lat` indicates the latitude of the location.
 * - `lng` indicates the longitude of the location.
 */
export type VenueMapLatLngType = { lat: number; lng: number };

/**
 * Represents a venue type, which can either be a Venue object or undefined.
 *
 * This type is used for defining the possible states of a venue-related variable,
 * where it can hold a Venue object when available or be undefined if no data is present.
 */
export type VenueType = Venue | undefined;
