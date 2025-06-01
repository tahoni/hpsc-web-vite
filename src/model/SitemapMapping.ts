import { SitemapChangeFrequency } from "../enums/SitemapChangeFrequency";

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
    this.changefreq = mapping.changefreq;
    this.priority = mapping.priority;
    this.lastmod = mapping.lastmod;
  }
}
