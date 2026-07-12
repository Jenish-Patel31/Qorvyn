"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumSelectProps {
  options: string[];
  placeholder?: string;
  icon?: ReactNode;
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const PremiumSelect = ({ options, placeholder, icon, value, onChange, className }: PremiumSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white transition-all shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50",
          isOpen && "ring-2 ring-blue-500/50 border-blue-500 dark:border-blue-500"
        )}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {icon}
        </div>
        <span className={cn("block truncate text-sm", !value && "text-slate-400 font-normal")}>
          {value || placeholder || "Select an option"}
        </span>
        <ChevronDown className={cn("w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-1"
          >
            <div className="max-h-60 overflow-y-auto w-full">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-3 text-sm transition-colors",
                    value === option 
                      ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium" 
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
