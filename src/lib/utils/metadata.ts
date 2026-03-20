import type { Metadata } from "next";

/**
 * Creates consistent SEO metadata for all pages across the Zenith Digital HK site.
 *
 * @param title - The page-specific title (will be suffixed with " | Zenith Digital HK")
 * @param description - Meta description for the page
 * @param path - The URL path (e.g. "/services/ai-strategy")
 * @returns A Next.js Metadata object with OpenGraph and Twitter card configuration
 */
export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | Zenith Digital HK`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName: "Zenith Digital HK",
      locale: "en_HK",
      type: "website",
      url: `https://zenithdigital.hk${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
