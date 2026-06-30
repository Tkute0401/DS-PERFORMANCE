"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowDownRight } from "@phosphor-icons/react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useUIStore } from "@/store/useUIStore";

export default function Hero() {
  const { openConversionModal } = useUIStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isFirstVisit = !sessionStorage.getItem("ds_preloader_shown");
    const initialDelay = isFirstVisit ? 2.8 : 0.2;

    const tl = gsap.timeline({ delay: initialDelay });

    // Aggressive staggered slam for the headline words - tightened up for more precision
    const words = gsap.utils.toArray(".hero-word");
    tl.fromTo(words,
      { y: 150, opacity: 0, rotationX: 45, scale: 0.8 },
      { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1.0, stagger: 0.1, ease: "power4.out" }
    );

    // Animate Action+Proof block
    tl.fromTo(".hero-bottom-element",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  const [isHovering, setIsHovering] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(my, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    mx.set(mouseX * 0.3);
    my.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-end pt-24 pb-6 px-6 md:px-12 overflow-hidden bg-zinc-950"
    >
      {/* Fullscreen Animated Webp Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <img
          src="https://asset.eyecannndy.com/media/clip/2024/01/10/261704861468.webp"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      {/* Ultra-subtle engineering grid overlay (No messy blur blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '120px 120px',
            backgroundPosition: 'top left',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto flex flex-col items-start gap-6 mt-auto">

        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 bg-black/40 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">Systematic Growth Engine</span>
        </motion.div>

        {/* Massive Editorial Headline */}
        <div ref={headlineRef} className="flex flex-col w-full">
          <div className="overflow-hidden pb-4">
            <h1 className="hero-word text-[clamp(2.5rem,8vw,11.5rem)] font-black tracking-tighter text-zinc-100 leading-[0.85] uppercase origin-bottom">
              ARCHITECTING
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 overflow-hidden w-full mt-2 lg:mt-0 pb-4">
            {/* Dynamic Video Pill - Strictly Constrained */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 1.5, delay: 3, ease: "backOut" }}
              className="h-[clamp(3.5rem,7vw,8rem)] rounded-full overflow-hidden shrink-0 hidden md:block"
            >
              <video
                autoPlay loop muted playsInline
                className="w-32 md:w-48 lg:w-72 h-full object-cover grayscale mix-blend-screen opacity-80"
                src="https://www.digitalsupremacy.in/footer-vid.mp4"
              />
            </motion.div>
            <div className="overflow-hidden pb-4">
              <h1 className="hero-word text-[clamp(2.5rem,8vw,11.5rem)] font-black tracking-tighter text-zinc-100 leading-[0.85] uppercase origin-bottom">
                ADVANTAGES.
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Section: Subtitle above the Action+Proof block */}
        <div className="w-full flex flex-col gap-8 border-t border-white/10 pt-6 mt-4">

          <p className="hero-bottom-element text-xl md:text-3xl text-zinc-400 font-light tracking-tight max-w-3xl leading-relaxed">
            We don't just run ads. We build <strong className="text-white font-medium">8-figure revenue engines</strong> based on mathematical certainty.
          </p>

          {/* Action + Proof Lockup */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 w-full">

            {/* CTA Group */}
            <div className="hero-bottom-element flex flex-wrap items-center gap-4">
              <motion.button
                onClick={openConversionModal}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                className="group relative flex items-center justify-center gap-4 bg-zinc-100 text-zinc-950 px-8 py-5 rounded-full font-bold overflow-hidden transition-transform shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 uppercase tracking-widest text-sm">Scale Your Revenue</span>
                <motion.div
                  animate={{ x: isHovering ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 bg-black/10 rounded-full p-1"
                >
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <button className="px-8 py-5 rounded-full font-bold text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors duration-500 flex items-center justify-center gap-2 group">
                View Case Studies
                <ArrowDownRight weight="bold" className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Stats Grid - Directly adjacent to CTA for psychological proof */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-16">
              <div className="hero-bottom-element flex flex-col gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">Capital Deployed</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">$100M<span className="text-zinc-600">+</span></span>
              </div>
              <div className="hero-bottom-element flex flex-col gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">Avg. ROAS</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">3.8X</span>
              </div>
              <div className="hero-bottom-element hidden md:flex flex-col gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">Active Systems</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">45<span className="text-zinc-600">+</span></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
