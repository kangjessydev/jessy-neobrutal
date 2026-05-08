'use client';
import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-20 px-6">
            <article className="max-w-4xl mx-auto">
                <div className="inline-block bg-[#FFD700] border-4 border-black px-4 py-1 mb-8 shadow-[4px_4px_0px_#000000] font-lexend font-black uppercase text-xs tracking-widest">
                    LEGAL DOCUMENT v1.0
                </div>
                
                <h1 className="font-lexend font-black text-6xl md:text-8xl uppercase tracking-tighter mb-12 text-black leading-[0.9]">
                    TERMS & <br/> CONDITIONS
                </h1>

                <div className="prose-neo space-y-12 text-black">
                    <section className="border-4 border-black p-8 bg-[#f9f9f9] shadow-[8px_8px_0px_#000000]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4">01. THE CONTRACT</h2>
                        <p className="font-space font-medium leading-relaxed">
                            Dengan mengakses website KANGJESSY DEV, Anda setuju untuk tunduk pada aturan main yang brutal tapi adil ini. Jika Anda tidak setuju dengan estetika atau fungsionalitas murni kami, silakan tutup tab ini.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-lexend font-black text-3xl uppercase tracking-tight">02. INTELLECTUAL PROPERTY</h2>
                        <p className="font-space font-medium leading-relaxed text-gray-700">
                            Semua kode, desain, dan pixel yang ada di website ini adalah hasil keringat dingin dan logika murni KANGJESSY. Anda dilarang keras mengkloning atau mencuri aset visual tanpa izin tertulis, kecuali jika Anda ingin berurusan dengan bayangan solid kami.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-lexend font-black text-3xl uppercase tracking-tight">03. SERVICE AVAILABILITY</h2>
                        <p className="font-space font-medium leading-relaxed text-gray-700">
                            Kami berusaha menjaga uptime 99.9%, tapi karena ini adalah dunia digital yang penuh variabel tak terduga, kami tidak bertanggung jawab atas kerugian emosional atau finansial jika website ini mendadak offline karena pembaruan sistem yang masif.
                        </p>
                    </section>

                    <section className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_#ADFF2F]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4 text-[#ADFF2F]">04. LIMITATION OF LIABILITY</h2>
                        <p className="font-space font-medium leading-relaxed opacity-90">
                            Logic is absolute. KANGJESSY DEV tidak bertanggung jawab atas interpretasi desain yang salah atau kegagalan bisnis Anda setelah melihat portfolio ini. Kami memberikan inspirasi dan solusi teknis, bukan tongkat sihir.
                        </p>
                    </section>

                    <div className="pt-12 border-t-8 border-black flex justify-between items-center">
                        <p className="font-lexend font-bold uppercase text-xs text-gray-400">Last Updated: May 2024</p>
                        <Link href="/" className="font-lexend font-black uppercase text-sm border-b-4 border-black hover:bg-[#FFD700] transition-all">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
