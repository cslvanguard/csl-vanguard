import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://cslvanguard.com/sitemap.xml",
    host: "https://cslvanguard.com",
  };
}
