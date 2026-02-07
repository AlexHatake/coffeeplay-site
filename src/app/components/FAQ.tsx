import React from "react";
import { Plus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const FAQ = () => {
  const faqs = [
    {
      q: "O que preciso para usar o Coffee Play?",
      a: "Apenas uma conexão com a internet de no mínimo 10 Mega e um dispositivo compatível (TV, Celular, TV Box ou Computador)."
    },
    {
      q: "Posso testar antes de pagar?",
      a: "Sim! Disponibilizamos um teste gratuito para você conferir nossa qualidade e grade de canais antes de assinar."
    },
    {
      q: "Como recebo meu acesso?",
      a: "O envio é imediato e automático. Assim que o pagamento for confirmado ou o teste solicitado, enviamos os dados no seu WhatsApp ou E-mail."
    },
    {
      q: "Funciona em mais de uma tela?",
      a: "Nossos planos padrão são para 1 tela. Se precisar de mais telas simultâneas, consulte nossos preços especiais para pontos adicionais."
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Aceitamos PIX, Cartão de Crédito e Boleto. O pagamento é 100% seguro."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
            Dúvidas Frequentes
        </h2>

        <Accordion.Root type="single" defaultValue="item-0" collapsible className="space-y-4">
          {faqs.map((item, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left text-gray-800 font-bold hover:bg-gray-50 transition-colors group data-[state=open]:text-[#C67C2E]">
                  {item.q}
                  <Plus className="text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-[#C67C2E]" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-gray-600 px-6 pb-6 pt-2 bg-gray-50/50">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};
