import {Range} from "../../model/RangeTypes.tsx";
import {clubShootingRange} from "../AppConstants.ts";

export const EUFEES_RANGE: string = "Eufees";

export const rangeMapPins: Map<string, Range> = new Map([
    [EUFEES_RANGE, {name: clubShootingRange, latLng: {lat: -25.785894221414374, lng: 28.172921002448536}}],
])
