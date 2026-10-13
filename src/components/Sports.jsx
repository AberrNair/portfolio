import React from 'react';
import { sportsData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Trophy, Award, Zap, Users, Compass, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Sports() {
  return (
    <section id="sports" className="py-20 md:py-28 bg-[#0F766E] text-white relative overflow-hidden">
      {/* Background court grid subtle pattern */}
      <div className="absolute inset-0 bg-court-pattern-dark pointer-events-none opacity-25" />
      
      {/* Campfire glow spots */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFB703]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB703] border border-white/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Section 01</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Sports: <span className="text-[#FF6B4A]">My Biggest Passion</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            {sportsData.intro}
          </p>
        </div>

        {/* Table Tennis Feature Block */}
        <div className="bg-[#134E4A]/80 backdrop-blur-md rounded-card-lg p-6 sm:p-8 md:p-10 border border-teal-300/20 shadow-2xl mb-14">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B4A]/20 text-[#FF6B4A] border border-[#FF6B4A]/40 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Primary Discipline</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Table Tennis: From School Nationals to University Competition
            </h3>
            <p className="mt-3 text-sm sm:text-base text-teal-100 leading-relaxed">
              {sportsData.tableTennisIntro}
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-teal-400/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {sportsData.timeline.map((item) => (
              <div
                key={item.level}
                className="relative group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Node marker on the line */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF6B4A] to-[#FFB703] border-4 border-[#0F766E] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <IconHelper name={item.icon} className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Timeline Card */}
                <div className="bg-white/95 text-[#1F2937] rounded-card p-6 border border-teal-100/30 shadow-soft hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-[#0F766E] text-white">
                      <span>{item.level}</span>
                    </span>
                    <span className="text-xs font-semibold text-[#0F766E] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      {item.levelBadge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg sm:text-xl text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors">
                    {item.achievement}
                  </h4>

                  {/* What it meant for me */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-start gap-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B4A] shrink-0 mt-0.5">
                      What it meant:
                    </span>
                    <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed">
                      "{item.meaning}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Football, Cricket and Beyond Card */}
        <div className="bg-gradient-to-r from-[#134E4A] to-[#115E59] rounded-card-lg p-6 sm:p-8 border border-teal-300/30 shadow-xl mb-14 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#FFB703]/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Team Dynamics</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                {sportsData.teamSports.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-teal-100 leading-relaxed">
                {sportsData.teamSports.content}
              </p>
            </div>

            <div className="shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
              <span className="text-xs font-bold text-[#FFB703] uppercase tracking-wider block">
                Sports Spirit
              </span>
              <p className="text-xs font-semibold text-white mt-1">
                "Always ready to join a game"
              </p>
            </div>
          </div>
        </div>

        {/* Four "What Sport Has Taught Me" Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              What Sport Has Taught Me
            </h3>
            <p className="text-xs sm:text-sm text-teal-200 mt-1">
              Four timeless athletic principles carrying over into life and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsData.lessons.map((lesson) => (
              <div
                key={lesson.title}
                className="bg-white/95 rounded-card p-6 border border-teal-100/30 text-[#1F2937] shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FFF8F0] border border-teal-200/60 flex items-center justify-center text-[#FF6B4A] mb-4 group-hover:bg-[#FF6B4A] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <IconHelper name={lesson.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors leading-tight">
                    {lesson.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-2.5 leading-relaxed">
                    {lesson.explanation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0F766E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB703]" />
                  <span>Athletic Core Principle</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
