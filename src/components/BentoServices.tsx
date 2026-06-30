"use client";

import { useState, useRef, useEffect } from "react";
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

const dialCategories = [
  {
    id: "full",
    title: "THE ENGINE",
    subtitle: "Full Stack Growth",
    color: "text-red-500",
    glow: "rgba(239,68,68,0.5)",
    nodes: [
      { id: "1", title: "Paid Media", desc: "Meta, Google, & LinkedIn Capital Deployment", icon: <Target weight="duotone" className="w-5 h-5 text-red-500" /> },
      { id: "2", title: "Data & Analytics", desc: "Server-side matrices", icon: <ChartLineUp weight="duotone" className="w-5 h-5 text-red-500" /> },
      { id: "3", title: "Copywriting", desc: "Persuasion engineering", icon: <PenNib weight="duotone" className="w-5 h-5 text-red-500" /> },
      { id: "4", title: "Web Design", desc: "High-velocity pages", icon: <Browser weight="duotone" className="w-5 h-5 text-red-500" /> },
      { id: "5", title: "SEO & Content", desc: "Organic search dominance", icon: <MagnifyingGlass weight="duotone" className="w-5 h-5 text-red-500" /> },
      { id: "6", title: "Email & SMS", desc: "Lifecycle automation", icon: <Envelope weight="duotone" className="w-5 h-5 text-red-500" /> }
    ]
  },
  {
    id: "ecom",
    title: "E-COMMERCE",
    subtitle: "DTC & Storefronts",
    color: "text-blue-500",
    glow: "rgba(59,130,246,0.5)",
    nodes: [
      { id: "1", title: "DTC Growth", desc: "Margin-focused deployment", icon: <TrendUp weight="duotone" className="w-5 h-5 text-blue-500" /> },
      { id: "2", title: "Catalog & Feed", desc: "Algorithmic visibility", icon: <ShoppingCart weight="duotone" className="w-5 h-5 text-blue-500" /> },
      { id: "3", title: "Storefront CRO", desc: "Frictionless checkout", icon: <Browser weight="duotone" className="w-5 h-5 text-blue-500" /> },
      { id: "4", title: "LTV Maximization", desc: "Cohort reactivation", icon: <ChartLineUp weight="duotone" className="w-5 h-5 text-blue-500" /> },
      { id: "5", title: "Social Commerce", desc: "TikTok Shop & native selling", icon: <ShareNetwork weight="duotone" className="w-5 h-5 text-blue-500" /> }
    ]
  },
  {
    id: "edtech",
    title: "ED-TECH & B2B",
    subtitle: "High-Ticket Funnels",
    color: "text-purple-500",
    glow: "rgba(168,85,247,0.5)",
    nodes: [
      { id: "1", title: "High-Ticket Leads", desc: "Automated pipeline engineering", icon: <Funnel weight="duotone" className="w-5 h-5 text-purple-500" /> },
      { id: "2", title: "Webinar Funnels", desc: "High-velocity sales events", icon: <VideoCamera weight="duotone" className="w-5 h-5 text-purple-500" /> },
      { id: "3", title: "VSL Engineering", desc: "Video letters that convert cold", icon: <PresentationChart weight="duotone" className="w-5 h-5 text-purple-500" /> },
      { id: "4", title: "Community Growth", desc: "Scaling paid groups (Skool)", icon: <Users weight="duotone" className="w-5 h-5 text-purple-500" /> },
      { id: "5", title: "Appointment Setting", desc: "CRM & setter infrastructures", icon: <ChatCircleText weight="duotone" className="w-5 h-5 text-purple-500" /> }
    ]
  }
];

