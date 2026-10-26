import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/logisticsData';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden md:flex items-center bg-dhl-black text-white text-xs font-bold py-1.5 px-3 rounded-l-lg shadow-lg border border-zinc-800 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="text-dhl-yellow mr-1">Chat:</span> Central Desk Online
      </div>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Ramsydex Logistics Desk"
        className="relative p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 flex items-center justify-center ring-4 ring-white/80"
      >
        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 stroke-[2.2]" />
      </a>
    </div>
  );
}
