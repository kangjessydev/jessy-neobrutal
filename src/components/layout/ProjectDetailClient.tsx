'use client';
import React, { useState, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Project } from '@/data/projects';
import Button from '@/components/ui/Button';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import { getTagColor } from '@/utils/colors';
import Link from 'next/link';

interface ProjectDetailClientProps {
    project: Project;
    dict: any;
    locale: string;
}

export default function ProjectDetailClient({ project, dict, locale }: ProjectDetailClientProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [parent] = useAutoAnimate();
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (code: string, idx: number) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const problems = project.problems || [];
    const solutions = project.solutions || [];
    const themeColor = getTagColor(project.tagColor);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-white border-b-8 border-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Left: Info */}
                    <div className="lg:col-span-2">
                        <div 
                            className="inline-block text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#000000] font-bold uppercase text-sm"
                            style={{ backgroundColor: themeColor }}
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
                                {dict.common.visitSite}
                            </Button>
                            <Button href={project.githubUrl} variant="tertiary" size="md">
                                <i className="ph-bold ph-code text-xl"></i>
                                {dict.projectDetail.viewCode}
                            </Button>
                        </div>
                    </div>

                    {/* Right: Specs Card (Sticky) */}
                    <div className="lg:sticky lg:top-32 lg:col-span-1">
                        <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_#000000]">
                            <h3 className="font-lexend font-black text-2xl uppercase mb-6 border-b-4 border-black pb-4 text-black">{dict.projectDetail.specs}</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <span className="block text-xs font-bold uppercase text-[#000000] mb-1 tracking-widest">{dict.projectDetail.year}</span>
                                    <span className="text-2xl font-black uppercase text-black">{project.year || "2024"}</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-[#000000] mb-1 tracking-widest">{dict.projectDetail.role}</span>
                                    <span className="text-2xl font-black uppercase text-black">{project.role || "Lead Developer"}</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-[#000000] mb-1 tracking-widest">{dict.projectDetail.client}</span>
                                    <span className="text-2xl font-black uppercase text-black">{project.client || "External Project"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Marquee */}
            <div 
                className="border-b-8 border-black py-4 overflow-hidden whitespace-nowrap flex select-none relative h-20 items-center"
                style={{ backgroundColor: themeColor }}
            >
                <div className="animate-marquee flex gap-8 items-center min-w-full">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center shrink-0">
                            <span className="font-lexend font-black text-2xl uppercase italic">DESIGN WITH PURPOSE</span>
                            <i className="ph-bold ph-star text-4xl"></i>
                            <span className="font-lexend font-black text-2xl uppercase italic">RAW LOGIC ONLY</span>
                            <i className="ph-bold ph-lightning text-4xl"></i>
                        </div>
                    ))}
                </div>
                 <div className="animate-marquee flex gap-8 items-center min-w-full">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center shrink-0">
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
                            {dict.projectDetail.problemHeader}
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <p className="text-lg font-medium leading-relaxed mb-8 text-black">{project.problem}</p>
                            
                            <ul className="space-y-3 mb-8">
                                {problems.map((item, i) => (
                                    <li 
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`cursor-pointer border-2 border-black p-3 font-bold flex gap-3 items-center transition-all ${
                                            activeIndex === i ? 'bg-[#ff69b4] text-white translate-x-2.5 shadow-[-4px_0px_0px_black]' : 'hover:bg-[#ff69b4] hover:text-white'
                                        }`}
                                    >
                                        <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center">0{i+1}</span>
                                        {item.point}
                                    </li>
                                ))}
                            </ul>

                            {/* Dynamic Description Box (Problem) */}
                            <div className="mb-8 border-4 border-black p-5 bg-[#eeeeee] min-h-[100px] flex items-center relative overflow-hidden" ref={parent}>
                                <div key={activeIndex} className="animate-side-in">
                                    <h5 className="text-[10px] font-black uppercase opacity-60 mb-1 tracking-[0.2em]">Context / Observation</h5>
                                    <p className="text-sm font-bold text-black leading-snug italic">
                                        &quot;{problems[activeIndex]?.detail}&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto relative border-4 border-black bg-black overflow-hidden aspect-video">
                                <div className="flex w-full h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    {(problems.length > 0 ? problems.map(p => p.image) : [project.image]).map((img, i) => (
                                        <img key={i} src={img} className="w-full h-full object-cover shrink-0" alt={`Problem ${i+1}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THE SOLUTION CARD */}
                    <div className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] flex flex-col h-full overflow-hidden">
                        <div 
                            className="text-black border-b-4 border-black px-6 py-3 font-black uppercase text-sm tracking-widest"
                            style={{ backgroundColor: themeColor }}
                        >
                            {dict.projectDetail.solutionHeader}
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <p className="text-lg font-medium leading-relaxed mb-8 text-black">{project.solution}</p>
                            
                            <ul className="space-y-3 mb-8">
                                {solutions.map((item, i) => (
                                    <li 
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`cursor-pointer border-2 border-black p-3 font-bold flex gap-3 items-center transition-all ${
                                            activeIndex === i ? 'translate-x-2.5 shadow-[-4px_0px_0px_black]' : ''
                                        }`}
                                        style={{ 
                                            backgroundColor: activeIndex === i ? themeColor : 'transparent',
                                            color: activeIndex === i ? 'black' : 'inherit'
                                        }}
                                    >
                                        <span className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center">0{i+1}</span>
                                        {item.point}
                                    </li>
                                ))}
                            </ul>

                            {/* Dynamic Description Box (Solution) */}
                            <div className="mb-8 border-4 border-black p-5 bg-[#eeeeee] min-h-[100px] flex items-center relative overflow-hidden" ref={parent}>
                                <div key={activeIndex} className="animate-side-in">
                                    <h5 className="text-[10px] font-black uppercase opacity-60 mb-1 tracking-[0.2em]">Strategy / Execution</h5>
                                    <p className="text-sm font-bold text-black leading-snug italic">
                                        &quot;{solutions[activeIndex]?.detail}&quot;
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto relative border-4 border-black bg-black overflow-hidden aspect-video">
                                <div className="flex w-full h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    {(solutions.length > 0 ? solutions.map(s => s.image) : [project.image]).map((img, i) => (
                                        <img key={i} src={img} className="w-full h-full object-cover shrink-0" alt={`Solution ${i+1}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Execution Narrative */}
            <section className="py-32 px-6 bg-white border-t-8 border-black">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-lexend font-black text-4xl md:text-6xl uppercase mb-16 tracking-tighter text-center text-black">{dict.projectDetail.executionHeader}</h2>
                    
                    <div className="space-y-16">
                        {project.blocks?.map((block, idx) => (
                            <div key={idx}>
                                {block.type === 'text' && (
                                    <div className="space-y-6">
                                        {block.heading && (
                                            <>
                                                {block.level === 3 ? (
                                                    <h3 className="font-lexend font-black text-3xl uppercase tracking-tight text-black">{block.heading}</h3>
                                                ) : block.level === 4 ? (
                                                    <h4 className="font-lexend font-black text-xl uppercase tracking-tight text-black">{block.heading}</h4>
                                                ) : (
                                                    <h2 className="font-lexend font-black text-4xl uppercase tracking-tight text-black">{block.heading}</h2>
                                                )}
                                            </>
                                        )}
                                        <div className="font-space font-medium text-lg leading-relaxed text-gray-800" dangerouslySetInnerHTML={{ __html: block.body || '' }}></div>
                                    </div>
                                )}

                                {block.type === 'quote' && (
                                    <div 
                                        className="border-8 border-black p-10 md:p-16 relative overflow-hidden my-12 shadow-[12px_12px_0px_#000000]"
                                        style={{ backgroundColor: themeColor }}
                                    >
                                        <span className="absolute top-2 left-4 font-lexend font-black text-7xl opacity-20 text-black select-none">“</span>
                                        <p className="font-lexend font-black text-3xl md:text-4xl italic leading-tight relative z-10 text-black">
                                            &ldquo;{block.text}&rdquo;
                                        </p>
                                    </div>
                                )}

                                {block.type === 'list' && (
                                    <div className="my-8 space-y-4">
                                        {block.heading && <h3 className="font-lexend font-black text-2xl uppercase mb-4 text-black">{block.heading}</h3>}
                                        {block.ordered ? (
                                            <ol className="space-y-4">
                                                {block.items?.map((item, i) => (
                                                    <li key={i} className="flex gap-4 items-start">
                                                        <span className="flex-shrink-0 w-8 h-8 bg-black text-white flex items-center justify-center font-black text-sm border-2 border-black">
                                                            {i + 1}
                                                        </span>
                                                        <p className="font-space font-medium text-lg text-gray-800 pt-0.5">{item}</p>
                                                    </li>
                                                ))}
                                            </ol>
                                        ) : (
                                            <ul className="space-y-4">
                                                {block.items?.map((item, i) => (
                                                    <li key={i} className="flex gap-4 items-start">
                                                        <div 
                                                            className="flex-shrink-0 w-3 h-3 border-2 border-black mt-2"
                                                            style={{ backgroundColor: themeColor }}
                                                        ></div>
                                                        <p className="font-space font-medium text-lg text-gray-800">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {block.type === 'table' && (
                                    <div className="my-12 overflow-x-auto border-4 border-black shadow-[8px_8px_0px_#000000]">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-black text-white">
                                                    {block.headers?.map((header, i) => (
                                                        <th key={i} className="p-4 font-lexend font-black uppercase text-sm border-2 border-black">{header}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {block.rows?.map((row, i) => (
                                                    <tr key={i} className="bg-white hover:bg-gray-50">
                                                        {row.map((cell, j) => (
                                                            <td key={j} className="p-4 font-space font-medium text-sm border-2 border-black text-black">{cell}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}

                                {block.type === 'code' && (
                                    <div className="relative my-12 group">
                                        <div 
                                            className="absolute inset-0 translate-x-3 translate-y-3"
                                            style={{ backgroundColor: themeColor }}
                                        ></div>
                                        <div className="relative bg-black border-4 border-black overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                                            {/* Terminal Style Header */}
                                            <div className="bg-white border-b-4 border-black p-3 flex justify-between items-center">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff69b4]"></div>
                                                    <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffd700]"></div>
                                                    <div className="w-3 h-3 rounded-full border-2 border-black bg-[#adff2f]"></div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-lexend font-black text-[10px] uppercase text-gray-400 mr-2">{block.language || 'code'}</span>
                                                    <button 
                                                        className={`font-lexend font-black text-[10px] uppercase px-3 py-1 border-2 border-black transition-all active:translate-y-0.5 flex items-center gap-2 ${
                                                            copiedIndex === idx ? 'bg-[#adff2f] text-black' : 'bg-[#ffd700] hover:bg-black hover:text-white'
                                                        }`}
                                                        onClick={() => handleCopy(block.code || '', idx)}
                                                    >
                                                        {copiedIndex === idx ? (
                                                            <>
                                                                 <i className="ph-bold ph-check"></i>
                                                                COPIED!
                                                            </>
                                                        ) : (
                                                            'Copy'
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-6 md:p-8 overflow-x-auto text-sm md:text-base font-mono text-white leading-relaxed">
                                                <pre suppressHydrationWarning><code className={`language-${block.language || 'javascript'}`} suppressHydrationWarning dangerouslySetInnerHTML={{ 
                                                    __html: Prism.highlight(block.code || '', Prism.languages[block.language || 'javascript'] || Prism.languages.javascript, block.language || 'javascript') 
                                                }} /></pre>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Technical Architecture - WITH THEME SHADOW */}
            <section className="py-32 px-6 bg-[#eeeeee]">
                <div className="max-w-7xl mx-auto">
                    <div className="relative group">
                        {/* Shadow Layer - Now Dynamic Theme Color */}
                        <div 
                            className="absolute inset-0 translate-x-4 translate-y-4"
                            style={{ backgroundColor: themeColor }}
                        ></div>
                        <div className="relative bg-black text-white p-12 lg:p-20 border-4 border-black">
                            <h2 
                                className="font-lexend font-black text-4xl md:text-5xl uppercase mb-16 tracking-tighter"
                                style={{ color: themeColor }}
                            >{dict.projectDetail.architectureHeader}</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                {/* FRONTEND */}
                                <div className="flex flex-col gap-6 p-8 hover:bg-white/5 transition-all group cursor-default">
                                    <i 
                                        className="ph-bold ph-squares-four text-4xl transition-transform group-hover:scale-110 group-hover:rotate-6"
                                        style={{ color: themeColor }}
                                    ></i>
                                    <div>
                                        <h4 
                                            className="font-lexend font-black text-2xl uppercase mb-4 tracking-tight transition-colors"
                                            style={{ color: 'white' }}
                                        >FRONTEND</h4>
                                        <p className="text-[#eeeeee] text-sm leading-relaxed">{project.technical?.frontend}</p>
                                    </div>
                                </div>

                                {/* REAL-TIME (With Left Divider) */}
                                <div className="flex flex-col gap-6 p-8 hover:bg-white/5 transition-all group cursor-default md:border-l-2 md:border-dashed md:border-white/20">
                                    <i 
                                        className="ph-bold ph-database text-4xl transition-transform group-hover:scale-110 group-hover:rotate-6"
                                        style={{ color: themeColor }}
                                    ></i>
                                    <div>
                                        <h4 
                                            className="font-lexend font-black text-2xl uppercase mb-4 tracking-tight transition-colors"
                                            style={{ color: 'white' }}
                                        >REAL-TIME</h4>
                                        <p className="text-[#eeeeee] text-sm leading-relaxed">{project.technical?.realtime}</p>
                                    </div>
                                </div>

                                {/* SECURITY (With Left Divider) */}
                                <div className="flex flex-col gap-6 p-8 hover:bg-white/5 transition-all group cursor-default md:border-l-2 md:border-dashed md:border-white/20">
                                    <i 
                                        className="ph-bold ph-shield-check text-4xl transition-transform group-hover:scale-110 group-hover:rotate-6"
                                        style={{ color: themeColor }}
                                    ></i>
                                    <div>
                                        <h4 
                                            className="font-lexend font-black text-2xl uppercase mb-4 tracking-tight transition-colors"
                                            style={{ color: 'white' }}
                                        >SECURITY</h4>
                                        <p className="text-[#eeeeee] text-sm leading-relaxed">{project.technical?.security}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home CTA */}
            <section className="py-20 px-6 bg-white border-t-8 border-black text-center">
                <Button href={`/${locale}/projects`} variant="tertiary" size="lg">
                    {dict.common.backToHome}
                </Button>
            </section>

        </div>
    );
}
