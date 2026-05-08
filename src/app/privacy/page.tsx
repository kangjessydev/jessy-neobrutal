'use client';
import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="bg-[#f9f9f9] min-h-screen pt-32 pb-20 px-6">
            <article className="max-w-4xl mx-auto">
                <div className="inline-block bg-[#ADFF2F] border-4 border-black px-4 py-1 mb-8 shadow-[4px_4px_0px_#000000] font-lexend font-black uppercase text-xs tracking-widest text-black">
                    PRIVACY PROTOCOL v1.0
                </div>
                
                <h1 className="font-lexend font-black text-6xl md:text-8xl uppercase tracking-tighter mb-12 text-black leading-[0.9]">
                    PRIVACY<br/>POLICY
                </h1>

                <div className="prose-neo space-y-12 text-black">
                    <section className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000000]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4">01. DATA COLLECTION</h2>
                        <p className="font-space font-medium leading-relaxed">
                            Kami tidak haus data. Kami hanya mengumpulkan informasi dasar seperti alamat email jika Anda mengisi form kontak, atau data anonim lewat cookies untuk tahu bagian mana dari website ini yang paling sering diklik.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#FFD700]">
                            <h3 className="font-lexend font-black text-xl uppercase mb-3">Cookies</h3>
                            <p className="text-sm font-medium leading-relaxed opacity-80">
                                Kami menggunakan teknologi standard cookies untuk meningkatkan performa halaman. Tidak ada data pribadi sensitif yang kami simpan di sini.
                            </p>
                        </section>
                        <section className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#ff69b4]">
                            <h3 className="font-lexend font-black text-xl uppercase mb-3">Contact Form</h3>
                            <p className="text-sm font-medium leading-relaxed opacity-80">
                                Email yang Anda kirimkan hanya akan digunakan untuk komunikasi profesional antara saya dan Anda. No spam. No selling.
                            </p>
                        </section>
                    </div>

                    <section className="space-y-6">
                        <h2 className="font-lexend font-black text-3xl uppercase tracking-tight">02. DATA SECURITY</h2>
                        <p className="font-space font-medium leading-relaxed text-gray-700">
                            Kami menggunakan protokol Next.js yang aman untuk menjaga integritas website ini. Meskipun tidak ada sistem yang 100% kebal, kami berkomitmen untuk tidak mengekspos data Anda ke pihak ketiga yang tidak bertanggung jawab.
                        </p>
                    </section>

                    <section className="border-l-8 border-black pl-8 py-4 bg-[#eeeeee]">
                        <h2 className="font-lexend font-black text-3xl uppercase mb-4">03. YOUR RIGHTS</h2>
                        <p className="font-space font-medium leading-relaxed italic">
                            &quot;Privacy is not an option, it is a human right.&quot;
                        </p>
                        <p className="font-space font-medium mt-4 text-gray-700">
                            Jika Anda ingin data Anda dihapus dari database email saya, silakan hubungi saya langsung lewat tombol &apos;Get in Touch&apos;. Saya akan eksekusi permintaannya segera.
                        </p>
                    </section>

                    <div className="pt-12 border-t-8 border-black flex justify-between items-center">
                        <p className="font-lexend font-bold uppercase text-xs text-gray-400">Last Updated: May 2024</p>
                        <Link href="/" className="font-lexend font-black uppercase text-sm border-b-4 border-black hover:bg-[#ADFF2F] transition-all">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
