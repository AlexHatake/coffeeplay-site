import React from "react";
import { Helmet } from "react-helmet-async";
import { OG_IMAGE, OG_IMAGE_ALT, SITE_URL } from "../content/site";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  jsonLd?: unknown;
  noindex?: boolean;
  keywords?: string;
};

export const SEO = ({ title, description, path, jsonLd, noindex, keywords }: SEOProps) => {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const json = jsonLd ? JSON.stringify(jsonLd).replace(/</g, "\\u003c") : "";

  return (
    <Helmet prioritizeSeoTags encodeSpecialCharacters={false}>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"}
      />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content="Coffee Play" />
      {!noindex ? <link rel="canonical" href={url} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Coffee Play" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {json ? <script type="application/ld+json">{json}</script> : null}
    </Helmet>
  );
};
