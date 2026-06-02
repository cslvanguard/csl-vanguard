"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    index: "01",
    title: "Custom Websites",
    description:
      "Designed and coded from scratch to fit your brand — fast, responsive, and genuinely yours. No drag-and-drop templates, no recycled themes.",
    tags: ["Design", "Next.js", "Responsive"],
  },
  {
    index: "02",
    title: "Fix & Improve",
    description:
      "Inherited a slow, broken, or outdated site? We diagnose, repair, and modernise on the stack you already have — often within hours, not weeks.",
    tags: ["Rescue", "Performance", "Bugs"],
  },
  {
    index: "03",
    title: "Custom Components",
    description:
      "Need one specific piece — a booking widget, a calculator, an animation? We build accessible, reusable components that drop into your existing site.",
    tags: ["UI", "Accessibility", "Reusable"],
  },
  {
    index: "04",
    title: "Online Marketing",
    description:
      "Being online isn't enough if no one finds you. We handle SEO, content, and targeted campaigns that bring the right people to your door.",
    tags: ["SEO", "Content", "Campaigns"],
  },
  {
    index: "05",
    title: "Web Hosting",
    description:
      "Reliable, secure hosting with the boring parts handled — backups, SSL, uptime, and updates — so your site simply stays online and quick.",
    tags: ["Uptime", "SSL", "Backups"],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-352 px-6 lg:px-10">
        <AnimatedSection className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow mb-5">What we do</span>
            <h2 className="font-display text-4xl font-light leading-[1.02] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Five ways we put
              <br />
              you <span className="italic text-cobalt-600">online</span> — and
              ahead.
            </h2>
          </div>
          <p className="text-ink-600 lg:col-span-4">
            Whether you&apos;re starting from nothing or salvaging something
            that broke, there&apos;s a path here for you. Pick one — or let us
            recommend the right mix.
          </p>
        </AnimatedSection>

        <div className="border-t border-ink-900/15">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <Link
                href="/contact"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative block border-b border-ink-900/15"
              >
                <div
                  className={`absolute inset-0 origin-left bg-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === i ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden
                />
                <div className="relative grid grid-cols-1 items-start gap-4 py-8 transition-colors duration-500 md:grid-cols-12 md:items-center md:gap-6 md:py-10">
                  <span
                    className={`font-mono text-sm transition-colors duration-300 md:col-span-1 ${
                      active === i ? "text-marigold-400" : "text-ink-400"
                    }`}
                  >
                    {s.index}
                  </span>

                  <h3
                    className={`font-display text-3xl font-normal tracking-tight transition-all duration-300 md:col-span-4 md:text-4xl ${
                      active === i
                        ? "translate-x-2 text-paper-50"
                        : "text-ink-900"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`max-w-xl text-sm leading-relaxed transition-colors duration-300 md:col-span-5 ${
                      active === i ? "text-paper-200" : "text-ink-600"
                    }`}
                  >
                    {s.description}
                  </p>

                  <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-4">
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 ${
                            active === i ? "text-paper-300" : "text-ink-400"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      className={`h-6 w-6 shrink-0 transition-all duration-300 ${
                        active === i
                          ? "rotate-0 text-marigold-400"
                          : "-rotate-45 text-ink-400"
                      }`}
                    />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
