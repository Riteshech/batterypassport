import React from 'react';
import { Wifi, Activity, HardDrive } from 'lucide-react';
import { BatteryData } from '../types';

interface BmsDetailsProps {
  data: BatteryData;
}

const BmsDetails: React.FC<BmsDetailsProps> = ({ data }) => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-white/8 rounded-xl mb-5 overflow-hidden hover:border-white/12 transition-all">
      <div className="px-6 py-4 border-b border-white/5 bg-white/3">
        <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
            <Activity size={16} className="text-slate-500" />
            BMS & IoT Details
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">

        <div className="p-5 flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">BMS Make</span>
            <span className="font-semibold text-slate-200 truncate">{data.bmsManufacturer}</span>
        </div>

        <div className="p-5 flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">IoT Module</span>
            <span className="font-semibold text-slate-200 flex items-center gap-2">
                <HardDrive size={13} className="text-slate-500" />
                {data.iotModule}
            </span>
        </div>

        <div className="p-5 flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Link Status</span>
            <span className="font-semibold text-green-400 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {data.iotStatus}
            </span>
        </div>

        <div className="p-5 flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Last Sync</span>
            <span className="font-semibold text-slate-200 font-mono text-sm flex items-center gap-2">
                <Wifi size={13} className="text-slate-500" />
                {data.lastData}
            </span>
        </div>

      </div>
    </div>
  );
};

export default BmsDetails;
