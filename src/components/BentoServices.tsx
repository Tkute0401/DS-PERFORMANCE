"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { 
  Target, Funnel, MagnifyingGlass, Browser, 
  ShareNetwork, PenNib, Envelope, ChartLineUp, VideoCamera,
  ShoppingCart, TrendUp, Users, PresentationChart, ChatCircleText, ArrowLeft
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type ActiveState = "root" | "full" | "ecom" | "edtech";

const orbitData = {
  root: {
    title: "WEAPONIZED INFRASTRUCTURE.",
    subtitle: "Select an engine core to deploy",
    nodes: [
      { id: "full", title: "The Engine", desc: "Full Stack Growth", icon: <Target weight="duotone" className="w-6 h-6 text-red-500" /> },
      { id: "ecom", title: "E-Commerce", desc: "DTC & Storefronts", icon: <ShoppingCart weight="duotone" className="w-6 h-6 text-blue-500" /> },
      { id: "edtech", title: "Ed-Tech & B2B", desc: "High-Ticket Funnels", icon: <Users weight="duotone" className="w-6 h-6 text-purple-500" /> }
    ]
  },
  full: {
    title: "THE FULL STACK.",
    subtitle: "Return to Core",
    nodes: [
      { id: "1", title: "Paid Media", desc: "Meta, Google, & LinkedIn Capital Deployment", icon: <Target weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "2", title: "Data & Analytics", desc: "Server-side matrices", icon: <ChartLineUp weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "3", title: "Copywriting", desc: "Persuasion engineering", icon: <PenNib weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "4", title: "Web Design", desc: "High-velocity pages", icon: <Browser weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "5", title: "SEO & Content", desc: "Organic search dominance", icon: <MagnifyingGlass weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "6", title: "Email & SMS", desc: "Lifecycle automation", icon: <Envelope weight="duotone" className="w-5 h-5 text-white" /> }
    ]
  },
  ecom: {
    title: "E-COM ARCHITECTURE.",
    subtitle: "Return to Core",
    nodes: [
      { id: "1", title: "DTC Growth", desc: "Margin-focused deployment", icon: <TrendUp weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "2", title: "Catalog & Feed", desc: "Algorithmic visibility", icon: <ShoppingCart weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "3", title: "Storefront CRO", desc: "Frictionless checkout", icon: <Browser weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "4", title: "LTV Maximization", desc: "Cohort reactivation", icon: <ChartLineUp weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "5", title: "Social Commerce", desc: "TikTok Shop & native selling", icon: <ShareNetwork weight="duotone" className="w-5 h-5 text-white" /> }
    ]
  },
  edtech: {
    title: "ED-TECH & B2B.",
    subtitle: "Return to Core",
    nodes: [
      { id: "1", title: "High-Ticket Leads", desc: "Automated pipeline engineering", icon: <Funnel weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "2", title: "Webinar Funnels", desc: "High-velocity sales events", icon: <VideoCamera weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "3", title: "VSL Engineering", desc: "Video letters that convert cold", icon: <PresentationChart weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "4", title: "Community Growth", desc: "Scaling paid groups (Skool)", icon: <Users weight="duotone" className="w-5 h-5 text-white" /> },
      { id: "5", title: "Appointment Setting", desc: "CRM & setter infrastructures", icon: <ChatCircleText weight="duotone" className="w-5 h-5 text-white" /> }
    ]
  }
};

