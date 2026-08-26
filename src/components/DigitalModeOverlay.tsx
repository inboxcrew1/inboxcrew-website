import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Activity, Cpu, Zap, Wifi } from 'lucide-react';
import { HackerTypeLayer } from './HackerTypeLayer';
import { SvgNetworkGraph } from './SvgNetworkGraph';

interface DigitalModeOverlayProps {
  isActive: boolean;
  onDeactivate: () => void;
}

export const DigitalModeOverlay: React.FC<DigitalModeOverlayProps> = ({
  isActive,
  onDeactivate,
}) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!isActive) return;

    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onDeactivate();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, onDeactivate]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[300] bg-blue-950/80 backdrop-blur-2xl text-white font-mono select-none overflow-hidden flex flex-col justify-between p-6 sm:p-12 pointer-events-none"
        >
          {/* Intense Overdrive Dot Grid */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#0066ff_1.5px,transparent_1.5px)] opacity-35"
            style={{ backgroundSize: '20px 20px' }}
          />

          {/* Rapid Laser Scanline */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '200%' }}
            transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
            className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent pointer-events-none"
          />

          {/* SVG Neural Mesh */}
          <div className="absolute inset-0 opacity-40">
            <SvgNetworkGraph variant="neural" strokeColor="#38bdf8" className="w-full h-full" />
          </div>

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-blue-400/40 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300">
                INBOXCREW // DIGITAL LAB OVERDRIVE ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <Activity className="w-4 h-4 animate-pulse text-cyan-300" />
              <span>DURATION: {countdown}s</span>
            </div>
          </div>

          {/* Center Stage */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400 text-xs text-blue-300 font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(0,102,255,0.6)]">
              <Zap className="w-4 h-4 text-cyan-300" />
              <span>QUANTUM DIGITAL NODE ENGAGED</span>
            </div>

            <h2 className="text-3xl sm:text-6xl font-bold uppercase tracking-tight text-white font-sans drop-shadow-[0_0_30px_rgba(0,102,255,0.8)]">
              INBOXCREW DIGITAL MODE
            </h2>

            <p className="text-xs sm:text-sm text-cyan-200 max-w-lg font-mono">
              BUILD • BRAND • GROW // FULL-STACK CREATIVE INFRASTRUCTURE SYNCHRONIZED
            </p>

            {/* Decorative Real-Time Code Stream */}
            <div className="w-full max-w-xl">
              <HackerTypeLayer speed={50} theme="blue" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between border-t border-blue-400/40 pt-4 text-[11px] text-blue-300">
            <span>NODES: 64 // LATENCY: 0.02ms</span>
            <span>AUTO-RESET IN {countdown} SECONDS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
