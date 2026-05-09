import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - KANGJESSY DEV",
  description:
    "Learn more about Jessy, a Full-Stack Developer specializing in Web Systems and Architecture.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto border-x-8 border-black bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row border-b-8 border-black">
        <div className="flex-[2] p-12 flex flex-col justify-center border-b-8 md:border-b-0 md:border-r-8 border-black bg-white">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.9] tracking-tighter">
            Real Systems.{" "}
            <span className="bg-[#ffd700] px-4 shadow-[6px_6px_0px_#000000] border-4 border-black inline-block -rotate-1 text-black">
              Real Results.
            </span>
          </h1>
          <p className="font-lexend text-xl text-[#000000] max-w-2xl mb-12">
            I am a Full-Stack Developer — Web Systems & Architecture. I build
            web systems that actually work for the business, not just for the
            demo. My approach → understand the problem first, then architect the
            solution.
          </p>
          <div className="flex gap-4">
            <Button href="/resume" variant="primary" size="lg">
              VIEW RESUME
            </Button>
            <Button href="/contact" variant="tertiary" size="lg">
              LET&apos;S TALK
            </Button>
          </div>
        </div>
        <div className="flex-1 min-h-[400px] bg-[#ffd700] relative group overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
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
            <i className="ph-bold ph-scroll text-5xl bg-black text-[#adff2f] p-4 border-4 border-black shadow-[4px_4px_0px_#adff2f]"></i>
            <h2 className="text-5xl font-black uppercase">Technical Journey</h2>
          </div>

          <div className="space-y-12">
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_#000000] bg-white">
              <h3 className="text-3xl font-black mb-4 uppercase">
                The Genesis
              </h3>
              <p className="text-lg leading-relaxed text-[#000000]">
                It started with curiosity about how digital systems actually
                move businesses. From IT support at a hotel and a bank — where I
                saw firsthand what breaks and why — to building full systems
                from scratch as a freelancer. Every layer taught me something
                the next one needed.
              </p>
            </div>
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_#000000] bg-[#adff2f]">
              <h3 className="text-3xl font-black mb-4 uppercase">
                The Evolution
              </h3>
              <p className="text-lg leading-relaxed text-black">
                Transitioning into independent work, I realized the most
                valuable thing isn&apos;t writing code — it&apos;s knowing what
                to build and why. I now focus on bridging business needs with
                solid technical architecture, so the system outlasts the
                project.
              </p>
            </div>
          </div>
        </div>

        {/* Arsenal */}
        <div className="flex-1 p-12 bg-[#eeeeee]">
          <h2 className="text-4xl font-black uppercase mb-12">The Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "FULL-STACK DEV",
              "SYSTEM ARCHITECTURE",
              "VUE / NUXT",
              "LARAVEL",
              "FILAMENT",
              "MYSQL",
              "GOOGLE APPS SCRIPT",
              "AI INTEGRATION",
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-2 border-4 border-black bg-white font-black uppercase shadow-[4px_4px_0px_#000000]"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 border-4 border-black bg-black text-white shadow-[8px_8px_0px_#ffd700]">
            <p className="font-bold uppercase tracking-widest text-sm mb-4 text-[#adff2f]">
              Current Focus
            </p>
            <p className="text-2xl font-bold italic text-[#ffd700]">
              &quot;Building AI-integrated web systems for real business
              problems — currently developing a skincare SaaS with a dual-AI
              pipeline.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="p-12">
        <h2 className="text-5xl font-black uppercase mb-16 flex items-center gap-6 text-black">
          <i className="ph-bold ph-briefcase text-5xl"></i>
          History &amp; Milestones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_#000000] transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase mb-4 inline-block">
                  2022 – PRESENT
                </span>
                <h3 className="text-4xl font-black uppercase mb-2 text-black">
                  FULL-STACK DEVELOPER
                </h3>
                <p className="font-bold text-[#000000] uppercase tracking-wider">
                  KANGJESSY — INDEPENDENT STUDIO
                </p>
              </div>
              <i className="ph-bold ph-terminal-window text-6xl text-black group-hover:rotate-12 transition-transform"></i>
            </div>
            <p className="text-lg leading-relaxed text-[#000000]">
              Building end-to-end web systems for UMKM and hospitality
              businesses. From architecture to deployment, handled solo.
            </p>
          </div>

          <div className="border-4 border-black p-8 bg-[#ffd700] shadow-[8px_8px_0px_#000000]">
            <div className="mb-8 text-black">
              <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase mb-4 inline-block">
                2021 – 2022
              </span>
              <h3 className="text-3xl font-black uppercase mb-2">IT SUPPORT</h3>
              <p className="font-bold uppercase tracking-wider">
                NUR ALAM HOTEL LEMBANG
              </p>
            </div>
            <p className="text-lg leading-relaxed text-black">
              Managed full IT infrastructure — network, reservation systems, and
              cross-department technical support.
            </p>
          </div>

          <div className="border-4 border-black p-8 bg-[#adff2f] shadow-[8px_8px_0px_#000000]">
            <div className="mb-8 text-black">
              <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase mb-4 inline-block">
                2020 – 2021
              </span>
              <h3 className="text-3xl font-black uppercase mb-2">IT SUPPORT</h3>
              <p className="font-bold uppercase tracking-wider">
                BANK USAHA RAKYAT
              </p>
            </div>
            <p className="text-lg leading-relaxed text-black">
              Maintained core banking systems, user access management, and
              branch-level technical operations.
            </p>
          </div>

          <div className="md:col-span-2 border-4 border-black p-8 bg-white shadow-[8px_8px_0px_#000000]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-4xl font-black mb-8 uppercase italic border-b-4 border-black pb-2 text-black">
                  Continuous Learning
                </h3>
                <div className="space-y-6">
                  {[
                    { id: "01", title: "AI INTEGRATION & LLM APPLICATION" },
                    { id: "02", title: "WEB SYSTEMS ARCHITECTURE" },
                    { id: "03", title: "PRODUCT DEVELOPMENT SAAS" },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-6 border-b-2 border-black pb-4 hover:bg-[#eeeeee] transition-colors px-2 text-black"
                    >
                      <span className="font-black text-3xl font-lexend">
                        {item.id}
                      </span>
                      <span className="font-bold uppercase text-lg">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-black border-4 border-black shadow-[4px_4px_0px_#000000] overflow-hidden p-2">
                <img
                  className="w-full h-full object-cover grayscale"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                  alt="Microchip / Technology"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="h-16 w-full bg-[#ffd700] border-y-8 border-black flex items-center overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex">
          <span className="font-black uppercase text-2xl px-12 text-black">
            DESIGN • CODE • SHIP • REPEAT • ARCHITECT • DEPLOY • SCALE •
            OPTIMIZE •
          </span>
          <span className="font-black uppercase text-2xl px-12 text-black">
            DESIGN • CODE • SHIP • REPEAT • ARCHITECT • DEPLOY • SCALE •
            OPTIMIZE •
          </span>
        </div>
      </div>
    </div>
  );
}
