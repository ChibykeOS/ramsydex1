import React from 'react';
import { Truck, FileCheck, Boxes, CheckCircle2, ArrowRight } from 'lucide-react';
import { workflowSteps } from '../data/logisticsData';

export default function WorkflowBar({ onRequestQuote }) {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-6 h-6 text-dhl-red" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-dhl-red" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-dhl-red" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-dhl-red" />;
      default:
        return <Truck className="w-6 h-6 text-dhl-red" />;
    }
  };

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2">
            <span>Verified Operational Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading uppercase tracking-tight">
            How Your Freight Moves with Ramsydex
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            A transparent 4-stage supply chain pipeline eliminating demurrage, stock mismatches, and delivery delays.
          </p>
        </div>

        {/* 4-Step Process Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-dhl-yellow transition-all duration-200 relative group flex flex-col justify-between"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-dhl-yellow/30 transition-colors">
                  {getStepIcon(step.icon)}
                </div>
                <span className="text-3xl font-black text-dhl-yellow font-heading tracking-tighter">
                  {step.step}
                </span>
              </div>

              <div>
                <h3 className="text-base font-black text-gray-900 font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-bold text-gray-500">
                <span className="uppercase tracking-wider">Stage {index + 1} of 4</span>
                {index < 3 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-dhl-red hidden lg:block" />
                ) : (
                  <span className="text-emerald-600 font-extrabold">Final POD</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
