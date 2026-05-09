'use client';
import React, { useState } from 'react';
import { getPostBySlug } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const post = getPostBySlug(slug);

    // State for copy feedback
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (code: string, idx: number) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    if (!post) {
        notFound();
    }
    
    // Since original astro uses hardcoded demo content for the slug detail:
    const demoContent = [
        {
            type: 'text',
            heading: 'The Core Philosophy',
            body: "Neobrutalism isn't just about bold colors; it's a structural rebellion. It celebrates the \"honest\" materials of the digital world—pure CSS borders, non-blurry shadows, and unadulterated primary colors. Unlike the glassmorphism or neumorphism of years past, neobrutalism doesn't try to mimic physical glass or plastic. It mimics the grid."
        },
        {
            type: 'quote',
            text: "Good design is not just what looks good, it's what feels structurally sound and unapologetically clear."
        },
        {
            type: 'text',
            heading: 'Implementing The Shadow',
            body: "The defining characteristic of this style is the hard-offset shadow. Avoid 'box-shadow: 0 4px 6px rgba(0,0,0,0.1)'. Instead, use a solid, 100% opaque offset."
        },
        {
            type: 'code',
            language: 'css',
            code: `.brutalist-card {
  background: white;
  border: 4px solid black;
  box-shadow: 8px 8px 0px #000000;
  transition: all 0.2s ease;
}

.brutalist-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px #000000;
}`
        },
        {
            type: 'text',
            heading: 'Color and Contrast',
            body: "In a Neobrutalist system, hierarchy is achieved through intensity rather than size alone. A high-contrast tag will grab more attention than a large, muted headline. We use colors like #adff2f and #ffd700 to guide the user's eye across the page."
        }
    ];

    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Article Header */}
            <article className="max-w-4xl mx-auto px-6 pt-20">
                <div className="flex gap-3 mb-8">
                    <Tag variant="secondary" shadow>{post.tags[0]}</Tag>
                    <Tag variant="white" shadow>{post.readTime}</Tag>
                </div>

                <h1 className="font-lexend font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-8 text-black">
                    {post.title}
                </h1>

                <p className="font-space font-medium text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
                    {post.excerpt}
                </p>

                <div className="border-b-8 border-black mb-12"></div>

                {/* Featured Image */}
                <div className="relative mb-20 group">
                    <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all"></div>
                    <div className="relative border-8 border-black aspect-video overflow-hidden">
                        <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
                    </div>
                </div>

                {/* Article Content */}
                <div className="space-y-16">
                    {demoContent.map((block, idx) => (
                        <div key={idx}>
                            {block.type === 'text' && (
                                <div className="space-y-6">
                                    <h2 className="font-lexend font-black text-4xl uppercase tracking-tight text-black">{block.heading}</h2>
                                    <p className="font-space font-medium text-lg leading-relaxed text-gray-800">{block.body}</p>
                                </div>
                            )}

                            {block.type === 'quote' && (
                                <div className="bg-[#ffd700] border-8 border-black p-10 md:p-16 relative overflow-hidden my-12 shadow-[12px_12px_0px_#000000]">
                                    <span className="absolute top-2 left-4 font-lexend font-black text-7xl opacity-20 text-black select-none">“</span>
                                    <p className="font-lexend font-black text-3xl md:text-4xl italic leading-tight relative z-10 text-black">
                                        &ldquo;{block.text}&rdquo;
                                    </p>
                                </div>
                            )}

                            {block.type === 'code' && (
                                <div className="relative my-12 group">
                                    <div className="absolute inset-0 bg-[#ffd700] translate-x-3 translate-y-3"></div>
                                    <div className="relative bg-black border-4 border-black overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                                        {/* Terminal Style Header */}
                                        <div className="bg-white border-b-4 border-black p-3 flex justify-between items-center">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff69b4]"></div>
                                                <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ffd700]"></div>
                                                <div className="w-3 h-3 rounded-full border-2 border-black bg-[#adff2f]"></div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-lexend font-black text-[10px] uppercase text-gray-400 mr-2">{block.language}</span>
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
                                            <pre suppressHydrationWarning><code className="language-css" suppressHydrationWarning dangerouslySetInnerHTML={{ 
                                                __html: Prism.highlight(block.code || '', Prism.languages.css, 'css') 
                                            }} /></pre>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000] flex flex-col gap-4 hover:-translate-y-1 transition-all group">
                            <div className="bg-[#ffd700] border-4 border-black w-14 h-14 flex items-center justify-center shadow-[4px_4px_0px_#000000] group-hover:bg-[#adff2f] transition-colors">
                                <i className="ph-bold ph-bolt text-3xl text-black"></i>
                            </div>
                            <h4 className="font-lexend font-black uppercase text-xl text-black">High Impact</h4>
                            <p className="font-space font-medium text-sm text-gray-600 leading-relaxed">Vibrant colors and thick lines create an immediate sense of urgency and technical clarity.</p>
                        </div>
                        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000] flex flex-col gap-4 hover:-translate-y-1 transition-all group">
                            <div className="bg-[#adff2f] border-4 border-black w-14 h-14 flex items-center justify-center shadow-[4px_4px_0px_#000000] group-hover:bg-[#ffd700] transition-colors">
                                <i className="ph-bold ph-code text-3xl text-black"></i>
                            </div>
                            <h4 className="font-lexend font-black uppercase text-xl text-black">Zero Gradients</h4>
                            <p className="font-space font-medium text-sm text-gray-600 leading-relaxed">We reject the &apos;faking&apos; of depth. Depth is a graphic choice, not a physical simulation.</p>
                        </div>
                    </div>
                </div>
                
                {/* Hazard Tape Divider */}
                <div className="h-12 w-full bg-black border-y-8 border-black my-24 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffd700,#ffd700_25px,#000000_25px,#000000_50px)] w-[200%] animate-caution-scroll h-full"></div>
                </div>

                {/* Next Article Section */}
                <div className="mb-20">
                    <span className="font-lexend font-black text-sm uppercase tracking-widest text-gray-400 mb-4 block">Next Article</span>
                    <Link href={`/blog/mastering-neobrutalism`} className="group flex justify-between items-center bg-white border-8 border-black p-8 md:p-12 shadow-[12px_12px_0px_#000000] hover:translate-y-1 hover:shadow-none transition-all">
                        <h3 className="font-lexend font-black text-3xl md:text-5xl uppercase tracking-tighter group-hover:italic text-black">Mastering the Subgrid: A Guide.</h3>
                        <div className="bg-black text-white w-14 h-14 hidden md:flex items-center justify-center border-4 border-black group-hover:bg-[#adff2f] group-hover:text-black transition-colors">
                            <i className="ph-bold ph-arrow-right text-3xl"></i>
                        </div>
                    </Link>
                </div>
            </article>

        </main>
    );
}
