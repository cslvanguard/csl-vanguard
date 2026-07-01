import React from "react";
import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cslvanguard.com"),
  title: {
    default: "CSL Vanguard — Big-agency craft, small-business budgets",
    template: "%s · CSL Vanguard",
  },
  description:
    "We build, fix, and grow websites for individuals and small businesses. Custom sites, rescues of broken ones, components, marketing, and hosting — crafted by two brothers who answer the phone.",
  keywords: [
    "web design",
    "web development",
    "small business websites",
    "website fixes",
    "Next.js",
    "web hosting",
    "CSL Vanguard",
  ],
  openGraph: {
    title: "CSL Vanguard — Big-agency craft, small-business budgets",
    description:
      "Custom websites, rescues, components, marketing, and hosting for people and small businesses.",
    url: "https://cslvanguard.com",
    siteName: "CSL Vanguard",
    type: "website",
    images: [{ url: "/csl-vanguard-logo.png", alt: "CSL Vanguard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSL Vanguard — Big-agency craft, small-business budgets",
    description:
      "Custom websites, rescues, components, marketing, and hosting for people and small businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/csl-vanguard-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/csl-vanguard-icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/csl-vanguard-icon-192.png",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CSL Vanguard",
  url: "https://cslvanguard.com",
  logo: "https://cslvanguard.com/csl-vanguard-logo.png",
  description:
    "Independent, remote-first web studio building, fixing, and growing websites for individuals and small businesses.",
  email: "hello@cslvanguard.com",
  telephone: "+1-401-592-7299",
  foundingDate: "2024",
  sameAs: [
    "https://www.linkedin.com/in/sajana-wijesinghe",
    "https://www.linkedin.com/in/lijith-wijesinghe/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@cslvanguard.com",
    telephone: "+1-401-592-7299",
    contactType: "customer service",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CSL Vanguard",
  url: "https://cslvanguard.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="font-body antialiased bg-paper text-ink overflow-x-hidden">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <div className="grain" aria-hidden />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
