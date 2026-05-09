'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { getProjects } from '@/data/projects';
import Button from '@/components/ui/Button';
import { getTagColor } from '@/utils/colors';

export default function ProjectsPage() {
    const allProjects = getProjects();
    const [filterType, setFilterType] = useState<'taxonomy' | 'category' | 'tech'>('taxonomy');
    const [filterValue, setFilterValue] = useState('ALL');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isTechOpen, setIsTechOpen] = useState(false);

    // Extract unique values
    const categories = ['ALL', ...Array.from(new Set(allProjects.map(p => p.category.toUpperCase())))];
    const techStacks = ['ALL', ...Array.from(new Set(allProjects.flatMap(p => p.tech.map(t => t.toUpperCase()))))].sort();
    const taxonomies = ['ALL', 'MASTERPIECE', 'FEATURED', 'ARCHIVE'];

    const filteredProjects = filterValue === 'ALL' 
        ? allProjects 
        : allProjects.filter(p => {
            if (filterType === 'taxonomy') return p.taxonomy?.some(t => t.toUpperCase() === filterValue);
            if (filterType === 'category') return p.category.toUpperCase() === filterValue;
            if (filterType === 'tech') return p.tech.some(t => t.toUpperCase() === filterValue);
            return true;
        });

    const [visibleCount, setVisibleCount] = useState(4);
    const displayedProjects = filteredProjects.slice(0, visibleCount);

    const handleFilterChange = (type: 'taxonomy' | 'category' | 'tech', value: string) => {
        setFilterType(type);
        setFilterValue(value);
        setVisibleCount(4);
        setIsCategoryOpen(false);
        setIsTechOpen(false);
    };

    const isFilterActive = (type: string, value: string) => filterType === type && filterValue === value;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-32 px-6 bg-white border-b-8 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-block bg-[#adff2f] text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#000000] font-bold uppercase text-sm">
                        Case Studies & Archive
                    </div>
                    <h1 className="font-lexend font-black text-7xl md:text-8xl text-black uppercase mb-8 leading-[1.1] tracking-tighter">
                        SELECTED <span className="bg-[#ffd700] px-4">WORKS</span>
                    </h1>
                    <p className="text-xl text-[#000000] max-w-2xl">
                        A collection of high-performance digital experiences built with precision, raw logic, and a refusal to be ordinary.
                    </p>
                </div>
            </section>

            {/* Advanced Filter Bar */}
            <section className="bg-white border-b-4 border-black px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-12">
                    
                    {/* Status Filters (Buttons) */}
                    <div className="flex-grow">
                        <span className="block font-black uppercase text-xs mb-4 tracking-widest text-[#000000]/60">Project Status</span>
                        <div className="flex flex-wrap gap-3">
                            {taxonomies.map(t => (
                                <button 
                                    key={t}
                                    onClick={() => handleFilterChange('taxonomy', t)}
                                    className={`px-4 py-2 border-2 border-black font-lexend font-black uppercase text-[10px] tracking-wider transition-all shadow-[3px_3px_0px_#000000] active:shadow-none active:translate-x-1 active:translate-y-1 ${
                                        isFilterActive('taxonomy', t) ? 'bg-[#ffd700]' : 'bg-white hover:bg-[#eeeeee]'
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative w-full md:w-64">
                        <span className="block font-black uppercase text-xs mb-4 tracking-widest text-[#000000]/60">Category</span>
                        <button 
                            onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsTechOpen(false); }}
                            className={`w-full bg-white border-4 border-black h-12 px-4 pr-12 font-black text-xs uppercase flex items-center justify-between cursor-pointer relative shadow-[4px_4px_0px_#000000] transition-all ${isCategoryOpen ? 'translate-x-1 translate-y-1 shadow-none' : ''}`}
                        >
                            <span className="truncate">{filterType === 'category' ? filterValue : 'SELECT CATEGORY'}</span>
                            <div className="absolute right-0 top-0 bottom-0 w-10 border-l-4 border-black flex items-center justify-center bg-[#adff2f]">
                                <i className={`ph-bold ph-caret-down transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
                            </div>
                        </button>
                        
                        {isCategoryOpen && (
                            <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000000] z-50 mt-2 max-h-60 overflow-y-auto">
                                {categories.map(c => (
                                    <div 
                                        key={c}
                                        onClick={() => handleFilterChange('category', c)}
                                        className={`p-3 font-black text-[11px] border-b-2 border-black uppercase cursor-pointer hover:bg-[#adff2f] last:border-b-0 ${isFilterActive('category', c) ? 'bg-[#adff2f]' : ''}`}
                                    >
                                        {c}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tech Stack Dropdown */}
                    <div className="relative w-full md:w-64">
                        <span className="block font-black uppercase text-xs mb-4 tracking-widest text-[#000000]/60">Technology</span>
                        <button 
                            onClick={() => { setIsTechOpen(!isTechOpen); setIsCategoryOpen(false); }}
                            className={`w-full bg-white border-4 border-black h-12 px-4 pr-12 font-black text-xs uppercase flex items-center justify-between cursor-pointer relative shadow-[4px_4px_0px_#000000] transition-all ${isTechOpen ? 'translate-x-1 translate-y-1 shadow-none' : ''}`}
                        >
                            <span className="truncate">{filterType === 'tech' ? filterValue : 'SELECT STACK'}</span>
                            <div className="absolute right-0 top-0 bottom-0 w-10 border-l-4 border-black flex items-center justify-center bg-[#ff69b4]">
                                <i className={`ph-bold ph-caret-down transition-transform duration-200 ${isTechOpen ? 'rotate-180' : ''}`}></i>
                            </div>
                        </button>
                        
                        {isTechOpen && (
                            <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000000] z-50 mt-2 max-h-60 overflow-y-auto">
                                {techStacks.map(s => (
                                    <div 
                                        key={s}
                                        onClick={() => handleFilterChange('tech', s)}
                                        className={`p-3 font-black text-[11px] border-b-2 border-black uppercase cursor-pointer hover:bg-[#ff69b4] last:border-b-0 ${isFilterActive('tech', s) ? 'bg-[#ff69b4]' : ''}`}
                                    >
                                        {s}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-6 bg-[#eeeeee]">
                <div className="max-w-7xl mx-auto">
                    {filteredProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {displayedProjects.map((project) => (
                                    <div key={project.slug} className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] group overflow-hidden flex flex-col relative">
                                        {project.taxonomy?.includes('masterpiece') && (
                                            <div className="absolute top-16 right-4 z-20 bg-black text-[#ffd700] border-4 border-black px-3 py-1 font-black text-[10px] uppercase rotate-3 shadow-[4px_4px_0px_#ffd700]">
                                                MASTERPIECE
                                            </div>
                                        )}
                                        
                                        <div className="bg-[#eeeeee] border-b-4 border-black px-6 py-3 flex justify-between items-center">
                                            <span className="font-bold uppercase text-sm text-black">{project.category}</span>
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                            </div>
                                        </div>

                                        <div className="h-64 bg-[#eeeeee] overflow-hidden border-b-4 border-black relative">
                                            <img
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                src={project.image}
                                                alt={project.title}
                                            />
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="font-lexend font-black text-3xl uppercase mb-4 text-black">{project.title}</h3>
                                            <p className="text-[#000000] mb-6 flex-grow">{project.description}</p>

                                            <div className="flex flex-wrap gap-3 mb-8">
                                                {project.tech.map((tag) => (
                                                    <span 
                                                        key={tag}
                                                        className="border-2 border-black px-3 py-1 text-xs font-bold uppercase text-black" 
                                                        style={{ backgroundColor: getTagColor(project.tagColor) }}
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

                            {visibleCount < filteredProjects.length && (
                                <div className="mt-20 flex justify-center">
                                    <Button 
                                        onClick={() => setVisibleCount(prev => prev + 4)}
                                        variant="secondary" 
                                        size="lg"
                                        className="group"
                                    >
                                        LOAD MORE PROJECTS
                                        <i className="ph-bold ph-plus ml-3 group-hover:rotate-90 transition-transform"></i>
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 border-8 border-black bg-white shadow-[12px_12px_0px_#000000]">
                            <i className="ph-bold ph-magnifying-glass text-8xl mb-8 block"></i>
                            <h3 className="text-4xl font-black uppercase mb-4">No results found</h3>
                            <p className="text-xl mb-8">Try adjusting your filters to find what you&apos;re looking for.</p>
                            <Button onClick={() => handleFilterChange('taxonomy', 'ALL')} variant="primary">
                                RESET ALL FILTERS
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

