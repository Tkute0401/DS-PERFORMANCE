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
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">How much are you burning on ads per month?</h2>
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
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">You don't need us yet.</h2>
                    <p className="text-white/60 mb-8 text-lg">We only fix systems spending $10k+ a month. Until then, use these resources to get your house in order.</p>
                    <button onClick={() => { closeConversionModal(); setStep(1); }} className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/5">
                      Get Resources
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">
                      {selectedAvatar === "enterprise" ? "Book a Strategy Audit" : "Apply for Partnership"}
                    </h2>
                    <p className="text-white/60 mb-8 text-lg">You qualify for a performance teardown. Let's find exactly where you're leaking capital.</p>
                    <div className="w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-6 p-8 text-center">
                      <p className="text-xl font-medium text-white/80">
                        Chat directly with our team on WhatsApp to get started.
                      </p>
                      <a 
                        href="https://wa.me/919689772890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-[#25D366]/20"
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Chat on WhatsApp
                      </a>
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
