import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { Pricing } from "../components/Pricing";
import { faqs, PLANOS_DESCRIPTION, PLANOS_H1, PLANOS_TITLE } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Planos e preços", path: "/planos" },
];

export const PlanosPage = () => {
  const payment = faqs.find((item) => item.q.startsWith("Quais são"));
  const screens = faqs.find((item) => item.q.startsWith("Funciona"));

  return (
    <>
      <SEO
        title={PLANOS_TITLE}
        description={PLANOS_DESCRIPTION}
        path="/planos"
        jsonLd={buildJsonLd("planos", crumbs)}
      />
      <PageHero
        eyebrow="Planos"
        title={PLANOS_H1}
        intro="Escolha o melhor período para você. Sem multas, sem fidelidade e com renovação manual."
        breadcrumbs={crumbs}
        secondaryHref="/faq"
        secondaryLabel="Dúvidas frequentes"
      />
      <Pricing showHeading={false} />
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-4 text-gray-600">
          {payment ? <p>{payment.a}</p> : null}
          {screens ? <p>{screens.a}</p> : null}
          <p>
            <Link to="/faq" className="text-[#C67C2E] font-semibold hover:underline">
              Ver todas as dúvidas frequentes
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
