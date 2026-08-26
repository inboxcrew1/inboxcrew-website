import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Sparkles, TrendingUp, LucideIcon, Cpu, CheckCircle } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  iconName?: 'globe' | 'cart' | 'branding' | 'marketing';
  systemCode: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  cart: ShoppingCart,
  branding: Sparkles,
  marketing: TrendingUp,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  iconName = 'globe',
  systemCode,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[iconName] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard3D maxTilt={12} glareOpacity={0.25} scale={1.02} className="h-full">
        <div className="group relative h-full p-6 sm:p-7 rounded-2xl border border-blue-500/20 bg-zinc-950/60 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:border-blue-500/50 hover:bg-blue-950/20 hover:shadow-[0_0_35px_rgba(0,102,255,0.25)] overflow-hidden">
          
          {/* Scanline pass effect on hover */}
          {isHovered && (
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{ duration: 0.7, ease: 'linear', repeat: Infinity }}
              className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent pointer-events-none z-20"
            />
          )}

          {/* Top Row: Digital Node Status & Icon */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-blue-400 tracking-widest">
                  {number}
                </span>
                <span className="text-zinc-700">|</span>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.5)] transition-all duration-300">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors font-sans">
              {title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
              {description}
            </p>
          </div>

          {/* Bottom Technical Metadata Layer */}
          <div className="mt-6 pt-4 border-t border-blue-500/20 flex flex-col gap-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-blue-400">SYSTEM: {systemCode}</span>
              <span className="text-zinc-500">MODULE: {number}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-500 group-hover:text-blue-300 transition-colors">
              <span>STATUS: READY</span>
              <span className="text-blue-400 font-bold group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

        </div>
      </TiltCard3D>
    </motion.div>
  );
};
