"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Counter from "./Counter";
import CodeArtBackdrop from "./CodeArtBackdrop";
import TechBlueprint from "./TechBlueprint";

const headline = [
  { text: "Websites", accent: false },
  { text: "with", accent: false },
  { text: "big-studio", accent: false },
  { text: "craft,", accent: false },
  { text: "built", accent: false },
  { text: "for", accent: false },
  { text: "real", accent: "italic" as const },
  { text: "budgets.", accent: "underline" as const },
];

const stats = [
  { value: 6, suffix: "", label: "Sites shipped & rescued" },
  { value: 1, suffix: "hr", label: "Fastest critical fix" },
  { value: 100, suffix: "%", label: "Custom-built, no templates" },
  { value: 2, suffix: "", label: "Brothers, zero ticket queues" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const word = {
  hidden: { opacity: 0, y: "0.5em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div
        className="absolute -right-40 -top-20 h-136 w-136 rounded-full bg-cobalt-100/50 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-marigold-300/30 blur-[110px]"
        aria-hidden
      />
      <CodeArtBackdrop />
      <TechBlueprint />

      <div className="relative mx-auto max-w-352 px-6 lg:px-10">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center justify-between border-b border-paper-300 pb-5"
        >
          <span className="eyebrow">Independent web studio</span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500 sm:block">
            Est. 2024 — Remote-first
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-display text-[2.7rem] font-light leading-[0.98] tracking-[-0.02em] text-ink-900 sm:text-6xl lg:text-[5.4rem]"
        >
          {headline.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                variants={word}
                className={`mr-[0.25em] inline-block ${
                  w.accent === "italic"
                    ? "italic text-cobalt-600"
                    : w.accent === "underline"
                      ? "accent-underline font-normal"
                      : ""
                }`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* sub row */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-paper-300 pt-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
              We design and build custom websites, rescue broken ones, and keep
              them fast and growing — for individuals and small businesses who
              want to look serious online without an enterprise invoice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="btn-secondary text-base">
                See our work
              </Link>
            </div>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-paper-300 lg:col-span-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-5 py-6">
                <div className="font-display text-4xl font-light text-ink-900">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase leading-snug tracking-wider text-ink-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          onClick={() =>
            document
              .getElementById("trust")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group mt-14 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500 transition-colors hover:text-ink-900"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-400 group-hover:border-ink-900"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
          Scroll to explore
        </motion.button>
      </div>
    </section>
  );
}
