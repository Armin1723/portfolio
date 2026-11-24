import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { fetchProjects } from "@/lib/actions/project.actions";
import Pagination from "./shared/Pagination";

interface Props {
  searchParams: {
    page?: number | string;
  };
}

const ProjectCardSuspense = async ({ searchParams }: Props) => {
  const pageNum = Number(searchParams?.page) || 1;
  const results = await fetchProjects(pageNum, 4);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {results?.projects && results.projects.length > 0 ? (
          results.projects.map((project: any, index: number) => (
            <ProjectCard
              key={project._id ? project._id.toString() : index}
              index={(pageNum - 1) * 4 + index}
              project={project}
            />
          ))
        ) : (
          <div className="col-span-2 text-center py-12 text-gray-400">
            No projects found.
          </div>
        )}
      </div>

      {(results?.hasMore || pageNum > 1) && (
        <div className="flex justify-center pt-4">
          <Pagination
            url={"/projects"}
            page={pageNum}
            hasMore={results?.hasMore || false}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCardSuspense;
