import React from 'react';
import { Settings, Zap, BatteryCharging, Maximize2 } from 'lucide-react';
import { BatteryData } from '../types';

interface TechnicalSpecsProps {
  data: BatteryData;
}

const TechItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col p-5 border-b border-white/5 last:border-0 sm:border-b-0 sm:border-r last:border-r-0">
    <div className="flex items-center gap-2 mb-2 text-slate-500">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-lg font-bold text-slate-100 font-mono">{value}</span>
  </div>
);

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ data }) => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl mb-5 overflow-hidden hover:border-white/12 transition-all">
      <div className="px-6 py-4 border-b border-white/5 bg-white/3">
        <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
            <Settings size={16} className="text-slate-500" />
            Technical Specifications
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <TechItem
            icon={<Zap size={13} className="text-amber-400" />}
            label="Cell Nom. Voltage"
            value={data.cellNominalVoltage}
        />
        <TechItem
            icon={<Zap size={13} className="text-amber-500" />}
            label="Pack Nom. Voltage"
            value={data.packNominalVoltage}
        />
        <TechItem
            icon={<BatteryCharging size={13} className="text-green-400" />}
            label="Nominal Capacity"
            value={data.nominalCapacity}
        />
        <TechItem
            icon={<Maximize2 size={13} className="text-blue-400" />}
            label="Depth of Discharge"
            value={data.dod}
        />
      </div>
    </div>
  );
};

export default TechnicalSpecs;
