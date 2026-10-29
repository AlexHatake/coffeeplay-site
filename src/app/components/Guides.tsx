import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../content/posts";

export const Guides = () => {
  return (
    <section id="guias" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Guias práticos</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Textos para resolver imagem, internet, aparelho e a forma do acesso, com o teste de 4 horas e os preços que já estão no site.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.path}
              to={article.path}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="font-extrabold text-gray-900 mb-2">{article.h1}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{article.description}</p>
            </Link>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          <Link to="/teste-gratis" className="text-[#C67C2E] font-semibold hover:underline">Teste grátis de 4 horas</Link>
          <span className="mx-2 text-gray-300">·</span>
          <Link to="/apps" className="text-[#C67C2E] font-semibold hover:underline">Apps de lista</Link>
          <span className="mx-2 text-gray-300">·</span>
          <Link to="/blog" className="text-[#C67C2E] font-semibold hover:underline">Todos os guias</Link>
        </p>
      </div>
    </section>
  );
};
