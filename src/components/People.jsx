import React from 'react';
import { peopleData } from '../data/portfolioData';
import { Users, MessageSquare, Sparkles, HeartHandshake, ArrowRight, ShieldCheck, Crown } from 'lucide-react';

export default function People() {
  return (
    <section id="people" className="py-20 md:py-28 bg-[#080B11] text-white relative overflow-hidden">
      {/* Background stone grid */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />
      
      {/* Ambiance blobs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Allies & Communication</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            People & <span className="text-gold-gradient">Communication</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            {peopleData.subtitle}
          </p>
        </div>

        {/* Two Core Paragraphs from Document */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {peopleData.paragraphs.map((para, idx) => (
            <div
              key={para.title}
              className="bg-[#111827]/90 text-white rounded-card-lg p-7 sm:p-8 border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-amber-600" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  {idx === 0 ? <HeartHandshake className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                </div>
                <h3 className="font-cinzel font-bold text-xl text-slate-100 group-hover:text-amber-300 transition-colors">
                  {para.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-body">
                {para.text}
              </p>

              {idx === 0 && (
                <div className="mt-4 rounded-xl overflow-hidden border border-amber-500/30 group/img bg-black shadow-md">
                  <div className="relative aspect-[16/9] max-h-[170px]">
                    <img
                      src="/images/cultural_fest_team.jpg"
                      alt="Abeer Nair with fellow campus event peers and organizing committee"
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="text-[10px] font-cinzel font-bold text-amber-300">
                        Campus Allies • Event Core Team
                      </span>
                      <span className="text-[9px] font-cinzel text-amber-400 bg-black/70 px-2 py-0.5 rounded-full border border-amber-500/30">
                        Extroverted Spirit
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-5 pt-3 border-t border-amber-500/15 flex items-center justify-between text-xs font-cinzel font-semibold text-amber-300">
                <span>{idx === 0 ? "Natural Extrovert" : "Effective Communicator"}</span>
                <span className="bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {idx === 0 ? "Authentic Connection" : "Clear & Direct"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conversation-Bubble Style Visual in Medieval Modern Setting */}
        <div className="bg-[#111827]/90 backdrop-blur-md rounded-card-lg p-6 sm:p-8 md:p-10 border border-amber-500/25 shadow-card-got">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500/20">
            <div>
              <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400">
                Communication In Action
              </span>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-gold-gradient mt-0.5">
                Connecting Across Three Dynamic Arenas
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-300 font-cinzel">
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
                    ? 'bg-[#0F172A]/90 border border-amber-500/20'
                    : 'bg-[#1E293B]/80 border border-amber-500/30 sm:ml-8'
                }`}
              >
                {/* Speaker Avatar */}
                <div className="shrink-0 flex sm:flex-col items-center gap-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-700 flex items-center justify-center text-black font-cinzel font-black text-sm shadow-md border border-amber-300">
                    AN
                  </div>
                  <div className="sm:text-center">
                    <span className="font-cinzel font-bold text-xs text-amber-200 block">
                      {bubble.speaker}
                    </span>
                    <span className="text-[10px] text-slate-400 font-body">
                      {bubble.role}
                    </span>
                  </div>
                </div>

                {/* Speech Bubble Content */}
                <div className="flex-1 bg-[#080B11]/90 text-slate-200 p-4 rounded-xl shadow-md relative border border-amber-500/20">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                    "{bubble.message}"
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-amber-500/10 flex items-center justify-between text-[11px] text-amber-400 font-cinzel font-semibold">
                    <span className="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      {bubble.tag}
                    </span>
                    <span className="text-slate-500 font-body">MPSTME Student Leader</span>
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
