import React from 'react';
import { fitnessData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Dumbbell, Activity, HeartPulse, Zap, Flame, CheckCircle, Target, Sparkles } from 'lucide-react';

export default function Fitness() {
  return (
    <section id="fitness" className="py-20 md:py-28 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background court pattern */}
      <div className="absolute inset-0 bg-court-pattern pointer-events-none opacity-40" />
      
      {/* Subtle warm blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134E4A]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <Dumbbell className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Athletic Engine</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#134E4A] tracking-tight">
            Fitness & <span className="text-[#FF6B4A]">Athletic Conditioning</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            {fitnessData.intro}
          </p>
        </div>

        {/* Core Quote Callout Banner */}
        <div className="bg-gradient-to-r from-[#134E4A] via-[#0F766E] to-[#115E59] rounded-card-lg p-6 sm:p-8 text-white shadow-xl mb-14 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB703]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B4A] flex items-center justify-center shrink-0 shadow-warm">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] block mb-1">
                  Athlete Training Philosophy
                </span>
                <p className="font-heading font-semibold text-lg sm:text-xl text-[#FFF8F0] leading-snug max-w-3xl">
                  "{fitnessData.coreQuote}"
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-xs font-bold text-teal-100 uppercase tracking-wider">
              100% Habit & Discipline
            </div>
          </div>
        </div>

        {/* 4 Pillars of Conditioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fitnessData.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-card p-6 border border-[#0F766E]/15 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8F0] border border-teal-200/60 flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-200 mb-4 shadow-xs">
                  <IconHelper name={pillar.icon} className="w-6 h-6 text-[#FF6B4A] group-hover:text-[#FFB703] transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#0F766E]">
                <Target className="w-3.5 h-3.5 text-[#FF6B4A]" />
                <span>{pillar.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Regimen Highlights Bar */}
        <div className="bg-white rounded-card p-6 border border-[#0F766E]/15 shadow-soft">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#FF6B4A]" />
              <span className="font-heading font-bold text-base text-[#134E4A]">
                Competitive Conditioning Focus
              </span>
            </div>
            <span className="text-xs font-semibold text-[#0F766E] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              High Endurance & Fast Reflexes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fitnessData.regimenHighlights.map((item, i) => (
              <div key={i} className="bg-[#FFF8F0] p-3.5 rounded-xl border border-teal-100/60 hover:bg-white hover:-translate-y-0.5 transition-all">
                <span className="text-[11px] font-bold text-[#FF6B4A] uppercase tracking-wider block">
                  {item.label}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#1F2937] mt-1">
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
