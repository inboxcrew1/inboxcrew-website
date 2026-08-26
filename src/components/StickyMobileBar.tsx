import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenContact: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenContact }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 block md:hidden p-2.5 bg-black/90 backdrop-blur-xl border-t border-blue-500/30 font-mono select-none shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href="tel:+918534040174"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-[11px] font-bold tracking-wider active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918534040174?text=Hello%20InboxCrew%20Team!%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold tracking-wider active:scale-95 transition-all shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Free Consultation / Quote */}
        <button
          onClick={onOpenContact}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-blue-400/50"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
};
