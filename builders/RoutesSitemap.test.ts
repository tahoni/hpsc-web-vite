import { describe, expect, it } from "vitest";
import { generateRoutesSitemap } from "./RoutesSitemap";
import { coreRoutes } from "@shared/routes/BaseRoutes";

describe("generateRoutesSitemap", () => {
  it("returns a well-formed XML sitemap", async () => {
    const xml = await generateRoutesSitemap();

    expect(xml).toContain("<?xml");
    expect(xml).toContain("<urlset");
    expect(xml).toContain("</urlset>");
  });

  it("includes exactly one <url> entry per core route", async () => {
    const xml = await generateRoutesSitemap();
    const urlCount = (xml.match(/<url>/g) ?? []).length;

    expect(urlCount).toBe(coreRoutes.length);
    coreRoutes.forEach((route) => {
      expect(xml).toContain(`<loc>`);
      expect(xml).toMatch(new RegExp(`<loc>[^<]*${route.path}</loc>`));
    });
  });

  it("gives the Home route the highest priority and every other route a lower one", async () => {
    const xml = await generateRoutesSitemap();
    const homeRoute = coreRoutes.find((route) => route.name === "Home");

    expect(homeRoute).toBeDefined();
    expect(xml).toMatch(
      new RegExp(`<loc>[^<]*${homeRoute!.path}</loc>[\\s\\S]*?<priority>1\\.0</priority>`),
    );

    const otherRoutes = coreRoutes.filter((route) => route.name !== "Home");
    otherRoutes.forEach((route) => {
      expect(xml).toMatch(
        new RegExp(`<loc>[^<]*${route.path}</loc>[\\s\\S]*?<priority>0\\.5</priority>`),
      );
    });
  });
});
