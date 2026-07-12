"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, Vanguard FinTech",
    content: "Qorvyn transformed our legacy systems into a modern cloud-native architecture. Their expertise in Microsoft Azure and React is truly unmatched. The project was delivered ahead of schedule and the code quality was exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Peterson",
    role: "Director of IT, BuildFast Corp",
    content: "We hired them to build a comprehensive construction management platform. The AI integrations they implemented saved us hundreds of manual hours per week. A highly professional team.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    role: "VP Engineering, HealthSync",
    content: "The staff augmentation model worked perfectly for us. Qorvyn's engineers integrated seamlessly into our agile workflows and immediately started pushing high-quality features.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative bg-gradient-to-t from-white to-slate-50 dark:from-[#020617] dark:to-[#050B20]">
      <div className="max-w-5xl mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Client Testimonials</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what leading enterprises say about our engineering excellence.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <PremiumCard hoverEffect={false} glowColor="cyan" className="h-full flex flex-col justify-center items-center text-center p-6 lg:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl font-medium text-slate-900 dark:text-white mb-6 italic px-4">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <div className="font-bold text-base text-blue-600 dark:text-blue-400">{testimonials[currentIndex].name}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{testimonials[currentIndex].role}</div>
                </div>
              </PremiumCard>
            </motion.div>
          </AnimatePresence>
          
          {/* Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
