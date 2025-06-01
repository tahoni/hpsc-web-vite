import { SitemapChangeFrequency } from "../enums/SitemapChangeFrequency";
import { toUTCDateString } from "../utils/DateUtils";

// const DEFAULT_SITEMAP_URL_CHANGEFREQ = SitemapChangeFrequency.Daily;
// const DEFAULT_SITEMAP_URL_PRIORITY = 0.5;

export class SitemapMapping {
  url: string;
  changefreq?: SitemapChangeFrequency;
  priority?: number;
  lastmod?: string;

  constructor(mapping: {
    url: string;
    changefreq?: SitemapChangeFrequency;
    priority?: number;
    lastmod?: Date;
  }) {
    this.url = mapping.url;
    this.changefreq = mapping.changefreq ?? undefined;
    this.priority = mapping.priority ?? undefined;

    const lastmod: Date | undefined = mapping.lastmod;
    if (lastmod) {
      this.lastmod = toUTCDateString(lastmod);
    }
  }
}
