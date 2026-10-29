import fs from "fs";
import http from "http";
import path from "path";

const root = process.cwd();
const dist = path.join(root, "dist");
const manifest = JSON.parse(fs.readFileSync(path.join(root, ".ssr-build", "manifest.json"), "utf8"));

function decode(value) {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function stripTags(value) {
  return decode(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function metaContent(html, key) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const name = tag.match(/\b(?:name|property)=["']([^"']+)["']/i);
    if (!name || name[1].toLowerCase() !== key.toLowerCase()) continue;
    const content = tag.match(/\bcontent=["']([^"']*)["']/i);
    return content ? decode(content[1]) : "";
  }
  return null;
}

function fail(message) {
  console.error(`SEO check failed: ${message}`);
  process.exitCode = 1;
  throw new Error(message);
}

const expectedPrices = ["24.90", "69.90", "130.00", "250.00"];

for (const route of manifest) {
  const file = path.join(dist, route.file);
  if (!fs.existsSync(file)) fail(`missing file ${route.file}`);
  const html = fs.readFileSync(file, "utf8");

  if (html.includes('<div id="root"></div>')) fail(`${route.path} still has an empty root`);
  if (!html.includes("yT3O3SdKpXp6EtgAIr_BSNqHcf6y9tZkPkCXf3V_Ml0")) {
    fail(`${route.path} lost the Search Console verification tag`);
  }
  if (!/<html[^>]*lang=["']pt-BR["']/.test(html)) fail(`${route.path} html lang is not pt-BR`);

  const title = decode((html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || "");
  if (title !== route.title) fail(`${route.path} title "${title}" !== "${route.title}"`);

  const description = metaContent(html, "description");
  if (description !== route.description) {
    fail(`${route.path} description mismatch:\n got: ${description}\n want: ${route.description}`);
  }
  if (!route.noindex && (description.length < 140 || description.length > 160)) {
    fail(`${route.path} description length ${description.length} (aim 140-160)`);
  }

  const robots = metaContent(html, "robots") || "";
  if (route.noindex) {
    if (!robots.includes("noindex")) fail(`${route.path} should be noindex`);
  } else if (!robots.includes("index")) {
    fail(`${route.path} robots missing index`);
  }

  const canonicalTag = (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) || [])[0] || "";
  const canonical = (canonicalTag.match(/href=["']([^"']+)["']/i) || [])[1];
  const expectedCanonical = route.path === "/" ? "https://coffeeplay.com.br/" : `https://coffeeplay.com.br${route.path}`;
  if (route.noindex) {
    if (canonical) fail(`${route.path} should not declare a canonical`);
  } else if (canonical !== expectedCanonical) {
    fail(`${route.path} canonical ${canonical} !== ${expectedCanonical}`);
  }

  if (metaContent(html, "og:image") !== "https://coffeeplay.com.br/og-image.png") {
    fail(`${route.path} missing og:image`);
  }
  if (metaContent(html, "og:image:width") !== "1200" || metaContent(html, "og:image:height") !== "630") {
    fail(`${route.path} og:image dimensions`);
  }
  if (metaContent(html, "twitter:card") !== "summary_large_image") fail(`${route.path} twitter card`);
  if (metaContent(html, "twitter:image") !== "https://coffeeplay.com.br/og-image.png") {
    fail(`${route.path} twitter:image`);
  }

  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => stripTags(match[1]));
  if (h1s.length !== 1) fail(`${route.path} has ${h1s.length} h1 tags: ${h1s.join(" | ")}`);
  for (const part of route.h1Includes) {
    if (!h1s[0].includes(part)) fail(`${route.path} h1 "${h1s[0]}" missing "${part}"`);
  }

  for (const snippet of route.htmlIncludes) {
    if (!html.includes(snippet)) fail(`${route.path} HTML missing "${snippet}"`);
  }

  const textLength = stripTags(html).length;
  const minimum = route.noindex ? 200 : 800;
  if (textLength < minimum) fail(`${route.path} text is too thin (${textLength} chars)`);

  const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (blocks.length !== 1) fail(`${route.path} expected 1 JSON-LD block, found ${blocks.length}`);
  const data = JSON.parse(blocks[0][1]);
  const graph = data["@graph"] || [];
  const types = graph.map((node) => node["@type"]);
  if (!types.includes("Organization") || !types.includes("WebSite")) {
    fail(`${route.path} JSON-LD missing Organization/WebSite (${types.join(", ")})`);
  }
  const wantsFaq = route.kind === "home" || route.kind === "faq";
  const wantsProduct = route.kind === "home" || route.kind === "planos";
  if (wantsFaq !== types.includes("FAQPage")) fail(`${route.path} FAQPage schema mismatch`);
  if (wantsProduct !== types.includes("Product")) fail(`${route.path} Product schema mismatch`);
  if (wantsProduct) {
    const product = graph.find((node) => node["@type"] === "Product");
    const prices = product.offers.map((offer) => offer.price).sort();
    if (JSON.stringify(prices) !== JSON.stringify([...expectedPrices].sort())) {
      fail(`${route.path} offer prices ${prices.join(", ")}`);
    }
    for (const offer of product.offers) {
      if (offer.priceCurrency !== "BRL") fail(`${route.path} offer currency`);
      if (!String(offer.url).startsWith("https://coffeeplay.tv/store/")) fail(`${route.path} offer url`);
    }
  }
  if (route.kind !== "home" && route.kind !== "notfound" && !types.includes("BreadcrumbList")) {
    fail(`${route.path} missing BreadcrumbList`);
  }
  if (/aggregateRating/i.test(html)) fail(`${route.path} must not include AggregateRating`);
  if (route.kind === "article" || route.kind === "app") {
    if (!types.includes("Article")) fail(`${route.path} missing Article JSON-LD`);
    const articleLd = graph.find((node) => node["@type"] === "Article");
    if (articleLd.headline !== route.h1Includes[0]) {
      fail(`${route.path} Article headline "${articleLd.headline}"`);
    }
  }
  if (route.minWords) {
    const articleHtml = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/);
    if (!articleHtml) fail(`${route.path} missing <article>`);
    const words = stripTags(articleHtml[1]).split(/\s+/).filter(Boolean);
    if (words.length < route.minWords || (route.maxWords && words.length > route.maxWords)) {
      fail(`${route.path} has ${words.length} words (expected ${route.minWords}-${route.maxWords})`);
    }
    console.log(`words ${route.path} ${words.length}`);
  }

  console.log(`ok ${route.path} title=${title.length} desc=${description.length} text=${textLength}`);
}

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const indexable = manifest.filter((route) => !route.noindex);
if (locs.length !== indexable.length) fail(`sitemap has ${locs.length} urls, expected ${indexable.length}`);
for (const route of indexable) {
  const loc = route.path === "/" ? "https://coffeeplay.com.br/" : `https://coffeeplay.com.br${route.path}`;
  if (!locs.includes(loc)) fail(`sitemap missing ${loc}`);
}
if (sitemap.includes("/404")) fail("sitemap includes the 404 url");
if (!fs.existsSync(path.join(dist, "og-image.png"))) fail("og-image.png was not copied to dist");
if (!fs.existsSync(path.join(dist, "logo.png"))) fail("logo.png was not copied to dist");
if (!fs.existsSync(path.join(dist, "robots.txt"))) fail("robots.txt missing");

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const rel = clean === "/" ? "" : clean.replace(/^\/+/, "").replace(/\/+$/, "");
  const candidates = rel
    ? [path.join(dist, rel), path.join(dist, rel, "index.html"), path.join(dist, `${rel}.html`)]
    : [path.join(dist, "index.html")];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || "/");
  if (!file) {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync(path.join(dist, "404.html")));
    return;
  }
  const type = file.endsWith(".html")
    ? "text/html; charset=utf-8"
    : file.endsWith(".xml")
      ? "application/xml; charset=utf-8"
      : "application/octet-stream";
  res.writeHead(200, { "content-type": type });
  res.end(fs.readFileSync(file));
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const base = `http://127.0.0.1:${port}`;

