// 'use client'
import Stairs from "@/Components/shared/Stairs";
import React from "react";
import ProjectCardSuspense from "@/Components/ProjectCardSuspense";

interface props {
  searchParams: {
    page: number
  }
}

const projects = ({ searchParams } : props ) => {
  return (
    <div className="w-[100vw] lg:w-[70vw] grid items-center h-[90vh]">
      <Stairs />
      <div className="projectContainer ">
        <ProjectCardSuspense searchParams={searchParams} />
      </div>
      
    </div>
  );
};

export default projects;
