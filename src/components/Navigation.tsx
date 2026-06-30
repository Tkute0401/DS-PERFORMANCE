"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/useUIStore";
import { List, X } from "@phosphor-icons/react";

export default function Navigation() {
  const { openConversionModal } = useUIStore();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
          "px-6 py-3 rounded-full transition-all duration-300",
          isScrolled 
            ? "bg-black/60 backdrop-blur-xl border border-white/10 w-[90%] md:w-[600px]" 
            : "bg-transparent border-transparent w-full max-w-6xl px-6 md:px-12"
        )}
      >
        <Link href="/" className="text-white font-bold tracking-tighter text-xl">
          DS<span className="font-light">.PERFORMANCE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#results" className="hover:text-white transition-colors">Results</Link>
          <Link href="#praise" className="hover:text-white transition-colors">Praise</Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={openConversionModal} className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            Start Scaling
          </button>
          
          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-white flex items-center justify-center p-2"
            onClick={() => setMenuOpen(true)}
          >
            <List weight="bold" className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Brutalist Mobile Takeover Menu */}
      {isMobile && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: menuOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} // Aggressive slam ease
          className="fixed inset-0 bg-black z-[100] flex flex-col justify-center px-8"
        >
          <button 
            className="absolute top-8 right-8 text-white p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X weight="bold" className="w-8 h-8" />
          </button>

          <div className="flex flex-col gap-8 text-[4rem] font-black tracking-tighter uppercase leading-none">
            <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition-colors">
              Services
            </Link>
            <Link href="#results" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition-colors">
              Results
            </Link>
            <Link href="#praise" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition-colors">
              Praise
            </Link>
            
            <button 
              onClick={() => { setMenuOpen(false); openConversionModal(); }} 
              className="mt-8 text-left text-2xl font-black bg-white text-black py-6 px-8 hover:bg-red-500 hover:text-white transition-colors w-full"
            >
              START SCALING
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
