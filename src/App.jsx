import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import SolutionsGrid from './components/SolutionsGrid';
import WorkflowBar from './components/WorkflowBar';
import ComparisonTable from './components/ComparisonTable';
import InteractiveMap from './components/InteractiveMap';
import AboutUs from './components/AboutUs';
import GalleryModal from './components/GalleryModal';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import { 
  Globe, 
  ArrowRight, 
  Truck, 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { companyInfo } from './data/logisticsData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeTopicPill, setActiveTopicPill] = useState('Freight Quote');
  const [legalModalType, setLegalModalType] = useState(null);

  // Navigate to quote form with specific pre-selected service/topic
  const handleRequestQuote = (topic = 'Freight Quote') => {
    setActiveTopicPill(topic);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreSolutions = () => {
    setActivePage('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewGlobalNetwork = () => {
    setActivePage('network');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-dhl-black">
      
      {/* Top Main Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        openQuoteModal={() => handleRequestQuote('Freight Quote')}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">

        {/* ========================================================
            PAGE 1: HOMEPAGE ('The Operational Gateway')
           ======================================================== */}
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* Hero Section with Integrated Background Switcher & Stats */}
            <Hero 
              onExploreSolutions={handleExploreSolutions}
              onRequestQuote={() => handleRequestQuote('Freight Quote')}
            />

            {/* Solutions Grid (DSV Style 6 modular cards) */}
            <SolutionsGrid 
              onSelectService={(serviceName) => handleRequestQuote(serviceName)}
              onNavigateToCapabilities={handleExploreSolutions}
            />

            {/* Global Network Map Teaser (Specified in Brief) */}
            <section className="py-16 bg-white border-y border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-zinc-950 text-white rounded-2xl p-8 sm:p-12 border-4 border-dhl-yellow shadow-2xl grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 dhl-stripe-bar pointer-events-none hidden lg:block"></div>

                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-dhl-red text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Global Network & Trade Lanes</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black uppercase font-heading text-white leading-tight">
                      Trade Lanes Connected to Central Malaysia
                    </h2>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      From Intra-ASEAN express trucking to maritime ocean routes through Port Klang and express air corridors via KLIA Cargo Village. 
                      We connect your products directly to key manufacturing centers in China, Japan, Europe, and the United States.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-zinc-300">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-dhl-yellow" />
                        <span>Daily Singapore & Thailand Trucking</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-dhl-yellow" />
                        <span>Direct Port Klang Container Drayage</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleViewGlobalNetwork}
                        className="bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                      >
                        <span>View Global Network & Focus Countries</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Preview Graphic */}
                  <div className="lg:col-span-5 bg-zinc-900 rounded-xl p-5 border border-zinc-800 text-xs space-y-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-dhl-yellow block">
                      Active Departure Schedule Preview
                    </span>
                    <div className="space-y-2">
                      <div className="p-2.5 bg-zinc-950 rounded border border-zinc-800 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-white block">Malaysia ↔ Singapore</span>
                          <span className="text-zinc-400 text-[11px]">Daily Cross-Border Trucking</span>
                        </div>
                        <span className="text-emerald-400 font-bold">24hr Transit</span>
                      </div>
                      <div className="p-2.5 bg-zinc-950 rounded border border-zinc-800 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-white block">Malaysia ↔ Shenzhen / Shanghai</span>
                          <span className="text-zinc-400 text-[11px]">Air Express & FCL Ocean</span>
                        </div>
                        <span className="text-dhl-yellow font-bold">3–5 Days</span>
                      </div>
                      <div className="p-2.5 bg-zinc-950 rounded border border-zinc-800 flex justify-between items-center">
                        <div>
                          <span className="font-bold text-white block">Malaysia ↔ Rotterdam / Hamburg</span>
                          <span className="text-zinc-400 text-[11px]">Direct Maritime Container Line</span>
                        </div>
                        <span className="text-zinc-300 font-bold">Weekly Feeder</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Workflow Bar (4-Step Process Bar) */}
            <WorkflowBar onRequestQuote={() => handleRequestQuote('Freight Quote')} />

            {/* Bottom Callout Banner */}
            <section className="py-12 bg-dhl-yellow text-dhl-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <span className="bg-dhl-red text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
                    Commitment to Importers & Exporters
                  </span>
                  <h3 className="text-2xl font-black uppercase font-heading text-dhl-black">
                    Guaranteed 24-Hour Inquiry Response Desk
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-800">
                    "{companyInfo.responsePromise}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleRequestQuote('Freight Quote')}
                    className="bg-dhl-red hover:bg-dhl-red-hover text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="bg-dhl-black hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3.5 rounded transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-dhl-yellow" />
                    <span className="hidden sm:inline">Call Hub</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================
            PAGE 2: CORE SOLUTIONS & OPERATIONAL CAPABILITIES
           ======================================================== */}
        {activePage === 'solutions' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-300">
            <ComparisonTable 
              onRequestQuote={() => handleRequestQuote('Freight Quote')} 
            />

            {/* Bottom Call to Action banner specified in brief */}
            <div className="mt-16 bg-dhl-yellow rounded-2xl p-8 sm:p-10 border-4 border-dhl-red shadow-xl text-center flex flex-col items-center">
              <span className="bg-dhl-red text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
                Direct Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-dhl-black mt-3">
                Need a Reliable Logistics and Customs Partner?
              </h3>
              <p className="text-sm text-zinc-800 max-w-xl mt-2 font-medium">
                Request a quote today and let our Central Malaysia operations desk tailor a dependable route plan for your cargo.
              </p>
              <button
                onClick={() => handleRequestQuote('Freight Quote')}
                className="mt-6 bg-dhl-red hover:bg-dhl-red-hover text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-brand transition-transform hover:scale-105 flex items-center gap-2"
              >
                <span>Request a Quote Today</span>
                <ArrowRight className="w-4 h-4 text-dhl-yellow" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            PAGE 3: GLOBAL NETWORK & WORLD MAP
           ======================================================== */}
        {activePage === 'network' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-300">
            <InteractiveMap 
              onRequestQuote={() => handleRequestQuote('Freight Quote')}
            />

            {/* Bottom Call to Action */}
            <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-black uppercase font-heading text-gray-900">
                Operating on a Different Trade Lane?
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                We coordinate charter flights, consolidated containers, and cross-border trucking throughout ASEAN and worldwide partner destinations.
              </p>
              <button
                onClick={() => handleRequestQuote('Freight Quote')}
                className="mt-5 bg-dhl-red hover:bg-dhl-red-hover text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow transition-colors inline-flex items-center gap-2"
              >
                <span>Inquire About Your Specific Route</span>
                <ArrowRight className="w-4 h-4 text-dhl-yellow" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            PAGE 4: ABOUT US & CREDIBILITY
           ======================================================== */}
        {activePage === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-300">
            <AboutUs 
              onRequestQuote={() => handleRequestQuote('General Inquiry')}
            />

            {/* Bottom Call to Action */}
            <div className="mt-16 bg-dhl-black text-white rounded-2xl p-8 sm:p-10 border-4 border-dhl-yellow shadow-xl text-center flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white">
                Partner with 32+ Years of Proven Logistics Integrity
              </h3>
              <p className="text-sm text-zinc-300 max-w-xl mt-2">
                Speak directly with our senior logistics coordinators in Shah Alam to review your supply chain requirements.
              </p>
              <button
                onClick={() => handleRequestQuote('General Inquiry')}
                className="mt-6 bg-dhl-yellow hover:bg-yellow-400 text-dhl-black font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
              >
                <span>Initiate Corporate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            PAGE 5: GALLERY
           ======================================================== */}
        {activePage === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-300">
            <GalleryModal />
          </div>
        )}

        {/* ========================================================
            PAGE 6: CONTACT US & SIMPLE QUOTE FORM
           ======================================================== */}
        {activePage === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-in fade-in duration-300">
            <QuoteForm 
              initialTopic={activeTopicPill}
              onOpenLegal={(type) => setLegalModalType(type)}
            />
          </div>
        )}

      </main>

      {/* Global Footer */}
      <Footer 
        setActivePage={setActivePage}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating WhatsApp Quick Contact Pill */}
      <FloatingWhatsApp />

      {/* Legal & Compliance Modal */}
      <LegalModal 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Cookie Banner (PDPA Compliant) */}
      <CookieBanner 
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

    </div>
  );
}
