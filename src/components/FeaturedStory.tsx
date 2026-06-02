"use client";

import AnimatedSection from "./AnimatedSection";
import Counter from "./Counter";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedStory() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-352 px-6 lg:px-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-12 border border-ink-900/15 lg:grid-cols-12">
            {/* left: the story */}
            <div className="p-8 sm:p-12 lg:col-span-7 lg:border-r lg:border-ink-900/15">
              <span className="eyebrow mb-8">Field note — a rescue</span>
              <p className="font-display text-2xl font-light leading-[1.35] tracking-tight text-ink-900 sm:text-3xl lg:text-4xl text-balance">
                The Centerville Historical Museum&apos;s donation payments had
                stopped working. Every offline minute was lost support. We
                traced the broken PayPal integration and had{" "}
                <span className="accent-underline">
                  donations flowing again within the hour.
                </span>
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-10 bg-cobalt-600" />
                <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
                  centervillehistoricalmuseum.org · Fix &amp; Support
                </p>
              </div>
            </div>

            {/* right: the metrics */}
            <div className="flex flex-col justify-between gap-10 bg-paper-50 p-8 sm:p-12 lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <div className="font-display text-5xl font-light text-ink-900">
                    &lt;
                    <Counter value={1} suffix="hr" />
                  </div>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    From report to resolved
                  </p>
                </div>
                <div className="hairline-ink" />
                <div>
                  <div className="font-display text-5xl font-light text-ink-900">
                    <Counter value={100} suffix="%" />
                  </div>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    Donations restored, zero data lost
                  </p>
                </div>
              </div>

              <a
                href="https://www.centervillehistoricalmuseum.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-ink-900"
              >
                Visit the live site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-cobalt-600" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
