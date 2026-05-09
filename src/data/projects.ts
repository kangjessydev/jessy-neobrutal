import projectData from './projects.json';

export interface ContentBlock {
  type: 'text' | 'quote' | 'code' | 'table' | 'list' | 'image';
  heading?: string;
  level?: 2 | 3 | 4;
  body?: string;
  text?: string;
  code?: string;
  language?: string;
  headers?: string[];
  rows?: string[][];
  items?: string[];
  ordered?: boolean;
  src?: string;
  caption?: string;
}

export interface CasePoint {
  point: string;
  detail: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagColor: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  // Detail Fields
  year?: string;
  role?: string;
  client?: string;
  problem?: string;
  problems?: CasePoint[]; // Grouped problem points
  solution?: string;
  solutions?: CasePoint[]; // Grouped solution points
  execution?: {
    title: string;
    description: string;
  };
  blocks?: ContentBlock[];
  gallery?: string[];
  technical?: {
    frontend: string;
    realtime: string;
    security: string;
  };
  taxonomy?: string[];
}

export const projects: Project[] = projectData as Project[];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
