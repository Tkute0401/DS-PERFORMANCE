"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";

const CASE_STUDIES = [
  {
    client: "Finanthropist",
    slug: "finanthropist",
    industry: "Finance",
    metric: "2X",
    label: "Course Conversions",
    description: "Scaled lead generation funnels while reducing customer acquisition costs by 50%.",
    // Data points for the animated chart
    chartPath: "M -100,250 C 100,250 200,200 300,220 C 400,240 500,100 600,120 C 700,140 800,50 1100,0"
  },
  {
    client: "Code Hub India",
    slug: "codehub",
    industry: "EdTech",
    metric: "120%",
    label: "Admissions",
    description: "High-ticket enrollment sales driven through hyper-targeted paid media.",
    chartPath: "M -100,280 L 200,250 L 400,270 L 600,120 L 800,150 L 1100,0"
  },
  {
    client: "Trading Monk",
    slug: "trading-monk",
    industry: "Trading / Edu",
    metric: "3X",
    label: "Business Growth",
    description: "Optimized conversion rate architecture for course enrollments.",
    chartPath: "M -100,280 C 300,280 400,80 1100,0"
  },
  {
    client: "Sarvital",
    slug: "sarvital",
    industry: "D2C E-commerce",
    metric: "3.5x",
    label: "ROAS Maintained",
    description: "Scaled D2C health supplement sales with high-converting paid media and retention funnels.",
    chartPath: "M -100,260 C 150,280 250,220 400,230 C 600,240 750,80 1100,0"
  }
];

export default function CaseStudies() {
  return (
    <section className="relative w-full bg-zinc-950 text-white py-16 md:py-32 px-4 md:px-12 flex flex-col items-center">
      
      {/* Massive Background Typography Watermark */}
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none overflow-hidden mix-blend-overlay opacity-5">
        <h2 className="text-[clamp(10rem,25vw,30rem)] font-black tracking-tighter leading-none whitespace-nowrap">
          RESULTS
        </h2>
      </div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col">
        
        <div className="sticky top-12 md:top-24 z-20 mb-8 md:mb-16 pointer-events-none drop-shadow-xl">
          <p className="font-mono text-sm tracking-widest text-zinc-500 uppercase mb-2 md:mb-4">Phase 03</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mix-blend-difference text-white">
            THE ARCHIVE.
          </h2>
        </div>

        {/* Sticky Stack Container */}
        <div className="relative w-full flex flex-col gap-4 md:gap-8 pb-32">
          {CASE_STUDIES.map((study, idx) => (
            <Link
              href={`/case-studies/${study.slug}`}
              key={idx}
              className="sticky block w-full outline-none"
              // The sticky logic: top offset starts below the title and increases for each card
              style={{ top: `calc(15vh + ${idx * 20}px)` }}
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                className="group w-full h-[55vh] md:h-[65vh] min-h-[400px] md:min-h-[500px] max-h-[800px] bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20"
              >
                
                {/* Background Data-Viz Animation (Always Visible Loop) */}
                <div className="absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none flex items-center justify-center opacity-40 group-hover:opacity-100">
                  {/* Subtle grid background to look like a chart interface */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  
                  <svg className="w-full h-full absolute bottom-0 left-0" viewBox="0 0 1000 300" preserveAspectRatio="none">
                    {/* Glowing blur line */}
                    <motion.path
                      d={study.chartPath}
                      fill="none"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="16"
                      filter="blur(12px)"
                      animate={{ 
                        pathLength: [0, 1, 1, 0], 
                        opacity: [0, 1, 0.5, 0] 
                      }}
                      transition={{ 
                        duration: 4, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        delay: idx * 0.5 // Stagger the animation across cards
                      }}
                    />
                    {/* Sharp core line */}
                    <motion.path
                      d={study.chartPath}
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      animate={{ 
                        pathLength: [0, 1, 1, 0], 
                        opacity: [0, 1, 0.5, 0] 
                      }}
                      transition={{ 
                        duration: 4, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        delay: idx * 0.5
                      }}
                    />
                  </svg>

                  {/* Dark gradient fade at the bottom so text stays legible */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
                </div>

                {/* Card Content Header */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-zinc-500 mb-2">{study.industry}</p>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">{study.client}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0 mt-auto">
                  <p className="text-lg md:text-xl font-medium tracking-tight text-zinc-400 max-w-sm group-hover:text-zinc-200 transition-colors duration-500">
                    {study.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2 md:gap-4">
                    <span className="text-5xl md:text-8xl font-black tracking-tighter leading-none">{study.metric}</span>
                    <span className="text-xs md:text-base font-mono uppercase font-bold tracking-widest text-zinc-500">{study.label}</span>
                  </div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
