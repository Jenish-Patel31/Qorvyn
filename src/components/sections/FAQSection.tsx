"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer custom software development or just pre-built solutions?",
    answer: "We engineer 100% custom enterprise software tailored specifically to your business workflows. While we do leverage established architectural patterns and robust frameworks (like Next.js, .NET, and React) to accelerate delivery, every solution is purpose-built for your exact requirements."
  },
  {
    question: "How long does a typical digital transformation project take?",
    answer: "Project timelines vary significantly based on scope and complexity, but we promise fast delivery. We can confidently hand over the whole project within 1 month with tight limits for sure."
  },
  {
    question: "What exactly do your Microsoft 365 Solutions cover?",
    answer: "Our Microsoft 365 expertise includes SharePoint Online intranets, custom SPFx web parts, complex Power Automate workflows, Microsoft Graph API integrations, and Teams application development. We help you maximize the ROI of your M365 licensing."
  },
  {
    question: "How do you handle maintenance and support after deployment?",
    answer: "We provide the first 1 year of free maintenance after deployment! This includes regular security patches, performance optimization, bug fixing, 24/7 monitoring, and continuous cloud infrastructure management."
  },
  {
    question: "How does the pricing and billing structure work?",
    answer: "Depending on the engagement model chosen, we offer Fixed Price for clearly scoped projects, Time & Materials for flexible / agile projects, and Monthly Retainers for dedicated engineering teams and support."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative bg-white dark:bg-[#020617]">
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our services, methodologies, and technical capabilities.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <div 
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] overflow-hidden transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.04]"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-slate-900 dark:text-white md:text-lg pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
