import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DigitalGlitchProps {
  children: React.ReactNode;
  trigger?: boolean;
  onGlitchComplete?: () => void;
  className?: string;
}

export const DigitalGlitch: React.FC<DigitalGlitchProps> = ({
  children,
  trigger = false,
  onGlitchComplete,
  className = '',
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsGlitching(true);
      const timer = setTimeout(() => {
        setIsGlitching(false);
        if (onGlitchComplete) onGlitchComplete();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [trigger, onGlitchComplete]);

  if (!isGlitching) return <div className={className}>{children}</div>;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Red Shift */}
      <motion.div
        className="absolute inset-0 opacity-70 mix-blend-screen text-red-500 pointer-events-none translate-x-[2px] translate-y-[-1px]"
        animate={{ x: [-2, 3, -1, 0], opacity: [0.8, 0.4, 0.9, 0] }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Cyan Shift */}
      <motion.div
        className="absolute inset-0 opacity-70 mix-blend-screen text-cyan-400 pointer-events-none translate-x-[-2px] translate-y-[1px]"
        animate={{ x: [2, -3, 1, 0], opacity: [0.8, 0.5, 0.9, 0] }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Base Content with Horizontal Clip Distortion */}
      <motion.div
        animate={{
          clipPath: [
            'inset(0 0 0 0)',
            'inset(20% 0 35% 0)',
            'inset(65% 0 10% 0)',
            'inset(0 0 0 0)',
          ],
        }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Scanline Sweep Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-1 pointer-events-none animate-[scanline_0.25s_linear]" />
    </div>
  );
};
