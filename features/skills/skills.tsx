"use client";
import React from "react";
import { SKILLS } from "./constant";
import { Item } from "./skill-item";

export const Skills = () => {
  return (
    <div id="skills" className="w-full p-10 bg-foreground">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-5 tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map(({ title, description, skills }) => (
            <Item title={title} description={description} skills={skills} />
          ))}
        </div>
      </div>
    </div>
  );
};
