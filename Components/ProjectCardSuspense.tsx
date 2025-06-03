import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { fetchProjects } from "@/lib/actions/project.actions";
import Pagination from "./shared/Pagination";

interface props {
  searchParams: {
    page: number;
  };
}

interface projectProp {
  title: string;
  description: string;
  code_link: string;
  live_link: string;
  techs: string[];
  start_date: Date;
  end_date: Date;
}

const ProjectCardSuspense = async ({ searchParams }: props) => {
  const results = await fetchProjects(
    searchParams.page ? searchParams.page : 1
  );
  return (
    <>
      <div className="transition-all duration-500 grid grid-cols-1 md:grid-cols-2 overflow-y-scroll max-lg:mx-4 h-[80vh] custom-scrollbar gap-[20px] max-sm:gap-[50px] max-sm:py-1">
      {results?.projects &&
        results.projects.map((project: projectProp, index: number) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
      
      {(results?.hasMore || searchParams?.page != 1) && (
        <Pagination
          url={"/projects"}
          page={searchParams.page ? searchParams.page : 1}
          hasMore={results?.hasMore || false}
        />
      )}
    </>
  );
};

export default ProjectCardSuspense;
