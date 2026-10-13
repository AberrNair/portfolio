import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BouncingBallHero() {
  const [bounceCount, setBounceCount] = useState(24);
  const [isHovered, setIsHovered] = useState(false);

  const handlePaddleClick = () => {
    setBounceCount(prev => prev + 1);
  };

  return (
    <div 
      className="relative w-full max-w-[340px] sm:max-w-[400px] h-[220px] bg-gradient-to-b from-[#0F766E]/40 to-[#0B4F4A]/80 rounded-2xl border border-teal-300/30 p-4 shadow-xl overflow-hidden backdrop-blur-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Interactive Table Tennis Court micro-animation"
    >
      {/* Table Tennis Surface Lines */}
      <div className="absolute inset-x-4 bottom-5 h-[14px] bg-[#14B8A6]/60 rounded-md border-t-2 border-white/80 shadow-md">
        {/* Net in the center */}
        <div className="absolute left-1/2 bottom-[14px] -translate-x-1/2 w-[2px] h-[34px] bg-white/90 shadow-sm">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-[#FF6B4A] rounded-full" />
          <div className="absolute top-0 -left-3 w-6 h-8 border border-white/30 border-dashed rounded-xs pointer-events-none" />
        </div>
        {/* White Center Line */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[1px] bg-white/50" />
      </div>

      {/* Floating Status Pill */}
      <div className="absolute top-3 left-4 flex items-center gap-2 bg-[#134E4A]/90 px-2.5 py-1 rounded-full border border-teal-400/30 text-xs text-teal-100 font-medium">
        <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-ping" />
        <span>Rally in Progress • {bounceCount} Shots</span>
      </div>

      {/* Click to Smash Badge */}
      <button
        onClick={handlePaddleClick}
        className="absolute top-3 right-4 text-[11px] font-semibold text-white/90 bg-[#FF6B4A] hover:bg-[#E85535] px-2.5 py-1 rounded-full shadow transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-300"
        title="Click to hit the ball"
      >
        Smash! 🏓
      </button>

      {/* Table Tennis Paddle (Left side) */}
      <motion.div
        animate={{
          y: isHovered ? [0, -15, 0] : [0, -10, 0],
          rotate: isHovered ? [-18, -8, -18] : [-12, -4, -12],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
        onClick={handlePaddleClick}
        className="absolute left-8 bottom-9 cursor-pointer select-none"
      >
        <div className="relative w-12 h-14 bg-gradient-to-tr from-[#FF6B4A] to-[#E85535] rounded-full border-2 border-white/60 shadow-lg flex items-center justify-center">
          <div className="w-10 h-12 border border-white/30 rounded-full" />
          {/* Wooden Handle */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-7 bg-amber-200 rounded-sm border border-amber-400 shadow-sm" />
        </div>
      </motion.div>

      {/* Opponent Paddle (Right side subtle) */}
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
        className="absolute right-8 bottom-9 select-none opacity-80"
      >
        <div className="relative w-12 h-14 bg-gradient-to-tr from-[#134E4A] to-[#0F766E] rounded-full border-2 border-teal-200/50 shadow-lg flex items-center justify-center">
          <div className="w-10 h-12 border border-white/20 rounded-full" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-7 bg-amber-200 rounded-sm border border-amber-400 shadow-sm" />
        </div>
      </motion.div>

      {/* Bouncing Celluloid Ball */}
      <motion.div
        animate={{
          x: [48, 175, 300, 175, 48],
          y: [70, 12, 68, 20, 70],
          scaleX: [0.9, 1.05, 0.9, 1.05, 0.9],
          scaleY: [1.1, 0.95, 1.1, 0.95, 1.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut",
        }}
        className="absolute left-0 bottom-10 z-10 cursor-pointer pointer-events-none"
      >
        <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-[#FFF6D6] via-[#FFB703] to-[#FF6B4A] shadow-[0_0_12px_rgba(255,183,3,0.8)] border border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/90 absolute top-1 left-1" />
        </div>
        {/* Subtle shadow beneath ball */}
        <motion.div
          animate={{
            scale: [1.2, 0.4, 1.2, 0.5, 1.2],
            opacity: [0.6, 0.2, 0.6, 0.2, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="w-4 h-1.5 bg-black/40 rounded-full blur-[1px] mt-8 -ml-1"
        />
      </motion.div>

      {/* Dynamic court ambient glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-teal-300/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
