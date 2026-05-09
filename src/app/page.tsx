import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto z-10">
              <div className="inline-block bg-[#a5f624] text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#000000] font-bold uppercase text-sm tracking-widest">
                  Open to Opportunities
              </div>
              <h1 className="font-lexend font-black text-6xl md:text-8xl text-black uppercase mb-6 leading-[1.05] tracking-tighter">
                  FULL-STACK<br />
                  <span className="bg-[#ffd700] px-4 shadow-[6px_6px_0px_#000000] border-4 border-black inline-block -rotate-1">DEVELOPER</span>
              </h1>
              <p className="font-space text-lg md:text-xl text-[#5d5f5f] max-w-2xl mx-auto mb-4 leading-relaxed">
                  Web Systems &amp; Architecture
              </p>
              <p className="font-space text-base text-[#5d5f5f] max-w-2xl mx-auto mb-12 leading-relaxed">
                  I engineer scalable web systems — from architecture to deployment. Clean code, decisive design, and zero tolerance for bloat.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 w-full max-w-sm md:max-w-none mx-auto">
                  <Button href="/projects" variant="primary" size="lg" className="w-full md:w-auto">
                      VIEW SELECTED WORKS
                  </Button>
                  <Button href="#tech" variant="tertiary" size="lg" className="w-full md:w-auto">
                      TECH STACK
                  </Button>
              </div>
          </div>
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border-8 border-black opacity-10 rotate-12 hidden lg:block"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-8 border-[#ffd700] opacity-20 -rotate-6 hidden lg:block"></div>
      </section>

      {/* Caution Tape Divider */}
      <div className="bg-[repeating-linear-gradient(-45deg,#ffd700,#ffd700_20px,#000000_20px,#000000_40px)] h-12 w-full border-y-8 border-black animate-[caution-scroll_2s_linear_infinite]"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes caution-scroll {
            from { background-position: 0 0; }
            to { background-position: 56.5px 0; }
        }
      `}} />

      {/* Tech Stack Bento Grid */}
      <section id="tech" className="py-32 px-6 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto">
              <div className="mb-12 flex justify-between items-end border-b-8 border-black pb-4">
                  <h2 className="text-5xl font-black uppercase">Technical Ecosystem</h2>
                  <div className="font-bold uppercase bg-black text-white px-4 py-2 text-sm">Stack v2025</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {/* Large Bento Card */}
                  <div className="md:col-span-2 lg:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-10 flex flex-col justify-between">
                      <div>
                          <i className="ph-bold ph-cube text-6xl text-[#705d00] mb-6 block"></i>
                          <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Frontend Systems</h3>
                          <p className="text-xl text-[#5d5f5f] leading-relaxed">React &amp; Next.js as the foundation — building component-driven UIs that are fast, accessible, and built to scale without breaking.</p>
                      </div>
                      <div className="mt-8 flex gap-4">
                          <span className="border-2 border-black px-4 py-1 font-black text-sm uppercase bg-[#ffd700]">React</span>
                          <span className="border-2 border-black px-4 py-1 font-black text-sm uppercase bg-[#a5f624]">Next.js</span>
                          <span className="border-2 border-black px-4 py-1 font-black text-sm uppercase bg-white">TypeScript</span>
                      </div>
                  </div>
                  
                  {/* Medium Bento Card */}
                  <div className="bg-[#ffd700] border-4 border-black shadow-[8px_8px_0px_#000000] p-10 flex flex-col items-center justify-center text-center">
                      <i className="ph-bold ph-stack text-black text-8xl mb-6"></i>
                      <h3 className="text-4xl font-black uppercase mb-2 tracking-tighter">Backend</h3>
                      <p className="font-bold uppercase text-sm tracking-widest">Node · Laravel · REST</p>
                  </div>

                  {/* Small Icon Grid */}
                  <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-8">
                      <h4 className="font-bold uppercase mb-8 border-b-4 border-black pb-2 text-center tracking-widest text-xs">TOOLBOX</h4>
                      <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                          <div className="flex flex-col items-center">
                              <i className="ph-bold ph-database text-3xl mb-1"></i>
                              <span className="text-[10px] font-black uppercase">PostgreSQL</span>
                          </div>
                          <div className="flex flex-col items-center">
                              <i className="ph-bold ph-terminal-window text-3xl mb-1"></i>
                              <span className="text-[10px] font-black uppercase">Docker</span>
                          </div>
                          <div className="flex flex-col items-center">
                              <i className="ph-bold ph-cloud-arrow-up text-3xl mb-1"></i>
                              <span className="text-[10px] font-black uppercase">AWS / VPS</span>
                          </div>
                          <div className="flex flex-col items-center">
                              <i className="ph-bold ph-git-branch text-3xl mb-1"></i>
                              <span className="text-[10px] font-black uppercase">Git</span>
                          </div>
                      </div>
                  </div>
              </div>

                  {/* Full Width Bottom Bento */}
                  <div className="bg-[#a5f624] border-4 border-black shadow-[8px_8px_0px_#000000] p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
                      <div className="max-w-2xl">
                          <h3 className="text-3xl font-black uppercase mb-2">Architecture First. Always.</h3>
                          <p className="text-black leading-relaxed">I don&apos;t just write features — I design systems. Every project starts with structure: clear data flow, type-safe contracts, and a codebase that the next developer can actually read.</p>
                      </div>
                      <div className="bg-black text-white p-6 border-4 border-white shadow-[4px_4px_0px_#000000] font-lexend text-xl italic font-black whitespace-nowrap">
                          TYPESCRIPT OVER EVERYTHING.
                      </div>
                  </div>
              </div>
          </section>

      {/* Work Showcase Section */}
      <section id="projects" className="py-32 px-6 bg-white border-t-8 border-black">
          <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-4">
                  <h2 className="text-5xl font-black uppercase">Selected Works <span className="bg-black text-[#ffd700] px-2 ml-2">2024–25</span></h2>
                  <Button href="/projects" variant="tertiary" size="md">
                      ALL PROJECTS →
                  </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Project Card 1 */}
                  <div className="border-8 border-black bg-white shadow-[8px_8px_0px_#000000] group overflow-hidden">
                      <div className="h-64 bg-[#a5f624] relative overflow-hidden border-b-8 border-black flex items-center justify-center">
                          <span className="font-lexend font-black text-6xl uppercase text-black opacity-20">SkinCluv</span>
                          <div className="absolute top-4 left-4 bg-[#ffd700] border-4 border-black px-3 py-1 font-bold text-xs uppercase shadow-[4px_4px_0px_#000000]">
                              Mobile App
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-3xl font-black uppercase mb-3">SKINCLUV.ID</h3>
                          <p className="text-[#5d5f5f] mb-6 leading-relaxed">Skincare analytics platform with AI-powered skin assessment, gamified onboarding, and real-time product recommendations. Built with Laravel + Flutter.</p>
                          <div className="flex gap-4 flex-wrap">
                              <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase bg-[#f9f9f9]">Laravel</span>
                              <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase bg-[#f9f9f9]">Flutter</span>
                              <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase bg-[#f9f9f9]">MySQL</span>
                          </div>
                      </div>
                  </div>
                  {/* Project Card 2 */}
                  <div className="border-8 border-black bg-white shadow-[8px_8px_0px_#000000] group overflow-hidden">
                      <div className="h-64 bg-[#ffd700] relative overflow-hidden border-b-8 border-black flex items-center justify-center">
                          <span className="font-lexend font-black text-6xl uppercase text-black opacity-20">MejaDaring</span>
                          <div className="absolute top-4 left-4 bg-[#a5f624] border-4 border-black px-3 py-1 font-bold text-xs uppercase shadow-[4px_4px_0px_#000000]">
                              EdTech
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-3xl font-black uppercase mb-3">MEJADARING.ID</h3>
                          <p className="text-[#5d5f5f] mb-6 leading-relaxed">Online tutoring platform connecting students with verified educators. Features real-time scheduling, payment gateway, and a role-based dashboard system.</p>
                          <div className="flex gap-4 flex-wrap">
                              <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase bg-[#f9f9f9]">Next.js</span>
                              <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase bg-[#f9f9f9]">Laravel</span>
                              <span className="border-2 border-black px-3 py-1 text-xs font-black uppercase bg-[#f9f9f9]">PostgreSQL</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-[#a5f624] text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#ffffff] font-bold uppercase text-sm tracking-widest">
                  Available Now
              </div>
              <h2 className="text-6xl md:text-7xl font-black uppercase mb-8 leading-tight">
                  LET&apos;S BUILD<br />
                  <span className="text-[#ffd700]">SOMETHING REAL.</span>
              </h2>
              <p className="text-xl text-[#e2e2e2] mb-12 max-w-2xl mx-auto leading-relaxed">
                  Currently open for full-time roles and select freelance projects. If you need a developer who cares about architecture as much as delivery — I&apos;m your person.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                      GET IN TOUCH
                  </Button>
                  <Button href="/projects" variant="secondary" size="lg">
                      SEE MY WORK
                  </Button>
              </div>
          </div>
      </section>
    </>
  );
}
