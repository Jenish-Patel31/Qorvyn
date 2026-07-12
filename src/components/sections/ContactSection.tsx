"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { GradientButton } from "../ui/GradientButton";
import { Mail, Phone, MapPin, Calendar, Send, User, Building, PhoneCall, Briefcase, Coins, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission flow without real backend yet
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-[#020617] overflow-hidden" id="contact">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/50 dark:from-blue-900/20 via-transparent dark:via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's Build Something Extraordinary</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to accelerate your digital transformation? Contact us to discuss your project requirements.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information & Booking */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection direction="left">
              <PremiumCard glowColor="purple" className="p-8 h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Email Us</p>
                      <a href="mailto:jenishkp07@gmail.com" className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        jenishkp07@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Call Us</p>
                      <a href="tel:+919979891854" className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +91-9979891854
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Location</p>
                      <p className="font-semibold text-slate-900 dark:text-white">Gandhinagar, Gujarat, India</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Serving Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-white/10">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">Or bypass the form:</h4>
                  <GradientButton onClick={(e: any) => { e.preventDefault(); setIsModalOpen(true); }} variant="secondary" className="w-full flex justify-center py-4" icon={<Calendar className="w-4 h-4" />}>
                    Schedule Discovery Call
                  </GradientButton>
                </div>
              </PremiumCard>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right" delay={0.2} className="h-full">
              <PremiumCard glowColor="blue" className="p-8 h-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input required type="text" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input required type="email" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="john@company.com" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Company Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input type="text" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="Company Ltd." />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <PhoneCall className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input type="tel" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Service Required</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Briefcase className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input type="text" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="e.g. App Development" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Budget Estimate</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Coins className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input type="text" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="Enter your budget" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Project Description</label>
                    <textarea required rows={4} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none shadow-sm dark:shadow-none placeholder-slate-400" placeholder="Tell us about your requirements, goals, and timeline..."></textarea>
                  </div>

                  <button 
                    disabled={status !== "idle"}
                    className="w-full relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-medium transition-all duration-300 active:scale-95 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white hover:bg-[position:100%_0] shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-white/20 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "idle" && <><Send className="w-4 h-4" /> Send Message</>}
                    {status === "submitting" && "Sending..."}
                    {status === "success" && "Message Sent Successfully!"}
                  </button>
                </form>
              </PremiumCard>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-4 p-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="font-bold text-slate-900 dark:text-white">Schedule Discovery Call</h3>
              </div>
              <div className="w-full h-[70vh] min-h-[500px]">
                <iframe 
                  src="https://cal.com/jenishpatel" 
                  className="w-full h-full border-0" 
                  title="Schedule Call"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
