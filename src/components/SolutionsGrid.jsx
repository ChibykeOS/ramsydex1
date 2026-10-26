import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  FileCheck, 
  ShieldAlert, 
  Boxes, 
  Navigation, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { services } from '../data/logisticsData';

export default function SolutionsGrid({ onSelectService, onNavigateToCapabilities }) {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'freight-transportation':
        return <Truck className="w-5 h-5 text-dhl-red" />;
      case 'customs-trade-services':
        return <FileCheck className="w-5 h-5 text-dhl-red" />;
      case 'quality-control-inspection':
        return <ShieldAlert className="w-5 h-5 text-dhl-red" />;
      case 'supply-chain-solutions':
        return <Boxes className="w-5 h-5 text-dhl-red" />;
      case 'destination-last-mile':
        return <Navigation className="w-5 h-5 text-dhl-red" />;
      case 'courier-services':
        return <Zap className="w-5 h-5 text-dhl-red" />;
      default:
        return <Truck className="w-5 h-5 text-dhl-red" />;
    }
  };

  return (
    <section id="solutions-section" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-dhl-yellow/30 text-dhl-red font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-3">
              <span>Operational Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading tracking-tight uppercase">
              Modular Supply Chain Solutions
            </h2>
            <p className="text-base text-gray-600 mt-2 max-w-2xl">
              Scalable, integrated logistics operations connecting manufacturing floors in Central Malaysia 
              to global export gateways and domestic destination points.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <button
              onClick={onNavigateToCapabilities}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-dhl-red hover:text-dhl-red-hover uppercase tracking-wider group"
            >
              <span>View Full Specs & Comparison</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 6 Modular Service Cards Grid (DSV Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Service Card Image */}
              <div className="relative h-52 overflow-hidden bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Yellow Badge */}
                <div className="absolute top-4 left-4 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded shadow uppercase tracking-wide">
                  {service.badge}
                </div>

                {/* Service Card Number */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white font-black text-xs px-2.5 py-1 rounded border border-white/20">
                  0{index + 1}
                </div>

                {/* Service Title on bottom of image for punchy DSV layout */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                  <div className="p-1.5 bg-white rounded shadow-sm">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="text-lg font-black text-white font-heading leading-tight drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* 2-Sentence Summary */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* 3 Clear Bullet Points */}
                  <div className="space-y-2.5 pt-2 border-t border-gray-100 mb-6">
                    {service.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-dhl-red flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-black uppercase tracking-wider text-dhl-red hover:text-dhl-red-hover flex items-center gap-1 group/btn"
                  >
                    <span>Request Quote for This</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>

                  <span className="text-[11px] font-bold text-gray-400 uppercase">
                    Central Malaysia Hub
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner linking to Quote Form */}
        <div className="mt-14 bg-dhl-black rounded-2xl p-8 sm:p-10 border-4 border-dhl-yellow relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 dhl-stripe-bar pointer-events-none hidden md:block"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="bg-dhl-red text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
                Rapid Onboarding
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-2">
                Need a Custom End-to-End Distribution Package?
              </h3>
              <p className="text-sm text-zinc-300 mt-1 max-w-xl">
                Consult with our Shah Alam logistics coordinators. We analyze your monthly tonnage, 
                tariff codes, and delivery schedules to tailor guaranteed volume rates.
              </p>
            </div>

            <button
              onClick={() => onSelectService('General Inquiry')}
              className="bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded shadow-lg transition-transform hover:scale-105 flex items-center gap-2 flex-shrink-0"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
