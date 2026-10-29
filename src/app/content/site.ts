import { appGuides } from "./apps";
import { articles } from "./posts";

export const SITE_URL = "https://coffeeplay.com.br";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const LOGO = `${SITE_URL}/logo.png`;
export const OG_IMAGE_ALT = "Coffee Play — filmes, séries e TV ao vivo em 4K";

export const WHATSAPP_TEST = "https://wa.me/5521991784378";
export const WHATSAPP_SUPPORT = "https://wa.me/5521987998271";
export const EMAIL = "coffeeplayy@gmail.com";
export const PHONE_DISPLAY = "(21) 98799-8271";
export const PHONE_E164 = "+55-21-98799-8271";
export const LOGIN_URL = "https://coffeeplay.tv/login";

export const HOME_TITLE = "IPTV Premium: Canais 4K e Teste Grátis | Coffee Play";
export const HOME_DESCRIPTION =
  "Assine o IPTV Coffee Play: +90.000 conteúdos em 4K e Full HD, filmes, séries e canais ao vivo. Teste grátis de 4 horas e planos a partir de R$ 24,90.";

export type Plan = {
  period: string;
  offerName: string;
  totalLabel: string;
  monthlyLabel: string;
  schemaPrice: string;
  featured: boolean;
  save?: string;
  link: string;
};

export const plans: Plan[] = [
  {
    period: "MENSAL",
    offerName: "Plano Mensal",
    totalLabel: "24,90",
    monthlyLabel: "24,90",
    schemaPrice: "24.90",
    featured: false,
    link: "https://coffeeplay.tv/store/coffeplay-servicos",
  },
  {
    period: "TRIMESTRAL",
    offerName: "Plano Trimestral",
    totalLabel: "69,90",
    monthlyLabel: "23,30",
    schemaPrice: "69.90",
    featured: true,
    save: "Economize R$ 4,80",
    link: "https://coffeeplay.tv/store/planos-90-dias",
  },
  {
    period: "SEMESTRAL",
    offerName: "Plano Semestral",
    totalLabel: "130,00",
    monthlyLabel: "21,66",
    schemaPrice: "130.00",
    featured: false,
    save: "Economize R$ 19,40",
    link: "https://coffeeplay.tv/store/planos-180-dias",
  },
  {
    period: "ANUAL",
    offerName: "Plano Anual",
    totalLabel: "250,00",
    monthlyLabel: "20,83",
    schemaPrice: "250.00",
    featured: false,
    save: "Economize R$ 48,80",
    link: "https://coffeeplay.tv/store/planos-365-dias",
  },
];

export const benefits = [
  "+ 90.000 Conteúdos",
  "Canais 4K, FHD, HD e SD",
  "Filmes e Séries Ondemand",
  "Canais Adultos (Opcional)",
  "Guia de Programação (EPG)",
  "Assistir no Celular ou TV",
  "Suporte via WhatsApp",
];

export const faqs = [
  {
    q: "O que preciso para usar o Coffee Play?",
    a: "Apenas uma conexão com a internet de no mínimo 10 Mega e um dispositivo compatível (TV, Celular, TV Box ou Computador).",
  },
  {
    q: "Posso testar antes de pagar?",
    a: "Sim! Disponibilizamos um teste gratuito para você conferir nossa qualidade e grade de canais antes de assinar.",
  },
  {
    q: "Como recebo meu acesso?",
    a: "O envio é imediato e automático. Assim que o pagamento for confirmado ou o teste solicitado, enviamos os dados no seu WhatsApp ou E-mail.",
  },
  {
    q: "Funciona em mais de uma tela?",
    a: "Nossos planos padrão são para 1 tela. Se precisar de mais telas simultâneas, consulte nossos preços especiais para pontos adicionais.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos PIX, Cartão de Crédito e Boleto. O pagamento é 100% seguro.",
  },
];

export type DevicePageContent = {
  slug: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  compatible: string[];
  extra?: string;
};

