import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

export const NotFoundPage = () => {
  return (
    <>
      <SEO
        title={NOT_FOUND_TITLE}
        description={NOT_FOUND_DESCRIPTION}
        path="/404"
        noindex
        jsonLd={buildJsonLd("notfound")}
      />
      <section className="relative w-full pt-32 pb-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-[#C67C2E] font-bold uppercase tracking-wider text-xs mb-4">Erro 404</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Página não encontrada</h1>
          <p className="text-lg text-gray-600 mb-10">{NOT_FOUND_DESCRIPTION}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-[#C67C2E] hover:bg-[#A66624] text-white font-bold rounded-lg"
            >
              Início
            </Link>
            <Link
              to="/planos"
              className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#C67C2E] text-gray-700 font-bold rounded-lg"
            >
              Planos
            </Link>
            <Link
              to="/instalacao"
              className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#C67C2E] text-gray-700 font-bold rounded-lg"
            >
              Instalação
            </Link>
            <Link
              to="/faq"
              className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#C67C2E] text-gray-700 font-bold rounded-lg"
            >
              Dúvidas frequentes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
