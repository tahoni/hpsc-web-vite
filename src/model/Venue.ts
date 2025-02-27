export type VenueMapLatLngType = google.maps.LatLng | google.maps.LatLngLiteral;
export type VenueType = Venue | undefined;

export interface Venue {
  club: string;
  name?: string;
  website?: string;
  address?: string;
  city: string;
  plusCode?: string;
  latLng: VenueMapLatLngType;
  center?: VenueMapLatLngType;
}
