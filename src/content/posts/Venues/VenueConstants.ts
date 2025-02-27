import { Venue } from "../../../model/Venue.ts";
import {
  clubShootingRangeDescription
} from "../../../constants/about/ClubConstants.ts";

export enum ShootingRanges {
  EUFEES = "EUFEES",
  MAGNUM = "MAGNUM",
  VEKTOR = "VEKTOR",
}

export const shootingRangeVenues: Map<string, Venue> = new Map([
  [ShootingRanges.EUFEES,
    {
      club: clubShootingRangeDescription,
      website: "https://www.pmpsc.co.za/",
      address: "Eeufees Rd, Thaba Tshwane, Pretoria, 0027",
      city: "Pretoria",
      plusCode: "657F+J5 Pretoria",
      latLng: { lat: -25.78592891491886, lng: 28.172933054515305 },
      center: { lat: -25.785987, lng: 28.172548 }
    }],
  [ShootingRanges.MAGNUM.toString(),
    {
      club: "Magnum United Shooting Club",
      name: "Magnum United Shooting Range",
      website: "https://www.magnumunited.com/",
      address: "R104 Bronkhorstspruit, Pretoria, 0001",
      city: "Pretoria",
      plusCode: "6FM2+2Q Pretoria",
      latLng: { lat: -25.785987, lng: 28.172933054515305 }
    }],
  [ShootingRanges.VEKTOR.toString(),
    {
      club: "Vektor Shooting Club",
      name: "Vektor Shooting Range",
      website: "https://www.vektor.co.za/",
      address: "410 Selborne Ave, Lyttelton Manor, Centurion, 0157",
      city: "Centurion",
      plusCode: "652R+86 Centurion",
      latLng: { lat: -25.799049326224257, lng: 28.19047863794907 }
    }
  ]
]);
