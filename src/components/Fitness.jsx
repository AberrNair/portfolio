import React from 'react';
import { fitnessData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Dumbbell, Activity, HeartPulse, Zap, Flame, CheckCircle, Target, Sparkles, Swords } from 'lucide-react';

export default function Fitness() {
  return (
    <section id="fitness" className="py-20 md:py-28 bg-[#0D131F] relative overflow-hidden text-slate-200">
      {/* Background stone pattern */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />
      
      {/* Subtle warm blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
            <span>The Forge of Conditioning</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Fitness & <span className="text-gold-gradient">Athletic Conditioning</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-body">
            {fitnessData.intro}
          </p>
        </div>

        {/* Training Philosophy Banner */}
        <div className="bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#111827] rounded-card-lg p-6 sm:p-8 text-white shadow-card-got mb-14 relative overflow-hidden border border-amber-500/30 hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center shrink-0 shadow-md">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Athlete Training Philosophy
                </span>
                <p className="font-cinzel font-semibold text-lg sm:text-xl text-slate-100 leading-snug max-w-3xl">
                  "{fitnessData.coreQuote}"
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-black/60 px-4 py-2 rounded-full border border-amber-500/30 text-xs font-cinzel font-bold text-amber-300 uppercase tracking-widest shadow-inner">
              100% Habit & Discipline
            </div>
          </div>
        </div>

        {/* 4 Pillars of Conditioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fitnessData.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#111827]/90 rounded-card p-6 border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-200 mb-4 shadow-xs">
                  <IconHelper name={pillar.icon} className="w-6 h-6 text-amber-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-cinzel font-bold text-lg text-slate-100 group-hover:text-amber-300 transition-colors leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-500/15 flex items-center gap-1.5 text-xs font-cinzel font-semibold text-amber-400">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>{pillar.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Regimen Highlights Bar */}
        <div className="bg-[#111827]/90 rounded-card p-6 border border-amber-500/25 shadow-card-got">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-500/15 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              <span className="font-cinzel font-bold text-base text-gold-gradient">
                Competitive Conditioning Regimen
              </span>
            </div>
            <span className="text-xs font-cinzel font-semibold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              High Endurance & Fast Reflexes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fitnessData.regimenHighlights.map((item, i) => (
              <div key={i} className="bg-[#080B11]/80 p-3.5 rounded-xl border border-amber-500/20 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all">
                <span className="text-[11px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                  {item.label}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-1 font-body">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
