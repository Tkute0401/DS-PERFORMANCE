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
      <header className="relative w-full min-h-[70dvh] md:min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-8 md:pb-12 pt-32">
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
          <div className="px-6 md:px-12 mb-8">
            <div className="inline-block px-4 py-2 border border-white/20 text-xs font-mono uppercase tracking-widest text-zinc-400">
              [ {data.industry} ]
            </div>
          </div>
          
          {/* Edge-to-Edge Typography */}
          <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] uppercase break-words text-white mix-blend-overlay opacity-90 px-4 md:px-8">
            {data.client}
          </h1>
          
          <div className="px-6 md:px-12 mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 border-t border-white/10 pt-6 md:pt-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              {data.heroHeadline}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              {data.heroSubheadline}
            </p>
          </div>
        </div>
      </header>

      {/* Results Banner */}
      <section className="w-full border-y border-white/10 bg-black relative z-10 cs-section">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 w-full">
          {data.results.map((res, i) => (
            <div key={i} className="flex-1 p-8 md:p-24 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
              <span className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-2 md:mb-4">{res.metric}</span>
              <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-zinc-500">{res.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* The Narrative Column (The "Why") */}
      <section className="w-full py-16 md:py-32 px-6 relative z-10 flex justify-center">
        <div className="max-w-3xl w-full cs-section">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-8 md:mb-12">01 / The Situation</h3>
          
          {/* Editorial Drop Cap effect using first-letter */}
          <p className="text-2xl md:text-4xl font-serif leading-relaxed text-zinc-300 mb-12 md:mb-24 first-letter:text-7xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
            {data.overview}
          </p>

          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-8 md:mb-12 border-t border-white/10 pt-8 md:pt-12">02 / The Obstacles</h3>
          <div className="space-y-8 md:space-y-12">
            {data.challenges.map((challenge, i) => (
              <div key={i} className="flex gap-6 md:gap-8 group">
                <span className="text-xl md:text-2xl font-mono text-zinc-700 font-light group-hover:text-zinc-500 transition-colors mt-1">0{i+1}</span>
                <p className="text-lg md:text-3xl font-medium leading-normal text-zinc-300">
                  {/* Premium subtle highlighting */}
                  {challenge.split(' ').map((word, idx) => (
                    (idx === 2 || idx === 5) ? 
                      <span key={idx} className="text-white bg-white/10 px-2 py-0.5 rounded-md mr-1 font-semibold">{word}</span> : 
                      <span key={idx} className="mr-1">{word}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Brutalist Timeline (The "How") */}
      <section className="w-full py-16 md:py-32 bg-zinc-950 border-t border-white/10 relative z-10 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-12 md:mb-24 cs-section">03 / The Execution</h3>
          
          <div className="flex flex-col border-t border-white/10">
            {data.strategy.map((strategy, i) => (
              <div key={i} className="relative py-12 md:py-24 border-b border-white/10 cs-section group hover:bg-white/[0.02] transition-colors overflow-hidden">
                {/* Background Number */}
                <span className="absolute -top-4 md:-top-10 -left-4 md:-left-10 text-[10rem] md:text-[18rem] font-black tracking-tighter text-white/[0.03] leading-none select-none z-0 group-hover:text-white/[0.06] transition-colors pointer-events-none">
                  0{i+1}
                </span>
                
                <div className="relative z-10 flex flex-col justify-center max-w-4xl pt-8 md:pt-16">
                  <h4 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 md:mb-8">
                    {strategy.title}
                  </h4>
                  <p className="text-lg md:text-2xl lg:text-3xl text-zinc-400 font-light leading-relaxed">
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
        <section className="w-full min-h-[50vh] md:min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-12 bg-black relative z-10 overflow-hidden">
          <div className="max-w-5xl w-full text-center cs-section relative">
            {/* Massive quotation marks in background */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-serif text-white/[0.03] leading-none pointer-events-none">"</span>
            
            <p className="text-2xl md:text-5xl lg:text-7xl leading-[1.3] md:leading-[1.1] font-medium tracking-tight text-zinc-300 mb-12 md:mb-16 relative z-10 break-words max-w-4xl mx-auto">
              {data.testimonial.quote}
            </p>
            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="w-12 h-px bg-zinc-700" />
              <span className="text-xs md:text-base uppercase font-mono tracking-widest text-zinc-500 font-bold">
                {data.testimonial.author}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Teaser (Footer area) */}
      <section className="w-full py-24 md:py-48 flex flex-col items-center justify-center border-t border-white/10 bg-black relative z-10 cs-section overflow-hidden">
        <span className="text-zinc-500 font-mono uppercase tracking-widest text-sm mb-8 md:mb-12">System Ready</span>
        <Link href="/" className="relative group w-full px-4">
          <span className="text-4xl md:text-9xl font-black tracking-tighter text-white text-center block break-words">
            START A PROJECT
          </span>
          {/* Slash over text effect on hover */}
          <div className="absolute inset-0 bg-white scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] flex items-center justify-center">
            <span className="text-4xl md:text-9xl font-black tracking-tighter text-black text-center block break-words">
              START A PROJECT
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
