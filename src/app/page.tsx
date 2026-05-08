import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto z-10">
              <div className="inline-block bg-[#a5f624] text-black border-4 border-black px-4 py-2 mb-8 shadow-[4px_4px_0px_#000000] font-bold uppercase text-sm">
                  Available for freelance
              </div>
              <h1 className="font-lexend font-black text-6xl md:text-8xl text-black uppercase mb-8 leading-[1.1] tracking-tighter">
                  HI, I'M A <span className="bg-[#ffd700] px-4">WEB DEVELOPER</span>
              </h1>
              <p className="font-body-lg text-xl text-[#5d5f5f] max-w-2xl mx-auto mb-12">
                  I build robust, high-performance web applications with a focus on structural integrity and distinctive aesthetic choices. No fluff. Just clean code and loud design.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                  <Button href="#projects" variant="primary" size="lg">
                      VIEW MY WORK
                  </Button>
                  <Button href="#tech" variant="tertiary" size="lg">
                      MY STACK
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
                  <h2 className="text-5xl font-black uppercase">Tech Ecosystem</h2>
                  <div className="font-bold uppercase bg-black text-white px-4 py-2 text-sm">Standardized V1.0</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {/* Large Bento Card */}
                  <div className="md:col-span-2 lg:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-8 flex flex-col justify-between">
                      <div>
                          <span className="material-symbols-outlined text-6xl text-[#705d00] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
                          <h3 className="text-3xl font-black uppercase mb-4">Core Frameworks</h3>
                          <p className="text-[#5d5f5f]">Specializing in React and Next.js for building scalable, component-based architectures that prioritize performance and developer experience.</p>
                      </div>
                      <div className="mt-8 flex gap-4">
                          <span className="border-2 border-black px-3 py-1 font-bold text-xs uppercase bg-[#ffd700]">React</span>
                          <span className="border-2 border-black px-3 py-1 font-bold text-xs uppercase bg-[#a5f624]">Next.js</span>
                      </div>
                  </div>
                  
                  {/* Medium Bento Card */}
                  <div className="bg-[#ffd700] border-4 border-black shadow-[8px_8px_0px_#000000] p-8 flex flex-col items-center justify-center text-center">
                      <span className="material-symbols-outlined text-7xl text-black mb-4">palette</span>
                      <h3 className="text-3xl font-black uppercase mb-2">Tailwind</h3>
                      <p className="font-bold uppercase text-sm">Utility-first styling</p>
                  </div>

                  {/* Small Icon Grid */}
                  <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-8">
                      <h4 className="font-bold uppercase mb-6 border-b-4 border-black pb-2">Toolbox</h4>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-3xl mb-1">javascript</span>
                              <span className="text-[10px] font-bold">NODE.JS</span>
                          </div>
                          <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-3xl mb-1">database</span>
                              <span className="text-[10px] font-bold">PRISMA</span>
                          </div>
                          <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-3xl mb-1">terminal</span>
                              <span className="text-[10px] font-bold">DOCKER</span>
                          </div>
                          <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-3xl mb-1">cloud</span>
                              <span className="text-[10px] font-bold">AWS</span>
                          </div>
                      </div>
                  </div>

                  {/* Full Width Bottom Bento */}
                  <div className="md:col-span-3 lg:col-span-4 bg-[#a5f624] border-4 border-black shadow-[8px_8px_0px_#000000] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="max-w-2xl">
                          <h3 className="text-3xl font-black uppercase mb-2">Architecture First</h3>
                          <p className="text-black">I don't just write code; I design systems. My focus is on creating maintainable, documented, and type-safe codebases using TypeScript and rigorous testing patterns.</p>
                      </div>
                      <div className="bg-black text-white p-6 border-4 border-white shadow-[4px_4px_0px_#000000] font-lexend text-xl italic font-black">
                          TYPESCRIPT OVER EVERYTHING.
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Work Showcase Section */}
      <section id="projects" className="py-32 px-6 bg-white border-t-8 border-black">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-black uppercase mb-16 text-center lg:text-left">Selected Works <span className="bg-black text-[#ffd700] px-2 ml-2">2023-24</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Project Card 1 */}
                  <div className="border-8 border-black bg-white shadow-[8px_8px_0px_#000000] group overflow-hidden">
                      <div className="h-80 bg-[#e2e2e2] relative overflow-hidden border-b-8 border-black">
                          <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoTiV-V4IHdDGSZhG0NtPXMkfdkohMHh2l2-mdFHHSZZo0c09HJdOErl3-DGndLCu7joJ0BvRaB_rcvSt0cAfF25QW5yiqFi7QZdCczHZLlfy-X7XVjXNQ79sjQyDhqostoNKGg5zjfhBLjQN2k7pKCNYmHMRb13h7rLOYqTjChwakJAo6xmIzfK8Jo0jvl4s9n8ZccgIW8OndUYC3V1e8O_KcGf7Ujyz2C5a9pBhdsm5nxzOT9a7Ljf5g9BvRLSboO9fxCAQ2tWyw" alt="Neo-Ledger"/>
                          <div className="absolute top-4 left-4 bg-[#ffd700] border-4 border-black px-3 py-1 font-bold text-xs uppercase shadow-[4px_4px_0px_#000000]">
                              FINTECH
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-3xl font-black uppercase mb-4">NEO-LEDGER</h3>
                          <p className="text-[#5d5f5f] mb-6">A high-frequency trading dashboard designed for real-time visualization of complex financial datasets with sub-100ms latency.</p>
                          <div className="flex gap-4">
                              <a className="font-bold uppercase underline underline-offset-4 decoration-4 hover:text-[#705d00] transition-colors" href="/projects/neo-ledger">Case Study</a>
                              <a className="font-bold uppercase underline underline-offset-4 decoration-4 hover:text-[#705d00] transition-colors" href="#">Live Demo</a>
                          </div>
                      </div>
                  </div>
                  {/* Project Card 2 */}
                  <div className="border-8 border-black bg-white shadow-[8px_8px_0px_#000000] group overflow-hidden">
                      <div className="h-80 bg-[#e2e2e2] relative overflow-hidden border-b-8 border-black">
                          <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2KtNuu7v1qvY2llAc_yIc6yM5NhhOj0Gpbup84Sv56L-6VpL10woWVYzcLqmgTHX8-impzL7G_i9ZKmrEiCULaPFIVCj3D0Ru0C6sY_Vgi0bHBJEJLcpaSqrk1ldAeUBPqLOSKVmngipzXCQfKXJx6wFvAnpzMJHZ_6-Ms_eJYJ7GJPdnAayoaIoJA6R28PyZBSrjs8Wsc8SWdK74S1aZutRdd_1jP4jPoM97nDFZNZtT6oA_my6m-RvvVLIfcZzXeaOQYLCpmJu2" alt="Brutalist UI Kit"/>
                          <div className="absolute top-4 left-4 bg-[#a5f624] border-4 border-black px-3 py-1 font-bold text-xs uppercase shadow-[4px_4px_0px_#000000]">
                              UI KIT
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-3xl font-black uppercase mb-4">BRUTALIST UI KIT</h3>
                          <p className="text-[#5d5f5f] mb-6">A collection of 50+ neobrutalist components for Figma and Webflow, designed for high-impact landing pages and technical interfaces.</p>
                          <div className="flex gap-4">
                              <a className="font-bold uppercase underline underline-offset-4 decoration-4 hover:text-[#705d00] transition-colors" href="/projects/brutalist-ui-kit">Case Study</a>
                              <a className="font-bold uppercase underline underline-offset-4 decoration-4 hover:text-[#705d00] transition-colors" href="#">Live Demo</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-7xl font-black uppercase mb-8">Ready to Build?</h2>
              <p className="text-xl text-[#e2e2e2] mb-12">I'm currently taking on new projects for Q3 and Q4. If you have a vision that requires precision and a bold visual voice, let's talk.</p>
              <div className="flex justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                      GET IN TOUCH
                  </Button>
              </div>
          </div>
      </section>
    </>
  );
}
