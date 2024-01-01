interface ProjectURLProps {
  title: string;
  url: string;
}
export interface ProjectItemProps {
  id: number;
  title: string;
  mainImage: string;
  tech: string[];
  projectUrl?: ProjectURLProps[];
  images?: string[];
  points: string[];
}
