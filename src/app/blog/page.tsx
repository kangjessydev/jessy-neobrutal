'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { getPosts, Post } from '@/data/blog';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

export default function BlogPage() {
    const allPosts = getPosts();
    const [featuredPost, setFeaturedPost] = useState<Post>(allPosts[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [activeFilter, setActiveFilter] = useState('ALL POSTS');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState('LATEST');

    const filters = ["ALL POSTS", "UX DESIGN", "DEVELOPMENT", "CRAFT"];

    const handlePostSwitch = (post: Post) => {
        if (post.slug === featuredPost.slug) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setFeaturedPost(post);
            setIsTransitioning(false);
        }, 150);
    };

    return (
        <div className="flex-grow">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6">
                <div className="container mx-auto text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
                        <div className="max-w-3xl">
                            <h1 className="font-lexend font-black text-6xl md:text-8xl leading-none tracking-tighter uppercase mb-6 text-black">
                                CODE <span className="bg-[#ADFF2F] border-4 border-black inline-block px-4 py-0 -rotate-2 mx-1 shadow-[4px_4px_0px_#000000]">WORDS</span> & IDEAS.
                            </h1>
                            <p className="font-space font-medium text-xl md:text-2xl max-w-2xl text-gray-700 leading-relaxed">
                                Deep dives into modern web architecture, brutalist UI patterns, and the chaotic beauty of shipping production code. No fluff, just hard logic.
                            </p>
                        </div>
                        
                        {/* Stay Sharp Card */}
                        <div className="w-full lg:w-96 border-8 border-black p-10 bg-white shadow-[8px_8px_0px_#000000]">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined font-black text-3xl">mail</span>
                                <h3 className="font-lexend font-black text-3xl uppercase leading-none text-black">STAY SHARP</h3>
                            </div>
                            <p className="font-space font-medium text-sm text-[#5d5f5f] mb-8 leading-relaxed">
                                Get bi-weekly updates on new tutorials and design resources.
                            </p>
                            <div className="flex flex-col gap-4">
                                <input 
                                    type="email" 
                                    placeholder="YOUR_EMAIL@DEV.COM" 
                                    className="bg-white border-4 border-black p-4 h-14 font-medium text-base text-black focus:outline-none focus:shadow-[4px_4px_0px_#000000] transition-all placeholder:text-gray-400"
                                />
                                <Button variant="secondary" size="lg" fullWidth>
                                    <span className="font-lexend font-black uppercase tracking-wider">SUBSCRIBE NOW</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Caution Divider */}
            <div className="h-12 w-full bg-black border-y-8 border-black my-10 overflow-hidden relative">
                <div className="absolute inset-0 caution-tape animate-caution-scroll w-[200%] h-full"></div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12">
                
                {/* Pinned Post Multi-Gallery Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="md:col-span-3">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            
                            {/* Column 1: Main Article Stage */}
                            <div className={`bg-white border-8 border-black p-0 shadow-[12px_12px_0px_#000000] flex-grow md:w-[78%] overflow-hidden transition-all duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                                <div className="flex flex-col lg:flex-row h-full">
                                    {/* Image Side */}
                                    <div className="lg:w-1/2 relative overflow-hidden h-80 lg:h-auto lg:min-h-[500px] border-b-8 lg:border-b-0 lg:border-r-8 border-black bg-gray-100">
                                        <div className="absolute top-4 left-4 z-20">
                                            <Tag variant="primary" shadow>📌 PINNED</Tag>
                                        </div>
                                        <img src={featuredPost.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Featured" />
                                    </div>
                                    
                                    {/* Content Side */}
                                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-6">
                                            {featuredPost.tags.map(tag => (
                                                <Tag key={tag} variant="secondary">
                                                    {tag}
                                                </Tag>
                                            ))}
                                        </div>
                                        <h2 className="font-lexend font-black text-3xl md:text-5xl uppercase leading-[0.9] tracking-tighter mb-6 text-black">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="font-space font-medium text-lg text-gray-700 leading-relaxed mb-8">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="mt-auto pt-8 border-t-4 border-black flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <span className="font-black text-sm text-black">{featuredPost.date}</span>
                                                <span className="font-black text-xs text-gray-400">{featuredPost.readTime}</span>
                                            </div>
                                            <Link href={`/blog/${featuredPost.slug}`}>
                                                <Button variant="secondary" size="md">
                                                    <span className="font-black italic uppercase">Open Story</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Article Switcher Gallery */}
                            <div className="md:w-[22%] w-full">
                                <div className="flex flex-col gap-4">
                                    <span className="font-lexend font-black text-xs uppercase italic border-b-4 border-black pb-2 mb-2 text-black">Editor&apos;s Pinned List</span>
                                    <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-visible pb-4 md:pb-0">
                                        {allPosts.map((post) => (
                                            <button 
                                                key={post.slug}
                                                onClick={() => handlePostSwitch(post)}
                                                className={`group flex flex-col w-32 md:w-full flex-shrink-0 border-4 border-black bg-white transition-all text-left ${
                                                    featuredPost.slug === post.slug 
                                                    ? 'shadow-none translate-x-1 translate-y-1 bg-[#ADFF2F]/10' 
                                                    : 'shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#ADFF2F]'
                                                }`}
                                            >
                                                <div className="h-20 md:h-24 w-full overflow-hidden border-b-4 border-black">
                                                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                                                </div>
                                                <div className="p-3">
                                                    <h4 className="font-lexend font-black text-[10px] leading-tight uppercase line-clamp-2 text-black">{post.title}</h4>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="flex flex-wrap items-center justify-between gap-8 mb-12 border-b-8 border-black pb-10">
                    <div className="flex flex-wrap gap-4">
                        {filters.map(filter => (
                            <button 
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2.5 border-4 border-black font-lexend font-black uppercase text-xs transition-all cursor-pointer ${
                                    activeFilter === filter 
                                    ? 'bg-[#ADFF2F] translate-x-1 translate-y-1 shadow-none' 
                                    : 'bg-white shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000]'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Custom Sort Dropdown */}
                    <div className="flex items-center gap-4 relative">
                        <span className="font-lexend font-black uppercase text-xs text-gray-500 italic">Sort by:</span>
                        <div className="relative w-44">
                            <button 
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="w-full bg-white border-4 border-black h-11 px-4 pr-11 font-black text-xs uppercase flex items-center cursor-pointer relative"
                            >
                                {sortBy}
                                <div className="absolute right-0 top-0 bottom-0 w-10 border-l-4 border-black flex items-center justify-center">
                                    <span className={`material-symbols-outlined transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}>expand_more</span>
                                </div>
                            </button>
                            
                            {isSortOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000000] z-50 mt-2">
                                    {['LATEST', 'OLDEST', 'MOST READ'].map(opt => (
                                        <div 
                                            key={opt}
                                            onClick={() => { setSortBy(opt); setIsSortOpen(false); }}
                                            className={`p-3 font-black text-[11px] border-b-2 border-black uppercase cursor-pointer hover:bg-[#ADFF2F] last:border-b-0 ${sortBy === opt ? 'bg-[#ADFF2F]' : ''}`}
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Regular Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {allPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] hover:shadow-[10px_10px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group flex flex-col h-full overflow-hidden">
                            <div className="h-64 overflow-hidden border-b-4 border-black bg-gray-100">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col items-start text-black">
                                <Tag variant={post.tags[0] === 'UX DESIGN' ? 'primary' : 'secondary'} className="mb-6">
                                    {post.tags[0]}
                                </Tag>
                                <h3 className="font-lexend font-black text-2xl uppercase mb-4 leading-tight group-hover:underline decoration-4 underline-offset-4">{post.title}</h3>
                                <p className="font-space font-medium text-sm text-gray-700 leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                            </div>
                            <div className="mt-auto px-8 py-5 border-t-4 border-black bg-white flex justify-between items-center font-lexend font-black text-[11px] uppercase text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-6 mb-24">
                    <Button variant="tertiary" size="md">
                        Previous
                    </Button>
                    <div className="flex gap-3">
                        <span className="w-12 h-12 flex items-center justify-center border-4 border-black bg-[#ADFF2F] font-black text-black shadow-[4px_4px_0px_#000000]">1</span>
                        <span className="w-12 h-12 flex items-center justify-center border-4 border-black bg-white font-black text-black hover:bg-gray-100 cursor-pointer shadow-[4px_4px_0px_#000000]">2</span>
                    </div>
                    <Button variant="tertiary" size="md">
                        Next
                    </Button>
                </div>

            </div>
            
        </div>
    );
}
