import React from 'react';
import type { Metadata } from 'next';
import bioData from '@/data/bio.json';

export const metadata: Metadata = {
  title: "Link Bio | KANGJESSY DEV",
};

const BioPage = () => {
    // Color mapping for variants
    const getVariantClass = (variant: string) => {
        switch (variant) {
            case 'primary': return 'bg-[#ffd700]';
            case 'secondary': return 'bg-[#adff2f]';
            case 'tertiary': return 'bg-white';
            case 'black': return 'bg-black text-white';
            default: return 'bg-white';
        }
    };

    const getIconClass = (variant: string) => {
        return variant === 'black' ? 'text-[#ffd700]' : 'text-black';
    };

    return (
        <div className="min-h-screen bg-[#eeeeee] flex items-center justify-center p-6 py-20">
            <main className="max-w-[500px] w-full flex flex-col items-center">
                
                {/* Profile Section */}
                <div className="mb-10 lg:ml-[-12px]">
                    <div className="w-32 h-32 border-4 border-black bg-[#ffd700] relative shadow-[6px_6px_0px_#000000] pl-[2px] overflow-visible">
                        <img 
                            src={bioData.profile.avatar} 
                            alt={bioData.profile.name} 
                            className="w-full h-full object-cover grayscale-[1] contrast-[1.25] block border-l border-t border-black/10"
                        />
                        <div className="absolute -bottom-[22px] -right-[12px] p-1.5 bg-[#ffd700] border-4 border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center z-20">
                            <i className={`${bioData.profile.status.icon} text-2xl`}></i>
                        </div>
                    </div>
                </div>

                {/* Identity Section */}
                <div className="text-center mb-12 w-full">
                    <h1 className="font-lexend font-black text-5xl md:text-6xl uppercase mb-3 tracking-tighter leading-none text-black">
                        {bioData.profile.name.split(' ')[0]}<span className="text-black">_</span>{bioData.profile.name.split(' ').slice(1).join('_')}
                    </h1>
                    <div className="inline-block bg-black mt-4 px-6 py-2 border-2 border-black mb-10">
                        <p className="font-lexend font-black text-xl md:text-2xl text-[#ffd700] uppercase tracking-tight">
                            {bioData.profile.profession}
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {bioData.skills.map(tag => (
                            <span key={tag} className="border-2 border-black px-4 py-1 font-lexend font-bold bg-white text-[10px] tracking-widest text-[#000000]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links Grid */}
                <div className="w-full space-y-4">
                    {bioData.links.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.href} 
                            target={link.href.startsWith('http') ? "_blank" : "_self"}
                            rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                            className={`flex items-center w-full px-6 py-4 border-4 border-black no-underline text-black font-lexend font-medium uppercase tracking-[0.05em] relative transition-all shadow-[6px_6px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_#000000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none group ${getVariantClass(link.variant)}`}
                        >
                            <i className={`${link.icon} text-2xl mr-4 ${getIconClass(link.variant)}`}></i>
                            <span className="flex-grow font-black">
                                {link.title}
                            </span>
                            <i className="ph-bold ph-arrow-right text-2xl ml-auto transition-transform duration-200 group-hover:translate-x-1"></i>
                        </a>
                    ))}
                </div>

                {/* Social Icons Row */}
                <div className="flex gap-6 mt-16">
                    {bioData.socials.map((social, idx) => (
                        <a 
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-16 h-16 border-4 border-black flex items-center justify-center transition-all shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95 ${getVariantClass(social.variant)}`}
                        >
                            <i className={`${social.icon} text-3xl ${getIconClass(social.variant)}`}></i>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default BioPage;
