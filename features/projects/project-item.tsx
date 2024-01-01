import Image from "next/image";
import React from "react";
import type { ProjectItemProps } from "./types";
import { Badge } from "@/components/index";

export const ProjectItem = ({
  id,
  title,
  mainImage,
  tech,
}: ProjectItemProps) => {
  return (
    <a href={`/project/${id}`}>
      <div className="dark:bg-gray-200 rounded-md shadow-lg shadow-gray-400 dark:shadow-sm ">
        <div className="p-4 relative flex items-center justify-center h-auto w-fullrounded-md group dark:bg-foreground hover:bg-primary">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={`/images/${mainImage}`}
            alt="/"
            width={300}
            height={400}
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center text-uppercase">
              {title}
            </h3>
          </div>
        </div>
        <div className="pb-4 pt-2 h-[70px]">
          {tech.map((skill) => (
            <Badge variant={"destructive"} className="mx-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  );
};
