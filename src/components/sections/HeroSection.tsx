"use client";

import { GradientButton } from "../ui/GradientButton";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-slate-50 dark:bg-[#020617] overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Graphic Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />
      
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center justify-center gap-12 lg:gap-16 pt-20 h-full max-w-6xl">
        
        {/* Top Typography Header */}
        <div className="w-full flex flex-col items-center justify-center text-center gap-6 xl:gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 w-fit backdrop-blur-sm mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Engineered for Next-Generation Enterprises</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tighter"
          >
            Elevating Businesses with Next-Generation Software
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto"
          >
            We engineer intelligent SaaS platforms, robust architectures, and bespoke enterprise tools. Move faster and scale smarter with Qorvyn as your dedicated technology partner.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-2 justify-center"
          >
            <a href="#contact" className="block">
              <GradientButton variant="primary" className="!py-4 !px-8 text-base shadow-lg shadow-blue-500/20 dark:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] group">
                Get a Free Technical Audit 
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline" />
              </GradientButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
