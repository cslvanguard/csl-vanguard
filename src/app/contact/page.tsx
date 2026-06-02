"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "customersupport@cslvanguard.com",
    link: "mailto:customersupport@cslvanguard.com",
    description: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call",
    value: "+1 (401) 592-7299",
    link: "tel:+14015927299",
    description: "Mon–Fri · 9am–4pm EST",
  },
  {
    icon: MapPin,
    title: "Where",
    value: "Remote-first, worldwide",
    link: "#",
    description: "Clients across time zones",
  },
];

const services = [
  "Custom Website",
  "Website Fix/Update",
  "Custom Components",
  "Online Marketing",
  "Web Hosting",
  "Other",
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope, but most custom websites take 4–8 weeks from first call to launch. Smaller jobs — a component, a fix, a security pass — can be done in days.",
  },
  {
    q: "What does it cost?",
    a: "We give a fixed quote after understanding your project, and we keep it honest. We work with small budgets often — the first conversation is always free, with no obligation.",
  },
  {
    q: "Do you support the site after launch?",
    a: "Yes. We offer maintenance that covers updates, security, performance, and priority help. Launch is the beginning of the relationship, not the end.",
  },
  {
    q: "What if my site was built by someone else?",
    a: "That's a big part of what we do. We routinely fix, improve, and take over sites built on other stacks — including rescuing broken features fast.",
  },
  {
    q: "Which technologies do you use?",
    a: "Mostly Next.js, React, TypeScript, and Tailwind on the frontend, with Node.js and PostgreSQL behind it. We adapt to whatever your existing site needs.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Form submission failed:", errorData);
        alert(
          `Something went wrong: ${errorData.details || errorData.error || "Please try again later."}`,
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full border border-ink-900/20 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-400 focus:border-cobalt-600 focus:ring-1 focus:ring-cobalt-600";
  const labelClass =
    "mb-2 block font-mono text-[11px] uppercase tracking-wider text-ink-500";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
          <AnimatedSection>
            <span className="eyebrow mb-6">Contact</span>
            <h1 className="max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Tell us what you&apos;re{" "}
              <span className="italic text-cobalt-600">building.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 text-pretty">
              A new site, a broken one, or just an idea you&apos;re mulling over —
              send it our way. We&apos;ll reply within 24 hours with honest next
              steps. No pressure, no jargon.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Methods */}
      <section className="relative py-8">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink-900/15 bg-ink-900/15 sm:grid-cols-3">
            {contactMethods.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.08}>
                <a
                  href={m.link}
                  className="group block h-full bg-paper p-7 transition-colors hover:bg-paper-50"
                >
                  <m.icon
                    className="mb-5 h-5 w-5 text-cobalt-600"
                    strokeWidth={1.6}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    {m.title}
                  </p>
                  <p className="mt-1 font-display text-lg text-ink-900 transition-colors group-hover:text-cobalt-600">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{m.description}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <AnimatedSection>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-ink-900/15 bg-paper-50 p-12 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cobalt-600 text-paper-50">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-3xl font-light text-ink-900">
                      Message sent.
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-ink-600">
                      Thanks for reaching out — we&apos;ll get back to you within
                      24 hours with a thoughtful reply.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="btn-secondary mt-8"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="border border-ink-900/15 bg-paper-50 p-8 sm:p-10"
                  >
                    <h2 className="font-display text-2xl font-medium text-ink-900">
                      Project details
                    </h2>
                    <p className="mb-8 mt-1 text-sm text-ink-500">
                      The more you share, the sharper our reply.
                    </p>

                    <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>
                          Full name <span className="text-cobalt-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Email <span className="text-cobalt-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Optional"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Service <span className="text-cobalt-600">*</span>
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className={labelClass}>Budget range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a range</option>
                        <option value="< $1k">Less than $1,000</option>
                        <option value="$1k - $5k">$1,000 – $5,000</option>
                        <option value="$5k - $15k">$5,000 – $15,000</option>
                        <option value="> $15k">$15,000+</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <label className={labelClass}>
                        What do you need?{" "}
                        <span className="text-cobalt-600">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-primary w-full justify-center text-base disabled:opacity-60"
                    >
                      {isSending ? "Sending…" : "Send message"}
                      {!isSending && <Send className="h-4 w-4" />}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Side */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="space-y-px overflow-hidden border border-ink-900/15 bg-ink-900/15">
                  {[
                    {
                      title: "Free first conversation",
                      body: "Every project starts with a no-cost discovery call. We'll discuss what you need and give an honest assessment — even if that's 'you don't need us'.",
                    },
                    {
                      title: "Fast, human responses",
                      body: "You reach the people who do the work. Most replies land within 24 hours; urgent fixes, much sooner.",
                    },
                    {
                      title: "Not sure what you need?",
                      body: "Totally fine. Describe your business and goals, and we'll recommend the best path — no upsell.",
                    },
                  ].map((b) => (
                    <div key={b.title} className="bg-paper p-7">
                      <h3 className="font-display text-lg font-medium text-ink-900">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {b.body}
                      </p>
                    </div>
                  ))}
                  <div className="bg-cobalt-600 p-7 text-paper-50">
                    <p className="text-sm leading-relaxed text-paper-100/85">
                      Prefer email? Reach us directly any time.
                    </p>
                    <a
                      href="mailto:customersupport@cslvanguard.com"
                      className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-semibold"
                    >
                      customersupport@cslvanguard.com
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-paper-50 py-20 lg:py-28">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
          <AnimatedSection className="mb-12 max-w-2xl">
            <span className="eyebrow mb-5">Good to know</span>
            <h2 className="font-display text-4xl font-light tracking-tight text-ink-900 sm:text-5xl">
              Questions we hear a lot.
            </h2>
          </AnimatedSection>

          <div className="border-t border-ink-900/15">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-3 border-b border-ink-900/15 py-7 md:grid-cols-12 md:gap-6">
                  <h3 className="font-display text-xl font-medium text-ink-900 md:col-span-5">
                    {f.q}
                  </h3>
                  <p className="text-ink-600 leading-relaxed md:col-span-7">
                    {f.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
