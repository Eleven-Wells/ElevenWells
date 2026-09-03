export const SITE_NAME = "Eleven Wells";
export const SITE_SHORT_NAME = "11Wells";

export const DEFAULT_TITLE =
  "Eleven Wells | Product Studio & Creative Collective";

export const DEFAULT_DESCRIPTION =
  "Eleven Wells is a modern collective of creative and technical talent. We design, build, and launch digital products and client solutions that create lasting value.";

export const DEFAULT_KEYWORDS = [
  "Eleven Wells",
  "11Wells",
  "product studio",
  "creative collective",
  "digital products",
  "web development",
  "Paidink",
  "Nigeria",
].join(", ");

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://elevenwells.com";

export const TWITTER_HANDLE = import.meta.env.VITE_TWITTER_HANDLE || "";

export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE = `${SITE_URL}${OG_IMAGE_PATH}`;

export const THEME_COLOR = "#f5f1e6";

export function buildPageTitle(pageTitle) {
  if (!pageTitle) return DEFAULT_TITLE;
  return pageTitle.includes(SITE_NAME) || pageTitle.includes(SITE_SHORT_NAME)
    ? pageTitle
    : `${pageTitle} | ${SITE_NAME}`;
}

export function buildCanonicalUrl(pathname = "/") {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
