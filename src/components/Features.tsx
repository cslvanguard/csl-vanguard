"use client";

import AnimatedSection from "./AnimatedSection";
import { Gauge, Hand, FileCode2, Wallet, MessagesSquare, Sparkles } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "You talk to the makers",
    description:
      "No account managers, no ticket queues. You message the two people who actually build your site.",
  },
  {
    icon: FileCode2,
    title: "Hand-built, not templated",
    description:
      "Every site is written from scratch in modern code — so it's faster, safer, and truly your own.",
  },
  {
    icon: Gauge,
    title: "Fast by default",
    description:
      "We build for Core Web Vitals. Sub-second loads aren't a luxury add-on — they're the baseline.",
  },
  {
    icon: Wallet,
    title: "Priced for real people",
    description:
      "Big-studio quality without the big-studio invoice. Honest quotes, no surprise line items.",
  },
  {
    icon: MessagesSquare,
    title: "We answer — fast",
    description:
      "When something breaks, you want a human now. We've turned a critical fix around in under an hour.",
  },
  {
    icon: Sparkles,
    title: "We stick around",
    description:
      "Launch is the start, not the finish. We maintain, update, and grow what we build with you.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-paper-50 py-24 lg:py-32">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow mb-5">Why CSL Vanguard</span>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                Built different,
                <br />
                <span className="accent-underline">delivered better.</span>
              </h2>
              <p className="mt-6 max-w-sm text-ink-600">
                Two brothers, one obsession: making small businesses look like
                the biggest name in the room.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper-300 bg-paper-300 sm:grid-cols-2 lg:col-span-8">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={(i % 2) * 0.08}>
                <div className="group h-full bg-paper-50 p-8 transition-colors duration-500 hover:bg-paper">
                  <div className="mb-6 flex items-center justify-between">
                    <f.icon
                      className="h-6 w-6 text-cobalt-600 transition-transform duration-500 group-hover:-translate-y-1"
                      strokeWidth={1.6}
                    />
                    <span className="font-mono text-xs text-ink-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-medium text-ink-900">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {f.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
