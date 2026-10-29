import {
  EMAIL,
  faqs,
  LOGO,
  offerDescription,
  OG_IMAGE,
  PHONE_E164,
  plans,
  SITE_URL,
  type SeoKind,
} from "../content/site";

export type Crumb = { name: string; path: string };

function abs(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function buildJsonLd(
  kind: SeoKind,
  breadcrumbs: Crumb[] = [],
  article?: { headline: string; description: string; path: string },
) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Coffee Play",
      url: `${SITE_URL}/`,
      logo: LOGO,
      image: `${SITE_URL}/og-image.png`,
      email: EMAIL,
      telephone: PHONE_E164,
      foundingDate: "2020",
      areaServed: "BR",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        email: EMAIL,
        contactType: "customer support",
        availableLanguage: "Portuguese",
        areaServed: "BR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Coffee Play",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  if (kind === "home" || kind === "faq") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/faq#faq`,
      url: `${SITE_URL}/faq`,
      inLanguage: "pt-BR",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  if (kind === "home" || kind === "planos") {
    graph.push({
      "@type": "Product",
      "@id": `${SITE_URL}/planos#produto`,
      name: "Coffee Play IPTV",
      description:
        "IPTV com mais de 90.000 conteúdos, canais em 4K, Full HD e HD, filmes e séries on demand. Planos sem multas, sem fidelidade e com renovação manual.",
      brand: { "@type": "Brand", name: "Coffee Play" },
      image: `${SITE_URL}/og-image.png`,
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.offerName,
        price: plan.schemaPrice,
        priceCurrency: "BRL",
        url: plan.link,
        availability: "https://schema.org/InStock",
        description: offerDescription(plan),
        seller: { "@id": `${SITE_URL}/#organization` },
      })),
    });
  }

  if ((kind === "article" || kind === "app") && article) {
    graph.push({
      "@type": "Article",
      headline: article.headline,
      description: article.description,
      inLanguage: "pt-BR",
      mainEntityOfPage: abs(article.path),
      url: abs(article.path),
      image: OG_IMAGE,
      datePublished: "2026-10-29",
      dateModified: "2026-10-29",
      author: { "@type": "Organization", name: "Coffee Play", "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    });
  }

  if (breadcrumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: abs(crumb.path),
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
