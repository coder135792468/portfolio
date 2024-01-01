import React from "react";
import Image from "next/image";
import { AboutImg } from "@/public/images/index";
import { Timeline } from "./timeline";

export const About = () => {
  return (
    <div id="about" className="w-full p-5 pt-20 flex   bg-secondary flex-col">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-gray-500">Full Stack Developer</h2>
          <p className="py-2 text-gray-600 text-sm">
            I am currently working as a Frontend Developer. I bring expertise in
            MERN stack development, React Native, and Spring Boot. Proficient in
            JavaScript (Node.js, React), I've also delved into native mobile app
            development and backend solutions.I possess a good understanding of
            Java,C++ and Python.
          </p>
        </div>
        <div className="w-full h-auto m-auto  rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="background-cover" alt="/" />
        </div>
      </div>
      <Timeline />
    </div>
  );
};
