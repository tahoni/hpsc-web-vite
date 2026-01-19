/**
 * Constants and data related to shooting venues and ranges.
 * Contains enumerations and venue information including locations,
 * contact details, and geographic coordinates.
 *
 * @module
 */
import { Venue } from "@models/venues/Venue";

export enum ShootingRanges {
  EUFEES = "EUFEES",
  MAGNUM = "MAGNUM",
  VEKTOR = "VEKTOR",
  FRONTIER = "FRONTIER",
}

export const shootingRangeVenues: Map<string, Venue> = new Map([
  [
    ShootingRanges.EUFEES,
    new Venue({
      club: "Pretoria Military Practical Shooting Club",
      name: "Eeufees Range",
      website: "https://www.pmpsc.co.za/",
      address: "Eeufees Rd, Thaba Tshwane, Pretoria, 0027",
      city: "Pretoria",
      province: "Gauteng",
      plusCode: "657F+J5 Pretoria",
      latLng: { lat: -25.78592891491886, lng: 28.172933054515305 },
      center: { lat: -25.785987, lng: 28.172548 },
    }),
  ],
  [
    ShootingRanges.MAGNUM,
    new Venue({
      club: "Magnum United Shooting Club",
      name: "Magnum United Shooting Range",
      website: "https://www.magnumunited.com/",
      address: "R104 Bronkhorstspruit, Pretoria, 0001",
      city: "Pretoria",
      province: "Gauteng",
      plusCode: "6FM2+2Q Pretoria",
      latLng: { lat: -25.785987, lng: 28.172933054515305 },
    }),
  ],
  [
    ShootingRanges.VEKTOR,
    new Venue({
      club: "Vektor Shooting Club",
      name: "Vektor Shooting Range",
      website: "https://www.vektor.co.za/",
      address: "410 Selborne Ave, Lyttelton Manor, Centurion, 0157",
      city: "Centurion",
      province: "Gauteng",
      plusCode: "652R+86 Centurion",
      latLng: { lat: -25.799049326224257, lng: 28.19047863794907 },
    }),
  ],
  [
    ShootingRanges.FRONTIER,
    new Venue({
      club: "Frontier Shooting Range",
      name: "Frontier Shooting Range",
      website: "https://frontierguns.co.za/",
      address: "Plot 4 Buffeldoorn Road, Stilfontein, 2551",
      city: "Stilfontein",
      province: "North West",
      plusCode: "6R48+JW Stilfontein",
      latLng: { lat: -26.793300047146772, lng: 26.81708635451911 },
      center: { lat: -26.794060685295314, lng: 26.817959554635507 },
    }),
  ],
]);
