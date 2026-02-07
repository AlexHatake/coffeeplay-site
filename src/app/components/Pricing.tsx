import React from "react";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      period: "MENSAL",
      price: "24,90",
      total: "24,90",
      featured: false,
      link: "https://coffeeplay.tv/store/coffeplay-servicos"
    },
    {
      period: "TRIMESTRAL",
      price: "23,30",
      total: "69,90",
      featured: true,
      save: "Economize R$ 4,80",
      link: "https://coffeeplay.tv/store/planos-90-dias"
    },
    {
      period: "SEMESTRAL",
      price: "21,66",
      total: "130,00",
      featured: false,
      save: "Economize R$ 19,40",
      link: "https://coffeeplay.tv/store/planos-180-dias"
    },
    {
      period: "ANUAL",
      price: "20,83",
      total: "250,00",
      featured: false,
      save: "Economize R$ 48,80",
      link: "https://coffeeplay.tv/store/planos-365-dias"
    }
  ];

  const benefits = [
    "+ 90.000 Conteúdos",
    "Canais 4K, FHD, HD e SD",
    "Filmes e Séries Ondemand",
    "Canais Adultos (Opcional)",
    "Guia de Programação (EPG)",
    "Assistir no Celular ou TV",
    "Suporte via WhatsApp"
  ];

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Planos Flexíveis</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Escolha o melhor período para você. Sem multas, sem fidelidade e com renovação manual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
                key={index} 
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
                    plan.featured 
                    ? "bg-white border-2 border-[#C67C2E] shadow-2xl scale-105 z-10" 
                    : "bg-gray-50 border border-gray-100 hover:border-[#C67C2E] hover:shadow-lg"
                }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C67C2E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Mais Popular
                </div>
              )}

              <div className="p-8 text-center border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-500 mb-2">{plan.period}</h3>
                <div className="flex items-center justify-center text-gray-900">
                    <span className="text-xl font-medium mt-2">R$</span>
                    <span className="text-5xl font-extrabold">{plan.total}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Equivalente a R$ {plan.price}/mês</p>
                {plan.save && <p className="text-green-600 text-xs font-bold mt-2 bg-green-50 inline-block px-2 py-1 rounded">{plan.save}</p>}
              </div>

              <div className="p-8 flex-1">
                <ul className="space-y-4">
                    {benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <Check className="text-[#C67C2E] shrink-0" size={18} />
                            {b}
                        </li>
                    ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a 
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-lg font-bold text-center transition-colors ${
                        plan.featured
                        ? "bg-[#C67C2E] hover:bg-[#A66624] text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                >
                    ASSINAR AGORA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
