import Stairs from "@/Components/shared/Stairs";
import React from "react";
import ProjectCardSuspense from "@/Components/ProjectCardSuspense";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Uzair Alam - Full Stack Software Engineer",
  description: "Explore enterprise CRMs, automated fintech suites, AI document processing pipelines, and high-performance web applications built by Uzair Alam.",
};

interface Props {
  searchParams: {
    page?: number | string;
  };
}

const ProjectsPage = ({ searchParams }: Props) => {
  return (
    <section className="w-full max-w-6xl px-4 md:px-8 py-6 md:py-10 flex flex-col gap-6">
      <Stairs />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2">
          Featured <span className="text-neon-green">Projects</span>
        </h1>
        <p className="text-sm text-gray-400 font-light max-w-2xl">
          A showcase of enterprise CRMs, AI-driven accounting & OCR pipelines, cross-border fintech platforms, and production-grade digital solutions.
        </p>
      </div>

      <div className="projectContainer w-full">
        <ProjectCardSuspense searchParams={searchParams} />
      </div>
    </section>
  );
};

export default ProjectsPage;
