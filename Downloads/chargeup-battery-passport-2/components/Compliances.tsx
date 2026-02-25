import React from 'react';
import { ShieldCheck, Shield, FileCheck, Award } from 'lucide-react';
import { BatteryData } from '../types';

interface CompliancesProps {
  data: BatteryData;
}

// Using similar styling to TechnicalSpecs/PhysicalSpecs for consistency
const ComplianceItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col p-4 border-b border-slate-100 last:border-0 sm:border-b-0 sm:border-r last:border-r-0">
    <div className="flex items-center gap-2 mb-2 text-slate-400">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-lg font-bold text-slate-900 font-mono">{value}</span>
  </div>
);

const Compliances: React.FC<CompliancesProps> = ({ data }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <ShieldCheck size={18} className="text-green-600" />
            Compliances
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <ComplianceItem 
            icon={<Shield size={14} className="text-slate-500"/>} 
            label="IP Rating" 
            value={data.ipRating}
        />
        <ComplianceItem 
            icon={<FileCheck size={14} className="text-slate-500"/>} 
            label="Fix Class" 
            value={data.fixClass} 
        />
        <ComplianceItem 
            icon={<Award size={14} className="text-[#004D40]"/>} 
            label="Certified To" 
            value={data.certifiedTo}
        />
      </div>
    </div>
  );
};

export default Compliances;