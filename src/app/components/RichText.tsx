import React from "react";
import { Link } from "react-router-dom";
import type { Inline } from "../content/rich";
import { parseBlocks } from "../content/rich";

function Inlines({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") return <React.Fragment key={index}>{part}</React.Fragment>;
        if (part.href.startsWith("http")) {
          return (
            <a key={index} href={part.href} className="text-[#C67C2E] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
              {part.label}
            </a>
          );
        }
        return (
          <Link key={index} to={part.href} className="text-[#C67C2E] font-semibold hover:underline">
            {part.label}
          </Link>
        );
      })}
    </>
  );
}

export function RichText({ source }: { source: string }) {
  const blocks = parseBlocks(source);
  return (
    <div className="space-y-5 text-base text-gray-700 leading-relaxed">
      {blocks.map((block, index) => {
        if ("h2" in block) {
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-extrabold text-gray-900 pt-6">
              {block.h2}
            </h2>
          );
        }
        if ("ul" in block) {
          return (
            <ul key={index} className="list-disc pl-6 space-y-2">
              {block.ul.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Inlines parts={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index}>
            <Inlines parts={block.p} />
          </p>
        );
      })}
    </div>
  );
}
