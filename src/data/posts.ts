export interface BlogBlock {
  type: 'text' | 'quote' | 'code' | 'cards';
  heading?: string;
  body?: string;
  text?: string;
  code?: string;
  items?: Array<{
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: BlogBlock[];
}

export const posts: Record<string, BlogPost> = {
  'mastering-neobrutalism': {
    slug: 'mastering-neobrutalism',
    title: "Mastering Neobrutalism in Modern UI",
    excerpt: "Exploring the raw, high-contrast aesthetic that rejects the soft polish of traditional modern design for something more honest and impactful.",
    image: "/blog_subgrid_guide_1778066845930.png",
    category: "DESIGN",
    readTime: "5 MIN READ",
    date: "OCT 24, 2024",
    author: "Kang Jessy",
    content: [
      {
        type: 'text',
        heading: 'The Core Philosophy',
        body: "Neobrutalism isn't just about bold colors; it's a structural rebellion. It celebrates the \"honest\" materials of the digital world—pure CSS borders, non-blurry shadows, and unadulterated primary colors."
      },
      {
        type: 'quote',
        text: "Good design is not just what looks good, it's what feels structurally sound and unapologetically clear."
      },
      {
        type: 'code',
        code: `.brutalist-card {
  background: white;
  border: 4px solid black;
  box-shadow: 8px 8px 0px #000000;
}`
      },
      {
        type: 'cards',
        items: [
          {
            title: "High Impact",
            description: "Vibrant colors and thick lines create an immediate sense of urgency.",
            icon: "bolt",
            color: "bg-primary"
          },
          {
            title: "Zero Gradients",
            description: "We reject the 'faking' of depth. Depth is a graphic choice.",
            icon: "box",
            color: "bg-secondary"
          }
        ]
      }
    ]
  }
};
