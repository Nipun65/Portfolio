import { StaticImageData } from "next/image";

interface Project {
  name: string;
  link: string;
  language: string;
  description: string;
  image?: StaticImageData;
}

interface ExperienceType {
  company: string;
  role: string;
  logo: string;
  description: string[];
  duration: string;
  location: string;
}

interface EducationType {
  university: string;
  degree: string;
  duration: string;
  location: string;
}

interface Skill {
  skill: string;
  link: string;
  logo: any;
}

export type { Project, ExperienceType, Skill, EducationType };
