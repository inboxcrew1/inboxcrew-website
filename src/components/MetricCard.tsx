import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard3D } from './TiltCard3D';

interface MetricCardProps {
  number: string;
  title: string;
  subtitle: string;
  index: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  number,
  title,
  subtitle,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard3D maxTilt={12} glareOpacity={0.25} scale={1.02} className="h-full">
        <div className="relative h-full p-6 sm:p-8 rounded-2xl border border-blue-500/25 bg-zinc-950/70 backdrop-blur-xl text-left flex flex-col justify-between group hover:border-blue-400 hover:bg-blue-950/20 hover:shadow-[0_0_35px_rgba(0,102,255,0.25)] transition-all duration-300">
          <div>
            <div className="font-display text-4xl sm:text-5xl text-blue-400 mb-4 tracking-wider group-hover:text-blue-300 transition-colors drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]">
              {number}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight font-sans">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-blue-500/20 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
            <span className="text-blue-400">GROWTH PILLAR {number}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_10px_#0066ff]" />
          </div>
        </div>
      </TiltCard3D>
    </motion.div>
  );
};
