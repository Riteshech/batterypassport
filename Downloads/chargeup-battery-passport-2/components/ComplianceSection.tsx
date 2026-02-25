import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CheckCircle, Circle, Leaf, RefreshCw } from 'lucide-react';
import { MATERIAL_DATA, CARBON_DATA, LIFECYCLE_STEPS } from '../constants';
import { BatteryData } from '../types';

interface ComplianceSectionProps {
    data: BatteryData;
}

const ComplianceSection: React.FC<ComplianceSectionProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Compliance & Lifecycle</h3>
        <div className="h-px flex-1 bg-slate-200"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Material Composition Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <RefreshCw size={20} className="text-slate-500" />
            Material Composition
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-full sm:w-1/2 text-sm">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-100 text-left text-xs text-slate-400">
                            <th className="pb-2 font-medium">Component</th>
                            <th className="pb-2 font-medium text-right">Weight %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MATERIAL_DATA.map((item) => (
                            <tr key={item.name} className="border-b border-slate-50 last:border-0">
                                <td className="py-2 text-slate-600 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }}></span>
                                    {item.name}
                                </td>
                                <td className="py-2 text-right font-medium text-slate-900">{item.value}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full sm:w-1/2 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={MATERIAL_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {MATERIAL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center text-xs text-slate-400 font-medium">Material Distribution</div>
            </div>
          </div>
        </div>

        {/* Carbon Footprint Card */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Leaf size={20} className="text-green-600" />
            Battery Carbon Footprint
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="w-full sm:w-5/12">
                <div className="text-4xl font-extrabold text-slate-900 mb-1">
                    {data.carbonFootprint}
                    <span className="text-base font-normal text-slate-500 ml-1">kgCO₂e/kWh</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mt-2">
                    <CheckCircle size={12} />
                    17% below industry avg
                </div>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Calculation based on cradle-to-gate lifecycle assessment following ISO 14067 standards.
                </p>
            </div>
            <div className="w-full sm:w-7/12 h-48 relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={CARBON_DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={45}
                            outerRadius={65}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="none"
                        >
                            {CARBON_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Legend 
                             layout="vertical" 
                             verticalAlign="middle" 
                             align="right"
                             iconType="circle"
                             iconSize={8}
                             wrapperStyle={{ fontSize: '11px', color: '#64748b' }}
                        />
                         <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                         />
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Text for Donut */}
                <div className="absolute top-1/2 left-[35%] sm:left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                     <span className="text-[10px] uppercase text-slate-400 font-bold">Total</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Timeline */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-8">Lifecycle Timeline</h4>
        <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-4 left-0 w-full h-1 bg-slate-100 rounded-full -z-0">
                <div className="h-full bg-green-500 rounded-full w-[35%]"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {LIFECYCLE_STEPS.map((step, index) => {
                    const isCompleted = step.status === 'completed';
                    const isActive = step.status === 'active';
                    
                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center border-4 ${
                                isCompleted ? 'bg-green-600 border-green-100 text-white' : 
                                isActive ? 'bg-white border-green-500 text-green-600' : 
                                'bg-white border-slate-200 text-slate-300'
                            } transition-colors duration-300`}>
                                {isCompleted ? <CheckCircle size={16} /> : isActive ? <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> : <Circle size={16} />}
                            </div>
                            <div className="mt-3">
                                <div className={`text-sm font-bold ${isActive || isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>
                                    {step.label}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">{step.date}</div>
                                {isActive && (
                                    <div className="mt-1 inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase">
                                        Current Stage
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;