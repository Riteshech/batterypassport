import React from 'react';
import { QrCode, Fingerprint } from 'lucide-react';
import { BatteryData } from '../types';

interface DashboardHeaderProps {
  data: BatteryData;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ data }) => {
  return (
    <div className="relative rounded-xl overflow-hidden mb-6 shadow-md">
        {/* New Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        
        {/* Decorative Abstract Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
        
        {/* QR Code Placeholder */}
        <div className="shrink-0 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
          <div className="w-[120px] h-[120px] bg-slate-50 rounded flex flex-col items-center justify-center text-slate-400 border border-dashed border-slate-300">
            <QrCode size={48} className="opacity-50" />
            <span className="text-[10px] mt-2 font-medium">SCAN TO VERIFY</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Battery Passport v2.0</h2>
                    <p className="text-slate-500 font-medium mt-1">
                        BPAN: <span className="font-mono text-slate-700 font-bold bg-slate-100 px-2 py-0.5 rounded">{data.bpan}</span>
                    </p>
                </div>
                {/* Status Badge */}
                <div className="mt-4 md:mt-0 inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-green-200 rounded-full text-green-700 shadow-sm self-center md:self-auto">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wide">{data.status}</span>
                </div>
            </div>

            {/* Primary Details Table */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm shadow-sm mb-3">
                
                {/* 1. Manufacturer */}
                <div className="flex flex-col sm:border-r border-slate-200/60 pr-2">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Manufacturer</span>
                    <span className="text-slate-800 font-semibold">{data.manufacturer}</span>
                </div>

                {/* 2. Used By */}
                <div className="flex flex-col sm:border-r border-slate-200/60 px-2">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Used By</span>
                    <span className="text-slate-800 font-semibold">{data.operatedBy}</span>
                </div>

                {/* 3. Model */}
                <div className="flex flex-col pl-2">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Model</span>
                    <span className="text-slate-800 font-semibold">{data.modelName}</span>
                </div>
            </div>

             {/* SN Row */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 <div className="bg-green-50/50 border border-green-100 rounded px-3 py-2 flex items-center justify-between">
                     <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider flex items-center gap-1">
                        <Fingerprint size={12} /> Chargeup SN
                     </span>
                     <span className="font-mono font-bold text-slate-800 text-sm">{data.serialNumber}</span>
                 </div>
                 <div className="bg-blue-50/50 border border-blue-100 rounded px-3 py-2 flex items-center justify-between">
                     <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1">
                        <Fingerprint size={12} /> Mfg SN
                     </span>
                     <span className="font-mono font-bold text-slate-800 text-sm">{data.manufacturerSerial}</span>
                 </div>
             </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;