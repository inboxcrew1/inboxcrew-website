import React from 'react';
import { motion } from 'framer-motion';

interface ScannerLineProps {
  className?: string;
  duration?: number;
  color?: string;
}

export const ScannerLine: React.FC<ScannerLineProps> = ({
  className = '',
  duration = 4,
  color = 'rgba(59, 130, 246, 0.4)',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-20 ${className}`} aria-hidden="true">
      <motion.div
        className="w-full h-[1px] shadow-[0_0_12px_#3b82f6]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, #60a5fa, ${color}, transparent)`,
        }}
        animate={{ y: ['-5%', '105%'] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
