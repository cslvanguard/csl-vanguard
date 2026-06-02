"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-cobalt-600 px-8 py-16 text-paper-50 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
            <div
              className="absolute inset-0 grid-lines-dark opacity-50"
              aria-hidden
            />
            <div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-marigold-400/30 blur-[100px]"
              aria-hidden
            />

            <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-paper-100/70">
                  Ready when you are
                </span>
                <h2 className="mt-5 font-display text-4xl font-light leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  Let&apos;s build something
                  <br />
                  worth <span className="italic">bookmarking.</span>
                </h2>
                <p className="mt-6 max-w-lg text-paper-100/80">
                  A new site, a rescue, or just a second opinion — tell us what
                  you&apos;re working on and we&apos;ll reply within 24 hours.
                  The first conversation is always free.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-paper-50 px-8 py-4 font-body text-base font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-1 hover:bg-marigold-400"
                >
                  Start your project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:cslvanguard@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-paper-50/40 px-8 py-4 font-body text-base font-semibold text-paper-50 transition-all duration-300 hover:bg-paper-50/10"
                >
                  Email us directly
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
