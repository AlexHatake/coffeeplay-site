import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../content/posts";
import { GuideView } from "../components/GuideView";
import { NotFoundPage } from "./NotFoundPage";

export const ArticlePage = () => {
  const { slug } = useParams();
  const doc = articles.find((item) => item.slug === slug);
  if (!doc) return <NotFoundPage />;

  return (
    <GuideView
      doc={doc}
      crumbs={[
        { name: "Início", path: "/" },
        { name: "Guias", path: "/blog" },
        { name: doc.h1, path: doc.path },
      ]}
    />
  );
};
