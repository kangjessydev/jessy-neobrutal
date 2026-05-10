'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { getPosts, Post } from '@/data/blog';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

export default function BlogPage() {
    const allPosts = getPosts();
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<'category' | 'tag' | 'all'>('all');
    const [filterValue, setFilterValue] = useState('ALL');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isTagOpen, setIsTagOpen] = useState(false);
    const [sortBy, setSortBy] = useState('LATEST');
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Featured Post State
    const featuredPosts = allPosts.filter(p => p.featured);
    const [featuredPost, setFeaturedPost] = useState<Post>(featuredPosts[0] || allPosts[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Dynamic Filter Options
    const categories = ['ALL', ...Array.from(new Set(allPosts.map(p => p.category.toUpperCase())))];
    const tags = ['ALL', ...Array.from(new Set(allPosts.flatMap(p => p.tags.map(t => t.toUpperCase()))))].sort();

    // Search, Filter, and Sort Logic
    const sortedAndFilteredPosts = [...allPosts]
        .filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            
            let matchesFilter = true;
            if (filterValue !== 'ALL') {
                if (filterType === 'category') matchesFilter = post.category.toUpperCase() === filterValue;
                if (filterType === 'tag') matchesFilter = post.tags.some(t => t.toUpperCase() === filterValue);
            }

            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            if (sortBy === 'LATEST') return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (sortBy === 'OLDEST') return new Date(a.date).getTime() - new Date(b.date).getTime();
            if (sortBy === 'MOST READ') return (b.readTime.includes('min') ? parseInt(b.readTime) : 0) - (a.readTime.includes('min') ? parseInt(a.readTime) : 0);
            return 0;
        });

    // Pagination State & Logic
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(sortedAndFilteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = sortedAndFilteredPosts.slice(startIndex, startIndex + postsPerPage);

    const handleFilterChange = (type: 'category' | 'tag' | 'all', value: string) => {
        setFilterType(type);
        setFilterValue(value);
        setIsCategoryOpen(false);
        setIsTagOpen(false);
        setCurrentPage(1);
    };

    const handleSearchChange = (val: string) => {
        setSearchQuery(val);
        setCurrentPage(1);
    };

    const handlePostSwitch = (post: Post) => {
        if (post.slug === featuredPost.slug) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setFeaturedPost(post);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="flex-grow">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
                        <div className="max-w-3xl">
                            <h1 className="font-lexend font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase mb-6 text-black">
                                CODE <span className="bg-[#adff2f] border-4 border-black inline-block px-4 py-0 -rotate-2 mx-1 shadow-[4px_4px_0px_#000000]">WORDS</span> & IDEAS.
                            </h1>
                            <p className="font-space font-medium text-lg md:text-2xl max-w-2xl text-gray-700 leading-relaxed">
                                Deep dives into modern web architecture, brutalist UI patterns, and the chaotic beauty of shipping production code.
                            </p>
                        </div>
                        
                        {/* Newsletter Card */}
                        <div className="bg-[#adff2f] border-8 border-black p-6 md:p-8 shadow-[8px_8px_0px_#000000] md:shadow-[12px_12px_0px_#000000] w-full lg:w-96 -rotate-1 md:-rotate-2">
                            <h3 className="font-lexend font-black text-xl md:text-2xl uppercase mb-3 md:mb-4">Join the Crew</h3>
                            <p className="font-space font-medium text-xs md:text-sm mb-5 md:mb-6 uppercase italic">Get the latest code chaos in your inbox.</p>
                            <div className="flex flex-col gap-4">
                                <input type="email" placeholder="YOUR EMAIL..." className="bg-white border-4 border-black p-3 font-black text-xs uppercase focus:outline-none w-full" />
                                <Button variant="secondary" size="md" className="w-full">
                                    <span className="font-black italic">SUBSCRIBE</span>
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
                            <div className={`bg-white border-8 border-black p-0 shadow-[8px_8px_0px_#000000] md:shadow-[12px_12px_0px_#000000] flex-grow w-full md:w-[78%] overflow-hidden transition-all duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                                <div className="flex flex-col lg:flex-row h-full">
                                    {/* Image Side */}
                                    <div className="lg:w-1/2 relative overflow-hidden h-64 md:h-80 lg:h-auto lg:min-h-[500px] border-b-8 lg:border-b-0 lg:border-r-8 border-black bg-gray-100">
                                        <div className="absolute top-4 left-4 z-20">
                                            <Tag variant="primary" shadow>📌 PINNED</Tag>
                                        </div>
                                        <img src={featuredPost.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Featured" />
                                    </div>
                                    
                                    {/* Content Side */}
                                    <div className="lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                                        <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                                            <Tag variant="primary">{featuredPost.category}</Tag>
                                            <div className="flex gap-2">
                                                {featuredPost.tags.slice(0, 2).map(tag => (
                                                    <Tag key={tag} variant="secondary">
                                                        {tag}
                                                    </Tag>
                                                ))}
                                            </div>
                                        </div>
                                        <h2 className="font-lexend font-black text-2xl md:text-5xl uppercase leading-[0.9] tracking-tighter mb-4 md:mb-6 text-black">
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
                                        {featuredPosts.map((post) => (
                                            <button 
                                                key={post.slug}
                                                onClick={() => handlePostSwitch(post)}
                                                className={`group flex flex-col w-32 md:w-full flex-shrink-0 border-4 border-black bg-white transition-all text-left ${
                                                    featuredPost.slug === post.slug 
                                                    ? 'shadow-none translate-x-1 translate-y-1 bg-[#adff2f]/10' 
                                                    : 'shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#adff2f]'
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

                {/* Discovery Section: Search & Filters Stacking */}
                <div className="flex flex-col gap-10 border-b-8 border-black pb-12 mb-16 items-start">
                    {/* Row 1: Search Field (Full Width) */}
                    <div className="w-full">
                        <div className="flex items-center gap-4 border-4 border-black bg-white p-4 shadow-[8px_8px_0px_#000000] focus-within:shadow-none focus-within:translate-x-1 focus-within:translate-y-1 transition-all">
                            <i className="ph-bold ph-magnifying-glass text-3xl ml-1"></i>
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="SEARCH ARTICLES..."
                                className="w-full bg-transparent font-lexend font-black text-lg md:text-xl uppercase focus:outline-none placeholder:text-gray-300"
                            />
                        </div>
                    </div>
                    
                    {/* Row 2: Filter Group (Horizontal Stacking on Mobile) */}
                    <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-6 w-full">
                        
                        {/* Category Dropdown */}
                        <div className="relative w-full md:w-56">
                            <button 
                                onClick={() => { setIsCategoryOpen(!isCategoryOpen); setIsTagOpen(false); setIsSortOpen(false); }}
                                className={`w-full bg-white border-4 border-black h-12 px-4 pr-12 font-black text-xs uppercase flex items-center justify-between cursor-pointer relative shadow-[4px_4px_0px_#000000] transition-all ${isCategoryOpen ? 'translate-x-1 translate-y-1 shadow-none' : ''}`}
                            >
                                <span className="truncate">{filterType === 'category' ? filterValue : 'CATEGORY'}</span>
                                <div className="absolute right-0 top-0 bottom-0 w-10 border-l-4 border-black flex items-center justify-center bg-[#adff2f]">
                                    <i className={`ph-bold ph-caret-down transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
                                </div>
                            </button>
                            {isCategoryOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000000] z-50 mt-2 max-h-60 overflow-y-auto">
                                    {categories.map(c => (
                                        <div key={c} onClick={() => handleFilterChange('category', c)} className={`p-3 font-black text-[11px] border-b-2 border-black uppercase cursor-pointer hover:bg-[#adff2f] last:border-b-0 ${filterValue === c && filterType === 'category' ? 'bg-[#adff2f]' : ''}`}>
                                            {c}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Tags Dropdown */}
                        <div className="relative w-full md:w-56">
                            <button 
                                onClick={() => { setIsTagOpen(!isTagOpen); setIsCategoryOpen(false); setIsSortOpen(false); }}
                                className={`w-full bg-white border-4 border-black h-12 px-4 pr-12 font-black text-xs uppercase flex items-center justify-between cursor-pointer relative shadow-[4px_4px_0px_#000000] transition-all ${isTagOpen ? 'translate-x-1 translate-y-1 shadow-none' : ''}`}
                            >
                                <span className="truncate">{filterType === 'tag' ? filterValue : 'TAG'}</span>
                                <div className="absolute right-0 top-0 bottom-0 w-10 border-l-4 border-black flex items-center justify-center bg-[#ff69b4]">
                                    <i className={`ph-bold ph-caret-down transition-transform duration-200 ${isTagOpen ? 'rotate-180' : ''}`}></i>
                                </div>
                            </button>
                            {isTagOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000000] z-50 mt-2 max-h-60 overflow-y-auto">
                                    {tags.map(t => (
                                        <div key={t} onClick={() => handleFilterChange('tag', t)} className={`p-3 font-black text-[11px] border-b-2 border-black uppercase cursor-pointer hover:bg-[#ff69b4] last:border-b-0 ${filterValue === t && filterType === 'tag' ? 'bg-[#ff69b4]' : ''}`}>
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative w-full md:w-56">
                            <button 
                                onClick={() => { setIsSortOpen(!isSortOpen); setIsCategoryOpen(false); setIsTagOpen(false); }}
                                className={`w-full bg-white border-4 border-black h-12 px-4 pr-12 font-black text-xs uppercase flex items-center justify-between cursor-pointer relative shadow-[4px_4px_0px_#000000] transition-all ${isSortOpen ? 'translate-x-1 translate-y-1 shadow-none' : ''}`}
                            >
                                <span className="truncate">{sortBy}</span>
                                <div className="absolute right-0 top-0 bottom-0 w-10 border-l-4 border-black flex items-center justify-center bg-gray-200">
                                    <i className={`ph-bold ph-caret-down transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}></i>
                                </div>
                            </button>
                            {isSortOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000000] z-50 mt-2">
                                    {['LATEST', 'OLDEST', 'MOST READ'].map(opt => (
                                        <div key={opt} onClick={() => { setSortBy(opt); setIsSortOpen(false); }} className={`p-3 font-black text-[11px] border-b-2 border-black uppercase cursor-pointer hover:bg-[#adff2f] last:border-b-0 ${sortBy === opt ? 'bg-[#adff2f]' : ''}`}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Reset Filter Button */}
                        {(filterValue !== 'ALL' || searchQuery !== '') && (
                            <Button 
                                onClick={() => { setFilterValue('ALL'); setSearchQuery(''); setFilterType('all'); }}
                                variant="black"
                                className="w-full md:w-auto h-12"
                                customBg="#000000"
                            >
                                <span className="group-hover:text-[#ff69b4]">RESET</span>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Regular Posts Grid */}
                {paginatedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                        {paginatedPosts.map((post) => (
                            <Link 
                                key={post.slug} 
                                href={`/blog/${post.slug}`} 
                                className="border-4 border-black bg-white shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all group flex flex-col h-full overflow-hidden relative"
                            >
                                {post.featured && (
                                    <div className="absolute top-4 right-4 z-20 bg-black text-[#adff2f] border-4 border-black px-3 py-1 font-black text-[10px] uppercase rotate-3 shadow-[4px_4px_0px_#adff2f]">
                                        📌 PINNED
                                    </div>
                                )}
                                
                                <div className="h-64 overflow-hidden border-b-4 border-black bg-gray-100">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                
                                <div className="p-8 flex-grow flex flex-col items-start text-black">
                                    <div className="flex gap-2 mb-6">
                                        <Tag variant="primary">{post.category}</Tag>
                                    </div>
                                    <h3 className="font-lexend font-black text-2xl uppercase mb-4 leading-tight group-hover:underline decoration-4 underline-offset-4">{post.title}</h3>
                                    <p className="font-space font-medium text-sm text-gray-700 leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {post.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] font-black uppercase border-2 border-black px-2 py-0.5 bg-[#eeeeee]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="px-8 py-5 border-t-4 border-black bg-white flex justify-between items-center font-lexend font-black text-[11px] uppercase text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <i className="ph-bold ph-calendar"></i>
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="ph-bold ph-clock"></i>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 border-8 border-black bg-white shadow-[12px_12px_0px_#000000] mb-20">
                        <i className="ph-bold ph-magnifying-glass text-8xl mb-8 block"></i>
                        <h3 className="text-4xl font-black uppercase mb-4">No articles found</h3>
                        <p className="text-xl mb-8">Try adjusting your search or filters.</p>
                        <Button onClick={() => { setFilterValue('ALL'); setSearchQuery(''); }} variant="primary">
                            RESET ALL
                        </Button>
                    </div>
                )}

                {/* Dynamic Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-6 mb-24">
                        <Button 
                            variant="tertiary" 
                            size="md" 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <div className="flex gap-3">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <Button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    variant={currentPage === i + 1 ? 'secondary' : 'tertiary'}
                                    className="w-12 h-12 px-0 py-0 flex items-center justify-center text-lg"
                                >
                                    {i + 1}
                                </Button>
                            ))}
                        </div>
                        <Button 
                            variant="tertiary" 
                            size="md" 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                )}

            </div>
            
        </div>
    );
}
