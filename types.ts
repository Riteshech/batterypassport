export interface BatteryData {
  bpan: string;
  serialNumber: string; // Chargeup SN
  manufacturerSerial: string; // New: Manufacturer SN
  modelName: string;
  manufacturer: string;
  operatedBy: string;
  mfgDate: string;
  mfgLocation: string;
  rating: string;
  capacity: string;
  chemistry: string;
  cellType: string;
  config: string;
  cellCount: string;
  dimensions: string;
  weight: string;
  casing: string;
  ipRating: string;
  status: string;
  carbonFootprint: number;
  // New BMS/IoT Fields
  bmsFirmware: string;
  bmsManufacturer: string;
  bmsRating: string;
  iotModule: string;
  iotStatus: string;
  lastData: string;
  // New Technical & Compliance Fields
  fixClass: string;
  certifiedTo: string;
  cellNominalVoltage: string;
  packNominalVoltage: string;
  nominalCapacity: string;
  dod: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill: string;
}

export interface LifecycleStep {
  id: number;
  label: string;
  date: string;
  status: string;
}