/**
 * Enum representing the frequency with which a resource is expected to change,
 * primarily used for sitemap generation to provide hints to search engines.
 *
 * Each value specifies a time interval indicating how frequently the resource changes,
 * helping search engines determine how often to crawl the resource.
 *
 * Values:
 * - `Always`: The resource changes each time it is accessed.
 * - `Hourly`: The resource changes every hour.
 * - `Daily`: The resource changes every day.
 * - `Weekly`: The resource changes every week.
 * - `Monthly`: The resource changes every month.
 * - `Yearly`: The resource changes every year.
 * - `Never`: The resource is static and does not change.
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
