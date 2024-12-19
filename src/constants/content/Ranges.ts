import {Venue} from "../../model/VenueTypes.tsx";
import {clubShootingRange} from "../AppConstants.ts";

export const EUFEES_RANGE: string = "Eufees";

export const rangeMapPins: Map<string, Venue> = new Map([
    [EUFEES_RANGE, {name: clubShootingRange, latLng: {lat: -25.78592891491886, lng: 28.172933054515305}}],
])
