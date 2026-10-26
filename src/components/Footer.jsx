import React from 'react';
import { 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Clock
} from 'lucide-react';
import { companyInfo } from '../data/logisticsData';

export default function Footer({ setActivePage, onOpenLegal }) {
  const handlePageClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dhl-black text-white border-t-8 border-dhl-yellow relative overflow-hidden">
      {/* Top DHL Red Accent Line */}
      <div className="h-1 bg-dhl-red w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Summary - Column 1 to 4 */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handlePageClick('home')}
              className="cursor-pointer flex items-center gap-3"
            >
              <div className="p-2.5 bg-dhl-red text-white rounded shadow">
                <Truck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-xl tracking-tighter text-white uppercase font-heading">
                    RAMSYDEX
                  </span>
                  <span className="bg-dhl-yellow text-dhl-black text-[10px] font-black tracking-widest px-1.5 py-0.5 rounded">
                    GLOBAL
                  </span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Logistics & Distribution Hub
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Operating with 32+ years of continuous supply chain leadership from Central Malaysia. 
              Integrated freight forwarding, certified customs brokerage, inbound QC inspection, and regional distribution for commercial enterprises.
            </p>

            <div className="pt-2 text-xs text-zinc-500">
              <span className="text-zinc-400 font-bold block">{companyInfo.registrationNo}</span>
              <span>Central Malaysia Operational Hub, Shah Alam, Selangor</span>
            </div>

            {/* Quick WhatsApp pill */}
            <div className="pt-1">
              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Dispatch Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation - Column 5 to 6 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-dhl-yellow font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('home')} className="text-zinc-300 hover:text-dhl-yellow transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-dhl-red" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('solutions')} className="text-zinc-300 hover:text-dhl-yellow transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-dhl-red" />
                  <span>Solutions</span>
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('network')} className="text-zinc-300 hover:text-dhl-yellow transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-dhl-red" />
                  <span>Global Network</span>
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('about')} className="text-zinc-300 hover:text-dhl-yellow transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-dhl-red" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('gallery')} className="text-zinc-300 hover:text-dhl-yellow transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-dhl-red" />
                  <span>Gallery</span>
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('contact')} className="text-zinc-300 hover:text-dhl-yellow transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-dhl-red" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Summary - Column 7 to 9 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-dhl-yellow font-heading">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>• Multi-Modal Air & Ocean Freight</li>
              <li>• Customs EDI Clearance & Tariff Exemption</li>
              <li>• Inbound QC & SKU Carton Verification</li>
              <li>• Shah Alam Cross-Dock Staging</li>
              <li>• Commercial Last-Mile Delivery (e-POD)</li>
              <li>• Priority Courier & Express Dispatch</li>
            </ul>

            <div className="pt-2 text-xs text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-dhl-yellow" />
              <span>SLA Response: Guaranteed 24 Hours</span>
            </div>
          </div>

          {/* Contact Hub - Column 10 to 12 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-dhl-yellow font-heading">
              Operations Hub
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dhl-red flex-shrink-0 mt-0.5" />
                <span>Seksyen 15, 40200 Shah Alam, Selangor Darul Ehsan, Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dhl-red flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-dhl-yellow">
                  {companyInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dhl-red flex-shrink-0" />
                <a href={`mailto:${companyInfo.dispatchEmail}`} className="hover:text-dhl-yellow">
                  {companyInfo.dispatchEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-zinc-400 block mb-1">Affiliations & Accreditations:</span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono font-bold text-dhl-yellow">
                <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">FIATA</span>
                <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">MAFFA</span>
                <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">ISO 9001</span>
                <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">Customs Agent</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Utility Bar (Specified in Brief) */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Registered under Malaysia Companies Act.
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-dhl-yellow transition underline"
            >
              Privacy Policy (PDPA)
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-dhl-yellow transition underline"
            >
              Terms of Use & Trading Terms
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-dhl-yellow transition underline"
            >
              Cookie Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
