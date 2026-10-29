import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { PageHero } from "../components/PageHero";
import { faqs, plans, TESTE_DESCRIPTION, TESTE_H1, TESTE_TITLE, WHATSAPP_TEST } from "../content/site";
import { buildJsonLd } from "../seo/structuredData";

const crumbs = [
  { name: "Início", path: "/" },
  { name: "Teste grátis", path: "/teste-gratis" },
];

export const TesteGratisPage = () => {
  const need = faqs.find((item) => item.q.startsWith("O que preciso"));
  const receive = faqs.find((item) => item.q.startsWith("Como recebo"));
  const screens = faqs.find((item) => item.q.startsWith("Funciona"));

  return (
    <>
      <SEO title={TESTE_TITLE} description={TESTE_DESCRIPTION} path="/teste-gratis" jsonLd={buildJsonLd("teste", crumbs)} />
      <PageHero
        eyebrow="Teste grátis"
        title={TESTE_H1}
        intro="O site oferece teste grátis de 4 horas para conferir a qualidade e a grade de canais antes de assinar. O pedido é no WhatsApp e o acesso chega na hora, no WhatsApp ou no e-mail."
        breadcrumbs={crumbs}
        secondaryHref="/planos"
        secondaryLabel="Ver planos"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-gray-900">O que está incluído no pedido</h2>
          <p>
            O botão do site chama o teste de 4 horas. A pergunta publicada na FAQ diz que há um teste gratuito para você conferir a qualidade e a grade antes de assinar. Não há, nesta página, um segundo prazo nem uma lista de canais diferente da que o acesso de teste abrir na sua tela.
          </p>
          {need ? <p>{need.a}</p> : null}
          {receive ? <p>{receive.a}</p> : null}
          {screens ? <p>{screens.a}</p> : null}
          <h2 className="text-3xl font-extrabold text-gray-900 pt-4">Como pedir</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Chame no WhatsApp pelo botão de teste, no aparelho em que você vai assistir.</li>
            <li>Espere os dados no WhatsApp ou no e-mail. O envio é imediato e automático.</li>
            <li>Abra na Smart TV, no TV Box, no celular ou no computador, com internet de no mínimo 10 Mega.</li>
            <li>Se a imagem servir, os períodos publicados estão na página de planos, sem multa e sem fidelidade.</li>
          </ol>
          <p>
            Os aparelhos compatíveis estão em <Link to="/instalacao" className="text-[#C67C2E] font-semibold hover:underline">instalação</Link>.
            Se a imagem cortar, o guia <Link to="/blog/iptv-travando" className="text-[#C67C2E] font-semibold hover:underline">IPTV travando</Link> ajuda a separar rede, tela extra e aparelho.
            Dúvidas de pagamento e de telas estão na <Link to="/faq" className="text-[#C67C2E] font-semibold hover:underline">FAQ</Link>.
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 pt-4">Se quiser continuar</h2>
          <ul className="space-y-2">
            {plans.map((plan) => (
              <li key={plan.period}>
                {plan.offerName}: R$ {plan.totalLabel}
                {plan.save ? ` (${plan.save}, equivalente a R$ ${plan.monthlyLabel}/mês)` : ` (equivalente a R$ ${plan.monthlyLabel}/mês)`}
              </li>
            ))}
          </ul>
          <p>
            A renovação é manual. O pagamento informado é PIX, cartão de crédito ou boleto.
          </p>
          <a
            href={WHATSAPP_TEST}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#C67C2E] hover:bg-[#A66624] text-white font-bold rounded-lg"
          >
            Pedir teste de 4 horas
          </a>
        </div>
      </section>
    </>
  );
};
