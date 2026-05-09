'use client';
import React, { useState } from 'react';
import { Post } from '@/data/blog';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';

interface BlogPostClientProps {
    post: Post;
    nextPost: Post | null;
    dict: any;
    locale: string;
}

export default function BlogPostClient({ post, nextPost, dict, locale }: BlogPostClientProps) {
    // State for copy feedback
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (code: string, idx: number) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Article Header */}
            <article className="max-w-4xl mx-auto px-6 pt-20">
                <div className="flex flex-wrap gap-3 mb-8">
                    <Tag variant="secondary" shadow>{post.date}</Tag>
                    {post.tags.map(tag => (
                        <Tag key={tag} variant="white" shadow>{tag}</Tag>
                    ))}
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
                    {post.blocks?.map((block, idx) => (
                        <div key={idx}>
                            {block.type === 'text' && (
                                <div className="space-y-6 text-black">
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
                                    <p className="font-space font-medium text-lg leading-relaxed text-gray-800" dangerouslySetInnerHTML={{ __html: block.body || '' }}></p>
                                </div>
                            )}

                            {block.type === 'quote' && (
                                <div className="bg-[#FFD700] border-8 border-black p-10 md:p-16 relative overflow-hidden my-12 shadow-[12px_12px_0px_#000000]">
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
                                                    <div className="flex-shrink-0 w-3 h-3 bg-[#ADFF2F] border-2 border-black mt-2"></div>
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

                            {block.type === 'image' && (
                                <div className="my-16 group">
                                    <div className="relative border-4 border-black overflow-hidden shadow-[8px_8px_0px_#000000]">
                                        <img src={block.src} className="w-full h-auto" alt={block.caption || 'Article image'} />
                                        {block.caption && (
                                            <div className="bg-black text-white p-3 font-lexend font-black text-xs uppercase tracking-widest text-center border-t-4 border-black">
                                                {block.caption}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {block.type === 'code' && (
                                <div className="relative my-12 group">
                                    <div className="absolute inset-0 bg-[#FFD700] translate-x-3 translate-y-3"></div>
                                    <div className="relative bg-black border-4 border-black overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                                        {/* Terminal Style Header */}
                                        <div className="bg-white border-b-4 border-black p-3 flex justify-between items-center">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full border-2 border-black bg-[#FF5F56]"></div>
                                                <div className="w-3 h-3 rounded-full border-2 border-black bg-[#FFBD2E]"></div>
                                                <div className="w-3 h-3 rounded-full border-2 border-black bg-[#27C93F]"></div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-lexend font-black text-[10px] uppercase text-gray-400 mr-2">{block.language || 'code'}</span>
                                                <button 
                                                    className={`font-lexend font-black text-[10px] uppercase px-3 py-1 border-2 border-black transition-all active:translate-y-0.5 flex items-center gap-2 ${
                                                        copiedIndex === idx ? 'bg-[#ADFF2F] text-black' : 'bg-[#FFD700] hover:bg-black hover:text-white text-black'
                                                    }`}
                                                    onClick={() => handleCopy(block.code || '', idx)}
                                                >
                                                    {copiedIndex === idx ? (
                                                        <>
                                                            <i className="ph-bold ph-check"></i>
                                                            {dict.about.blog.postDetail.copiedLabel}
                                                        </>
                                                    ) : (
                                                        dict.about.blog.postDetail.copyLabel
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

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000] flex flex-col gap-4 hover:-translate-y-1 transition-all group">
                            <div className="bg-[#FFD700] border-4 border-black w-14 h-14 flex items-center justify-center shadow-[4px_4px_0px_#000000] group-hover:bg-[#ADFF2F] transition-colors">
                                <i className="ph-bold ph-bolt text-3xl text-black"></i>
                            </div>
                            <h4 className="font-lexend font-black uppercase text-xl text-black">{dict.about.blog.postDetail.feature1Title}</h4>
                            <p className="font-space font-medium text-sm text-gray-600 leading-relaxed">{dict.about.blog.postDetail.feature1Desc}</p>
                        </div>
                        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000] flex flex-col gap-4 hover:-translate-y-1 transition-all group">
                            <div className="bg-[#ADFF2F] border-4 border-black w-14 h-14 flex items-center justify-center shadow-[4px_4px_0px_#000000] group-hover:bg-[#FFD700] transition-colors">
                                <i className="ph-bold ph-code text-3xl text-black"></i>
                            </div>
                            <h4 className="font-lexend font-black uppercase text-xl text-black">{dict.about.blog.postDetail.feature2Title}</h4>
                            <p className="font-space font-medium text-sm text-gray-600 leading-relaxed">{dict.about.blog.postDetail.feature2Desc}</p>
                        </div>
                    </div>
                </div>
                
                {/* Hazard Tape Divider */}
                <div className="h-12 w-full bg-black border-y-8 border-black my-24 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#ffd700,#ffd700_25px,#000000_25px,#000000_50px)] w-[200%] animate-caution-scroll h-full"></div>
                </div>

                {/* Next Article Section */}
                {nextPost && (
                    <div className="mb-20">
                        <span className="font-lexend font-black text-sm uppercase tracking-widest text-gray-400 mb-4 block">{dict.about.blog.postDetail.nextArticle}</span>
                        <Link href={`/${locale}/blog/${nextPost.slug}`} className="group flex justify-between items-center bg-white border-8 border-black p-8 md:p-12 shadow-[12px_12px_0px_#000000] hover:translate-y-1 hover:shadow-none transition-all no-underline">
                            <h3 className="font-lexend font-black text-3xl md:text-5xl uppercase tracking-tighter group-hover:italic text-black">
                                {nextPost.title}
                            </h3>
                            <div className="bg-black text-white w-14 h-14 hidden md:flex items-center justify-center border-4 border-black group-hover:bg-[#ADFF2F] group-hover:text-black transition-colors">
                                <i className="ph-bold ph-arrow-right text-3xl"></i>
                            </div>
                        </Link>
                    </div>
                )}
            </article>

        </main>
    );
}
