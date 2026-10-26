import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner({ onOpenPrivacy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ramsydex_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('ramsydex_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 text-white border-t-2 border-dhl-yellow p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-dhl-yellow text-dhl-black rounded-lg flex-shrink-0">
            <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
          </div>
          <p className="text-zinc-300">
            We use essential cookies to maintain form states and ensure rapid routing performance across our logistics portal. 
            By continuing, you agree in accordance with Malaysia PDPA regulations.{' '}
            <button 
              onClick={onOpenPrivacy}
              className="text-dhl-yellow underline font-bold hover:text-white"
            >
              Privacy Notice
            </button>
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={acceptCookies}
            className="bg-dhl-red hover:bg-dhl-red-hover text-white font-extrabold uppercase tracking-wider px-6 py-2 rounded-full text-xs transition-colors shadow"
          >
            Accept & Proceed
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zinc-400 hover:text-white p-1 rounded"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
