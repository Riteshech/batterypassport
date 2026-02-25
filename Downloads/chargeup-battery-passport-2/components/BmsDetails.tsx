import React from 'react';
import { Wifi, Activity, HardDrive } from 'lucide-react';
import { BatteryData } from '../types';

interface BmsDetailsProps {
  data: BatteryData;
}

const BmsDetails: React.FC<BmsDetailsProps> = ({ data }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Activity size={18} className="text-slate-500" />
            BMS & IoT Details
        </h3>
      </div>
      {/* 
         Order:
         1. BMS Manufacturer
         2. IoT Module
         3. IoT Status
         4. Last Sync
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
        {/* 1. BMS Manufacturer */}
        <div className="p-4 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">BMS Make</span>
            <span className="font-medium text-slate-900 flex items-center gap-2 truncate">
                {data.bmsManufacturer}
            </span>
        </div>

        {/* 2. IoT Module */}
        <div className="p-4 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">IoT Module</span>
            <span className="font-medium text-slate-900 flex items-center gap-2">
                <HardDrive size={14} className="text-slate-400" />
                {data.iotModule}
            </span>
        </div>

        {/* 3. IoT Status */}
        <div className="p-4 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Link Status</span>
            <span className="font-medium text-green-600 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {data.iotStatus}
            </span>
        </div>

        {/* 4. Last Data */}
        <div className="p-4 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Last Sync</span>
            <span className="font-medium text-slate-900 font-mono text-sm flex items-center gap-2">
                <Wifi size={14} className="text-slate-400" />
                {data.lastData}
            </span>
        </div>

      </div>
    </div>
  );
};

export default BmsDetails;