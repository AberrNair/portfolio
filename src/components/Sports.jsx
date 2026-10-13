import React from 'react';
import { sportsData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Trophy, Award, Zap, Users, Compass, Activity, ArrowRight, CheckCircle2, Swords, Shield, Flame } from 'lucide-react';

export default function Sports() {
  return (
    <section id="sports" className="py-20 md:py-28 bg-[#080B11] text-white relative overflow-hidden">
      {/* Background stone pattern */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />
      
      {/* Ambiance glow spots */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Tournaments & Arenas</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Sports: <span className="text-gold-gradient">My Biggest Passion</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            {sportsData.intro}
          </p>
        </div>

        {/* Table Tennis Feature Block */}
        <div className="bg-[#111827]/90 backdrop-blur-md rounded-card-lg p-6 sm:p-8 md:p-10 border border-amber-500/25 shadow-card-got mb-14">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 text-red-400 border border-red-800/40 text-xs font-cinzel font-bold uppercase tracking-widest mb-2">
              <Swords className="w-3.5 h-3.5 text-amber-400" />
              <span>Primary Discipline</span>
            </div>
            <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-gold-gradient">
              Table Tennis: From School Nationals to University Competition
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              {sportsData.tableTennisIntro}
            </p>
          </div>

          {/* Live Tournament Action Photo Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 mb-10 shadow-lg group">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[380px] bg-black">
              <img
                src="/images/table_tennis_match.jpg"
                alt="Abeer Nair competing in Table Tennis match at NMIMS Arena"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] font-cinzel font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    Tournament Arena • Live Action
                  </span>
                  <p className="font-cinzel font-bold text-base sm:text-lg text-white">
                    Competing Under Match-Point Pressure
                  </p>
                </div>
                <div className="shrink-0 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-[11px] font-cinzel text-amber-300">
                  <span>SVKM's NMIMS MPSTME Arena</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Tournament Scroll Timeline */}
          <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {sportsData.timeline.map((item) => (
              <div
                key={item.level}
                className="relative group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Node marker on the line (Royal Crest) */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-700 border-2 border-black flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform">
                  <IconHelper name={item.icon} className="w-3.5 h-3.5 text-black" />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#0F172A]/90 text-white rounded-card p-6 border border-amber-500/25 shadow-md hover:border-amber-400/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-cinzel font-bold bg-amber-500 text-black">
                      <span>{item.level}</span>
                    </span>
                    <span className="text-xs font-cinzel font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                      {item.levelBadge}
                    </span>
                  </div>

                  <h4 className="font-cinzel font-bold text-lg sm:text-xl text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.achievement}
                  </h4>

                  {/* What it meant for me */}
                  <div className="mt-3 pt-3 border-t border-amber-500/15 flex items-start gap-2.5">
                    <span className="text-xs font-cinzel font-bold uppercase tracking-wider text-amber-400 shrink-0 mt-0.5">
                      What it meant:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed font-body">
                      "{item.meaning}"
                    </p>
                  </div>

                  {/* Photo attachment if available */}
                  {item.image && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-amber-500/30 group/img bg-black shadow-md">
                      <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[220px]">
                        <img
                          src={item.image}
                          alt={item.achievement}
                          className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                          <span className="text-[11px] font-cinzel font-bold text-amber-300">
                            Trophy Presentation • SVKM Yuva Sports Festival
                          </span>
                          <span className="text-[10px] font-cinzel text-amber-400 bg-black/70 px-2 py-0.5 rounded-full border border-amber-500/30">
                            Championship Gold
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Football, Cricket and Beyond Card */}
        <div className="bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#1E293B] rounded-card-lg p-6 sm:p-8 border border-amber-500/25 shadow-card-got mb-14 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-wider mb-2 border border-amber-500/25">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>The Brotherhood of Team Sports</span>
              </div>
              <h3 className="font-cinzel font-bold text-2xl text-gold-gradient">
                {sportsData.teamSports.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                {sportsData.teamSports.content}
              </p>
            </div>

            <div className="shrink-0 bg-black/60 p-4 rounded-xl border border-amber-500/30 text-center shadow-inner">
              <span className="text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest block">
                Sports Creed
              </span>
              <p className="text-xs font-cinzel font-semibold text-slate-200 mt-1">
                "Always ready to join a game"
              </p>
            </div>
          </div>
        </div>

        {/* Four "What Sport Has Taught Me" Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-gold-gradient">
              What Sport Has Taught Me
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-body">
              Four timeless athletic virtues carrying over into high-stakes leadership and life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsData.lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="bg-[#111827]/90 rounded-card p-6 border border-amber-500/25 text-white shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-200 shadow-xs">
                    <IconHelper name={lesson.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel font-bold text-lg text-slate-100 group-hover:text-amber-300 transition-colors leading-tight">
                    {lesson.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed font-body">
                    {lesson.explanation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-500/15 flex items-center gap-1.5 text-[11px] font-cinzel font-semibold text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Virtue of the Arena</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
