import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InboxCrewLogo } from './InboxCrewLogo';

interface SystemBootProps {
  onComplete: () => void;
}

export const SystemBoot: React.FC<SystemBootProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if previously loaded in session for instant experience, otherwise run fast sequence
    const hasBooted = sessionStorage.getItem('ibc_booted');
    const delayMultiplier = hasBooted ? 0.4 : 1.0;

    const t1 = setTimeout(() => setStep(1), 250 * delayMultiplier);
    const t2 = setTimeout(() => setStep(2), 500 * delayMultiplier);
    const t3 = setTimeout(() => setStep(3), 750 * delayMultiplier);
    const t4 = setTimeout(() => setStep(4), 1000 * delayMultiplier);
    const t5 = setTimeout(() => setStep(5), 1250 * delayMultiplier);
    const t6 = setTimeout(() => {
      setIsDone(true);
      sessionStorage.setItem('ibc_booted', 'true');
      setTimeout(onComplete, 400);
    }, 1500 * delayMultiplier);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 text-white font-mono select-none overflow-hidden"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          {/* Subtle background glow and 24px dot grid */}
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Center boot card */}
          <div className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-blue-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,102,255,0.25)]">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <InboxCrewLogo size="sm" withGlow={true} />
                <span className="text-xs font-bold tracking-widest text-white uppercase font-sans">
                  INBOXCREW
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                <span>SYS // BOOT</span>
              </div>
            </div>

            {/* Boot Sequence Lines */}
            <div className="space-y-3 text-xs tracking-wider">
              <div className="text-blue-300 font-bold">
                DIGITAL SYSTEM INITIALIZING...
              </div>

              <div className="space-y-1.5 text-zinc-400 pt-2 font-mono text-[11px]">
                <div className="flex items-center justify-between">
                  <span>CREATIVE ENGINE</span>
                  <span className={step >= 1 ? 'text-emerald-400 font-bold' : 'text-zinc-600'}>
                    {step >= 1 ? '........ READY' : '........ PENDING'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>BRAND SYSTEM</span>
                  <span className={step >= 2 ? 'text-emerald-400 font-bold' : 'text-zinc-600'}>
                    {step >= 2 ? '........... READY' : '........... PENDING'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>WEB ENGINE</span>
                  <span className={step >= 3 ? 'text-emerald-400 font-bold' : 'text-zinc-600'}>
                    {step >= 3 ? '............. READY' : '............. PENDING'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>GROWTH SYSTEM</span>
                  <span className={step >= 4 ? 'text-emerald-400 font-bold' : 'text-zinc-600'}>
                    {step >= 4 ? '.......... READY' : '.......... PENDING'}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden mt-4 border border-blue-500/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300 shadow-[0_0_10px_#0066ff]"
                  initial={{ width: '5%' }}
                  animate={{ width: `${Math.min(100, (step / 5) * 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* System Online Final Label */}
              <div className="pt-2 text-center">
                {step >= 5 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-[11px] text-emerald-300 font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYSTEM ONLINE</span>
                  </motion.div>
                ) : (
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    SYNCING DIGITAL LAB MATRIX...
                  </span>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
