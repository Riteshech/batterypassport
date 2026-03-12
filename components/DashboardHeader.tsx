import React from 'react';
import { QrCode, Fingerprint } from 'lucide-react';
import { BatteryData } from '../types';

interface DashboardHeaderProps {
  data: BatteryData;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ data }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-5 border border-white/8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">

        {/* QR Code */}
        <div className="shrink-0 bg-white/5 p-2 rounded-xl border border-white/10 backdrop-blur-sm">
          <div className="w-[120px] h-[120px] bg-slate-950/50 rounded-lg flex flex-col items-center justify-center text-slate-600 border border-dashed border-white/10">
            <QrCode size={44} className="opacity-40" />
            <span className="text-[10px] mt-2 font-bold text-slate-500 tracking-wider">SCAN TO VERIFY</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">Battery Passport v2.0</h2>
                    <p className="text-slate-500 font-medium mt-1 text-sm">
                        BPAN: <span className="font-mono text-slate-300 font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded">{data.bpan}</span>
                    </p>
                </div>
                {/* Status Badge */}
                <div className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 self-center md:self-auto">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wide">{data.status}</span>
                </div>
            </div>

            {/* Primary Details */}
            <div className="bg-white/5 backdrop-blur-md border border-white/8 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-3">
                <div className="flex flex-col sm:border-r border-white/8 pr-2">
                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Manufacturer</span>
                    <span className="text-slate-200 font-semibold">{data.manufacturer}</span>
                </div>
                <div className="flex flex-col sm:border-r border-white/8 px-2">
                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Used By</span>
                    <span className="text-slate-200 font-semibold">{data.operatedBy}</span>
                </div>
                <div className="flex flex-col pl-2">
                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Model</span>
                    <span className="text-slate-200 font-semibold">{data.modelName}</span>
                </div>
            </div>

             {/* SN Row */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 <div className="bg-green-500/8 border border-green-500/20 rounded-lg px-3 py-2 flex items-center justify-between">
                     <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider flex items-center gap-1">
                        <Fingerprint size={11} /> Chargeup SN
                     </span>
                     <span className="font-mono font-bold text-slate-200 text-sm">{data.serialNumber}</span>
                 </div>
                 <div className="bg-blue-500/8 border border-blue-500/20 rounded-lg px-3 py-2 flex items-center justify-between">
                     <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1">
                        <Fingerprint size={11} /> Mfg SN
                     </span>
                     <span className="font-mono font-bold text-slate-200 text-sm">{data.manufacturerSerial}</span>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
