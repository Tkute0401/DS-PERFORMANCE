"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, Funnel, MagnifyingGlass, Browser, 
  ShareNetwork, PenNib, Envelope, ChartLineUp, VideoCamera,
  ShoppingCart, TrendUp, Users, PresentationChart, ChatCircleText
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Tab = "full" | "ecom" | "edtech";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div
    className={cn(
      "relative rounded-2xl bg-zinc-950 border border-white/10 p-5 lg:p-6 overflow-hidden group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

const FullStackGrid = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] lg:grid-rows-2 gap-3 lg:gap-4 w-full h-full pb-4"
  >
    <Card className="lg:col-span-2">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-red-500/10 rounded-xl"><Target weight="duotone" className="w-6 h-6 text-red-500" /></div>
      </div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Paid Media</h3>
        <p className="text-white/50 text-sm">Meta, Google, & LinkedIn Capital Deployment.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><ChartLineUp weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">Data & Analytics</h3>
        <p className="text-white/50 text-xs">Server-side matrices.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><PenNib weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">Copywriting</h3>
        <p className="text-white/50 text-xs">Persuasion engineering.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><Browser weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">Web Design</h3>
        <p className="text-white/50 text-xs">High-velocity pages.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><MagnifyingGlass weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">SEO & Content</h3>
        <p className="text-white/50 text-xs">Organic search dominance.</p>
      </div>
    </Card>
    <Card className="lg:col-span-2">
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><Envelope weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Email & SMS</h3>
        <p className="text-white/50 text-sm">Lifecycle automation & retention.</p>
      </div>
    </Card>
  </motion.div>
);

const EcomGrid = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] lg:grid-rows-2 gap-3 lg:gap-4 w-full h-full pb-4"
  >
    <Card className="lg:col-span-2">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-500/10 rounded-xl"><TrendUp weight="duotone" className="w-6 h-6 text-blue-500" /></div>
      </div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">DTC Growth Scaling</h3>
        <p className="text-white/50 text-sm">Margin-focused capital deployment for physical products.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><ShoppingCart weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">Catalog & Feed</h3>
        <p className="text-white/50 text-xs">Algorithmic product visibility.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><Browser weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">Storefront CRO</h3>
        <p className="text-white/50 text-xs">Frictionless checkout flows.</p>
      </div>
    </Card>
    <Card className="lg:col-span-2">
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><ChartLineUp weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">LTV Maximization</h3>
        <p className="text-white/50 text-sm">Advanced email/SMS cohort reactivation strategies.</p>
      </div>
    </Card>
    <Card className="lg:col-span-2">
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><ShareNetwork weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Social Commerce</h3>
        <p className="text-white/50 text-sm">TikTok Shop & native platform social selling.</p>
      </div>
    </Card>
  </motion.div>
);

const EdTechGrid = () => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] lg:grid-rows-2 gap-3 lg:gap-4 w-full h-full pb-4"
  >
    <Card className="lg:col-span-2">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-purple-500/10 rounded-xl"><Funnel weight="duotone" className="w-6 h-6 text-purple-500" /></div>
      </div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">High-Ticket Lead Gen</h3>
        <p className="text-white/50 text-sm">Automated pipeline engineering for premium programs.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><VideoCamera weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">Webinar Funnels</h3>
        <p className="text-white/50 text-xs">High-velocity sales events.</p>
      </div>
    </Card>
    <Card>
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><PresentationChart weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight mb-1">VSL Engineering</h3>
        <p className="text-white/50 text-xs">Video letters that convert cold.</p>
      </div>
    </Card>
    <Card className="lg:col-span-2">
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><Users weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Community Growth</h3>
        <p className="text-white/50 text-sm">Scaling paid groups (Skool, Discord) via ads.</p>
      </div>
    </Card>
    <Card className="lg:col-span-2">
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 relative z-10"><ChatCircleText weight="duotone" className="w-6 h-6 text-white" /></div>
      <div className="mt-auto relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1">Appointment Setting</h3>
        <p className="text-white/50 text-sm">CRM integrations & setter team infrastructures.</p>
      </div>
    </Card>
  </motion.div>
);

export default function BentoServices() {
  const [activeTab, setActiveTab] = useState<Tab>("full");
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
      gsap.fromTo(tabsRef.current, 
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

    gsap.set(tabsRef.current, { y: window.innerHeight * 0.3, scale: 0.95, opacity: 0 });

    tl.to(titleRef.current, { scale: 0.85, opacity: 0.5, y: -20, duration: 1 })
      .to(tabsRef.current, { y: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }, "<");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services" className="w-full bg-zinc-950 relative">
      <div ref={pinRef} className="w-full h-[100dvh] flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto relative flex flex-col h-full py-6 lg:py-8">
          
          <div className="mb-4 lg:mb-6 flex-shrink-0 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 w-full">
            <h2 ref={titleRef} className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase origin-left text-center lg:text-left leading-[0.9]">
              WEAPONIZED <br className="hidden lg:block" /> <span className="text-red-500">INFRASTRUCTURE.</span>
            </h2>
            
            {/* Tab Switcher */}
            <div className="flex bg-zinc-900 border border-white/10 p-1.5 rounded-full relative z-20 overflow-x-auto max-w-full no-scrollbar">
              {(["full", "ecom", "edtech"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative px-4 py-2 lg:px-6 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors z-10 whitespace-nowrap",
                    activeTab === tab ? "text-black" : "text-white/50 hover:text-white"
                  )}
                >
                  {activeTab === tab && (
                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-full -z-10" />
                  )}
                  {tab === "full" ? "The Engine" : tab === "ecom" ? "E-Commerce" : "Ed-Tech & B2B"}
                </button>
              ))}
            </div>
          </div>

          <div ref={tabsRef} className="w-full flex-1 min-h-0 relative">
            <AnimatePresence mode="wait">
              {activeTab === "full" && <FullStackGrid key="full" />}
              {activeTab === "ecom" && <EcomGrid key="ecom" />}
              {activeTab === "edtech" && <EdTechGrid key="edtech" />}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
