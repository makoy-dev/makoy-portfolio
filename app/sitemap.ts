import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL.href,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: new URL("/projects/acosa-accounting-app", SITE_URL).href,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
