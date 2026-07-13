"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Microsoft", "Enterprise", "AI", "Cloud", "Web", "Automation"];

const projects = [
  {title: "Food Delivery App", category: "Web", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop"},
  {title: "MediBot", category: "AI", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" },
  { title: "Microsoft 365 Enterprise Solutions", category: "Microsoft", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
  { title: "Construction Management Platform", category: "Enterprise", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" },
  { title: "Workflow Automation Systems", category: "Automation", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
  { title: "AI Assistant Platform", category: "AI", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop" },
  { title: "Business Dashboards", category: "Web", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
  { title: "Cloud Applications", category: "Cloud", image: "https://images.unsplash.com/photo-1544197450-5dcfe5823ac5?q=80&w=600&auto=format&fit=crop" },
  { title: "Web Portals", category: "Web", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop" },
  { title: "Document Management Systems", category: "Enterprise", image: "https://images.unsplash.com/photo-1568225422896-10118fb32dc4?q=80&w=600&auto=format&fit=crop" },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-[#050B20]" id="work">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Portfolio</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
            A selection of high-impact digital solutions engineered for enterprises worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                    : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PremiumCard glowColor="blue" className="h-[300px] p-0 group overflow-hidden cursor-pointer" hoverEffect>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
