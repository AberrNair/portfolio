import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';
import { Menu, X, Flame, Trophy, Send } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
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
          ? 'bg-[#134E4A]/95 backdrop-blur-md shadow-lg border-b border-teal-500/20 py-2.5'
          : 'bg-[#0F766E]/90 backdrop-blur-sm border-b border-teal-500/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Abeer Nair Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B4A] to-[#FFB703] flex items-center justify-center text-white font-heading font-extrabold text-base shadow-md group-hover:scale-105 transition-transform duration-200">
              AN
            </div>
            <div>
              <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight block group-hover:text-[#FFB703] transition-colors">
                Abeer Nair
              </span>
              <span className="text-[10px] font-semibold text-teal-200 tracking-wider uppercase flex items-center gap-1.5">
                <span>Athlete</span>
                <span className="w-1 h-1 rounded-full bg-[#FF6B4A]" />
                <span>Organiser</span>
                <span className="w-1 h-1 rounded-full bg-[#FFB703]" />
                <span>Leader</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/20 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF6B4A] text-white shadow-sm'
                      : 'text-teal-100 hover:text-white hover:bg-white/10'
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
              className="inline-flex items-center gap-1.5 bg-[#FF6B4A] hover:bg-[#E85535] text-white px-4 py-2 rounded-full text-xs font-bold shadow-warm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#134E4A] border-b border-teal-500/30 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#FF6B4A] text-white'
                      : 'text-teal-100 hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FFB703]" />}
                </button>
              );
            })}
            <div className="pt-2 border-t border-teal-600/30">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-center bg-[#FF6B4A] hover:bg-[#E85535] text-white py-2.5 rounded-xl text-sm font-semibold shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
