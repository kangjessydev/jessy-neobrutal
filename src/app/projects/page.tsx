import React from 'react';
import Link from 'next/link';
import { getProjects } from '@/data/projects';
import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Projects | KANGJESSY DEV",
};

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-32 px-6 bg-white border-b-8 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block bg-[#a5f624] text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#000000] font-bold uppercase text-sm">
                        Case Studies & Archive
                    </div>
                    <h1 className="font-lexend font-black text-7xl md:text-8xl text-black uppercase mb-8 leading-[1.1] tracking-tighter">
                        SELECTED <span className="bg-[#ffd700] px-4">WORKS</span>
                    </h1>
                    <p className="text-xl text-[#5d5f5f] max-w-2xl">
                        A collection of high-performance digital experiences built with precision, raw logic, and a refusal to be ordinary.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-32 px-6 bg-[#f9f9f9]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.map((project) => (
                            <div key={project.slug} className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] group overflow-hidden flex flex-col">
                                {/* Card Header strip */}
                                <div className="bg-[#e2e2e2] border-b-4 border-black px-6 py-3 flex justify-between items-center">
                                    <span className="font-bold uppercase text-sm">{project.category}</span>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-black"></div>
                                        <div className="w-3 h-3 rounded-full bg-black"></div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="h-64 bg-[#e8e8e8] overflow-hidden border-b-4 border-black">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="font-lexend font-black text-3xl uppercase mb-4">{project.title}</h3>
                                    <p className="text-[#5d5f5f] mb-6 flex-grow">{project.description}</p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tech.map((tag) => (
                                            <span 
                                                key={tag}
                                                className="border-2 border-black px-3 py-1 text-xs font-bold uppercase" 
                                                style={{ backgroundColor: project.tagColor }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button href={`/projects/${project.slug}`} variant="primary" size="md">
                                        View Case Study
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Stack */}
            <section className="py-16 px-6 border-t-8 border-black bg-[#eeeeee]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-lexend font-black text-5xl uppercase mb-12">TECHNICAL STACK</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000000] flex flex-col items-center justify-center text-center min-h-[160px]">
                            <span className="material-symbols-outlined text-5xl mb-4">terminal</span>
                            <span className="font-black uppercase tracking-widest text-sm">Frontend</span>
                        </div>
                        <div className="bg-[#ffd700] border-4 border-black p-8 shadow-[8px_8px_0px_#000000] flex flex-col items-center justify-center text-center min-h-[160px]">
                            <span className="material-symbols-outlined text-5xl mb-4">database</span>
                            <span className="font-black uppercase tracking-widest text-sm">Backend</span>
                        </div>
                        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000000] flex flex-col items-center justify-center text-center min-h-[160px]">
                            <span className="material-symbols-outlined text-5xl mb-4">palette</span>
                            <span className="font-black uppercase tracking-widest text-sm">UI / UX</span>
                        </div>
                        <div className="bg-[#ffd700] border-4 border-black p-8 shadow-[8px_8px_0px_#000000] flex flex-col items-center justify-center text-center min-h-[160px]">
                            <span className="material-symbols-outlined text-5xl mb-4">cloud_sync</span>
                            <span className="font-black uppercase tracking-widest text-sm">DevOps</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
