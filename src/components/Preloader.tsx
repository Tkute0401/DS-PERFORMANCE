"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [dataStream, setDataStream] = useState<string[]>([]);
  const [phase, setPhase] = useState<"counting" | "locked">("counting");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const topSliceRef = useRef<HTMLDivElement>(null);
  const bottomSliceRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling on mount
    document.body.style.overflow = "hidden";

    // Generate random background data stream
    const generateStream = () => {
      // Create a massive block of text to fill the background
      return Array.from({ length: 40 }, () => 
        Array.from({ length: 80 }, () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]).join("")
      );
    };

    const streamInterval = setInterval(() => {
      setDataStream(generateStream());
    }, 50); 

    // Counter animation
    const counterObj = { value: 0 };
    
    gsap.to(counterObj, {
      value: 100000000,
      duration: 2.4, // Deliberate speed to build tension
      ease: "power3.inOut",
      onUpdate: () => {
        setCounter(Math.floor(counterObj.value));
      },
      onComplete: () => {
        clearInterval(streamInterval);
        setPhase("locked");
        startReveal();
      }
    });

    const startReveal = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsLoading(false);
        }
      });

      // 1. Flash effect on lock-in
      tl.to(streamRef.current, { opacity: 0, duration: 0.1 }, 0)
        .to(textRef.current, { scale: 1.1, filter: "blur(10px)", opacity: 0, duration: 0.1, ease: "power2.in" }, 0)
        
        // Lock in the brand text
        .to(textRef.current, { scale: 1, filter: "blur(0px)", opacity: 1, duration: 0.4, ease: "power4.out" })
        .to(topSliceRef.current, { borderBottomColor: "#ffffff", borderBottomWidth: "1px", duration: 0.1 }, "-=0.4")
        .to(bottomSliceRef.current, { borderTopColor: "#ffffff", borderTopWidth: "1px", duration: 0.1 }, "-=0.4")
      
      // 2. Hold for a split second, then Brutalist Slice Reveal
        .to(topSliceRef.current, { yPercent: -100, duration: 1.2, ease: "power4.inOut" }, "+=0.3")
        .to(bottomSliceRef.current, { yPercent: 100, duration: 1.2, ease: "power4.inOut" }, "<")
        
      // 3. Fade out the text as the slice opens so it doesn't linger awkwardly
        .to(textRef.current, { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out" }, "-=1.0")
        
      // 4. Cleanup
        .to(containerRef.current, { opacity: 0, duration: 0.1 });
    };

    return () => {
      clearInterval(streamInterval);
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
        className="absolute top-0 left-0 w-full h-[50vh] bg-black border-b border-transparent origin-top"
      />

      {/* Bottom Slice */}
      <div 
        ref={bottomSliceRef}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-black border-t border-transparent origin-bottom"
      />

      {/* Background Data Stream (Fades out on lock) */}
      <div 
        ref={streamRef}
        className="absolute inset-0 overflow-hidden opacity-[0.04] flex flex-col items-center justify-center pointer-events-none z-10"
      >
        {dataStream.map((line, i) => (
          <p key={i} className="text-white font-mono text-[10px] md:text-sm whitespace-nowrap leading-none tracking-widest">
            {line}
          </p>
        ))}
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <h1
          ref={textRef}
          className="text-white font-black tracking-tighter uppercase mix-blend-difference flex flex-col items-center justify-center w-full"
        >
          {phase === "counting" ? (
            <span className="font-mono tracking-tighter text-4xl md:text-7xl lg:text-9xl">
              ${counter.toLocaleString()}{counter >= 100000000 ? "+" : ""}
            </span>
          ) : (
            <span className="text-4xl md:text-7xl lg:text-[8rem] xl:text-[10rem] leading-none text-center">DIGITAL SUPREMACY</span>
          )}
        </h1>
      </div>

    </div>
  );
}
