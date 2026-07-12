"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { Code, Cloud, BrainCircuit, Globe, Wrench, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Enterprise Software Development",
    description: "Custom business applications, CRM, ERP, Internal portals, Workflow systems.",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    title: "Microsoft 365 Solutions",
    description: "SharePoint Online, SPFx, Power Automate, Microsoft Graph API, Teams Integration.",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    color: "purple"
  },
  {
    title: "AI & Automation",
    description: "Generative AI Apps, Chatbots, LangGraph Solutions, Gemini AI Integration.",
    icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
    color: "cyan"
  },
  {
    title: "Cloud Development",
    description: "Microsoft Azure, Azure Functions, Cloud Storage, Serverless Applications.",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    title: "Web Development",
    description: "React Applications, Node.js, ASP.NET, Python Flask, Responsive Websites.",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    color: "purple"
  },
  {
    title: "API & Integration",
    description: "REST APIs, Third-party integrations, Authentication, Database integration.",
    icon: <ArrowRight className="w-6 h-6 text-cyan-400" />,
    color: "cyan"
  },
  {
    title: "Maintenance & Support",
    description: "Application maintenance, Performance optimization, Bug fixing, Upgrades.",
    icon: <Wrench className="w-6 h-6 text-blue-400" />,
    color: "blue"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-[#050B20]" id="services">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Services</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We offer comprehensive software development services to help businesses scale, optimize, and innovate.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <PremiumCard 
                glowColor={service.color as any} 
                className="h-full flex flex-col group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 flex-grow mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </PremiumCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
