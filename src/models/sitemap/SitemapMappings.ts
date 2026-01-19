import { SitemapChangeFrequency } from "./SitemapChangeFrequency.ts";

const DEFAULT_SITEMAP_URL_CHANGEFREQ = SitemapChangeFrequency.Daily;

/**
 * Represents a mapping for a sitemap entry.
 *
 * This class provides the necessary properties to define a sitemap entry
 * with its associated URL, change frequency, priority, and last modified date.
 *
 * Properties:
 * - `url`: The absolute or relative URL of the page.
 * - `changefreq`: How frequently the URL is expected to change; defaults to SitemapChangeFrequency.Daily.
 * - `priority`: Optional relative priority between 0.0 and 1.0.
 * - `lastmod`: Optional last modified timestamp for the URL.
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
   * @param mapping.url - The absolute or relative URL of the page.
   * @param mapping.changefreq - How frequently the URL is expected to change; defaults to SitemapChangeFrequency.Daily.
   * @param mapping.priority - Optional relative priority between 0.0 and 1.0.
   * @param mapping.lastmod - Optional last modified timestamp for the URL.
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