async function check(urlPath, status, includes) {
  const response = await fetch(base + urlPath);
  const body = await response.text();
  if (response.status !== status) fail(`${urlPath} status ${response.status}, expected ${status}`);
  if (includes && !body.includes(includes)) fail(`${urlPath} body missing ${includes}`);
  console.log(`http ${status} ${urlPath}`);
}

await check("/", 200, "IPTV Premium com");
await check("/planos", 200, "Planos e preços do Coffee Play");
await check("/faq", 200, "Posso testar antes de pagar?");
await check("/instalacao", 200, "Onde instalar o Coffee Play");
await check("/instalacao/smart-tv", 200, "Coffee Play na Smart TV");
await check("/instalacao/android-tv-box", 200, "MXQ");
await check("/instalacao/fire-stick", 200, "Fire Stick");
await check("/instalacao/celular", 200, "Chromecast");
await check("/instalacao/pc", 200, "Windows");
await check("/teste-gratis", 200, "Teste grátis de 4 horas");
await check("/blog", 200, "Guias sobre IPTV");
await check("/blog/iptv-travando", 200, "IPTV travando: como resolver");
await check("/blog/m3u-ou-xtream-codes", 200, "Xtream Codes");
await check("/apps", 200, "Apps para usar o acesso");
await check("/apps/iptv-smarters-pro", 200, "IPTV Smarters");
await check("/apps/tivimate", 200, "TiviMate");
await check("/apps/xciptv", 200, "XCIPTV");
await check("/sitemap.xml", 200, "https://coffeeplay.com.br/blog/iptv-travando");
await check("/esta-pagina-nao-existe", 404, "Página não encontrada");
await check("/instalacao/aparelho-inventado", 404, "noindex");

const unknown = await fetch(base + "/rota-inexistente");
const unknownBody = await unknown.text();
if (unknown.status !== 404) fail("unknown route was not 404");
if (unknownBody.includes("IPTV Premium com")) fail("unknown route served the homepage");

server.close();
console.log("SEO verification passed");
