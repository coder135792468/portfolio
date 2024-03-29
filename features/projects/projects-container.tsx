import React from "react";
import { PROJECTS } from "./constant";
import { ProjectItem } from "./project-item";

export const ProjectContainer = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 pt-0 text-xs">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
