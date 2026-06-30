"use client";

import { useUIStore } from "@/store/useUIStore";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { X } from "@phosphor-icons/react";

type FormData = {
  avatar: string;
  adSpend: string;
};

export default function ConversionModal() {
  const { isConversionModalOpen, closeConversionModal } = useUIStore();
  const [step, setStep] = useState(1);
  const { register, watch } = useForm<FormData>();
  const [isErrorShake, setIsErrorShake] = useState(false);

  const selectedAvatar = watch("avatar");
  const selectedSpend = watch("adSpend");

  const handleNext = () => {
    if (step === 1 && !selectedAvatar) {
      triggerShake();
      return;
    }
    if (step === 2 && !selectedSpend) {
      triggerShake();
      return;
    }
    setStep(step + 1);
  };

  const triggerShake = () => {
    setIsErrorShake(true);
    setTimeout(() => setIsErrorShake(false), 500);
  };

  return (
    <AnimatePresence>
      {isConversionModalOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[9999] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <button 
            onClick={() => { closeConversionModal(); setStep(1); }}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
          >
            <X size={32} />
          </button>

          <motion.div 
            animate={isErrorShake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl"
          >
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Who are we speaking with?</h2>
                <div className="flex flex-col gap-4">
                  <label className={`p-6 border rounded-xl cursor-pointer transition-colors ${selectedAvatar === "enterprise" ? "border-white bg-white/10" : "border-white/10 hover:border-white/30"}`}>
                    <input type="radio" value="enterprise" className="hidden" {...register("avatar")} />
                    <span className="text-xl font-bold">Enterprise / B2B</span>
                    <p className="text-white/50 mt-2">I lead a marketing team or organization.</p>
                  </label>
                  <label className={`p-6 border rounded-xl cursor-pointer transition-colors ${selectedAvatar === "d2c" ? "border-white bg-white/10" : "border-white/10 hover:border-white/30"}`}>
                    <input type="radio" value="d2c" className="hidden" {...register("avatar")} />
                    <span className="text-xl font-bold">7-8 Figure D2C Brand</span>
                    <p className="text-white/50 mt-2">I am a founder or growth operator.</p>
                  </label>
                </div>
                <button onClick={handleNext} className="mt-8 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full w-full hover:bg-white/90">
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Current Monthly Ad Spend?</h2>
                <div className="flex flex-col gap-4">
                  <label className={`p-6 border rounded-xl cursor-pointer transition-colors ${selectedSpend === "under10k" ? "border-white bg-white/10" : "border-white/10 hover:border-white/30"}`}>
                    <input type="radio" value="under10k" className="hidden" {...register("adSpend")} />
                    <span className="text-xl font-bold">Under $10,000 / mo</span>
                  </label>
                  <label className={`p-6 border rounded-xl cursor-pointer transition-colors ${selectedSpend === "10k-50k" ? "border-white bg-white/10" : "border-white/10 hover:border-white/30"}`}>
                    <input type="radio" value="10k-50k" className="hidden" {...register("adSpend")} />
                    <span className="text-xl font-bold">$10,000 - $50,000 / mo</span>
                  </label>
                  <label className={`p-6 border rounded-xl cursor-pointer transition-colors ${selectedSpend === "50k+" ? "border-white bg-white/10" : "border-white/10 hover:border-white/30"}`}>
                    <input type="radio" value="50k+" className="hidden" {...register("adSpend")} />
                    <span className="text-xl font-bold">$50,000+ / mo</span>
                  </label>
                </div>
                <button onClick={handleNext} className="mt-8 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full w-full hover:bg-white/90">
                  Continue
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                {selectedSpend === "under10k" ? (
                  <>
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">Not quite ready.</h2>
                    <p className="text-white/60 mb-8 text-lg">We currently only partner with brands spending $10k+ monthly. Here are some free resources to help you scale to that point.</p>
                    <button onClick={() => { closeConversionModal(); setStep(1); }} className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/5">
                      Get Resources
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">
                      {selectedAvatar === "enterprise" ? "Book a Strategy Audit" : "Apply for Partnership"}
                    </h2>
                    <p className="text-white/60 mb-8 text-lg">You qualify for a high-level performance teardown. Let&apos;s map out your next inflection point.</p>
                    <div className="w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                      <span className="text-white/30 uppercase tracking-widest">[ {selectedAvatar === "enterprise" ? "Calendly Embed" : "Application Form Embed"} ]</span>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
