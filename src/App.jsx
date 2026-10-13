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

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1F2937] font-body selection:bg-[#FF6B4A] selection:text-white flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main className="flex-1">
        {/* Section 01: Hero (Teal) */}
        <Hero />

        {/* Section 02: About Me (Cream) */}
        <About />

        {/* Section 03: Sports - My Biggest Passion (Teal) */}
        <Sports />

        {/* Section 04: Fitness & Athletic Conditioning (Cream) */}
        <Fitness />

        {/* Section 05: Leadership & Event Management (Teal) */}
        <Leadership />

        {/* Section 06: Travel & Cooking - Staying Curious (Cream) */}
        <TravelCooking />

        {/* Section 07: People & Communication (Teal) */}
        <People />

        {/* Section 08: Skills Heatmap Matrix (Cream) */}
        <SkillsHeatmap />

        {/* Section 09: Conclusion (Teal) */}
        <Conclusion />

        {/* Section 10: Contact (Cream) */}
        <Contact />
      </main>

      {/* Footer (Deep Teal) */}
      <Footer />
    </div>
  );
}
