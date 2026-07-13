"use client";

import { GradientButton } from "../ui/GradientButton";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "../ui/Logo";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Set scrolled state for background styling
    if (latest > 20) setScrolled(true);
    else setScrolled(false);
    
    // Hide header on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const generateLinks = () => [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-max min-w-[300px] lg:min-w-[800px] rounded-full border border-slate-200 dark:border-white/10 transition-all duration-300 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between",
          scrolled ? "bg-white/90 dark:bg-[#020617]/90 shadow-xl shadow-blue-500/5 dark:shadow-2xl dark:shadow-blue-500/10" : "bg-white/60 dark:bg-[#0A0F1E]/60"
        )}
      >
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">Qorvyn</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {generateLinks().map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="block">
            <GradientButton variant="primary" className="!py-2 !px-5 !text-sm whitespace-nowrap">
              Start Project <ArrowRight className="w-4 h-4 ml-1 inline" />
            </GradientButton>
          </a>
        </div>

        <button 
          className="md:hidden text-slate-700 dark:text-slate-300 p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#020617]/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <Logo className="w-8 h-8" />
                <span className="text-white font-bold text-2xl tracking-tight">Qorvyn</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-300 p-2">
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 items-center w-full">
              {generateLinks().map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-300 hover:text-blue-400 transition-colors w-full text-center border-b border-white/5 pb-4"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <GradientButton variant="primary" className="w-full justify-center !py-4 text-lg">
                  Start Project
                </GradientButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
