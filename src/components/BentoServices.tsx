"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Target, ShareNetwork, Desktop, Magnet, PresentationChart, ArrowDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Card = ({ children, className, cardRef }: { children: React.ReactNode, className?: string, cardRef?: React.RefObject<HTMLDivElement | null> }) => (
  <div
    ref={cardRef}
    className={cn(
      "bento-card relative rounded-3xl lg:rounded-[2rem] bg-zinc-950 border border-white/10 p-6 lg:p-8 overflow-hidden group will-change-transform shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
      className
    )}
  >
    {/* Inner shadow/glow effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

export default function BentoServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const cards = gsap.utils.toArray(".bento-card");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000", // scroll distance for the pin
        pin: pinRef.current,
        scrub: 1, // smooth elastic scrub
        refreshPriority: 2, // Fixes order of calculations with CaseStudies
      }
    });

    // Initially position cards out of view, stretched
    gsap.set(cards, { y: window.innerHeight, scaleY: 1.5, scaleX: 0.9, opacity: 0 });

    // Title shrinks slightly
    tl.to(titleRef.current, { scale: 0.8, opacity: 0.3, y: -50, duration: 1 })
    
    // Cards slam in sequentially representing the funnel flow
    .to(cards, {
      y: 0,
      scaleY: 1,
      scaleX: 1,
      opacity: 1,
      stagger: 0.15,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)"
    }, "<");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="w-full bg-zinc-950 relative">
      {/* Pinned Container */}
      <div ref={pinRef} className="w-full h-[100dvh] flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto relative flex flex-col h-full py-6 lg:py-12">
          
          <div className="mb-4 mt-2 lg:mt-6 flex-shrink-0 relative z-20">
            <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase origin-left">
              THE PERFORMANCE <br /> <span className="text-white/30">ENGINE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4 grid-flow-row w-full flex-1 min-h-0 pb-4 relative">
            
            {/* Visual Funnel Connection Lines (Desktop only) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
               {/* Line from Traffic to Capture */}
               <motion.div 
                 animate={{ opacity: [0.1, 0.5, 0.1] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute top-[30%] left-[33%] w-[34%] h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0" 
               />
               {/* Vertical line down to Close */}
               <motion.div 
                 animate={{ opacity: [0.1, 0.5, 0.1] }}
                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                 className="absolute top-[63%] left-1/2 w-px h-[10%] bg-gradient-to-b from-white/30 to-white/0" 
               />
            </div>

            {/* LEVEL 1: TRAFFIC (Top of Funnel) */}
            
            <Card className="md:col-span-2">
              <div className="flex justify-between items-start mb-4 lg:mb-6">
                <div className="p-3 lg:p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Target weight="duotone" className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider text-white/50">
                  TOP LEVEL: ATTENTION
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 leading-tight">Meta & Google Ads</h3>
                <p className="text-white/60 text-sm lg:text-lg max-w-md leading-snug">
                  Precision capital deployment. We buy attention at a discount and sell it at a premium.
                </p>
              </div>

              <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-30 pointer-events-none">
                <div className="w-full h-full border-t border-l border-white/20 rounded-tl-full translate-x-12 translate-y-12 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 duration-700" />
              </div>
            </Card>

            <Card>
              <div className="p-3 lg:p-4 bg-white/5 border border-white/10 rounded-2xl w-fit mb-4 lg:mb-6 relative z-10">
                <ShareNetwork weight="duotone" className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              
              <div className="absolute inset-x-8 bottom-0 top-1/4 flex items-end gap-2 opacity-10 pointer-events-none z-0">
                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [`${h}%`, `${h * 0.8}%`, `${h}%`] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="flex-1 bg-white rounded-t-sm origin-bottom"
                  />
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1 leading-tight">Social Media</h3>
                <p className="text-white/60 text-sm">Organic algorithmic leverage.</p>
              </div>
            </Card>

            {/* LEVEL 2: CAPTURE (Middle of Funnel) */}
            
            <Card>
              <div className="p-3 lg:p-4 bg-white/5 border border-white/10 rounded-2xl w-fit mb-4 lg:mb-6 relative z-10">
                <Desktop weight="duotone" className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex flex-col justify-center opacity-30 pointer-events-none z-0">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent relative">
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-white shadow-[0_0_10px_#fff]"
                  />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1 leading-tight">Web Design</h3>
                <p className="text-white/60 text-sm">Conversion architecture.</p>
              </div>
            </Card>

            <Card className="md:col-span-2">
              <div className="flex justify-between items-start mb-4 lg:mb-6 relative z-10">
                <div className="p-3 lg:p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <Magnet weight="duotone" className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider text-white/50">
                  MID LEVEL: INTENT
                </div>
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 md:translate-x-0 md:right-12 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                <div className="relative w-32 h-32 md:w-48 md:h-48">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-dashed border-white rounded-full" />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-white rounded-full" />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-1 lg:mb-2 leading-tight">Lead Generation</h3>
                <p className="text-white/60 text-sm lg:text-lg max-w-md leading-snug">
                  Uncapped acquisition systems designed to monopolize market share.
                </p>
              </div>
            </Card>

            {/* LEVEL 3: CLOSE (Bottom of Funnel) */}
            
            <Card className="md:col-span-3 bg-gradient-to-b from-zinc-950 to-white/5 border-white/20 shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 lg:mb-4 relative z-10">
                <div className="p-3 lg:p-4 bg-white text-black rounded-2xl mb-4 md:mb-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <PresentationChart weight="fill" className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider">
                  <ArrowDown weight="bold" className="w-3 h-3 animate-bounce" />
                  BOTTOM LEVEL: CLOSE
                </div>
              </div>
              
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://asset.eyecannndy.com/media/clip/2024/02/15/261707976419.webp')] bg-cover bg-center pointer-events-none mix-blend-screen" />

              <div className="mt-auto relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <h3 className="text-2xl lg:text-4xl font-black text-white tracking-tight mb-1 lg:mb-2 leading-tight uppercase">Webinar Funnels</h3>
                  <p className="text-white/80 text-sm lg:text-lg max-w-xl leading-snug">
                    High-ticket conversion systems that predictably turn cold traffic into closed deals at scale.
                  </p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
