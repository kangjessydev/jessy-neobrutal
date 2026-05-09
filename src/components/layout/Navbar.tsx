'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Button from '../ui/Button';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('default');
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollYRef = React.useRef(0);
    const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const [parent] = useAutoAnimate();

    function isActive(href: string) {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    }

    // Smart Navbar Logic
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // Clear any existing timeout
                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }

                if (currentScrollY > lastScrollYRef.current && currentScrollY > 120 && !isMenuOpen) {
                    // Scrolling down - Hide
                    setIsVisible(false);
                } else {
                    // Scrolling up - Show
                    setIsVisible(true);
                }
                
                lastScrollYRef.current = currentScrollY;

                // Set a timeout to show navbar after scrolling stops
                scrollTimeoutRef.current = setTimeout(() => {
                    setIsVisible(true);
                }, 800); // Shorter wait for better response
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, [isMenuOpen]);

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsVisible(true); // Ensure navbar is visible on new page
    }, [pathname]);

    // Handle body scroll locking
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setActiveTab('default');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div ref={parent}>
            <header className={`bg-white border-b-8 border-black flex justify-between items-center w-full px-8 py-6 fixed top-0 left-0 right-0 z-[100] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isVisible ? 'translate-y-0' : '-translate-y-full shadow-none'
            }`}>
                {/* Logo & Network Switcher */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="text-2xl font-black bg-[#FFD700] text-black px-4 py-1 border-4 border-black shadow-[4px_4px_0px_#000000] font-lexend uppercase tracking-tighter hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        KANGJESSY_DEV
                    </Link>
                </div>

                {/* Main Nav (Slimming down) */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher — hidden until multilingual is ready */}
                    <div className="hidden border-4 border-black bg-black p-1 shadow-[4px_4px_0px_#000000] overflow-hidden">
                        <Button variant="secondary" size="sm" className="!px-3 !py-1 !shadow-none hover:translate-x-0 hover:translate-y-0">ID</Button>
                        <Button variant="black" size="sm" className="!px-3 !py-1 !shadow-none hover:bg-[#ADFF2F] hover:text-black hover:translate-x-0 hover:translate-y-0">EN</Button>
                    </div>

                    {/* Menu Toggle Button */}
                    <Button
                        onClick={toggleMenu}
                        variant="primary"
                        size="md"
                        className="gap-2"
                    >
                        <span>MENU</span>
                        <i className={`ph-bold ${isMenuOpen ? 'ph-x' : 'ph-list'} text-xl`}></i>
                    </Button>
                </div>
            </header>

            {/* Full Screen Overlay Menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-white z-[200] flex flex-col border-[12px] border-black"
                >
                    <div 
                        className={`flex justify-between items-center p-8 border-b-8 border-black transition-colors duration-500 ${
                            activeTab === 'projects' ? 'bg-[#FFD700]' : 
                            activeTab === 'network' ? 'bg-[#ADFF2F]' : 
                            activeTab === 'other' ? 'bg-[#E0B0FF]' : 
                            'bg-[#ADFF2F]'
                        }`}
                    >
                        <div className="flex items-center gap-4" ref={parent}>
                            {activeTab !== 'default' && (
                                <button 
                                    onClick={() => setActiveTab('default')}
                                    className="md:hidden w-12 h-12 flex items-center justify-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_#ffffff] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                                >
                                    <i className="ph-bold ph-arrow-left text-xl"></i>
                                </button>
                            )}
                            <span 
                                key={activeTab}
                                className="font-lexend font-black uppercase text-2xl tracking-tighter"
                            >
                                {activeTab === 'projects' ? 'PORTFOLIO' : 
                                 activeTab === 'network' ? 'EXPLORE' : 
                                 activeTab === 'other' ? 'LINKS' : 
                                 'NAVIGATION'}
                            </span>
                        </div>
                        <Button
                            onClick={() => setIsMenuOpen(false)}
                            variant="black"
                            size="md"
                            className="!w-12 !h-12 !p-0"
                        >
                            <i className="ph-bold ph-x text-2xl"></i>
                        </Button>
                    </div>

                    <div className="flex-grow flex flex-col md:flex-row md:divide-x-8 divide-black overflow-y-auto relative overflow-x-hidden" ref={parent}>
                        {/* Main Links (Left Side) */}
                        <div className={`flex-grow p-12 py-12 flex flex-col justify-start gap-6 overflow-y-auto no-scrollbar transition-all duration-300 md:translate-x-0 ${
                            activeTab !== 'default' ? '-translate-x-full absolute opacity-0 pointer-events-none md:relative md:opacity-100 md:pointer-events-auto' : 'translate-x-0'
                        }`}>
                            {[
                                { label: 'Home', href: '/', target: 'default' },
                                { label: 'About', href: '/about', target: 'default' },
                                { label: 'Projects', href: '/projects', target: 'projects', hasSub: true },
                                { label: 'Blog', href: '/blog', target: 'default' },
                            ].map((link, i) => (
                                <button
                                    key={link.href}
                                    onClick={() => {
                                        // On mobile, if it has sub content, open the drill-down
                                        if (window.innerWidth < 768 && link.hasSub) {
                                            setActiveTab(link.target);
                                        } else {
                                            // Otherwise navigate
                                            setIsMenuOpen(false);
                                            router.push(link.href);
                                        }
                                    }}
                                    onMouseEnter={() => {
                                        // Restore hover behavior for desktop only
                                        if (window.innerWidth >= 768) {
                                            setActiveTab(link.target);
                                        }
                                    }}
                                    className={`text-left font-lexend font-black text-4xl md:text-7xl uppercase tracking-tighter text-black hover:italic hover:translate-x-4 transition-all inline-block w-fit group flex items-center gap-4 ${
                                        isActive(link.href) ? 'italic underline underline-offset-8 decoration-8 decoration-[#ADFF2F] translate-x-4' : ''
                                    }`}
                                    style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
                                >
                                    <span>{link.label}</span>
                                </button>
                            ))}
                            
                            <button
                                onMouseEnter={() => {
                                    if (window.innerWidth >= 768) setActiveTab('network');
                                }}
                                onClick={() => setActiveTab('network')}
                                className="text-left font-lexend font-black text-4xl md:text-7xl uppercase tracking-tighter text-black hover:italic group flex items-center gap-4 hover:translate-x-4 transition-all"
                                style={{ transitionDelay: '0.3s' }}
                            >
                                <span>Network</span>
                            </button>
                            <button
                                onMouseEnter={() => {
                                    if (window.innerWidth >= 768) setActiveTab('other');
                                }}
                                onClick={() => setActiveTab('other')}
                                className="text-left font-lexend font-black text-4xl md:text-7xl uppercase tracking-tighter text-black hover:italic group flex items-center gap-4 hover:translate-x-4 transition-all"
                                style={{ transitionDelay: '0.35s' }}
                            >
                                <span>Other</span>
                            </button>
                        </div>

                        {/* Dynamic Sidebar Panel */}
                        <div 
                            className={`w-full md:w-[450px] bg-[#f0f0f0] transition-all duration-300 border-l-0 md:border-l-8 border-black overflow-hidden relative flex-shrink-0 ${
                                activeTab !== 'default' ? 'translate-x-0 opacity-100 flex h-full' : 'translate-x-full absolute opacity-0 pointer-events-none md:relative md:opacity-100 md:pointer-events-auto md:translate-x-0 hidden md:flex'
                            }`}
                        >
                            {/* Default Content */}
                            {activeTab === 'default' && (
                                <div className="side-content animate-side-in flex flex-col justify-between h-full p-12 w-full transition-all duration-400">
                                    <div>
                                        <h4 className="font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white inline-block">CONNECT</h4>
                                        <div className="flex flex-col gap-6">
                                            <a href="#" className="text-3xl font-black uppercase hover:text-[#ADFF2F] transition-colors flex items-center gap-4 group">
                                                LinkedIn <i className="ph-bold ph-arrow-up-right opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"></i>
                                            </a>
                                            <a href="#" className="text-3xl font-black uppercase hover:text-[#ADFF2F] transition-colors flex items-center gap-4 group">
                                                Github <i className="ph-bold ph-arrow-up-right opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"></i>
                                            </a>
                                            <a href="#" className="text-3xl font-black uppercase hover:text-[#FFD700] transition-colors flex items-center gap-4 group">
                                                Twitter <i className="ph-bold ph-arrow-up-right opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-20 text-center">
                                        <Button 
                                            href="/contact" 
                                            variant="primary" 
                                            size="lg" 
                                            fullWidth
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Get In Touch
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Network Submenu */}
                            {activeTab === 'network' && (
                                <div className="side-content animate-side-in flex flex-col h-full bg-[#ADFF2F] p-12 w-full">
                                    <h4 className="hidden md:inline-block font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white">EXPLORE NETWORK</h4>
                                    <div className="flex flex-col gap-8">
                                        <a 
                                            href="https://mejadaring.id" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="block group"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-xs font-bold text-black/60 block mb-1">Education Portal</span>
                                            <span className="text-4xl font-lexend font-black uppercase hover:translate-x-2 transition-transform block">MEJADARING.ID</span>
                                        </a>
                                        <a 
                                            href="https://skincluv.id" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="block group"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="text-xs font-bold text-black/60 block mb-1">Skincare Analytics</span>
                                            <span className="text-4xl font-lexend font-black uppercase hover:translate-x-2 transition-transform block">SKINCLUV.ID</span>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Projects Submenu */}
                            {activeTab === 'projects' && (
                                <div className="side-content animate-side-in flex flex-col h-full bg-[#FFD700] p-12 w-full">
                                    <h4 className="hidden md:inline-block font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white">PORTFOLIO</h4>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/projects" className="text-3xl font-black uppercase hover:translate-x-2 transition-transform block" onClick={() => setIsMenuOpen(false)}>Web Development</Link>
                                        <Link href="/projects" className="text-3xl font-black uppercase hover:translate-x-2 transition-transform block" onClick={() => setIsMenuOpen(false)}>Mobile apps</Link>
                                        <Link href="/projects" className="text-3xl font-black uppercase hover:translate-x-2 transition-transform block" onClick={() => setIsMenuOpen(false)}>UI/UX Design</Link>
                                    </div>
                                </div>
                            )}

                            {/* Other Submenu */}
                            {activeTab === 'other' && (
                                <div className="side-content animate-side-in flex flex-col h-full bg-[#E0B0FF] p-12 w-full">
                                    <h4 className="hidden md:inline-block font-black uppercase text-sm tracking-widest mb-12 py-1 px-4 bg-black text-white">LINKS & MORE</h4>
                                    <div className="flex flex-col gap-8">
                                        <Link href="/bio" className="block group" onClick={() => setIsMenuOpen(false)}>
                                            <span className="text-xs font-bold text-black/60 block mb-1">Quick Access</span>
                                            <span className="text-4xl font-lexend font-black uppercase hover:translate-x-2 transition-transform block italic">BIO LINK</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
