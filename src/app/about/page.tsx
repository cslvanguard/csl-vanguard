"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import { ArrowUpRight, Linkedin, Globe } from "lucide-react";

const values = [
  {
    title: "Craft over shortcuts",
    description:
      "We'd rather hand-write a thing well than bolt together something that breaks in six months. Quality is the cheaper option over time.",
  },
  {
    title: "Plain language",
    description:
      "No jargon walls, no hidden fees, no mysterious invoices. We explain what we're doing in words that make sense.",
  },
  {
    title: "Small clients, full effort",
    description:
      "A local museum gets the same care as a funded startup. Your budget doesn't change how much we sweat the details.",
  },
  {
    title: "Answer the phone",
    description:
      "When something's urgent, you reach a person who can actually fix it — not a queue. Often within the hour.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "The idea",
    description:
      "Two brothers, already the family's go-to for anything tech, realised small businesses kept getting priced out or templated. We decided to do it properly — and fairly.",
  },
  {
    year: "2025",
    title: "First clients",
    description:
      "We built our first sites from the ground up and took on rescues of broken ones. Word travelled the way it does for good work: quietly, then quickly.",
  },
  {
    year: "2026",
    title: "Finding our stride",
    description:
      "Custom builds, fixes, components, marketing, and hosting — a full studio offering, still run directly by the two of us. And we're just getting started.",
  },
];

const founders = [
  {
    name: "Sajana Wijesinghe",
    role: "Co-founder · Engineering & Architecture",
    image: "/images/founder-1.JPG",
    bio: "Full-stack developer focused on performance, clean architecture, and the unglamorous reliability that keeps sites fast and online. Leads the technical build on every project.",
    skills: ["Full-Stack", "Architecture", "DevOps"],
    site: "https://sajanaw.com",
    linkedin: "https://www.linkedin.com/in/sajana-wijesinghe",
  },
  {
    name: "Lijith Wijesinghe",
    role: "Co-founder · Design & Strategy",
    image: "/images/founder-2.jpeg",
    bio: "Designer-developer hybrid who bridges beautiful interfaces and flawless execution. Drives creative direction, client relationships, and the marketing that gets you found.",
    skills: ["UI/UX", "Strategy", "Marketing"],
    site: "https://lijithw.com",
    linkedin: "https://www.linkedin.com/in/lijith-wijesinghe/",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection>
            <span className="eyebrow mb-6">Our story</span>
            <h1 className="max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Two brothers,
              <br />
              one <span className="italic text-cobalt-600">stubborn</span>{" "}
              standard.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 text-pretty">
              CSL Vanguard started with a simple frustration: the small
              businesses and individuals who most need a great website are the
              ones agencies overlook or overcharge. So we built the studio we
              wished they could hire.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Origin */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-352 px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <AnimatedSection className="lg:col-span-7">
              <h2 className="mb-8 font-display text-3xl font-light tracking-tight text-ink-900 sm:text-4xl">
                How it started
              </h2>
              <div className="space-y-5 text-ink-600 leading-relaxed">
                <p>
                  Growing up, we were the ones family and friends called when
                  something tech-related broke — a website here, an email setup
                  there. It was second nature. But somewhere along the way we
                  noticed how many small businesses were being left behind
                  online.
                </p>
                <p>
                  The agencies they could find were too expensive, too
                  impersonal, or shipped cookie-cutter templates that
                  didn&apos;t represent their brand at all. We knew there was a
                  better way — one that paired real technical craft with genuine
                  care for each client&apos;s story.
                </p>
                <p>
                  That&apos;s CSL Vanguard. The name says it: we&apos;re here to
                  be at the front, leading the charge for the people who refuse
                  to settle for average — without pretending to be something
                  we&apos;re not.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              delay={0.15}
              className="lg:col-span-5"
            >
              <div className="border border-ink-900/15 bg-paper-50 p-10">
                <span className="eyebrow mb-6">Our mission</span>
                <p className="font-display text-2xl font-light leading-snug tracking-tight text-ink-900">
                  To give every business — however small — a web presence as
                  ambitious as they are, at a price that actually makes sense.
                </p>
                <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-500">
                  <span className="h-px w-8 bg-cobalt-600" />
                  Since 2024
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="relative bg-paper-50 py-20 lg:py-28">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection className="mb-14 max-w-2xl">
            <span className="eyebrow mb-5">The founders</span>
            <h2 className="font-display text-4xl font-light tracking-tight text-ink-900 sm:text-5xl">
              Meet the brothers behind the work.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper-300 bg-paper-300 md:grid-cols-2">
            {founders.map((f, i) => (
              <AnimatedSection key={f.name} delay={i * 0.12}>
                <motion.div className="h-full bg-paper-50 p-8 sm:p-10">
                  <div className="flex items-center gap-5">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-paper-300">
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        sizes="96px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-ink-900">
                        {f.name}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-cobalt-600">
                        {f.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-ink-600">
                    {f.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {f.skills.map((s) => (
                      <span
                        key={s}
                        className="border border-paper-300 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-5 border-t border-paper-300 pt-5">
                    <a
                      href={f.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900"
                    >
                      <Globe className="h-4 w-4 text-cobalt-600" />
                      Portfolio
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-cobalt-600"
                    >
                      <Linkedin className="h-4 w-4 text-cobalt-600" />
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection className="mb-14 max-w-2xl">
            <span className="eyebrow mb-5">The journey</span>
            <h2 className="font-display text-4xl font-light tracking-tight text-ink-900 sm:text-5xl">
              Young studio, real receipts.
            </h2>
          </AnimatedSection>

          <div className="border-t border-ink-900/15">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="grid grid-cols-1 gap-4 border-b border-ink-900/15 py-10 md:grid-cols-12 md:items-baseline">
                  <div className="font-display text-5xl font-light text-cobalt-600 md:col-span-3">
                    {m.year}
                  </div>
                  <h3 className="font-display text-2xl font-medium text-ink-900 md:col-span-3">
                    {m.title}
                  </h3>
                  <p className="max-w-xl text-ink-600 leading-relaxed md:col-span-6">
                    {m.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values — dark anchor */}
      <section className="relative overflow-hidden bg-ink-900 py-20 text-paper-100 lg:py-28">
        <div
          className="absolute inset-0 grid-lines-dark opacity-60"
          aria-hidden
        />
        <div className="relative mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection className="mb-14 max-w-2xl">
            <span
              className="eyebrow mb-5"
              style={{ color: "var(--color-paper-300)" }}
            >
              What we stand for
            </span>
            <h2 className="font-display text-4xl font-light tracking-tight text-paper-50 sm:text-5xl">
              The principles we don&apos;t bend.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper-100/10 bg-paper-100/10 sm:grid-cols-2">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={(i % 2) * 0.08}>
                <div className="h-full bg-ink-900 p-8 sm:p-10">
                  <span className="font-mono text-xs text-cobalt-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-medium text-paper-50">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper-100/55">
                    {v.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
