import { useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
  TWITTER_HANDLE,
  buildCanonicalUrl,
  buildPageTitle,
} from "../config/seo";
import { upsertJsonLd, upsertLink, upsertMeta } from "../utils/seo";

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  pathname = "/",
  image = OG_IMAGE,
  noIndex = false,
  organization = {},
}) => {
  useEffect(() => {
    const pageTitle = buildPageTitle(title);
    const canonicalUrl = buildCanonicalUrl(pathname);
    const siteName = organization.name?.trim() || SITE_NAME;
    const robots = noIndex ? "noindex, nofollow" : "index, follow";

    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", siteName);
    upsertMeta("name", "theme-color", THEME_COLOR);
    upsertMeta("name", "application-name", siteName);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", `${siteName} — creative product collective`);
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    if (TWITTER_HANDLE) {
      upsertMeta("name", "twitter:site", TWITTER_HANDLE);
    }

    upsertLink("canonical", canonicalUrl);

    const sameAs = [
      organization.instagram,
      organization.facebook,
      organization.X,
      organization.youtube,
    ].filter((url) => url?.trim());

    upsertJsonLd("seo-organization-jsonld", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: SITE_URL,
      email: organization.email?.trim() || undefined,
      telephone: organization.phoneNumber?.trim() || undefined,
      sameAs: sameAs.length > 0 ? sameAs : undefined,
      description,
    });

    upsertJsonLd("seo-website-jsonld", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: SITE_URL,
      description,
      publisher: {
        "@type": "Organization",
        name: siteName,
      },
    });
  }, [
    title,
    description,
    keywords,
    pathname,
    image,
    noIndex,
    organization,
  ]);

  return null;
};

export default Seo;
