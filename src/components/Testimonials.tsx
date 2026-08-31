"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    client: "Rohit Saraf",
    role: "Trading Coach",
    quote: "I was struggling with getting banned constantly and stuck at 1-2 conversions a month. The compliance funnel they built not only stabilized our accounts but completely unlocked our scale. We're now consistently doing 400+ conversions without worrying about SEBI registration bans.",
    metric: "400+ Conversions/mo",
    image: "/rohit-saraf.jpg", // Placeholder if we get real image, else uses fallback styling
    hasVideo: false
  },
  {
    client: "Finanthropist",
    role: "Finance Educator",
    quote: "They plugged a bleeding webinar funnel and dropped our CPL by 50%. The tracking and analytics setup finally gave us the clarity we needed to scale confidently.",
    metric: "2X Course Conversions",
    image: "/finanthropist.jpg",
    hasVideo: false
  },
  {
    client: "Code Hub India",
    role: "EdTech Founder",
    quote: "We stopped paying for students who just wanted free PDFs. The lead quality improved drastically, and our admission team is finally closing high-intent prospects.",
    metric: "120% Admissions",
    image: "/codehub.jpg",
    hasVideo: false
  },
  {
    client: "Sarvital",
    role: "D2C Brand Owner",
    quote: "Taking a legacy offline brand to Shopify in 60 days seemed impossible. Not only did they do it, but they maintained a highly profitable ROAS right out of the gate.",
    metric: "3.5x ROAS",
    image: "/sarvital.jpg",
    hasVideo: false
  }
];

export default function Testimonials() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950 text-white">
      <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden py-12 md:py-24">
        
        {/* Header Section */}
        <div className="px-4 md:px-12 mb-8 md:mb-16 w-full max-w-7xl mx-auto z-10 pointer-events-none">
          <p className="font-mono text-sm tracking-widest text-zinc-500 uppercase mb-2 md:mb-4">Phase 04</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mix-blend-difference">
            WHAT THEY SAY.
          </h2>
        </div>

        {/* Horizontally Scrollable Track */}
        <div className="w-full overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 md:gap-12 px-4 md:px-12 w-max">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 h-[60vh] md:h-[65vh] bg-zinc-900 border border-white/10 rounded-[2rem] p-6 md:p-10 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-500"
              >
                {/* Background Gradient/Noise */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                {/* Quote Icon */}
                <div className="text-6xl md:text-8xl text-white/5 font-serif leading-none absolute top-4 left-6 pointer-events-none">
                  "
                </div>

                <p className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-300 leading-snug mt-8 md:mt-12 relative z-10 flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="mt-8 flex items-center justify-between relative z-10 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    {/* Placeholder for real image or video */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-800 flex items-center justify-center border border-white/20 overflow-hidden relative">
                      {testimonial.hasVideo ? (
                        <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                           <span className="text-xs text-white/50">▶</span>
                        </div>
                      ) : (
                         <div className="w-full h-full bg-zinc-800 flex items-center justify-center font-bold text-xl text-zinc-600">
                           {testimonial.client.charAt(0)}
                         </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="text-lg md:text-xl font-bold tracking-tight text-white">{testimonial.client}</h4>
                      <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="hidden md:block text-right">
                     <p className="text-2xl font-black text-white tracking-tighter">{testimonial.metric}</p>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
