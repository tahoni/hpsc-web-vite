/**
 * Sitemap builder script for HPSC Web.
 *
 * Executed via `npm run sitemap`, this module generates an XML sitemap from the
 * app's static route metadata. Output is printed to stdout so callers can
 * redirect to a file (e.g. `npm run sitemap > target/sitemap.xml`).
 *
 * @module
 */
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { SitemapMapping } from "@/models/sitemap/SitemapMappings";
import { coreRoutes } from "@shared/routes/BaseRoutes";
import { baseUrl } from "@/constants/commonConstants.ts";

/**
 * Generates an XML sitemap containing URLs, priorities, and modification dates for specified routes.
 *
 * This function creates a sitemap by mapping over a collection of core route objects,
 * transforming each route into a SitemapMapping containing relevant metadata such
 * as the URL, priority, and last modification date.
 * Each route is assigned a priority, where the "Home" route has the highest priority.
 *
 * The method uses a SitemapStream to construct the sitemap and returns a promise
 * that resolves to the generated XML string when the stream completes.
 *
 * @returns {Promise<string>} A promise that resolves to the XML string representation of the sitemap.
 */
export const generateRoutesSitemap = async () => {
  // An array with your links
  const links: SitemapMapping[] = coreRoutes.map((route) => {
    const priority: number = route.name === "Home" ? 1.0 : 0.5;
    return new SitemapMapping({
      url: route.path,
      priority: priority,
      lastmod: route.dateUpdated,
    });
  });

  // Create a stream to write to
  const stream = new SitemapStream({
    hostname: baseUrl,
    lastmodDateOnly: true,
  });

  // Return a promise that resolves with your XML string
  const data = await streamToPromise(Readable.from(links).pipe(stream));
  return data.toString();
};

generateRoutesSitemap().then((xml) => {
  console.log(xml);
});
