"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const topSliceRef = useRef<HTMLDivElement>(null);
  const bottomSliceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we've already shown the preloader this session
    if (sessionStorage.getItem("ds_preloader_shown")) {
      setIsLoading(false);
      return;
    }

    // Lock scrolling on mount
    document.body.style.overflow = "hidden";

    const targetText = "DIGITAL SUPREMACY";
    let iteration = 0;
    let interval: NodeJS.Timeout;

    // Custom Scramble Effect
    const scrambleText = () => {
      interval = setInterval(() => {
        if (!textRef.current) return;
        
        textRef.current.innerText = targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            if (letter === " ") return " ";
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");

        if (iteration >= targetText.length) {
          clearInterval(interval);
          startReveal();
        }

        iteration += 1 / 2; // Speed of lock-in
      }, 30); 
    };

    const startReveal = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          sessionStorage.setItem("ds_preloader_shown", "true");
          setIsLoading(false);
        }
      });

      // 1. Flash the borders and glitch the text
      tl.to(textRef.current, { scale: 1.1, filter: "blur(4px)", opacity: 0, duration: 0.4, ease: "power2.in", delay: 0.3 })
        .to(topSliceRef.current, { borderBottomColor: "#00FFCC", borderBottomWidth: "4px", duration: 0.1 }, "-=0.3")
        .to(bottomSliceRef.current, { borderTopColor: "#FF0055", borderTopWidth: "4px", duration: 0.1 }, "-=0.3")
      
      // 2. The Brutalist Slice Reveal
        .to(topSliceRef.current, { yPercent: -100, duration: 1.2, ease: "power4.inOut" }, "+=0.1")
        .to(bottomSliceRef.current, { yPercent: 100, duration: 1.2, ease: "power4.inOut" }, "<")
        
      // 3. Fade out the overall container pointer events just in case
        .to(containerRef.current, { opacity: 0, duration: 0.1 });
    };

    setTimeout(scrambleText, 300);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-auto"
    >
      {/* Top Slice */}
      <div 
        ref={topSliceRef}
        className="absolute top-0 left-0 w-full h-[50vh] bg-black border-b border-transparent origin-top flex items-end justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-50">
            <filter id="noiseFilterTop">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterTop)"/>
          </svg>
        </div>
      </div>

      {/* Bottom Slice */}
      <div 
        ref={bottomSliceRef}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-black border-t border-transparent origin-bottom flex items-start justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-50">
            <filter id="noiseFilterBottom">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterBottom)"/>
          </svg>
        </div>
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          ref={textRef}
          className="text-white text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase mix-blend-difference"
        >
          _________________
        </h1>
      </div>

    </div>
  );
}
