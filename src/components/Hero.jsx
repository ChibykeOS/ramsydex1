import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  TrendingUp,
  PackageCheck
} from 'lucide-react';
import { companyInfo } from '../data/logisticsData';

export default function Hero({ onExploreSolutions, onRequestQuote }) {
  return (
    <section className="relative bg-dhl-black text-white overflow-hidden border-b-4 border-dhl-yellow">
      {/* Background Logistics Image with Industrial Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80" 
          alt="RAMSYDEX Global Logistics Hub Operations"
          className="w-full h-full object-cover object-center opacity-25 brightness-75 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Dual gradient overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/95 to-zinc-900/75"></div>
        {/* Subtle DHL diagonal stripe watermark on bottom right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none dhl-stripe-bar transform rotate-12 translate-x-20 translate-y-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Column 1 to 8 */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Top Pill - Central Malaysia Hub & Heritage */}
            <div className="inline-flex items-center gap-2 bg-zinc-800/90 border border-zinc-700/80 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-dhl-yellow animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
                Central Malaysia Operational Gateway • <span className="text-dhl-yellow font-bold">32+ Years Proven Excellence</span>
              </span>
            </div>

            {/* Exact 2-Line Headline specified in Developer Brief */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-heading text-white">
              Connecting Global Markets with Reliable Supply Chain & Distribution Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dhl-yellow via-yellow-300 to-amber-400">
                from Central Malaysia.
              </span>
            </h1>

            {/* Sub-headline providing immediate credibility */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              B2B logistics engineered for manufacturers, importers, and exporters. 
              Comprehensive multi-modal freight, direct customs brokerage, inbound QC verification, 
              and precision last-mile dispatch operating from the Shah Alam industrial corridor.
            </p>

            {/* Two Action Buttons (DSV Style) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary: Request a Quote (DHL Red) */}
              <button
                onClick={onRequestQuote}
                className="group relative bg-dhl-red hover:bg-dhl-red-hover text-white font-extrabold text-base px-8 py-4 rounded-md shadow-brand transition-all duration-200 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <FileText className="w-5 h-5 text-dhl-yellow" />
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary: Explore Solutions */}
              <button
                onClick={onExploreSolutions}
                className="group bg-dhl-yellow hover:bg-dhl-yellow-hover text-dhl-black font-extrabold text-base px-8 py-4 rounded-md shadow-md transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Key Micro-Commitments */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-dhl-yellow" />
                <span>24-Hour Inquiry Response SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-dhl-yellow" />
                <span>Licensed Malaysian Customs Agent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PackageCheck className="w-4 h-4 text-dhl-yellow" />
                <span>Strict Inbound QC & SKU Audits</span>
              </div>
            </div>

          </div>

          {/* Right Floating Dispatch Card - Column 9 to 12 */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-zinc-900/95 border-2 border-dhl-yellow/40 rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
              
              {/* Top accent badge */}
              <div className="absolute top-0 right-0 bg-dhl-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl">
                Live Dispatch Desk
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-dhl-yellow text-dhl-black rounded-lg">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">Central Malaysia Hub</h3>
                  <p className="text-xs text-zinc-400">Shah Alam / Port Klang Corridor</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs border-y border-zinc-800 py-4 my-2">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Port Klang Drayage:</span>
                  <span className="font-bold text-dhl-yellow">25 Mins (Direct)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">KLIA Cargo Village:</span>
                  <span className="font-bold text-dhl-yellow">35 Mins (Express)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Intra-ASEAN Cross-Border:</span>
                  <span className="font-bold text-white">Singapore / Thailand</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Monthly On-Time Rate:</span>
                  <span className="font-black text-emerald-400">99.5% SLA</span>
                </div>
              </div>

              <div className="mt-5 pt-1">
                <button
                  onClick={onRequestQuote}
                  className="w-full bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-extrabold py-3 px-4 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Instant Cargo Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Signature DHL Bottom Yellow-Red Accent Strip */}
      <div className="h-2 w-full flex">
        <div className="w-2/3 bg-dhl-yellow"></div>
        <div className="w-1/3 bg-dhl-red"></div>
      </div>
    </section>
  );
}
