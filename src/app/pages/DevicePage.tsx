import React from "react";
import { Link, useParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { AccessSteps } from "../components/AccessSteps";
import { NotFoundPage } from "./NotFoundPage";
import { devicePages } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

export const DevicePage = () => {
  const { slug } = useParams();
  const device = devicePages.find((item) => item.slug === slug);

  if (!device) return <NotFoundPage />;

  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Instalação", path: "/instalacao" },
    { name: device.label, path: `/instalacao/${device.slug}` },
  ];

  return (
    <>
      <SEO
        title={device.title}
        description={device.description}
        path={`/instalacao/${device.slug}`}
        jsonLd={buildJsonLd("device", crumbs)}
      />
      <PageHero eyebrow={device.eyebrow} title={device.h1} intro={device.intro} breadcrumbs={crumbs} />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Compatível com</h2>
          <ul className="flex flex-wrap gap-2 mb-6">
            {device.compatible.map((name) => (
              <li key={name} className="px-3 py-1.5 rounded-full bg-white border border-orange-100 text-[#C67C2E] text-sm font-semibold">
                {name}
              </li>
            ))}
          </ul>
          {device.extra ? (
            <p className="text-gray-600 mb-4">
              {device.extra}{" "}
              <Link to="/instalacao/fire-stick" className="text-[#C67C2E] font-semibold hover:underline">
                Coffee Play no Fire Stick
              </Link>
              .
            </p>
          ) : null}
          <p className="text-gray-600">
            Nossos planos padrão são para 1 tela. Se precisar de mais telas simultâneas, consulte nossos preços especiais
            para pontos adicionais.
          </p>
        </div>
      </section>
      <AccessSteps />
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Também funciona em</h2>
          <div className="flex flex-wrap gap-3">
            {devicePages
              .filter((item) => item.slug !== device.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/instalacao/${item.slug}`}
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-[#C67C2E] hover:text-[#C67C2E] font-semibold text-sm"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              to="/planos"
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-[#C67C2E] hover:text-[#C67C2E] font-semibold text-sm"
            >
              Planos e preços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
