export interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    tags: string[];
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: "BRUTALIST UI KIT",
        description: "A massive collection of high-impact components designed for developers who hate boring layouts. 500+ elements.",
        price: "$49",
        tags: ["UI KIT", "FIGMA"],
        image: "/images/ui-kit.webp"
    },
    {
        id: 2,
        title: "NEXT.JS DASHBOARD TEMPLATE",
        description: "Fully responsive, authenticated, and ready-to-deploy dashboard. Includes dark mode and custom chart components.",
        price: "$79",
        tags: ["SAAS", "NEXT.JS"],
        image: "/images/dashboard.webp"
    },
    {
        id: 3,
        title: "THE CSS BIBLE",
        description: "Master modern CSS layout engines. 400 pages of deep dives into Grid, Flexbox, and the future of styling.",
        price: "$25",
        tags: ["E-BOOK", "GUIDE"],
        image: "/images/css-bible.webp"
    }
];

export function getProducts() {
    return products;
}
