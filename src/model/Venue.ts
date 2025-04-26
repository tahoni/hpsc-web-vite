export type VenueMapLatLngType = { lat: number; lng: number };
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
