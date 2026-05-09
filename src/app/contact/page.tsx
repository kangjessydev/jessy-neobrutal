'use client';
import React, { useState, useEffect } from 'react';
import Button from "@/components/ui/Button";

const ContactPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Project Inquiry');
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const waNumber = "6281234567890";

    const subjects = [
        'Project Inquiry',
        'Budget & Pricing',
        'Collaboration',
        'Other'
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const message = formData.get('message');
        const text = `Hi, I'm ${name}.%0A%0AI'd like to discuss ${selectedValue}.%0A%0A${message}`;
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
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
                    
                    {/* Left Info Side */}
                    <div className="flex-1">
                        <h1 className="font-lexend font-black text-6xl md:text-8xl text-black uppercase mb-8 leading-[1.1] tracking-tighter">
                            GET IN <span className="bg-[#adff2f] px-4 shadow-[6px_6px_0px_#000000] border-4 border-black inline-block mt-2">TOUCH.</span>
                        </h1>
                        <p className="text-xl font-medium uppercase text-[#000000] mb-16">
                            I&apos;M CURRENTLY OPEN TO NEW PROJECTS AND COLLABORATIONS. LET&apos;S BUILD SOMETHING THAT BREAKS THE INTERNET.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="border-4 border-black p-2 bg-white shadow-[4px_4px_0px_#000000]">
                                    <i className="ph-bold ph-envelope-simple text-3xl text-black"></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black uppercase text-xs text-[#000000]">Email Me</h3>
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
                                    <h3 className="font-black uppercase text-xs text-[#000000]">Location</h3>
                                    <p className="font-lexend font-black text-2xl text-black">
                                        BERLIN, DE
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-1 bg-black my-12"></div>

                        <div>
                            <h3 className="font-black uppercase text-xl mb-6 text-black">Connect</h3>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://github.com/kangjessy" target="_blank" rel="noopener noreferrer" className="border-4 border-black px-4 py-2 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-sm">
                                    <i className="ph-bold ph-github-logo text-lg text-black"></i>
                                    GITHUB
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="border-4 border-black px-4 py-2 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-sm">
                                     <i className="ph-bold ph-linkedin-logo text-lg text-black"></i>
                                     LINKEDIN
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="border-4 border-black px-4 py-2 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-2 text-sm">
                                    <i className="ph-bold ph-x-logo text-lg text-black"></i>
                                    TWITTER
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Side */}
                    <div className="flex-1 bg-white border-8 border-black p-10 md:p-14 shadow-[8px_8px_0px_#000000] h-fit">
                        <div className="mb-12">
                            <h2 className="font-lexend font-black text-4xl lg:text-[40px] uppercase leading-none text-black mb-1">Drop a line</h2>
                            <div style={{ width: '80px', height: '10px', backgroundColor: '#ffd700', border: '3px solid black' }}></div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex flex-col gap-3 flex-1">
                                    <label htmlFor="name" className="font-bold uppercase text-xs text-black">FULL NAME</label>
                                    <input 
                                        name="name"
                                        type="text" 
                                        id="name" 
                                        required
                                        placeholder="John Doe"
                                        className="bg-white border-4 border-black p-4 h-14 font-medium text-base text-black focus:outline-none focus:shadow-[4px_4px_0px_#000000] transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-3 flex-1">
                                    <label htmlFor="email" className="font-bold uppercase text-xs text-black">EMAIL ADDRESS</label>
                                    <input 
                                        name="email"
                                        type="email" 
                                        id="email" 
                                        required
                                        placeholder="john@example.com"
                                        className="bg-white border-4 border-black p-4 h-14 font-medium text-base text-black focus:outline-none focus:shadow-[4px_4px_0px_#000000] transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Custom Dropdown */}
                            <div className="flex flex-col gap-3 relative z-[60]" ref={dropdownRef}>
                                <label className="font-bold uppercase text-xs text-black">SUBJECT</label>
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
                                            {subjects.map(subject => (
                                                <div 
                                                    key={subject}
                                                    onClick={() => { setSelectedValue(subject); setIsDropdownOpen(false); }}
                                                    className="p-4 px-5 cursor-pointer font-medium border-b-2 border-black last:border-b-0 hover:bg-[#ffd700] transition-colors"
                                                >
                                                    {subject}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="message" className="font-bold uppercase text-xs text-black">YOUR MESSAGE</label>
                                <textarea 
                                    name="message"
                                    id="message" 
                                    rows={5}
                                    required
                                    placeholder="Tell me about your vision..."
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
                                <span>SEND MESSAGE</span>
                                <i className="ph-bold ph-paper-plane-tilt text-xl"></i>
                            </Button>
                            <p className="text-xs font-black uppercase text-center text-black">
                                *This will redirect you to WhatsApp
                            </p>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Image Gallery */}
            <section className="py-16 px-6 bg-[#eeeeee] border-b-8 border-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { src: '/images/our_studio_photography_neobrutal_1778062528096.png', label: 'OUR STUDIO' },
                        { src: '/images/the_lab_keyboard_neobrutal_1778062567814.png', label: 'THE LAB' },
                        { src: '/images/playground_components_neobrutal_1778062798068.png', label: 'PLAYGROUND' }
                    ].map((item, idx) => (
                        <div key={idx} className="relative group bg-dark border-4 border-dark shadow-[12px_12px_0px_#000000] aspect-square overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#000000] transition-all cursor-default">
                             <div className="w-full h-full border-4 border-dark overflow-hidden">
                                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                             </div>
                             <div className="absolute bottom-[30px] left-[30px] bg-white border-4 border-black p-2 px-4 font-lexend font-black text-sm uppercase shadow-[6px_6px_0px_#000000] z-10 transition-all">
                                {item.label}
                             </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Caution Tape Marquee */}
            <div className="bg-[#ffd700] text-black border-y-8 border-black overflow-hidden py-5 flex">
                <div className="flex animate-marquee whitespace-nowrap">
                    <div className="flex items-center gap-12 px-6 font-lexend font-black text-3xl uppercase">
                        <span>LET&apos;S BUILD SOMETHING BOLD 🌟</span>
                        <span>LET&apos;S BUILD SOMETHING BOLD 🌟</span>
                        <span>LET&apos;S BUILD SOMETHING BOLD 🌟</span>
                    </div>
                     <div className="flex items-center gap-12 px-6 font-lexend font-black text-3xl uppercase">
                        <span>LET&apos;S BUILD SOMETHING BOLD 🌟</span>
                        <span>LET&apos;S BUILD SOMETHING BOLD 🌟</span>
                        <span>LET&apos;S BUILD SOMETHING BOLD 🌟</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
