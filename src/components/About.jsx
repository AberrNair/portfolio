import React from 'react';
import { aboutMeData, personalInfo } from '../data/portfolioData';
import { Compass, Flame, Trophy, Users, Sparkles, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background court grid subtle pattern */}
      <div className="absolute inset-0 bg-court-pattern pointer-events-none opacity-40" />

      {/* Decorative gradient blur */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0F766E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134E4A]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Discover The Mindset</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#134E4A] tracking-tight">
            About <span className="text-[#FF6B4A]">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563]">
            {aboutMeData.closingBridge}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Photo & Sport Accents Placeholder Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer sportive badge frame */}
              <div className="absolute -inset-3 rounded-card-lg bg-gradient-to-tr from-[#0F766E] via-[#FFB703] to-[#FF6B4A] opacity-30 blur-lg" />
              
              <div className="relative bg-white rounded-card-lg p-4 border border-[#0F766E]/15 shadow-xl hover:-translate-y-1.5 transition-transform duration-300">
                {/* Visual Photo Placeholder Frame */}
                <div className="relative aspect-[4/5] rounded-card bg-gradient-to-br from-[#134E4A] to-[#0F766E] overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white border-2 border-dashed border-teal-200/40 group">
                  
                  {/* Avatar Icon / Graphic */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-[#FFB703] flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="font-heading font-extrabold text-3xl text-[#FFF8F0]">
                      AN
                    </span>
                  </div>

                  <h3 className="relative z-10 font-heading font-bold text-xl text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="relative z-10 text-xs text-teal-200 mt-1 max-w-[220px]">
                    National Table Tennis Player • College Event Organiser • Extrovert
                  </p>

                  <div className="relative z-10 mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[11px] font-semibold text-teal-100 border border-white/20">
                    <Trophy className="w-3.5 h-3.5 text-[#FFB703]" />
                    <span>Yuva Sports 2026 Winner</span>
                  </div>

                  {/* Clean Placeholder Note */}
                  <div className="relative z-10 mt-6 pt-3 border-t border-white/15 text-[10px] uppercase tracking-wider text-teal-200/80">
                    Replaceable Profile Photo Area
                  </div>

                  {/* Sport watermarks in background */}
                  <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-teal-400/10 pointer-events-none" />
                  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#FF6B4A]/10 pointer-events-none" />
                </div>

                {/* Sub-card floating badge */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs font-semibold text-[#134E4A]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#FF6B4A] fill-[#FF6B4A]" />
                    <span>Court & Campfire Spirit</span>
                  </span>
                  <span className="text-[#0F766E] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                    Active 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & What Drives Me Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Paragraph 1 from Document */}
            <div className="bg-white rounded-card p-6 sm:p-7 border border-[#0F766E]/10 shadow-soft space-y-4 hover:shadow-card-hover transition-shadow duration-300">
              <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed">
                Outside the classroom, I am someone who is happiest when I am moving, meeting people or trying something new. Sport has been the biggest constant in my life, and table tennis in particular has taken me to the national level while representing my school and to the West Zone level while representing my university. I also play football, cricket and almost any sport I get the chance to join.
              </p>
              
              {/* Paragraph 2 from Document */}
              <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed">
                I am an extrovert by nature. I enjoy meeting new people, starting conversations and working in teams, which is why I have stepped into organising roles at college events such as the cultural festival, the Smart India Hackathon 2025 and NMIMS Model United Nations 2024. When I am not on the court or at an event, I love to travel and explore new places, and to spend time in the kitchen cooking and learning new recipes.
              </p>
            </div>

            {/* WHAT DRIVES ME Callout Card */}
            <div className="relative rounded-card p-6 bg-gradient-to-r from-[#134E4A] to-[#0F766E] text-white shadow-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B4A]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B4A] flex items-center justify-center shrink-0 shadow-warm">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703] block mb-1">
                    {aboutMeData.callout.label}
                  </span>
                  <p className="font-heading font-semibold text-base sm:text-lg text-[#FFF8F0] leading-snug">
                    {aboutMeData.callout.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick 4 Pillars Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {aboutMeData.quickPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 rounded-xl p-3 border border-teal-100 text-center shadow-xs hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="font-heading font-bold text-xs text-[#0F766E]">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5 leading-tight">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
