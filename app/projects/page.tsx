import Stairs from "@/Components/shared/Stairs";
import ProjectCard from "@/Components/cards/ProjectCard";
import Pagination from "@/Components/shared/Pagination";
import { fetchProjects } from "@/lib/actions/project.actions";
import React from "react";

interface props {
  searchParams: {
    page: number
  }
}

interface projectProp {
  title: string,
  description: string,
  code_link: string,
  live_link: string,
  techs: string[],
  start_date: Date,
  end_date: Date
}

const projects = async ({ searchParams } : props ) => {
  const results = await fetchProjects(searchParams.page ? searchParams.page : 1)
  return (
    <div className="w-[100vw] lg:w-[70vw] grid items-center h-[90vh]">
      <Stairs />
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-scroll max-lg:mx-4 h-[80vh] custom-scrollbar gap-[20px] max-sm:gap-[50px] max-sm:py-1">
        { results?.projects && results.projects.map((project: projectProp, index: number) => (
          <ProjectCard key={index} index={index} project={project}/>
        ))}
      </div>
      {(results?.hasMore || searchParams?.page != 1) && <Pagination url={'/projects'} page={searchParams.page ? searchParams.page : 1} hasMore={results?.hasMore || false}/> }
    </div>
  );
};

export default projects;
