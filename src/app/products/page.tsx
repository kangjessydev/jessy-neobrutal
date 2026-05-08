import React from 'react';
import type { Metadata } from 'next';
import { getProducts } from '@/data/products';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Digital Goods | KANGJESSY DEV",
};

export default function ProductsPage() {
    const products = getProducts();

    return (
        <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <h1 className="font-lexend font-black text-6xl md:text-8xl uppercase tracking-tighter mb-4 text-black">
                    DIGITAL GOODS
                </h1>
                <div className="h-4 bg-black w-full mb-8"></div>
                <p className="font-lexend font-bold text-xl md:text-2xl max-w-3xl text-[#555]">
                    Premium assets engineered for high-performance developers. No fluff, just raw utility and neobrutalist aesthetics.
                </p>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {products.map(product => (
                    <div key={product.id} className="bg-white border-4 border-black p-0 flex flex-col shadow-[12px_12px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_#000000] transition-all group overflow-hidden">
                        {/* Product Image Container */}
                        <div className="relative aspect-video border-b-4 border-black bg-[#f0f0f0] overflow-hidden">
                            {/* Price Tag */}
                            <div className="absolute top-4 right-4 bg-[#FFD700] border-4 border-black px-4 py-2 font-lexend font-black text-xl z-10 shadow-[4px_4px_0px_#000000]">
                                {product.price}
                            </div>
                            <div className="w-full h-full flex items-center justify-center p-8 bg-black/5 group-hover:bg-transparent transition-colors">
                                <div className="w-full h-full border-2 border-dashed border-black/20 flex items-center justify-center italic text-black/30 font-black uppercase text-xl group-hover:text-black/60 transition-colors">
                                    {product.title}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-grow flex flex-col">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {product.tags.map(tag => (
                                    <Tag key={tag} variant="white">
                                        {tag}
                                    </Tag>
                                ))}
                            </div>

                            <h3 className="font-lexend font-black text-3xl mb-4 leading-tight uppercase text-black group-hover:underline decoration-4 underline-offset-4">
                                {product.title}
                            </h3>
                            <p className="font-space font-medium text-sm text-[#666] mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="mt-auto">
                                <Button variant="primary" size="lg" fullWidth>
                                    ADD TO CART
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Caution Divider */}
            <div className="max-w-7xl mx-auto mb-24 h-12 bg-black overflow-hidden relative border-y-4 border-black">
                <div className="absolute inset-0 caution-tape animate-caution-scroll w-[200%] h-full"></div>
            </div>

            {/* Bottom Features */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3 bg-[#ADFF2F] border-4 border-black p-10 md:p-14 shadow-[12px_12px_0px_#000000]">
                    <h2 className="font-lexend font-black text-4xl md:text-5xl uppercase mb-6 tracking-tighter text-black">
                        INSTANT ACCESS
                    </h2>
                    <p className="font-lexend font-bold text-lg md:text-xl text-black/80 max-w-2xl leading-relaxed mb-8">
                        All digital goods are delivered instantly to your dashboard upon successful payment. No waiting, just building.
                    </p>
                    <div className="inline-flex items-center gap-4 bg-black text-[#ADFF2F] px-4 py-2 font-lexend font-black uppercase text-sm">
                        <span className="material-symbols-outlined font-black">bolt</span>
                        READY IN 0.2S
                    </div>
                </div>

                <div className="bg-white border-4 border-black p-10 flex flex-col items-center justify-center text-center shadow-[12px_12px_0px_#000000]">
                    <div className="w-16 h-16 bg-[#f0f0f0] border-4 border-black mb-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl font-black text-black">terminal</span>
                    </div>
                    <h3 className="font-lexend font-black text-2xl uppercase mb-2 text-black">DEV-FIRST</h3>
                    <p className="font-bold text-black/60 text-sm">By developers, for developers.</p>
                </div>
            </div>

        </main>
    );
}
