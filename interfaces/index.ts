interface Project {
  name: string;
  link: string;
  language: string;
  description: string;
}

interface ExperienceType {
  company: string;
  role: string;
  logo: string;
  description: string[];
  duration: string;
  location: string;
}

interface Skill {
  skill: string;
  link: string;
  logo: any;
}

export type { Project, ExperienceType, Skill };
