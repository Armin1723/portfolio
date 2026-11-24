import React from "react";
import { certificationsData } from "@/public/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Achievements",
  description:
    "Verified credentials and benchmarks: HackerRank Python Certification, LeetCode 100+ Data Structures & Algorithms, MERN Full Stack, and GitHub Community Badges.",
  keywords: [
    "Uzair Alam Certifications",
    "HackerRank Python",
    "LeetCode Problem Solving",
    "MERN Certification",
    "GitHub Badges"
  ],
};

const CertificationsPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full py-2">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
          Certifications & <span className="text-neon-green">Achievements</span>
        </h2>
        <p className="text-sm text-gray-400 font-light">
          Recognitions, verified credentials, competitive programming benchmarks, and open-source milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 rounded-2xl bg-zinc-800/70 border border-white/10 hover:border-neon-green/40 transition-all duration-300 gap-4 group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center text-neon-green text-xl group-hover:bg-neon-green group-hover:text-zinc-950 transition-colors">
                  <i className={item.icon}></i>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-900 text-neon-green border border-neon-green/30">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {item.issuer}
                </p>
              </div>

              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neon-green hover:underline flex items-center gap-1 font-mono pt-2 border-t border-white/10"
              >
                <span>View Credential / Profile</span>
                <i className="ri-external-link-line text-xs"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
