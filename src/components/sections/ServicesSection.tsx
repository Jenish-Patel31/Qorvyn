"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cloud, BrainCircuit, Globe, Shield, Smartphone, ArrowRight, CheckCircle2, X } from "lucide-react";

interface Service {
  title: string;
  subHeadline: string;
  description: string;
  techStack: string[];
  capabilities: string[];
  icon: React.ReactNode;
  color: string;
  glowColor: "blue" | "purple" | "cyan";
}

const servicesListing: Service[] = [
  {
    title: "Custom Web Applications",
    subHeadline: "Enterprise-grade frontends and scalable cloud-native architectures.",
    description: "Tailored business apps, SaaS platforms, internal portals, and database-driven web applications.",
    techStack: ["Next.js", "React", "Node.js", "ASP.NET Core", "Python", "TailwindCSS"],
    capabilities: [
      "High-performance responsive user interfaces",
      "Secure multi-tenant SaaS dashboards",
      "Legacy codebase modernization & upgrades"
    ],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: "blue",
    glowColor: "blue"
  },
  {
    title: "AI & Workflow Automation",
    subHeadline: "Smart agentic architectures and resilient distributed task orchestration.",
    description: "Automated business workflows, generative AI chatbots, and Retrieval-Augmented Generation (RAG).",
    techStack: ["LangGraph", "Temporal.io", "OpenAI SDK", "Pinecone", "Python", "FastAPI"],
    capabilities: [
      "Agentic workflows and multi-agent systems via LangGraph",
      "Durable state background workflows using Temporal.io",
      "Enterprise RAG for internal knowledge search"
    ],
    icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
    color: "cyan",
    glowColor: "cyan"
  },
  {
    title: "Microsoft 365 & Power Platform",
    subHeadline: "Optimizing digital workspace collaboration and custom platform extensions.",
    description: "SharePoint intranets, SPFx web parts, Power Automate flows, and Teams integrations.",
    techStack: ["SharePoint", "SPFx", "Power Automate", "Microsoft Graph API", "PowerApps", "React"],
    capabilities: [
      "Corporate intranets and centralized cloud document hubs",
      "Sleek custom SPFx web parts built in React",
      "Automated enterprise workflows and Graph API connections"
    ],
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    color: "purple",
    glowColor: "purple"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    subHeadline: "High-availability environments, serverless endpoints, and automated deployments.",
    description: "Cloud setup, infrastructure as code, CI/CD pipelines, and microservices orchestration.",
    techStack: ["Azure", "AWS", "Terraform", "Docker", "GitHub Actions", "Kubernetes"],
    capabilities: [
      "Infrastructure as Code setup using Terraform",
      "Automated CI/CD pipelines for zero-downtime shipping",
      "Cloud security posture, IAM policies, and VPC routing"
    ],
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    color: "blue",
    glowColor: "blue"
  },
  {
    title: "API Engineering & Integration",
    subHeadline: "High-throughput middleware, data synchronization, and security bridges.",
    description: "Custom REST APIs, GraphQL endpoints, payment integrations, and database design.",
    techStack: ["REST APIs", "GraphQL", "PostgreSQL", "Redis", "Auth0 / JWT", "Stripe"],
    capabilities: [
      "Scalable API architecture with documentation",
      "Secure SaaS app authorization models and user management",
      "Database schema tuning and low-latency query engineering"
    ],
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    color: "cyan",
    glowColor: "cyan"
  },
  {
    title: "Mobile App Development",
    subHeadline: "Stunning native and cross-platform mobile experiences.",
    description: "React Native and Flutter mobile applications with rich performance and design.",
    techStack: ["React Native", "Flutter", "iOS/Android SDKs", "Tailwind Native", "Firebase"],
    capabilities: [
      "Cross-platform applications published to iOS and Android Stores",
      "Offline database management and background synchronization",
      "Fluid native-grade gesture navigation and micro-animations"
    ],
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    color: "purple",
    glowColor: "purple"
  }
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  // Prevent scroll when modal is active
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeService]);

  const handleInquire = (serviceTitle: string) => {
    // Dispatch custom event to select the service inside ContactSection
    window.dispatchEvent(
      new CustomEvent("select-service", { detail: serviceTitle })
    );
    // Close modal
    setActiveService(null);
    // Smooth scroll to contact selector
    setTimeout(() => {
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesListing.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <button
                onClick={() => setActiveService(service)}
                className="w-full text-left focus:outline-none h-full block"
              >
                <PremiumCard
                  glowColor={service.glowColor}
                  className="h-full bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 transition-all hover:-translate-y-1 duration-300"
                  hoverEffect
                >
                  <div className="flex flex-col items-center text-center w-full h-full py-2">
                    <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/10 flex items-center justify-center mb-6 border border-${service.color}-500/20`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-6 opacity-80 group-hover:opacity-100 transition-all">
                      <span>Explore details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </PremiumCard>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-white bg-slate-100 dark:bg-white/5 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Header */}
              <div className={`p-6 md:p-8 bg-gradient-to-br from-${activeService.color}-500/10 to-transparent border-b border-slate-200 dark:border-white/5`}>
                <div className={`w-12 h-12 rounded-xl bg-${activeService.color}-500/20 flex items-center justify-center mb-4`}>
                  {activeService.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wider">
                  {activeService.subHeadline}
                </p>
              </div>

              {/* Scrollable details */}
              <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Capabilities</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Scope capabilities list */}
                <div className="space-y-3">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Core Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-md border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 bg-slate-50 dark:bg-[#070d1e] border-t border-slate-200 dark:border-white/5 flex justify-end items-center">
                <button
                  onClick={() => handleInquire(activeService.title)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/10 dark:shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group-hover:translate-x-1"
                >
                  <span>Inquire about this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
