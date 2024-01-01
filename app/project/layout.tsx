import { Header } from "@/components/index";
import React from "react";

interface ProjectViewProps {
  children: JSX.Element | React.ReactNode;
}
export default function ProjectView({ children }: ProjectViewProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
