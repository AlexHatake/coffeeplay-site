import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { WHATSAPP_TEST } from "../content/site";
import { Breadcrumbs } from "./Breadcrumbs";
import type { Crumb } from "../seo/structuredData";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs?: Crumb[];
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  secondaryHref = "/planos",
  secondaryLabel = "Ver planos",
}: PageHeroProps) => {
  return (
    <section className="relative w-full pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C67C2E]/5 skew-x-12 transform origin-top-right translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C67C2E]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#C67C2E] font-bold text-xs uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C67C2E]" />
          {eyebrow}
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">{title}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">{intro}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_TEST}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#C67C2E] hover:bg-[#A66624] text-white text-lg font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Play fill="white" size={18} />
            Teste Grátis 4 Horas
          </a>
          {secondaryHref ? (
            <Link
              to={secondaryHref}
              className="px-8 py-4 bg-white text-gray-700 hover:text-[#C67C2E] border-2 border-gray-200 hover:border-[#C67C2E] text-lg font-bold rounded-lg transition-all flex items-center justify-center"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
