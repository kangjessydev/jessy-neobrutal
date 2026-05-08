import Button from "@/components/ui/Button";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me - KANGJESSY DEV",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto border-x-8 border-black bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row border-b-8 border-black">
        <div className="flex-[2] p-12 flex flex-col justify-center border-b-8 md:border-b-0 md:border-r-8 border-black bg-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
            BRUTALLY HONEST <span className="bg-[#FFD700] px-4 shadow-[6px_6px_0px_#000000] border-2 border-black inline-block -rotate-1">CODE.</span>
          </h1>
          <p className="font-lexend text-xl text-[#5d5f5f] max-w-2xl mb-12">
            I build high-performance digital interfaces with a focus on structural integrity and unapologetic visual identities. My approach is rooted in the belief that great software should be as bold as it is functional.
          </p>
          <div className="flex gap-4">
            <Button href="/resume" variant="primary" size="lg">LIHAT CV</Button>
          </div>
        </div>
        <div className="flex-1 min-h-[400px] bg-[#FFD700] relative group overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src="/avatar.jpg" 
            alt="Kang Jessy" 
          />
        </div>
      </section>

      {/* Journey & Arsenal */}
      <section className="flex flex-col lg:flex-row border-b-8 border-black">
        {/* Journey */}
        <div className="flex-[2] p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-black bg-white">
          <div className="flex items-center gap-6 mb-16">
            <span className="material-symbols-outlined text-6xl bg-black text-[#A5F624] p-4 border-4 border-black shadow-[4px_4px_0px_#A5F624]">history_edu</span>
            <h2 className="text-5xl font-black uppercase">My Journey</h2>
          </div>
          
          <div className="space-y-12">
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_#000000] bg-white">
              <h3 className="text-3xl font-black mb-4 uppercase">The Genesis</h3>
              <p className="text-lg leading-relaxed text-[#5d5f5f]">It started with a fascination for how things break. Before I built systems, I deconstructed them. From early experiments with raw HTML/CSS to architecting complex distributed systems, the goal has always been the same: absolute stability.</p>
            </div>
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_#000000] bg-[#A5F624]">
              <h3 className="text-3xl font-black mb-4 uppercase">The Evolution</h3>
              <p className="text-lg leading-relaxed text-black">Transitioning from a developer to a full-stack engineer and UI designer, I realized that the bridge between human intent and machine execution is where the most impactful work happens.</p>
            </div>
          </div>
        </div>

        {/* Arsenal */}
        <div className="flex-1 p-12 bg-[#eeeeee]">
          <h2 className="text-4xl font-black uppercase mb-12">Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {['Front-end', 'UI Design', 'Backend', 'React / Astro', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Node.js', 'Figma'].map(skill => (
              <div key={skill} className="px-6 py-2 border-4 border-black bg-white font-black uppercase shadow-[4px_4px_0px_#000000]">{skill}</div>
            ))}
          </div>
          <div className="mt-16 p-8 border-4 border-black bg-black text-white shadow-[8px_8px_0px_#FFD700]">
            <p className="font-bold uppercase tracking-widest text-sm mb-4 text-[#A5F624]">Current Focus</p>
            <p className="text-2xl font-bold italic text-[#FFD700]">&quot;Pushing the boundaries of Neobrutalist web interfaces and type-safe backend architectures.&quot;</p>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="p-12">
        <h2 className="text-5xl font-black uppercase mb-16 flex items-center gap-6">
          <span className="material-symbols-outlined text-5xl">work_history</span>
          Experience & Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_#000000] transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase mb-4 inline-block">2021 - Present</span>
                <h3 className="text-4xl font-black uppercase mb-2">Senior Full-Stack Engineer</h3>
                <p className="font-bold text-[#705d00] uppercase tracking-wider">TechFrontier Labs</p>
              </div>
              <span className="material-symbols-outlined text-6xl text-black group-hover:rotate-12 transition-transform">terminal</span>
            </div>
            <p className="text-lg leading-relaxed text-[#5d5f5f]">
              Leading the core engineering team in developing a high-scale data visualization platform. Implemented a custom neobrutalist UI component library that increased user engagement by 40%.
            </p>
          </div>
          
          <div className="border-4 border-black p-8 bg-[#FFD700] shadow-[8px_8px_0px_#000000]">
            <div className="mb-8">
              <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase mb-4 inline-block">2019 - 2021</span>
              <h3 className="text-3xl font-black uppercase mb-2">UI/UX Designer</h3>
              <p className="font-bold uppercase tracking-wider">PixelPerfect Agency</p>
            </div>
            <p className="text-lg leading-relaxed text-black">
              Focused on raw aesthetic digital products for early-stage fintech startups.
            </p>
          </div>
          
          <div className="border-4 border-black p-8 bg-[#A5F624] shadow-[8px_8px_0px_#000000]">
            <div className="mb-8">
              <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase mb-4 inline-block">2015 - 2019</span>
              <h3 className="text-3xl font-black uppercase mb-2">B.Sc Computer Science</h3>
              <p className="font-bold uppercase tracking-wider">Institute of Technology</p>
            </div>
            <p className="text-lg leading-relaxed text-black">
              Focus on System Architecture and Graphic Design Principles.
            </p>
          </div>

          <div className="md:col-span-2 border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-4xl font-black mb-8 uppercase italic border-b-4 border-black pb-2">Continuous Learning</h3>
                <div className="space-y-6">
                  {[
                    {id: '01', title: 'Advanced Distributed Systems'},
                    {id: '02', title: 'Human-Computer Interaction (HCI)'},
                    {id: '03', title: 'Performance Engineering'}
                  ].map(item => (
                    <div key={item.id} className="flex items-center gap-6 border-b-2 border-black pb-4 hover:bg-[#f9f9f9] transition-colors px-2">
                      <span className="font-black text-3xl font-lexend">{item.id}</span>
                      <span className="font-bold uppercase text-lg">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-black border-4 border-black shadow-[4px_4px_0px_#000000] overflow-hidden p-2">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfakW8yXxYW4Nb-qYR8nfC0sQJAYzIGn0EBRgQMgLZG5CxHOGLVysrukG04ox3fmcg9okq2DcLqqrnrJfotpM0NmumRcOHrNCc_ST-YkIzSA1z7EiBvk8vX_BfKGmZkWLGA7qE69hzP1tRzKF9cfOmm7AWCQ9WmFn7Cbn8gEbJsxCU_5j7ssi0gglBNzdUv6ZtE1r3u7-vQkK5P0-FmDBPTLVwGdTq4rN0mv3rTtNQObjMGphkOEwZ_MFPYuP_Qr7LmpzAIPlPYrau" 
                  alt="Abstract tech art" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="h-16 w-full bg-[#FFD700] border-y-8 border-black flex items-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex">
          <span className="font-black uppercase text-2xl px-12">DESIGN • CODE • SHIP • REPEAT • DESIGN • CODE • SHIP • REPEAT • DESIGN • CODE • SHIP • REPEAT •</span>
          <span className="font-black uppercase text-2xl px-12">DESIGN • CODE • SHIP • REPEAT • DESIGN • CODE • SHIP • REPEAT • DESIGN • CODE • SHIP • REPEAT •</span>
        </div>
      </div>
    </div>
  );
}
