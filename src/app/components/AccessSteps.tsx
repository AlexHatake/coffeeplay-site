import React from "react";
import { Headset, Mail, Play, Wifi } from "lucide-react";

const steps = [
  {
    icon: <Play size={22} />,
    title: "Peça o teste ou escolha um plano",
    text: "Disponibilizamos um teste gratuito para você conferir nossa qualidade e grade de canais antes de assinar. O teste grátis é de 4 horas.",
  },
  {
    icon: <Mail size={22} />,
    title: "Receba o acesso na hora",
    text: "O envio é imediato e automático. Assim que o pagamento for confirmado ou o teste solicitado, enviamos os dados no seu WhatsApp ou E-mail.",
  },
  {
    icon: <Wifi size={22} />,
    title: "Conecte com no mínimo 10 Mega",
    text: "Apenas uma conexão com a internet de no mínimo 10 Mega e um dispositivo compatível (TV, Celular, TV Box ou Computador).",
  },
  {
    icon: <Headset size={22} />,
    title: "Suporte quando precisar",
    text: "Suporte via WhatsApp, com atendimento humanizado. Segunda a Segunda: 24 horas.",
  },
];

export const AccessSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">Como receber o acesso</h2>
        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-full bg-orange-50 text-[#C67C2E] flex items-center justify-center">
                  {step.icon}
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-[#C67C2E]">Passo {index + 1}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
