import { Button } from "@/components/index";
import React from "react";
import { FaGithub, FaLinkedinIn, FaAngleDoubleDown } from "react-icons/fa";
export const Landing = () => {
  return (
    <div className="w-full h-screen ">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center flex-col">
        <div>
          <p className="uppercase text-lg font-bold tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Prashant</span>
          </h1>
          <h1 className="text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-3 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="grid grid-cols-3 justify-between max-w-[300px] mx-auto py-4">
            <a
              href="https://www.linkedin.com/in/prashant-shukla-380755211/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant={"destructive"} size={"lg"}>
                <FaLinkedinIn />
              </Button>
            </a>
            <a
              href="https://github.com/coder135792468"
              target="_blank"
              rel="noreferrer"
            >
              <Button size={"lg"}>
                <FaGithub />
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/10T1gE9hUBVFXVDhYb7jRgxKF4OwyyR75/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Resume</Button>
            </a>
          </div>
        </div>
        <div className="flex items-center text-[2rem] mt-10">
          <span className="m-auto animate-bounce">
            <FaAngleDoubleDown />
          </span>
        </div>
      </div>
    </div>
  );
};
