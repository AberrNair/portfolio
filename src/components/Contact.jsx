import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#0F766E', '#FF6B4A', '#FFB703', '#134E4A']
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background court grid */}
      <div className="absolute inset-0 bg-court-pattern pointer-events-none opacity-40" />

      {/* Decorative gradient blur */}
      <div className="absolute -top-10 right-10 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134E4A]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#134E4A] tracking-tight">
            Let's <span className="text-[#FF6B4A]">Connect</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563]">
            Whether it's discussing campus initiatives, sports tournaments, collaborative projects, or travel stories—my inbox is always open!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Placeholder Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-card-lg p-6 sm:p-7 border border-[#0F766E]/15 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-[#134E4A] mb-4">
                Reach Out Directly
              </h3>
              
              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8F0] border border-teal-100 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0F766E]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#6B7280] uppercase block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#134E4A] hover:text-[#FF6B4A] transition-colors"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 text-gray-500 hover:text-[#0F766E] rounded-lg hover:bg-white transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Placeholder Link */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8F0] border border-teal-100 group hover:border-[#0F766E]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#6B7280] uppercase block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors">
                        linkedin.com/in/abeernair
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B4A] transition-colors" />
                </a>

                {/* GitHub Placeholder Link */}
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF8F0] border border-teal-100 group hover:border-[#0F766E]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-800">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#6B7280] uppercase block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors">
                        github.com/abeernair
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B4A] transition-colors" />
                </a>
              </div>
            </div>

            {/* Campus Info Card */}
            <div className="bg-gradient-to-r from-[#134E4A] to-[#0F766E] rounded-card-lg p-6 text-white shadow-soft">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB703] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    Campus Location
                  </h4>
                  <p className="text-xs text-teal-100 mt-1 leading-relaxed">
                    SVKM's NMIMS MPSTME, Shirpur Campus, Maharashtra
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-[#FFB703] bg-white/10 px-2.5 py-1 rounded-md border border-white/20">
                    B.Tech Information Technology
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-card-lg p-7 sm:p-9 border border-[#0F766E]/15 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B4A] via-[#FFB703] to-[#0F766E]" />

              <h3 className="font-heading font-bold text-2xl text-[#134E4A] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mb-6">
                Leave a quick note, greeting, or collaboration idea.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#134E4A]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto">
                    Thank you for reaching out! Abeer will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#134E4A] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#134E4A] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#134E4A] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abeer, I came across your portfolio and wanted to connect regarding..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/20 outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6B4A] hover:bg-[#E85535] text-white px-8 py-3 rounded-full font-semibold text-sm shadow-warm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
