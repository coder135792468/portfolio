import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Card,
  CardContent,
  CardFooter,
} from "@/components/index";
import Image from "next/image";
interface ProjectProps {
  id: number;
  title: string;
  mainImage: string;
  tech: string[];
  images: string[];
  points: string[];
}
export const ProjectSlider = (curProject: ProjectProps) => {
  return (
    <div className="flex items-center justify-center my-10">
      <Carousel className="w-full md:max-w-lg lg:max-w-[800px]">
        <CarouselContent className="-ml-1">
          {curProject.images.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <Card className="h-[400px] flex items-center justify-center flex-col">
                <CardContent>
                  <Image
                    src={`/images/${imageUrl}`}
                    width={500}
                    height={500}
                    alt={curProject.title}
                  />
                </CardContent>
                <CardFooter className="text-xs">
                  {index + 1}/{curProject.images.length}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
