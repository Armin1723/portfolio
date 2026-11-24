import { formatDate } from "@/public/utils";
import React from "react";
import Link from "next/link";

interface ProjectProp {
  index: number;
  project: {
    title: string;
    description: string;
    code_link: string;
    live_link: string;
    techs: string[];
    start_date: Date | string;
    end_date?: Date | string;
    status?: string;
  };
}

const ProjectCard = ({ index, project }: ProjectProp) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  const dateRange = `(${formatDate(project.start_date)} - ${project.end_date ? formatDate(project.end_date) : 'Present'})`;
  const primaryLink = project.live_link && project.live_link !== '#' && !project.live_link.includes('github.com')
    ? project.live_link
    : project.code_link;

  return (
    <div className="projectCard flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-neon-green/50 transition-all duration-300 gap-4 shadow-lg hover:shadow-neon-green/5">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-4xl md:text-5xl font-black text-transparent text-outline tracking-wider">
            {formattedIndex}
          </span>
          <div className="flex items-center gap-2">
            {project.status && (
              <span className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30">
                {project.status}
              </span>
            )}
            {primaryLink && (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-white/10 hover:border-neon-green hover:bg-neon-green transition-all duration-300"
              >
                <i className="ri-arrow-right-up-line text-lg text-white group-hover:text-zinc-900 group-hover:rotate-45 transition-transform duration-300"></i>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 font-mono">
            {dateRange}
          </p>
        </div>

        <p className="text-sm text-gray-300 font-light mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-neon-green border border-neon-green/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 text-xs">
          {project.code_link && (
            <a
              href={project.code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors group truncate"
            >
              <i className="ri-github-fill text-sm text-neon-green flex-shrink-0"></i>
              <span className="truncate group-hover:underline font-mono">
                {project.code_link.replace('https://', '')}
              </span>
            </a>
          )}
          {project.live_link && project.live_link !== project.code_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors group truncate"
            >
              <i className="ri-global-line text-sm text-neon-green flex-shrink-0"></i>
              <span className="truncate group-hover:underline font-mono">
                {project.live_link.replace('https://', '')}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
