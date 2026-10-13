import React, { useState } from 'react';
import { Trophy, Swords, Sparkles, MapPin, Flame, Dumbbell, Compass } from 'lucide-react';
import { athletePhotos } from '../data/portfolioData';

export default function HeroAthleteCard() {
  const [activePhoto, setActivePhoto] = useState('match');

  const photos = {
    match: {
      url: athletePhotos.heroAction,
      title: "Table Tennis Match Day",
      subtitle: "NMIMS MPSTME Arena • High Stakes Rally",
      tag: "Tournament Action",
      icon: Swords,
    },
    gym: {
      url: athletePhotos.gymTraining,
      title: "Physical Conditioning",
      subtitle: "The Forge of Athletic Discipline",
      tag: "Gym Conditioning",
      icon: Dumbbell,
    },
    travel: {
      url: athletePhotos.travelPortrait,
      title: "The Curious Traveller",
      subtitle: "Beyond the Court • Exploring New Horizons",
      tag: "Travel Expedition",
      icon: Compass,
    },
  };

  const current = photos[activePhoto];

  return (
    <div className="relative w-full max-w-[390px] sm:max-w-[450px]">
      {/* Outer golden fire aura */}
      <div className="absolute -inset-3 rounded-card-lg bg-gradient-to-tr from-amber-500 via-red-600 to-amber-700 opacity-30 blur-xl" />

      {/* Main Card Frame */}
      <div className="relative bg-[#111827] rounded-card-lg p-3.5 sm:p-4 border-2 border-amber-500/40 shadow-card-got hover:shadow-card-got-hover transition-all duration-300 group">
        
        {/* Top Gold Bar */}
        <div className="flex items-center justify-between gap-2 mb-3 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="font-cinzel font-bold text-xs text-amber-300 tracking-wider">
              {current.tag}
            </span>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-cinzel font-bold text-amber-300">
            <Trophy className="w-3 h-3 text-amber-400" />
            <span>Yuva Sports 2026 Winner</span>
          </div>
        </div>

        {/* Photo Container */}
        <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-amber-500/30 shadow-inner bg-black">
          <img
            src={current.url}
            alt={current.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Photo Caption Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-left">
            <p className="font-cinzel font-bold text-base sm:text-lg text-white leading-tight drop-shadow-md">
              {current.title}
            </p>
            <p className="text-xs text-amber-300/90 font-cinzel mt-0.5 tracking-wide drop-shadow-sm">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Interactive Photo Switcher Tabs */}
        <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center justify-between gap-1.5">
          <span className="text-[10px] font-cinzel font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">
            Switch View:
          </span>
          <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => setActivePhoto('match')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-cinzel font-bold tracking-wider transition-all flex items-center gap-1 ${
                activePhoto === 'match'
                  ? 'bg-amber-500 text-black shadow-xs font-black'
                  : 'bg-[#080B11] text-slate-300 hover:text-amber-300 border border-amber-500/20'
              }`}
            >
              <Swords className="w-3 h-3" />
              <span>Match</span>
            </button>

            <button
              onClick={() => setActivePhoto('gym')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-cinzel font-bold tracking-wider transition-all flex items-center gap-1 ${
                activePhoto === 'gym'
                  ? 'bg-amber-500 text-black shadow-xs font-black'
                  : 'bg-[#080B11] text-slate-300 hover:text-amber-300 border border-amber-500/20'
              }`}
            >
              <Dumbbell className="w-3 h-3" />
              <span>Gym</span>
            </button>

            <button
              onClick={() => setActivePhoto('travel')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-cinzel font-bold tracking-wider transition-all flex items-center gap-1 ${
                activePhoto === 'travel'
                  ? 'bg-amber-500 text-black shadow-xs font-black'
                  : 'bg-[#080B11] text-slate-300 hover:text-amber-300 border border-amber-500/20'
              }`}
            >
              <Compass className="w-3 h-3" />
              <span>Travel</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
