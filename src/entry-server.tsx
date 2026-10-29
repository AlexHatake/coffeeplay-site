import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./app/App";

export { seoRoutes } from "./app/content/site";

type HelmetContext = {
  helmet?: {
    htmlAttributes: { toString: () => string };
    title: { toString: () => string };
    priority: { toString: () => string };
    meta: { toString: () => string };
    link: { toString: () => string };
    script: { toString: () => string };
  };
};

export function render(url: string) {
  const helmetContext: HelmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
