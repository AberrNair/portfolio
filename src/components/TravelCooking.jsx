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

              {/* Dual Travel Photo Showcase */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative rounded-xl overflow-hidden border border-amber-500/30 group bg-black shadow-md aspect-[4/3]">
                  <img
                    src="/images/travel_bom_jesus_goa.jpg"
                    alt="Abeer Nair - Basilica of Bom Jesus, Old Goa"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[9px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                      Heritage Wonder
                    </span>
                    <p className="font-cinzel font-bold text-[11px] text-white truncate">
                      Basilica of Bom Jesus
                    </p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-amber-500/30 group bg-black shadow-md aspect-[4/3]">
                  <img
                    src="/images/travel_coastline_goa.jpg"
                    alt="Abeer Nair - Coastal Promenade & Sea Horizons"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[9px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                      Coastal Horizons
                    </span>
                    <p className="font-cinzel font-bold text-[11px] text-white truncate">
                      Ocean & Trails
                    </p>
                  </div>
                </div>
              </div>

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

              {/* Featured Cooking Photo */}
              <div className="relative rounded-xl overflow-hidden border border-amber-500/30 mb-6 group bg-black shadow-md">
                <div className="relative aspect-[16/9] max-h-[220px]">
                  <img
                    src="/images/home_cooking_curry.jpg"
                    alt="Abeer Nair - Slow-simmered home-cooked chicken curry"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-cinzel font-bold text-amber-400 uppercase tracking-wider block">
                        Signature Hearth Creation
                      </span>
                      <p className="font-cinzel font-bold text-xs sm:text-sm text-white">
                        Slow-Simmered Chicken Curry
                      </p>
                    </div>
                    <span className="text-[10px] font-cinzel text-amber-300 bg-black/70 px-2 py-0.5 rounded-full border border-amber-500/30">
                      Patience & Spices
                    </span>
                  </div>
                </div>
              </div>

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

        {/* Photo Strip / Gallery Area */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-gold-gradient">
                Curiosity in Frames
              </h3>
              <p className="text-xs text-slate-400 font-body">
                Visual journal spanning competitive arenas, daily conditioning, travels, and home cooking
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold text-amber-300 bg-[#111827] px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Authentic Visual Journal</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPlaceholders.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-card overflow-hidden bg-[#111827] border border-amber-500/25 shadow-card-got hover:shadow-card-got-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Visual Image Frame */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden border-b border-amber-500/20">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#080B11] flex flex-col items-center justify-center p-6 text-center text-white">
                      <div className="w-12 h-12 rounded-2xl bg-black/60 border border-amber-500/30 flex items-center justify-center mb-2">
                        <IconHelper name={item.icon} className="w-6 h-6 text-amber-400" />
                      </div>
                      <span className="text-[11px] font-cinzel font-bold text-amber-300 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  )}

                  {/* Gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/75 border border-amber-500/40 text-[10px] font-cinzel font-bold text-amber-300 backdrop-blur-sm shadow-xs">
                      <IconHelper name={item.icon} className="w-3 h-3 text-amber-400" />
                      <span>{item.category}</span>
                    </span>
                  </div>
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
