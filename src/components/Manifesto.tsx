"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const BASE_TERMS = [
  "CAC", "ROAS", "LTV", "A/B TEST", "CTR", "CPA", "FUNNELS", "SCALE", 
  "ATTRIBUTION", "RETENTION", "PIXELS", "CPL", "CONVERSION", "MARGIN", 
  "GROWTH", "VELOCITY", "MRR", "CHURN", "EBITDA", "LIQUIDITY", "CPM", 
  "PPC", "KPI", "CRO", "DATA", "TEST", "ITERATE", "CONVERT", "PROFIT"
];

// Generate 80 chaotic but deterministically positioned terms for a true stickerbomb
const MARKETING_TERMS = Array.from({ length: 80 }).map((_, i) => {
  const term = BASE_TERMS[i % BASE_TERMS.length];
  
  // Pseudo-random deterministic placement so hydration matches
  const top = ((i * 93) % 110) - 5; // -5% to 105%
  const left = ((i * 137) % 110) - 5;
  const rotate = ((i * 47) % 180) - 90; // -90 to 90 degrees
  const scale = 0.6 + ((i * 11) % 10) * 0.15; // 0.6 to 2.1
  const stroke = i % 3 === 0;

  return { text: term, top: `${top}%`, left: `${left}%`, rotate, scale, stroke };
});

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const bgWallRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check if we are on a desktop for scroll-jacking
    if (window.innerWidth < 768) {
      // Mobile fallback: simple fade in
      gsap.utils.toArray([text1Ref.current, text2Ref.current, text3Ref.current]).forEach((el: any) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }}
        );
      });
      return;
    }

    // Desktop Scroll-jacking sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.5,
        refreshPriority: 3,
      }
    });

    // Parallax the sticker wall upwards over the entire duration
    tl.to(bgWallRef.current, { y: "-20%", duration: 6, ease: "none" }, 0);

    tl.to(text1Ref.current, { opacity: 0, scale: 1.2, duration: 1 }, 1)
      .fromTo(text2Ref.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, 1.5)
      .to(text2Ref.current, { opacity: 0, scale: 1.2, duration: 1 }, 3)
      .fromTo(text3Ref.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, 3.5);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] bg-zinc-950 flex flex-col items-center justify-center px-6 py-24 md:py-0 overflow-x-hidden">
      
      {/* Background Engineering Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '100px 100px',
          backgroundPosition: 'top left',
          backgroundAttachment: 'fixed'
        }} 
      />

      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-white opacity-[0.02] blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Stickerbombed Wall & Moving Charts Parallax Layer */}
      <div ref={bgWallRef} className="absolute -inset-[20%] -top-[40vh] pointer-events-none z-0 mask-image-fade-top">
        
        {/* Floating Terms */}
        {MARKETING_TERMS.map((term, i) => {
          // Generate chaotic but deterministic movement patterns based on index
          const randomX = (i % 3 === 0 ? 1 : -1) * (60 + (i * 12));
          const randomY = (i % 2 === 0 ? 1 : -1) * (50 + (i * 18));
          const randomRot = term.rotate + ((i % 2 === 0 ? 1 : -1) * 35);

          return (
            <motion.div
              key={i}
              animate={{
                y: [0, randomY, randomY * -0.5, 0],
                x: [0, randomX, randomX * -0.5, 0],
                rotate: [term.rotate, randomRot, term.rotate - 15, term.rotate]
              }}
              transition={{
                duration: 12 + (i % 6) * 3, // Slower, more majestic fluid float (12s to 27s loops)
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute font-black uppercase whitespace-nowrap opacity-[0.03] md:opacity-[0.06]"
              style={{
                top: term.top,
                left: term.left,
                scale: term.scale,
                WebkitTextStroke: term.stroke ? "2px white" : "none",
                color: term.stroke ? "transparent" : "white",
                fontSize: "clamp(4rem, 8vw, 8rem)",
              }}
            >
              {term.text}
            </motion.div>
          );
        })}

        {/* Abstract Moving SVG Chart Lines */}
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <motion.path
              d="M 0,800 C 200,800 300,500 500,400 C 700,300 800,100 1000,0"
              fill="none"
              stroke="white"
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M 0,900 L 200,700 L 400,850 L 600,300 L 800,450 L 1000,100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="10 10"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:block items-center justify-center text-center gap-24 md:gap-0 h-full mix-blend-difference">
        <h2 ref={text1Ref} className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-[clamp(2.5rem,6vw,8rem)] font-black tracking-tighter uppercase leading-[0.9] w-full text-white">
          Data Over Fluff.
        </h2>
        <h2 ref={text2Ref} className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-[clamp(2.5rem,6vw,8rem)] font-black tracking-tighter uppercase leading-[0.9] md:opacity-0 w-full text-white">
          Engineering <br className="md:hidden" /> Multipliers.
        </h2>
        <h2 ref={text3Ref} className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-[clamp(2.5rem,6vw,8rem)] font-black tracking-tighter uppercase leading-[0.9] md:opacity-0 w-full text-zinc-400">
          We don&apos;t guess.<br/>We execute.
        </h2>
      </div>

    </section>
  );
}
