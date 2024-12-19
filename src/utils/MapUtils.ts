import {Venue} from "../model/VenueTypes.tsx";
import {md5} from "js-md5";

export const generateMapVenueKey= (venue?: Venue): string  => {
    const stringLatLong: string = '' + venue?.latLng?.lat + ',' + venue?.latLng?.lng
    return md5(stringLatLong);
}
