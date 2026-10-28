import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { AccessSteps } from "../components/AccessSteps";
import { devicePages, HUB_DESCRIPTION, HUB_H1, HUB_TITLE } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Instalação", path: "/instalacao" },
];

export const InstalacaoPage = () => {
  return (
    <>
      <SEO title={HUB_TITLE} description={HUB_DESCRIPTION} path="/instalacao" jsonLd={buildJsonLd("hub", crumbs)} />
      <PageHero
        eyebrow="Dispositivos"
        title={HUB_H1}
        intro="Não importa qual dispositivo você usa, o Coffee Play roda liso. Instale em segundos na Smart TV, no TV Box, no Fire Stick, no celular ou no computador."
        breadcrumbs={crumbs}
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {devicePages.map((device) => (
              <Link
                key={device.slug}
                to={`/instalacao/${device.slug}`}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all hover:-translate-y-1"
              >
                <h2 className="font-bold text-xl text-gray-900 mb-2">{device.label}</h2>
                <p className="text-sm text-gray-500 mb-4">{device.compatible.join(", ")}</p>
                <span className="text-[#C67C2E] text-sm font-bold">Ver instalação</span>
              </Link>
            ))}
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <h2 className="font-bold text-xl text-gray-900 mb-2">Chromecast</h2>
              <p className="text-sm text-gray-500 mb-4">Transmita do celular para a TV.</p>
              <Link to="/instalacao/celular" className="text-[#C67C2E] text-sm font-bold">
                Ver no celular
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mt-12">
            Apenas uma conexão com a internet de no mínimo 10 Mega e um dispositivo compatível (TV, Celular, TV Box ou
            Computador).
          </p>
        </div>
      </section>
      <AccessSteps />
    </>
  );
};
