"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Talk",
    description:
      "A free, no-pressure call. We listen to what you're trying to do, who you serve, and what success looks like for you.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "You get a clear scope, timeline, and fixed quote — plus a design direction you can see and react to before we build.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and code in tight loops, sharing previews as we go. No black box — you watch it come together.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We launch, then stay on. Maintenance, fixes, and improvements keep your site quick and ahead of the curve.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-paper-100 lg:py-32">
      <div
        className="absolute inset-0 grid-lines-dark opacity-70"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-cobalt-600/20 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-352 px-6 lg:px-10">
        <AnimatedSection className="mb-16 max-w-3xl">
          <span
            className="eyebrow mb-5"
            style={{ color: "var(--color-paper-300)" }}
          >
            How we work
          </span>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-paper-50 sm:text-5xl lg:text-6xl">
            From first hello to
            <br />
            launch day —{" "}
            <span className="italic text-marigold-400">no surprises.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper-100/10 bg-paper-100/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="group h-full bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800">
                <div className="mb-8 font-display text-6xl font-light text-paper-100/15 transition-colors duration-500 group-hover:text-cobalt-400">
                  {step.number}
                </div>
                <h3 className="mb-3 font-display text-2xl font-medium text-paper-50">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper-100/55">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