export const devicePages: DevicePageContent[] = [
  {
    slug: "smart-tv",
    label: "Smart TV",
    title: "Coffee Play na Smart TV | Samsung, LG e Android TV",
    description:
      "Use o Coffee Play na Smart TV Samsung, LG, Sony ou Android TV. Internet de 10 Mega, teste grátis de 4 horas, acesso no WhatsApp e suporte 24 horas.",
    h1: "Coffee Play na Smart TV",
    eyebrow: "Smart TV",
    intro:
      "O Coffee Play é compatível com Smart TVs Samsung, LG, Sony e Android TV. Não importa qual dispositivo você usa, o Coffee Play roda liso. Instale em segundos e, se precisar, fale com o suporte no WhatsApp.",
    compatible: ["Samsung", "LG", "Sony", "Android TV"],
  },
  {
    slug: "android-tv-box",
    label: "Android e TV Box",
    title: "Coffee Play no Android TV e TV Box",
    description:
      "Coffee Play no Android TV e TV Box: MXQ, Mi Box, Fire Stick e Roku. Internet de 10 Mega, acesso no WhatsApp ou e-mail e teste grátis de 4 horas.",
    h1: "Coffee Play no Android TV e TV Box",
    eyebrow: "Android TV e TV Box",
    intro:
      "TV Box e Android TV estão na lista de compatíveis: MXQ, Mi Box, Fire Stick e Roku, além de Android TV. A exigência de internet é a mesma: no mínimo 10 Mega.",
    compatible: ["Android TV", "MXQ", "Mi Box", "Fire Stick", "Roku"],
    extra:
      "O Fire Stick também entra nessa lista. Se o seu aparelho é um Fire Stick, veja a página específica.",
  },
  {
    slug: "fire-stick",
    label: "Fire Stick",
    title: "Coffee Play no Fire Stick | TV Box",
    description:
      "O Fire Stick é um dos TV Boxes compatíveis com o Coffee Play, junto com MXQ, Mi Box e Roku. Teste grátis de 4 horas e acesso no WhatsApp ou e-mail.",
    h1: "Coffee Play no Fire Stick",
    eyebrow: "Fire Stick",
    intro:
      "O Fire Stick aparece na lista de TV Boxes compatíveis, junto com MXQ, Mi Box e Roku. O acesso é enviado no WhatsApp ou no e-mail, de forma imediata e automática.",
    compatible: ["Fire Stick", "MXQ", "Mi Box", "Roku"],
  },
  {
    slug: "celular",
    label: "Celular",
    title: "Coffee Play no Celular | Android e iPhone",
    description:
      "Assista ao Coffee Play no Android, iPhone e iPad, ou transmita do celular para a TV com Chromecast. Teste grátis de 4 horas e suporte no WhatsApp.",
    h1: "Coffee Play no celular",
    eyebrow: "Celular",
    intro:
      "Dá para assistir no celular, em Android e iOS (iPhone/iPad). Com Chromecast, você transmite do celular para a TV.",
    compatible: ["Android", "iOS (iPhone/iPad)", "Chromecast"],
  },
  {
    slug: "pc",
    label: "Computador",
    title: "Coffee Play no PC | Windows, Mac e Linux",
    description:
      "Use o Coffee Play no computador com Windows, Mac ou Linux. Internet de no mínimo 10 Mega, teste grátis de 4 horas e acesso imediato no WhatsApp ou e-mail.",
    h1: "Coffee Play no computador",
    eyebrow: "Computador",
    intro:
      "O Coffee Play roda em computadores Windows, Mac e Linux. Vale a mesma condição dos outros aparelhos: uma conexão de no mínimo 10 Mega.",
    compatible: ["Windows", "Mac", "Linux"],
  },
];

export const PLANOS_TITLE = "Planos e Preços de IPTV | Coffee Play";
export const PLANOS_DESCRIPTION =
  "Planos sem multas, sem fidelidade e com renovação manual: mensal R$ 24,90, trimestral R$ 69,90, semestral R$ 130,00 e anual R$ 250,00. PIX, cartão ou boleto.";
export const PLANOS_H1 = "Planos e preços do Coffee Play";

export const FAQ_TITLE = "Dúvidas Frequentes sobre IPTV | Coffee Play";
export const FAQ_DESCRIPTION =
  "Dúvidas sobre o Coffee Play: internet de 10 Mega, teste grátis de 4 horas, envio do acesso, uma tela e pagamento por PIX, cartão ou boleto. Suporte 24 horas.";
export const FAQ_H1 = "Dúvidas frequentes";

export const HUB_TITLE = "Instalação do Coffee Play por Dispositivo";
export const HUB_DESCRIPTION =
  "Não importa o aparelho: veja como usar o Coffee Play na Smart TV, Android, TV Box, Fire Stick, celular e PC. Internet de 10 Mega e suporte no WhatsApp.";
export const HUB_H1 = "Onde instalar o Coffee Play";

export const TESTE_TITLE = "Teste Grátis de 4 Horas | Coffee Play";
export const TESTE_DESCRIPTION =
  "O Coffee Play oferece teste grátis de 4 horas. Peça no WhatsApp, receba o acesso na hora e confira a qualidade e a grade antes de assinar, sem fidelidade.";
export const TESTE_H1 = "Teste grátis de 4 horas";

export const BLOG_TITLE = "Guias de IPTV | Coffee Play";
export const BLOG_DESCRIPTION =
  "Guias do Coffee Play sobre imagem que trava, internet para 4K, M3U e Xtream Codes, como escolher um IPTV e qual aparelho usar em casa, com suporte.";
export const BLOG_H1 = "Guias sobre IPTV";

export const APPS_TITLE = "Apps para assistir IPTV | Coffee Play";
export const APPS_DESCRIPTION =
  "O Coffee Play não exige um aplicativo único. Veja como Smarters, TiviMate e XCIPTV pedem o acesso que chega no WhatsApp ou no e-mail. Há teste de 4 horas.";
export const APPS_H1 = "Apps para usar o acesso";

