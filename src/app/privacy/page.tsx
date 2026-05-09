'use client';
import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="bg-[#eeeeee] min-h-screen pt-32 pb-20 px-6">
            <article className="max-w-4xl mx-auto">
                <div className="inline-block bg-[#adff2f] border-4 border-black px-4 py-1 mb-8 shadow-[4px_4px_0px_#000000] font-lexend font-black uppercase text-xs tracking-widest text-black">
                    PRIVACY PROTOCOL v1.0
                </div>
                
                <h1 className="font-lexend font-black text-6xl md:text-8xl uppercase tracking-tighter mb-12 text-black leading-[0.9]">
                    PRIVACY<br/>POLICY
                </h1>

                <div className="prose-neo space-y-12 text-black">
                    <section className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000000]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4">01. DATA COLLECTION</h2>
                        <p className="font-space font-medium leading-relaxed">
                            I am not data-hungry. I only collect basic information such as your email address if you fill out the contact form, or anonymous usage data via cookies to understand which parts of this site are most effective.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#ffd700]">
                            <h3 className="font-lexend font-black text-xl uppercase mb-3">Cookies</h3>
                            <p className="text-sm font-medium leading-relaxed opacity-80">
                                I use standard cookie technology to improve page performance and user experience. No sensitive personal data is stored here.
                            </p>
                        </section>
                        <section className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#ff69b4]">
                            <h3 className="font-lexend font-black text-xl uppercase mb-3">Contact Form</h3>
                            <p className="text-sm font-medium leading-relaxed opacity-80">
                                Any information you provide via the contact form is strictly used for professional communication. No spam. No selling of your data.
                            </p>
                        </section>
                    </div>

                    <section className="space-y-6">
                        <h2 className="font-lexend font-black text-3xl uppercase tracking-tight">02. DATA SECURITY</h2>
                        <p className="font-space font-medium leading-relaxed text-gray-700">
                            I employ secure Next.js protocols to maintain site integrity. While no system is perfectly immune, I am committed to ensuring your data is not exposed to unauthorized third parties.
                        </p>
                    </section>

                    <section className="border-l-8 border-black pl-8 py-4 bg-[#eeeeee]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4">03. YOUR RIGHTS</h2>
                        <p className="font-space font-medium leading-relaxed italic">
                            &quot;Privacy is not an option, it is a human right.&quot;
                        </p>
                        <p className="font-space font-medium mt-4 text-gray-700">
                            If you wish to have your data removed from my records, please contact me directly via the &apos;Get in Touch&apos; button. I will process your request immediately.
                        </p>
                    </section>

                    <div className="pt-12 border-t-8 border-black flex justify-between items-center">
                        <p className="font-lexend font-bold uppercase text-xs text-gray-400">Last Updated: May 2024</p>
                        <Link href="/" className="font-lexend font-black uppercase text-sm border-b-4 border-black hover:bg-[#adff2f] transition-all text-black no-underline">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
