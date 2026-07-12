"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: "blue" | "purple" | "cyan";
  hoverEffect?: boolean;
}

export const PremiumCard = ({
  className,
  glowColor = "blue",
  hoverEffect = true,
  children,
  ...props
}: PremiumCardProps) => {
  const glowVariants = {
    blue: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
  };

  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/5 backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-lg dark:shadow-none",
        hoverEffect && "hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-white/10",
        hoverEffect && glowVariants[glowColor],
        className
      )}
      {...props}
    >
      {/* Subtle top inner highlight */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/5 dark:ring-white/10 pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full p-6">
        {children}
      </div>
    </div>
  );
};
