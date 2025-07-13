import { Venue, VenueMapLatLngType } from "../models/Venue.ts";

export const generateMapVenueKey = (venue?: Venue): string => {
  return (
    "venue_" + venue?.club + ":" + venue?.latLng?.lat + "," + venue?.latLng?.lng
  );
};

export const generateMapKey = (center?: VenueMapLatLngType): string => {
  return "map_" + crypto.randomUUID + ":" + center?.lat + "," + center?.lng;
};
