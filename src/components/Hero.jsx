import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Truck,
  Plane,
  Ship,
  Boxes,
  Calculator,
  CheckCircle2,
  PackageCheck,
  TrendingUp,
  Globe2
} from 'lucide-react';
import { companyInfo, trustStats } from '../data/logisticsData';

export default function Hero({ onExploreSolutions, onRequestQuote }) {
  // Background presets for high-relevance logistics visuals
  const heroBackgrounds = [
    {
      id: 'maritime',
      label: 'Ocean Port (Port Klang)',
      icon: Ship,
      url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=85',
      caption: 'Direct Port Klang Container Terminal & Ship-to-Shore Drayage'
    },
    {
      id: 'air',
      label: 'Air Cargo (KLIA Village)',
      icon: Plane,
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=85',
      caption: 'ULD Palletized Express Air Cargo Hub Operations'
    },
    {
      id: 'fleet',
      label: 'Commercial Road Fleet',
      icon: Truck,
      url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85',
      caption: 'Intra-ASEAN Bonded Linehaul Trucks & City Last-Mile Fleet'
    },
    {
      id: 'hub',
      label: 'Shah Alam Hub & QC',
      icon: Boxes,
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=85',
      caption: 'High-Bay Staging, Inbound QC Bay & Cross-Dock Facilities'
    }
  ];

  const [activeBgIndex, setActiveBgIndex] = useState(0);

  // Quick estimator state
  const [quickOrigin, setQuickOrigin] = useState('Central Malaysia (Shah Alam / Port Klang)');
  const [quickDestination, setQuickDestination] = useState('Singapore (Direct Cross-Border)');
  const [quickCargo, setQuickCargo] = useState('Palletized Goods');

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    onRequestQuote();
  };

  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden border-b-4 border-dhl-yellow">
      
      {/* Dynamic Background Logistics Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          key={heroBackgrounds[activeBgIndex].id}
          src={heroBackgrounds[activeBgIndex].url} 
          alt={heroBackgrounds[activeBgIndex].caption}
          className="w-full h-full object-cover object-center brightness-90 contrast-105 transition-all duration-700 ease-in-out transform scale-100"
        />

        {/* Sophisticated Dual Gradient: Strong dark fade on left for crystal-clear readability, open view on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/50"></div>

        {/* DHL Diagonal Warning Stripe accent in corner */}
        <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none dhl-stripe-bar transform -rotate-45 translate-x-28 -translate-y-28"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-12">
        
        {/* Top Operational Status Pill & Background Scene Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-black/60 border border-dhl-yellow/40 rounded-full px-3.5 py-1.5 backdrop-blur-md text-xs font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-200">
              Central Malaysia Operational Hub • <strong className="text-dhl-yellow">32+ Years Established (1992)</strong>
            </span>
          </div>

          {/* Background Scene Selector Pills */}
          <div className="flex items-center gap-1.5 bg-black/70 p-1 rounded-lg border border-white/15 backdrop-blur-md text-xs">
            <span className="text-[11px] font-bold text-zinc-400 px-2 hidden sm:inline">Hub View:</span>
            {heroBackgrounds.map((bg, idx) => {
              const Icon = bg.icon;
              const isActive = activeBgIndex === idx;
              return (
                <button
                  key={bg.id}
                  onClick={() => setActiveBgIndex(idx)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-dhl-yellow text-dhl-black shadow' 
                      : 'text-zinc-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={bg.caption}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{bg.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* 2-Column Hero Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Headline & Narrative - Column 1 to 7 */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-dhl-red text-white text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-dhl-yellow" />
              <span>Licensed Royal Malaysian Customs Broker & Multi-Modal Haulier</span>
            </div>

            {/* Exact Headline from Developer Brief */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug uppercase font-heading text-white drop-shadow-md">
              Connecting Global Markets with Reliable Supply Chain & Distribution Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dhl-yellow via-yellow-300 to-amber-300">
                from Central Malaysia.
              </span>
            </h1>

            {/* Concise Logistics Value Summary */}
            <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed max-w-2xl bg-black/40 p-3 rounded-lg backdrop-blur-sm border-l-4 border-dhl-yellow">
              B2B logistics engineered for commercial importers, exporters, and industrial manufacturers. 
              Daily departures from <strong>Shah Alam, Port Klang, and KLIA</strong>, backed by dedicated in-house customs clearance, 
              inbound QC inspection bays, and end-to-end fleet tracking.
            </p>

            {/* Two Action Buttons (DSV Style) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA (DHL Red) */}
              <button
                onClick={onRequestQuote}
                className="group bg-dhl-red hover:bg-dhl-red-hover text-white font-extrabold text-sm sm:text-base px-7 py-4 rounded shadow-brand transition-all duration-200 flex items-center justify-center gap-2.5 uppercase tracking-wider"
              >
                <FileText className="w-5 h-5 text-dhl-yellow" />
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA (DHL Yellow) */}
              <button
                onClick={onExploreSolutions}
                className="group bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-extrabold text-sm sm:text-base px-7 py-4 rounded shadow transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Visual Micro-Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-300">
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                <Clock className="w-4 h-4 text-dhl-yellow" />
                <span>Guaranteed 24h Response SLA</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                <PackageCheck className="w-4 h-4 text-dhl-yellow" />
                <span>100% SKU / Barcode QC Audits</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                <MapPin className="w-4 h-4 text-dhl-yellow" />
                <span>25m to Port Klang • 35m to KLIA</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Cargo Calculator & Hub Telemetry - Column 8 to 12 */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-zinc-950/90 border-2 border-dhl-yellow/80 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-dhl-red text-white rounded-lg">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm uppercase text-white font-heading">
                      Quick Quote & Route Estimator
                    </h3>
                    <p className="text-[11px] text-zinc-400">Direct Central Malaysia Dispatch Desk</p>
                  </div>
                </div>

                <span className="bg-dhl-yellow text-dhl-black font-black text-[10px] px-2 py-0.5 rounded uppercase">
                  Fast Track
                </span>
              </div>

              {/* Interactive Form Controls */}
              <form onSubmit={handleQuickEstimate} className="space-y-3 text-xs">
                <div>
                  <label className="block text-zinc-300 font-bold mb-1 uppercase text-[10px]">
                    Origin Point / Gateway
                  </label>
                  <select 
                    value={quickOrigin}
                    onChange={(e) => setQuickOrigin(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 font-medium focus:ring-2 focus:ring-dhl-yellow focus:outline-none"
                  >
                    <option>Central Malaysia Hub (Shah Alam, Selangor)</option>
                    <option>Port Klang (Westport / Northport)</option>
                    <option>KLIA Cargo Village (Airfreight)</option>
                    <option>Penang Port / Northern Corridor</option>
                    <option>Johor / Tuas Cross-Border Checkpoint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 font-bold mb-1 uppercase text-[10px]">
                    Destination Market
                  </label>
                  <select 
                    value={quickDestination}
                    onChange={(e) => setQuickDestination(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 font-medium focus:ring-2 focus:ring-dhl-yellow focus:outline-none"
                  >
                    <option>Singapore (Daily Scheduled Linehaul)</option>
                    <option>Thailand / Indochina Cross-Border</option>
                    <option>China (Shenzhen / Shanghai / Ningbo)</option>
                    <option>Europe (Rotterdam / Hamburg / Frankfurt)</option>
                    <option>United States (West & East Coast Ports)</option>
                    <option>Domestic Peninsular Distribution</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-zinc-300 font-bold mb-1 uppercase text-[10px]">
                      Cargo Classification
                    </label>
                    <select 
                      value={quickCargo}
                      onChange={(e) => setQuickCargo(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-2 text-zinc-100 font-medium focus:ring-2 focus:ring-dhl-yellow focus:outline-none"
                    >
                      <option>Standard Palletized Goods</option>
                      <option>Full Container (FCL 20ft/40ft)</option>
                      <option>LCL Consolidated Cargo</option>
                      <option>Industrial Heavy Machinery</option>
                      <option>Express Documents / Parcels</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-bold mb-1 uppercase text-[10px]">
                      Service Level
                    </label>
                    <select 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-2 text-zinc-100 font-medium focus:ring-2 focus:ring-dhl-yellow focus:outline-none"
                    >
                      <option>Freight + Customs Clearance</option>
                      <option>Full Door-to-Door + Inbound QC</option>
                      <option>Priority Express Air/Road</option>
                      <option>Warehousing & Staging</option>
                    </select>
                  </div>
                </div>

                {/* Instant Assessment Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-black uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-md text-xs"
                  >
                    <span>Calculate Rates & Transit Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Hub Telemetry Ticker */}
              <div className="mt-4 pt-3 border-t border-zinc-800 grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="bg-zinc-900/80 p-1.5 rounded">
                  <span className="text-zinc-500 block uppercase font-bold">Port Klang</span>
                  <span className="font-extrabold text-dhl-yellow">25 Mins</span>
                </div>
                <div className="bg-zinc-900/80 p-1.5 rounded">
                  <span className="text-zinc-500 block uppercase font-bold">KLIA Cargo</span>
                  <span className="font-extrabold text-dhl-yellow">35 Mins</span>
                </div>
                <div className="bg-zinc-900/80 p-1.5 rounded">
                  <span className="text-zinc-500 block uppercase font-bold">SLA Guarantee</span>
                  <span className="font-extrabold text-emerald-400">99.5%</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Floating 4-Stat Bar right at the base of the Hero to eliminate any white void */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustStats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-black/60 border border-white/10 rounded-xl p-3.5 backdrop-blur-md flex items-center gap-3 hover:border-dhl-yellow transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-dhl-yellow/20 flex items-center justify-center text-dhl-yellow group-hover:bg-dhl-yellow group-hover:text-dhl-black transition-colors flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-heading text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-zinc-300 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Signature DHL Bottom Yellow-Red Accent Strip */}
      <div className="h-2 w-full flex">
        <div className="w-3/4 bg-dhl-yellow"></div>
        <div className="w-1/4 bg-dhl-red"></div>
      </div>
    </section>
  );
}
