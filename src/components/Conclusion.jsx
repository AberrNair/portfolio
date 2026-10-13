import React from 'react';
import { conclusionData } from '../data/portfolioData';
import { Sparkles, Trophy, Award, Users, Compass, ArrowDown, Send, Crown, Swords } from 'lucide-react';

export default function Conclusion() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#080B11] text-white relative overflow-hidden">
      {/* Background stone grid */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />
      
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-4">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Synthesis of the Champion</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
          {conclusionData.title}
        </h2>

        {/* Full Conclusion Text from Document */}
        <div className="bg-[#111827]/90 backdrop-blur-md rounded-card-lg p-7 sm:p-10 border border-amber-500/25 shadow-card-got mb-12 text-left sm:text-center hover:-translate-y-1 transition-transform duration-300">
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-body">
            {conclusionData.paragraph}
          </p>
        </div>

        {/* IN ONE LINE Highlight Banner */}
        <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-card-lg p-6 sm:p-8 text-black shadow-[0_0_30px_rgba(245,158,11,0.35)] border border-amber-300 max-w-3xl mx-auto overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-36 h-36 bg-white/20 rounded-full blur-xl" />

          <span className="inline-block text-xs font-cinzel font-black uppercase tracking-widest text-black bg-white/40 px-3.5 py-1 rounded-full mb-3 border border-black/20">
            IN ONE LINE
          </span>

          <p className="font-cinzel font-bold text-lg sm:text-2xl text-black leading-snug">
            “{conclusionData.inOneLine}”
          </p>
        </div>

        {/* CTA to Contact */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-8 py-3.5 rounded-full font-cinzel font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Swords className="w-4 h-4 text-black" />
            <span>Connect with Abeer</span>
          </button>
        </div>

      </div>
    </section>
  );
}
