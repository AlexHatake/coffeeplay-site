import React from "react";
import { DollarSign } from "lucide-react";

export const Reseller = () => {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6">
        <div className="w-16 h-16 bg-[#C67C2E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
            <DollarSign size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Seja um Revendedor
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Tenha sua própria renda extra com o sistema de IPTV que mais cresce no Brasil. Painel exclusivo, créditos baratos e suporte total.
        </p>

        <a
          href="https://wa.me/5521987998271"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-lg rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          QUERO REVENDER AGORA
        </a>
      </div>
    </section>
  );
};
