import React from "react";
import Link from "next/link";
import { contactPageLinks } from "@/public/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me & Professional Summary",
  description:
    "Profile summary, technical background, and digital presence of Uzair Alam, Full Stack Software Engineer specializing in MERN, Next.js, and Node.js.",
  keywords: [
    "About Uzair Alam",
    "Full Stack Software Engineer Bio",
    "Uzair Alam Summary",
    "MERN Stack Engineer Lucknow"
  ],
};

const ResumeAboutPage = () => {
  return (
    <div className="flex flex-col gap-8 w-full py-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
          About <span className="text-neon-green">Me</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
          Versatile and performance-driven <strong className="text-white font-semibold">Full Stack Software Engineer</strong> with deep expertise across the <strong className="text-neon-green font-semibold">MERN stack, Next.js, and Node.js</strong> ecosystems. Experienced in designing and deploying scalable web and desktop applications, enterprise CRM systems for European international markets, and automated fintech platforms.
        </p>
        <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
          Strong focus on clean architecture, robust microservices, automated OCR/AI document processing pipelines, and state management. Adept at cross-functional leadership, client-facing requirement discovery, and shipping production-grade digital solutions.
        </p>
      </div>

      {/* Quick Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-800/80 border border-white/10 flex flex-col gap-1">
          <span className="text-xs text-gray-400 font-mono">Current Position</span>
          <span className="text-sm font-bold text-white">Associate Software Engineer</span>
          <span className="text-xs text-neon-green">Jamtech Technologies</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-800/80 border border-white/10 flex flex-col gap-1">
          <span className="text-xs text-gray-400 font-mono">Education</span>
          <span className="text-sm font-bold text-white">MCA (9.52 CGPA)</span>
          <span className="text-xs text-gray-400">KMCLU, Lucknow</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-800/80 border border-white/10 flex flex-col gap-1">
          <span className="text-xs text-gray-400 font-mono">Specialization</span>
          <span className="text-sm font-bold text-white">Enterprise CRMs & Fintech</span>
          <span className="text-xs text-neon-green">Full-Stack & Desktop Apps</span>
        </div>
      </div>

      {/* Contact & Profiles Information */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          Contact & <span className="text-neon-green">Presence</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {contactPageLinks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/60 border border-white/5 hover:border-neon-green/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-neon-green text-lg flex-shrink-0">
                <i className={item.icon}></i>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[11px] text-gray-400 font-mono">{item.name}</span>
                <Link
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  className="text-xs md:text-sm text-gray-200 hover:text-neon-green truncate hover:underline"
                >
                  {item.value}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="/assets/Resume - Uzair Alam - Software Engineer - Full.pdf"
          target="_blank"
          download="Resume-UzairAlam-SoftwareEngineer.pdf"
          className="px-6 py-2.5 rounded-xl bg-neon-green text-zinc-950 font-bold hover:bg-neon-green/90 transition-all duration-300 shadow-md shadow-neon-green/20 flex items-center gap-2 text-sm"
        >
          <span>Download Latest CV</span>
          <i className="ri-download-line text-base"></i>
        </a>
        <Link
          href="/contact"
          className="px-6 py-2.5 rounded-xl border border-neon-green text-neon-green font-semibold hover:bg-neon-green/10 transition-all duration-300 text-sm"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default ResumeAboutPage;
