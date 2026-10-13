import React from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Trophy, Flame } from 'lucide-react';

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
    <footer className="bg-[#134E4A] text-white border-t border-teal-500/20 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-teal-600/30">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center font-heading font-bold text-lg text-white shadow-md border border-teal-400/30">
              AN
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-white block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-teal-200">
                Athlete • Organiser • Traveller • Home Cook
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-teal-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all hover:-translate-y-0.5"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FFB703]" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300/80 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 justify-center">
            <span>Built with Court & Campfire spirit</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
            <span>React + Tailwind CSS + Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
