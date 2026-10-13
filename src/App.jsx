import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sports from './components/Sports';
import Fitness from './components/Fitness';
import Leadership from './components/Leadership';
import TravelCooking from './components/TravelCooking';
import People from './components/People';
import SkillsHeatmap from './components/SkillsHeatmap';
import Conclusion from './components/Conclusion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmberParticles from './components/EmberParticles';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B11] text-[#E2E8F0] font-body selection:bg-[#F59E0B] selection:text-black flex flex-col relative overflow-x-hidden">
      {/* Floating Ember Sparks Ambient Particle Effect */}
      <EmberParticles />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main className="flex-1 relative z-10">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: About Me */}
        <About />

        {/* Section 03: Sports - The Grand Arenas */}
        <Sports />

        {/* Section 04: Fitness & Athletic Conditioning */}
        <Fitness />

        {/* Section 05: Leadership & Event Management */}
        <Leadership />

        {/* Section 06: Travel & Cooking - Staying Curious */}
        <TravelCooking />

        {/* Section 07: People & Communication */}
        <People />

        {/* Section 08: Skills Heatmap Matrix */}
        <SkillsHeatmap />

        {/* Section 09: Conclusion */}
        <Conclusion />

        {/* Section 10: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
