"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { CheckCircle2, ShieldCheck, Lock, Cloud } from "lucide-react";

const reasons = [
  "Enterprise Expertise", "Modern Technologies", "Scalable Architecture", 
  "AI Integration", "Cloud Native", "Fast Delivery", 
  "Transparent Communication", "Dedicated Support", 
  "Agile Development", "Secure Coding Practices"
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-slate-50 dark:from-[#050B20] dark:to-[#020617]">
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Why Choose Qorvyn</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We are more than just developers; we are engineers, architects, and problem solvers committed to your success.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason} delay={index * 0.05} direction="up">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{reason}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Security & Compliance Posture */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Security & Compliance Posture</h3>
          <p className="text-slate-600 dark:text-slate-400">Security is at the heart of our engineering process, ensuring your data remains protected.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <PremiumCard glowColor="purple" hoverEffect={false} className="h-full">
              <ShieldCheck className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Enterprise-Grade Security</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Implementing industry best practices, vulnerability scanning, and robust secure coding frameworks for every deployment.</p>
            </PremiumCard>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <PremiumCard glowColor="blue" hoverEffect={false} className="h-full">
              <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Data Privacy & Identity</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Zero-trust architecture, advanced identity management, RBAC, and strict adherence to global privacy protocols.</p>
            </PremiumCard>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <PremiumCard glowColor="cyan" hoverEffect={false} className="h-full">
              <Cloud className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Secure Cloud Architecture</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hardened cloud infrastructure, encrypted data at rest and in transit, and continuous monitoring via Azure and native tools.</p>
            </PremiumCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
