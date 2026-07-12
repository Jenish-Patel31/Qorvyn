"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { Link as LinkIcon, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: "Aksha Katwala" | "Jenish Patel";
  role: string;
  bio: string[];
  linkedin: string;
  whatsapp: string;
  image: string;
  colorName: string;
  colorHex: string;
};

const team: TeamMember[] = [
  {
    name: "Aksha Katwala",
    role: "Microsoft 365 & Cloud Solutions Engineer",
    bio: [
      "Aksha Katwala is a customer-first, lead-from-the-front engineer with a strong background in scaling technology solutions.",
      "She completed her diploma as a top ranker at Maharaja Sayajirao University and graduated from SVIT, Vasad.",
      "She specializes in building robust enterprise architectures with Microsoft technologies, cloud infrastructure, and intelligent automation."
    ],
    linkedin: "https://www.linkedin.com/in/aksha-katwala-640a4b293",
    whatsapp: "+919173004631",
    image: "/aksha.jpeg",
    colorName: "blue",
    colorHex: "#3b82f6" // blue-500
  },
  {
    name: "Jenish Patel",
    role: "Full Stack Developer & DevOps Engineer",
    bio: [
      "Jenish Patel is a dedicated technologist focused on crafting premium, scalable web applications and securing robust cloud deployments.",
      "He completed his diploma as a top ranker at Maharaja Sayajirao University and graduated from Nirma University.",
      "His expertise lies in building high-performance software systems and driving digital innovation for modern enterprises."
    ],
    linkedin: "https://www.linkedin.com/in/jenish-patel-31k",
    whatsapp: "+919979891854",
    image: "/jenish.png",
    colorName: "purple",
    colorHex: "#a855f7" // purple-500
  }
];

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Disable scroll when modal is open
  if (typeof window !== "undefined") {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-[#020617]" id="team">
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Founding Engineers</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Led by passionate technologists with extensive expertise in full-stack engineering, cloud architecture, and Microsoft solutions.
          </p>
        </AnimatedSection>

        {/* Minimal Grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto w-full">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.2} className="flex justify-center transition-transform hover:-translate-y-2 cursor-pointer group w-full md:w-1/2" onClick={() => setSelectedMember(member)}>
              <div className="flex flex-col text-center p-6 border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.05] shadow-lg dark:shadow-none rounded-xl w-full max-w-sm mx-auto transition-colors relative overflow-hidden">
                <div className="w-full aspect-square bg-slate-200 dark:bg-[#0a0f1e] mb-5 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10 group-hover:ring-blue-500/30 dark:group-hover:ring-white/30 transition-all rounded-lg relative">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-xs font-semibold text-white tracking-widest uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">View Profile</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 dark:bg-[#020617]/95 backdrop-blur-xl p-4 sm:p-6 md:p-12 overflow-y-auto"
            onClick={() => setSelectedMember(null)}
          >
            <button 
              className="fixed top-6 right-6 text-slate-600 dark:text-slate-400 hover:text-slate-900 border border-slate-200 dark:border-transparent dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full p-3 transition-colors z-[101]"
              onClick={(e) => { e.stopPropagation(); setSelectedMember(null); }}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-white dark:bg-[#0B1121] rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col md:flex-row min-h-[60vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Large Image */}
              <div className="w-full md:w-5/12 bg-slate-200 dark:bg-[#050814] relative flex-shrink-0 flex items-center justify-center min-h-[300px]">
                <Image 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  fill
                  className="object-cover object-top md:absolute md:inset-0 aspect-square md:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0B1121] md:from-transparent md:bg-gradient-to-r md:to-white/5 dark:md:to-[#0B1121]/5 to-transparent opacity-80 md:opacity-100 pointer-events-none" />
              </div>

              {/* Right Side: Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col w-full md:w-7/12 relative z-10">
                <div 
                  className="inline-block text-white font-bold tracking-widest uppercase text-sm md:text-base px-3 py-1 mb-2 rounded w-fit"
                  style={{ backgroundColor: selectedMember.colorHex }}
                >
                  {selectedMember.name}
                </div>
                <h4 className="text-xl md:text-2xl text-slate-800 dark:text-slate-300 font-medium mb-8 border-b border-slate-200 dark:border-white/10 pb-6">{selectedMember.role}</h4>
                
                <div className="flex flex-col gap-5 mb-10 overflow-y-auto pr-4 custom-scrollbar flex-grow">
                  {selectedMember.bio.map((paragraph, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/20 transition-all font-semibold text-sm"
                  >
                    <LinkIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${selectedMember.whatsapp.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 transition-all font-semibold text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
