'use client';
import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-20 px-6 text-black">
            <article className="max-w-4xl mx-auto">
                <div className="inline-block bg-[#ffd700] border-4 border-black px-4 py-1 mb-8 shadow-[4px_4px_0px_#000000] font-lexend font-black uppercase text-xs tracking-widest text-black">
                    LEGAL DOCUMENT v1.0
                </div>
                
                <h1 className="font-lexend font-black text-6xl md:text-8xl uppercase tracking-tighter mb-12 text-black leading-[0.9]">
                    TERMS & <br/> CONDITIONS
                </h1>

                <div className="prose-neo space-y-12 text-black">
                    <section className="border-4 border-black p-8 bg-[#eeeeee] shadow-[8px_8px_0px_#000000]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4">01. THE CONTRACT</h2>
                        <p className="font-space font-medium leading-relaxed">
                            By accessing KANGJESSY DEV, you agree to abide by these rules — brutal but fair. If you do not agree with our aesthetic or pure functionality philosophy, please close this tab.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-lexend font-black text-3xl uppercase tracking-tight">02. INTELLECTUAL PROPERTY</h2>
                        <p className="font-space font-medium leading-relaxed text-gray-700">
                            All code, designs, and pixels on this website are the result of raw logic and engineering effort by KANGJESSY. Cloning or stealing visual assets without written permission is strictly prohibited.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-lexend font-black text-3xl uppercase tracking-tight">03. SERVICE AVAILABILITY</h2>
                        <p className="font-space font-medium leading-relaxed text-gray-700">
                            I strive for 99.9% uptime, but given the unpredictable nature of the digital world, I am not liable for any losses should this site be temporarily offline for updates or maintenance.
                        </p>
                    </section>

                    <section className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_#adff2f]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4 text-[#adff2f]">04. LIMITATION OF LIABILITY</h2>
                        <p className="font-space font-medium leading-relaxed opacity-90">
                            Logic is absolute. KANGJESSY DEV is not responsible for any design misinterpretation or business failure after viewing this portfolio. I provide technical solutions and inspiration, not a magic wand.
                        </p>
                    </section>

                    <div className="pt-12 border-t-8 border-black flex justify-between items-center">
                        <p className="font-lexend font-bold uppercase text-xs text-gray-400">Last Updated: May 2024</p>
                        <Link href="/" className="font-lexend font-black uppercase text-sm border-b-4 border-black hover:bg-[#ffd700] transition-all text-black no-underline">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
