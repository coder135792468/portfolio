"use client";
import React from "react";
import { PROJECTS } from "@/features/projects/constant";
import { ProjectSlider } from "@/components/layouts/project-slider";
import { Badge, Button } from "@/components/index";

export default function ProjectInfo(props: any) {
  const curProject = PROJECTS[parseInt(props.params.id) - 1];
  return (
    <div>
      <ProjectSlider {...curProject} />
      <div className="flex justify-space-evenly mx-w-lg">
        {curProject.projectUrl.map((project, index) => (
          <a href={project.url} key={index} target="_blank" className="mx-auto">
            <Button variant={"destructive"}>{project.title}</Button>
          </a>
        ))}
      </div>
      <div className="w-[50vw] p-5 rounded-xl mt-5 mx-auto text-center">
        {curProject.tech.map((skill, index) => (
          <Badge key={index + 1} className="mx-2">
            {skill}
          </Badge>
        ))}
      </div>
      <div className="p-5">
        <h2 className="font-bold">Keys Points:</h2>
        <ul className="list-disc px-8 mb-10">
          {curProject.points.map((point: string, index: number) => (
            <li key={index + 1}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
