import React from 'react';
import type { Metadata } from 'next';
import services from '@/data/services.json';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

export const metadata: Metadata = {
  title: 'Pricing & Service Packages | KANGJESSY DEV',
  description: 'Flexible web development packages tailored for your business growth. From starter essentials to enterprise scaling.',
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 text-center">
        <Tag variant="primary" className="mb-4">PRICING & SERVICES</Tag>
        <h1 className="font-lexend font-black text-6xl md:text-8xl leading-[0.8] tracking-tighter uppercase mb-6">
          TRANSPARENT<br />INVESTMENT
        </h1>
        <p className="font-space font-medium text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          No hidden fees. No bullshit. Just high-performance systems built to scale your digital presence.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`relative flex flex-col bg-white border-8 border-black p-8 md:p-10 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_#000000] ${
              service.featured ? 'shadow-[12px_12px_0px_#000000] border-[#ffd700]' : 'shadow-[8px_8px_0px_#000000]'
            }`}
          >
            {service.featured && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#ffd700] border-4 border-black px-4 py-1 font-black uppercase text-sm z-10">
                {service.tagline}
              </div>
            )}
            
            {!service.featured && (
              <div className="mb-6">
                <span className="text-xs font-black uppercase border-4 border-black px-3 py-1">
                  {service.tagline}
                </span>
              </div>
            )}

            <h2 className="font-lexend font-black text-4xl uppercase mb-4 leading-none">{service.title}</h2>
            <p className="font-space font-medium text-gray-600 mb-8 text-sm leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-space font-black text-2xl">{service.currency}</span>
              <span className="font-lexend font-black text-5xl md:text-6xl tracking-tighter">{service.price}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10 border-y-4 border-black py-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <i className="ph-bold ph-timer"></i>
                  <span className="text-[10px] font-black uppercase tracking-widest">Estimasi</span>
                </div>
                <span className="font-black uppercase text-sm">{service.estimation}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500">
                  <i className="ph-bold ph-arrows-counter-clockwise"></i>
                  <span className="text-[10px] font-black uppercase tracking-widest">Revisi</span>
                </div>
                <span className="font-black uppercase text-sm">{service.revision}</span>
              </div>
            </div>

            <div className="flex-grow space-y-10 mb-12">
              {service.features.map((group, idx) => (
                <div key={idx}>
                  <h3 className="font-lexend font-black text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-4">
                    <span className="whitespace-nowrap">{group.category}</span>
                    <div className="h-[2px] w-full bg-gray-100"></div>
                  </h3>
                  <ul className="space-y-4">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-3 group">
                        <i className={`ph-bold ${group.category.includes('OPSIONAL') ? 'ph-plus-circle text-orange-500' : 'ph-check-circle text-blue-500'} text-xl shrink-0`}></i>
                        <span className="font-space font-bold text-sm leading-tight text-gray-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t-4 border-black/5">
              <div className="bg-gray-50 border-4 border-black p-4 mb-8">
                <p className="text-[10px] font-black uppercase text-gray-400 mb-2">COCOK UNTUK:</p>
                <p className="font-space font-medium text-xs leading-relaxed text-gray-700">
                  {service.suitableFor}
                </p>
              </div>

              <Button 
                variant={service.featured ? 'primary' : 'tertiary'} 
                fullWidth 
                size="lg"
                href={`/contact?package=${service.id}`}
              >
                {service.ctaText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-32 bg-black text-white p-12 md:p-20 text-center">
        <h2 className="font-lexend font-black text-4xl md:text-6xl uppercase mb-8">Need something completely custom?</h2>
        <p className="font-space text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-400">
          If your project doesn't fit into these boxes, let's talk about a bespoke architectural solution.
        </p>
        <Button variant="primary" size="lg" href="/contact">
          Schedule A Strategy Call ↗
        </Button>
      </section>
    </div>
  );
}
