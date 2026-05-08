'use client';
import React from 'react';
import Link from 'next/link';
import { experience, skills } from '@/data/resume';
import Button from '@/components/ui/Button';

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-[#eeeeee] min-h-screen print:bg-white pb-32">
            {/* Control Bar (Hidden on Print) */}
            <div className="sticky top-0 left-0 w-full bg-black text-white p-4 z-50 flex justify-center gap-4 border-b-4 border-black print:hidden">
                <Button 
                    onClick={handlePrint}
                    variant="secondary"
                    size="sm"
                >
                    Save as PDF (Designer View)
                </Button>
                <Button 
                    variant="tertiary" 
                    size="sm" 
                    className="opacity-50 cursor-not-allowed"
                    onClick={() => {}}
                >
                    Standard Version (GDrive)
                </Button>
                <Button 
                    href="/about" 
                    variant="primary" 
                    size="sm"
                >
                    Back to About
                </Button>
            </div>

            <main className="py-16 md:py-32 px-4 md:px-8 flex justify-center print:p-0">
                {/* A4 Paper Container */}
                <div className="bg-white border-[8px] border-black w-full max-w-[850px] shadow-[20px_20px_0px_#000000] p-10 md:p-16 relative overflow-hidden print:shadow-none print:border-none print:max-w-none print:w-full print:p-8">
                    
                    {/* Top Section */}
                    <header className="border-b-8 border-black pb-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-8">
                        <div>
                            <h1 className="font-lexend font-black text-5xl md:text-7xl p-0 m-0 uppercase leading-[0.85] tracking-tighter mb-6 text-black">
                                JESSY MUTAJ<br/>HIFJUDIN
                            </h1>
                            <p className="font-lexend font-black text-base md:text-xl uppercase italic bg-[#ffd700] border-4 border-black px-4 py-1 inline-block -rotate-1 text-black">
                                AI-Driven Engineer & Business Solutions Specialist
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 font-lexend font-bold text-xs md:text-sm uppercase tracking-tight text-right md:items-end text-black">
                            <span className="flex items-center gap-2">hi.kangjessy@gmail.com <span className="material-symbols-outlined text-[14px] font-black">alternate_email</span></span>
                            <span className="flex items-center gap-2">Bandung, Indonesia <span className="material-symbols-outlined text-[14px] font-black">location_on</span></span>
                            <span className="flex items-center gap-2">github.com/kangjessydev <span className="material-symbols-outlined text-[14px] font-black">terminal</span></span>
                        </div>
                    </header>

                    {/* Main Layout */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        {/* Sidebar */}
                        <div className="w-full md:w-[280px] space-y-10 print:w-[65mm]">
                            <section>
                                <h3 className="font-lexend font-black text-xl uppercase mb-4 border-b-4 border-black pb-2 text-black">Profile</h3>
                                <p className="font-bold text-xs leading-relaxed text-[#444]">
                                    An AI-driven engineer focused on strategic business solutions through high-performance code and intelligent architecture. Pushing boundaries in tech.
                                </p>
                            </section>

                            <section>
                                <h3 className="font-lexend font-black text-xl uppercase mb-4 border-b-4 border-black pb-2 text-black">Arsenal</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <span key={skill} className="border-2 border-black px-2 py-0.5 text-[9px] font-black uppercase bg-white shadow-[2px_2px_0px_#000000] text-black">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="font-lexend font-black text-xl uppercase mb-4 border-b-4 border-black pb-2 text-black">Languages</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center bg-black text-white p-2 border-2 border-black">
                                        <span className="font-bold text-[10px] uppercase">Indonesian</span>
                                        <span className="font-black italic text-[10px] text-[#A5F624]">Native</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white text-black p-2 border-2 border-black">
                                        <span className="font-bold text-[10px] uppercase">English</span>
                                        <span className="font-black italic text-[10px]">Fluent</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Main Content */}
                        <div className="flex-grow space-y-12">
                            <section>
                                <h3 className="font-lexend font-black text-2xl uppercase mb-8 flex items-center gap-3 text-black">
                                    <span className="material-symbols-outlined font-black text-3xl">work</span> 
                                    Experience
                                </h3>
                                <div className="space-y-10">
                                    {experience.map((job, idx) => (
                                        <div key={idx} className="relative pl-8 border-l-4 border-black">
                                            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-black"></div>
                                            <span className="text-[10px] font-black uppercase text-[#888] mb-1 block tracking-widest">{job.period}</span>
                                            <h4 className="font-lexend font-black text-xl uppercase m-0 leading-tight mb-1 text-black">{job.role}</h4>
                                            <p className="font-lexend font-black text-xs uppercase text-[#FF6B00] mb-3 tracking-wider">{job.company}</p>
                                            <p className="font-bold text-xs leading-relaxed text-[#444]">{job.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="font-lexend font-black text-2xl uppercase mb-6 flex items-center gap-3 text-black">
                                    <span className="material-symbols-outlined font-black text-3xl">school</span> 
                                    Education
                                </h3>
                                <div className="relative pl-8 border-l-4 border-black">
                                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#A5F624] border-4 border-black"></div>
                                    <span className="text-[10px] font-black uppercase text-[#888] mb-1 block tracking-widest">2018 - 2023</span>
                                    <h4 className="font-lexend font-black text-xl uppercase m-0 leading-tight text-black">S.Kom</h4>
                                    <p className="font-bold text-xs uppercase tracking-wider text-black">Universitas Kebangsaan Republik Indonesia</p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Footer Decoration */}
                    <div className="mt-16 border-t-8 border-black pt-2">
                        <div className="w-full h-3 bg-[#ffd700]"></div>
                    </div>
                </div>
            </main>

        </div>
    );
}
