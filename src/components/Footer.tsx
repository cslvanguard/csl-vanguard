"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Studio: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/projects" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Custom Websites", href: "/contact" },
    { label: "Fix & Improve", href: "/contact" },
    { label: "Custom Components", href: "/contact" },
    { label: "Online Marketing", href: "/contact" },
    { label: "Web Hosting", href: "/contact" },
  ],
  Founders: [
    { label: "Sajana Wijesinghe", href: "https://sajanaw.com" },
    { label: "Lijith Wijesinghe", href: "https://lijithw.com" },
    {
      label: "LinkedIn — Sajana",
      href: "https://www.linkedin.com/in/sajana-wijesinghe",
    },
    {
      label: "LinkedIn — Lijith",
      href: "https://www.linkedin.com/in/lijith-wijesinghe/",
    },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-paper-100">
      <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
        {/* Oversized wordmark */}
        <div className="border-b border-paper-100/10 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Link href="/" className="group inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-paper-50 text-ink-900">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L15 14.5H1L8 1Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="font-display text-xl font-semibold text-paper-50">
                  CSL Vanguard
                </span>
              </Link>
              <p className="mt-6 max-w-md text-paper-100/55 leading-relaxed">
                An independent web studio run by two brothers. We build, fix, and
                grow websites for individuals and small businesses — with the
                craft of a big agency and the price of neither.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-sm">
                <a
                  href="mailto:customersupport@cslvanguard.com"
                  className="inline-flex items-center gap-3 text-paper-100/60 transition-colors hover:text-marigold-400"
                >
                  <Mail className="h-4 w-4" />
                  customersupport@cslvanguard.com
                </a>
                <a
                  href="tel:+14015927299"
                  className="inline-flex items-center gap-3 text-paper-100/60 transition-colors hover:text-marigold-400"
                >
                  <Phone className="h-4 w-4" />
                  +1 (401) 592-7299
                </a>
                <span className="inline-flex items-center gap-3 text-paper-100/60">
                  <MapPin className="h-4 w-4" />
                  Remote-first, worldwide
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading}>
                  <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-100/40">
                    {heading}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => {
                      const external = link.href.startsWith("http");
                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="group inline-flex items-center gap-1 text-sm text-paper-100/60 transition-colors hover:text-paper-50"
                          >
                            {link.label}
                            <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Giant signature */}
        <div className="select-none py-10" aria-hidden>
          <div className="font-display text-[18vw] font-light leading-none tracking-tighter text-paper-100/[0.04] lg:text-[12rem]">
            Vanguard
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper-100/10 py-8 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-wider text-paper-100/40">
            © {year} CSL Vanguard — All rights reserved
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-paper-100/40">
            Designed &amp; built in-house
          </p>
        </div>
      </div>
    </footer>
  );
}
