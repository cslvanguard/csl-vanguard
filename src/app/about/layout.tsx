import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "CSL Vanguard is an independent, remote-first web studio run by two brothers — building, fixing, and growing websites for individuals and small businesses with big-agency craft.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · CSL Vanguard",
    description:
      "Two brothers, one stubborn standard. Meet the studio building ambitious websites for small businesses at a price that makes sense.",
    url: "https://cslvanguard.com/about",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
