import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Plane, 
  Ship,
  Sparkles,
  Info
} from 'lucide-react';
import { worldMapLocations, tradeCorridors } from '../data/logisticsData';

export default function InteractiveMap({ onRequestQuote }) {
  const [selectedLocation, setSelectedLocation] = useState(worldMapLocations[0]); // Default to Malaysia Central Hub

  return (
    <div className="space-y-12">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2">
          <span>Global Network & World Map</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading uppercase tracking-tight">
          Global Corridors Centered on Malaysia
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Click or hover on any global trade node to inspect our cargo handling routes, 
          scheduled departure frequencies, and customs brokerage coverage.
        </p>
      </div>

      {/* Interactive Map Visual Container */}
      <div className="bg-zinc-950 rounded-2xl p-6 sm:p-8 border-4 border-dhl-yellow shadow-2xl relative overflow-hidden">
        
        {/* Map Header Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-zinc-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-zinc-300 font-semibold">Active Global Trade Lanes & Hub Connectivity</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-dhl-yellow"></span>
              Central Hub
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-dhl-red"></span>
              Connected Port / Airport Node
            </span>
          </div>
        </div>

        {/* Scalable World Map Graphic with Interactive SVG Nodes */}
        <div className="relative w-full aspect-[16/9] min-h-[320px] max-h-[520px] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          
          {/* Stylized SVG World Map Coastline & Gridlines */}
          <svg 
            className="w-full h-full object-cover" 
            viewBox="0 0 1000 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="1000" height="500" fill="#121316" />
            <rect width="1000" height="500" fill="url(#grid)" />

            {/* Simplified World Continents Path Outlines */}
            {/* North America */}
            <path 
              d="M120 80 Q160 60 250 80 T300 140 T220 200 T150 180 T100 130 Z" 
              fill="#27272a" 
              opacity="0.6" 
            />
            {/* South America */}
            <path 
              d="M240 240 Q280 260 300 320 T260 420 T210 330 Z" 
              fill="#27272a" 
              opacity="0.5" 
            />
            {/* Europe */}
            <path 
              d="M450 70 Q510 60 550 110 T490 160 T440 120 Z" 
              fill="#27272a" 
              opacity="0.6" 
            />
            {/* Africa */}
            <path 
              d="M460 170 Q540 180 550 250 T500 360 T440 280 T430 200 Z" 
              fill="#27272a" 
              opacity="0.5" 
            />
            {/* Asia */}
            <path 
              d="M560 70 Q700 50 860 100 T880 220 T740 270 T600 200 Z" 
              fill="#27272a" 
              opacity="0.6" 
            />
            {/* Southeast Asia / Malaysia Hub Zone */}
            <circle cx="740" cy="290" r="14" fill="#3f3f46" opacity="0.8" />
            {/* Australia */}
            <path 
              d="M780 340 Q880 330 900 390 T820 440 T760 390 Z" 
              fill="#27272a" 
              opacity="0.6" 
            />

            {/* Glowing Trade Route Arc lines connecting back to Malaysia (x: 740, y: 290) */}
            <path d="M 740 290 Q 600 160 490 155" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.7" />
            <path d="M 740 290 Q 580 180 470 150" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.7" />
            <path d="M 740 290 Q 760 200 770 215" stroke="#FFCC00" strokeWidth="2" strokeDasharray="4,4" opacity="0.8" />
            <path d="M 740 290 Q 800 240 840 200" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.7" />
            <path d="M 740 290 Q 800 340 840 370" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.7" />
            <path d="M 740 290 Q 450 350 200 185" stroke="#D40511" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6" />
          </svg>

          {/* Render Pinpoints on top of map */}
          {worldMapLocations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id;
            const isHub = loc.id === 'malaysia';

            return (
              <div
                key={loc.id}
                style={{ 
                  left: `${loc.coordinates.x}%`, 
                  top: `${loc.coordinates.y}%` 
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
                onClick={() => setSelectedLocation(loc)}
              >
                {/* Ripple Effect */}
                <div className={`absolute -inset-2 rounded-full ${
                  isHub 
                    ? 'bg-dhl-yellow/40 animate-ping' 
                    : isSelected 
                      ? 'bg-dhl-red/40 animate-ping' 
                      : 'bg-white/10 group-hover:bg-dhl-yellow/30'
                }`}></div>

                {/* Pin Button */}
                <button
                  aria-label={`Select ${loc.name}`}
                  className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
                    isHub
                      ? 'w-7 h-7 bg-dhl-yellow text-dhl-black ring-4 ring-dhl-red/80 shadow-lg scale-110'
                      : isSelected
                        ? 'w-6 h-6 bg-dhl-red text-white ring-4 ring-dhl-yellow shadow-lg scale-125'
                        : 'w-4 h-4 bg-zinc-300 text-zinc-900 group-hover:bg-dhl-yellow group-hover:scale-125'
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${isHub ? 'stroke-[3]' : 'stroke-[2]'}`} />
                </button>

                {/* Floating Node Label */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-[11px] font-black px-2 py-0.5 rounded shadow pointer-events-none transition-all ${
                  isSelected || isHub
                    ? 'bg-dhl-yellow text-dhl-black ring-1 ring-black/40'
                    : 'bg-black/80 text-zinc-300 group-hover:bg-zinc-800 group-hover:text-white'
                }`}>
                  {loc.name.split(' (')[0]}
                </div>
              </div>
            );
          })}

        </div>

        {/* Selected Location Card Display */}
        {selectedLocation && (
          <div className="mt-6 bg-zinc-900 border-2 border-dhl-yellow/60 rounded-xl p-5 sm:p-6 text-white animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-dhl-yellow text-dhl-black rounded-lg">
                  <Globe className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white uppercase font-heading">
                      {selectedLocation.name}
                    </h3>
                    <span className="bg-dhl-red text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                      {selectedLocation.region}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {selectedLocation.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-zinc-800 px-3 py-1.5 rounded text-xs text-zinc-300">
                  <span className="text-zinc-500 block text-[10px] uppercase font-bold">Frequency</span>
                  <span className="font-bold text-dhl-yellow">{selectedLocation.volume}</span>
                </div>
                <button
                  onClick={onRequestQuote}
                  className="bg-dhl-red hover:bg-dhl-red-hover text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow transition-colors flex items-center gap-1.5"
                >
                  <span>Book Lane</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-zinc-950/60 p-3.5 rounded-lg border border-zinc-800">
                <span className="font-bold text-dhl-yellow uppercase block mb-1">Available Services On This Corridor:</span>
                <p className="text-zinc-300">{selectedLocation.services}</p>
              </div>
              <div className="bg-zinc-950/60 p-3.5 rounded-lg border border-zinc-800">
                <span className="font-bold text-dhl-yellow uppercase block mb-1">Customs Clearance & Brokerage:</span>
                <p className="text-zinc-300">Direct EDI electronic filings, bilateral trade certificates (Form D / Form E), and bonded transshipment protocols.</p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Trade Corridors List (Specified in Brief) */}
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-black text-dhl-black uppercase font-heading">
            Key Strategic Trade Corridors
          </h3>
          <p className="text-sm text-gray-600">
            Dedicated multi-modal routes directly managed from our Central Malaysia hub with guaranteed transit times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradeCorridors.map((corridor, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-dhl-red transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-black text-gray-900 font-heading">
                    {corridor.name}
                  </h4>
                  <span className="bg-dhl-yellow/30 text-dhl-black font-extrabold text-[11px] px-2.5 py-1 rounded">
                    {corridor.leadTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-dhl-red mb-4">
                  <Truck className="w-4 h-4" />
                  <span>{corridor.route}</span>
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-3">
                  {corridor.modes.map((mode, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{mode}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-bold uppercase">
                  Daily Scheduled Linehaul
                </span>
                <button
                  onClick={onRequestQuote}
                  className="text-xs font-black text-dhl-red hover:text-dhl-red-hover flex items-center gap-1 uppercase"
                >
                  <span>Inquire Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customs Coverage Section (Specified in Brief) */}
      <div className="bg-gray-100 rounded-xl p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-4 bg-dhl-red text-white rounded-xl flex-shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-black text-dhl-black uppercase font-heading">
              Multi-Region Customs Clearance & Cross-Border Compliance
            </h4>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              With 32+ years navigating international trade rules, Ramsydex operates certified customs brokerage desks 
              at Port Klang (Northport/Westport), KLIA Cargo Village, Penang, and the Johor-Singapore checkpoints. 
              Our team manages HS code classification, Form D/E preferential duty exemptions, SIRIM permits, 
              and SST exemptions to ensure zero port demurrage and swift cargo release.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
