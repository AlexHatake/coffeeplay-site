export type Inline = string | { href: string; label: string };

export type Block =
  | { h2: string }
  | { p: Inline[] }
  | { ul: Inline[][] };

export type GuideLink = { href: string; label: string };

export type GuideDoc = {
  kind: "article" | "app";
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  body: string;
  related: GuideLink[];
  minWords?: number;
  maxWords?: number;
};

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export function parseInline(source: string): Inline[] {
  const parts: Inline[] = [];
  let last = 0;
  for (const match of source.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(source.slice(last, index));
    parts.push({ label: match[1], href: match[2] });
    last = index + match[0].length;
  }
  if (last < source.length) parts.push(source.slice(last));
  return parts.filter((part) => part !== "");
}

export function parseBlocks(source: string): Block[] {
  return source
    .trim()
    .split(/\n\s*\n/)
    .map((chunk) => {
      const lines = chunk
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      if (lines[0]?.startsWith("## ")) return { h2: lines[0].slice(3) };
      if (lines.every((line) => line.startsWith("- "))) {
        return { ul: lines.map((line) => parseInline(line.slice(2))) };
      }
      return { p: parseInline(lines.join(" ")) };
    });
}

export function plainText(doc: Pick<GuideDoc, "h1" | "intro" | "body">) {
  return `${doc.h1}\n${doc.intro}\n${doc.body}`.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[#>*-]/g, " ");
}

export function countWords(doc: Pick<GuideDoc, "h1" | "intro" | "body">) {
  return plainText(doc)
    .split(/\s+/)
    .filter(Boolean).length;
}
