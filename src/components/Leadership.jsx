import React from 'react';
import { leadershipData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Users, Shield, Cpu, Globe, Check, Award, Sparkles, Quote, Crown } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-[#080B11] text-white relative overflow-hidden">
      {/* Background stone grid */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />
      
      {/* Amber / Fire accent blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Campus Leadership & Governance</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Leadership & <span className="text-gold-gradient">Event Management</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            {leadershipData.intro}
          </p>
        </div>

        {/* Three Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {leadershipData.roles.map((role) => (
            <div
              key={role.id}
              className="bg-[#111827]/90 text-white rounded-card-lg p-7 border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-amber-600" />

              <div>
                {/* Event Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-cinzel font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                    {role.eventBadge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-200 shadow-xs">
                    <IconHelper name={role.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="font-cinzel font-bold text-xl text-slate-100 group-hover:text-amber-300 transition-colors leading-tight">
                  {role.role}
                </h3>
                
                {/* Event Name */}
                <p className="text-xs font-cinzel font-semibold text-amber-400 mt-1">
                  {role.event}
                </p>

                {/* Description from Document */}
                <p className="text-xs sm:text-sm text-slate-400 mt-3.5 leading-relaxed font-body">
                  {role.description}
                </p>
              </div>

              {/* Skills Built Tags */}
              <div className="mt-6 pt-4 border-t border-amber-500/15">
                <span className="text-[11px] font-cinzel font-bold text-amber-300 uppercase tracking-widest block mb-2">
                  Skills Built:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {role.skillsBuilt.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#080B11]/80 text-slate-300 px-2.5 py-1 rounded-md border border-amber-500/20 font-body"
                    >
                      <Check className="w-3 h-3 text-amber-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KEY TAKEAWAY Quote Banner */}
        <div className="relative bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#111827] rounded-card-lg p-8 sm:p-10 border border-amber-500/30 shadow-card-got text-center max-w-4xl mx-auto overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-md">
              <Quote className="w-6 h-6" />
            </div>

            <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400 mb-2">
              KEY TAKEAWAY
            </span>

            <blockquote className="font-cinzel font-bold text-lg sm:text-2xl text-slate-100 max-w-3xl leading-snug">
              “{leadershipData.keyTakeaway}”
            </blockquote>

            <p className="mt-4 text-xs font-cinzel font-semibold text-amber-300/80 uppercase tracking-widest">
              Abeer Nair • Core Campus Operations Council
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
