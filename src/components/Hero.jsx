import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, heroStats } from '../data/portfolioData';
import BouncingBallHero from './BouncingBallHero';
import IconHelper from './IconHelper';
import { ArrowDown, Send, Sparkles, MapPin } from 'lucide-react';

function StatCard({ stat, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (stat.isNumeric && stat.targetNumber) {
      let start = 0;
      const end = stat.targetNumber;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [stat]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white/95 backdrop-blur-sm rounded-card p-5 border border-teal-100 shadow-soft hover:shadow-card-hover transition-all duration-300 relative group overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B4A] via-[#FFB703] to-[#0F766E] transform origin-left group-hover:scale-x-105 transition-transform" />
      
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF8F0] text-[#0F766E] border border-teal-200/60">
          <IconHelper name={stat.icon} className="w-3.5 h-3.5 text-[#FF6B4A]" />
          <span>{stat.badge}</span>
        </span>
        <span className="text-[11px] font-semibold text-teal-700/60">#AbeerNair</span>
      </div>

      <div className="mt-2">
        <h3 className="font-heading font-bold text-2xl text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors leading-tight">
          {stat.isNumeric ? `${count}${stat.suffix || ''}` : stat.badge}
        </h3>
        <p className="font-semibold text-sm text-[#1F2937] mt-0.5">
          {stat.title}
        </p>
        <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Decorative watermark icon */}
      <div className="absolute -bottom-2 -right-2 text-teal-600/5 group-hover:text-teal-600/10 transition-colors pointer-events-none">
        <IconHelper name={stat.icon} className="w-16 h-16" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0F766E] text-white overflow-hidden"
    >
      {/* Subtle court lines & campfire gradient ambiance */}
      <div className="absolute inset-0 bg-court-pattern-dark pointer-events-none opacity-40" />
      
      {/* Ambient gradient blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FF6B4A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFB703]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              {personalInfo.headlineChips.map((chip, idx) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF8F0] backdrop-blur-sm transition-colors cursor-default"
                >
                  {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />}
                  {idx === 1 && <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />}
                  {idx === 2 && <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />}
                  {idx === 3 && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  {idx === 4 && <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />}
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB703]/20 border border-[#FFB703]/40 text-[#FFB703] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Non-Academic Portfolio</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-[#FF6B4A] underline decoration-wavy decoration-[#FFB703]/60 underline-offset-8">Abeer Nair</span>
              </h1>
              <p className="text-base sm:text-lg text-teal-100 font-medium max-w-2xl leading-relaxed">
                {personalInfo.education.degree}{" "}
                <span className="text-[#FFB703] font-semibold">|</span>{" "}
                {personalInfo.education.institution}
              </p>
            </motion.div>

            {/* Micro Quote / Drive Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-sm italic relative"
            >
              <span className="font-bold text-[#FFB703] not-italic mr-1.5">“</span>
              {personalInfo.drivesMe}
              <span className="font-bold text-[#FFB703] not-italic ml-1">”</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 bg-[#FF6B4A] hover:bg-[#E85535] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-warm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
              >
                <Send className="w-4 h-4 text-[#FFB703]" />
                <span>Get in Touch</span>
              </button>
            </motion.div>

          </div>

          {/* Interactive Sports Court / Campfire Widget Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              {/* Table tennis court micro-interaction */}
              <BouncingBallHero />

              {/* Campus Location Chip */}
              <div className="mt-4 flex items-center gap-2 text-xs text-teal-100 bg-[#134E4A]/80 px-3.5 py-1.5 rounded-full border border-teal-400/30">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B4A]" />
                <span>MPSTME Shirpur Campus, Maharashtra</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Four Animated Stat Cards Bar */}
        <div className="mt-14 pt-8 border-t border-teal-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroStats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
