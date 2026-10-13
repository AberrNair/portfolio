import React from 'react';
import { conclusionData } from '../data/portfolioData';
import { Sparkles, Trophy, Award, Users, Compass, ArrowDown, Send } from 'lucide-react';

export default function Conclusion() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0F766E] text-white relative overflow-hidden">
      {/* Background court grid */}
      <div className="absolute inset-0 bg-court-pattern-dark pointer-events-none opacity-25" />
      
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB703] border border-white/20 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6B4A]" />
          <span>Synthesis & Mindset</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
          {conclusionData.title}
        </h2>

        {/* Full Conclusion Text from Document */}
        <div className="bg-[#134E4A]/80 backdrop-blur-md rounded-card-lg p-7 sm:p-10 border border-teal-300/25 shadow-2xl mb-12 text-left sm:text-center hover:-translate-y-1 transition-transform duration-300">
          <p className="text-base sm:text-lg md:text-xl text-teal-100 leading-relaxed font-normal">
            {conclusionData.paragraph}
          </p>
        </div>

        {/* IN ONE LINE Highlight Banner */}
        <div className="relative bg-gradient-to-r from-[#FF6B4A] to-[#E85535] rounded-card-lg p-6 sm:p-8 text-white shadow-2xl border border-white/20 max-w-3xl mx-auto overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#FFB703]/20 rounded-full blur-xl" />

          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#FFF8F0]/90 bg-black/20 px-3 py-1 rounded-full mb-3">
            IN ONE LINE
          </span>

          <p className="font-heading font-bold text-lg sm:text-2xl text-white leading-snug">
            “{conclusionData.inOneLine}”
          </p>
        </div>

        {/* CTA to Contact */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#E5A400] text-[#134E4A] px-7 py-3 rounded-full font-bold text-sm shadow-warm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4" />
            <span>Connect with Abeer</span>
          </button>
        </div>

      </div>
    </section>
  );
}
