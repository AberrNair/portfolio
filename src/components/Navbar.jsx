import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';
import { Menu, X, Flame, Shield, Send, Swords, Crown } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B11]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-amber-500/25 py-2.5'
          : 'bg-[#080B11]/80 backdrop-blur-sm border-b border-amber-500/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Royal Sigil Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Abeer Nair Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-black font-cinzel font-black text-base shadow-[0_0_15px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform duration-200 border border-amber-300">
              AN
            </div>
            <div>
              <span className="font-cinzel font-bold text-base sm:text-lg text-white tracking-wider block group-hover:text-amber-400 transition-colors">
                Abeer Nair
              </span>
              <span className="text-[10px] font-semibold text-amber-300/80 tracking-widest uppercase flex items-center gap-1.5 font-cinzel">
                <span>Athlete</span>
                <span className="w-1 h-1 rounded-full bg-red-500" />
                <span>Organiser</span>
                <span className="w-1 h-1 rounded-full bg-amber-400" />
                <span>Leader</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111827]/90 px-3 py-1.5 rounded-full border border-amber-500/25 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3.5 py-1 rounded-full text-xs font-cinzel font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-5 py-2 rounded-full text-xs font-cinzel font-bold tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Swords className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-amber-400 hover:bg-amber-400/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080B11]/98 border-b border-amber-500/30 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-cinzel font-bold tracking-wider flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-slate-300 hover:bg-amber-500/10 hover:text-amber-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Crown className="w-4 h-4 text-black" />}
                </button>
              );
            })}
            <div className="pt-2 border-t border-amber-500/20">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-black py-2.5 rounded-xl text-xs font-cinzel font-bold tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <Swords className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
