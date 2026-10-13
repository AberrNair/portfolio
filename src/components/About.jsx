import React from 'react';
import { aboutMeData, personalInfo } from '../data/portfolioData';
import { Compass, Flame, Trophy, Users, Sparkles, Shield, Crown, Swords } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0D131F] relative overflow-hidden text-slate-200">
      {/* Background stone pattern */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />

      {/* Decorative gradient blur */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Discover The Champion's Mindset</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            About <span className="text-gold-gradient">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-body">
            {aboutMeData.closingBridge}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Photo / Sigil Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer dragonfire aura */}
              <div className="absolute -inset-3 rounded-card-lg bg-gradient-to-tr from-amber-500 via-red-600 to-amber-700 opacity-25 blur-lg" />
              
              <div className="relative bg-[#111827] rounded-card-lg p-4 border border-amber-500/30 shadow-card-got hover:-translate-y-1.5 transition-transform duration-300">
                {/* Visual Photo Card */}
                <div className="relative aspect-[4/5] rounded-card bg-black overflow-hidden border border-amber-500/30 group shadow-inner">
                  <img
                    src="/images/abeer_travel_portrait.jpg"
                    alt="Abeer Nair - Athlete, Organiser, Traveller, Home Cook"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] font-cinzel font-bold text-amber-300 border border-amber-500/30 mb-1.5">
                      <Trophy className="w-3 h-3 text-amber-400" />
                      <span>Yuva Sports 2026 Champion</span>
                    </div>

                    <h3 className="font-cinzel font-bold text-xl text-gold-gradient drop-shadow-md">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-cinzel tracking-wider drop-shadow-sm mt-0.5">
                      National Table Tennis • Event Organiser • Traveller
                    </p>
                  </div>
                </div>

                {/* Sub-card badge */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs font-semibold text-amber-300 font-cinzel">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    <span>The Champion's Creed</span>
                  </span>
                  <span className="text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 text-[10px]">
                    Active 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & What Drives Me Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Paragraph 1 & 2 from Document */}
            <div className="bg-[#111827]/90 rounded-card p-6 sm:p-7 border border-amber-500/20 shadow-card-got space-y-4 hover:shadow-card-got-hover transition-shadow duration-300">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body">
                Outside the classroom, I am someone who is happiest when I am moving, meeting people or trying something new. Sport has been the biggest constant in my life, and table tennis in particular has taken me to the national level while representing my school and to the West Zone level while representing my university. I also play football, cricket and almost any sport I get the chance to join.
              </p>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body">
                I am an extrovert by nature. I enjoy meeting new people, starting conversations and working in teams, which is why I have stepped into organising roles at college events such as the cultural festival, the Smart India Hackathon 2025 and NMIMS Model United Nations 2024. When I am not on the court or at an event, I love to travel and explore new places, and to spend time in the kitchen cooking and learning new recipes.
              </p>
            </div>

            {/* WHAT DRIVES ME Callout Card */}
            <div className="relative rounded-card p-6 bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#111827] text-white shadow-card-got overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-amber-500/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 shadow-md">
                  <Flame className="w-5 h-5 text-black" />
                </div>
                <div>
                  <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    {aboutMeData.callout.label}
                  </span>
                  <p className="font-cinzel font-semibold text-base sm:text-lg text-slate-100 leading-snug">
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
                  className="bg-[#111827]/80 rounded-xl p-3 border border-amber-500/20 text-center shadow-xs hover:bg-[#1A2338] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="font-cinzel font-bold text-xs text-amber-300">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-body">
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
