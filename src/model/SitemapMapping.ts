import { SitemapChangeFrequency } from "../enums/SitemapChangeFrequency";

const DEFAULT_SITEMAP_URL_CHANGEFREQ = SitemapChangeFrequency.Daily;

export class SitemapMapping {
  url: string;
  changefreq?: SitemapChangeFrequency;
  priority?: number;
  lastmod?: Date;

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
