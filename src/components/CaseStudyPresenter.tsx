"use client";

import { useRef } from "react";
import { CaseStudy } from "@/lib/case-studies-data";
import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyPresenter({ data }: { data: CaseStudy }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Parallax Hero Image (Extremely Dark/Aggressive)
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Fade up sections
    const sections = gsap.utils.toArray(".cs-section");
    sections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-zinc-950 text-zinc-200 w-full overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white">
        <Link href="/" className="inline-flex items-center gap-4 group hover:opacity-70 transition-opacity">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:-translate-x-2 transition-transform bg-black/20 backdrop-blur-md">
            <ArrowLeft weight="bold" size={20} />
          </div>
          <span className="uppercase tracking-[0.3em] text-xs font-bold font-mono">Archive / Back</span>
        </Link>
      </nav>

      {/* Hero Section - Aggressive Typography */}
      <header className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-12 pt-32">
        <div className="absolute inset-0 z-0 bg-black pointer-events-none">
          <img 
            ref={heroImageRef}
            src={data.image} 
            alt={data.client} 
            className="w-full h-[120%] object-cover opacity-20 grayscale mix-blend-luminosity contrast-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full cs-section">
          {/* Industry Tag */}
          <div className="px-4 md:px-12 mb-8">
            <div className="inline-flex items-center gap-3 border border-white/20 bg-black/40 backdrop-blur-sm px-4 py-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
                {data.industry}
              </span>
            </div>
          </div>
          
          {/* Edge-to-Edge Typography */}
          <h1 className="text-[14vw] md:text-[12vw] font-black tracking-[-0.04em] leading-[0.8] uppercase whitespace-nowrap overflow-hidden text-white mix-blend-overlay opacity-90 px-4 md:px-8">
            {data.client}
          </h1>
          
          <div className="px-4 md:px-12 mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-8 md:pt-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] uppercase text-white leading-[0.9]">
              {data.heroHeadline}
            </h2>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed">
              {data.heroSubheadline}
            </p>
          </div>
        </div>
      </header>

      {/* Results Banner (Brutalist Data Grid) */}
      <section className="w-full border-y border-white/10 bg-black relative z-10 cs-section">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          {data.results.map((res, i) => (
            <div key={i} className="flex-1 p-12 md:p-24 flex flex-col items-start justify-between min-h-[30vh] group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-12">System Metric 0{i+1}</span>
              <div>
                <span className="block text-7xl md:text-[8vw] font-black tracking-[-0.04em] text-white mb-2 leading-[0.8]">{res.metric}</span>
                <span className="text-sm md:text-lg font-medium text-zinc-400 uppercase tracking-tight">{res.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Narrative Column (The "Why") & The Obstacles */}
      <section className="w-full py-24 md:py-48 px-4 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 border-b border-white/10 bg-zinc-950">
        <div className="md:w-1/2 cs-section">
          <div className="md:sticky md:top-32">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-500 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-red-500/50" />
              01 / The Situation
            </h3>
            <p className="text-4xl md:text-5xl lg:text-[4.5vw] font-black tracking-[-0.03em] leading-[0.9] text-white uppercase">
              {data.overview}
            </p>
          </div>
        </div>

        <div className="md:w-1/2 cs-section flex flex-col gap-12 md:gap-24">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-500 flex items-center gap-4">
            <span className="w-8 h-px bg-red-500/50" />
            02 / The Obstacles
          </h3>
          <div className="flex flex-col gap-12 md:gap-24">
            {data.challenges.map((challenge, i) => (
              <div key={i} className="flex flex-col gap-4 border-l-2 border-white/10 pl-6 md:pl-12 relative group">
                <div className="absolute -left-[2px] top-0 w-[2px] h-0 bg-red-500 group-hover:h-full transition-all duration-700" />
                <span className="text-7xl md:text-[8vw] font-black text-white/[0.03] leading-none absolute -top-8 -left-6 md:-left-12 pointer-events-none transition-colors group-hover:text-white/[0.08]">
                  0{i+1}
                </span>
                <p className="text-2xl md:text-4xl font-medium leading-[1.1] text-zinc-300 relative z-10 tracking-tight">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Brutalist Timeline (The "How") */}
      <section className="w-full py-24 md:py-48 bg-black relative z-10">
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-500 mb-16 flex items-center gap-4 cs-section">
            <span className="w-8 h-px bg-red-500/50" />
            03 / The Execution
          </h3>
          
          <div className="flex flex-col">
            {data.strategy.map((strategy, i) => (
              <div key={i} className="flex flex-col lg:flex-row border-t border-white/10 cs-section group">
                <div className="lg:w-1/3 py-12 md:py-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pr-0 lg:pr-12 group-hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-red-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-8 md:mb-16">Phase 0{i+1}</span>
                  <h4 className="text-4xl md:text-[5vw] font-black tracking-[-0.04em] uppercase text-white leading-[0.85]">
                    {strategy.title}
                  </h4>
                </div>
                <div className="lg:w-2/3 py-12 md:py-24 pl-0 lg:pl-12 md:pr-12 flex items-center group-hover:bg-white/[0.02] transition-colors">
                  <p className="text-2xl md:text-[3vw] text-zinc-400 font-medium leading-[1.1] tracking-tight uppercase">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Psychological Testimonial */}
      {data.testimonial && (
        <section className="w-full min-h-[80vh] flex items-center justify-center py-32 px-4 md:px-12 bg-zinc-950 border-t border-white/10 relative z-10 overflow-hidden">
          <div className="max-w-[1400px] w-full cs-section relative flex flex-col items-center">
            {/* Massive quotation marks in background */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] md:text-[30vw] font-black tracking-tighter text-white/[0.02] leading-none pointer-events-none select-none">"</span>
            
            <p className="text-3xl md:text-[5vw] leading-[1.0] font-black tracking-[-0.04em] text-white uppercase text-center mb-16 relative z-10 max-w-5xl">
              {data.testimonial.quote}
            </p>
            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="w-12 h-1 bg-red-500" />
              <span className="text-xs md:text-sm uppercase font-mono tracking-[0.2em] text-zinc-400">
                {data.testimonial.author}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Teaser (Footer area) */}
      <section className="w-full py-32 md:py-48 flex flex-col items-center justify-center border-t border-white/10 bg-black relative z-10 cs-section overflow-hidden">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-zinc-500 font-mono uppercase tracking-[0.2em] text-[10px]">System Ready For Deployment</span>
        </div>
        <Link href="/" className="relative group w-full text-center">
          <span className="block text-[15vw] md:text-[12vw] font-black tracking-[-0.05em] leading-[0.8] text-white px-4">
            START A
            <br />
            PROJECT
          </span>
          {/* Slash over text effect on hover */}
          <div className="absolute inset-0 bg-white scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] flex items-center justify-center mix-blend-difference pointer-events-none">
          </div>
        </Link>
      </section>
    </div>
  );
}
