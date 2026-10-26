import React from 'react';
import { 
  Check, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck, 
  Package, 
  Truck, 
  Camera, 
  BarChart3, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { comparisonTableData, services } from '../data/logisticsData';

export default function ComparisonTable({ onRequestQuote }) {
  const qcService = services.find(s => s.id === 'quality-control-inspection');

  return (
    <div className="space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2">
          <span>Core Solutions & Operational Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading uppercase tracking-tight">
          Standard Transport vs. Ramsydex Value-Added
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          See why top importers, exporters, and industrial manufacturers partner with Ramsydex over commoditized freight forwarders.
        </p>
      </div>

      {/* Kuehne + Nagel Style Comparison Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Table Top Header Banner */}
        <div className="bg-dhl-black text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-dhl-yellow">
          <div>
            <span className="bg-dhl-red text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
              Service Benchmark Matrix
            </span>
            <h3 className="text-2xl font-black uppercase font-heading mt-2">
              Capabilities Comparison (Sample: Kuehne + Nagel)
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Standard transport vs. Ramsydex integrated supply chain and customs execution
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>Request Detailed Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* The Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-xs font-black uppercase tracking-wider">
                <th className="py-4 px-6 text-gray-500 w-1/3">Logistics Requirement</th>
                <th className="py-4 px-6 text-gray-400 w-1/3 bg-gray-100/70">Standard Freight Forwarder</th>
                <th className="py-4 px-6 text-dhl-red w-1/3 bg-yellow-50/80 border-l-2 border-r-2 border-dhl-yellow">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-dhl-red text-white p-1 rounded">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>RAMSYDEX Value-Added</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {comparisonTableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                  {/* Feature Title */}
                  <td className="py-4 px-6 font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dhl-red"></span>
                    <span>{row.feature}</span>
                  </td>

                  {/* Standard Option */}
                  <td className="py-4 px-6 text-gray-500 bg-gray-50/50">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{row.standard}</span>
                    </div>
                  </td>

                  {/* Ramsydex Advantage */}
                  <td className="py-4 px-6 font-semibold text-gray-900 bg-yellow-50/40 border-l-2 border-r-2 border-dhl-yellow/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">{row.ramsydex}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Dedicated Quality Control (QC) Inspection Section (Specified in Brief) */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-white rounded-2xl p-8 sm:p-10 border-4 border-dhl-red shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-dhl-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-2 bg-dhl-yellow text-dhl-black text-xs font-black px-3 py-1 rounded uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Specialized In-House Capability</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white">
                Quality Control (QC) & Inbound Inspection
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl">
                Prevent damaged goods and wrong shipments from reaching your buyers. Our Shah Alam hub 
                operates a dedicated QC bay with barcode telemetry and visual audit reports.
              </p>
            </div>

            <button
              onClick={onRequestQuote}
              className="bg-dhl-red hover:bg-dhl-red-hover text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded shadow transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <span>Book QC Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5 QC Specific Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700/60">
              <div className="p-2.5 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-3">
                <Package className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Physical Carton Checks</h4>
              <p className="text-xs text-zinc-400">
                Moisture, crush damage, seam integrity, and master carton drop tests.
              </p>
            </div>

            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700/60">
              <div className="p-2.5 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-3">
                <BarChart3 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Quantity Verification</h4>
              <p className="text-xs text-zinc-400">
                100% carton and inner unit count matching against supplier commercial invoices.
              </p>
            </div>

            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700/60">
              <div className="p-2.5 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-3">
                <FileCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Barcode & SKU Audit</h4>
              <p className="text-xs text-zinc-400">
                EAN/UPC scan verification, label orientation, and serial number tracking.
              </p>
            </div>

            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700/60">
              <div className="p-2.5 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-3">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Seal & Tamper Checks</h4>
              <p className="text-xs text-zinc-400">
                Container bolt seal validation, security tape integrity, and chain of custody log.
              </p>
            </div>

            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700/60">
              <div className="p-2.5 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-3">
                <Camera className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-sm text-white mb-1">Photo Inspection Report</h4>
              <p className="text-xs text-zinc-400">
                High-res digital PDF photo inspection reports sent within 4 hours of dock receipt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Vehicles & Cargo Types Specifications (Specified in Brief) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vehicles */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
            <div className="p-2 bg-dhl-yellow rounded-lg text-dhl-black">
              <Truck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-lg font-black text-gray-900 uppercase font-heading">
                Fleet & Lorry Specifications
              </h4>
              <p className="text-xs text-gray-500">Tailored vehicles for city express to heavy industrial haulage</p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded">
              <span className="font-bold text-gray-800">1-Ton Cargo Van / Lorry:</span>
              <span className="text-gray-600">Urgent courier, parcel consolidation, city delivery</span>
            </div>
            <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded">
              <span className="font-bold text-gray-800">3-Ton & 5-Ton Box Trucks:</span>
              <span className="text-gray-600">Palletized cargo, factory dispatch, interstate trucking</span>
            </div>
            <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded">
              <span className="font-bold text-gray-800">10-Ton Tail-Lift Truck:</span>
              <span className="text-gray-600">Heavy machinery, dockless commercial offloading</span>
            </div>
            <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded">
              <span className="font-bold text-gray-800">40ft Prime Movers (FCL):</span>
              <span className="text-gray-600">Container drayage from Port Klang & interstate linehauls</span>
            </div>
          </div>
        </div>

        {/* Cargo Types */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
            <div className="p-2 bg-dhl-red rounded-lg text-white">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-gray-900 uppercase font-heading">
                Cargo Types Accepted
              </h4>
              <p className="text-xs text-gray-500">Full handling capabilities across all commercial classifications</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-gray-50 rounded font-semibold text-gray-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-dhl-red" />
              <span>Standard Euro & ISO Pallets</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded font-semibold text-gray-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-dhl-red" />
              <span>Bulk Loose Freight & Crates</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded font-semibold text-gray-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-dhl-red" />
              <span>Full Container Loads (20ft / 40ft)</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded font-semibold text-gray-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-dhl-red" />
              <span>Less than Container Load (LCL)</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded font-semibold text-gray-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-dhl-red" />
              <span>Consumer Electronics & SKUs</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded font-semibold text-gray-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-dhl-red" />
              <span>Bonded Commercial Imports</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
