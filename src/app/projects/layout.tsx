import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work from CSL Vanguard — custom websites built from scratch and broken ones rescued. Real clients, live links, real outcomes.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects · CSL Vanguard",
    description:
      "Sites we've built, fixed, and brought back to life. Every link is live — real clients, real results.",
    url: "https://cslvanguard.com/projects",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
