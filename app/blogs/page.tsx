import React from "react";
import Stairs from "@/Components/shared/Stairs";
import Link from "next/link";
import { blogsData } from "@/lib/constants/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights",
  description:
    "In-depth architectural guides on Next.js 14, enterprise CRM engineering, automated AI & OCR document pipelines, performance optimization, and Electron.js desktop systems by Uzair Alam.",
  keywords: [
    "Uzair Alam Blog",
    "Next.js Architecture",
    "MongoDB Aggregation Pipelines",
    "AI OCR Invoices",
    "Fintech Systems",
    "Core Web Vitals Optimization",
    "Electron.js Desktop Apps"
  ],
  openGraph: {
    title: "Engineering Blog & Technical Insights | Uzair Alam",
    description:
      "Deep technical explorations into full-stack web and desktop engineering, enterprise CRMs, and AI document processing.",
    url: "https://uzairalam.vercel.app/blogs",
    type: "website",
  },
};

const BlogsPage = () => {
  return (
    <section className="w-full max-w-6xl px-4 md:px-8 py-6 md:py-12 flex flex-col gap-8">
      <Stairs />

      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono font-semibold w-fit">
          <i className="ri-article-line"></i>
          Technical Writings
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Engineering <span className="text-neon-green">Blog</span>
        </h1>
        <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl leading-relaxed">
          Deep architectural breakdowns, real-world case studies in enterprise CRM scaling, fintech document automation, and frontend performance benchmarks.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {blogsData.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-800/70 border border-white/10 hover:border-neon-green/50 transition-all duration-300 gap-5 shadow-lg group hover:shadow-neon-green/5"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 text-neon-green border border-neon-green/30 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-time-line text-neon-green"></i>
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blogs/${post.slug}`}>
                <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-green transition-colors leading-snug">
                  {post.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/80 text-gray-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <time className="text-xs text-gray-400 font-mono">
                  {post.publishedAt}
                </time>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-xs text-neon-green font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
