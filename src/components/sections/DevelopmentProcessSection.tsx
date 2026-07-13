"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { Search, Workflow, Paintbrush, Blocks, CheckSquare, CloudUpload, LifeBuoy, CheckCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  { 
    id: 1, 
    title: "Discovery", 
    desc: "We understand your business, users, goals, constraints, and success metrics before suggesting any solution.", 
    checks: ["Business requirement mapping", "Audience and competitor review", "Clear project scope"], 
    icon: <Search className="w-12 h-12 text-blue-400" /> 
  },
  { 
    id: 2, 
    title: "Planning", 
    desc: "We turn the scope into a practical roadmap with milestones, technology choices, timelines, and delivery priorities.", 
    checks: ["Feature prioritization", "Technical architecture", "Milestone planning"], 
    icon: <Workflow className="w-12 h-12 text-indigo-400" /> 
  },
  { 
    id: 3, 
    title: "UI/UX Design", 
    desc: "We create user-friendly screens and flows that make the product easy to use, consistent, and conversion-focused.", 
    checks: ["Wireframes and flows", "Interactive prototypes", "Responsive UI design"], 
    icon: <Paintbrush className="w-12 h-12 text-purple-400" /> 
  },
  { 
    id: 4, 
    title: "Development", 
    desc: "Our team builds the product using clean code, scalable architecture, and secure development practices.", 
    checks: ["Frontend and backend build", "API and third-party integration", "Version-controlled delivery"], 
    icon: <Blocks className="w-12 h-12 text-fuchsia-400" /> 
  },
  { 
    id: 5, 
    title: "Testing", 
    desc: "Every feature is tested across devices, browsers, workflows, and edge cases before launch approval.", 
    checks: ["Functional QA", "Performance checks", "Bug fixing and review"], 
    icon: <CheckSquare className="w-12 h-12 text-pink-400" /> 
  },
  { 
    id: 6, 
    title: "Launch", 
    desc: "We deploy the product carefully, verify live behavior, and make sure your team is ready to operate it.", 
    checks: ["Production deployment", "Live verification", "Handover documentation"], 
    icon: <CloudUpload className="w-12 h-12 text-orange-400" /> 
  },
  { 
    id: 7, 
    title: "Support", 
    desc: "After launch, we stay available for updates, monitoring, improvements, and technical support.", 
    checks: ["Maintenance support", "Feature enhancements", "Fast response for issues"], 
    icon: <LifeBuoy className="w-12 h-12 text-emerald-400" /> 
  }
];

export const DevelopmentProcessSection = () => {
  const [activeTab, setActiveTab] = useState(processSteps[0]);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const nextId = (current.id % processSteps.length) + 1;
        return processSteps.find((s) => s.id === nextId) || processSteps[0];
      });
    }, 4500); // 4.5 seconds cycle speed
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleMouseEnter = (step: any) => {
    setIsAutoplay(false);
    setActiveTab(step);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  return (
    <section className="py-24 relative bg-white dark:bg-[#020617]" id="process">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 dark:from-blue-900/10 via-transparent dark:via-[#020617] to-transparent dark:to-[#020617] pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Development Process</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A transparent, agile workflow turning complexity into an organized execution engine.
          </p>
        </AnimatedSection>
        
        <div 
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16"
        >
          
          {/* Left Column: Tab Controls */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2">
            {processSteps.map((step) => {
              const isActive = activeTab.id === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step)}
                  onMouseEnter={() => handleMouseEnter(step)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 text-left overflow-hidden ${
                    isActive 
                      ? "bg-white shadow-md dark:shadow-[0_4px_30px_rgba(37,99,235,0.1)] border-l-4 border-blue-500 dark:bg-white/10" 
                      : "bg-transparent hover:bg-slate-50 dark:hover:bg-white/[0.05] border-l-4 border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <span className={`text-sm font-bold tracking-widest ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500"}`}>
                      0{step.id}
                    </span>
                    <span className={`text-lg font-semibold ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"}`}>
                      {step.title}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Window */}
          <div className="w-full lg:w-2/3">
            <div className="bg-slate-50 dark:bg-[#0A0F1E] border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 h-full min-h-[400px] flex flex-col relative overflow-hidden shadow-2xl">
              {/* Decorative background blur */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full relative z-10"
                >
                  <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-4">
                        <span className="bg-white dark:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold">{activeTab.id}</span>
                        {activeTab.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
                        {activeTab.desc}
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hidden sm:block shrink-0">
                      {activeTab.icon}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 dark:border-white/10 pt-8 mt-auto">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">Key Deliverables</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeTab.checks.map((check, i) => (
                         <div key={i} className="flex items-center gap-3 bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none min-w-0">
                           <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                           <span className="text-slate-800 dark:text-white text-sm font-medium truncate" title={check}>{check}</span>
                         </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
