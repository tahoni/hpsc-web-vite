export type VenueMapLatLngType = google.maps.LatLng | google.maps.LatLngLiteral;
export type VenueType = Venue | undefined;

export interface Venue {
  name: string;
  label?: string;
  latLng: VenueMapLatLngType;
  center?: VenueMapLatLngType;
}
