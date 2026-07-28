"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "@phosphor-icons/react";

const PRAISE = [
  "They stopped us from burning $50k a day on useless traffic.",
  "The first agency that didn't just give us a shiny PowerPoint.",
  "Finally, someone who understands math, not just 'brand synergy'.",
  "Scaled us to $100k/mo without destroying our margins.",
  "They found exactly where our leads were ghosting us."
];

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    // Simple GSAP infinite marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <footer id="praise" className="w-full bg-black text-white overflow-hidden flex flex-col pt-32 relative">
      {/* Client Praise Marquee */}
      <div className="w-full border-y border-white/10 py-6 overflow-hidden flex whitespace-nowrap bg-white/5">
        <div ref={marqueeRef} className="flex gap-16 min-w-max pr-16 items-center">
          {[...PRAISE, ...PRAISE, ...PRAISE].map((text, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white/80 uppercase">
                "{text}"
              </span>
              <div className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Massive CTA */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-32 flex flex-col items-center text-center relative z-10">
        <h2 className="text-[12vw] leading-none font-bold tracking-tighter mb-12 text-white">
          STOP GUESSING.
        </h2>
        
        <button className="group relative flex items-center justify-center gap-3 bg-white text-black px-12 py-6 rounded-full font-bold text-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          <span className="relative z-10">Roast My Funnel</span>
          <ArrowRight weight="bold" className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Links */}
      <div className="w-full border-t border-white/10 py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm text-white/50 font-medium">
        <p>© {new Date().getFullYear()} Digital Supremacy. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
