import React from 'react';
import HeroSection from './components/HeroSection';
import CoreFeatures from './components/CoreFeatures';
import ControlCenterShowcase from './components/ControlCenterShowcase';
import EcosystemAndReports from './components/EcosystemAndReports';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <HeroSection />
      <CoreFeatures />
      <ControlCenterShowcase />
      <EcosystemAndReports />
      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-center text-xs text-slate-500">
        Designed for modern, proactive school safety • Dark theme • Modular panels • Map visualization
      </footer>
    </div>
  );
}
