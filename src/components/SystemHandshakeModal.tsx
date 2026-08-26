import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, CheckCircle2, Cpu } from 'lucide-react';
import { InboxCrewLogo } from './InboxCrewLogo';

interface SystemHandshakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemHandshakeModal: React.FC<SystemHandshakeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [progress, setProgress] = useState(12);
  const [stepText, setStepText] = useState('ALLOCATING MEMORY BLOCKS...');

  useEffect(() => {
    if (!isOpen) {
      setProgress(12);
      return;
    }

    const timer1 = setTimeout(() => {
      setProgress(48);
      setStepText('ESTABLISHING QUANTUM PIPELINE...');
    }, 500);

    const timer2 = setTimeout(() => {
      setProgress(84);
      setStepText('CALIBRATING CREATIVE ENGINE NODES...');
    }, 1100);

    const timer3 = setTimeout(() => {
      setProgress(98);
      setStepText('SYSTEM READY: BUILD. BRAND. GROW.');
    }, 1700);

    const timer4 = setTimeout(() => {
      setProgress(100);
      setStepText('TRANSMISSION COMPLETE');
    }, 2400);

    const timer5 = setTimeout(() => {
      onClose();
    }, 2900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-[#001d4a] flex flex-col justify-between p-8 sm:p-16 text-white font-mono select-none overflow-hidden"
        >
          {/* Subtle Scanlines & Grid */}
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#0066ff_1px,transparent_1px)] opacity-20 pointer-events-none" style={{ backgroundSize: '32px 32px' }} />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-blue-400/30 pb-4">
            <div className="flex items-center gap-3">
              <InboxCrewLogo size="sm" />
              <span className="text-xs uppercase tracking-widest text-blue-200">
                INBOXCREW // SYSTEM_INITIALIZATION_v3.0
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <Cpu className="w-4 h-4 animate-spin" />
              <span>CORE_DIAGNOSTIC: ACTIVE</span>
            </div>
          </div>

          {/* Center Main Stage */}
          <div className="relative z-10 max-w-3xl my-auto space-y-6">
            <div className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans">
              :(
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              INBOXCREW SYSTEM DIGITAL EXPERIENCE INITIALIZING...
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-blue-200">
              <p>BUILD • BRAND • GROW</p>
              <p className="text-blue-300 font-bold">{stepText}</p>
            </div>

            {/* High-Tech Progress Bar */}
            <div className="w-full bg-blue-950/80 rounded-full h-3 border border-blue-400/40 p-0.5 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full shadow-[0_0_15px_#38bdf8]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="flex justify-between items-center text-xs text-blue-300 font-mono pt-1">
              <span>PROGRESS: {progress}%</span>
              <span>STOP_CODE: IBC_CREATIVE_SUCCESS</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-blue-300 border-t border-blue-400/30 pt-4 gap-2">
            <span>QR://SCAN_TO_INITIATE_PROJECT</span>
            <span>PRESS ESC OR WAIT TO RESUME DIGITAL INTERFACE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
