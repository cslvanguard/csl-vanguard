"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, categories } from "@/lib/blog-data";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  const featured = blogPosts[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection>
            <span className="eyebrow mb-6">The journal</span>
            <h1 className="max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Notes on building a{" "}
              <span className="italic text-cobalt-600">better</span> web.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 text-pretty">
              Practical thinking on web development, design, security, and
              marketing — plus the occasional deep dive into what makes good
              technology tick.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured */}
      {active === "All" && (
        <section className="relative py-8">
          <div className="mx-auto max-w-352 px-6 lg:px-10">
            <AnimatedSection>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 overflow-hidden border border-ink-900/15 bg-paper-50 lg:grid-cols-12"
              >
                <div className="flex items-center justify-center bg-ink-900 p-12 lg:col-span-5">
                  <span className="font-display text-[10rem] font-light leading-none text-paper-100/10 transition-colors duration-500 group-hover:text-cobalt-400">
                    01
                  </span>
                </div>
                <div className="p-8 sm:p-12 lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="border border-cobalt-600/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cobalt-600">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                      <Clock className="h-3 w-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-normal leading-tight tracking-tight text-ink-900 transition-colors group-hover:text-cobalt-600 sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-ink-600 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-paper-300 pt-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-500">
                      {featured.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ink-900">
                      Read article
                      <ArrowUpRight className="h-4 w-4 text-cobalt-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

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
            className="grid grid-cols-1 gap-px overflow-hidden border border-ink-900/15 bg-ink-900/15 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {(active === "All" ? filtered.slice(1) : filtered).map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col bg-paper p-7 transition-colors duration-500 hover:bg-paper-50"
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <span className="border border-cobalt-600/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cobalt-600">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium leading-snug text-ink-900 transition-colors group-hover:text-cobalt-600">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-paper-300 pt-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                        {post.date}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-cobalt-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
