import blogData from './blog.json';

export interface ContentBlock {
  type: 'text' | 'quote' | 'code' | 'table' | 'list' | 'image';
  heading?: string;
  level?: 2 | 3 | 4; // Support different heading levels
  body?: string;
  text?: string;
  code?: string;
  language?: string;
  // Table fields
  headers?: string[];
  rows?: string[][];
  // List fields
  items?: string[];
  ordered?: boolean;
  // Image fields
  src?: string;
  caption?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  blocks?: ContentBlock[];
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
}

export const posts: Post[] = blogData as Post[];

export function getPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
