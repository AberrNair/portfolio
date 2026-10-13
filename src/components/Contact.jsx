import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check, Swords, Crown } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger celebratory gold and crimson confetti
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#DC2626', '#FDE68A', '#991B1B']
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
    <section id="contact" className="py-20 md:py-28 bg-[#0D131F] relative overflow-hidden text-slate-200">
      {/* Background stone grid */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />

      {/* Decorative gradient blur */}
      <div className="absolute -top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Send className="w-3.5 h-3.5 text-amber-400" />
            <span>The Raven Dispatch</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Let's <span className="text-gold-gradient">Connect</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-body">
            Whether it's discussing campus initiatives, sports tournaments, collaborative projects, or travel stories—my scroll is always open!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Placeholder Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#111827]/90 rounded-card-lg p-6 sm:p-7 border border-amber-500/25 shadow-card-got">
              <h3 className="font-cinzel font-bold text-xl text-gold-gradient mb-4">
                Reach Out Directly
              </h3>
              
              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#080B11]/90 border border-amber-500/20 group hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-amber-300 transition-colors font-body"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 text-slate-400 hover:text-amber-300 rounded-lg hover:bg-white/5 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Link */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080B11]/90 border border-amber-500/20 group hover:border-amber-400/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-amber-300 transition-colors font-body">
                        linkedin.com/in/abeernair
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transition-colors" />
                </a>

                {/* GitHub Link */}
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080B11]/90 border border-amber-500/20 group hover:border-amber-400/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-amber-300 transition-colors font-body">
                        github.com/abeernair
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Campus Info Card */}
            <div className="bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#1E293B] rounded-card-lg p-6 text-white shadow-card-got border border-amber-500/25">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel font-bold text-base text-gold-gradient">
                    Campus Citadel
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed font-body">
                    SVKM's NMIMS MPSTME, Shirpur Campus, Maharashtra
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-cinzel font-bold text-amber-300 bg-black/60 px-3 py-1 rounded-md border border-amber-500/30">
                    B.Tech Information Technology
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111827]/90 rounded-card-lg p-7 sm:p-9 border border-amber-500/25 shadow-card-got relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-amber-600" />

              <h3 className="font-cinzel font-bold text-2xl text-gold-gradient mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-body">
                Dispatch a note, greeting, or collaboration proposal.
              </p>

              {submitted ? (
                <div
                  className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-cinzel font-bold text-lg text-amber-300">
                    Raven Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto font-body">
                    Thank you for reaching out! Abeer will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-cinzel font-bold uppercase tracking-wider text-amber-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080B11]/90 border border-amber-500/25 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-white placeholder-slate-500 transition-all font-body"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-cinzel font-bold uppercase tracking-wider text-amber-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080B11]/90 border border-amber-500/25 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-white placeholder-slate-500 transition-all font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-cinzel font-bold uppercase tracking-wider text-amber-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abeer, I came across your portfolio and wanted to connect regarding..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B11]/90 border border-amber-500/25 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-white placeholder-slate-500 transition-all resize-none font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-8 py-3 rounded-full font-cinzel font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
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
