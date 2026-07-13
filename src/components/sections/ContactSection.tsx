"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { PremiumCard } from "../ui/PremiumCard";
import { GradientButton } from "../ui/GradientButton";
import { Mail, Phone, MapPin, Calendar, Send, User, Building, PhoneCall, Briefcase, Coins, X } from "lucide-react";
import { FormEvent, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs";

/*
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdb-h3W6yIdp6Bu6jImEyNn73KlGmvz-8-3q6rORnj39fY1VA/formResponse";
const FORM_FIELDS = [
  { name: "entry.1794908884", key: "fullName" },
  { name: "entry.1865925368", key: "email" },
  { name: "entry.1521864711", key: "company" },
  { name: "entry.1538834148", key: "phone" },
  { name: "entry.202136330", key: "service" },
  { name: "entry.1280273126", key: "budget" },
  { name: "entry.1516595138", key: "description" },
];
*/
const CONTACT_EMAIL = "qorvynsoftware@gmail.com";

const EMPTY_FORM = { fullName: "", email: "", company: "", phone: "", service: "", budget: "", description: "" };

const PHONE_PLACEHOLDERS = [
  "+91 99798 91854",
  "+1 (555) 000-0000",
  "+44 20 7946 0958",
];

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % PHONE_PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const serviceName = (e as CustomEvent).detail;
      setFormData((prev) => ({ ...prev, service: serviceName }));
      
      setTimeout(() => {
        const input = document.getElementById("service-input");
        if (input) {
          input.focus();
        }
      }, 300);
    };

    window.addEventListener("select-service", handleSelectService);
    return () => window.removeEventListener("select-service", handleSelectService);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // JS-based Email Validation Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("submitting");

    // 1. EmailJS Flow (Frontend-only Browser Flow)
    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        company_name: formData.company,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        message: formData.description,
        reply_to: formData.email,
        to_email: EMAILJS_CONFIG.TO_EMAIL || CONTACT_EMAIL,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus("success");
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Send Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);

      // Fallback/Legacy options commented out for teammate
      /*
      // Google Form submission fallback
      try {
        const body = new URLSearchParams();
        FORM_FIELDS.forEach((f) => {
          body.append(f.name, formData[f.key as keyof typeof formData]);
        });

        await fetch(GOOGLE_FORM_ACTION, {
          method: "POST",
          mode: "no-cors",
          body,
        });
      } catch {
        // silently continue
      }

      // Mailto client fallback
      const subject = encodeURIComponent(`New Inquiry from ${formData.fullName}`);
      const mailBody = encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nDescription:\n${formData.description}`
      );
      window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${mailBody}`, "_self");
      */
    }
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
                      <a href="mailto:qorvynsoftware@gmail.com" className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        qorvynsoftware@gmail.com
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
                        <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="john@company.com" />
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
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="Company Ltd." />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <PhoneCall className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder={PHONE_PLACEHOLDERS[placeholderIdx]} />
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
                        <input id="service-input" type="text" name="service" value={formData.service} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="e.g. App Development" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Budget Estimate</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Coins className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                        </div>
                        <input type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm dark:shadow-none placeholder-slate-400" placeholder="Enter your budget" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Project Description</label>
                    <textarea required rows={4} name="description" value={formData.description} onChange={handleChange} className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none shadow-sm dark:shadow-none placeholder-slate-400" placeholder="Tell us about your requirements, goals, and timeline..."></textarea>
                  </div>

                  <button 
                    disabled={status !== "idle"}
                    className="w-full relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-medium transition-all duration-300 active:scale-95 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white hover:bg-[position:100%_0] shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-white/20 py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "idle" && <><Send className="w-4 h-4" /> Send Message</>}
                    {status === "submitting" && "Sending..."}
                    {status === "success" && "Message Sent Successfully!"}
                    {status === "error" && "Failed to Send. Please Try Again."}
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
