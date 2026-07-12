"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { Target, Compass, Heart, ArrowUpRight, Cpu, Cloud, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

export const AboutUsSection = () => {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-white dark:bg-transparent min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-10 lg:mb-12">
          <AnimatedSection className="max-w-xl text-left">
            <h2 className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">Who We Are</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Empowering Digital Transformation</h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Qorvyn is a software development company dedicated to delivering innovative, scalable, and secure digital solutions. Our expertise spans enterprise software, Microsoft ecosystem development, AI integration, cloud computing, automation, and custom web applications. We combine technical excellence with modern design to help businesses accelerate digital transformation.
            </p>
          </AnimatedSection>

          {/* Interactive Product Mockup Graphic */}
          <AnimatedSection className="w-full relative flex items-center justify-center perspective-[2000px] h-[300px] sm:h-[350px]">
            {/* Main Dashboard Window */}
            <motion.div
              initial={{ rotateY: -15, rotateX: 10 }}
              animate={{ 
                rotateY: [-15, -10, -15], 
                rotateX: [10, 15, 10],
                y: [-10, 10, -10]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-50/90 dark:bg-[#0B1121]/80 backdrop-blur-2xl rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col overflow-hidden relative z-10 shadow-2xl dark:shadow-[0_40px_100px_-15px_rgba(37,99,235,0.2)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Mac-style Window Header */}
              <div className="h-8 sm:h-10 border-b border-slate-200/80 dark:border-white/10 flex items-center px-4 gap-2 bg-slate-100/50 dark:bg-slate-900/50">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
                <div className="flex-1 flex justify-center mr-8">
                  <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-widest">Qorvyn</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="flex-1 p-3 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5 bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-transparent dark:to-blue-900/10">
                 
                 {/* Left: AI Chat Interface Mock */}
                 <div className="flex-1 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-white/5 p-3 sm:p-4 flex flex-col gap-2 relative overflow-hidden shadow-sm dark:shadow-none">
                   <div className="flex items-center gap-2 mb-1">
                     <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
                       <Cpu className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                     </div>
                     <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">AI Engine</span>
                   </div>
                   
                   {/* User Prompt */}
                   <div className="self-end bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[8.5px] py-1.5 px-3 rounded-l-lg rounded-tr-lg max-w-[85%] border border-slate-200/50 dark:border-transparent">
                     Deploy CRM and scale endpoints.
                   </div>
                   
                   {/* AI Response */}
                   <div className="self-start bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-800 dark:text-blue-300 text-[8.5px] py-2 px-3 rounded-r-lg rounded-bl-lg max-w-[95%]">
                     <div className="flex items-center gap-1.5 mb-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]" />
                       <span className="font-bold tracking-wide text-[8px] uppercase">Executing Pipeline</span>
                     </div>
                     Automated deployment initiated. Provisioning 3 new Azure instances...
                   </div>
                 </div>
                 
                 {/* Right: Cloud Operations */}
                 <div className="flex-1 flex flex-col gap-2 justify-center">
                   <div className="flex justify-between items-center bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-white/5 p-2 sm:p-3 shadow-sm">
                     <div className="flex items-center gap-2">
                       <Cloud className="w-3 h-3 text-emerald-500" />
                       <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300">API Gateway</span>
                     </div>
                     <span className="text-[7.5px] font-bold tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 px-2 py-0.5 rounded-full">ACTIVE</span>
                   </div>
                   
                   <div className="flex justify-between items-center bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-white/5 p-2 sm:p-3 shadow-sm">
                     <div className="flex items-center gap-2">
                       <Database className="w-3 h-3 text-blue-500" />
                       <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300">Azure SQL</span>
                     </div>
                     <span className="text-[7.5px] font-bold tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 px-2 py-0.5 rounded-full">SYNCED</span>
                   </div>
                   
                   <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-200 border-dashed dark:border-white/5 dark:border-solid p-2 sm:p-3 shadow-sm">
                     <div className="flex items-center gap-2 opacity-60">
                       <Layers className="w-3 h-3 text-purple-500" />
                       <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400">Auth Service</span>
                     </div>
                     <span className="text-[7.5px] font-bold tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 px-2 py-0.5 rounded-full animate-pulse">BUILDING</span>
                   </div>
                 </div>
              </div>
            </motion.div>

            {/* Floating UI Widget: Code Terminal */}
            <motion.div 
              animate={{ y: [0, 10, 0], rotateZ: [2, -2, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[5%] sm:bottom-[10%] left-[-5%] sm:left-[-10%] z-30 transform-gpu"
            >
              <div className="bg-white dark:bg-[#0f172a] p-2.5 sm:p-3 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-slate-800 flex flex-col gap-1 w-40 sm:w-48 font-mono text-[9px] sm:text-[10px]">
                <div className="flex gap-1 text-slate-700 dark:text-slate-400 font-semibold dark:font-normal">
                   <span className="text-purple-600 dark:text-purple-400">const</span> run <span className="text-blue-600 dark:text-blue-400">=</span> async () <span className="text-blue-600 dark:text-blue-400">{"=>"}</span> {"{"}
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 pl-3 overflow-hidden whitespace-nowrap font-semibold dark:font-normal">
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                    className="inline-block overflow-hidden border-r-2 border-emerald-500 dark:border-emerald-400"
                  >
                    await qorvyn.serve();
                  </motion.span>
                </div>
                <div className="text-slate-700 dark:text-slate-400 font-semibold dark:font-normal">{"}"}</div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <AnimatedSection delay={0.1}>
            <PremiumCard glowColor="blue" className="h-full !p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Mission</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Empowering businesses through intelligent software and innovative technology.
              </p>
            </PremiumCard>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <PremiumCard glowColor="purple" className="h-full !p-5">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vision</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                To become a globally recognized software engineering company delivering impactful digital experiences.
              </p>
            </PremiumCard>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <PremiumCard glowColor="cyan" className="h-full !p-5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Values</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Innovation, Quality, Transparency, Customer Success, Future-Proof Solutions, Client-Centric Innovation.
              </p>
            </PremiumCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
