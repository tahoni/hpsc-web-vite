import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import { VenueEvent } from "../../../../../../model/VenueEvent";
import { ShootingRanges } from "../../../../Venues/VenueConstants";

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
});
