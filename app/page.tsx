"use client";
import Stairs from "@/Components/shared/Stairs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { blogsData } from "@/lib/constants/blogs";

const HomePage = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-badge", {
        y: 15,
        opacity: 0,
        duration: 0.4,
        delay: 0.1,
      });
      tl.from(".hero-heading", {
        y: 20,
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");
      tl.from(".hero-description", {
        y: 15,
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");
      tl.from(".hero-actions", {
        y: 15,
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");
      tl.from(".hero-image", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4");
      tl.from(".stat-box", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
      }, "-=0.2");

      gsap.to(".circle-orbit-1", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      gsap.to(".circle-orbit-2", {
        rotate: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
    },
    { scope: container }
  );

  const featuredBlogs = blogsData.slice(0, 3);

  return (
    <div ref={container} className="w-full max-w-6xl px-4 md:px-8 py-6 md:py-12 flex flex-col gap-16">
      <Stairs />

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[50vh]">
        {/* Left Column: Bio Details */}
        <div className="flex flex-col items-start justify-center w-full md:w-3/5 gap-3">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            Full Stack Software Engineer
          </div>

          <div className="hero-heading flex flex-col">
            <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Hello, I&apos;m
            </span>
            <span className="text-4xl md:text-6xl font-black tracking-tight text-neon-green">
              Uzair Alam
            </span>
          </div>

          <p className="hero-description text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-xl">
            Versatile and performance-driven engineer specializing in the <strong className="text-white font-medium">MERN stack, Next.js, and Node.js</strong> ecosystems. Experienced in architecting enterprise CRMs, automated fintech suites, OCR document pipelines, and scalable digital platforms for European and global markets.
          </p>

          {/* Call to action & Social links */}
          <div className="hero-actions flex flex-wrap items-center gap-4 mt-2">
            <a
              href="/assets/Resume - Uzair Alam - Software Engineer - Full.pdf"
              target="_blank"
              download="Resume-UzairAlam-FullStackEngineer.pdf"
              className="px-6 py-3 rounded-full bg-neon-green text-zinc-950 font-bold hover:bg-neon-green/90 transition-all duration-300 shadow-lg shadow-neon-green/20 flex items-center gap-2 text-xs md:text-sm"
            >
              <span>Download CV</span>
              <i className="ri-download-2-line text-base"></i>
            </a>

            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/Armin1723"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 hover:border-neon-green hover:text-neon-green flex items-center justify-center text-gray-300 text-lg transition-colors"
              >
                <i className="ri-github-fill"></i>
              </Link>

              <Link
                href="https://linkedin.com/in/uzair1723"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 hover:border-neon-green hover:text-neon-green flex items-center justify-center text-gray-300 text-lg transition-colors"
              >
                <i className="ri-linkedin-box-fill"></i>
              </Link>

              <Link
                href="https://leetcode.com/uzair1723"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 hover:border-neon-green hover:text-neon-green flex items-center justify-center text-gray-300 text-lg transition-colors"
              >
                <i className="ri-code-box-line"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Avatar with Orbiting Neon Rings */}
        <div className="hero-image relative flex items-center justify-center w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
          {/* Circular SVG Accents */}
          <svg
            className="circle-orbit-1 absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#01fe98"
              strokeWidth="0.8"
              strokeDasharray="4 6 2"
              fill="none"
              className="opacity-70"
            />
          </svg>
          <svg
            className="circle-orbit-2 absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#01fe98"
              strokeWidth="0.8"
              strokeDasharray="8 8"
              strokeLinecap="round"
              fill="none"
              className="opacity-50"
            />
          </svg>

          {/* Profile Image */}
          <div className="relative w-[190px] h-[190px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden bg-zinc-800/80 border-2 border-neon-green/40 shadow-2xl shadow-neon-green/10">
            <Image
              src="/assets/profile.png"
              alt="Uzair Alam - Full Stack Software Engineer"
              fill
              priority
              quality={95}
              className="object-cover"
              sizes="(min-width: 768px) 250px, 190px"
            />
          </div>
        </div>
      </div>

      {/* Metrics & Benchmarks Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10">
        <div className="stat-box flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-white/5">
          <div className="text-3xl md:text-4xl font-black text-neon-green font-mono">
            <CountUp start={0} end={2} duration={2} suffix="+" delay={0.2} />
          </div>
          <p className="text-xs text-gray-300 font-medium leading-tight">
            Years of<br />Experience
          </p>
        </div>

        <div className="stat-box flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-white/5">
          <div className="text-3xl md:text-4xl font-black text-neon-green font-mono">
            <CountUp start={0} end={15} duration={2} suffix="+" delay={0.2} />
          </div>
          <p className="text-xs text-gray-300 font-medium leading-tight">
            Production &<br />Key Projects
          </p>
        </div>

        <div className="stat-box flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-white/5">
          <div className="text-3xl md:text-4xl font-black text-neon-green font-mono">
            <CountUp start={0} end={25} duration={2} suffix="+" delay={0.2} />
          </div>
          <p className="text-xs text-gray-300 font-medium leading-tight">
            Technologies &<br />Tools Mastered
          </p>
        </div>

        <div className="stat-box flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-white/5">
          <div className="text-3xl md:text-4xl font-black text-neon-green font-mono">
            <CountUp start={0} end={100} duration={2} suffix="+" delay={0.2} />
          </div>
          <p className="text-xs text-gray-300 font-medium leading-tight">
            LeetCode DSA<br />Questions Solved
          </p>
        </div>
      </div>

      {/* FEATURED BLOGS MODULE */}
      <section className="flex flex-col gap-6 pt-8 border-t border-white/10 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono font-semibold w-fit">
              <i className="ri-article-line"></i>
              Technical Writings & Architecture
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-neon-green">Blog Articles</span>
            </h2>
            <p className="text-sm text-gray-400 font-light max-w-xl">
              Architectural deep dives into enterprise CRM scaling, fintech document automation, and sub-second performance optimizations.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-neon-green hover:underline whitespace-nowrap self-start sm:self-auto"
          >
            <span>Browse All Blogs ({blogsData.length})</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {featuredBlogs.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between p-5 rounded-2xl bg-zinc-800/60 border border-white/10 hover:border-neon-green/50 hover:bg-zinc-800/80 transition-all duration-300 gap-4 group shadow-md"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 text-neon-green border border-neon-green/20">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.readTime}</span>
                </div>

                <Link href={`/blogs/${post.slug}`}>
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-neon-green transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <time className="text-gray-400 font-mono text-[11px]">
                  {post.publishedAt}
                </time>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-neon-green font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <i className="ri-arrow-right-line text-xs"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
