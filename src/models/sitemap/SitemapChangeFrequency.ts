/**
 * Enum representing the frequency with which a resource is expected to change,
 * primarily used for sitemap generation to provide hints to search engines.
 *
 * Each value specifies a time interval indicating how frequently the resource changes,
 * helping search engines determine how often to crawl the resource.
 */
export enum SitemapChangeFrequency {
  Always = "always",
  Hourly = "hourly",
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
  Never = "never",
}
