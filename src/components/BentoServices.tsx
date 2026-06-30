"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Category = "full" | "ecom" | "edtech";

const categories = [
  { id: "full", label: "The Engine" },
  { id: "ecom", label: "E-Commerce" },
  { id: "edtech", label: "Ed-Tech & B2B" },
] as const;

const servicesData = {
  full: [
    { title: "Paid Media", desc: "Meta, Google, & LinkedIn Capital Deployment." },
    { title: "Data & Analytics", desc: "Server-side tracking matrices." },
    { title: "Copywriting", desc: "Direct response persuasion engineering." },
    { title: "Web Design & CRO", desc: "High-velocity, high-conversion pages." },
    { title: "SEO Strategy", desc: "Organic search dominance & intent capture." },
    { title: "Email & SMS", desc: "Lifecycle automation & retention architecture." },
  ],
  ecom: [
    { title: "DTC Growth Scaling", desc: "Margin-focused capital deployment for physical products." },
    { title: "Catalog & Feed Mgmt", desc: "Algorithmic product visibility & optimization." },
    { title: "Storefront CRO", desc: "Frictionless checkout flows & speed optimization." },
    { title: "LTV Maximization", desc: "Advanced cohort reactivation & retention strategies." },
    { title: "Social Commerce", desc: "TikTok Shop & native platform social selling." },
  ],
  edtech: [
    { title: "High-Ticket Lead Gen", desc: "Automated pipeline engineering for premium programs." },
    { title: "Webinar Funnels", desc: "High-velocity automated sales events." },
    { title: "VSL Engineering", desc: "Video Sales Letters that convert cold traffic." },
    { title: "Community Growth", desc: "Scaling paid groups (Skool, Discord) via ads." },
    { title: "Appointment Setting", desc: "CRM integrations & setter team infrastructures." },
  ]
};

export default function BentoServices() {
  const [activeCategory, setActiveCategory] = useState<Category>("full");
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: containerRef.current, start: "top 85%" } }
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        pin: pinRef.current,
        scrub: 1,
        refreshPriority: 2,
      }
    });

    // Initial state
    gsap.set(contentRef.current, { y: 100, opacity: 0, scale: 0.95 });

    // Pinning entrance animation
    tl.to(contentRef.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" })
      .to({}, { duration: 1 }); // buffer for scrolling while pinned

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="w-full bg-zinc-950 relative">
      <div ref={pinRef} className="w-full min-h-[100dvh] flex items-center justify-center px-4 md:px-8 lg:px-12 overflow-hidden py-24 lg:py-0">
        
        <div ref={contentRef} className="max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0 relative z-10">
          
          {/* Left Side: Massive Typography Menu */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <h2 className="text-xs md:text-sm font-mono text-red-500 mb-6 lg:mb-10 uppercase tracking-[0.3em] flex items-center gap-4">
              <span className="w-8 h-px bg-red-500" />
              Infrastructure
            </h2>
            <nav className="flex flex-col gap-4 lg:gap-6">
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setActiveCategory(cat.id as Category);
                  }}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={cn(
                    "text-left text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black uppercase transition-all duration-300 tracking-tighter leading-[0.85]",
                    activeCategory === cat.id 
                      ? "text-white scale-100 origin-left" 
                      : "text-white/10 hover:text-white/30 scale-95 origin-left"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side: Brutalist Data Table */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center lg:pl-16 xl:pl-24 lg:border-l border-white/10 relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col w-full"
              >
                <div className="flex flex-col border-t border-white/10">
                  {servicesData[activeCategory].map((service, i) => (
                    <div 
                      key={service.title} 
                      className="group border-b border-white/10 py-5 lg:py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-6 hover:bg-white/[0.02] transition-colors px-2 -mx-2"
                    >
                      <div className="flex flex-col gap-1 lg:gap-2">
                        <h3 className="text-xl lg:text-3xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-white/40 font-mono text-[10px] lg:text-xs uppercase tracking-widest">
                          {service.desc}
                        </p>
                      </div>
                      <div className="text-white/10 font-mono text-sm lg:text-base font-bold hidden sm:block group-hover:text-red-500/50 transition-colors">
                        /0{i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Visual Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[100px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
