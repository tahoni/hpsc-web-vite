export type VenueMapLatLngType = { lat: number; lng: number };
export type VenueType = Venue | undefined;

export class Venue {
  private _club: string;
  private _name?: string;
  private _website?: string;
  private _address?: string;
  private _city: string;
  private _province?: string;
  private _country?: string;
  private _plusCode?: string;
  private _latLng: VenueMapLatLngType;
  private _center?: VenueMapLatLngType;

  constructor(venue: {
    club: string;
    name?: string;
    website?: string;
    address?: string;
    city: string;
    province?: string;
    country?: string;
    plusCode?: string;
    latLng: VenueMapLatLngType;
    center?: VenueMapLatLngType;
  }) {
    this._club = venue.club;
    this._name = venue.name;
    this._website = venue.website;
    this._address = venue.address;
    this._city = venue.city;
    this._province = venue.province;
    this._country = venue.country;
    this._plusCode = venue.plusCode;
    this._latLng = venue.latLng;
    this._center = venue.center;
  }

  get club(): string {
    return this._club;
  }

  set club(club: string) {
    this._club = club;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get website(): string | undefined {
    return this._website;
  }

  set website(website: string) {
    this._website = website;
  }

  get address(): string | undefined {
    return this._address;
  }

  set address(address: string) {
    this._address = address;
  }

  get city(): string {
    return this._city;
  }

  set city(city: string) {
    this._city = city;
  }

  get province(): string | undefined {
    return this._province;
  }

  set province(province: string) {
    this._province = province;
  }

  get country(): string | undefined {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
  }

  get plusCode(): string | undefined {
    return this._plusCode;
  }

  set plusCode(plusCode: string) {
    this._plusCode = plusCode;
  }

  get latLng(): VenueMapLatLngType {
    return this._latLng;
  }

  set latLng(latLng: VenueMapLatLngType) {
    this._latLng = latLng;
  }

  get center(): VenueMapLatLngType | undefined {
    return this._center;
  }

  set center(center: VenueMapLatLngType) {
    this._center = center;
  }
}
