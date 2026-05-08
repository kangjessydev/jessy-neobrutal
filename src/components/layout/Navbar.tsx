'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('default');
    const [isNetworkOpen, setIsNetworkOpen] = useState(false);

    function isActive(href: string) {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    }

    // Handle body scroll locking
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    // Close network dropdown on click outside
    useEffect(() => {
        const handleClickOutside = () => setIsNetworkOpen(false);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setActiveTab('default');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-white border-b-8 border-black flex justify-between items-center w-full px-8 py-6 sticky top-0 z-[100]">
                {/* Logo & Network Switcher */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="text-2xl font-black bg-[#FFD700] text-black px-4 py-1 border-4 border-black shadow-[4px_4px_0px_#000000] font-lexend uppercase tracking-tighter hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        KANGJESSY_DEV
                    </Link>

                    {/* Network Dropdown Trigger */}
                    <div className="relative">
                        <Button
                            onClick={(e) => {
                                e?.stopPropagation();
                                setIsNetworkOpen(!isNetworkOpen);
                            }}
                            variant="black"
                            size="sm"
                            className="!w-8 !h-8 !px-0 !py-0"
                            title="Our Network"
                        >
                            <span className={`transition-transform duration-200 text-xl font-black ${isNetworkOpen ? 'rotate-180' : ''}`}>▾</span>
                        </Button>

                        {/* Network Dropdown Content */}
                        <div
                            className={`absolute top-[calc(100%+12px)] left-0 bg-white border-4 border-black shadow-[8px_8px_0px_#000000] min-w-[220px] z-50 origin-top-left transition-all ${
                                isNetworkOpen ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest border-b-4 border-black">
                                Connected Networks
                            </div>
                            <a
                                href="https://mejadaring.id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-6 py-4 font-lexend font-black uppercase text-xs tracking-tighter text-black hover:bg-[#ADFF2F] border-b-4 border-black transition-colors"
                            >
                                mejadaring.id <span className="material-symbols-outlined text-xs align-middle">open_in_new</span>
                            </a>
                            <a
                                href="https://skincluv.id"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-6 py-4 font-lexend font-black uppercase text-xs tracking-tighter text-black hover:bg-[#ADFF2F] transition-colors"
                            >
                                skincluv.id <span className="material-symbols-outlined text-xs align-middle">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Nav (Slimming down) */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="hidden sm:flex border-4 border-black bg-black p-1 shadow-[4px_4px_0px_#000000] overflow-hidden">
                        <Button variant="secondary" size="sm" className="!px-3 !py-1 !shadow-none hover:translate-x-0 hover:translate-y-0">ID</Button>
                        <Button variant="black" size="sm" className="!px-3 !py-1 !shadow-none hover:bg-[#ADFF2F] hover:text-black hover:translate-x-0 hover:translate-y-0">EN</Button>
                    </div>

                    {/* Menu Toggle Button */}
                    <Button
                        onClick={toggleMenu}
                        variant="primary"
                        size="md"
                    >
                        MENU <span className="text-xl">☰</span>
                    </Button>
                </div>
            </header>

            {/* Full Screen Overlay Menu */}
            <div
                className={`fixed inset-0 bg-white z-[200] flex-col border-[12px] border-black transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] ${
                    isMenuOpen ? 'flex translate-x-0' : 'hidden translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-8 border-b-8 border-black bg-[#ADFF2F]">
                    <span className="font-lexend font-black uppercase text-2xl tracking-tighter">NAVIGATION</span>
                    <Button
                        onClick={() => setIsMenuOpen(false)}
                        variant="black"
                        size="md"
                        className="!w-12 !h-12 !p-0"
                    >
                        ✕
                    </Button>
                </div>

                <div className="flex-grow flex flex-col md:flex-row divide-y-8 md:divide-y-0 md:divide-x-8 divide-black overflow-y-auto">
                    {/* Main Links (Left Side) */}
                    <div className={`flex-grow p-12 py-12 flex flex-col justify-start gap-6 overflow-y-auto no-scrollbar transition-all duration-400 ${
                        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        {[
                            { label: 'Home', href: '/', target: 'default' },
                            { label: 'About', href: '/about', target: 'default' },
                            { label: 'Projects', href: '/projects', target: 'projects' },
                            { label: 'Blog', href: '/blog', target: 'default' },
                        ].map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                onMouseEnter={() => setActiveTab(link.target)}
                                className={`font-lexend font-black text-4xl md:text-7xl uppercase tracking-tighter text-black hover:italic hover:translate-x-4 transition-all inline-block ${
                                    isActive(link.href) ? 'italic underline underline-offset-8 decoration-8 decoration-[#ADFF2F] translate-x-4' : ''
                                }`}
                                style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        <button
                            onMouseEnter={() => setActiveTab('network')}
                            onClick={() => setActiveTab('network')}
                            className="text-left font-lexend font-black text-4xl md:text-7xl uppercase tracking-tighter text-black hover:italic hover:translate-x-4 transition-all inline-block focus:outline-none"
                            style={{ transitionDelay: '0.3s' }}
                        >
                            Network
                        </button>
                        <button
                            onMouseEnter={() => setActiveTab('other')}
                            onClick={() => setActiveTab('other')}
                            className="text-left font-lexend font-black text-4xl md:text-7xl uppercase tracking-tighter text-black hover:italic hover:translate-x-4 transition-all inline-block focus:outline-none"
                            style={{ transitionDelay: '0.35s' }}
                        >
                            Other
                        </button>
                    </div>

                    {/* Dynamic Sidebar Panel */}
                    <div className={`w-full md:w-[450px] bg-[#f0f0f0] transition-all duration-300 border-l-0 md:border-l-8 border-black overflow-hidden relative ${
                        activeTab !== 'default' ? 'flex' : 'hidden md:flex'
                    }`}>
                        {/* Default Content */}
                        <div className={`side-content animate-side-in flex flex-col justify-between h-full p-12 w-full transition-all duration-400 ${activeTab === 'default' ? 'flex' : 'hidden'}`}>
                            <div>
                                <h4 className="font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white inline-block">CONNECT</h4>
                                <div className="flex flex-col gap-6">
                                    <a href="#" className="text-3xl font-black uppercase hover:text-[#ADFF2F] transition-colors flex items-center gap-4 group">
                                        LinkedIn <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">arrow_outward</span>
                                    </a>
                                    <a href="#" className="text-3xl font-black uppercase hover:text-[#ADFF2F] transition-colors flex items-center gap-4 group">
                                        Github <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">arrow_outward</span>
                                    </a>
                                    <a href="#" className="text-3xl font-black uppercase hover:text-[#FFD700] transition-colors flex items-center gap-4 group">
                                        Twitter <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">arrow_outward</span>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-20 text-center">
                                <Button href="/contact" variant="primary" size="lg" fullWidth>Get In Touch</Button>
                            </div>
                        </div>

                        {/* Network Submenu */}
                        <div className={`side-content animate-side-in flex-col h-full bg-[#ADFF2F] p-12 w-full ${activeTab === 'network' ? 'flex' : 'hidden'}`}>
                            <button onClick={() => setActiveTab('default')} className="md:hidden mb-8 font-black uppercase text-xs flex items-center gap-2 underline">← Back to Menu</button>
                            <h4 className="font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white inline-block">EXPLORE NETWORK</h4>
                            <div className="flex flex-col gap-8">
                                <a href="https://mejadaring.id" target="_blank" rel="noopener noreferrer" className="block group">
                                    <span className="text-xs font-bold text-black/60 block mb-1">Education Portal</span>
                                    <span className="text-4xl font-lexend font-black uppercase hover:translate-x-2 transition-transform block">MEJADARING.ID</span>
                                </a>
                                <a href="https://skincluv.id" target="_blank" rel="noopener noreferrer" className="block group">
                                    <span className="text-xs font-bold text-black/60 block mb-1">Skincare Analytics</span>
                                    <span className="text-4xl font-lexend font-black uppercase hover:translate-x-2 transition-transform block">SKINCLUV.ID</span>
                                </a>
                            </div>
                        </div>

                        {/* Projects Submenu */}
                        <div className={`side-content animate-side-in flex-col h-full bg-[#FFD700] p-12 w-full ${activeTab === 'projects' ? 'flex' : 'hidden'}`}>
                            <button onClick={() => setActiveTab('default')} className="md:hidden mb-8 font-black uppercase text-xs flex items-center gap-2 underline">← Back to Menu</button>
                            <h4 className="font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white inline-block">PORTFOLIO</h4>
                            <div className="flex flex-col gap-6">
                                <Link href="/projects" className="text-3xl font-black uppercase hover:translate-x-2 transition-transform block">Web Development</Link>
                                <Link href="/projects" className="text-3xl font-black uppercase hover:translate-x-2 transition-transform block">Mobile apps</Link>
                                <Link href="/projects" className="text-3xl font-black uppercase hover:translate-x-2 transition-transform block">UI/UX Design</Link>
                            </div>
                        </div>

                        {/* Other Submenu */}
                        <div className={`side-content animate-side-in flex-col h-full bg-[#E0B0FF] p-12 w-full ${activeTab === 'other' ? 'flex' : 'hidden'}`}>
                            <button onClick={() => setActiveTab('default')} className="md:hidden mb-8 font-black uppercase text-xs flex items-center gap-2 underline">← Back to Menu</button>
                            <h4 className="font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white inline-block">LINKS & MORE</h4>
                            <div className="flex flex-col gap-8">
                                <Link href="/bio" className="block group">
                                    <span className="text-xs font-bold text-black/60 block mb-1">Quick Access</span>
                                    <span className="text-4xl font-lexend font-black uppercase hover:translate-x-2 transition-transform block italic">BIO LINK</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
