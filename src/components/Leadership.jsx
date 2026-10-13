import React from 'react';
import { leadershipData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Users, Shield, Cpu, Globe, Check, Award, Sparkles, Quote } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-[#0F766E] text-white relative overflow-hidden">
      {/* Background court grid */}
      <div className="absolute inset-0 bg-court-pattern-dark pointer-events-none opacity-25" />
      
      {/* Warm gradient accent blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFB703]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB703] border border-white/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Section 02</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Leadership & <span className="text-[#FF6B4A]">Event Management</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            {leadershipData.intro}
          </p>
        </div>

        {/* Three Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {leadershipData.roles.map((role) => (
            <div
              key={role.id}
              className="bg-white/95 text-[#1F2937] rounded-card-lg p-7 border border-teal-100 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B4A] via-[#FFB703] to-[#0F766E]" />

              <div>
                {/* Event Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    {role.eventBadge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8F0] border border-teal-200/60 flex items-center justify-center text-[#FF6B4A] group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <IconHelper name={role.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="font-heading font-bold text-xl text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors leading-tight">
                  {role.role}
                </h3>
                
                {/* Event Name */}
                <p className="text-xs font-semibold text-[#0F766E] mt-1">
                  {role.event}
                </p>

                {/* Description from Document */}
                <p className="text-xs sm:text-sm text-[#4B5563] mt-3.5 leading-relaxed">
                  {role.description}
                </p>
              </div>

              {/* Skills Built Tags */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-[11px] font-bold text-[#134E4A] uppercase tracking-wider block mb-2">
                  Skills Built:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {role.skillsBuilt.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#FFF8F0] text-[#134E4A] px-2.5 py-1 rounded-md border border-teal-200/50"
                    >
                      <Check className="w-3 h-3 text-[#FF6B4A]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KEY TAKEAWAY Quote Banner */}
        <div className="relative bg-gradient-to-r from-[#134E4A] to-[#0B4F4A] rounded-card-lg p-8 sm:p-10 border border-teal-300/30 shadow-2xl text-center max-w-4xl mx-auto overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B4A]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFB703]/10 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FF6B4A]/20 border border-[#FF6B4A]/40 flex items-center justify-center text-[#FF6B4A] mb-4">
              <Quote className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB703] mb-2">
              KEY TAKEAWAY
            </span>

            <blockquote className="font-heading font-semibold text-lg sm:text-2xl text-[#FFF8F0] max-w-3xl leading-snug">
              “{leadershipData.keyTakeaway}”
            </blockquote>

            <p className="mt-4 text-xs font-semibold text-teal-200 uppercase tracking-wider">
              Abeer Nair • Behind-The-Scenes Event Core
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
