import React from "react";
import { useParams } from "react-router-dom";
import { appGuides } from "../content/apps";
import { GuideView } from "../components/GuideView";
import { NotFoundPage } from "./NotFoundPage";

export const AppGuidePage = () => {
  const { slug } = useParams();
  const doc = appGuides.find((item) => item.slug === slug);
  if (!doc) return <NotFoundPage />;

  return (
    <GuideView
      doc={doc}
      crumbs={[
        { name: "Início", path: "/" },
        { name: "Apps", path: "/apps" },
        { name: doc.h1, path: doc.path },
      ]}
    />
  );
};
