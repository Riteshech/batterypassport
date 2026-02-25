import React from 'react';
import { 
    ArrowLeft, Bell, User, LogIn, ShieldCheck 
} from 'lucide-react';
import DashboardHeader from './DashboardHeader';
import SpecsGrid from './SpecsGrid';
import PhysicalSpecs from './PhysicalSpecs'; // Renamed internally to Enclosure title
import Compliances from './Compliances';
import TechnicalSpecs from './TechnicalSpecs';
import BmsDetails from './BmsDetails';
import LoginGate from './LoginGate';
import { BATTERY_DATA } from '../constants';

interface DashboardProps {
  onBack: () => void;
  isDemo: boolean;
  isLoggedIn: boolean;
  onLoginRequest: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack, isDemo, isLoggedIn, onLoginRequest }) => {
  // Full access if demo mode OR logged in
  const hasFullAccess = isDemo || isLoggedIn;
  
  // Display name
  const username = isDemo ? 'Demo User' : (isLoggedIn ? 'Admin' : 'Guest');

  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans flex flex-col">
        
        {/* TOP NAVBAR - Chargeup Theme */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                
                {/* Left: Branding & Back */}
                <div className="flex items-center gap-6">
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-slate-500 hover:text-[#004D40] transition-colors group"
                    >
                        <div className="p-1.5 rounded-full group-hover:bg-slate-100 transition-colors">
                            <ArrowLeft size={20} />
                        </div>
                        <span className="hidden sm:inline font-medium text-sm">Back</span>
                    </button>

                    <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

                    <div className="flex items-center gap-3">
                         <img 
                            src="https://chargeup.in/wp-content/uploads/2024/05/logo.svg" 
                            alt="Chargeup" 
                            className="h-7 w-auto"
                            onError={(e) => {
                               e.currentTarget.style.display = 'none';
                               e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold tracking-tight text-slate-900"><span class="text-green-600">charge</span>up</span>';
                            }}
                         />
                         <span className="text-slate-300 text-xl font-light hidden md:inline">|</span>
                         <span className="font-semibold text-slate-600 hidden md:inline">Battery Passport</span>
                    </div>
                </div>

                {/* Right: User Actions */}
                <div className="flex items-center gap-4">
                     <span className="hidden sm:inline-flex px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200 items-center gap-1">
                         <ShieldCheck size={12} /> Verified Asset
                     </span>

                     <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

                     <button className="relative text-slate-400 hover:text-slate-600">
                        <Bell size={20} />
                        {isLoggedIn && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
                     </button>

                     <div className="flex items-center gap-3 pl-2">
                        <div className={`h-9 w-9 rounded-full flex items-center justify-center border-2 ${isLoggedIn || isDemo ? 'bg-[#004D40] border-[#004D40] text-white' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                            <User size={18} />
                        </div>
                        <div className="hidden sm:block text-right">
                             <div className="text-xs font-bold text-slate-900">{username}</div>
                             <div className="text-[10px] text-slate-500 uppercase tracking-wide">
                                 {isLoggedIn || isDemo ? 'Authorized' : 'Read-Only'}
                             </div>
                        </div>
                        
                        {!isLoggedIn && !isDemo && (
                            <button 
                                onClick={onLoginRequest}
                                className="ml-2 bg-[#004D40] hover:bg-[#00382e] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
                            >
                                <LogIn size={14} /> Login
                            </button>
                        )}
                     </div>
                </div>
            </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            
            {/* 1. BASIC INFO (Always Visible to Guests) */}
            <div className="animate-fade-in-up">
                {/* Header Card (Now contains SNs) */}
                <DashboardHeader data={BATTERY_DATA} />

                {/* Grid Stats */}
                <SpecsGrid data={BATTERY_DATA} />
                
                {/* REORDERED SECTIONS */}
                {/* 1. Technical Specifications */}
                <TechnicalSpecs data={BATTERY_DATA} />

                {/* 2. BMS & IoT Details */}
                <BmsDetails data={BATTERY_DATA} />
                
                {/* 3. Enclosure (PhysicalSpecs) */}
                <PhysicalSpecs data={BATTERY_DATA} />

                {/* 4. Compliances */}
                <Compliances data={BATTERY_DATA} />

            </div>

            {/* 2. ADVANCED INFO (Protected by LoginGate) */}
            <div className="animate-fade-in-up delay-100">
                 <div className="flex items-center gap-4 mb-6">
                     <div className="h-px flex-1 bg-slate-200"></div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Advanced Telemetry & Compliance</span>
                     <div className="h-px flex-1 bg-slate-200"></div>
                 </div>

                 <LoginGate 
                    isUnlocked={hasFullAccess} 
                    onLogin={onLoginRequest}
                 />
            </div>
            
             {/* Footer */}
             <div className="mt-12 text-center text-sm text-slate-400 pb-8 border-t border-slate-200 pt-8">
                 <p className="mb-2">&copy; 2025 Chargeup Energy. Blockchain Ledger ID: <span className="font-mono text-slate-600">0x7f...3a2b</span></p>
                 <div className="flex justify-center gap-4 text-xs font-medium">
                     <a href="#" className="hover:text-green-700">Privacy Policy</a>
                     <a href="#" className="hover:text-green-700">Terms of Service</a>
                     <a href="#" className="hover:text-green-700">Support</a>
                 </div>
             </div>
        </main>
    </div>
  );
};

export default Dashboard;