import React from "react";
import { TimelineItem } from "./types";
import { TIMELINES } from "./constant";

export const Timeline = () => {
  return (
    <div className="max-w-[1240px] ml-10">
      <h1 className="font-bold">Timeline</h1>
      {TIMELINES.map((data: TimelineItem, index: number) => (
        <div key={index} className="mt-3 px-2">
          <header className="font-bold text-gray-500">{data.year}</header>
          <div className="px-5">
            <ul className="list-disc text-xs">
              {data.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
