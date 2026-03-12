import React from 'react';
import { Settings, Zap, BatteryCharging, Maximize2 } from 'lucide-react';
import { BatteryData } from '../types';

interface TechnicalSpecsProps {
  data: BatteryData;
}

const TechItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col p-4 border-b border-slate-100 last:border-0 sm:border-b-0 sm:border-r last:border-r-0">
    <div className="flex items-center gap-2 mb-2 text-slate-400">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-lg font-bold text-slate-800 font-mono">{value}</span>
  </div>
);

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ data }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Settings size={18} className="text-slate-500" />
            Technical Specifications
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <TechItem 
            icon={<Zap size={14} className="text-amber-500" />} 
            label="Cell Nom. Voltage" 
            value={data.cellNominalVoltage} 
        />
        <TechItem 
            icon={<Zap size={14} className="text-amber-600" />} 
            label="Pack Nom. Voltage" 
            value={data.packNominalVoltage} 
        />
        <TechItem 
            icon={<BatteryCharging size={14} className="text-green-500" />} 
            label="Nominal Capacity" 
            value={data.nominalCapacity} 
        />
        <TechItem 
            icon={<Maximize2 size={14} className="text-blue-500" />} 
            label="Depth of Discharge" 
            value={data.dod} 
        />
      </div>
    </div>
  );
};

export default TechnicalSpecs;