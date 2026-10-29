import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { appGuides } from "../content/apps";
import { APPS_DESCRIPTION, APPS_H1, APPS_TITLE } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Apps", path: "/apps" },
];

export const AppsPage = () => {
  return (
    <>
      <SEO title={APPS_TITLE} description={APPS_DESCRIPTION} path="/apps" jsonLd={buildJsonLd("apps", crumbs)} />
      <PageHero
        eyebrow="Apps"
        title={APPS_H1}
        intro="O Coffee Play não publica um aplicativo obrigatório. O acesso chega no WhatsApp ou no e-mail. Estes guias mostram como três players comuns pedem esses dados, sem tratar nenhum deles como app oficial."
        breadcrumbs={crumbs}
        secondaryHref="/blog/m3u-ou-xtream-codes"
        secondaryLabel="M3U ou Xtream"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 max-w-5xl">
          {appGuides.map((app) => (
            <Link
              key={app.path}
              to={app.path}
              className="block bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#C67C2E] transition-all"
            >
              <h2 className="text-xl font-extrabold text-gray-900 mb-3">{app.h1}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{app.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
