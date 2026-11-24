import React from "react";
import Stairs from "@/Components/shared/Stairs";
import Link from "next/link";
import Image from "next/image";
import { blogsData, BlogPost } from "@/lib/constants/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogsData.find((b) => b.slug === params.slug);
  if (!post) {
    return {
      title: "Blog Not Found | Uzair Alam",
    };
  }

  const url = `https://uzairalam.vercel.app/blogs/${post.slug}`;

  return {
    title: `${post.title} | Uzair Alam`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: url,
    },
  };
}

const BlogPostPage = ({ params }: Props) => {
  const post = blogsData.find((b) => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogsData.filter((b) => b.slug !== post.slug).slice(0, 2);

  // JSON-LD structured data for this blog posting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.publishedAt).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: "https://uzairalam.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Uzair Alam",
      url: "https://uzairalam.vercel.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://uzairalam.vercel.app/blogs/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <article className="w-full max-w-4xl px-4 md:px-8 py-6 md:py-12 flex flex-col gap-8">
      <Stairs />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
        <Link href="/" className="hover:text-neon-green transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blogs" className="hover:text-neon-green transition-colors">
          Blogs
        </Link>
        <span>/</span>
        <span className="text-neon-green truncate max-w-[200px] sm:max-w-xs">
          {post.slug}
        </span>
      </div>

      {/* Header section */}
      <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30 font-semibold">
            {post.category}
          </span>
          <span className="text-gray-400 flex items-center gap-1">
            <i className="ri-calendar-line"></i>
            {post.publishedAt}
          </span>
          <span className="text-gray-400 flex items-center gap-1">
            <i className="ri-time-line"></i>
            {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author info card */}
        <div className="flex items-center gap-3 pt-2">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neon-green/50 bg-zinc-800">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white">
              {post.author.name}
            </span>
            <span className="text-xs text-neon-green font-mono">
              {post.author.role}
            </span>
          </div>
        </div>
      </div>

      {/* Main Blog Prose Content */}
      <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed space-y-6">
        {post.content.split("\n\n").map((block, idx) => {
          const trimmed = block.trim();

          // Heading 3
          if (trimmed.startsWith("### ")) {
            return (
              <h2
                key={idx}
                className="text-xl md:text-2xl font-bold text-white pt-4 pb-1 border-b border-white/5 flex items-center gap-2"
              >
                <span className="text-neon-green font-mono text-base">§</span>
                {trimmed.replace("### ", "")}
              </h2>
            );
          }

          // Heading 4
          if (trimmed.startsWith("#### ")) {
            return (
              <h3
                key={idx}
                className="text-lg md:text-xl font-semibold text-neon-green pt-2"
              >
                {trimmed.replace("#### ", "")}
              </h3>
            );
          }

          // Code block
          if (trimmed.startsWith("```")) {
            const cleanCode = trimmed.replace(/^```[a-z]*\n/, "").replace(/```$/, "");
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-zinc-950 border border-white/10 my-4"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-white/10 text-xs font-mono text-gray-400">
                  <span className="text-neon-green font-semibold">Snippet</span>
                  <span>Terminal</span>
                </div>
                <pre className="p-4 text-xs md:text-sm font-mono overflow-x-auto text-emerald-300 custom-scrollbar">
                  <code>{cleanCode}</code>
                </pre>
              </div>
            );
          }

          // Horizontal rule
          if (trimmed === "---") {
            return <hr key={idx} className="border-white/10 my-6" />;
          }

          // Bullet list
          if (trimmed.startsWith("* ") || trimmed.startsWith("1. ")) {
            const items = trimmed.split("\n");
            return (
              <ul key={idx} className="space-y-2 list-disc list-inside ml-2">
                {items.map((it, iIdx) => (
                  <li key={iIdx} className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {it.replace(/^(\* |\d+\. )/, "")}
                  </li>
                ))}
              </ul>
            );
          }

          // Standard paragraph
          return (
            <p key={idx} className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Tags & Article Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-800 text-neon-green border border-neon-green/20"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neon-green hover:underline"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back to All Blogs</span>
        </Link>
      </div>

      {/* Suggested / Other Articles */}
      {otherPosts.length > 0 && (
        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/10">
          <h3 className="text-lg font-bold text-white">Recommended Technical Reads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherPosts.map((other) => (
              <Link
                key={other.slug}
                href={`/blogs/${other.slug}`}
                className="p-4 rounded-xl bg-zinc-800/60 border border-white/10 hover:border-neon-green/40 transition-colors flex flex-col gap-2 group"
              >
                <span className="text-[11px] font-mono text-neon-green">
                  {other.category}
                </span>
                <h4 className="text-sm md:text-base font-bold text-white group-hover:text-neon-green transition-colors leading-snug">
                  {other.title}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2">
                  {other.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPostPage;
