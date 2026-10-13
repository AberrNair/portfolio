import React from 'react';

export default function EmberParticles() {
  const embers = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {embers.map((ember) => (
        <span
          key={ember.id}
          className="absolute rounded-full bg-gradient-to-t from-[#EF4444] via-[#F59E0B] to-[#FEF08A] shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-float-ember"
          style={{
            left: ember.left,
            bottom: '-20px',
            width: `${ember.size}px`,
            height: `${ember.size * 1.5}px`,
            animationDuration: `${ember.duration}s`,
            animationDelay: `${ember.delay}s`,
            opacity: ember.opacity,
          }}
        />
      ))}
    </div>
  );
}
