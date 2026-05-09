'use client';
import React, { useState, useEffect } from 'react';
import Button from "@/components/ui/Button";

interface ContactClientProps {
    dict: any;
    locale: string;
}

const ContactClient = ({ dict, locale }: ContactClientProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(dict.about.contact.subjects[0]);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const waNumber = "6281234567890";

    const subjects = dict.about.contact.subjects;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const message = formData.get('message');
        
        const intro = locale === 'id' ? `Halo, saya ${name}.` : `Hello, I am ${name}.`;
        const discussion = locale === 'id' ? `Saya ingin diskusi mengenai ${selectedValue}.` : `I would like to discuss ${selectedValue}.`;
        
        const text = `${intro}%0A%0A${discussion}%0A%0A${message}`;
        window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    };

    // Close dropdown on click outside using Ref
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-32 px-6 bg-white border-b-8 border-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                    
                    {/* Left Info Side */}
                    <div className="flex-1">
                        <h1 className="font-lexend font-black text-6xl md:text-8xl text-black uppercase mb-8 leading-[1.1] tracking-tighter">
                            {dict.about.contact.heroTitle} <span className="bg-[#adff2f] px-4 shadow-[6px_6px_0px_#000000] border-4 border-black inline-block mt-2">{dict.about.contact.heroBadge}</span>
                        </h1>
                        <p className="text-xl font-medium uppercase text-[#000000] mb-16 leading-relaxed">
                            {dict.about.contact.heroDesc}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="border-4 border-black p-2 bg-white shadow-[4px_4px_0px_#000000]">
                                    <i className="ph-bold ph-envelope-simple text-3xl text-black"></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black uppercase text-xs text-[#000000]">{dict.about.contact.emailLabel}</h3>
                                    <a href="mailto:HELLO@DEVPORT.IO" className="font-lexend font-black text-2xl text-black hover:text-[#ffd700] transition-colors">
                                        HELLO@DEVPORT.IO
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="border-4 border-black p-2 bg-white shadow-[4px_4px_0px_#000000]">
                                    <i className="ph-bold ph-map-pin text-3xl text-black"></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black uppercase text-xs text-[#000000]">{dict.about.contact.locationLabel}</h3>
                                    <p className="font-lexend font-black text-2xl text-black uppercase">
                                        {dict.about.contact.locationValue}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-1 bg-black my-12"></div>

                        <div>
                            <h3 className="font-black uppercase text-xl mb-6 text-black">{dict.about.contact.connectTitle}</h3>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://github.com/kangjessy" target="_blank" rel="noopener noreferrer" className="border-4 border-black px-4 py-2 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-sm text-black no-underline">
                                    <i className="ph-bold ph-github-logo text-lg text-black"></i>
                                    GITHUB
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="border-4 border-black px-4 py-2 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-sm text-black no-underline">
                                     <i className="ph-bold ph-linkedin-logo text-lg text-black"></i>
                                     LINKEDIN
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="border-4 border-black px-4 py-2 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-sm text-black no-underline">
                                    <i className="ph-bold ph-x-logo text-lg text-black"></i>
                                    TWITTER
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Side */}
                    <div className="flex-1 bg-white border-8 border-black p-10 md:p-14 shadow-[8px_8px_0px_#000000] h-fit">
                        <div className="mb-12">
                            <h2 className="font-lexend font-black text-4xl lg:text-[40px] uppercase leading-none text-black mb-1">{dict.about.contact.formTitle}</h2>
                            <div style={{ width: '80px', height: '10px', backgroundColor: '#ffd700', border: '3px solid black' }}></div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-3 flex-1">
                                    <label htmlFor="name" className="font-bold uppercase text-xs text-black">{dict.about.contact.nameLabel}</label>
                                    <input 
                                        name="name"
                                        type="text" 
                                        id="name" 
                                        required
                                        placeholder={dict.about.contact.namePlaceholder}
                                        className="bg-white border-4 border-black p-4 h-14 font-medium text-base text-black focus:outline-none focus:shadow-[4px_4px_0px_#000000] transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-3 flex-1">
                                    <label htmlFor="email" className="font-bold uppercase text-xs text-black">{dict.about.contact.emailLabelForm}</label>
                                    <input 
                                        name="email"
                                        type="email" 
                                        id="email" 
                                        required
                                        placeholder={dict.about.contact.emailPlaceholder}
                                        className="bg-white border-4 border-black p-4 h-14 font-medium text-base text-black focus:outline-none focus:shadow-[4px_4px_0px_#000000] transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Custom Dropdown */}
                            <div className="flex flex-col gap-3 relative z-[60]" ref={dropdownRef}>
                                <label className="font-bold uppercase text-xs text-black">{dict.about.contact.subjectLabel}</label>
                                <div className="relative">
                                    <button 
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full bg-white border-4 border-black h-[64px] px-5 py-0 font-medium text-base text-black flex items-center cursor-pointer outline-none text-left relative focus:shadow-[4px_4px_0px_#000000] z-10"
                                    >
                                        <span>{selectedValue}</span>
                                        <div className="absolute right-0 top-0 bottom-0 w-[56px] border-l-4 border-black flex items-center justify-center bg-white pointer-events-none">
                                            <i className={`ph-bold ph-caret-down text-xl transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                                        </div>
                                    </button>
                                    
                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 w-full bg-white border-4 border-black shadow-[8px_8px_0px_black] z-[100] overflow-hidden mt-2">
                                            {subjects.map((subject: string) => (
                                                <div 
                                                    key={subject}
                                                    onClick={() => { setSelectedValue(subject); setIsDropdownOpen(false); }}
                                                    className="p-4 px-5 cursor-pointer font-medium border-b-2 border-black last:border-b-0 hover:bg-[#ffd700] transition-colors text-black"
                                                >
                                                    {subject}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="message" className="font-bold uppercase text-xs text-black">{dict.about.contact.messageLabel}</label>
                                <textarea 
                                    name="message"
                                    id="message" 
                                    rows={5}
                                    required
                                    placeholder={dict.about.contact.messagePlaceholder}
                                    className="bg-white border-4 border-black p-4 font-medium text-base text-black focus:outline-none focus:shadow-[4px_4px_0px_#000000] transition-all resize-none placeholder:text-gray-400"
                                ></textarea>
                            </div>

                            <Button 
                                type="submit"
                                variant="primary"
                                size="lg"
                                fullWidth
                                className="mt-2"
                            >
                                <span>{dict.about.contact.sendButton}</span>
                                <i className="ph-bold ph-paper-plane-tilt text-xl"></i>
                            </Button>
                            <p className="text-xs font-black uppercase text-center text-black">
                                {dict.about.contact.waDisclaimer}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Image Gallery */}
            <section className="py-16 px-6 bg-[#eeeeee] border-b-8 border-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { src: '/images/our_studio_photography_neobrutal_1778062528096.png', label: dict.about.contact.gallery.studio },
                        { src: '/images/the_lab_keyboard_neobrutal_1778062567814.png', label: dict.about.contact.gallery.lab },
                        { src: '/images/playground_components_neobrutal_1778062798068.png', label: dict.about.contact.gallery.playground }
                    ].map((item, idx) => (
                        <div key={idx} className="relative group bg-black border-4 border-black shadow-[12px_12px_0px_#000000] aspect-square overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#000000] transition-all cursor-default">
                             <div className="w-full h-full border-4 border-black overflow-hidden">
                                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                             </div>
                             <div className="absolute bottom-[30px] left-[30px] bg-white border-4 border-black p-2 px-4 font-lexend font-black text-sm uppercase shadow-[6px_6px_0px_#000000] z-10 transition-all text-black">
                                {item.label}
                             </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Caution Tape Marquee */}
            <div className="bg-[#ffd700] text-black border-y-8 border-black overflow-hidden py-5 flex">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 px-6 font-lexend font-black text-3xl uppercase">
                            <span>{dict.about.contact.marquee}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ContactClient;
