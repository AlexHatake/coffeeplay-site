import React from "react";
import { Helmet } from "react-helmet-async";

export const SEO = () => {
  const siteTitle = "Coffee Play | IPTV Premium no Brasil - Filmes, Séries e Canais 4K";
  const siteDescription = "Assista ao melhor do IPTV no Brasil com a Coffee Play. Mais de 90.000 conteúdos em 4K, Full HD e HD. Teste grátis agora em Smart TV, TV Box, Celular e PC.";
  const siteUrl = "https://coffeeplay.com.br"; // Exemplo, deve ser substituído pelo real
  const siteImage = "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1080&auto=format&fit=crop";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="IPTV, TV Box, Lista IPTV, Streaming, 4K, Filmes, Séries, Futebol Ao Vivo, Android TV, Smart TV, Canais, Teste Grátis" />
      <meta name="author" content="Coffee Play" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#C67C2E" />
    </Helmet>
  );
};
