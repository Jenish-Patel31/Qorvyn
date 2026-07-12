"use client";

import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GradientButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  icon?: ReactNode;
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", children, icon, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 active:scale-95";
    
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white hover:bg-[position:100%_0] shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-white/20 px-8 py-3.5",
      secondary: "bg-slate-900/5 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/20 backdrop-blur-md border border-slate-900/10 dark:border-white/10 px-8 py-3.5",
      outline: "bg-transparent text-slate-900 dark:text-white border-2 border-slate-900/20 dark:border-white/20 hover:border-slate-900/50 dark:hover:border-white/50 hover:bg-slate-900/5 dark:hover:bg-white/5 px-8 py-3.5"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
          {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
        </span>
        {variant === "primary" && (
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
        )}
      </motion.button>
    );
  }
);
GradientButton.displayName = "GradientButton";