export const NOT_FOUND_TITLE = "Página não encontrada | Coffee Play";
export const NOT_FOUND_DESCRIPTION =
  "Esse endereço não existe no Coffee Play. Volte ao início, veja os planos, a instalação por dispositivo ou as dúvidas frequentes.";

export type SeoKind = "home" | "planos" | "faq" | "hub" | "device" | "notfound" | "blog" | "article" | "apps" | "app" | "teste";

export type SeoRoute = {
  path: string;
  renderPath: string;
  file: string;
  title: string;
  description: string;
  h1Includes: string[];
  htmlIncludes: string[];
  kind: SeoKind;
  changefreq?: "weekly" | "monthly";
  priority?: string;
  noindex?: boolean;
  minWords?: number;
  maxWords?: number;
};

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    renderPath: "/",
    file: "index.html",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    h1Includes: ["IPTV Premium com", "Filmes, Séries e TV", "4K Ultra HD"],
    htmlIncludes: [
      "O que preciso para usar o Coffee Play?",
      "Excelente serviço",
      "24,90",
      "69,90",
      "130,00",
      "250,00",
      "Smart TVs",
    ],
    kind: "home",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/planos",
    renderPath: "/planos",
    file: "planos/index.html",
    title: PLANOS_TITLE,
    description: PLANOS_DESCRIPTION,
    h1Includes: [PLANOS_H1],
    htmlIncludes: ["24,90", "69,90", "130,00", "250,00", "Sem multas, sem fidelidade", "PIX, Cartão de Crédito e Boleto"],
    kind: "planos",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/faq",
    renderPath: "/faq",
    file: "faq/index.html",
    title: FAQ_TITLE,
    description: FAQ_DESCRIPTION,
    h1Includes: [FAQ_H1],
    htmlIncludes: faqs.map((item) => item.q),
    kind: "faq",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/instalacao",
    renderPath: "/instalacao",
    file: "instalacao/index.html",
    title: HUB_TITLE,
    description: HUB_DESCRIPTION,
    h1Includes: [HUB_H1],
    htmlIncludes: ["Smart TV", "Fire Stick", "Chromecast", "10 Mega"],
    kind: "hub",
    changefreq: "monthly",
    priority: "0.8",
  },
  ...devicePages.map((device) => ({
    path: `/instalacao/${device.slug}`,
    renderPath: `/instalacao/${device.slug}`,
    file: `instalacao/${device.slug}/index.html`,
    title: device.title,
    description: device.description,
    h1Includes: [device.h1],
    htmlIncludes: [device.intro, ...device.compatible, "10 Mega", "WhatsApp"],
    kind: "device" as const,
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
  {
    path: "/teste-gratis",
    renderPath: "/teste-gratis",
    file: "teste-gratis/index.html",
    title: TESTE_TITLE,
    description: TESTE_DESCRIPTION,
    h1Includes: [TESTE_H1],
    htmlIncludes: ["4 horas", "WhatsApp", "10 Mega"],
    kind: "teste",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/blog",
    renderPath: "/blog",
    file: "blog/index.html",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    h1Includes: [BLOG_H1],
    htmlIncludes: ["IPTV travando: como resolver", "M3U ou Xtream Codes: qual a diferença"],
    kind: "blog",
    changefreq: "weekly",
    priority: "0.7",
  },
  ...articles.map((article) => ({
    path: article.path,
    renderPath: article.path,
    file: `${article.path.slice(1)}/index.html`,
    title: article.title,
    description: article.description,
    h1Includes: [article.h1],
    htmlIncludes: [article.h1, "Coffee Play"],
    kind: "article" as const,
    changefreq: "monthly" as const,
    priority: "0.6",
    minWords: article.minWords,
    maxWords: article.maxWords,
  })),
  {
    path: "/apps",
    renderPath: "/apps",
    file: "apps/index.html",
    title: APPS_TITLE,
    description: APPS_DESCRIPTION,
    h1Includes: [APPS_H1],
    htmlIncludes: ["IPTV Smarters", "TiviMate", "XCIPTV"],
    kind: "apps",
    changefreq: "monthly",
    priority: "0.6",
  },
  ...appGuides.map((app) => ({
    path: app.path,
    renderPath: app.path,
    file: `${app.path.slice(1)}/index.html`,
    title: app.title,
    description: app.description,
    h1Includes: [app.h1],
    htmlIncludes: ["WhatsApp", "não"],
    kind: "app" as const,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
  {
    path: "/404",
    renderPath: "/pagina-inexistente",
    file: "404.html",
    title: NOT_FOUND_TITLE,
    description: NOT_FOUND_DESCRIPTION,
    h1Includes: ["Página não encontrada"],
    htmlIncludes: ["Planos", "Instalação", "Dúvidas frequentes"],
    kind: "notfound",
    noindex: true,
  },
];

export function offerDescription(plan: Plan) {
  const monthly = `Equivalente a R$ ${plan.monthlyLabel}/mês`;
  return plan.save ? `${monthly}. ${plan.save}.` : `${monthly}.`;
}
