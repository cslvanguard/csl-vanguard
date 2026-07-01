import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The CSL Vanguard journal — practical notes on web development, design, security, performance, and marketing for people building a better web.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · CSL Vanguard",
    description:
      "Notes on building a better web: development, design, security, and marketing from the CSL Vanguard studio.",
    url: "https://cslvanguard.com/blog",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
