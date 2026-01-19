import { SitemapChangeFrequency } from "./SitemapChangeFrequency.ts";

const DEFAULT_SITEMAP_URL_CHANGEFREQ = SitemapChangeFrequency.Daily;

/**
 * Represents a mapping for a sitemap entry.
 *
 * This class provides the necessary properties to define a sitemap entry
 * with its associated URL, change frequency, priority, and last modified date.
 */
export class SitemapMapping {
  url: string;
  changefreq?: SitemapChangeFrequency;
  priority?: number;
  lastmod?: Date;

  /**
   * Creates a new SitemapMapping instance with the specified details.
   *
   * @param mapping - Initialisation object for the sitemap entry.
   */
  constructor(mapping: {
    url: string;
    changefreq?: SitemapChangeFrequency;
    priority?: number;
    lastmod?: Date;
  }) {
    this.url = mapping.url;
    this.changefreq = mapping.changefreq ?? DEFAULT_SITEMAP_URL_CHANGEFREQ;
    this.priority = mapping.priority;
    this.lastmod = mapping.lastmod;
  }
}
