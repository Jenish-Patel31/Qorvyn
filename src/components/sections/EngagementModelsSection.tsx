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
    <section className="py-24 relative bg-white dark:bg-transparent">
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Engagement Models</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Flexible partnership options tailored to your business needs, project complexity, and operational requirements.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {models.map((model, index) => (
            <AnimatedSection key={model.title} delay={0.1 * (index + 1)} direction="up">
              <PremiumCard 
                glowColor={model.color as any} 
                className="h-full flex flex-col items-center text-center p-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${model.color}-500/10 flex items-center justify-center mb-6`}>
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{model.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {model.description}
                </p>
              </PremiumCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
