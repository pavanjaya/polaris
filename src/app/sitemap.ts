import type { MetadataRoute } from "next";
import { insights } from "@/lib/content";

const base = "https://polarisrenewable.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/solutions", "/projects", "/p-ess", "/global", "/insights", "/sustainability", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );

  const posts = insights.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...routes, ...posts];
}