export default function BentoServices() {
  const [activeState, setActiveState] = useState<ActiveState>("root");
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const progress = useMotionValue(0);

  // Hook-compliant pre-calculation for the 3 root nodes' scroll animations
  const m0 = useTransform(progress, [0.05, 0.3], [0, 1]);
  const m1 = useTransform(progress, [0.35, 0.6], [0, 1]);
  const m2 = useTransform(progress, [0.65, 0.9], [0, 1]);
  
  const rootMultipliers = [m0, m1, m2];
  
  const RADIUS = 320; 

  const x0 = useTransform(m0, [0, 1], [0, Math.cos(-Math.PI / 2) * RADIUS]);
  const y0 = useTransform(m0, [0, 1], [0, Math.sin(-Math.PI / 2) * RADIUS]);
  const o0 = useTransform(m0, [0, 1], [0, 1]);
  const s0 = useTransform(m0, [0, 1], [0, 1]);

  const x1 = useTransform(m1, [0, 1], [0, Math.cos((1 / 3) * 2 * Math.PI - Math.PI / 2) * RADIUS]);
  const y1 = useTransform(m1, [0, 1], [0, Math.sin((1 / 3) * 2 * Math.PI - Math.PI / 2) * RADIUS]);
  const o1 = useTransform(m1, [0, 1], [0, 1]);
  const s1 = useTransform(m1, [0, 1], [0, 1]);

  const x2 = useTransform(m2, [0, 1], [0, Math.cos((2 / 3) * 2 * Math.PI - Math.PI / 2) * RADIUS]);
  const y2 = useTransform(m2, [0, 1], [0, Math.sin((2 / 3) * 2 * Math.PI - Math.PI / 2) * RADIUS]);
  const o2 = useTransform(m2, [0, 1], [0, 1]);
  const s2 = useTransform(m2, [0, 1], [0, 1]);

  const rootTransforms = [
    { x: x0, y: y0, opacity: o0, scale: s0 },
    { x: x1, y: y1, opacity: o1, scale: s1 },
    { x: x2, y: y2, opacity: o2, scale: s2 },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (window.innerWidth < 1024) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        pin: pinRef.current,
        scrub: 1,
        refreshPriority: 2,
        onUpdate: (self) => progress.set(self.progress)
      }
    });
  }, { scope: containerRef });

  const currentData = orbitData[activeState];
  const totalNodes = currentData.nodes.length;

  const handleNodeClick = (id: string) => {
    if (activeState === "root" && (id === "full" || id === "ecom" || id === "edtech")) {
      setActiveState(id as ActiveState);
    }
  };

  const handleCoreClick = () => {
    if (activeState !== "root") {
      setActiveState("root");
    }
  };

  return (
    <section ref={containerRef} id="services" className="w-full bg-zinc-950 relative overflow-hidden">
      <div ref={pinRef} className="w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-20 lg:py-0">
        
        {/* Mobile View: Vertical List */}
        {isMobile ? (
          <div className="w-full max-w-md mx-auto flex flex-col gap-4 relative z-10 pt-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                {currentData.title.split(" ").map((w, i, arr) => <span key={i} className={i === arr.length - 1 ? "text-red-500" : ""}>{w}<br/></span>)}
              </h2>
              {activeState !== "root" && (
                <button onClick={handleCoreClick} className="mt-4 flex items-center justify-center gap-2 text-white/50 hover:text-white uppercase tracking-widest text-xs font-bold mx-auto border border-white/10 px-4 py-2 rounded-full">
                  <ArrowLeft className="w-4 h-4" /> Back to Core
                </button>
              )}
            </div>
            
            <AnimatePresence mode="popLayout">
              {currentData.nodes.map((node, i) => (
                <motion.button
                  key={`${activeState}-${node.id}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNodeClick(node.id)}
                  className="w-full text-left bg-zinc-900/50 border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-zinc-800 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-xl">{node.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{node.title}</h3>
                    {node.desc && <p className="text-white/50 text-sm mt-1">{node.desc}</p>}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Desktop View: Orbital Graph */
          <div className="w-full max-w-[1000px] h-[800px] relative flex items-center justify-center">
            
            {/* Connecting Lines (SVG) */}
            <svg viewBox="0 0 1000 800" className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <AnimatePresence>
                {currentData.nodes.map((_, i) => {
                  const angle = (i / totalNodes) * 2 * Math.PI - (Math.PI / 2);
                  const x = 500 + Math.cos(angle) * RADIUS;
                  const y = 400 + Math.sin(angle) * RADIUS;
                  
                  if (activeState === "root") {
                    return (
                      <motion.line
                        key={`line-root-${i}`}
                        style={{ pathLength: rootMultipliers[i] }}
                        x1="500" y1="400" x2={x} y2={y}
                        stroke="white" strokeWidth="1" strokeDasharray="4 4"
                        opacity="0.3"
                      />
                    );
                  }

                  return (
                    <motion.line
                      key={`line-${activeState}-${i}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      x1="500" y1="400" x2={x} y2={y}
                      stroke="white" strokeWidth="1" strokeDasharray="4 4"
                    />
                  );
                })}
              </AnimatePresence>
            </svg>

            {/* Central Core */}
            <motion.button
              layout
              onClick={handleCoreClick}
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center rounded-full border border-white/10 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,1)] transition-all",
                activeState === "root" ? "w-72 h-72 cursor-default" : "w-64 h-64 hover:border-red-500/50 cursor-pointer group"
              )}
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none" />
              {activeState !== "root" && <ArrowLeft className="w-6 h-6 text-white/50 mb-2 group-hover:text-red-500 transition-colors" />}
              <h2 className={cn("font-black tracking-tighter text-white uppercase text-center px-6 leading-[0.9]", activeState === "root" ? "text-3xl" : "text-2xl")}>
                {currentData.title.split(" ").map((w, i, arr) => (
                  <span key={i} className={i === arr.length - 1 && activeState === "root" ? "text-red-500" : ""}>{w}<br/></span>
                ))}
              </h2>
              {activeState !== "root" && <span className="text-[10px] text-white/50 uppercase tracking-widest mt-4">Return to Core</span>}
            </motion.button>

            {/* Orbiting Nodes */}
            <AnimatePresence mode="popLayout">
              {currentData.nodes.map((node, i) => {
                if (activeState === "root") {
                  const { x, y, opacity, scale } = rootTransforms[i];
                  return (
                    <motion.div
                      key={`root-${node.id}`}
                      style={{ x, y, opacity, scale }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                    >
                      <button
                        onClick={() => handleNodeClick(node.id)}
                        className="w-56 bg-zinc-900 border border-white/10 p-5 rounded-2xl text-left flex flex-col gap-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-colors cursor-pointer hover:border-white/30 hover:bg-zinc-800 hover:scale-105 duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/5 rounded-lg">{node.icon}</div>
                          <h3 className="text-base font-bold text-white leading-tight">{node.title}</h3>
                        </div>
                        {node.desc && (
                          <p className="text-white/50 text-xs leading-relaxed">{node.desc}</p>
                        )}
                      </button>
                    </motion.div>
                  );
                }

                const angle = (i / totalNodes) * 2 * Math.PI - (Math.PI / 2);
                const x = Math.cos(angle) * RADIUS;
                const y = Math.sin(angle) * RADIUS;

                return (
                  <motion.div
                    key={`${activeState}-${node.id}`}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x, y }}
                    exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100, delay: i * 0.05 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <button
                      onClick={() => handleNodeClick(node.id)}
                      className="w-56 bg-zinc-900 border border-white/10 p-5 rounded-2xl text-left flex flex-col gap-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-colors cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg">{node.icon}</div>
                        <h3 className="text-base font-bold text-white leading-tight">{node.title}</h3>
                      </div>
                      {node.desc && (
                        <p className="text-white/50 text-xs leading-relaxed">{node.desc}</p>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>
        )}
      </div>
    </section>
  );
}
