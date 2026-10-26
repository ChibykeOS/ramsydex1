import React from 'react';
import { ShieldCheck, Globe, Boxes, Clock } from 'lucide-react';
import { trustStats } from '../data/logisticsData';

export default function TrustBar() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-dhl-red" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-dhl-red" />;
      case 'Boxes':
        return <Boxes className="w-8 h-8 text-dhl-red" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-dhl-red" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-dhl-red" />;
    }
  };

  return (
    <section className="bg-white border-b border-gray-200 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          
          {trustStats.map((stat, index) => (
            <div 
              key={index}
              className={`flex items-start gap-4 ${index !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''} group`}
            >
              {/* Icon Container with DHL Yellow background */}
              <div className="p-3 bg-dhl-yellow/20 rounded-xl group-hover:bg-dhl-yellow transition-colors duration-200 flex-shrink-0">
                {getIcon(stat.icon)}
              </div>

              {/* Number and Label */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-dhl-black font-heading tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mt-1 leading-snug">
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
