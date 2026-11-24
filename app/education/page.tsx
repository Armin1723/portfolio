"use client";
import Stairs from "@/Components/shared/Stairs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

const EducationPage = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".listItem", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.15,
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full max-w-4xl px-4 md:px-8 py-6 md:py-10 flex flex-col gap-6">
      <Stairs />
      
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2">
          Academic <span className="text-neon-green">Education</span>
        </h1>
        <p className="text-sm text-gray-400 font-light">
          Formal academic training in computer science, software engineering, and analytical studies.
        </p>
      </div>

      <div ref={container} className="relative border-l-2 border-neon-green/40 ml-3 md:ml-4 pl-6 md:pl-8 space-y-8 mt-4">
        {/* Master of Computer Applications */}
        <div className="listItem relative group">
          <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-neon-green ring-4 ring-zinc-900 group-hover:scale-125 transition-transform duration-300"></span>

          <div className="p-5 md:p-6 rounded-2xl bg-zinc-800/70 border border-white/10 hover:border-neon-green/40 transition-all duration-300 flex flex-col gap-3 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                    Master of Computer Applications (MCA)
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/40">
                    9.52 CGPA
                  </span>
                </div>
                <Link
                  href="https://kmclu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-neon-green transition-colors mt-0.5 inline-block"
                >
                  Khwaja Moinuddin Chishti Language University, Lucknow
                </Link>
              </div>

              <time className="text-xs font-mono text-gray-400 whitespace-nowrap bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
                2022 – 2024
              </time>
            </div>

            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1" className="border-gray-700/60">
                <AccordionTrigger className="text-left py-2 hover:no-underline text-xs text-neon-green">
                  Coursework & Specialization Details
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm font-light space-y-3 pt-2">
                  <p>
                    Graduated with a stellar <strong className="text-white font-medium">9.52 Cumulative Grade Point Average</strong>, specializing in modern full-stack web architectures, distributed systems, database design, and algorithmic problem solving.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Data Structures & Algorithms', 'System Design'].map((item, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-neon-green border border-neon-green/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Master of Arts */}
        <div className="listItem relative group">
          <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-neon-green ring-4 ring-zinc-900 group-hover:scale-125 transition-transform duration-300"></span>

          <div className="p-5 md:p-6 rounded-2xl bg-zinc-800/70 border border-white/10 hover:border-neon-green/40 transition-all duration-300 flex flex-col gap-3 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                    Master of Arts (Sociology)
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-700 text-gray-200">
                    7.14 CGPA
                  </span>
                </div>
                <Link
                  href="https://www.lkouniv.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-neon-green transition-colors mt-0.5 inline-block"
                >
                  University of Lucknow, Lucknow
                </Link>
              </div>

              <time className="text-xs font-mono text-gray-400 whitespace-nowrap bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
                2020 – 2022
              </time>
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-gray-700/60">
                <AccordionTrigger className="text-left py-2 hover:no-underline text-xs text-neon-green">
                  Program Insights
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm font-light pt-2">
                  Completed Master of Arts with a <strong className="text-white font-medium">7.14 CGPA</strong> from the University of Lucknow, sharpening critical analytical thinking, societal research methodologies, and organizational understanding.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Bachelor of Science */}
        <div className="listItem relative group">
          <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-neon-green ring-4 ring-zinc-900 group-hover:scale-125 transition-transform duration-300"></span>

          <div className="p-5 md:p-6 rounded-2xl bg-zinc-800/70 border border-white/10 hover:border-neon-green/40 transition-all duration-300 flex flex-col gap-3 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                    Bachelor of Science (Computer Science)
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-700 text-gray-200">
                    73% Aggregate
                  </span>
                </div>
                <Link
                  href="https://www.lkouniv.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-neon-green transition-colors mt-0.5 inline-block"
                >
                  University of Lucknow, Lucknow
                </Link>
              </div>

              <time className="text-xs font-mono text-gray-400 whitespace-nowrap bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
                2017 – 2020
              </time>
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-gray-700/60">
                <AccordionTrigger className="text-left py-2 hover:no-underline text-xs text-neon-green">
                  Core Computer Science Foundations
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm font-light space-y-3 pt-2">
                  <p>
                    Studied foundational Computer Science, Mathematics, and Physics securing 73% aggregate. Built early foundations in C++, Object-Oriented Programming, and Relational Database Systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['C++', 'Java', 'Data Structures', 'DBMS & SQL', 'Operating Systems', 'System Analysis'].map((item, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-neon-green border border-neon-green/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
