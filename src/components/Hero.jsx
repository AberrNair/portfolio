import React, { useEffect, useState } from 'react';
import { personalInfo, heroStats } from '../data/portfolioData';
import HeroAthleteCard from './HeroAthleteCard';
import IconHelper from './IconHelper';
import { ArrowDown, Send, Sparkles, MapPin, Swords, Shield, Crown, Flame } from 'lucide-react';

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
    <div
      className="bg-[#111827]/90 backdrop-blur-md rounded-card p-5 border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
    >
      {/* Top accent gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-amber-600 transform origin-left group-hover:scale-x-105 transition-transform" />
      
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-cinzel font-bold uppercase tracking-wider bg-black/50 text-amber-300 border border-amber-500/30">
          <IconHelper name={stat.icon} className="w-3 h-3 text-amber-400" />
          <span>{stat.badge}</span>
        </span>
        <span className="text-[10px] font-cinzel font-semibold text-amber-500/60">House Nair</span>
      </div>

      <div className="mt-2">
        <h3 className="font-cinzel font-black text-2xl text-gold-gradient group-hover:text-amber-300 transition-colors leading-tight">
          {stat.isNumeric ? `${count}${stat.suffix || ''}` : stat.badge}
        </h3>
        <p className="font-semibold text-sm text-slate-100 mt-1 font-cinzel tracking-wide">
          {stat.title}
        </p>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Watermark Icon */}
      <div className="absolute -bottom-2 -right-2 text-amber-400/5 group-hover:text-amber-400/10 transition-colors pointer-events-none">
        <IconHelper name={stat.icon} className="w-16 h-16" />
      </div>
    </div>
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
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#080B11] text-white overflow-hidden"
    >
      {/* Stone / Castle Grid background */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-50" />
      
      {/* Ambient dragonfire & golden glow blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {personalInfo.headlineChips.map((chip, idx) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-cinzel font-semibold bg-[#111827]/80 hover:bg-[#1A2338] border border-amber-500/30 text-amber-200 backdrop-blur-sm transition-colors cursor-default shadow-xs"
                >
                  {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                  {idx === 1 && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  {idx === 2 && <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />}
                  {idx === 3 && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
                  {idx === 4 && <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />}
                  {chip}
                </span>
              ))}
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>The Realm of Non-Academic Pursuits</span>
              </div>
              <h1 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
                <span className="text-gold-gradient underline decoration-amber-500/40 decoration-wavy underline-offset-8">Abeer Nair</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl leading-relaxed font-body">
                {personalInfo.education.degree}{" "}
                <span className="text-amber-400 font-bold">|</span>{" "}
                {personalInfo.education.institution}
              </p>
            </div>

            {/* Micro Quote / Drive Banner */}
            <div className="p-4 rounded-xl bg-[#111827]/90 backdrop-blur-md border border-amber-500/25 text-slate-200 text-sm italic relative shadow-inner">
              <span className="font-cinzel font-bold text-amber-400 not-italic mr-1.5">“</span>
              {personalInfo.drivesMe}
              <span className="font-cinzel font-bold text-amber-400 not-italic ml-1">”</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-7 py-3.5 rounded-full font-cinzel font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-[#111827]/80 hover:bg-[#1A2338] text-amber-300 border border-amber-500/40 hover:border-amber-400 px-6 py-3.5 rounded-full font-cinzel font-bold text-xs tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none shadow-md"
              >
                <Swords className="w-4 h-4 text-amber-400" />
                <span>Get in Touch</span>
              </button>
            </div>

          </div>

          {/* Interactive Arena Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              {/* Athlete Action Card */}
              <HeroAthleteCard />

              {/* Campus Location Chip */}
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-300/90 bg-[#111827]/90 px-4 py-1.5 rounded-full border border-amber-500/25 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span className="font-cinzel tracking-wider text-[11px]">MPSTME Shirpur Campus, Maharashtra</span>
              </div>
            </div>
          </div>

        </div>

        {/* Four Animated Stat Cards Bar */}
        <div className="mt-14 pt-8 border-t border-amber-500/20">
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
