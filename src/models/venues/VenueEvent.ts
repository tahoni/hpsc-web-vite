import { ImageWithSourceAndDescription } from "@tahoni/tahoni-lib-react";
import { nonBreakingHyphens } from "@/utils/htmlUtils.ts";
import { shootingRangeVenues } from "@/constants/about/venueConstants.ts";
import { VenueType } from "./VenueType.ts";

/**
 * Represents an event taking place at a specific venue.
 */
export class VenueEvent {
  // Core
  private _description: string;
  private _type: string;
  private _year: number;

  // Location
  private _town: string | undefined;
  private _city: string;
  private _province: string | undefined;
  private _country: string;
  private _location: string;

  // Websites
  private _link: string;

  // Dates
  private _longDates: string;
  private _isoStartDate: string;
  private _isoEndDate: string;
  private _isoDates: string;

  // Images
  private _images: ImageWithSourceAndDescription[];
  private _imageWidth: number;

  // Shooting range
  private _shootingRangeKey: string;
  private _shootingRange: VenueType;
  private _shootingRangeName: string | undefined;
  private _shootingRangeLink: string | undefined;

  // Shooting range map
  private _mapMode: string | undefined;
  private _mapZoom: number | undefined;

  // Apparel
  private _apparelLink: string | undefined;
  private _apparelDescription: string | undefined;

  /**
   * Constructs a new VenueEvent instance with the provided details.
   *
   * @param event - The initialisation object for the event.
   */
  constructor(event: {
    description: string;
    type: string;
    year: number;
    town: string;
    city?: string;
    province?: string;
    country?: string;
    location?: string;
    link: string;
    longDates: string;
    isoStartDate?: string;
    isoEndDate?: string;
    isoDates?: string;
    images: ImageWithSourceAndDescription[];
    imageWidth: number;
    shootingRangeKey: string;
    shootingRange?: VenueType;
    shootingRangeName?: string;
    shootingRangeLink?: string;
    mapMode?: string;
    mapZoom?: number;
    apparelLink?: string;
    apparelDescription?: string;
  }) {
    // Core
    this._description = event.description;
    this._type = event.type;
    this._year = event.year;

    // Location
    this._town = event.town;
    this._city = event.city ?? "";
    this._province = event.province;
    this._country = event.country ?? "";
    this._location = event.location ?? this._city + ", " + this._country;

    // Website
    this._link = event.link;

    // Dates
    this._longDates = event.longDates;
    this._isoStartDate = event.isoStartDate ?? "";
    this._isoEndDate = event.isoEndDate ?? "";
    this._isoDates =
      event.isoDates ??
      nonBreakingHyphens(this._isoStartDate) +
        " - " +
        nonBreakingHyphens(this._isoEndDate);

    // Images
    this._images = event.images;
    this._imageWidth = event.imageWidth;

    // Shooting range
    this._shootingRangeKey = event.shootingRangeKey;
    this._shootingRange =
      event.shootingRange ?? shootingRangeVenues.get(this._shootingRangeKey);
    this._shootingRangeName =
      event.shootingRangeLink ?? this._shootingRange?.name ?? "";
    this._shootingRangeLink =
      event.shootingRangeLink ?? this._shootingRange?.website ?? "";

    // Shooting range map
    this._mapMode = event.mapMode;
    this._mapZoom = event.mapZoom;

    // Apparel
    this._apparelLink = event.apparelLink;
    this._apparelDescription = event.apparelDescription;
  }

  // Core
  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get type(): string {
    return this._type;
  }

  public set type(value: string) {
    this._type = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  // Location
  public get town(): string | undefined {
    return this._town;
  }

  public set town(value: string | undefined) {
    this._town = value;
  }

  public get city(): string {
    return this._city;
  }

  public set city(value: string | undefined) {
    this._city = value ?? "";
  }

  public get province(): string | undefined {
    return this._province;
  }

  public set province(value: string | undefined) {
    this._province = value;
  }

  public get country(): string {
    return this._country;
  }

  public set country(value: string | undefined) {
    this._country = value ?? "";
  }

  public get location(): string {
    return this._location;
  }

  public set location(value: string | undefined) {
    this._location = value ?? this._city + ", " + this._country;
  }

  // Websites
  public get link(): string {
    return this._link;
  }

  public set link(value: string) {
    this._link = value;
  }

  // Dates
  public get longDates(): string {
    return this._longDates;
  }

  public set longDates(value: string) {
    this._longDates = value;
  }

  public get isoStartDate(): string {
    return this._isoStartDate;
  }

  public set isoStartDate(value: string | undefined) {
    this._isoStartDate = value ? nonBreakingHyphens(value) : "";
    this._isoDates =
      nonBreakingHyphens(this._isoStartDate) +
      " - " +
      nonBreakingHyphens(this._isoEndDate);
  }

  public get isoEndDate(): string {
    return this._isoEndDate;
  }

  public set isoEndDate(value: string | undefined) {
    this._isoEndDate = value ? nonBreakingHyphens(value) : "";
    this._isoDates =
      nonBreakingHyphens(this._isoStartDate) +
      " - " +
      nonBreakingHyphens(this._isoEndDate);
  }

  public get isoDates(): string {
    return this._isoDates;
  }

  public set isoDates(value: string | undefined) {
    this._isoDates = value
      ? nonBreakingHyphens(this._isoStartDate) +
        " - " +
        nonBreakingHyphens(this._isoEndDate)
      : "";
  }

  // Images
  public get images(): ImageWithSourceAndDescription[] {
    return this._images;
  }

  public set images(value: ImageWithSourceAndDescription[]) {
    this._images = value;
  }

  public get imageWidth(): number {
    return this._imageWidth;
  }

  public set imageWidth(value: number) {
    this._imageWidth = value;
  }

  // Shooting range
  public get shootingRangeKey(): string {
    return this._shootingRangeKey;
  }

  public set shootingRangeKey(value: string) {
    this._shootingRangeKey = value;
  }

  public get shootingRange(): VenueType | undefined {
    return this._shootingRange;
  }

  public set shootingRange(value: VenueType | undefined) {
    this._shootingRange = value;
  }

  public get shootingRangeName(): string | undefined {
    return this._shootingRangeName;
  }

  public set shootingRangeName(value: string | undefined) {
    this._shootingRangeName = value;
  }

  public get shootingRangeLink(): string | undefined {
    return this._shootingRangeLink;
  }

  public set shootingRangeLink(value: string | undefined) {
    this._shootingRangeLink = value;
  }

  // Shooting range map
  public get mapMode(): string | undefined {
    return this._mapMode;
  }

  public set mapMode(value: string | undefined) {
    this._mapMode = value;
  }

  public get mapZoom(): number | undefined {
    return this._mapZoom;
  }

  public set mapZoom(value: number | undefined) {
    this._mapZoom = value;
  }

  get apparelLink(): string | undefined {
    return this._apparelLink;
  }

  set apparelLink(value: string | undefined) {
    this._apparelLink = value;
  }

  get apparelDescription(): string | undefined {
    return this._apparelDescription;
  }

  set apparelDescription(value: string | undefined) {
    this._apparelDescription = value;
  }
}
