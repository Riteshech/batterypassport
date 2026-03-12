import React from 'react';
import { Calendar, Zap, Battery, Grid3X3 } from 'lucide-react';
import { BatteryData } from '../types';

interface SpecsGridProps {
  data: BatteryData;
}

const SpecTile: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext: string;
  accent: string;
}> = ({ icon, label, value, subtext, accent }) => (
  <div className="bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl p-5 flex items-start gap-4 hover:border-white/15 transition-all hover:bg-slate-800/60 group">
    <div className={`p-3 rounded-xl ${accent} shrink-0 group-hover:scale-105 transition-transform`}>
      {icon}
    </div>
    <div>
      <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</h3>
      <div className="text-lg font-bold text-slate-100 leading-tight">{value}</div>
      <div className="text-sm text-slate-500 mt-1">{subtext}</div>
    </div>
  </div>
);

const SpecsGrid: React.FC<SpecsGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      <SpecTile
        icon={<Calendar size={22} className="text-blue-400" />}
        label="MFG Date"
        value={data.mfgDate}
        subtext={data.mfgLocation}
        accent="bg-blue-500/10"
      />
      <SpecTile
        icon={<Zap size={22} className="text-amber-400" />}
        label="Rating"
        value={data.rating}
        subtext={data.capacity}
        accent="bg-amber-500/10"
      />
      <SpecTile
        icon={<Battery size={22} className="text-green-400" />}
        label="Chemistry"
        value={data.chemistry}
        subtext={data.cellType}
        accent="bg-green-500/10"
      />
      <SpecTile
        icon={<Grid3X3 size={22} className="text-indigo-400" />}
        label="Config"
        value={data.config}
        subtext={data.cellCount}
        accent="bg-indigo-500/10"
      />
    </div>
  );
};

export default SpecsGrid;
