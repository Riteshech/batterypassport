import React from 'react';
import { ArrowRight, Play, ShieldCheck, BarChart3, Activity, RefreshCw } from 'lucide-react';

interface LandingPageProps {
  onSamplePassport: () => void;
  onViewPassport: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSamplePassport, onViewPassport }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="https://chargeup.in/wp-content/uploads/2024/05/logo.svg" 
                alt="Chargeup" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold tracking-tight text-slate-900"><span class="text-green-600">charge</span>up</span>';
                }}
              />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-500 hover:text-green-600 font-medium text-sm transition-colors">Risk Engine</a>
              <a href="#" className="text-slate-500 hover:text-green-600 font-medium text-sm transition-colors">Digital Twin</a>
              <a href="#" className="text-slate-500 hover:text-green-600 font-medium text-sm transition-colors">KARMA Index</a>
              <a href="#" className="text-slate-500 hover:text-green-600 font-medium text-sm transition-colors flex items-center gap-1">
                AI Genie <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">New</span>
              </a>
              <a href="#" className="text-slate-900 font-bold text-sm border-b-2 border-green-500 pb-6 -mb-6">Battery Passport</a>
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L3.84,2.15C3.84,2.15 6.05,2.66 6.05,2.66Z" /></svg>
              </button>
              <button className="bg-[#004D40] hover:bg-[#00382e] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-green-900/20 flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Battery <span className="text-green-600">Aadhaar</span><br />
                Platform
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Revolutionary blockchain-powered battery lifecycle management for India's EV ecosystem.
                <br /><br />
                Track, verify, and optimize every battery from manufacturing to recycling with unprecedented transparency and security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button 
                  onClick={onSamplePassport}
                  className="bg-[#004D40] hover:bg-[#00382e] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-green-900/20 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Sample Passport <ArrowRight size={18} />
                </button>
                <button 
                  onClick={onViewPassport}
                  className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-green-500/30 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                   View Passport <ArrowRight size={18} />
                </button>
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center lg:items-start gap-2">
                   <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-1">
                      <ShieldCheck size={24} />
                   </div>
                   <span className="text-xs font-bold text-slate-700 text-center lg:text-left leading-tight">Blockchain<br/>Verified</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-1">
                      <Activity size={24} />
                   </div>
                   <span className="text-xs font-bold text-slate-700 text-center lg:text-left leading-tight">Real-time<br/>Monitoring</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                   <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-1">
                      <BarChart3 size={24} />
                   </div>
                   <span className="text-xs font-bold text-slate-700 text-center lg:text-left leading-tight">Performance<br/>Analytics</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-1">
                      <RefreshCw size={24} />
                   </div>
                   <span className="text-xs font-bold text-slate-700 text-center lg:text-left leading-tight">Complete<br/>Lifecycle</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Visual (CSS/React Only) */}
            <div className="relative animate-fade-in hidden lg:block group perspective-1000">
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[100px] -z-10 group-hover:bg-green-400/30 transition-all duration-1000"></div>
              
              {/* Interactive Card Container */}
              <div className="w-full aspect-[4/3] relative transform transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6 preserve-3d">
                  
                  {/* Glassmorphism Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-950/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
                        
                        {/* Internal Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        {/* Scanner Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-400/50 shadow-[0_0_20px_rgba(74,222,128,0.5)] animate-[scan_4s_ease-in-out_infinite]"></div>

                        {/* Central Battery Hologram Representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="relative w-40 h-64 border-4 border-green-500/30 rounded-2xl flex flex-col items-center justify-end p-2 bg-slate-900/50 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                                 {/* Battery Cap */}
                                 <div className="absolute -top-3 w-16 h-4 bg-green-500/30 rounded-t-md"></div>
                                 
                                 {/* Charging Animation Level */}
                                 <div className="w-full bg-gradient-to-t from-green-600 to-green-400/80 rounded animate-[charge_3s_ease-in-out_infinite]" style={{height: '80%'}}></div>
                                 
                                 {/* Floating Data Points */}
                                 <div className="absolute -right-24 top-10 flex items-center gap-2 animate-fade-in delay-100">
                                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                     <div className="px-2 py-1 bg-slate-800/80 rounded border border-green-500/30 text-[10px] text-green-300 font-mono shadow-lg backdrop-blur">
                                         SOH: 98%
                                     </div>
                                     <div className="w-8 h-px bg-green-500/30"></div>
                                 </div>
                                 
                                 <div className="absolute -left-24 bottom-20 flex items-center gap-2 animate-fade-in delay-300">
                                     <div className="w-8 h-px bg-blue-500/30"></div>
                                     <div className="px-2 py-1 bg-slate-800/80 rounded border border-blue-500/30 text-[10px] text-blue-300 font-mono shadow-lg backdrop-blur">
                                         Temp: 32°C
                                     </div>
                                     <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                                 </div>

                                 <div className="absolute -right-28 bottom-10 flex items-center gap-2 animate-fade-in delay-500">
                                     <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                                     <div className="px-2 py-1 bg-slate-800/80 rounded border border-amber-500/30 text-[10px] text-amber-300 font-mono shadow-lg backdrop-blur">
                                         Cycles: 342
                                     </div>
                                     <div className="w-8 h-px bg-amber-500/30"></div>
                                 </div>
                             </div>
                        </div>

                        {/* Bottom Info Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                             <div className="flex justify-between items-end">
                                 <div>
                                     <div className="text-xs text-green-400 font-mono mb-1">LIVE TELEMETRY</div>
                                     <div className="text-xl font-bold text-white tracking-widest">CHARGEUP</div>
                                 </div>
                                 <ShieldCheck size={32} className="text-slate-600" />
                             </div>
                        </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </main>

       {/* Simple Footer */}
       <div className="border-t border-slate-100 py-8 bg-slate-50 text-center">
          <p className="text-slate-400 text-sm font-medium">
              &copy; 2025 Chargeup Energy. All rights reserved.
          </p>
       </div>
    </div>
  );
};

export default LandingPage;