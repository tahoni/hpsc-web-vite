import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { SitemapMapping } from "../src/models/SitemapMapping";
import { coreRoutes } from "../src/config/Routes/BaseRoutes";
import { baseUrl } from "../src/constants/AppConstants";

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
// This code builds a sitemap using the sitemap package and streams the links into it.
// The sitemap is then converted to a string and logged to the console.
// You can modify the link array to include your own URLs and their properties.
// Make sure to replace "https://..." with your actual hostname.
// You can also adjust the changefreq and priority as needed for your sitemap.
// This code is a basic example and can be expanded to include more complex logic or additional features as needed.
