import React from 'react';
import { ShieldCheck, Shield, FileCheck, Award } from 'lucide-react';
import { BatteryData } from '../types';

interface CompliancesProps {
  data: BatteryData;
}

const ComplianceItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col p-5 border-b border-white/5 last:border-0 sm:border-b-0 sm:border-r last:border-r-0">
    <div className="flex items-center gap-2 mb-2 text-slate-500">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-lg font-bold text-slate-100 font-mono">{value}</span>
  </div>
);

const Compliances: React.FC<CompliancesProps> = ({ data }) => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl mb-5 overflow-hidden hover:border-white/12 transition-all">
      <div className="px-6 py-4 border-b border-white/5 bg-white/3">
        <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
            <ShieldCheck size={16} className="text-green-500" />
            Compliances
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <ComplianceItem
            icon={<Shield size={13} className="text-slate-500" />}
            label="IP Rating"
            value={data.ipRating}
        />
        <ComplianceItem
            icon={<FileCheck size={13} className="text-slate-500" />}
            label="Fix Class"
            value={data.fixClass}
        />
        <ComplianceItem
            icon={<Award size={13} className="text-green-500" />}
            label="Certified To"
            value={data.certifiedTo}
        />
      </div>
    </div>
  );
};

export default Compliances;
