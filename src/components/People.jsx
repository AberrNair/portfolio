import React from 'react';
import { peopleData } from '../data/portfolioData';
import { Users, MessageSquare, Sparkles, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';

export default function People() {
  return (
    <section id="people" className="py-20 md:py-28 bg-[#0F766E] text-white relative overflow-hidden">
      {/* Background court grid */}
      <div className="absolute inset-0 bg-court-pattern-dark pointer-events-none opacity-25" />
      
      {/* Ambiance blobs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFB703]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB703] border border-white/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Section 04</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            People & <span className="text-[#FF6B4A]">Communication</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            {peopleData.subtitle}
          </p>
        </div>

        {/* Two Core Paragraphs from Document */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {peopleData.paragraphs.map((para, idx) => (
            <div
              key={para.title}
              className="bg-white/95 text-[#1F2937] rounded-card-lg p-7 sm:p-8 border border-teal-100 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B4A] via-[#FFB703] to-[#0F766E]" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8F0] border border-teal-200/60 flex items-center justify-center text-[#FF6B4A]">
                  {idx === 0 ? <HeartHandshake className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#134E4A] group-hover:text-[#FF6B4A] transition-colors">
                  {para.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {para.text}
              </p>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0F766E]">
                <span>{idx === 0 ? "Natural Extrovert" : "Effective Communicator"}</span>
                <span className="bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                  {idx === 0 ? "Authentic Connection" : "Clear & Direct"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conversation-Bubble Style Visual */}
        <div className="bg-[#134E4A]/80 backdrop-blur-md rounded-card-lg p-6 sm:p-8 md:p-10 border border-teal-300/20 shadow-2xl">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-teal-500/30">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB703]">
                Communication In Action
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-0.5">
                Connecting Across Three Dynamic Arenas
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-teal-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-world Impact</span>
            </div>
          </div>

          <div className="space-y-6">
            {peopleData.conversations.map((bubble, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${
                  i % 2 === 0
                    ? 'bg-white/10 border border-white/15'
                    : 'bg-white/15 border border-[#FFB703]/30 sm:ml-8'
                }`}
              >
                {/* Speaker Badge Avatar */}
                <div className="shrink-0 flex sm:flex-col items-center gap-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FF6B4A] to-[#FFB703] flex items-center justify-center text-white font-bold text-sm shadow-md">
                    AN
                  </div>
                  <div className="sm:text-center">
                    <span className="font-heading font-bold text-xs text-white block">
                      {bubble.speaker}
                    </span>
                    <span className="text-[10px] text-teal-200">
                      {bubble.role}
                    </span>
                  </div>
                </div>

                {/* Speech Bubble Content */}
                <div className="flex-1 bg-white/90 text-[#1F2937] p-4 rounded-xl shadow-md relative">
                  {/* Bubble pointer indicator */}
                  <div className="hidden sm:block absolute top-4 -left-2 w-3 h-3 bg-white/90 rotate-45 transform" />

                  <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed font-medium">
                    "{bubble.message}"
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#0F766E] font-semibold">
                    <span className="bg-teal-50 px-2 py-0.5 rounded border border-teal-200 text-[#0F766E]">
                      {bubble.tag}
                    </span>
                    <span className="text-gray-400">MPSTME Student Leader</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
