import React, { useState } from 'react';
import { ArrowLeft, Search, Battery, ChevronRight, MapPin } from 'lucide-react';

interface BatteryRegistryProps {
  onSelectBattery: (bpan: string) => void;
  onBack: () => void;
}

// Mock Data
const BATTERY_LIST = [
  { 
      id: 1, 
      bpan: "BPAN-2026-KA-12345678", 
      model: "51.2V 100Ah LFP", 
      mfg: "Greenfuel Energy", 
      status: "Active",
      location: "Bangalore, KA",
      lastSync: "2 mins ago"
  },
  { 
      id: 2, 
      bpan: "BPAN-2026-KA-87654321", 
      model: "51.2V 100Ah LFP", 
      mfg: "Greenfuel Energy", 
      status: "Active",
      location: "Indiranagar, KA",
      lastSync: "15 mins ago"
  },
  { 
      id: 3, 
      bpan: "BPAN-2025-DL-11223344", 
      model: "48V 80Ah NMC", 
      mfg: "Exicom Power", 
      status: "Maintenance",
      location: "Dwarka, DL",
      lastSync: "4 hours ago"
  },
  { 
      id: 4, 
      bpan: "BPAN-2025-MH-99887766", 
      model: "51.2V 120Ah LFP", 
      mfg: "Trontek", 
      status: "Recycling",
      location: "Pune, MH",
      lastSync: "Offline (3d)"
  },
  { 
      id: 5, 
      bpan: "BPAN-2026-UP-55667788", 
      model: "51.2V 100Ah LFP", 
      mfg: "Greenfuel Energy", 
      status: "Active",
      location: "Noida, UP",
      lastSync: "Just now"
  },
];

const BatteryRegistry: React.FC<BatteryRegistryProps> = ({ onSelectBattery, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBatteries = BATTERY_LIST.filter(b => 
    b.bpan.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.mfg.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      {/* Minimal Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium text-sm">Back</span>
          </button>
          <span className="font-semibold text-slate-700">Asset Registry</span>
          <div className="w-8"></div> {/* Spacer for balance */}
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        
        {/* Search Section */}
        <div className="mb-8 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search size={20} />
            </div>
            <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by BPAN ID or Manufacturer..."
                className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#004D40]/20 focus:border-[#004D40] transition-all outline-none text-base shadow-sm"
            />
        </div>

        {/* List */}
        <div className="space-y-4">
            {filteredBatteries.map((battery) => (
                <div 
                    key={battery.id}
                    onClick={() => onSelectBattery(battery.bpan)}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${battery.status === 'Active' ? 'bg-green-50 border-green-100 text-green-600' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                            <Battery size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 group-hover:text-[#004D40] transition-colors">{battery.bpan}</h3>
                            <div className="text-sm text-slate-500 mt-0.5">{battery.mfg} • {battery.model}</div>
                            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                                <MapPin size={10} /> {battery.location}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                         <div className="text-right hidden sm:block">
                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                battery.status === 'Active' ? 'bg-green-100 text-green-700' : 
                                battery.status === 'Maintenance' ? 'bg-amber-100 text-amber-700' : 
                                'bg-slate-100 text-slate-600'
                            }`}>
                                {battery.status === 'Active' && <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>}
                                {battery.status}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-1 font-medium">Synced {battery.lastSync}</div>
                         </div>
                         <ChevronRight size={20} className="text-slate-300 group-hover:text-[#004D40]" />
                    </div>
                </div>
            ))}

            {filteredBatteries.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                    <p>No assets found.</p>
                </div>
            )}
        </div>

      </main>
    </div>
  );
};

export default BatteryRegistry;