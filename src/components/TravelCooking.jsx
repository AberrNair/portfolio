import React from 'react';
import { travelAndCookingData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Compass, Utensils, Sparkles, Heart, Flame, MapPin, Camera, Map, Globe } from 'lucide-react';

export default function TravelCooking() {
  const { travel, cooking, whereTheyMeet, galleryPlaceholders } = travelAndCookingData;

  return (
    <section id="travel-cooking" className="py-20 md:py-28 bg-[#0D131F] relative overflow-hidden text-slate-200">
      {/* Background stone grid */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />

      {/* Ambiance glow */}
      <div className="absolute -top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>The Realms & The Hearth</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Travel & Cooking: <span className="text-gold-gradient">Staying Curious</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-body">
            Two complementary creative outlets powered by the same sense of exploration
          </p>
        </div>

        {/* Split Layout: Travel (Left) & Cooking (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Travel Column (Left) */}
          <div className="bg-[#111827]/90 rounded-card-lg p-7 sm:p-8 border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400">
                    The Expedition
                  </span>
                  <h3 className="font-cinzel font-bold text-2xl text-slate-100">
                    {travel.title}
                  </h3>
                </div>
              </div>

              {/* Intro from Document */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-body">
                {travel.intro}
              </p>

              {/* Trait Cards */}
              <div className="space-y-4">
                {travel.traits.map((trait) => (
                  <div
                    key={trait.title}
                    className="p-4 rounded-xl bg-[#080B11]/80 border border-amber-500/20 group hover:border-amber-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <IconHelper name={trait.icon} className="w-4 h-4 text-amber-400" />
                      <h4 className="font-cinzel font-bold text-base text-slate-100">
                        {trait.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-cinzel font-semibold text-amber-300">
              <span>Exploration & Worldview</span>
              <span className="bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                Adaptability In Action
              </span>
            </div>
          </div>

          {/* Cooking Column (Right) */}
          <div className="bg-[#111827]/90 rounded-card-lg p-7 sm:p-8 border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400">
                    The Hearth
                  </span>
                  <h3 className="font-cinzel font-bold text-2xl text-slate-100">
                    {cooking.title}
                  </h3>
                </div>
              </div>

              {/* Intro from Document */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-body">
                {cooking.intro}
              </p>

              {/* Trait Cards */}
              <div className="space-y-4">
                {cooking.traits.map((trait) => (
                  <div
                    key={trait.title}
                    className="p-4 rounded-xl bg-[#080B11]/80 border border-amber-500/20 group hover:border-amber-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <IconHelper name={trait.icon} className="w-4 h-4 text-amber-400" />
                      <h4 className="font-cinzel font-bold text-base text-slate-100">
                        {trait.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-cinzel font-semibold text-amber-300">
              <span>Creativity & Flavour Craft</span>
              <span className="bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                Patience & Sharing
              </span>
            </div>
          </div>

        </div>

        {/* WHERE THE TWO MEET Callout */}
        <div className="relative bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#111827] rounded-card-lg p-8 sm:p-10 text-white shadow-card-got mb-16 overflow-hidden border border-amber-500/30 hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 shadow-md">
                <Flame className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  {whereTheyMeet.label}
                </span>
                <p className="font-cinzel font-semibold text-lg sm:text-xl text-slate-100 leading-relaxed max-w-4xl">
                  “{whereTheyMeet.text}”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder Photo Strip / Gallery Area */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-gold-gradient">
                Curiosity in Frames
              </h3>
              <p className="text-xs text-slate-400 font-body">
                Clean photo strip placeholders ready for travel journeys and culinary creations
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold text-amber-300 bg-[#111827] px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Replaceable Visuals</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryPlaceholders.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-card overflow-hidden bg-[#111827] border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Visual Placeholder Frame */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#080B11] flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden border-b border-amber-500/20">
                  <div className="w-12 h-12 rounded-2xl bg-black/60 border border-amber-500/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <IconHelper name={item.icon} className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-cinzel font-bold text-amber-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 font-cinzel">
                    Tap to upload custom photo
                  </span>

                  {/* Gradient shimmer overlay */}
                  <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Caption Bar */}
                <div className="p-4 bg-[#111827] flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-cinzel font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors">
                      {item.caption}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 font-body">
                      {item.sub}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-amber-500/15 flex items-center justify-between text-[11px] text-amber-400 font-cinzel font-medium">
                    <span>Abeer's Journal</span>
                    <span>2026</span>
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