export default function BentoServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string>("full");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (window.innerWidth < 1024) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000", // 3 scroll phases
        pin: pinRef.current,
        scrub: 1,
        refreshPriority: 2,
        onUpdate: (self) => {
          const p = self.progress;
          // Thresholds with a slight buffer so the snap feels clean
          let newIndex = 0;
          if (p > 0.33 && p < 0.66) newIndex = 1;
          else if (p >= 0.66) newIndex = 2;
          
          setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
        }
      }
    });

    // Rotate the dial exactly -240 degrees over the entire scroll length
    tl.to(dialRef.current, {
      rotation: -240,
      ease: "none"
    });

  }, { scope: containerRef });

  const currentCategory = dialCategories[activeIndex];
  const DIAL_RADIUS = 300;

  return (
    <section ref={containerRef} id="services" className="w-full bg-zinc-950 relative overflow-hidden">
      <div ref={pinRef} className="w-full min-h-[100dvh] flex flex-col lg:flex-row items-center justify-center px-4 md:px-6 lg:px-8 py-20 lg:py-0 relative">
        
        {/* Background ambient glow based on active category */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-1000"
          style={{ background: `radial-gradient(circle at center, ${currentCategory.glow} 0%, transparent 70%)` }}
        />

        {/* Mobile View: Premium Accordion Stack */}
        {isMobile ? (
          <div className="w-full mx-auto flex flex-col gap-4 relative z-10 pt-10 pb-20">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                WEAPONIZED<br/><span className="text-red-500">INFRASTRUCTURE</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-3">
              {dialCategories.map((cat) => {
                const isExpanded = mobileExpanded === cat.id;
                
                return (
                  <div 
                    key={cat.id} 
                    className={cn(
                      "flex flex-col overflow-hidden rounded-2xl border transition-all duration-500",
                      isExpanded ? "border-white/20 bg-zinc-900/80" : "border-white/5 bg-zinc-900/30"
                    )}
                  >
                    {/* Accordion Header */}
                    <button 
                      onClick={() => setMobileExpanded(isExpanded ? "" : cat.id)}
                      className="w-full flex items-center justify-between p-6 cursor-pointer"
                    >
                      <div className="flex flex-col items-start text-left">
                        <h3 className={cn("text-2xl font-black uppercase tracking-tighter", cat.color)}>{cat.title}</h3>
                        <span className="text-white/50 text-sm font-medium tracking-wide">{cat.subtitle}</span>
                      </div>
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center border transition-transform duration-500",
                        isExpanded ? "rotate-180 border-white/20 bg-white/5" : "border-white/5"
                      )}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M2.5 5.5L7 10L11.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 pb-6 flex flex-col gap-3">
                            {cat.nodes.map((node, i) => (
                              <motion.div
                                key={`${cat.id}-${node.id}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="w-full text-left bg-zinc-950/50 border border-white/5 p-4 rounded-xl flex items-center gap-4"
                              >
                                <div className="p-3 bg-white/5 rounded-lg shrink-0">{node.icon}</div>
                                <div>
                                  <h4 className="text-base font-bold text-white leading-tight">{node.title}</h4>
                                  {node.desc && <p className="text-white/40 text-xs mt-1 leading-relaxed">{node.desc}</p>}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          /* Desktop View: Left Dial + Right Grid */
          <div className="w-full max-w-[1400px] h-full flex flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Column: The Massive Dial */}
            <div className="w-1/2 h-[800px] relative flex items-center justify-center -translate-x-[20%]">
              
              {/* Dial Container that physically rotates */}
              <div ref={dialRef} className="w-[800px] h-[800px] rounded-full border border-white/5 relative flex items-center justify-center">
                
                {/* Inner decorative rings */}
                <div className="absolute inset-4 rounded-full border border-white/5 border-dashed" />
                <div className="absolute inset-20 rounded-full border border-white/5" />
                
                {/* Center Core */}
                <div className="w-64 h-64 rounded-full bg-zinc-950 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-center z-10 relative">
                  <div className="absolute inset-0 rounded-full bg-zinc-900 animate-pulse opacity-20 pointer-events-none" />
                  <span className="text-white/50 tracking-widest text-xs font-bold uppercase mb-2">Deploying</span>
                  <AnimatePresence mode="wait">
                    <motion.h3 
                      key={currentCategory.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn("text-3xl font-black uppercase tracking-tighter text-center px-4", currentCategory.color)}
                    >
                      {currentCategory.title}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                {/* The 3 Category Nodes attached to the dial edge */}
                {dialCategories.map((cat, i) => {
                  // Position nodes at 0 (Right), 120 (Bottom Left), 240 (Top Left)
                  const angle = (i * 120) * (Math.PI / 180);
                  const x = Math.round(Math.cos(angle) * DIAL_RADIUS);
                  const y = Math.round(Math.sin(angle) * DIAL_RADIUS);
                  
                  const isActive = activeIndex === i;

                  return (
                    <div 
                      key={cat.id}
                      className="absolute top-1/2 left-1/2"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      {/* Counter-rotate the inner content so text stays upright */}
                      {/* We know dial rotation = -120 * activeIndex (roughly, GSAP interpolates). 
                          To keep it simple, we just let GSAP rotate the parent and we don't counter-rotate the text, 
                          but wait! The text will be upside down! 
                          Instead of GSAP rotating the text, we can use a CSS counter-rotation trick.
                          Or, since they are abstract nodes, we just make them glowing orbs without text! 
                          The text is already in the Center Core and the Right Grid! */}
                      <div className={cn(
                        "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl",
                        isActive ? "bg-zinc-900 border-2 " + cat.color.replace('text', 'border') : "bg-zinc-950 border border-white/10"
                      )}>
                        <div className={cn(
                          "w-12 h-12 rounded-full transition-all duration-700",
                          isActive ? cat.color.replace('text', 'bg') : "bg-white/10"
                        )} style={{ boxShadow: isActive ? `0 0 30px ${cat.glow}` : 'none' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Service Grid */}
            <div className="w-1/2 h-[700px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentCategory.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="mb-4">
                    <h2 className="text-sm font-bold text-white/50 tracking-widest uppercase mb-2">Systems Online</h2>
                    <h3 className="text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                      {currentCategory.title} <br/>
                      <span className={currentCategory.color}>{currentCategory.subtitle}</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {currentCategory.nodes.map((node, i) => (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 hover:bg-zinc-800 hover:border-white/20 transition-all group"
                      >
                        <div className="p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                          {node.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white leading-tight">{node.title}</h4>
                          <p className="text-white/50 text-sm mt-2 leading-relaxed">{node.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        )}
      </div>
    </section>
  );
}
