import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { FAQ_DESCRIPTION, FAQ_H1, FAQ_TITLE, faqs } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Dúvidas frequentes", path: "/faq" },
];

export const FaqPage = () => {
  return (
    <>
      <SEO title={FAQ_TITLE} description={FAQ_DESCRIPTION} path="/faq" jsonLd={buildJsonLd("faq", crumbs)} />
      <PageHero
        eyebrow="Ajuda"
        title={FAQ_H1}
        intro="Respostas sobre o que você precisa para usar, o teste grátis, o envio do acesso, as telas e o pagamento."
        breadcrumbs={crumbs}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          {faqs.map((item) => (
            <article key={item.q} className="border border-gray-200 rounded-lg overflow-hidden">
              <h2 className="p-6 text-left text-gray-800 font-bold">{item.q}</h2>
              <p className="text-gray-600 px-6 pb-6 pt-2 bg-gray-50/50 leading-relaxed">{item.a}</p>
            </article>
          ))}
          <p className="text-center text-gray-500 pt-6">
            Prefere ver os valores?{" "}
            <Link to="/planos" className="text-[#C67C2E] font-semibold hover:underline">
              Planos e preços
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
