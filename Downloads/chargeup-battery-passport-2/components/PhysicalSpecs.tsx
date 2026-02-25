import React from 'react';
import { Box, Ruler, Scale } from 'lucide-react';
import { BatteryData } from '../types';

interface PhysicalSpecsProps {
  data: BatteryData;
}

const SpecItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col items-start p-4 sm:border-r border-slate-100 last:border-0">
    <div className="flex items-center gap-2 mb-2 text-slate-400">
      {icon}
      <span className="text-xs font-semibold uppercase">{label}</span>
    </div>
    <span className="text-slate-900 font-medium">{value}</span>
  </div>
);

const PhysicalSpecs: React.FC<PhysicalSpecsProps> = ({ data }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Box size={18} className="text-slate-500" />
            Enclosure
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0">
        <SpecItem 
            icon={<Ruler size={14} />} 
            label="Dimensions (LxWxH)" 
            value={data.dimensions} 
        />
        <SpecItem 
            icon={<Scale size={14} />} 
            label="Weight" 
            value={data.weight} 
        />
        <SpecItem 
            icon={<Box size={14} />} 
            label="Casing Material" 
            value={data.casing} 
        />
      </div>
    </div>
  );
};

export default PhysicalSpecs;