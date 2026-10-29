import React from "react";
import { Link } from "react-router-dom";
import type { Crumb } from "../seo/structuredData";

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  return (
    <nav aria-label="Você está em" className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="text-gray-800 font-semibold">{item.name}</span>
              ) : (
                <Link to={item.path} className="hover:text-[#C67C2E] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
