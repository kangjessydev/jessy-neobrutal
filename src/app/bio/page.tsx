import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Link Bio | KANGJESSY DEV",
};

const BioPage = () => {
    const links = [
        {
            title: "My Portfolio",
            href: "/",
            icon: "rocket_launch",
            actionIcon: "arrow_forward",
            variant: "bg-[#FFD700]",
        },
        {
            title: "Latest Blog Post",
            href: "/blog",
            icon: "article",
            actionIcon: "open_in_new",
            variant: "bg-white",
        },
        {
            title: "GitHub Repos",
            href: "https://github.com/kangjessy",
            icon: "code",
            actionIcon: "link",
            variant: "bg-black text-white",
            iconClass: "text-[#FFD700]"
        },
        {
            title: "LinkedIn Profile",
            href: "https://linkedin.com/in/kangjessy",
            icon: "account_circle",
            actionIcon: "arrow_forward",
            variant: "bg-white",
        },
    ];

    const socials = [
        { icon: "alternate_email", href: "mailto:hello@jessy.dev", variant: "bg-[#FFD700]" },
        { icon: "rss_feed", href: "/rss", variant: "bg-white" },
        { icon: "share", href: "#", variant: "bg-white" },
    ];

    const tags = ["REACT", "TYPESCRIPT", "TAILWIND", "NODE.JS"];

    return (
        <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center p-6">
            <main className="max-w-[500px] w-full flex flex-col items-center">
                
                {/* Profile Section */}
                <div className="mb-10 lg:ml-[-12px]">
                    <div className="w-32 h-32 border-4 border-black bg-[#FFD700] relative shadow-[6px_6px_0px_#000000] pl-[2px] overflow-visible">
                        <img 
                            src="/avatar.jpg" 
                            alt="DEV_PORTFOLIO Portrait" 
                            className="w-full h-full object-cover grayscale-[1] contrast-[1.25] block border-l border-t border-black/10"
                        />
                        <div className="absolute -bottom-[22px] -right-[12px] p-1.5 bg-[#FFD700] border-4 border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center z-20">
                            <span className="material-symbols-outlined text-2xl font-black">terminal</span>
                        </div>
                    </div>
                </div>

                {/* Identity Section */}
                <div className="text-center mb-12 w-full">
                    <h1 className="font-lexend font-black text-5xl md:text-6xl uppercase mb-3 tracking-tighter leading-none text-black">
                        DEV<span className="text-black">_</span>PORTFOLIO
                    </h1>
                    <div className="inline-block bg-black mt-4 px-6 py-2 border-2 border-black mb-10">
                        <p className="font-lexend font-black text-xl md:text-2xl text-[#FFD700] uppercase tracking-tight">
                            Web Developer & UI Rebel
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {tags.map(tag => (
                            <span key={tag} className="border-2 border-black px-4 py-1 font-lexend font-bold bg-white text-[10px] tracking-widest text-[#5d5f5f]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links Grid */}
                <div className="w-full space-y-4">
                    {links.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.href} 
                            className={`flex items-center w-full px-6 py-4 border-4 border-black no-underline text-black font-lexend font-medium uppercase tracking-[0.05em] relative transition-all shadow-[6px_6px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none group ${link.variant}`}
                        >
                            <span className={`material-symbols-outlined text-2xl mr-4 ${link.iconClass || ''}`}>
                                {link.icon}
                            </span>
                            <span className="flex-grow">
                                {link.title}
                            </span>
                            <span className="material-symbols-outlined text-2xl ml-auto transition-transform duration-200 group-hover:translate-x-1">
                                {link.actionIcon}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Social Icons Row */}
                <div className="flex gap-6 mt-16">
                    {socials.map((social, idx) => (
                        <a 
                            key={idx}
                            href={social.href}
                            className={`w-16 h-16 border-4 border-black flex items-center justify-center transition-all shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95 ${social.variant}`}
                        >
                            <span className="material-symbols-outlined text-3xl font-bold">{social.icon}</span>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default BioPage;
