import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import { ShootingRanges } from "@constants/about/venueConstants";
import { VenueEvent } from "@models/venues/VenueEvent";

/**
 * @packageDocumentation
 *
 * Constants and configuration for the 2025 IPSC Handgun World Shoot event.
 *
 * This module provides event data, imagery, and links related to the 2025 World Shoot
 * competition in Stilfontein, South Africa. It exports a configured VenuesTypes object
 * with all details needed for displaying the event information across the site.
 *
 * Includes:
 * - Event description and basic metadata
 * - Event imagery with descriptive text
 * - Location information including shooting range details
 * - Date information in both ISO and human-readable formats
 * - External links to the official event website and apparel store
 */

// Core
const worldShoot2025Description = "2025 IPSC Handgun World Shoot";

// Images
const worldShoot2025ImageFile: string =
  "/assets/images/content/events/2025-HWS-Logo-Circular.png";
const worldShoot2025Image: ImageWithSourceAndDescription =
  new ImageWithSourceAndDescription({
    image: worldShoot2025ImageFile,
    description: worldShoot2025Description + " logo",
  });

// Links
export const worldShoot2025ApparelLink: string =
  "https://www.bosninja.co.za/product-category/ipsc-handgun-world-shoot-2025/";
export const worldShoot2025ApparelDescription: string = `${worldShoot2025Description} Apparel @ BosNinja`;

export const worldShoot2025Event: VenueEvent = new VenueEvent({
  description: worldShoot2025Description,
  type: "Handgun",
  year: 2025,
  city: "Matlosana",
  town: "Stilfontein",
  country: "South Africa",
  province: "North West",
  link: "https://2025hws.worldShoot.org/",
  longDates: "September 11-28, 2025",
  isoStartDate: "2025-09-11",
  isoEndDate: "2025-09-28",
  images: [worldShoot2025Image],
  imageWidth: 250,
  shootingRangeKey: ShootingRanges.FRONTIER,
  mapMode: "satellite",
  mapZoom: 17,
  apparelLink: worldShoot2025ApparelLink,
  apparelDescription: worldShoot2025ApparelDescription,
});
