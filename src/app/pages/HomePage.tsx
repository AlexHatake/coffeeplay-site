import React from "react";
import { Hero } from "../components/Hero";
import { InfoStrip } from "../components/InfoStrip";
import { Devices } from "../components/Devices";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Reseller } from "../components/Reseller";
import { SEO } from "../components/SEO";
import { HOME_DESCRIPTION, HOME_TITLE } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

export const HomePage = () => {
  return (
    <>
      <SEO
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        path="/"
        keywords="IPTV, Smart TV, TV Box, Fire Stick, Android TV, celular, PC, 4K, filmes, séries, teste grátis, Coffee Play"
        jsonLd={buildJsonLd("home")}
      />
      <Hero />
      <InfoStrip />
      <Devices />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Reseller />
    </>
  );
};
