"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { ArrowRight, Code, Link, MessageCircle } from "lucide-react";
import { FormEvent } from "react";

export const PreFooterCTA = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative py-20 bg-blue-600 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 mix-blend-multiply" />
      <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get a Free AI & Cloud Readiness Audit for your Enterprise
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Discover modernization opportunities and eliminate tech debt before it slows down your growth.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your work email address" 
              required
              className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-4 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
            />
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors flex justify-center items-center gap-2 whitespace-nowrap group shadow-lg">
              Request Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#020617] pt-20 pb-10 border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Qorvyn
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Engineering Intelligent Software for the Future. We specialize in Enterprise Solutions, Microsoft 365, Cloud native platforms, and custom AI applications.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Link className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-purple-600 transition-all">
                <Code className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Enterprise Software", "Microsoft 365 Solutions", "AI & Automation", "Cloud Development", "Web Interfaces", "API Integration"].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Technology</h4>
            <ul className="space-y-3">
              {["React & Next.js", "SharePoint & SPFx", "Azure Services", "Node.js & Python", ".NET & C#", "Generative AI"].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Work", "Team", "Careers", "Contact", "Schedule Call"].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Qorvyn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
