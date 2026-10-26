import React from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  TrendingUp,
  Anchor,
  Plane,
  Truck
} from 'lucide-react';
import { companyInfo } from '../data/logisticsData';

export default function AboutUs({ onRequestQuote }) {
  return (
    <div className="space-y-16">
      
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2">
          <span>Page 4: About Us & Credibility</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading uppercase tracking-tight">
          32+ Years of Operational Leadership
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Pioneering reliable cross-border freight forwarding, bonded warehousing, and multi-region customs clearance since 1992.
        </p>
      </div>

      {/* 32 Years Highlight & Narrative */}
      <div className="bg-white rounded-2xl p-8 sm:p-12 border-2 border-gray-200 shadow-lg grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <span className="bg-dhl-red text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
              Established 1992
            </span>
            <span className="text-xs font-bold text-gray-500">
              Registration: {companyInfo.registrationNo}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-dhl-black uppercase font-heading leading-tight">
            Built on Long-Term Trust with Importers, Exporters & Industrial Leaders
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            Founded with the vision to bridge Southeast Asian manufacturing hubs with global commercial markets, 
            <strong> RAMSYDEX GLOBAL LOGISTICS</strong> has grown over three decades from a specialized regional customs agency into a full-service international freight and supply chain powerhouse.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed">
            Our Central Malaysia operations desk combines localized customs intelligence with global trade network partnerships. 
            We maintain direct operational accounts with leading maritime container lines, commercial airfreight carriers, and nationwide cross-docking channels, giving our clients preferential transit windows and complete peace of mind.
          </p>

          {/* Mission & Vision Callout */}
          <div className="bg-gray-50 border-l-4 border-dhl-yellow p-4 rounded-r-lg space-y-2 text-xs sm:text-sm">
            <p className="font-bold text-gray-900">
              <span className="text-dhl-red uppercase font-black mr-2">Company Mission:</span>
              Connecting global markets, providing secure and efficient supply chain infrastructure, and supporting sustainable business growth from initial planning to doorstep delivery.
            </p>
          </div>
        </div>

        {/* Big Visual Badge */}
        <div className="lg:col-span-5 bg-dhl-black text-white p-8 rounded-xl border-4 border-dhl-yellow shadow-xl text-center flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 dhl-stripe-bar pointer-events-none"></div>
          
          <div className="w-20 h-20 bg-dhl-red rounded-full flex items-center justify-center text-dhl-yellow mb-4 shadow-brand">
            <Award className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="text-5xl sm:text-6xl font-black font-heading text-dhl-yellow tracking-tighter">
            32+
          </div>
          <span className="text-lg font-black uppercase tracking-wide mt-1 text-white">
            Years of Logistics Excellence
          </span>
          <p className="text-xs text-zinc-400 mt-2 max-w-xs">
            Continuous operations across changing regulatory landscapes, port expansions, and international trade accords.
          </p>

          <div className="mt-6 pt-4 border-t border-zinc-800 w-full flex justify-around text-center text-xs">
            <div>
              <span className="block font-black text-dhl-yellow text-sm">100%</span>
              <span className="text-zinc-400">Compliant EDI</span>
            </div>
            <div>
              <span className="block font-black text-dhl-yellow text-sm">24hr</span>
              <span className="text-zinc-400">Inquiry SLA</span>
            </div>
            <div>
              <span className="block font-black text-dhl-yellow text-sm">99.5%</span>
              <span className="text-zinc-400">On-Time POD</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Value Pillars (Specified in Brief) */}
      <div>
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-black text-dhl-black uppercase font-heading">
            Our Three Core Pillars
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            The operational foundation guiding every consignment handled by Ramsydex
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-dhl-red transition-all duration-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-4">
                <Globe2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black uppercase text-dhl-red tracking-wider">Pillar 01</span>
              <h4 className="text-xl font-black text-gray-900 font-heading mt-1 mb-2">
                Global Network Connectivity
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct connections to 28+ countries across ASEAN, Greater China, Europe, and the Americas through premium airline allocations and direct container shipping lines.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Multi-Modal Trade Corridors</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-dhl-red transition-all duration-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 bg-dhl-red text-white rounded-lg w-fit mb-4 shadow-sm">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black uppercase text-dhl-red tracking-wider">Pillar 02</span>
              <h4 className="text-xl font-black text-gray-900 font-heading mt-1 mb-2">
                Reliable & Secure Cargo Handling
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Stringent physical inspection protocols, tamper-proof seal audits, cargo insurance options, and temperature-controlled staging for total asset protection.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Strict Inbound QC Verification</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-dhl-red transition-all duration-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 bg-dhl-yellow text-dhl-black rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black uppercase text-dhl-red tracking-wider">Pillar 03</span>
              <h4 className="text-xl font-black text-gray-900 font-heading mt-1 mb-2">
                Optimized Logistics Workflows
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Streamlined processes, rapid paperless EDI customs pre-clearance, automated sortation, and real-time electronic signed proof of delivery.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>99.5% Verified On-Time SLA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Central Malaysia Hub Advantage (Specified in Brief) */}
      <div className="bg-dhl-black text-white rounded-2xl p-8 sm:p-12 border-4 border-dhl-yellow shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-10 dhl-stripe-bar pointer-events-none hidden md:block"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-dhl-red text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Geographic Supremacy</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black uppercase font-heading text-white leading-tight">
            Central Malaysia Hub Advantage
          </h3>
          <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
            Positioned at the nexus of Malaysia's industrial heartland in Shah Alam, Selangor. 
            Our facility provides rapid, unimpeded access to world-class marine container terminals, air cargo terminals, and nationwide arterial expressways:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 text-dhl-yellow font-black text-sm mb-2">
                <Anchor className="w-5 h-5 text-dhl-red" />
                <span>Port Klang (North & Westport)</span>
              </div>
              <p className="text-xs text-zinc-400">
                Only 25 minutes away. World's 12th busiest container port, enabling same-day container clearance and drayage.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 text-dhl-yellow font-black text-sm mb-2">
                <Plane className="w-5 h-5 text-dhl-red" />
                <span>KLIA Cargo Village</span>
              </div>
              <p className="text-xs text-zinc-400">
                35 minutes direct access. Dedicated air cargo berths for high-value tech, pharmaceutical, and urgent freight dispatches.
              </p>
            </div>

            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 text-dhl-yellow font-black text-sm mb-2">
                <Truck className="w-5 h-5 text-dhl-red" />
                <span>Expressway Arteries</span>
              </div>
              <p className="text-xs text-zinc-400">
                Direct connections to KESAS, Federal Highway, ELITE, and the North-South Expressway (PLUS) for Singapore & Thailand linehauls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials & Memberships Block (Specified in Brief) */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h4 className="text-xl font-black text-gray-900 uppercase font-heading">
            Official Accreditations & Industry Licences
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Compliant with Royal Malaysian Customs regulations and international freight standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {companyInfo.memberships.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center hover:border-dhl-red transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-dhl-yellow/30 flex items-center justify-center text-dhl-red mb-2">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-sm text-gray-900 font-heading">
                {item.name}
              </span>
              <span className="text-[10px] text-gray-500 font-medium mt-0.5 leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
