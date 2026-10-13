import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Swords } from 'lucide-react';

export default function BouncingBallHero() {
  const [bounceCount, setBounceCount] = useState(24);
  const [isHovered, setIsHovered] = useState(false);

  const handlePaddleClick = () => {
    setBounceCount(prev => prev + 1);
  };

  return (
    <div 
      className="relative w-full max-w-[360px] sm:max-w-[420px] h-[230px] bg-gradient-to-b from-[#111827]/95 via-[#0F172A]/90 to-[#080B11] rounded-2xl border border-amber-500/30 p-4 shadow-[0_0_35px_rgba(245,158,11,0.15)] overflow-hidden backdrop-blur-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Table Tennis Tournament Arena micro-interaction"
    >
      {/* Stone / Castle Grid background */}
      <div className="absolute inset-0 bg-got-stone opacity-60 pointer-events-none" />

      {/* Table Tennis Surface Lines (Obsidian Slate with Gold Trim) */}
      <div className="absolute inset-x-5 bottom-6 h-[16px] bg-[#1E293B] rounded-md border-t-2 border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        {/* Valyrian Steel Net in the center */}
        <div className="absolute left-1/2 bottom-[16px] -translate-x-1/2 w-[3px] h-[36px] bg-gradient-to-t from-slate-400 to-amber-300 shadow-md">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-red-600 rounded-full" />
          <div className="absolute top-0 -left-3 w-6 h-8 border border-amber-300/30 border-dashed rounded-xs pointer-events-none" />
        </div>
        {/* Gold Center Line */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-amber-400/50" />
      </div>

      {/* Status Pill */}
      <div className="absolute top-3 left-4 flex items-center gap-2 bg-[#080B11]/90 px-3 py-1 rounded-full border border-amber-500/30 text-xs text-amber-200 font-medium shadow-xs">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="font-cinzel tracking-wider text-[11px]">The Grand Arena • {bounceCount} Shots</span>
      </div>

      {/* Interactive Action Button */}
      <button
        onClick={handlePaddleClick}
        className="absolute top-3 right-4 inline-flex items-center gap-1 text-[11px] font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 px-3 py-1 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.4)] transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-300 font-cinzel"
        title="Click to strike the ball"
      >
        <Swords className="w-3 h-3 text-red-950" />
        <span>Strike!</span>
      </button>

      {/* Left Paddle (Player - Dragon Crest) */}
      <motion.div
        animate={{
          y: isHovered ? [0, -16, 0] : [0, -10, 0],
          rotate: isHovered ? [-18, -8, -18] : [-12, -4, -12],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
        onClick={handlePaddleClick}
        className="absolute left-9 bottom-10 cursor-pointer select-none"
      >
        <div className="relative w-12 h-14 bg-gradient-to-tr from-[#991B1B] to-[#DC2626] rounded-full border-2 border-amber-400/80 shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center justify-center">
          <div className="w-10 h-12 border border-amber-300/40 rounded-full flex items-center justify-center">
            <Flame className="w-4 h-4 text-amber-300" />
          </div>
          {/* Wood Handle */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-7 bg-amber-900 rounded-sm border border-amber-600 shadow-sm" />
        </div>
      </motion.div>

      {/* Right Paddle (Challenger) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [14, 6, 14],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          delay: 0.6,
          ease: "easeInOut",
        }}
        className="absolute right-9 bottom-10 select-none opacity-85"
      >
        <div className="relative w-12 h-14 bg-gradient-to-tr from-[#0F172A] to-[#1E293B] rounded-full border-2 border-amber-400/60 shadow-[0_0_15px_rgba(0,0,0,0.6)] flex items-center justify-center">
          <div className="w-10 h-12 border border-amber-400/20 rounded-full" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-7 bg-amber-900 rounded-sm border border-amber-600 shadow-sm" />
        </div>
      </motion.div>

      {/* Bouncing Dragonfire Ball */}
      <motion.div
        animate={{
          x: [50, 185, 320, 185, 50],
          y: [76, 14, 74, 22, 76],
          scaleX: [0.9, 1.05, 0.9, 1.05, 0.9],
          scaleY: [1.1, 0.95, 1.1, 0.95, 1.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut",
        }}
        className="absolute left-0 bottom-11 z-10 cursor-pointer pointer-events-none"
      >
        <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-[#FEF08A] via-[#F59E0B] to-[#EF4444] shadow-[0_0_16px_rgba(245,158,11,0.9)] border border-amber-200 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white absolute top-1 left-1" />
        </div>
        {/* Shadow */}
        <motion.div
          animate={{
            scale: [1.2, 0.4, 1.2, 0.5, 1.2],
            opacity: [0.7, 0.2, 0.7, 0.2, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="w-4 h-1.5 bg-black/60 rounded-full blur-[1px] mt-8 -ml-1"
        />
      </motion.div>

      {/* Ambient Torch Glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
