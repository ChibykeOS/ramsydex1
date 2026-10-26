import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  AlertCircle,
  Truck,
  Building,
  RotateCcw
} from 'lucide-react';
import { companyInfo, topicPills } from '../data/logisticsData';

export default function QuoteForm({ initialTopic = 'Freight Quote', onOpenLegal }) {
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceNeeded: initialTopic,
    originDestination: '',
    cargoDetails: '',
    consent: false,
    website_honeypot: '' // Spam protection honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize service needed when topic pill changes
  useEffect(() => {
    setSelectedTopic(initialTopic);
    setFormData(prev => ({ ...prev, serviceNeeded: initialTopic }));
  }, [initialTopic]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setFormData(prev => ({ ...prev, serviceNeeded: topic }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot spam check
    if (formData.website_honeypot) {
      console.warn('Spam submission detected');
      return;
    }

    if (!formData.name || !formData.company || !formData.phone || !formData.email || !formData.originDestination) {
      setErrorMessage('Please fill in all required operational fields.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please accept the consent terms under Malaysia PDPA.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        // Save to local storage for record
        const submissions = JSON.parse(localStorage.getItem('ramsydex_quote_requests') || '[]');
        submissions.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('ramsydex_quote_requests', JSON.stringify(submissions));
      } catch (err) {
        console.error(err);
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      serviceNeeded: selectedTopic,
      originDestination: '',
      cargoDetails: '',
      consent: false,
      website_honeypot: ''
    });
  };

  return (
    <div id="contact-form" className="space-y-12">
      
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2">
          <span>Page 6: Contact & Rapid Freight Quotation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading uppercase tracking-tight">
          Direct Central Malaysia Operations Desk
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Select your inquiry topic below to pre-populate required routing details. 
          All submissions are reviewed by our Shah Alam senior dispatch marshals.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Topic Selector & Form - Column 1 to 7 */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 shadow-xl">
          
          {/* Topic Selector Buttons (Sample: Maersk) */}
          <div className="mb-6">
            <label className="block text-xs font-black uppercase tracking-wider text-gray-700 mb-2.5">
              1. Select Topic / Service Needed (Sample: Maersk)
            </label>
            <div className="flex flex-wrap gap-2">
              {topicPills.map((pill) => {
                const isSelected = selectedTopic === pill.id;
                return (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() => handleTopicClick(pill.id)}
                    className={`text-xs font-extrabold px-3.5 py-2 rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-dhl-red text-white shadow-md scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    <span>{pill.label}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-dhl-yellow" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form / Thank You State */}
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div>
                <span className="bg-dhl-yellow text-dhl-black text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                  Request Logged #{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <h3 className="text-2xl font-black text-gray-900 font-heading mt-3 uppercase">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong>{formData.serviceNeeded}</strong> has been assigned to our Central Malaysia duty desk.
                </p>
              </div>

              {/* 24-Hour Promise Callout on Thank You Page */}
              <div className="bg-yellow-50 border-2 border-dhl-yellow p-4 rounded-xl text-xs sm:text-sm text-gray-800 max-w-md mx-auto flex items-start gap-3 text-left">
                <Clock className="w-5 h-5 text-dhl-red flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-dhl-black uppercase block">Our Response Time Guarantee:</span>
                  <span>{companyInfo.responsePromise}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(`Hello Ramsydex, I just submitted an inquiry for ${formData.serviceNeeded} (Ref: ${formData.company}). Could you confirm receipt?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify Desk on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Submit Another Request</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Spam Protection Honeypot - hidden from real users */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website_honeypot}
                  onChange={handleInputChange}
                />
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 2-Column Fields: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Michael Tan / Sarah Lee"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-red transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Industrial Sdn Bhd"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-red transition"
                  />
                </div>
              </div>

              {/* 2-Column Fields: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+60 12-345 6789"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-red transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="procurement@company.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-red transition"
                  />
                </div>
              </div>

              {/* Pre-filled Service Needed (Synced with Topic Pill) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Service Needed (Pre-filled by Selected Topic)
                </label>
                <input
                  type="text"
                  name="serviceNeeded"
                  readOnly
                  value={formData.serviceNeeded}
                  className="w-full px-3.5 py-2.5 text-sm bg-yellow-50/70 border border-dhl-yellow font-bold text-gray-900 rounded-lg cursor-not-allowed"
                />
              </div>

              {/* Origin & Destination */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Origin & Destination Trade Route *
                </label>
                <input
                  type="text"
                  name="originDestination"
                  required
                  value={formData.originDestination}
                  onChange={handleInputChange}
                  placeholder="e.g. Shenzhen Port → Port Klang / Shah Alam Warehouse"
                  className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-red transition"
                />
              </div>

              {/* Short Cargo Details / Pallet Count */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Short Cargo Details / Pallet Count / Tonnage
                </label>
                <textarea
                  name="cargoDetails"
                  rows="3"
                  value={formData.cargoDetails}
                  onChange={handleInputChange}
                  placeholder="e.g. 12 Euro Pallets, ~3,400 kg, Consumer electronics. Need customs clearance and inbound QC inspection report."
                  className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dhl-yellow focus:border-dhl-red transition"
                ></textarea>
              </div>

              {/* Required Consent Checkbox (PDPA Compliance) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-0.5 rounded text-dhl-red focus:ring-dhl-yellow"
                  />
                  <span>
                    I agree to be contacted about my logistics enquiry. Compliant with Malaysia's Personal Data Protection Act (PDPA).{' '}
                    <button
                      type="button"
                      onClick={() => onOpenLegal && onOpenLegal('privacy')}
                      className="text-dhl-red underline font-bold hover:text-dhl-red-hover"
                    >
                      See Privacy Policy
                    </button>
                  </span>
                </label>
              </div>

              {/* High Contrast DHL Red Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-dhl-red hover:bg-dhl-red-hover text-white font-black text-sm uppercase tracking-wider py-4 rounded-lg shadow-brand transition-all flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Routing to Central Desk...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-dhl-yellow transition-transform group-hover:translate-x-1" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Side: Central Malaysia Hub Details & Response Promise - Column 8 to 12 */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Response Time Promise Box (Sample: Maersk) */}
          <div className="bg-dhl-yellow text-dhl-black rounded-2xl p-6 sm:p-7 border-4 border-dhl-red shadow-lg relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-dhl-red text-white rounded-xl flex-shrink-0 shadow-sm">
                <Clock className="w-7 h-7 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-dhl-black text-white px-2 py-0.5 rounded">
                  Maersk-Style SLA Guarantee
                </span>
                <h4 className="text-lg font-black uppercase font-heading mt-1.5 leading-tight text-dhl-black">
                  Response Time Commitment
                </h4>
                <p className="text-xs sm:text-sm font-semibold mt-1 text-zinc-900 leading-relaxed">
                  "{companyInfo.responsePromise}"
                </p>
                <div className="mt-2 text-[11px] font-bold text-zinc-800">
                  Business Hours: {companyInfo.operatingHours}
                </div>
              </div>
            </div>
          </div>

          {/* Central Malaysia Hub Details Card */}
          <div className="bg-dhl-black text-white rounded-2xl p-6 sm:p-7 border-2 border-zinc-800 shadow-xl space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
              <div className="p-2.5 bg-dhl-yellow text-dhl-black rounded-lg">
                <MapPin className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-black uppercase font-heading text-white">
                  Central Malaysia Operational Hub
                </h4>
                <p className="text-xs text-zinc-400">Headquarters, Cross-Dock & QC Bays</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-dhl-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Physical Facility Address:</span>
                  <span className="text-zinc-300 leading-relaxed">{companyInfo.address}</span>
                  <span className="block text-[11px] text-dhl-yellow mt-0.5">{companyInfo.hubLocationSummary}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-dhl-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Direct Desk & Hotline:</span>
                  <a href={`tel:${companyInfo.phone}`} className="text-zinc-200 hover:text-dhl-yellow">
                    {companyInfo.phoneDisplay} (General)
                  </a>
                  <span className="block text-zinc-400">
                    Hotline: {companyInfo.dispatchHotline}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-dhl-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Official Dispatch Email:</span>
                  <a href={`mailto:${companyInfo.dispatchEmail}`} className="text-zinc-200 hover:text-dhl-yellow">
                    {companyInfo.dispatchEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="pt-2 border-t border-zinc-800">
              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Direct with Duty Coordinator</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map Stylized Representation */}
          <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md bg-zinc-900 aspect-video relative flex items-center justify-center">
            {/* Map Frame Graphic */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative text-center p-4">
              <div className="w-10 h-10 bg-dhl-red rounded-full flex items-center justify-center text-white mx-auto mb-2 animate-bounce">
                <MapPin className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-black text-xs uppercase text-white tracking-wider block">
                Shah Alam Seksyen 15 Hub
              </span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                Latitude 3.0583° N, Longitude 101.5283° E
              </span>
              <a
                href="https://maps.google.com/?q=Shah+Alam+Industrial+Zone+Selangor+Malaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[10px] bg-dhl-yellow text-dhl-black font-extrabold px-3 py-1 rounded uppercase tracking-wider hover:bg-yellow-400"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
