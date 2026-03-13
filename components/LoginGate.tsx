import React, { useState } from 'react';
import { 
    Lock, ChevronRight, LogIn, Layers, Database, PieChart as PieIcon, Info, Atom, Beaker,
    Activity, Battery, RefreshCw, Zap, Thermometer, Gauge, TrendingUp, DollarSign, Calendar,
    Factory, Truck, Warehouse, Recycle, Check, CheckCircle2, Circle
} from 'lucide-react';
import { 
    PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, Legend,
    AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { MATERIAL_DATA, BATTERY_DATA, PERFORMANCE_HISTORY, LIFECYCLE_STEPS, RESIDUAL_VALUE_DATA } from '../constants';

interface LoginGateProps {
    isUnlocked: boolean;
    onLogin: () => void;
}

// Data from Specification Table
const COMPONENT_BREAKDOWN = [
    { component: "Cell Cathode Material", materials: "Lithium Iron Phosphate (LiFePO₄)" },
    { component: "Cell Anode Material", materials: "Graphite (C)" },
    { component: "Electrolyte Salt", materials: "Lithium Hexafluorophosphate (LiPF₆)" },
    { component: "Cathode Current Collector", materials: "Aluminum (Al)" },
    { component: "Anode Current Collector", materials: "Copper (Cu)" },
    { component: "Binder", materials: "Polyvinylidene Fluoride (PVDF)" },
    { component: "Electrolyte Solvent", materials: "Ethylene Carbonate (EC)" },
    { component: "Separator", materials: "Polymer" },
    { component: "Cell Casing", materials: "Steel" },
];

const LoginGate: React.FC<LoginGateProps> = ({ isUnlocked, onLogin }) => {
  const [activeTab, setActiveTab] = useState<string>("Material Comp.");
  const [selectedMetric, setSelectedMetric] = useState<string>("SOH"); // For Performance Bottom Panel
  
  const tabs = ["Material Comp.", "Performance", "Circularity", "Emissions", "Warranty", "Lifecycle"];

  // Determine dynamic height for the bottom panel
  const getBottomPanelHeight = () => {
      switch (activeTab) {
          case "Performance": return "h-[540px]";
          case "Lifecycle": return "h-[450px]";
          case "Material Comp.": return "h-[400px]";
          default: return "h-[300px]";
      }
  };

  // Custom Tooltip for the Pie Chart
  const CustomTooltip = ({ active, payload }: any) => {
      if (active && payload && payload.length) {
        const data = payload[0];
        return (
          <div className="bg-slate-900/95 backdrop-blur-md p-3 border border-white/10 shadow-xl rounded-xl">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.payload.fill }}></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{data.name}</span>
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-slate-100">{data.value}</span>
                <span className="text-sm font-semibold text-slate-500">%</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1 font-medium">of total battery mass</div>
          </div>
        );
      }
      return null;
  };

  // Custom Tooltip for Area Chart
  const CustomAreaTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/95 backdrop-blur-md p-3 border border-slate-700 shadow-xl rounded-lg text-white">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                   {activeTab === 'Performance' ? `Cycle Count: ${label}` : `Year: ${label}`}
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{payload[0].value}</span>
                    <span className="text-xs text-slate-400 font-mono">
                        {activeTab === 'Lifecycle' ? '%' :
                         selectedMetric === 'SOH' ? '%' : 
                         selectedMetric === 'Voltage' ? 'V' : 
                         selectedMetric === 'Distance' ? 'km' : '°C'}
                    </span>
                </div>
            </div>
        );
    }
    return null;
  };

  // Custom Icon for E-Rickshaw
  const ERickshawIcon = ({ className }: { className?: string }) => (
      <svg viewBox="0 0 576 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M544 192h-16c-15.9 0-30.8 7.6-40.3 20.6L465 248h-48.4c-8.8-15-24.9-24-42.6-24h-16c-17.7 0-33.8 9-42.6 24h-42.8l-16-48c-8.8-26.5-33.8-44.5-61.7-44.5H64c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64v32c0 35.3 28.7 64 64 64s64-28.7 64-64v-32h192v32c0 35.3 28.7 64 64 64s64-28.7 64-64v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16c-17.7 0-32-14.3-32-32V224h16c17.7 0 32-14.3 32-32s-14.3-32-32-32zM128 464c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm320 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM64 224v-64h131.3l16 48H64zm384 144H64v-32h384v32z"/>
      </svg>
  );

  // --- RENDERER: RIGHT PANEL CONTENT ---
  const renderRightPanel = () => {
    switch (activeTab) {
        case "Material Comp.":
            return (
                <div className="flex flex-col h-full bg-transparent rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/5 bg-white/3 backdrop-blur-sm flex items-center justify-between shrink-0 h-[64px]">
                        <div>
                            <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
                                <Layers size={18} className="text-green-500" />
                                BOM Component Breakdown
                            </h3>
                            <p className="text-[10px] text-slate-500 pl-6.5 mt-0.5 font-medium">Detailed Level 1 bill of materials</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="text-[10px] uppercase font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                                Verified
                            </span>
                        </div>
                    </div>
                    
                    {/* Table Container */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                        <table className="w-full text-left border-collapse">
                            <thead className="sticky top-0 bg-slate-900/95 backdrop-blur shadow-sm z-10">
                                <tr>
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-white/5 w-[40%]">
                                        Parameter
                                    </th>
                                    <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-white/5">
                                        Specification
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {COMPONENT_BREAKDOWN.map((item, index) => (
                                    <tr key={index} className="group hover:bg-green-500/5 transition-colors duration-200">
                                        <td className="px-6 py-3.5 align-middle">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-green-500 transition-colors duration-300"></div>
                                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-wide">
                                                    {item.component}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3.5 align-middle">
                                            <div className="flex items-center gap-2">
                                                <Beaker size={14} className="text-slate-600 group-hover:text-green-500 transition-colors" />
                                                <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors font-mono">
                                                    {item.materials}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        case "Performance":
             const performanceCards = [
                { label: "SOH", value: BATTERY_DATA.soh, icon: Activity, bg: "bg-green-50", text: "text-green-600" },
                { label: "SOC", value: BATTERY_DATA.soc, icon: Battery, bg: "bg-blue-50", text: "text-blue-600" },
                { label: "Cycle Count", value: BATTERY_DATA.cycles, icon: RefreshCw, bg: "bg-amber-50", text: "text-amber-600" },
                { label: "Pack Voltage", value: BATTERY_DATA.currentVoltage, icon: Zap, bg: "bg-purple-50", text: "text-purple-600" },
                { label: "Avg. Temp", value: BATTERY_DATA.avgTemp, icon: Thermometer, bg: "bg-red-50", text: "text-red-600" },
                { label: "Distance", value: BATTERY_DATA.distance, icon: Gauge, bg: "bg-indigo-50", text: "text-indigo-600" },
             ];

             return (
                <div className="flex flex-col h-full bg-transparent rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/5 bg-white/3 backdrop-blur-sm flex items-center justify-between shrink-0 h-[64px]">
                        <div>
                            <h3 className="font-extrabold text-slate-200 flex items-center gap-2 text-xl tracking-tight">
                                <Activity size={22} className="text-green-500" />
                                Real-time Performance
                            </h3>
                            <p className="text-[10px] text-slate-500 pl-8 mt-0.5 font-medium">Live telemetry from BMS</p>
                        </div>
                         <div className="flex items-center gap-2">
                             <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                             </span>
                             <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">Live Stream</span>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {performanceCards.map((item, index) => (
                                <div key={index} className="bg-white/5 border border-white/8 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/8 hover:border-white/15 transition-all group">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${item.bg} ${item.text} group-hover:scale-105 transition-transform`}>
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                                        <div className="text-3xl font-extrabold text-slate-100 font-mono tracking-tight leading-none">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
             );
        case "Lifecycle":
            const activeStepIndex = LIFECYCLE_STEPS.findIndex(s => s.status === 'active');
            const progressPercent = (activeStepIndex / (LIFECYCLE_STEPS.length - 1)) * 100;
            
            return (
                <div className="flex flex-col h-full bg-transparent rounded-xl overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/5 bg-white/3 backdrop-blur-md flex items-center justify-between shrink-0 h-[64px] relative z-10">
                        <div>
                            <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
                                <RefreshCw size={18} className="text-green-500" />
                                Lifecycle Tracking
                            </h3>
                            <p className="text-[10px] text-slate-500 pl-6.5 mt-0.5 font-medium">Chain of custody & state verification</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                In Service
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
                        <div className="w-full max-w-3xl relative pt-12 pb-8">
                            
                            {/* Base Track */}
                            <div className="absolute top-1/2 left-0 w-full h-1.5 bg-slate-100 rounded-full -translate-y-1/2 z-0"></div>
                            
                            {/* Active Progress Line */}
                            <div 
                                className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full -translate-y-1/2 transition-all duration-1000 ease-out z-0 shadow-sm"
                                style={{ width: `${progressPercent}%` }}
                            >
                                {/* Moving Pointer Container */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                                    <div className="relative">
                                         {/* The Rickshaw Card - Floating Above */}
                                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl border border-green-100 shadow-xl text-[#004D40] transform hover:scale-110 transition-transform duration-300">
                                            <ERickshawIcon className="w-8 h-8 drop-shadow-sm" />
                                            {/* Small triangle arrow pointing down */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-green-100 rotate-45"></div>
                                         </div>

                                         {/* Connection Point on Line */}
                                         <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md relative z-10"></div>
                                         
                                         {/* Pulse Effect */}
                                         <div className="absolute top-0 left-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-60"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Milestones */}
                            <div className="relative flex justify-between w-full z-10">
                                {LIFECYCLE_STEPS.map((step, index) => {
                                    const isActive = step.status === 'active';
                                    const isCompleted = step.status === 'completed';
                                    
                                    return (
                                        <div key={step.id} className="flex flex-col items-center group relative w-24">
                                            {/* Node Circle - Simplified */}
                                            <div className={`
                                                w-4 h-4 rounded-full transition-all duration-300 z-10 mt-[10px] /* Aligns with track center (approx) */
                                                ${isCompleted 
                                                    ? 'bg-green-600 ring-4 ring-green-50' 
                                                    : isActive 
                                                        ? 'bg-white ring-4 ring-green-200 border-2 border-green-500' /* Active node is simple, pointer does the talking */
                                                        : 'bg-white border-2 border-slate-200'
                                                }
                                            `}></div>
                                            
                                            {/* Labels */}
                                            <div className="mt-8 text-center transition-all duration-300 flex flex-col items-center">
                                                <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-[#004D40]' : isCompleted ? 'text-slate-600' : 'text-slate-400'}`}>
                                                    {step.label}
                                                </span>
                                                <span className={`text-[10px] font-medium ${isActive ? 'text-green-600' : 'text-slate-400'}`}>
                                                    {step.date}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="w-full h-full p-6 flex items-center justify-center border-2 border-dashed border-slate-100 rounded-xl">
                    <span className="text-slate-300 font-bold uppercase tracking-widest text-sm">
                        {activeTab} Details
                    </span>
                </div>
            );
    }
  };

  // --- RENDERER: BOTTOM PANEL CONTENT ---
  const renderBottomPanel = () => {
    switch (activeTab) {
        case "Material Comp.":
            return (
                <div className="flex w-full h-full">
                    {/* LEFT: Table (40%) */}
                    <div className="w-[45%] border-r border-white/5 flex flex-col h-full bg-transparent z-10 relative">
                        <div className="px-5 py-3 border-b border-white/5 bg-white/3 shrink-0 h-[50px] flex items-center justify-between">
                            <h3 className="text-xs font-bold text-slate-400 flex items-center gap-2">
                                <Database size={14} className="text-slate-500" />
                                Mass Distribution
                            </h3>
                            <button className="text-slate-600 hover:text-slate-400 transition-colors">
                                <Info size={14} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                             <table className="w-full">
                                <tbody>
                                    {MATERIAL_DATA.map((item, idx) => (
                                        <tr key={idx} className="border-b border-white/5 last:border-0 group hover:bg-white/5 transition-colors">
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/8 group-hover:border-white/15 transition-colors shrink-0">
                                                         <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.fill }}></div>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="text-xs font-bold text-slate-400 truncate">{item.name}</div>
                                                        <div className="text-[9px] text-slate-600 font-medium uppercase tracking-wide">Weight %</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5 text-right w-[100px]">
                                                <div className="text-xs font-bold text-slate-300 font-mono mb-1.5">{item.value}%</div>
                                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full rounded-full transition-all duration-1000 ease-out" 
                                                        style={{ width: `${item.value}%`, backgroundColor: item.fill }}
                                                    ></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                             </table>
                        </div>
                    </div>

                    {/* RIGHT: Chart (60%) */}
                    <div className="flex-1 flex flex-col relative bg-transparent h-full overflow-hidden">

                        {/* Legend Overlay - Top Right */}
                        <div className="absolute top-4 right-4 z-10 pointer-events-none">
                             <div className="bg-slate-900/80 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
                                <Atom size={14} className="text-green-400"/>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                                    Chemistry: <span className="text-slate-200">LFP-2026</span>
                                </span>
                             </div>
                        </div>

                        <div className="flex-1 w-full h-full relative">
                            {/* Center Text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-0">
                                <div className="text-[10px] uppercase font-bold text-slate-500 mb-0.5 tracking-widest">Total Mass</div>
                                <div className="text-3xl font-bold text-slate-200 tracking-tighter">45.5<span className="text-sm text-slate-400 font-medium ml-1">kg</span></div>
                            </div>

                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={MATERIAL_DATA}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={85}
                                        outerRadius={115}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                        cornerRadius={4}
                                        startAngle={90}
                                        endAngle={-270}
                                        animationBegin={200}
                                        animationDuration={1500}
                                    >
                                        {MATERIAL_DATA.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={entry.fill} 
                                                strokeWidth={0} 
                                                className="hover:opacity-80 transition-opacity cursor-pointer"
                                            />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            );
        case "Performance":
             const graphConfig: Record<string, { color: string, key: string, unit: string }> = {
                 'SOH': { color: '#10B981', key: 'soh', unit: '%' },
                 'Voltage': { color: '#8B5CF6', key: 'voltage', unit: 'V' },
                 'Distance': { color: '#3B82F6', key: 'distance', unit: 'km' },
                 'Temp': { color: '#EF4444', key: 'temp', unit: '°C' }
             };
             
             const activeConfig = graphConfig[selectedMetric] || graphConfig['SOH'];

             return (
                 <div className="w-full h-full flex flex-col bg-transparent p-6">
                     {/* Top Horizontal Cards */}
                     <div className="grid grid-cols-4 gap-4 mb-6 shrink-0">
                         {['SOH', 'Voltage', 'Distance', 'Temp'].map((metric) => {
                             const isSelected = selectedMetric === metric;
                             return (
                                 <button
                                     key={metric}
                                     onClick={() => setSelectedMetric(metric)}
                                     className={`
                                        flex flex-col items-start p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group
                                        ${isSelected 
                                            ? 'bg-green-600 border-green-600 text-white shadow-lg' 
                                            : 'bg-white/5 border-white/8 text-slate-400 hover:border-white/15 hover:bg-white/8'
                                        }
                                     `}
                                 >
                                     <div className="flex items-center justify-between w-full mb-2">
                                         <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-green-200' : 'text-slate-500'}`}>
                                            {metric === 'Temp' ? 'Temperature' : metric}
                                         </span>
                                         {isSelected && <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>}
                                     </div>
                                     <div className={`text-xl font-bold font-mono ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                                         {metric === 'SOH' ? BATTERY_DATA.soh : 
                                          metric === 'Voltage' ? BATTERY_DATA.currentVoltage : 
                                          metric === 'Distance' ? BATTERY_DATA.distance : 
                                          BATTERY_DATA.avgTemp}
                                     </div>
                                 </button>
                             );
                         })}
                     </div>

                     {/* Dynamic Graph Area */}
                     <div className="flex-1 bg-white/5 rounded-xl border border-white/8 p-6 flex flex-col relative overflow-hidden">
                         <div className="flex items-center gap-3 mb-6 shrink-0 z-10">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
                                <TrendingUp size={18} style={{ color: activeConfig.color }} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    {selectedMetric} Analysis
                                    <span className="text-slate-600">/</span>
                                    <span className="text-slate-500">Cycles</span>
                                </div>
                                <div className="text-[10px] text-slate-600 font-medium mt-0.5">Historical trend analysis over lifecycle</div>
                            </div>
                         </div>
                         
                         <div className="flex-1 w-full min-h-0">
                             <ResponsiveContainer width="100%" height="100%">
                                 <AreaChart data={PERFORMANCE_HISTORY} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={activeConfig.color} stopOpacity={0.4}/>
                                            <stop offset="95%" stopColor={activeConfig.color} stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis 
                                        dataKey="cycle" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{fontSize: 10, fill: '#475569'}}
                                        tickMargin={10}
                                    />
                                    <YAxis 
                                        hide={false}
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{fontSize: 10, fill: '#475569'}}
                                        domain={['auto', 'auto']}
                                    />
                                    <RechartsTooltip content={<CustomAreaTooltip />} />
                                    <Area 
                                        type="monotone" 
                                        dataKey={activeConfig.key} 
                                        stroke={activeConfig.color} 
                                        strokeWidth={3}
                                        fillOpacity={1} 
                                        fill="url(#colorMetric)" 
                                        animationDuration={1000}
                                    />
                                 </AreaChart>
                             </ResponsiveContainer>
                         </div>
                     </div>
                 </div>
             );
        case "Lifecycle":
            return (
                 <div className="w-full h-full flex flex-col bg-transparent p-6">
                     <div className="flex items-center justify-between mb-6 shrink-0">
                        <div className="flex items-center gap-3">
                             <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                                 <DollarSign size={18} className="text-green-400" />
                             </div>
                             <div>
                                 <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide">Estimated Residual Value</h4>
                                 <p className="text-[10px] text-slate-500 font-medium mt-0.5">Asset value depreciation projection</p>
                             </div>
                        </div>
                        <div className="bg-white/5 border border-white/8 rounded-lg px-3 py-1.5 flex items-center gap-2">
                            <Calendar size={14} className="text-slate-500"/>
                             <span className="text-xs font-bold text-slate-400">
                                Current Value: <span className="text-green-400">88%</span>
                             </span>
                        </div>
                     </div>

                     <div className="flex-1 bg-white/5 rounded-xl border border-white/8 p-6 relative overflow-hidden">
                         <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={RESIDUAL_VALUE_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis 
                                    dataKey="year" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fontSize: 10, fill: '#475569'}}
                                    tickMargin={10}
                                />
                                <YAxis 
                                    hide={false}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{fontSize: 10, fill: '#475569'}}
                                    domain={[0, 100]}
                                    unit="%"
                                />
                                <RechartsTooltip content={<CustomAreaTooltip />} />
                                <Area 
                                    type="monotone" 
                                    dataKey="value" 
                                    stroke="#10B981" 
                                    strokeWidth={3}
                                    fillOpacity={1} 
                                    fill="url(#colorValue)" 
                                    animationDuration={1500}
                                />
                             </AreaChart>
                         </ResponsiveContainer>
                     </div>
                 </div>
            );
        default:
            return (
                 <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-white/8 rounded-xl m-0">
                     <span className="text-slate-600 font-bold uppercase tracking-widest text-sm">
                        {activeTab} Analysis
                     </span>
                 </div>
            );
    }
  };

  return (
    <div className="mt-8 mb-6 font-sans animate-fade-in-up">
      
      {/* 
        TOP SECTION - STRICT FIXED HEIGHT
        Height: 400px (Desktop)
        Includes: Sidebar & Right Panel
      */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 md:h-[400px]">
        
        {/* LEFT SIDEBAR - Fixed Width, Full Height of Container */}
        <div className="w-full md:w-[280px] shrink-0 h-[400px] md:h-full relative flex flex-col">
             {/* Top Decorative Handle */}
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-green-500/10 border-t-2 border-l-2 border-r-2 border-green-500/40 rounded-t-md z-0"></div>
             
             {/* Navigation Container */}
             <div className="bg-slate-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl shadow-lg z-10 flex flex-col h-full overflow-hidden py-4 justify-evenly">
                {tabs.map((tab) => {
                    const isActive = isUnlocked && activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => isUnlocked && setActiveTab(tab)}
                            disabled={!isUnlocked}
                            className={`
                                group relative flex items-center justify-between px-6 py-3 w-full text-left transition-all
                                ${isActive 
                                    ? 'bg-green-600 text-white shadow-md mx-auto w-[90%] rounded-lg scale-105' 
                                    : 'bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'
                                }
                                ${!isUnlocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                            `}
                        >
                            <span className={`text-sm font-bold tracking-tight ${isActive ? 'text-white' : ''}`}>
                                {tab}
                            </span>
                            
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all
                                ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-green-500'}
                            `}>
                                {!isUnlocked ? (
                                    <Lock size={12} />
                                ) : isActive ? (
                                    <ChevronRight size={14} />
                                ) : (
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
                                )}
                            </div>
                        </button>
                    );
                })}
             </div>
        </div>

        {/* RIGHT PANEL - STRICT FIXED HEIGHT (Matches Container) */}
        {/* 'overflow-hidden' on parent ensures the child scrollbar is contained */}
        <div className="flex-1 bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl relative h-[400px] md:h-full overflow-hidden">
            {!isUnlocked ? (
                // --- LOCKED STATE ---
                <div className="absolute inset-0 bg-gradient-to-br from-[#004D40] to-slate-900 rounded-xl flex flex-col items-center justify-center text-center p-6 overflow-hidden">
                     <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                     
                     <div className="relative z-10 flex flex-col items-center">
                         <div className="bg-slate-800/80 p-3 rounded-full mb-3 border border-slate-700 shadow-xl">
                             <Lock size={24} className="text-green-400" />
                         </div>
                         <h3 className="text-lg font-bold text-white mb-1">Restricted Access</h3>
                         <p className="text-slate-300 text-xs mb-4 max-w-xs">Detailed material breakdowns and compliance logs are locked.</p>
                         <button 
                            onClick={onLogin}
                            className="bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition-all shadow-lg"
                         >
                            <LogIn size={16} /> Login to View
                         </button>
                     </div>
                </div>
            ) : (
                // --- UNLOCKED STATE ---
                // The content renderer handles inner scrolling
                renderRightPanel()
            )}
        </div>
      </div>

      {/* BOTTOM SECTION - DYNAMIC HEIGHT */}
      <div className={`w-full ${getBottomPanelHeight()} bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl relative overflow-hidden transition-all duration-500 ease-in-out`}>
          {!isUnlocked ? (
             // --- LOCKED STATE ---
             <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="flex items-center gap-2 text-slate-500 font-medium bg-slate-900/80 px-4 py-2 rounded-full border border-white/10">
                      <Lock size={16} /> Advanced Metrics Locked
                  </div>
             </div>
          ) : (
             // --- UNLOCKED STATE ---
             renderBottomPanel()
          )}
      </div>

    </div>
  );
};

export default LoginGate;