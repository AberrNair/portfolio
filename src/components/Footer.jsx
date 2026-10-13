import React from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { ArrowUp, Crown, Swords, Flame } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#040609] text-white border-t border-amber-500/20 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-amber-500/15">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-cinzel font-black text-base text-black shadow-md border border-amber-300">
              AN
            </div>
            <div>
              <span className="font-cinzel font-bold text-xl text-gold-gradient block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-amber-400/80 font-cinzel tracking-wider">
                Athlete • Organiser • Traveller • Home Cook
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-cinzel font-semibold text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-amber-300 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] hover:bg-[#1A2338] text-amber-300 text-xs font-cinzel font-bold border border-amber-500/30 transition-all hover:-translate-y-0.5"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left font-body">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 justify-center font-cinzel text-[11px] text-amber-400/80">
            <span>The Realm of Champions</span>
            <span className="w-1 h-1 rounded-full bg-red-500" />
            <span>Game of Thrones Aesthetic</span>
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span>React + Tailwind + Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
