import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import {
  ShootingRanges,
  shootingRangeVenues,
} from "../../../../Venues/VenueConstants";
import { VenueType } from "../../../../../../model/Venue";

// 2025 IPSC HANDGUN WORLD SHOOT
// Summary
export const worldShoot2025: string = "2025 IPSC Handgun World Shoot";
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

// Shooting Range
export const worldShoot2025Range: VenueType = shootingRangeVenues.get(
  ShootingRanges.FRONTIER,
);
export const worldShoot2025RangeName: string | undefined =
  worldShoot2025Range?.name;
export const worldShoot2025RangeLink: string | undefined =
  worldShoot2025Range?.website;

// Images
export const worldShoot2025ImageFile: string =
  "/assets/images/events/WordlShoot_2025_xx_Handgun_SouthAfrica_Logo.jpg";
export const worldShoot2025Image: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: worldShoot2025ImageFile,
    description: "2025 IPSC Handgun World Shoot",
  });
