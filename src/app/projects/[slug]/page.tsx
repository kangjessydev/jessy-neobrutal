'use client';
import React, { useState, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { getProjectBySlug, getProjects, Project } from '@/data/projects';
import { getTagColor } from '@/utils/colors';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';

// Note: generateStaticParams must be in a separate server-side file or 
// this file should be split into Client/Server components.
// For Simplicity in this migration, I'll keep the logic here as Client Component.

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const project = getProjectBySlug(slug);

    const [activeIndex, setActiveIndex] = useState(0);
    const [parent] = useAutoAnimate();

    if (!project) {
        notFound();
    }

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const problemPoints = [
        "Cluttered & Heavy UI Dashboards",
        "Fragile Transaction Systems",
        "High Data Latency"
    ];

    const problemDetails = [
        "Legacy dashboards relied on deprecated frameworks, causing bloated bundle sizes and sluggish rendering on low-end devices.",
        "Inefficient state management architectures led to frequent race conditions during critical user transactions.",
        "System monitoring relied on periodic 5-second polling, resulting in significant visual lag during volatile periods."
    ];

    const solutionPoints = [
        "Modular & Lean Architecture",
        "Real-time Transaction Validation",
        "Optimized GraphQL Subscriptions"
    ];

    const solutionDetails = [
        "Rebuilt the core system using Next.js with Server Components to minimize client-side overhead and maximize speed.",
        "Implemented robust state management for predictable transaction flows, ensuring every step is validated before database entry.",
        "Migrated to GraphQL Subscriptions (Websocket) for instant data updates (<100ms) without taxing the browser resources."
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-white border-b-8 border-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start text-black">
                    
                    {/* Left: Info */}
                    <div className="lg:col-span-2">
                        <div 
                            className="inline-block text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#000000] font-bold uppercase text-sm"
                            style={{ backgroundColor: getTagColor(project.tagColor) }}
                        >
                            {project.category}
                        </div>
                        <h1 className="font-lexend font-black text-6xl md:text-8xl text-black uppercase mb-8 leading-[1.1] tracking-tighter">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#000000] mb-10 max-w-2xl leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {project.tech.map((tag) => (
                                <span key={tag} className="border-2 border-black bg-white px-4 py-1 text-sm font-bold uppercase shadow-[2px_2px_0px_#000000]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-6">
                            <Button href={project.demoUrl} variant="primary" size="md">
                                <i className="ph-bold ph-arrow-square-out text-xl"></i>
                                LIVE DEMO
                            </Button>
                            <Button href={project.githubUrl} variant="tertiary" size="md">
                                <i className="ph-bold ph-code text-xl"></i>
                                VIEW CODE
                            </Button>
                        </div>
                    </div>

                    {/* Right: Specs Card (Sticky) */}
                    <div className="lg:sticky lg:top-32 lg:col-span-1">
                        <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_#000000]">
                            <h3 className="font-lexend font-black text-2xl uppercase mb-6 border-b-4 border-black pb-4 text-black text-black">SPECS</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <span className="block text-xs font-bold uppercase text-[#000000] mb-1 tracking-widest">Year</span>
                                    <span className="text-2xl font-black uppercase text-black">{project.year || "2024"}</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-[#000000] mb-1 tracking-widest">Role</span>
                                    <span className="text-2xl font-black uppercase text-black">{project.role || "Lead Developer"}</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-[#000000] mb-1 tracking-widest">Client</span>
                                    <span className="text-2xl font-black uppercase text-black">{project.client || "External Project"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Marquee */}
            <div className="bg-[#ffd700] border-b-8 border-black py-4 overflow-hidden whitespace-nowrap flex select-none relative h-20 items-center">
                <div className="animate-marquee flex gap-8 items-center min-w-full">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center shrink-0 text-black">
                            <span className="font-lexend font-black text-2xl uppercase italic">DESIGN WITH PURPOSE</span>
                            <i className="ph-bold ph-star text-4xl"></i>
                            <span className="font-lexend font-black text-2xl uppercase italic">RAW LOGIC ONLY</span>
                            <i className="ph-bold ph-lightning text-4xl"></i>
                        </div>
                    ))}
                </div>
                 <div className="animate-marquee flex gap-8 items-center min-w-full">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center shrink-0 text-black">
                            <span className="font-lexend font-black text-2xl uppercase italic">DESIGN WITH PURPOSE</span>
                            <i className="ph-bold ph-star text-4xl"></i>
                            <span className="font-lexend font-black text-2xl uppercase italic">RAW LOGIC ONLY</span>
                            <i className="ph-bold ph-lightning text-4xl"></i>
                        </div>
                    ))}
                </div>
            </div>

            {/* Problem & Solution Cards */}
            <section className="py-32 px-6 bg-[#eeeeee]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* THE PROBLEM CARD */}
                    <div className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] flex flex-col h-full overflow-hidden">
                        <div className="bg-[#ff69b4] text-white border-b-4 border-black px-6 py-3 font-black uppercase text-sm tracking-widest">
                            THE PROBLEM
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <p className="text-lg font-medium leading-relaxed mb-8 text-black">{project.problem || "Traditional digital interfaces were often cluttered with unnecessarily complex navigation patterns."}</p>
                            
                            <ul className="space-y-3 mb-8">
                                {problemPoints.map((point, i) => (
                                    <li 
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`cursor-pointer border-2 border-black p-3 font-bold flex gap-3 items-center transition-all ${
                                            activeIndex === i ? 'bg-[#ff69b4] text-white translate-x-2.5 shadow-[-4px_0px_0px_black]' : 'hover:bg-[#ff69b4] hover:text-white text-black'
                                        }`}
                                    >
                                        <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center">0{i+1}</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Dynamic Description Box (Problem) */}
                            <div className="mb-8 border-4 border-black p-5 bg-[#eeeeee] min-h-[100px] flex items-center relative overflow-hidden" ref={parent}>
                                <div key={activeIndex} className="animate-side-in">
                                    <h5 className="text-[10px] font-black uppercase opacity-60 mb-1 tracking-[0.2em] text-black">Context / Observation</h5>
                                    <p className="text-sm font-bold text-black leading-snug italic">
                                        &quot;{problemDetails[activeIndex]}&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto relative border-4 border-black bg-black overflow-hidden aspect-video">
                                <div className="flex w-full h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    <img src={project.image} className="w-full h-full object-cover shrink-0" alt="Problem 1" />
                                    <img src="/images/the_lab_keyboard_neobrutal_1778062567814.png" className="w-full h-full object-cover shrink-0" alt="Problem 2" />
                                    <img src="/images/our_studio_photography_neobrutal_1778062528096.png" className="w-full h-full object-cover shrink-0" alt="Problem 3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THE SOLUTION CARD */}
                    <div className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] flex flex-col h-full overflow-hidden">
                        <div className="bg-[#adff2f] text-black border-b-4 border-black px-6 py-3 font-black uppercase text-sm tracking-widest">
                            THE SOLUTION
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <p className="text-lg font-medium leading-relaxed mb-8 text-black">{project.solution || "I implemented a strict Neobrutalist system that prioritizes data hierarchy and performance."}</p>
                            
                            <ul className="space-y-3 mb-8">
                                {solutionPoints.map((point, i) => (
                                    <li 
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`cursor-pointer border-2 border-black p-3 font-bold flex gap-3 items-center transition-all ${
                                            activeIndex === i ? 'bg-[#adff2f] text-black translate-x-2.5 shadow-[-4px_0px_0px_black]' : 'hover:bg-[#adff2f] text-black'
                                        }`}
                                    >
                                        <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center">0{i+1}</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Dynamic Description Box (Solution) */}
                            <div className="mb-8 border-4 border-black p-5 bg-[#eeeeee] min-h-[100px] flex items-center relative overflow-hidden" ref={parent}>
                                <div key={activeIndex} className="animate-side-in">
                                    <h5 className="text-[10px] font-black uppercase opacity-60 mb-1 tracking-[0.2em] text-black">Strategy / Execution</h5>
                                    <p className="text-sm font-bold text-black leading-snug italic">
                                        &quot;{solutionDetails[activeIndex]}&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto relative border-4 border-black bg-black overflow-hidden aspect-video">
                                <div className="flex w-full h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    <img src={project.image} className="w-full h-full object-cover shrink-0" alt="Solution 1" />
                                    <img src="/images/playground_components_neobrutal_1778062798068.png" className="w-full h-full object-cover shrink-0" alt="Solution 2" />
                                    <img src={project.image} className="w-full h-full object-cover shrink-0" alt="Solution 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Execution Narrative */}
            <section className="py-32 px-6 bg-white border-t-8 border-black">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-lexend font-black text-4xl md:text-6xl uppercase mb-16 tracking-tighter text-center text-black">THE EXECUTION</h2>
                    
                    <div className="prose-neo text-black mt-10">
                        <h3 className="text-3xl font-black mb-6 uppercase">Breaking the Convention</h3>
                        <p className="mb-6 leading-relaxed">
                            For {project.title}, the primary challenge was presenting highly complex data without overwhelming the user. We started by <strong className="bg-[#ffd700] px-1">stripping away all non-essential visual elements</strong>.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Every component had to pass the <em>&quot;Raw Logic&quot;</em> test: if a border didn&apos;t define a structure, it was removed. The result is an interface that is remarkably honest and transparent.
                        </p>
                        
                        <h4 className="text-2xl font-black mb-4 uppercase">Key Requirements:</h4>
                        <ul className="list-disc list-inside mb-8 space-y-2">
                            <li>Sub-100ms latency for all data visualizers.</li>
                            <li>High-contrast accessibility for modern web environments.</li>
                            <li>Scalable component library for future integrations.</li>
                        </ul>

                        <blockquote className="border-l-8 border-black pl-6 py-4 italic text-2xl font-bold bg-[#eeeeee] mb-10">&quot;Brutalism in web design isn&apos;t about being ugly; it&apos;s about being unapologetically functional.&quot;</blockquote>

                        <h4 className="text-2xl font-black mb-4 uppercase text-black">System Performance:</h4>
                        <div className="my-10 overflow-x-auto border-4 border-black">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#eeeeee] border-b-4 border-black">
                                    <tr>
                                        <th className="p-4 font-black uppercase border-r-4 border-black">Metric</th>
                                        <th className="p-4 font-black uppercase border-r-4 border-black">Before</th>
                                        <th className="p-4 font-black uppercase">After</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-2 border-black">
                                        <td className="p-4 font-bold border-r-4 border-black">Load Time</td>
                                        <td className="p-4 border-r-4 border-black">4.2s</td>
                                        <td className="p-4 bg-[#adff2f] font-black">0.8s</td>
                                    </tr>
                                    <tr className="border-b-2 border-black">
                                        <td className="p-4 font-bold border-r-4 border-black">Bundle Size</td>
                                        <td className="p-4 border-r-4 border-black">1.2MB</td>
                                        <td className="p-4 bg-[#adff2f] font-black">145KB</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold border-r-4 border-black">User Retention</td>
                                        <td className="p-4 border-r-4 border-black">12%</td>
                                        <td className="p-4 bg-[#adff2f] font-black">88%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="leading-relaxed">
                            The end result isn&apos;t just about speed, it&apos;s about building trust. With a neobrutalist approach, {project.title} proves that honesty in design is the strongest currency in a digital age filled with deceptive visuals.
                        </p>
                    </div>
                </div>
            </section>

             {/* Technical Architecture */}
            <section className="py-32 px-6 bg-[#eeeeee]">
                <div className="max-w-7xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                        <div className="relative bg-black text-white p-12 lg:p-20 border-4 border-black">
                            <h2 className="font-lexend font-black text-4xl md:text-5xl uppercase mb-16 text-[#ffd700] tracking-tighter">TECHNICAL ARCHITECTURE</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                                <div className="flex flex-col gap-6">
                                    <i className="ph-bold ph-squares-four text-[#ffd700] text-4xl"></i>
                                    <div>
                                        <h4 className="font-lexend font-black text-2xl uppercase mb-4 tracking-tight">FRONTEND</h4>
                                        <p className="text-[#eeeeee] text-sm leading-relaxed">{project.technical?.frontend}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <i className="ph-bold ph-database text-[#ffd700] text-4xl"></i>
                                    <div>
                                        <h4 className="font-lexend font-black text-2xl uppercase mb-4 tracking-tight">REAL-TIME</h4>
                                        <p className="text-[#eeeeee] text-sm leading-relaxed">{project.technical?.realtime}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <i className="ph-bold ph-shield-check text-[#ffd700] text-4xl"></i>
                                    <div>
                                        <h4 className="font-lexend font-black text-2xl uppercase mb-4 tracking-tight">SECURITY</h4>
                                        <p className="text-[#eeeeee] text-sm leading-relaxed">{project.technical?.security}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
