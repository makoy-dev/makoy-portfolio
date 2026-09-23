const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://makoy-dev.vercel.app";

const normalizedSiteUrl = configuredSiteUrl.startsWith("http")
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`;

export const SITE_URL = new URL(normalizedSiteUrl);
export const SITE_NAME = "Makoy Cameña";
export const SITE_TITLE = "Makoy Cameña — Full-stack Developer";
export const SITE_DESCRIPTION =
    "Portfolio of Makoy Cameña (Makoy Camena), a full-stack developer building reliable digital products with React, Next.js, Laravel, PHP, and TypeScript.";
