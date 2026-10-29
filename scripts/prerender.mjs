import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const root = process.cwd();
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

if (!template.includes("<!--seo:start-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("Built index.html is missing the SEO markers or the empty #root placeholder.");
}

const serverEntry = path.join(root, ".ssr-build", "entry-server.js");
const mod = await import(pathToFileURL(serverEntry).href);
const { render, seoRoutes } = mod;

function applyHelmet(html, helmet) {
  if (!helmet) throw new Error("Helmet context was empty. react-helmet-async did not run on the server.");
  const attrs = helmet.htmlAttributes.toString().trim();
  let out = html.replace(/<html[^>]*>/, attrs ? `<html ${attrs}>` : "<html lang=\"pt-BR\">");
  const seo = [
    helmet.title.toString(),
    helmet.priority?.toString?.() || "",
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n");
  out = out.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n${seo}\n<!--seo:end-->`);
  return out;
}

for (const route of seoRoutes) {
  const { html, helmet } = await Promise.resolve(render(route.renderPath));
  if (!html || !html.includes("<h1")) {
    throw new Error(`Prerender produced no <h1> for ${route.path}`);
  }
  let page = applyHelmet(template, helmet);
  if (!page.includes('<div id="root"></div>')) {
    throw new Error("Root placeholder disappeared before injection.");
  }
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outfile = path.join(dist, route.file);
  fs.mkdirSync(path.dirname(outfile), { recursive: true });
  fs.writeFileSync(outfile, page);
  console.log(`prerendered ${route.path} -> ${route.file} (${page.length} bytes)`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = seoRoutes.filter((route) => !route.noindex);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((route) => {
    const loc = route.path === "/" ? "https://coffeeplay.com.br/" : `https://coffeeplay.com.br${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(dist, "sitemap.xml"), xml);
fs.mkdirSync(path.join(root, "public"), { recursive: true });
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
fs.mkdirSync(path.join(root, ".ssr-build"), { recursive: true });
fs.writeFileSync(path.join(root, ".ssr-build", "manifest.json"), JSON.stringify(seoRoutes, null, 2));
console.log(`sitemap.xml with ${urls.length} urls`);
