"use client";

import AnimatedSection from "./AnimatedSection";

const marqueeItems = [
  "Custom Websites",
  "Website Rescues",
  "Custom Components",
  "Online Marketing",
  "Web Hosting",
  "Performance Tuning",
  "SEO",
  "Maintenance",
];

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Appwrite",
  "Python",
  "Netlify",
];

export default function TechStack() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-y border-paper-300 bg-paper-50 py-14"
    >
      <div className="mx-auto mb-10 max-w-352 px-6 lg:px-10">
        <AnimatedSection>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">
            What we do — and the tools we trust to do it
          </p>
        </AnimatedSection>
      </div>

      {/* services marquee */}
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-display text-3xl font-light text-ink-900 sm:text-4xl">
                {item}
              </span>
              <span className="text-marigold-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* tools marquee — reverse direction via row-reverse */}
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center flex-row-reverse">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              className="px-7 font-mono text-sm uppercase tracking-wider text-ink-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
