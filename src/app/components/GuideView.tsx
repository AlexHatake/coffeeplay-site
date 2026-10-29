import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "./SEO";
import { Breadcrumbs } from "./Breadcrumbs";
import { RichText } from "./RichText";
import type { GuideDoc } from "../content/rich";
import type { Crumb } from "../seo/structuredData";
import { buildJsonLd } from "../seo/structuredData";

export function GuideView({ doc, crumbs }: { doc: GuideDoc; crumbs: Crumb[] }) {
  return (
    <>
      <SEO
        title={doc.title}
        description={doc.description}
        path={doc.path}
        jsonLd={buildJsonLd(doc.kind, crumbs, {
          headline: doc.h1,
          description: doc.description,
          path: doc.path,
        })}
      />
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <article>
            <p className="text-[#C67C2E] font-bold uppercase tracking-wider text-xs mb-4">{doc.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">{doc.h1}</h1>
            <p className="text-sm text-gray-500 mb-6">29 de outubro de 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{doc.intro}</p>
            <RichText source={doc.body} />
            <h2 className="text-2xl font-extrabold text-gray-900 pt-10 mb-4">Continue lendo</h2>
            <ul className="space-y-2">
              {doc.related.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-[#C67C2E] font-semibold hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
