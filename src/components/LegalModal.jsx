import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/logisticsData';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border-4 border-dhl-yellow"
      >
        {/* Modal Header */}
        <div className="bg-dhl-black text-white p-5 flex items-center justify-between border-b-2 border-dhl-red">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-dhl-yellow text-dhl-black rounded">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-black text-base font-heading uppercase text-white">
                {type === 'privacy' && "Privacy Policy — Malaysia PDPA 2010 Compliance"}
                {type === 'terms' && "Standard Logistics Trading Terms & Conditions"}
                {type === 'cookies' && "Cookie & Web Analytics Policy"}
              </h3>
              <p className="text-[11px] text-zinc-400">
                {companyInfo.name} ({companyInfo.registrationNo})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {type === 'privacy' && (
            <>
              <div className="bg-yellow-50 border-l-4 border-dhl-yellow p-3 text-xs text-gray-800">
                <strong>Statutory Notice:</strong> In accordance with the Personal Data Protection Act 2010 of Malaysia ("PDPA"), this policy outlines how Ramsydex Global Logistics collects, processes, and protects personal and commercial data provided through quote forms, email inquiries, and phone communications.
              </div>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you submit a quote request, topic selection pill, or communicate with our Central Malaysia desk, we may collect your name, commercial entity name, phone number, corporate email address, freight route details (origin and destination), cargo classifications, and pallet/tonnage dimensions.
              </p>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                2. Purpose of Processing
              </h4>
              <p>
                All data collected is used exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Generating accurate multi-modal freight quotes and customs tariff schedules.</li>
                <li>Executing customs documentation under Royal Malaysian Customs requirements.</li>
                <li>Fulfilling inquiries within our promised 24-hour response SLA.</li>
                <li>Verifying inbound/outbound QC inspection authorizations.</li>
              </ul>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                3. Data Security & Storage
              </h4>
              <p>
                We do not sell, rent, or distribute your corporate contact data to third-party advertising brokers. Data is maintained on secured servers with restricted administrative access and transmitted via encrypted SSL protocols.
              </p>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                4. Your Rights Under PDPA
              </h4>
              <p>
                You may request access to, correction of, or withdrawal of consent for your commercial personal data at any time by contacting our Compliance Officer at <a href={`mailto:${companyInfo.email}`} className="text-dhl-red font-bold underline">{companyInfo.email}</a>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <div className="bg-gray-100 border-l-4 border-dhl-red p-3 text-xs text-gray-800">
                <strong>Trading Conditions:</strong> All forwarding, haulage, customs brokerage, and storage operations undertaken by Ramsydex Global Logistics are subject to standard Malaysian Freight Forwarders conditions and FIATA trade rules.
              </div>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                1. Quotations & Rates
              </h4>
              <p>
                Quotations are formulated based on current freight rates, marine bunker surcharges (BAF), currency exchange valuations, and statutory port tariffs. Rates remain subject to vessel space allocation and regulatory fee changes at destination ports.
              </p>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                2. Cargo Declarations & Customs Compliance
              </h4>
              <p>
                The shipper and consignee are responsible for supplying true, accurate, and complete documentation including commercial invoices, packing lists, and Form D/E certificates. Ramsydex operates as a licensed customs agent but cannot be held liable for demurrage arising from shipper-initiated misdeclaration or regulatory seizure.
              </p>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                3. Quality Control (QC) Disclaimers
              </h4>
              <p>
                Our inbound QC audits inspect carton integrity, exterior physical condition, seal matching, and SKU barcode consistency. Destructive or chemical component testing is outside standard warehousing QC scope unless explicitly contracted under a certified laboratory annex.
              </p>

              <h4 className="font-black text-sm text-gray-900 uppercase font-heading pt-2">
                4. Governing Law
              </h4>
              <p>
                These terms are governed by and construed in accordance with the laws of Malaysia, with exclusive jurisdiction in the Courts of Malaysia.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <h4 className="font-black text-sm text-gray-900 uppercase font-heading">
                Cookie & Web Analytics Disclosure
              </h4>
              <p>
                This website utilizes essential cookies to ensure rapid page navigation, retain form state across topic pills, and analyze aggregate visitor volume (such as country of origin and device type) to continuously enhance our logistics services.
              </p>
              <p>
                We do not employ third-party tracking pixels for behavioral remarketing without your explicit consent. You can disable non-essential cookies via your web browser preferences at any time.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-dhl-red hover:bg-dhl-red-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded shadow transition-colors"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
}
