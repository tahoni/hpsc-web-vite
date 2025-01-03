import { Venue } from "../../model/Venue.ts";
import { clubShootingRangeDescription } from "../about/ClubConstants.ts";

export const EUFEES_SHOOTING_RANGE: string = "EUFEES";

export const shootingRangeMapPins: Map<string, Venue> = new Map([
  [
    EUFEES_SHOOTING_RANGE,
    {
      name: clubShootingRangeDescription,
      latLng: { lat: -25.78592891491886, lng: 28.172933054515305 },
      center: { lat: -25.785987, lng: 28.172548 },
    },
  ],
]);
