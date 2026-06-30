"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/useUIStore";

export default function Navigation() {
  const { openConversionModal } = useUIStore();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
        "px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300",
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl border border-white/10 w-[95%] md:w-[600px]" 
          : "bg-transparent border-transparent w-full max-w-6xl px-6 md:px-12"
      )}
    >
      <Link href="/" className="text-white font-bold tracking-tighter text-lg md:text-xl">
        DS<span className="font-light">.PERFORMANCE</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
        <Link href="#services" className="hover:text-white transition-colors">Services</Link>
        <Link href="#results" className="hover:text-white transition-colors">Results</Link>
        <Link href="#praise" className="hover:text-white transition-colors">Praise</Link>
      </div>

      <button onClick={openConversionModal} className="bg-white text-black px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold hover:scale-105 transition-transform">
        Start Scaling
      </button>
    </motion.nav>
  );
}
