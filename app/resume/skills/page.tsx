'use client'
import React, { useState } from "react";
import { skillsList, SkillItem } from "@/public/utils";

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools & DevOps', 'Core Concepts'] as const;

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? skillsList
    : skillsList.filter(s => s.category === selectedCategory);

  return (
    <div className="flex flex-col gap-6 w-full py-2">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
          Technical <span className="text-neon-green">Skills</span>
        </h2>
        <p className="text-sm text-gray-400 font-light">
          Comprehensive stack spanning modern frontend frameworks, scalable backends, database architectures, and fintech integrations.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-neon-green text-zinc-950 font-bold shadow-md shadow-neon-green/20"
                : "bg-zinc-800 text-gray-300 hover:text-white hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {filteredSkills.map((skill: SkillItem, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-zinc-800/80 border border-white/10 hover:border-neon-green/60 hover:bg-zinc-800 group transition-all duration-300 gap-2.5 shadow-sm hover:shadow-neon-green/5"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-neon-green text-2xl group-hover:scale-110 group-hover:bg-neon-green group-hover:text-zinc-950 transition-all duration-300">
              <i className={skill.icon}></i>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm font-semibold text-white group-hover:text-neon-green transition-colors leading-tight">
                {skill.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono mt-1">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
