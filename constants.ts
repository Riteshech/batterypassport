
// Battery Basic Info
export const BATTERY_DATA = {
  bpan: "BPAN-2026-KA-12345678",
  serialNumber: "CU-2026-EV-00123",
  manufacturerSerial: "GF-26-01-9982A", // Greenfuel Specific SN
  modelName: "51.2V 100Ah LFP Battery (16S1P)",
  manufacturer: "Greenfuel Energy Solutions",
  operatedBy: "Chargeup Network",
  mfgDate: "15 Jan 2026",
  mfgLocation: "Bangalore, IN",
  rating: "51.2V 100Ah",
  capacity: "5.12 kWh",
  chemistry: "LFP (LiFePO₄)",
  cellType: "CATL Cells",
  config: "16S1P",
  cellCount: "16 Cells",
  dimensions: "442mm x 300mm x 132mm",
  weight: "45.5 kg",
  casing: "Steel", // Updated to match spec table
  ipRating: "IP67",
  status: "Active",
  carbonFootprint: 78.5,
  industryAverageCarbon: 94.2, 
  // BMS & IoT Data
  bmsFirmware: "v4.2.1-Stable",
  bmsManufacturer: "Daly BMS",
  bmsRating: "100A Continuous",
  iotModule: "Quectel EC20 (4G)",
  iotStatus: "Online",
  lastData: "2 mins ago",
  // New Technical & Compliance Data
  fixClass: "AIS-156 Phase 2",
  certifiedTo: "ARAI / ICAT",
  cellNominalVoltage: "3.2 V",
  packNominalVoltage: "51.2 V",
  nominalCapacity: "100 Ah",
  dod: "90%",
  // Performance Live Data
  soh: "98%",
  soc: "84%",
  cycles: "482",
  currentVoltage: "54.2 V",
  avgTemp: "28°C",
  distance: "14,205 km"
};

// Material Composition Data for Chart
// Based on Wt% provided: 49+24+3+6+13 = 95%. Remaining 5% allocated to Binder/Solvent/Sep/Casing.
export const MATERIAL_DATA = [
  { name: 'Cathode (LiFePO₄)', value: 49, fill: '#10B981' },        // Green-500
  { name: 'Anode (Graphite)', value: 24, fill: '#3B82F6' },         // Blue-500
  { name: 'Anode Collector (Cu)', value: 13, fill: '#F59E0B' },     // Amber-500
  { name: 'Cathode Collector (Al)', value: 6, fill: '#6366F1' },    // Indigo-500
  { name: 'Electrolyte Salt', value: 3, fill: '#8B5CF6' },          // Violet-500
  { name: 'Binder, Sep, Case', value: 5, fill: '#94A3B8' },         // Slate-400 (Remainder)
];

// Carbon Footprint Data for Chart
export const CARBON_DATA = [
  { name: 'Raw Material', value: 45, fill: '#22c55e' }, // green-500
  { name: 'Manufacturing', value: 32, fill: '#86efac' }, // green-300
  { name: 'Distribution', value: 8, fill: '#bbf7d0' },  // green-200
  { name: 'End-of-Life', value: 15, fill: '#15803d' },  // green-700
];

export const LIFECYCLE_STEPS = [
  { id: 1, label: "Mfg", fullLabel: "Manufacturing", date: "Jan 2026", status: "completed" },
  { id: 2, label: "1st Life", fullLabel: "EV Application", date: "Active", status: "active" },
  { id: 3, label: "2nd Life", fullLabel: "Energy Storage", date: "Est. 2030", status: "pending" },
  { id: 4, label: "Recycle", fullLabel: "End of Life", date: "Est. 2035", status: "pending" },
];

// Residual Value Data for Lifecycle Chart
export const RESIDUAL_VALUE_DATA = [
    { year: '2026', value: 100, label: 'Manufacturing' },
    { year: '2027', value: 88, label: 'First Life' },
    { year: '2028', value: 76, label: 'First Life' },
    { year: '2029', value: 65, label: 'First Life' },
    { year: '2030', value: 55, label: '2nd Life Prep' },
    { year: '2031', value: 48, label: 'Second Life' },
    { year: '2032', value: 42, label: 'Second Life' },
    { year: '2033', value: 35, label: 'Recycling' },
    { year: '2034', value: 10, label: 'Raw Material' },
];

// Performance History Data for Graphs
// X-Axis: Cycle Count
export const PERFORMANCE_HISTORY = [
    { cycle: 0, soh: 100, voltage: 52.5, distance: 0, temp: 24 },
    { cycle: 50, soh: 99.9, voltage: 52.6, distance: 1200, temp: 25 },
    { cycle: 120, soh: 99.6, voltage: 52.8, distance: 3500, temp: 29 },
    { cycle: 200, soh: 99.2, voltage: 53.1, distance: 6100, temp: 27 },
    { cycle: 280, soh: 98.9, voltage: 53.4, distance: 8900, temp: 31 },
    { cycle: 350, soh: 98.5, voltage: 53.7, distance: 11200, temp: 26 },
    { cycle: 420, soh: 98.2, voltage: 54.0, distance: 13000, temp: 32 },
    { cycle: 482, soh: 98.0, voltage: 54.2, distance: 14205, temp: 28 },
];
