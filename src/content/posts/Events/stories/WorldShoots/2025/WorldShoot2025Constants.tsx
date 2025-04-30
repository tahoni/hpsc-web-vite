import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import { VenueType } from "../../../../../../model/Venue";
import {
  ShootingRanges,
  shootingRangeVenues,
} from "../../../../Venues/VenueConstants";

// Summary
export const worldShoot2025Description: string =
  "2025 IPSC Handgun World Shoot";
export const worldShoot2025City: string = "Matlosana";
export const worldShoot2025Town: string = "Stilfontein";
export const worldShoot2025Location: string =
  worldShoot2025City + ", South Africa";
export const worldShoot2025Province: string = "North West";

// Websites
export const worldShoot2025Link: string = "https://2025hws.worldShoot.org/";

// Dates
export const worldShoot2025LongDates: string = "September 11-28, 2025";
export const worldShoot2025ISODates: string = "2025-09-11- 2025-09-28";

// Images
export const worldShoot2025ImageFile: string =
  "/assets/images/content/events/2025-HWS-Logo-Circular.png";
export const worldShoot2025Image: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: worldShoot2025ImageFile,
    description: worldShoot2025Description,
  });

// Shooting range
export const worldShoot2025ShootingRangeKey: string = ShootingRanges.FRONTIER;
export const worldShoot2025Range: VenueType = shootingRangeVenues.get(
  worldShoot2025ShootingRangeKey,
);
export const worldShoot2025RangeName: string | undefined =
  worldShoot2025Range?.name;
export const worldShoot2025RangeLink: string | undefined =
  worldShoot2025Range?.website;

// Shooting range map
export const worldShoot2025MapMode: string = "satellite";
export const worldShoot2025MapZoom: number = 17;
