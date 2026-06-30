"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Target, Funnel, MagnifyingGlass, Browser, 
  ShareNetwork, PenNib, Envelope, ChartLineUp, VideoCamera
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Card = ({ children, className, cardRef }: { children: React.ReactNode, className?: string, cardRef?: React.RefObject<HTMLDivElement | null> }) => (
  <div
    ref={cardRef}
    className={cn(
      "bento-card relative rounded-2xl bg-zinc-950 border border-white/10 p-5 lg:p-6 overflow-hidden group will-change-transform shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
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
    
    // Check for mobile to avoid pinning massive grids poorly
    const isMobile = window.innerWidth < 1024;

    const cards = gsap.utils.toArray(".bento-card");
    
    if (isMobile) {
      // Simple fade in on mobile
      cards.forEach((card: any) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }}
        );
      });
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

    // Initially position cards out of view
    gsap.set(cards, { y: window.innerHeight, scale: 0.9, opacity: 0 });

    tl.to(titleRef.current, { scale: 0.85, opacity: 0.5, y: -20, duration: 1 })
      .to(cards, {
        y: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.08,
        duration: 1.5,
        ease: "power3.out"
      }, "<");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="w-full bg-zinc-950 relative">
      <div ref={pinRef} className="w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden py-12 lg:py-0">
        <div className="max-w-[1400px] w-full mx-auto relative flex flex-col h-full py-6">
          
          <div className="mb-6 lg:mb-10 flex-shrink-0 text-center md:text-left">
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase origin-left">
              WEAPONIZED <br className="hidden md:block" /> <span className="text-red-500">INFRASTRUCTURE.</span>
            </h2>
          </div>

          {/* 4x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] lg:auto-rows-[minmax(200px,1fr)] gap-3 lg:gap-4 w-full flex-1 min-h-0">
            
            {/* 1. Paid Media (2x1) */}
            <Card className="md:col-span-2 lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <Target weight="duotone" className="w-6 h-6 text-red-500" />
                </div>
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center gap-2 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase border border-red-500/20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Deploying Capital
                </motion.div>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Paid Media</h3>
                <p className="text-white/50 text-sm">Precision targeting algorithms across Meta, Google, and LinkedIn.</p>
              </div>
              {/* Radar Sweep */}
              <div className="absolute right-0 bottom-0 w-48 h-48 opacity-20 pointer-events-none overflow-hidden rounded-tl-full border-t border-l border-red-500/30">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full origin-bottom-right"
                  style={{ background: "conic-gradient(from 180deg at 100% 100%, transparent 0deg, rgba(239,68,68,0.4) 90deg, transparent 90deg)" }}
                />
              </div>
            </Card>

            {/* 2. Lead Gen (1x1) */}
            <Card>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <Funnel weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-[0.03] z-0">
                <div className="w-24 h-32 border-x-2 border-b-2 border-white rounded-b-full" />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">Lead Gen</h3>
                <p className="text-white/50 text-xs">Automated pipeline engineering.</p>
              </div>
            </Card>

            {/* 3. Data & Attribution (1x1) */}
            <Card>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <ChartLineUp weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="absolute right-0 top-1/4 flex items-end gap-1 opacity-10 pointer-events-none z-0 px-4">
                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                  <motion.div key={i} animate={{ height: [`${h}%`, `${h * 0.5}%`, `${h}%`] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} className="w-2 bg-white rounded-t-sm origin-bottom" />
                ))}
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">Data & Analytics</h3>
                <p className="text-white/50 text-xs">Flawless tracking matrices.</p>
              </div>
            </Card>

            {/* 4. SEO Strategy (1x1) */}
            <Card>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <MagnifyingGlass weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">SEO Strategy</h3>
                <p className="text-white/50 text-xs">Search dominance & intent capture.</p>
              </div>
            </Card>

            {/* 5. Web Design & CRO (2x1) */}
            <Card className="md:col-span-2 lg:col-span-2">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl">
                  <Browser weight="duotone" className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex flex-col justify-center opacity-20 pointer-events-none z-0">
                <div className="w-full h-px bg-white/30 relative overflow-hidden">
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, ease: "linear", repeat: Infinity }} className="absolute top-0 w-24 h-full bg-white shadow-[0_0_15px_#fff]" />
                </div>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Web Design & CRO</h3>
                <p className="text-white/50 text-sm">Conversion-optimized digital real estate designed for speed.</p>
              </div>
            </Card>

            {/* 6. Webinar Funnels (1x1) */}
            <Card>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <VideoCamera weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">Webinars</h3>
                <p className="text-white/50 text-xs">High-velocity sales events.</p>
              </div>
            </Card>

            {/* 7. Copywriting (1x1) */}
            <Card>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <PenNib weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="absolute right-[-10%] top-[-10%] opacity-[0.03] pointer-events-none z-0 rotate-12 scale-150">
                <PenNib weight="fill" className="w-48 h-48 text-white" />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">Copywriting</h3>
                <p className="text-white/50 text-xs">Persuasion engineering.</p>
              </div>
            </Card>

            {/* 8. Social Media (1x1) */}
            <Card>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <ShareNetwork weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-lg lg:text-xl font-bold text-white tracking-tight mb-1">Social Media</h3>
                <p className="text-white/50 text-xs">Algorithmic authority.</p>
              </div>
            </Card>

            {/* 9. Email & SMS (2x1) */}
            <Card className="md:col-span-2 lg:col-span-2">
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10">
                <Envelope weight="duotone" className="w-6 h-6 text-white" />
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-10 pointer-events-none z-0">
                <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-16 h-2 bg-white rounded-full" />
                <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-12 h-2 bg-white rounded-full" />
                <motion.div animate={{ x: [0, -30, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-20 h-2 bg-white rounded-full" />
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Email & SMS</h3>
                <p className="text-white/50 text-sm">Retention, reactivation, and lifecycle automation.</p>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
