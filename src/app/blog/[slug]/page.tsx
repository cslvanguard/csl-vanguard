"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 font-display text-4xl font-light text-ink-900">
            Post not found
          </h1>
          <Link href="/blog" className="btn-primary">
            Back to the journal
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) =>
    content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i}>{block.replace("## ", "")}</h2>;
      }
      return <p key={i}>{block}</p>;
    });

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <AnimatedSection>
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-500 transition-colors hover:text-cobalt-600"
            >
              <ArrowLeft className="h-4 w-4" />
              The journal
            </Link>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="border border-cobalt-600/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cobalt-600">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-500">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink-900 sm:text-5xl text-balance">
              {post.title}
            </h1>

            <div className="mt-8 flex items-center gap-3 border-t border-ink-900/15 pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-medium text-paper-50">
                {post.authorInitial}
              </span>
              <div>
                <div className="font-body text-sm font-semibold text-ink-900">
                  {post.author}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                  Studio
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Body */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <AnimatedSection>
            <article className="prose-vanguard">
              {renderContent(post.content)}
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-14 flex items-center justify-between border-t border-ink-900/15 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-ink-900 hover:text-cobalt-600"
              >
                <ArrowLeft className="h-4 w-4" />
                All posts
              </Link>
              <Link href="/contact" className="btn-primary text-sm">
                Work with us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related */}
      <section className="relative bg-paper-50 py-20">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-352 px-6 lg:px-10">
          <AnimatedSection className="mb-10">
            <span className="eyebrow">Keep reading</span>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink-900/15 bg-ink-900/15 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col bg-paper p-8 transition-colors hover:bg-paper-50"
              >
                <span className="border border-cobalt-600/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cobalt-600 w-fit">
                  {p.category}
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-ink-900 transition-colors group-hover:text-cobalt-600">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                  {p.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ink-900">
                  Read
                  <ArrowUpRight className="h-4 w-4 text-cobalt-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
