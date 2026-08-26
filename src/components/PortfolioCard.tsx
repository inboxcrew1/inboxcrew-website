import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Shield, ArrowUpRight, Eye } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  name: string;
  category: string;
  description: string;
  system: string;
  image: string;
  tags: string[];
  aspectRatio?: 'wide' | 'tall' | 'square';
}

interface PortfolioCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 250); // Controlled 250ms glitch
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsGlitching(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TiltCard3D maxTilt={8} glareOpacity={0.2} scale={1.015} className="w-full h-full">
        <div
          onClick={() => onSelect(project)}
          className="group relative w-full h-full min-h-[360px] sm:min-h-[420px] rounded-2xl border border-blue-500/25 bg-zinc-950/70 backdrop-blur-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)]"
        >
          {/* Background Image with subtle zoom & controlled RGB Glitch displacement */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-700 ease-out ${
                isHovered ? 'scale-108' : 'scale-100'
              } ${isGlitching ? 'filter hue-rotate-90 translate-x-1 -translate-y-1' : ''}`}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            />

            {/* Dark & Blue Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/40 transition-colors" />
            <div className="absolute inset-0 bg-blue-950/30 mix-blend-color" />
          </div>

          {/* SVG Scanline on hover */}
          {isHovered && (
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{ duration: 0.65, ease: 'linear', repeat: Infinity }}
              className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent pointer-events-none z-20"
            />
          )}

          {/* Top Row: System Tag & Arrow Action */}
          <div className="relative z-20 p-6 flex items-center justify-between">
            <div className="glass-pill px-3 py-1 rounded-full text-[10px] font-mono text-blue-300 border border-blue-500/30 bg-black/60 backdrop-blur-md flex items-center gap-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>PROJECT // {project.projectNumber}</span>
            </div>

            <div className="w-9 h-9 rounded-full bg-black/70 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,102,255,0.5)] transition-all">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Bottom Content Area: Name, Category, Description & System Telemetry */}
          <div className="relative z-20 p-6 pt-0 space-y-3">
            
            {/* Category */}
            <div className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
              {project.category}
            </div>

            {/* Project Name */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase font-sans group-hover:text-blue-300 transition-colors">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-[9px] font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Technical Metadata Box (Specified in Section 32) */}
            <div className="pt-3 mt-2 border-t border-blue-500/20 grid grid-cols-2 gap-2 text-[9px] font-mono text-zinc-400">
              <div>
                <span className="text-zinc-500">BUILD STATUS:</span>{' '}
                <span className="text-emerald-400">COMPLETE</span>
              </div>
              <div className="text-right">
                <span className="text-zinc-500">SYSTEM:</span>{' '}
                <span className="text-blue-400">{project.system}</span>
              </div>
            </div>

          </div>

        </div>
      </TiltCard3D>
    </motion.div>
  );
};
