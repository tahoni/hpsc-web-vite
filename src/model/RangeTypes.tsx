export type RangeMapLatLngType = google.maps.LatLng | google.maps.LatLngLiteral | undefined;
export type RangeType = Range | undefined;

export interface Range {
    name: string;
    latLng: RangeMapLatLngType;
}
