import type { MetadataRoute } from "next";
import { guides } from "@/lib/site-data";

const baseUrl = "https://casaminder.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/areas",
    "/about",
    "/contact",
    "/guides",
    "/privacy",
    "/terms",
    "/pt",
    "/pt/services",
    "/pt/pricing",
    "/pt/areas",
    "/pt/about",
    "/pt/contact",
  ];

  const routes = [...staticRoutes, ...guides.map((guide) => guide.href)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
