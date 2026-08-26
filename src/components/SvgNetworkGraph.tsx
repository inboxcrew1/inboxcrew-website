import React from 'react';
import { motion } from 'framer-motion';

interface SvgNetworkGraphProps {
  className?: string;
  variant?: 'circuit' | 'neural' | 'grid' | 'nodes';
  progress?: number;
  strokeColor?: string;
}

export const SvgNetworkGraph: React.FC<SvgNetworkGraphProps> = ({
  className = '',
  variant = 'circuit',
  strokeColor = '#3b82f6',
}) => {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      {variant === 'circuit' && (
        <svg viewBox="0 0 800 400" className="w-full h-full" fill="none">
          <motion.path
            d="M 50 200 H 200 L 250 150 H 450 L 500 200 H 650 L 700 250 H 750"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeOpacity="0.4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.path
            d="M 100 280 H 220 L 270 230 H 400 L 450 280 H 600"
            stroke={strokeColor}
            strokeWidth="1"
            strokeOpacity="0.25"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Pulsing Circuit Nodes */}
          <circle cx="200" cy="200" r="3" fill="#60a5fa" />
          <circle cx="500" cy="200" r="3" fill="#60a5fa" />
          <circle cx="700" cy="250" r="3" fill="#60a5fa" />
          <circle cx="220" cy="280" r="2.5" fill="#38bdf8" />
          <circle cx="450" cy="280" r="2.5" fill="#38bdf8" />
        </svg>
      )}

      {variant === 'neural' && (
        <svg viewBox="0 0 1000 300" className="w-full h-full" fill="none">
          {/* Connected Pathways between 4 Core Pillars: Strategy -> Design -> Technology -> Growth */}
          <motion.path
            d="M 125 150 C 250 80, 250 220, 375 150 S 500 80, 625 150 S 750 220, 875 150"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.path
            d="M 125 150 H 875"
            stroke={strokeColor}
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          {/* Interactive Nodes */}
          {[125, 375, 625, 875].map((cx, i) => (
            <g key={cx}>
              <circle cx={cx} cy="150" r="6" fill="#040814" stroke={strokeColor} strokeWidth="2" />
              <circle cx={cx} cy="150" r="2.5" fill="#60a5fa" className="animate-ping" />
            </g>
          ))}
        </svg>
      )}

      {variant === 'grid' && (
        <svg viewBox="0 0 600 600" className="w-full h-full opacity-20" fill="none">
          <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={strokeColor} strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="0" cy="0" r="1" fill={strokeColor} fillOpacity="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      )}
    </div>
  );
};
