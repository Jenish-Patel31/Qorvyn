"use client";

import { motion } from "framer-motion";

export const TrustedBySection = () => {
  // Using generic names as placeholders for enterprise logos
  const logos = [
    "Acme Corp", "GlobalTech", "Nexus Systems", "Vanguard Web", 
    "Stellar Cloud", "Quantum AI", "Vertex Dynamics", "Horizon Digital"
  ];
  
  // Duplicate the array to create an infinite loop effect
  const tickerLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          Engineered for Next-Generation Enterprises
        </p>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10" />
        
        <motion.div
           animate={{
             x: ["0%", "-50%"]
           }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 30
           }}
           className="flex flex-nowrap gap-16 md:gap-24 items-center whitespace-nowrap px-8"
        >
          {tickerLogos.map((logo, index) => (
            <div 
              key={`${logo}-${index}`} 
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-slate-400 to-slate-600">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
