"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { Users, Briefcase, UserPlus } from "lucide-react";

export const EngagementModelsSection = () => {
  const models = [
    {
      title: "Dedicated Team",
      description: "Full-time engineers integrated directly with your internal teams for long-term collaboration and continuous delivery.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      color: "blue"
    },
    {
      title: "Project-Based",
      description: "End-to-end delivery with fixed scope, timeline, and budget. Ideal for well-defined projects requiring autonomous execution.",
      icon: <Briefcase className="w-8 h-8 text-purple-400" />,
      color: "purple"
    },
    {
      title: "Staff Augmentation",
      description: "Hire specific technical experts on demand to bridge skill gaps and scale your development capacity instantly.",
      icon: <UserPlus className="w-8 h-8 text-cyan-400" />,
      color: "cyan"
    }
  ];

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-[#050B20]" id="engagement">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Engagement Models</h2>
          <p className="text-lg text-slate-600 dark:text-slate-350 max-w-2xl mx-auto">
            Flexible partnership options tailored to your business needs, project complexity, and operational requirements.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <AnimatedSection key={model.title} delay={0.1 * (index + 1)} direction="up">
              <PremiumCard 
                glowColor={model.color as any} 
                className="h-full bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 transition-all hover:-translate-y-1 duration-300"
                hoverEffect
              >
                <div className="flex flex-col items-center text-center w-full h-full py-4">
                  <div className={`w-16 h-16 rounded-2xl bg-${model.color}-500/10 flex items-center justify-center mb-6`}>
                    {model.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{model.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {model.description}
                  </p>
                </div>
              </PremiumCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
