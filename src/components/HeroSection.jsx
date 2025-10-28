import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-28 lg:py-32">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-300">
          <ShieldCheck className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wide uppercase">AI-Powered School Safety</span>
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          Transform CCTV into a real-time protective network
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          Campus-wide, privacy-aware surveillance with intelligent threat detection, automated attendance,
          and instant response orchestration — designed for peace of mind for parents and administrators.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#dashboard" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            Explore Dashboard Concept
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-900/80">
            <Play className="h-4 w-4" />
            See Core Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
