"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";

const techCategories = [
  {
    title: "Microsoft Stack",
    skills: ["Microsoft 365", "SharePoint Online", "SPFx", "PnPjs", "Microsoft Graph", "Power Automate", "Azure Functions"],
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "AI & Automation",
    skills: ["Machine Learning", "Generative AI", "Prompt Engineering", "LangGraph", "Gemini API"],
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Frontend",
    skills: ["React", "Material UI", "Fluent UI", "Tailwind CSS"],
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Programming",
    skills: ["C#", "TypeScript", "JavaScript", "Python", "SQL"],
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Backend & Cloud",
    skills: ["ASP.NET", "Node.js", "Flask", "REST APIs", "Azure", "GitHub"],
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MySQL", "SharePoint Lists"],
    className: "lg:col-span-2 lg:row-span-1",
  }
];

export const TechnologiesSection = () => {
  return (
    <section className="py-24 relative bg-[#020617]" id="technologies">
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Tech Stack</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We leverage modern, enterprise-grade technologies to build secure, scalable, and high-performance applications.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[minmax(180px,auto)]">
          {techCategories.map((category, index) => (
            <AnimatedSection 
              key={category.title} 
              delay={index * 0.1}
              className={category.className}
            >
              <PremiumCard 
                glowColor="cyan" 
                hoverEffect={true} 
                className="h-full bg-white/[0.02]"
              >
                <h3 className="text-xl font-semibold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </PremiumCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
