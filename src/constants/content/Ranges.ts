import { Venue } from "../../model/Venue.ts";
import { clubShootingRange } from "../about/ClubConstants.ts";

export const EUFEES_RANGE: string = "Eufees";

export const rangeMapPins: Map<string, Venue> = new Map([
  [
    EUFEES_RANGE,
    {
      name: clubShootingRange,
      latLng: { lat: -25.78592891491886, lng: 28.172933054515305 },
    },
  ],
]);
