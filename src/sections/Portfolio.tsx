import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCard, ProjectItem } from '../components/PortfolioCard';
import { VideoBackground } from '../components/VideoBackground';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';
import { ScannerLine } from '../components/ScannerLine';
import { Terminal, Shield, Sparkles, X, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const projects: ProjectItem[] = [
    {
      id: 'pourze-dtc',
      projectNumber: '01',
      name: 'Pourze Luxe DTC',
      category: 'E-Commerce Platform',
      description: 'Headless high-conversion e-commerce ecosystem with custom 3D product showcase and sub-second checkout pipeline.',
      system: 'ECOM_CORE',
      image: '/assets/images/laptop_dashboard.jpg',
      tags: ['Next.js', 'Shopify Plus', 'Tailwind', '3D Configurator'],
      aspectRatio: 'wide',
    },
    {
      id: 'aura-hospitality',
      projectNumber: '02',
      name: 'Aura Retreats & Resorts',
      category: 'Brand & Web Experience',
      description: 'Immersive visual identity and direct-booking digital gateway engineered for luxury resort hospitality.',
      system: 'EXPERIENCE_ENGINE',
      image: '/assets/images/instagram_resort.jpg',
      tags: ['Brand Identity', 'Direct Booking', 'Motion Design', 'SEO'],
      aspectRatio: 'tall',
    },
    {
      id: 'matrix-agency-os',
      projectNumber: '03',
      name: 'Global Node System',
      category: 'Web Application',
      description: 'Distributed web infrastructure and analytics suite built to scale cross-border digital operations.',
      system: 'WEB_APPLICATION',
      image: '/assets/images/digital_globe.jpg',
      tags: ['React', 'TypeScript', 'WebSockets', 'Telemetry'],
      aspectRatio: 'tall',
    },
    {
      id: 'culinary-craft',
      projectNumber: '04',
      name: 'Craft Cafe & Dining',
      category: 'Digital Marketing & Growth',
      description: 'Full-funnel Meta Ads strategy, content production, and omnichannel acquisition engine delivering verified ROI.',
      system: 'GROWTH_PIPELINE',
      image: '/assets/images/instagram_cafe.jpg',
      tags: ['Meta Ads', 'Social Strategy', 'Creative Direction', 'Analytics'],
      aspectRatio: 'wide',
    },
  ];

  const categories = ['ALL', 'E-Commerce', 'Web Experience', 'Brand Systems', 'Growth'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) =>
        p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black py-24 px-6 sm:px-12 font-mono select-none"
    >
      {/* Laser Scanning Line */}
      <ScannerLine duration={8} color="rgba(0, 102, 255, 0.3)" />

      {/* Background Media */}
      <VideoBackground
        poster="/assets/images/office_cabin.jpg"
        overlayOpacity={0.88}
        accentGlow={true}
      />

      {/* SVG Background Circuits */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-10">
        <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          
          {/* Left Heading */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>PORTFOLIO // SELECTED_WORK</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase leading-[1.08] font-sans"
            >
              SELECTED WORK
            </motion.h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-5 lg:text-right flex flex-col items-start lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed"
            >
              A selection of digital experiences, websites, e-commerce platforms and brand systems created for businesses and startups.
            </motion.p>
          </div>

        </div>

        {/* Editorial Asymmetrical Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-16">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical grid column span: first & fourth take 7 cols, second & third take 5 cols
            const colSpan = idx % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <div key={project.id} className={colSpan}>
                <PortfolioCard
                  project={project}
                  index={idx}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="pt-6 border-t border-blue-500/20 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold tracking-wider">PORTFOLIO MATRIX LIVE</span>
          </div>
          <span className="text-blue-400">BUILD STATUS // VERIFIED PRODUCTION</span>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl border border-blue-500/40 bg-zinc-950/95 p-6 sm:p-10 text-white shadow-[0_0_60px_rgba(0,102,255,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 text-xs text-blue-400 mb-4 font-mono">
                <span>PROJECT // {selectedProject.projectNumber}</span>
                <span>•</span>
                <span className="text-emerald-400">BUILD STATUS: COMPLETE</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2 font-sans">
                {selectedProject.name}
              </h3>
              
              <div className="text-sm font-mono text-blue-300 mb-6">
                {selectedProject.category}
              </div>

              {/* Image Preview */}
              <div
                className="w-full h-64 sm:h-80 rounded-xl bg-cover bg-center mb-6 border border-blue-500/30"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              />

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-mono mb-6">
                {selectedProject.description}
              </p>

              {/* Tags & System Specs */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 mb-6">
                <div className="text-xs text-blue-400 uppercase tracking-widest font-mono mb-3">
                  SYSTEM SPECIFICATIONS
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-black/60 border border-blue-500/30 text-xs font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  CLOSE INSPECTOR
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
