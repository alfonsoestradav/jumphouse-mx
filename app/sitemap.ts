import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...nav.map((item) => item.href),
    "/aviso-de-privacidad",
  ];

  return paths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/aviso-de-privacidad" ? "yearly" : "weekly",
    priority: path === "/" ? 1 : path === "/aviso-de-privacidad" ? 0.3 : 0.8,
  }));
}
