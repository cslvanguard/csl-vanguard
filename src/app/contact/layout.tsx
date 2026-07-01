import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell CSL Vanguard what you're building — a new site, a broken one, or just an idea. Free first conversation, honest next steps, replies within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · CSL Vanguard",
    description:
      "Start a project with CSL Vanguard. Free first conversation, no jargon, replies within 24 hours.",
    url: "https://cslvanguard.com/contact",
    type: "website",
    images: ["/opengraph-image"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
