import { clubShootingRangeVenue } from "@/constants/about/clubConstants";
import { VenueType } from "@/models/venues/VenueType";

/**
 * Represents the venue type for the Eufees Shooting Range.
 *
 * This variable specifies the type of venue, categorised here as a
 * club shooting range venue. It is used to denote the location type
 * specific to shooting range operations for the Eufees system.
 *
 * The variable is assigned a value that correlates with the range being
 * classified specifically within the shooting range category for clubs.
 *
 * @type {VenueType}
 */
export const eufeesShootingRange: VenueType = clubShootingRangeVenue;

/**
 * A variable representing the mode of the map displayed on the "About Us" page.
 *
 * The value of this string determines the map's rendering style.
 * Common options could include "satellite", "terrain", "hybrid", or other map modes
 * provided by the underlying map service.
 *
 * @defaultValue "satellite".
 */
export const aboutUsMapMode: string = "satellite";
/**
 * Represents the zoom level for the map displayed on the "About Us" page.
 * This value defines how zoomed-in the map will appear.
 *
 * A higher value corresponds to a more zoomed-in view, providing a detailed
 * look at the specific location. The value is typically determined based
 * on the requirements of the map display or user preference.
 */
export const aboutUsMapZoom: number = 16;

/**
 * Represents the unique identifier for the map displayed on the "About Us" page.
 * This ID is typically used to fetch or reference the specific map instance associated
 * with the "About Us" section of an application or website.
 */
export const aboutUsMapId: string = "32c6bdacf87e5485cf6c655b";
