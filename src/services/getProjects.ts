// Service layer — saat ini baca dari JSON lokal.
// Ketika backend siap, cukup ganti implementasi di sini
// tanpa perlu menyentuh halaman .astro sama sekali.
//
// Contoh nanti: return await fetch('https://api.kangjessy.dev/projects').then(r => r.json())

import projectsData from '../data/projects.json';

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
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug) as Project | undefined;
}
