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
  solution?: string;
  execution?: {
    title: string;
    description: string;
  };
  gallery?: string[];
  technical?: {
    frontend: string;
    realtime: string;
    security: string;
  };
}

export const projects: Project[] = [
  {
    "slug": "neo-ledger",
    "title": "NEO-LEDGER",
    "category": "Fintech App",
    "tagColor": "#ffd700",
    "description": "A decentralized financial dashboard reimagined for the brutalist web. Neo-Ledger tackles the complexity of multi-chain asset management.",
    "tech": ["Next.js", "TypeScript", "WebSocket", "GraphQL", "Web3"],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTiV-V4IHdDGSZhG0NtPXMkfdkohMHh2l2-mdFHHSZZo0c09HJdOErl3-DGndLCu7joJ0BvRaB_rcvSt0cAfF25QW5yiqFi7QZdCczHZLlfy-X7XVjXNQ79sjQyDhqostoNKGg5zjfhBLjQN2k7pKCNYmHMRb13h7rLOYqTjChwakJAo6xmIzfK8Jo0jvl4s9n8ZccgIW8OndUYC3V1e8O_KcGf7Ujyz2C5a9pBhdsm5nxzOT9a7Ljf5g9BvRLSboO9fxCAQ2tWyw",
    "demoUrl": "#",
    "githubUrl": "#",
    "year": "2024",
    "role": "Lead Developer",
    "client": "Aether Ventures",
    "problem": "Traditional crypto-wallets and dashboards were cluttered with unnecessary animations, complex navigation patterns, and slow data fetching that frustrated professional traders needing split-second information.",
    "solution": "We implemented a strict Neobrutalist design system that prioritizes data hierarchy. By utilizing GraphQL subscriptions and a custom caching layer, we achieved sub-millisecond updates across all visualized metrics.",
    "execution": {
      "title": "THE EXECUTION",
      "description": "The logic was to strip away every visual element that didn't serve a direct data-conveying purpose. Shadows aren't just depth; they are structural anchors."
    },
    "gallery": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTiV-V4IHdDGSZhG0NtPXMkfdkohMHh2l2-mdFHHSZZo0c09HJdOErl3-DGndLCu7joJ0BvRaB_rcvSt0cAfF25QW5yiqFi7QZdCczHZLlfy-X7XVjXNQ79sjQyDhqostoNKGg5zjfhBLjQN2k7pKCNYmHMRb13h7rLOYqTjChwakJAo6xmIzfK8Jo0jvl4s9n8ZccgIW8OndUYC3V1e8O_KcGf7Ujyz2C5a9pBhdsm5nxzOT9a7Ljf5g9BvRLSboO9fxCAQ2tWyw"
    ],
    "technical": {
      "frontend": "Built on Next.js 14 for server-side rendering performance, using Tailwind for structural brutalist styling.",
      "realtime": "Leveraging WebSockets and Apollo Client for real-time price feeds across major blockchain networks.",
      "security": "End-to-end encrypted session management and hardware wallet integration via Web3Auth protocol."
    }
  },
  {
    "slug": "brutalist-ui-kit",
    "title": "BRUTALIST UI KIT",
    "category": "Digital Product",
    "tagColor": "#a5f624",
    "description": "A collection of 50+ neobrutalist components for Figma and Webflow, designed for high-impact landing pages.",
    "tech": ["Vanilla CSS", "Figma", "Webflow"],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD2KtNuu7v1qvY2llAc_yIc6yM5NhhOj0Gpbup84Sv56L-6VpL10woWVYzcLqmgTHX8-impzL7G_i9ZKmrEiCULaPFIVCj3D0Ru0C6sY_Vgi0bHBJEJLcpaSqrk1ldAeUBPqLOSKVmngipzXCQfKXJx6wFvAnpzMJHZ_6-Ms_eJYJ7GJPdnAayoaIoJA6R28PyZBSrjs8Wsc8SWdK74S1aZutRdd_1jP4jPoM97nDFZNZtT6oA_my6m-RvvVLIfcZzXeaOQYLCpmJu2",
    "demoUrl": "#",
    "githubUrl": "#",
    "year": "2023",
    "role": "UI Designer",
    "client": "Standard.io",
    "problem": "Modern UI kits often focus on 'safe' aesthetics—rounded corners, soft shadows, and muted colors—which fail to capture the raw energy of bold, technical product brands.",
    "solution": "We broke the rules by introducing heavy 8px borders, absolute zero-blur shadows, and a saturated color system that provides instant visual impact and structural clarity.",
    "execution": {
      "title": "THE EXECUTION",
      "description": "Every component was battle-tested for performance. We used zero external libraries to ensure the CSS remains as raw and efficient as possible."
    },
    "technical": {
      "frontend": "Pure CSS with zero abstraction layers. Focused on native browser performance and variable-driven layout systems.",
      "realtime": "N/A - Optimized for static delivery and rapid prototyping across various web frameworks.",
      "security": "Clean code architecture ensuring zero dependencies and minimal surface area for potential exploits."
    }
  },
  {
    "slug": "ecommerce-app",
    "title": "E-COMMERCE APP",
    "category": "Full Stack",
    "tagColor": "#ffd700",
    "description": "A full-stack commerce solution featuring a custom payment gateway and real-time inventory tracking.",
    "tech": ["React", "Node.js", "PostgreSQL"],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTiV-V4IHdDGSZhG0NtPXMkfdkohMHh2l2-mdFHHSZZo0c09HJdOErl3-DGndLCu7joJ0BvRaB_rcvSt0cAfF25QW5yiqFi7QZdCczHZLlfy-X7XVjXNQ79sjQyDhqostoNKGg5zjfhBLjQN2k7pKCNYmHMRb13h7rLOYqTjChwakJAo6xmIzfK8Jo0jvl4s9n8ZccgIW8OndUYC3V1e8O_KcGf7Ujyz2C5a9pBhdsm5nxzOT9a7Ljf5g9BvRLSboO9fxCAQ2tWyw",
    "demoUrl": "#",
    "githubUrl": "#",
    "year": "2024",
    "role": "Full Stack Dev",
    "client": "Urban Goods",
    "problem": "Most e-commerce platforms feel like generic templates, lacking the bold identity and smooth inventory-to-cart orchestration needed for high-volume niche retail brands.",
    "solution": "Built a custom engine from scratch that treats the shopping experience as a technical sequence. Real-time updates and a rigid grid layout keep the focus on the product.",
    "execution": {
      "title": "THE EXECUTION",
      "description": "We utilized server-side rendering for lightning-fast initial loads and a robust PostgreSQL schema to handle thousands of SKUs without performance degradation."
    },
    "technical": {
      "frontend": "React with a customized component library built specifically for high-conversion retail layouts.",
      "realtime": "Node.js environment with specialized background workers for inventory sync and custom order processing.",
      "security": "PCI-compliant integration layers and hardened API endpoints with rate-limiting and JWT-based authentication."
    }
  },
  {
    "slug": "task-manager",
    "title": "TASK MANAGER",
    "category": "Productivity App",
    "tagColor": "#a5f624",
    "description": "A productivity powerhouse focused on keyboard shortcuts and rapid task entry. Built with a focus on raw utility.",
    "tech": ["Vue.js", "TypeScript", "Pinia"],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD2KtNuu7v1qvY2llAc_yIc6yM5NhhOj0Gpbup84Sv56L-6VpL10woWVYzcLqmgTHX8-impzL7G_i9ZKmrEiCULaPFIVCj3D0Ru0C6sY_Vgi0bHBJEJLcpaSqrk1ldAeUBPqLOSKVmngipzXCQfKXJx6wFvAnpzMJHZ_6-Ms_eJYJ7GJPdnAayoaIoJA6R28PyZBSrjs8Wsc8SWdK74S1aZutRdd_1jP4jPoM97nDFZNZtT6oA_my6m-RvvVLIfcZzXeaOQYLCpmJu2",
    "demoUrl": "#",
    "githubUrl": "#",
    "year": "2023",
    "role": "Lead Dev",
    "client": "Inner Circle",
    "problem": "Productivity tools are becoming bloated with features nobody uses, leading to slow load times and fragmented user experiences that hinder rapid output.",
    "solution": "We stripped it down to the essentials: speed and structure. A keyboard-first navigation system wrapped in a high-contrast brutalist UI shell.",
    "execution": {
      "title": "THE EXECUTION",
      "description": "Leveraging Vue 3's Composition API and Pinia for state management, we achieved a total bundle size of under 100kb while maintaining full offline capabilities."
    },
    "technical": {
      "frontend": "Vue.js focused on reactive state orchestration and high-speed DOM updates for keyboard-heavy workflows.",
      "realtime": "Local-first architecture using IndexedDB for persistence and background sync when connection is restored.",
      "security": "Zero-knowledge encryption for task data and biometric authentication for secure session access."
    }
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
