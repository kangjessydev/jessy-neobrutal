"use client";
import React from "react";
import Link from "next/link";
import { experience, skills } from "@/data/resume";
import Button from "@/components/ui/Button";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen print:bg-white pb-32">
      {/* Control Bar (Hidden on Print) */}
      <div className="sticky top-0 left-0 w-full bg-black text-white p-4 z-50 flex justify-center gap-4 border-b-4 border-black print:hidden">
        <Button
          onClick={handlePrint}
          variant="secondary"
          size="sm"
          className="gap-2 !border-[#adff2f]"
          customShadow="#ffffff"
        >
          <i className="ph-bold ph-file-pdf text-lg"></i>
          Save as PDF (Designer View)
        </Button>
        <Button
          variant="tertiary"
          size="sm"
          className="opacity-50 cursor-not-allowed gap-2 !border-white"
          onClick={() => {}}
          customShadow="#ffffff"
        >
          <i className="ph-bold ph-google-drive-logo text-lg"></i>
          Standard Version (GDrive)
        </Button>
        <Button
          href="/about"
          variant="primary"
          size="sm"
          className="gap-2 !border-[#ffd700]"
          customShadow="#ffffff"
        >
          <i className="ph-bold ph-arrow-left text-lg"></i>
          Back to About
        </Button>
      </div>

      <main className="py-16 md:py-32 px-4 md:px-8 flex justify-center print:p-0 print:[print-color-adjust:exact] print:[-webkit-print-color-adjust:exact]">
        {/* A4 Paper Container */}
        <div 
          className="bg-white border-[8px] border-black w-full max-w-[850px] shadow-[20px_20px_0px_#000000] p-10 md:p-16 relative overflow-hidden print:max-w-none print:w-full print:p-12 print:border-none print:shadow-none"
          style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
        >
          {/* Top Section */}
          <header className="border-b-8 border-black pb-6 mb-12 flex flex-col gap-8">
            <div>
              <h1 className="font-lexend font-black text-5xl md:text-7xl print:text-7xl p-0 m-0 uppercase leading-[0.85] tracking-tighter mb-6 text-black">
                JESSY MUTAJ
                <br />
                HIFJUDIN
              </h1>
              <p className="font-lexend font-black text-base md:text-xl print:text-xl uppercase italic bg-[#ffd700] border-4 border-black px-4 py-1 inline-block -rotate-1 text-black">
                Full-Stack Developer — Web Systems & Architecture
              </p>
            </div>
            <div className="flex flex-wrap gap-4 font-lexend font-bold text-xs md:text-sm print:text-sm uppercase tracking-tight text-black mt-2">
              <div className="flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-black text-white shadow-[2px_2px_0px_#adff2f]">
                <i className="ph-bold ph-envelope text-base"></i>
                <span>hi.kangjessy@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-[#adff2f] shadow-[2px_2px_0px_#000000]">
                <i className="ph-bold ph-map-pin text-base"></i>
                <span>Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-white shadow-[2px_2px_0px_#000000]">
                <i className="ph-bold ph-github-logo text-base"></i>
                <span>github.com/kangjessydev</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-black px-3 py-1.5 bg-[#444] text-white shadow-[2px_2px_0px_#000000]">
                <i className="ph-bold ph-linkedin-logo text-base"></i>
                <span>linkedin.com/in/kangjessy</span>
              </div>
            </div>
          </header>

          {/* Main Layout */}
          <div className="flex flex-col md:flex-row print:flex-col gap-8 md:gap-16 print:gap-10">
            {/* Sidebar */}
            <div className="w-full md:w-[280px] print:w-full space-y-10 print:space-y-8">
              <section>
                <h3 className="font-lexend font-black text-xl uppercase mb-4 border-b-4 border-black pb-2 text-black">
                  Profile
                </h3>
                <p className="font-bold text-xs leading-relaxed text-[#444]">
                  Full-Stack Developer with 3+ years building web systems for
                  real businesses — from IT infrastructure at a bank and hotel,
                  to end-to-end product development. I architect first, then
                  build. Currently developing a skincare SaaS with an AI-powered
                  analysis pipeline.
                </p>
              </section>

              <section>
                <h3 className="font-lexend font-black text-xl uppercase mb-4 border-b-4 border-black pb-2 text-black">
                  Arsenal
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="border-2 border-black px-2 py-0.5 text-[9px] font-black uppercase bg-white shadow-[2px_2px_0px_#000000] text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="font-lexend font-black text-xl uppercase mb-4 border-b-4 border-black pb-2 text-black">
                  Languages
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-black text-white p-2 border-2 border-black">
                    <span className="font-bold text-[10px] uppercase">
                      Indonesian
                    </span>
                    <span className="font-black italic text-[10px] text-[#adff2f]">
                      Native
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-white text-black p-2 border-2 border-black">
                    <span className="font-bold text-[10px] uppercase">
                      English
                    </span>
                    <span className="font-black italic text-[10px]">
                      Fluent
                    </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Main Content */}
            <div className="flex-grow space-y-12 print:break-before-page print:pt-12">
              <section>
                <h3 className="font-lexend font-black text-2xl uppercase mb-8 flex items-center gap-3 text-black">
                  <i className="ph-bold ph-briefcase text-3xl"></i>
                  Experience
                </h3>
                <div className="space-y-10">
                  {experience.map((job, idx) => (
                    <div
                      key={idx}
                      className="relative pl-8 border-l-4 border-black"
                    >
                      <div className="absolute -left-[14px] top-0 w-6 h-6 bg-black"></div>
                      <span className="text-[10px] font-black uppercase text-[#888] mb-1 block tracking-widest">
                        {job.period}
                      </span>
                      <h4 className="font-lexend font-black text-xl uppercase m-0 leading-tight mb-1 text-black">
                        {job.role}
                      </h4>
                      <p className="font-lexend font-black text-xs uppercase text-[#FF6B00] mb-3 tracking-wider">
                        {job.company}
                      </p>
                      <p className="font-bold text-xs leading-relaxed text-[#444]">
                        {job.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="font-lexend font-black text-2xl uppercase mb-6 flex items-center gap-3 text-black">
                  <i className="ph-bold ph-student text-3xl"></i>
                  Education
                </h3>
                <div className="relative pl-8 border-l-4 border-black">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#adff2f] border-4 border-black"></div>
                  <span className="text-[10px] font-black uppercase text-[#888] mb-1 block tracking-widest">
                    2018 - 2023
                  </span>
                  <h4 className="font-lexend font-black text-xl uppercase m-0 leading-tight text-black">
                    S.Kom
                  </h4>
                  <p className="font-bold text-xs uppercase tracking-wider text-black">
                    Universitas Kebangsaan Republik Indonesia
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="mt-16 border-t-8 border-black pt-2 print:hidden">
            <div className="w-full h-3 bg-[#ffd700]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
