import { VenueMapLatLngType } from "@/models/venues/VenueType.ts";

/**
 * Represents a venue with detailed location and administrative information.
 *
 * Properties:
 * - `key`: The unique identifier of the venue in the `shootingRange` mapping.
 * - `club`: The name of the club associated with the venue.
 * - `name`: The name of the venue (optional).
 * - `website`: The website of the venue (optional).
 * - `address`: The address of the venue (optional).
 * - `city`: The city where the venue is located.
 * - `province`: The province/state where the venue is located (optional).
 * - `country`: The country where the venue is located (optional).
 * - `plusCode`: The Google Plus Code identifying the venue location (optional).
 * - `latLng`: The geographical latitude and longitude of the venue.
 * - `centre`: The centre point of the venue on the map (optional).
 */
export class Venue {
  private _key: string;
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
   * Creates a new Venue instance with the specified details.
   *
   * @param venue - Initialisation object for the venue.
   * @param venue.key - The unique identifier of the venue in the `shootingRange` enum.
   * @param venue.club - The name of the club associated with the venue.
   * @param venue.name - The name of the venue (optional).
   * @param venue.website - The website of the venue (optional).
   * @param venue.address - The address of the venue (optional).
   * @param venue.city - The city where the venue is located.
   * @param venue.province - The province/state where the venue is located (optional).
   * @param venue.country - The country where the venue is located (optional).
   * @param venue.plusCode - The Google Plus Code identifying the venue location (optional).
   * @param venue.latLng - The geographical latitude and longitude of the venue.
   * @param venue.center - The centre point of the venue on the map (optional).
   */
  constructor(venue: {
    key: string;
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
    this._key = venue.key;
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

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
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
