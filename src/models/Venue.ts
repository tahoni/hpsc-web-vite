export type VenueMapLatLngType = { lat: number; lng: number };
export type VenueType = Venue | undefined;

/**
 * Represents a venue, providing details such as the associated club,
 * name, location, and other optional metadata.
 *
 * The Venue class is designed to store and manage information about a particular venue and its geographic details.
 *
 * Properties:
 * - `club`: The club or organisation associated with the venue. This field is required.
 * - `name`: The name of the venue. This field is optional.
 * - `website`: The website URL of the venue. This field is optional.
 * - `address`: The physical address of the venue. This field is optional.
 * - `city`: The city where the venue is located. This field is required.
 * - `province`: The province or state where the venue is located. This field is optional.
 * - `country`: The country where the venue is located. This field is optional.
 * - `plusCode`: The Plus Code that provides a formatted address or geolocation reference. This field is optional.
 * - `latLng`: The geographic latitude and longitude coordinates of the venue. This field is required.
 * - `centre`: Optional latLng coordinates representing the centre of the venue's geographic region.
 *
 * Methods:
 * - Getters and setters are provided for each property to allow controlled access and mutation of the venue's data.
 */
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

  /**
   * Creates a new Venue instance.
   *
   * @constructor
   * @param venue - Initialization object describing the venue.
   * @param venue.club - Club or organisation associated with the venue (required).
   * @param venue.name - Optional venue name.
   * @param venue.website - Optional venue website URL.
   * @param venue.address - Optional street or mailing address.
   * @param venue.city - City where the venue is located (required).
   * @param venue.province - Optional province/state.
   * @param venue.country - Optional country.
   * @param venue.plusCode - Optional Plus Code representing the location.
   * @param venue.latLng - Geographic coordinates of the venue (required).
   * @param venue.center - Optional map centre coordinates for the venue area.
   */
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

  set club(value: string) {
    this._club = value;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get website(): string | undefined {
    return this._website;
  }

  set website(value: string | undefined) {
    this._website = value;
  }

  get address(): string | undefined {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get province(): string | undefined {
    return this._province;
  }

  set province(value: string | undefined) {
    this._province = value;
  }

  get country(): string | undefined {
    return this._country;
  }

  set country(value: string | undefined) {
    this._country = value;
  }

  get plusCode(): string | undefined {
    return this._plusCode;
  }

  set plusCode(value: string | undefined) {
    this._plusCode = value;
  }

  get latLng(): VenueMapLatLngType {
    return this._latLng;
  }

  set latLng(value: VenueMapLatLngType) {
    this._latLng = value;
  }

  get center(): VenueMapLatLngType | undefined {
    return this._center;
  }

  set center(value: VenueMapLatLngType | undefined) {
    this._center = value;
  }
}
