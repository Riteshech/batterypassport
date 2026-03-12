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
  colorClass: string;
}> = ({ icon, label, value, subtext, colorClass }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
    <div className={`p-3 rounded-lg ${colorClass} shrink-0`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{label}</h3>
      <div className="text-lg font-bold text-slate-900 leading-tight">{value}</div>
      <div className="text-sm text-slate-500 mt-1">{subtext}</div>
    </div>
  </div>
);

const SpecsGrid: React.FC<SpecsGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <SpecTile
        icon={<Calendar size={24} className="text-blue-600" />}
        label="MFG Date"
        value={data.mfgDate}
        subtext={data.mfgLocation}
        colorClass="bg-blue-50"
      />
      <SpecTile
        icon={<Zap size={24} className="text-amber-600" />}
        label="Rating"
        value={data.rating}
        subtext={data.capacity}
        colorClass="bg-amber-50"
      />
      <SpecTile
        icon={<Battery size={24} className="text-green-600" />}
        label="Chemistry"
        value={data.chemistry}
        subtext={data.cellType}
        colorClass="bg-green-50"
      />
      <SpecTile
        icon={<Grid3X3 size={24} className="text-indigo-600" />}
        label="Config"
        value={data.config}
        subtext={data.cellCount}
        colorClass="bg-indigo-50"
      />
    </div>
  );
};

export default SpecsGrid;