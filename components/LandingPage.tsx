import React from 'react';
import { ArrowRight, ShieldCheck, BarChart3, Activity, RefreshCw, Zap, Globe, Lock } from 'lucide-react';

interface LandingPageProps {
  onSamplePassport: () => void;
  onViewPassport: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSamplePassport, onViewPassport }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#002820] font-sans text-white flex flex-col">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/chargeup-logo.png"
                alt="Chargeup"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex space-x-8">
              {['Risk Engine', 'Digital Twin', 'KARMA Index'].map(item => (
                <a key={item} href="#" className="text-slate-400 hover:text-green-400 font-medium text-sm transition-colors duration-200">{item}</a>
              ))}
              <a href="#" className="text-slate-400 hover:text-green-400 font-medium text-sm transition-colors duration-200 flex items-center gap-1.5">
                AI Genie <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">New</span>
              </a>
              <a href="#" className="text-green-400 font-semibold text-sm border-b border-green-500 pb-0.5">Battery Passport</a>
            </nav>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="text-slate-400 hover:text-green-400 text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
                Sign In
              </button>
              <button className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-green-900/40 flex items-center gap-2 hover:shadow-green-800/50">
                Contact Us <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <main className="flex-1 flex items-center relative overflow-hidden">

        {/* Background subtle elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-700/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text Content */}
            <div className="text-center lg:text-left">

              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6 text-green-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
                Blockchain-Powered Platform
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Battery{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                  Passport
                </span>
                <br />
                Platform
              </h1>

              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                India's trusted battery passport infrastructure for the EV ecosystem.
                A blockchain-powered platform that creates a unique digital identity for every lithium-ion battery — enabling transparent tracking, real-time diagnostics, and lifecycle management from manufacturing to second-life and recycling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
                <button
                  onClick={onSamplePassport}
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-2xl shadow-green-900/50 hover:shadow-green-700/50 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  Sample Passport <ArrowRight size={18} />
                </button>
                <button
                  onClick={onViewPassport}
                  className="bg-white/8 hover:bg-white/12 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 backdrop-blur-sm"
                >
                  View My Passport <ArrowRight size={18} />
                </button>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheck, label: 'Trusted Battery\nIdentity', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
                  { icon: Activity, label: 'Live Battery\nIntelligence', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                  { icon: BarChart3, label: 'Smart\nAnalytics', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                  { icon: RefreshCw, label: 'Circular Lifecycle\nTracking', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
                ].map(({ icon: Icon, label, color, bg }) => (
                  <div key={label} className="flex flex-col items-center lg:items-start gap-2.5">
                    <div className={`w-11 h-11 ${bg} border rounded-xl flex items-center justify-center ${color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 text-center lg:text-left leading-tight whitespace-pre-line">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Battery Passport Image */}
            <div className="hidden lg:flex items-center justify-center relative">
              {/* Glow behind the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[480px] h-[480px] bg-green-500/15 rounded-full blur-[80px]"></div>
              </div>

              {/* Image */}
              <div className="relative z-10 w-full max-w-[580px]">
                <img
                  src="/battery-passport-hero.png"
                  alt="AmpLedger Battery Passport"
                  className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-transform duration-500"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(52,211,153,0.15))' }}
                />

                {/* Floating badge - Live */}
                <div className="absolute top-6 right-0 flex items-center gap-2 bg-slate-900/90 border border-green-500/30 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
                  <span className="text-xs font-semibold text-green-400">LIVE TRACKING</span>
                </div>

                {/* Floating badge - Blockchain */}
                <div className="absolute bottom-8 left-0 flex items-center gap-2 bg-slate-900/90 border border-teal-500/30 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-xl">
                  <Lock size={11} className="text-teal-400" />
                  <span className="text-xs font-semibold text-teal-400">BLOCKCHAIN SECURED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Stats bar */}
      <div className="border-t border-white/5 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '2M+', label: 'Batteries Tracked' },
              { value: '99.9%', label: 'Data Accuracy' },
              { value: '50+', label: 'Fleet Partners' },
              { value: 'ISO 27001', label: 'Certified Secure' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-green-400 mb-1">{value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src="/chargeup-logo.png" alt="Chargeup" className="h-7 w-auto opacity-60" />
          <p className="text-slate-600 text-sm">
            &copy; 2025 Chargeup Energy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Contact'].map(item => (
              <a key={item} href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
