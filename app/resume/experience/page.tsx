import React from "react";
import { experiencesData } from "@/public/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Work Experience",
  description:
    "Track record of architecting scalable enterprise CRMs, fintech portals, and desktop systems at Jamtech Technologies and Digicrowd Solutions by Uzair Alam.",
  keywords: [
    "Uzair Alam Experience",
    "Jamtech Technologies",
    "Digicrowd Solutions",
    "MERN Stack Developer",
    "Associate Software Engineer",
    "Next.js Enterprise CRM",
    "Fintech Systems"
  ],
};

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-8 w-full py-2">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
          Work <span className="text-neon-green">Experience</span>
        </h2>
        <p className="text-sm text-gray-400 font-light">
          Track record of architecting scalable enterprise CRMs, SaaS platforms, and desktop systems for international markets.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative border-l-2 border-neon-green/40 ml-3 md:ml-4 pl-6 md:pl-8 space-y-4">
        {experiencesData.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline node */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-neon-green ring-4 ring-zinc-900 group-hover:scale-125 transition-transform duration-300"></span>

            <div className="flex flex-col p-5 md:p-6 rounded-2xl bg-zinc-800/70 border border-white/10 hover:border-neon-green/40 transition-all duration-300 gap-3 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="text-gray-400 font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    exp.isCurrent
                      ? "bg-neon-green/20 text-neon-green border border-neon-green/40"
                      : "bg-zinc-700 text-gray-300"
                  }`}>
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-300 font-light leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {exp.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900/80 text-neon-green border border-neon-green/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
