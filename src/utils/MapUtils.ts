import { Venue } from "../model/Venue.ts";

export const generateMapVenueKey = (venue?: Venue): string => {
  return venue?.club + ":" + venue?.latLng?.lat + "," + venue?.latLng?.lng;
};
