import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { articles } from "../content/posts";
import { BLOG_DESCRIPTION, BLOG_H1, BLOG_TITLE } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Guias", path: "/blog" },
];

export const BlogPage = () => {
  return (
    <>
      <SEO title={BLOG_TITLE} description={BLOG_DESCRIPTION} path="/blog" jsonLd={buildJsonLd("blog", crumbs)} />
      <PageHero
        eyebrow="Guias"
        title={BLOG_H1}
        intro="Textos práticos sobre imagem, internet, lista M3U ou Xtream, escolha do serviço e aparelho. Os preços e o teste citados são os que o site já publica."
        breadcrumbs={crumbs}
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 max-w-5xl">
          {articles.map((article) => (
            <Link
              key={article.path}
              to={article.path}
              className="block bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#C67C2E] transition-all"
            >
              <h2 className="text-xl font-extrabold text-gray-900 mb-3">{article.h1}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{article.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
