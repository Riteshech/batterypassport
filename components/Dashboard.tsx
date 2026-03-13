import React from "react";
import { ArrowLeft, Bell, User, LogIn, ShieldCheck } from "lucide-react";
import DashboardHeader from "./DashboardHeader";
import SpecsGrid from "./SpecsGrid";
import PhysicalSpecs from "./PhysicalSpecs";
import Compliances from "./Compliances";
import TechnicalSpecs from "./TechnicalSpecs";
import BmsDetails from "./BmsDetails";
import LoginGate from "./LoginGate";
import { BATTERY_DATA } from "../constants";

interface DashboardProps {
    onBack: () => void;
    isDemo: boolean;
    isLoggedIn: boolean;
    onLoginRequest: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
    onBack,
    isDemo,
    isLoggedIn,
    onLoginRequest,
}) => {
    const hasFullAccess = isDemo || isLoggedIn;
    const username = isDemo ? "Demo User" : isLoggedIn ? "Admin" : "Guest";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#002820] font-sans flex flex-col">
            {/* Background grid */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-teal-700/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* TOP NAVBAR */}
            <header className="bg-slate-950/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Left: Branding & Back */}
                    <div className="flex items-center gap-5">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors group"
                        >
                            <div className="p-1.5 rounded-lg group-hover:bg-white/5 transition-colors">
                                <ArrowLeft size={18} />
                            </div>
                            <span className="hidden sm:inline font-medium text-sm">
                                Back
                            </span>
                        </button>

                        <div className="h-5 w-px bg-white/10 hidden sm:block"></div>

                        <div className="flex items-center gap-3">
                            <img
                                src="/Chargeup_Logo__-removebg-dark bg.png"
                                alt="Chargeup"
                                className="h-8 w-auto"
                            />
                            <span className="text-white/20 text-xl font-light hidden md:inline">
                                |
                            </span>
                            <span className="font-semibold text-slate-400 text-sm hidden md:inline">
                                Battery Passport
                            </span>
                        </div>
                    </div>

                    {/* Right: User Actions */}
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline-flex px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 items-center gap-1.5">
                            <ShieldCheck size={11} /> Verified Asset
                        </span>

                        <div className="h-5 w-px bg-white/10 hidden sm:block"></div>

                        <button className="relative text-slate-500 hover:text-slate-300 transition-colors">
                            <Bell size={18} />
                            {isLoggedIn && (
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
                            )}
                        </button>

                        <div className="flex items-center gap-3 pl-1">
                            <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center border ${isLoggedIn || isDemo ? "bg-green-600/20 border-green-500/30 text-green-400" : "bg-white/5 border-white/10 text-slate-500"}`}
                            >
                                <User size={16} />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-xs font-bold text-slate-200">
                                    {username}
                                </div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wide">
                                    {isLoggedIn || isDemo
                                        ? "Authorized"
                                        : "Read-Only"}
                                </div>
                            </div>

                            {!isLoggedIn && !isDemo && (
                                <button
                                    onClick={onLoginRequest}
                                    className="ml-1 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                                >
                                    <LogIn size={13} /> Login
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 relative z-10">
                <div className="animate-fade-in-up">
                    <DashboardHeader data={BATTERY_DATA} />
                    <SpecsGrid data={BATTERY_DATA} />
                    <TechnicalSpecs data={BATTERY_DATA} />
                    <BmsDetails data={BATTERY_DATA} />
                    <PhysicalSpecs data={BATTERY_DATA} />
                    <Compliances data={BATTERY_DATA} />
                </div>

                <div className="animate-fade-in-up">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px flex-1 bg-white/5"></div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                            Advanced Telemetry & Compliance
                        </span>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <LoginGate
                        isUnlocked={hasFullAccess}
                        onLogin={onLoginRequest}
                    />
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-sm text-slate-600 pb-8 border-t border-white/5 pt-8">
                    <p className="mb-2">
                        &copy; 2025 Chargeup. Blockchain Ledger ID:{" "}
                        <span className="font-mono text-slate-500">
                            0x7f...3a2b
                        </span>
                    </p>
                    <div className="flex justify-center gap-4 text-xs font-medium">
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-green-400 transition-colors"
                        >
                            Support
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
