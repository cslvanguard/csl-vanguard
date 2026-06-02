"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Built from scratch", "Fixed & improved"];

type Project = {
  index: string;
  title: string;
  kind: string;
  group: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  link: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Mead Memorial Chapel",
    kind: "Built from scratch",
    group: "Built from scratch",
    description:
      "A public platform giving unbiased updates on an ongoing legal dispute — blog, petition signup, document archive, and historical background, built for clarity and reach.",
    tags: ["Next.js", "CMS", "SEO", "Accessibility"],
    metric: "1k+",
    metricLabel: "Monthly visitors",
    link: "https://meadmemorialchapel.net/",
  },
  {
    index: "02",
    title: "Malmi Aluthge",
    kind: "Built from scratch",
    group: "Built from scratch",
    description:
      "A clean, personal portfolio site built to present work simply and load instantly, with a tailored layout and smooth, considered motion.",
    tags: ["React", "Tailwind", "Netlify"],
    metric: "100%",
    metricLabel: "Custom built",
    link: "https://malmi-aluthge.netlify.app/",
  },
  {
    index: "03",
    title: "Sajana W — Portfolio",
    kind: "Built from scratch",
    group: "Built from scratch",
    description:
      "A fully custom engineering portfolio showcasing projects and writing. Modern stack, fast performance, and a crisp, confident interface.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    metric: "100%",
    metricLabel: "Custom built",
    link: "https://sajanaw.com/",
  },
  {
    index: "04",
    title: "Lijith W — Portfolio",
    kind: "Built from scratch",
    group: "Built from scratch",
    description:
      "A personal portfolio for the co-founder focused on simplicity, clarity, and professional presentation — responsive and performance-optimised throughout.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    metric: "100%",
    metricLabel: "Custom built",
    link: "https://lijithw.com/",
  },
  {
    index: "05",
    title: "Hyannis Rotary",
    kind: "Improved & fixed",
    group: "Fixed & improved",
    description:
      "A full redesign and modernisation on the club's existing tech stack — improved UI, streamlined workflows, tighter security, and support for outreach.",
    tags: ["Redesign", "Security", "UX", "Existing stack"],
    metric: "70%",
    metricLabel: "Efficiency boost",
    link: "https://hyannisrotary.org/",
  },
  {
    index: "06",
    title: "Centerville Historical Museum",
    kind: "Fixed & supported",
    group: "Fixed & improved",
    description:
      "Cost-efficient IT and web support for a nonprofit — hardware restoration, device reconfiguration, and a broken PayPal integration fixed within the hour to restore donations.",
    tags: ["IT Support", "Payments", "Troubleshooting"],
    metric: "<1hr",
    metricLabel: "Critical fix turnaround",
    link: "https://www.centervillehistoricalmuseum.org/",
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.group === active);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection>
            <span className="eyebrow mb-6">Selected work</span>
            <h1 className="max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Sites we&apos;ve{" "}
              <span className="italic text-cobalt-600">built</span>, fixed, and
              brought back to life.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 text-pretty">
              Every link below is live. Some we built from a blank page; others
              arrived broken and left fast. Real clients, real outcomes — no
              filler.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection className="mb-10 flex flex-wrap gap-2 border-y border-ink-900/15 py-5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  active === c
                    ? "bg-ink-900 text-paper-50"
                    : "border border-ink-900/20 text-ink-500 hover:border-ink-900 hover:text-ink-900"
                }`}
              >
                {c}
              </button>
            ))}
          </AnimatedSection>

          <motion.div
            layout
            className="grid grid-cols-1 gap-px overflow-hidden border border-ink-900/15 bg-ink-900/15 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-paper p-8 transition-colors duration-500 hover:bg-paper-50 sm:p-10"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="font-mono text-sm text-ink-400">
                      {p.index}
                    </span>
                    <span className="border border-cobalt-600/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cobalt-600">
                      {p.kind}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-normal tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600 sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md flex-1 text-sm leading-relaxed text-ink-600">
                    {p.description}
                  </p>

                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <div className="font-display text-3xl font-light text-ink-900">
                        {p.metric}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                        {p.metricLabel}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ink-900">
                      Visit
                      <ArrowUpRight className="h-4 w-4 text-cobalt-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-paper-300 pt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider text-ink-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
