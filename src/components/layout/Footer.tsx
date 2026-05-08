'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                <Link href="/" className="font-lexend font-black italic text-xl uppercase text-black hover:text-[#FFD700] transition-colors">
                    KANGJESSY_DEV
                </Link>
                <div className="font-lexend font-bold uppercase text-black text-center">
                    © {currentYear} PORTFOLIO. BUILT WITH COFFEE AND BRUTALISM.
                </div>
                {/* Single button trigger */}
                <button
                    onClick={openModal}
                    className="border-4 border-black px-6 py-3 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                    SOCIALS ↗
                </button>
            </footer>

            {/* Popup Modal */}
            <div className={`fixed inset-0 z-[1000] items-center justify-center ${isModalOpen ? 'flex' : 'hidden'}`}>
                {/* Backdrop */}
                <div onClick={closeModal} className="absolute inset-0 bg-black/60"></div>

                {/* Modal Box */}
                <div className="relative bg-white border-8 border-black shadow-[12px_12px_0px_#000000] p-10 min-w-[320px] z-10 mx-4">
                    <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
                        <span className="font-lexend font-black text-2xl uppercase">Find me on</span>
                        <button onClick={closeModal} className="font-black text-2xl border-4 border-black w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                            ✕
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://github.com/kangjessy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-4 border-black px-6 py-4 font-black uppercase bg-white shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-4"
                        >
                            <span className="material-symbols-outlined">code</span>
                            GITHUB
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-4 border-black px-6 py-4 font-black uppercase bg-[#ffd700] shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-4"
                        >
                            <span className="material-symbols-outlined">work</span>
                            LINKEDIN
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-4 border-black px-6 py-4 font-black uppercase bg-[#a5f624] shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-4"
                        >
                            <span className="material-symbols-outlined">alternate_email</span>
                            TWITTER
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
