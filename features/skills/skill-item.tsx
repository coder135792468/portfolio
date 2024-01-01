"use client";
import React from "react";
import { SkillItem as SkillItemProps } from "./types";
import {
  Card,
  CardContent,
  Badge,
  CardHeader,
  CardTitle,
} from "@/components/index";

export const Item = (props: SkillItemProps) => {
  return (
    <Card className="p-2 shadow-lg border-none text-gray-500 ">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {props.skills.map((skill) => (
            <Badge variant={"secondary"} className="mx-2 my-1">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
