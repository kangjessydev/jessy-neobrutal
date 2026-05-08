export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    slug: "clean-code-lie",
    title: "Why Clean Code is a Lie We Tell Seniors.",
    excerpt: "Exploring the pragmatism of 'good enough' code over academic perfection in high-growth startups.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTiV-V4IHdDGSZhG0NtPXMkfdkohMHh2l2-mdFHHSZZo0c09HJdOErl3-DGndLCu7joJ0BvRaB_rcvSt0cAfF25QW5yiqFi7QZdCczHZLlfy-X7XVjXNQ79sjQyDhqostoNKGg5zjfhBLjQN2k7pKCNYmHMRb13h7rLOYqTjChwakJAo6xmIzfK8Jo0jvl4s9n8ZccgIW8OndUYC3V1e8O_KcGf7Ujyz2C5a9pBhdsm5nxzOT9a7Ljf5g9BvRLSboO9fxCAQ2tWyw",
    tags: ["CRAFT", "ARCHITECTURE"],
    date: "OCT 12, 2024",
    readTime: "12 MIN READ",
    featured: true
  },
  {
    slug: "mastering-neobrutalism",
    title: "Mastering the Subgrid: A Guide.",
    excerpt: "Finally, layouts that don't break when your content changes. Dive deep into CSS Subgrid.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2KtNuu7v1qvY2llAc_yIc6yM5NhhOj0Gpbup84Sv56L-6VpL10woWVYzcLqmgTHX8-impzL7G_i9ZKmrEiCULaPFIVCj3D0Ru0C6sY_Vgi0bHBJEJLcpaSqrk1ldAeUBPqLOSKVmngipzXCQfKXJx6wFvAnpzMJHZ_6-Ms_eJYJ7GJPdnAayoaIoJA6R28PyZBSrjs8Wsc8SWdK74S1aZutRdd_1jP4jPoM97nDFZNZtT6oA_my6m-RvvVLIfcZzXeaOQYLCpmJu2",
    tags: ["CSS", "DEVELOPMENT"],
    date: "OCT 08, 2024",
    readTime: "8 MIN READ"
  },
  {
    slug: "brutalist-ux",
    title: "The Brutalist UX Manifesto.",
    excerpt: "Why hiding complexity is the biggest mistake you can make in modern UI design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTiV-V4IHdDGSZhG0NtPXMkfdkohMHh2l2-mdFHHSZZo0c09HJdOErl3-DGndLCu7joJ0BvRaB_rcvSt0cAfF25QW5yiqFi7QZdCczHZLlfy-X7XVjXNQ79sjQyDhqostoNKGg5zjfhBLjQN2k7pKCNYmHMRb13h7rLOYqTjChwakJAo6xmIzfK8Jo0jvl4s9n8ZccgIW8OndUYC3V1e8O_KcGf7Ujyz2C5a9pBhdsm5nxzOT9a7Ljf5g9BvRLSboO9fxCAQ2tWyw",
    tags: ["UX DESIGN"],
    date: "OCT 01, 2024",
    readTime: "5 MIN READ"
  },
  {
    slug: "zero-js",
    title: "Zero-JS Hydration.",
    excerpt: "Stripping the fluff until only the core experience remains. Performance at its rawest.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2KtNuu7v1qvY2llAc_yIc6yM5NhhOj0Gpbup84Sv56L-6VpL10woWVYzcLqmgTHX8-impzL7G_i9ZKmrEiCULaPFIVCj3D0Ru0C6sY_Vgi0bHBJEJLcpaSqrk1ldAeUBPqLOSKVmngipzXCQfKXJx6wFvAnpzMJHZ_6-Ms_eJYJ7GJPdnAayoaIoJA6R28PyZBSrjs8Wsc8SWdK74S1aZutRdd_1jP4jPoM97nDFZNZtT6oA_my6m-RvvVLIfcZzXeaOQYLCpmJu2",
    tags: ["PERFORMANCE", "DEVELOPMENT"],
    date: "OCT 22, 2024",
    readTime: "10 MIN READ"
  }
];

export function getPosts() {
  return posts;
}

export function getPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug);
}
