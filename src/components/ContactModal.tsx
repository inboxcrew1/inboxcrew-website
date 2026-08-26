import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Terminal, Lock, ShieldCheck, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { InboxCrewLogo } from './InboxCrewLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  'Digital Growth Package — All-in-One Launch (₹35,000)',
  'Professional Website (₹15,000)',
  'Starter Website (₹6,000)',
  'E-Commerce Store (₹25,000)',
  'Instagram Management — Basic Growth (₹8,000/mo)',
  'Instagram Management — Business Growth (₹15,000/mo)',
  'Instagram Management — Premium Brand (₹25,000/mo)',
  'Reels & Content Creation (From ₹500)',
  'Product Photography & Business Shoots (From ₹2,500)',
  'Branding Services & Visual Identity',
  'Custom Digital Growth Strategy',
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Digital Growth Package — All-in-One Launch (₹35,000)',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello InboxCrew Team! I am interested in *${formData.service}*. My name is ${formData.name || 'a client'}. Let's discuss!`
    );
    window.open(`https://wa.me/918534040174?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: initialService,
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-xl bg-[#040814] border border-blue-500/30 rounded-2xl shadow-[0_0_60px_rgba(0,102,255,0.3)] p-6 sm:p-8 z-10 my-auto text-left overflow-hidden font-mono"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Cyber Corner Decors */}
            <div className="absolute top-2 left-2 text-[10px] text-blue-500/50">┌ 0x01_TERMINAL</div>
            <div className="absolute top-2 right-12 text-[10px] text-blue-500/50">ENCRYPTED ┐</div>
            <div className="absolute bottom-2 left-2 text-[10px] text-blue-500/50">└ PROTOCOL_v3.0</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-blue-500/50">+91 8534040174 ┘</div>

            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-4 mb-5 pt-2">
              <div className="flex items-center gap-3">
                <InboxCrewLogo size="sm" withGlow={true} />
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                    INITIALIZE_PROJECT // INBOXCREW
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                  PAYLOAD_TRANSMITTED
                </h3>
                <p className="text-xs text-zinc-300 max-w-md font-mono leading-relaxed">
                  [CONFIRMED] Your inquiry for <span className="text-blue-400 font-bold">{formData.service}</span> has been logged. Our team will contact you shortly at <span className="text-white font-bold">{formData.email}</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Chat</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
                  >
                    DISMISS
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] text-zinc-400">
                    <span className="text-blue-400">root@ibc:~$</span>{' '}
                    <span>initialize_project_brief()</span>
                  </div>
                  <a
                    href="tel:+918534040174"
                    className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-mono"
                  >
                    <Phone className="w-3 h-3" />
                    <span>+91 8534040174</span>
                  </a>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                        YOUR NAME / BRAND
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul S. / Brand Name"
                        className="w-full px-3 py-2 rounded-lg bg-black/60 border border-blue-500/30 text-white text-xs focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-zinc-600 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                        WHATSAPP / PHONE
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg bg-black/60 border border-blue-500/30 text-white text-xs focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-zinc-600 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                      WORK EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className="w-full px-3 py-2 rounded-lg bg-black/60 border border-blue-500/30 text-white text-xs focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-zinc-600 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                      SELECTED PACKAGE / SERVICE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#020510] border border-blue-500/40 text-white text-xs focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors cursor-pointer font-mono"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                      PROJECT GOALS & NOTES
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target milestones, deliverables or timeline..."
                      className="w-full px-3 py-2 rounded-lg bg-black/60 border border-blue-500/30 text-white text-xs focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-zinc-600 transition-colors resize-none font-mono"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Us</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all active:scale-95 disabled:opacity-50 shadow-[0_0_20px_rgba(0,102,255,0.5)] cursor-pointer border border-blue-400/50"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SUBMIT INQUIRY'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
