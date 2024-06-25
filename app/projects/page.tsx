import Stairs from "@/Components/Stairs";
import ProjectCard from "@/Components/cards/ProjectCard";
import { createProject, fetchProjects } from "@/lib/actions/project.action";
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

const projects = async ({ searchParams } : props ) =>{
  await createProject()
  const results = await fetchProjects(searchParams.page ? searchParams.page : 1)
  return (
    <div className="w-[100vw] lg:w-[70vw] grid items-center h-[90vh]">
      <Stairs />
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-scroll max-lg:mx-4 h-[80vh] custom-scrollbar gap-[20px]">
        { results?.projects && results.projects.map((project: projectProp, index: number) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
      {results?.hasMore && <p>Pagination</p> }
    </div>
  );
};

export default projects;
