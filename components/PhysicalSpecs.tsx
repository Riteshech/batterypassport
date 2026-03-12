import React from 'react';
import { Box, Ruler, Scale } from 'lucide-react';
import { BatteryData } from '../types';

interface PhysicalSpecsProps {
  data: BatteryData;
}

const SpecItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col items-start p-5 sm:border-r border-white/5 last:border-0">
    <div className="flex items-center gap-2 mb-2 text-slate-500">
      {icon}
      <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
    </div>
    <span className="text-slate-200 font-semibold">{value}</span>
  </div>
);

const PhysicalSpecs: React.FC<PhysicalSpecsProps> = ({ data }) => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl mb-5 overflow-hidden hover:border-white/12 transition-all">
      <div className="px-6 py-4 border-b border-white/5 bg-white/3">
        <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
            <Box size={16} className="text-slate-500" />
            Enclosure
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-0">
        <SpecItem
            icon={<Ruler size={13} />}
            label="Dimensions (LxWxH)"
            value={data.dimensions}
        />
        <SpecItem
            icon={<Scale size={13} />}
            label="Weight"
            value={data.weight}
        />
        <SpecItem
            icon={<Box size={13} />}
            label="Casing Material"
            value={data.casing}
        />
      </div>
    </div>
  );
};

export default PhysicalSpecs;
