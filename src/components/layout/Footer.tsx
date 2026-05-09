'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parent] = useAutoAnimate();
    const currentYear = new Date().getFullYear();

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <footer className="bg-white border-t-8 border-black flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 mt-auto">
                <Link href="/" className="font-lexend font-black italic text-xl uppercase text-black hover:text-[#ffd700] transition-colors">
                    KANGJESSY_DEV
                </Link>
                <div className="flex flex-col items-center gap-2">
                    <div className="font-lexend font-bold uppercase text-black text-center">
                        © {currentYear} KANGJESSY DEV — ENGINEERING BOLD SYSTEMS.
                    </div>
                    <div className="flex gap-4">
                        <Link href="/terms" className="text-[10px] font-black uppercase border-b-2 border-black hover:bg-[#ffd700] leading-none">Terms</Link>
                        <Link href="/privacy" className="text-[10px] font-black uppercase border-b-2 border-black hover:bg-[#adff2f] leading-none">Privacy</Link>
                    </div>
                </div>
                {/* Single button trigger */}
                <button
                    onClick={openModal}
                    className="border-4 border-black px-6 py-3 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                    SOCIALS ↗
                </button>
            </footer>

            <div ref={parent} className={`fixed inset-0 z-[1000] items-center justify-center flex pointer-events-none`}>
                {isModalOpen && (
                    <React.Fragment>
                        {/* Backdrop */}
                        <div onClick={closeModal} className="absolute inset-0 bg-black/60 pointer-events-auto"></div>

                        {/* Modal Box */}
                        <div className="relative bg-white border-8 border-black shadow-[12px_12px_0px_#000000] p-10 min-w-[320px] z-10 mx-4 pointer-events-auto">
                            <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
                                <span className="font-lexend font-black text-2xl uppercase">Connect with me</span>
                                <button onClick={closeModal} className="border-4 border-black w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                                    <i className="ph-bold ph-x text-xl font-black"></i>
                                </button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://github.com/kangjessy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-4 border-black px-6 py-4 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-4"
                                >
                                    <i className="ph-bold ph-github-logo text-2xl"></i>
                                    GITHUB
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-4 border-black px-6 py-4 font-black uppercase bg-[#ffd700] shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-4"
                                >
                                    <i className="ph-bold ph-linkedin-logo text-2xl"></i>
                                    LINKEDIN
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-4 border-black px-6 py-4 font-black uppercase bg-[#adff2f] shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-4"
                                >
                                    <i className="ph-bold ph-x-logo text-2xl"></i>
                                    TWITTER / X
                                </a>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </>
    );
};

export default Footer;
