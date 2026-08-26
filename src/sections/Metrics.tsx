import React from 'react';
import { motion } from 'framer-motion';
import { MetricCard } from '../components/MetricCard';
import { VideoBackground } from '../components/VideoBackground';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';
import { ScannerLine } from '../components/ScannerLine';
import { Terminal, TrendingUp, ShieldCheck } from 'lucide-react';

export const Metrics: React.FC = () => {
  const capabilityPillars = [
    {
      number: '01',
      title: 'Digital Experience',
      subtitle: 'High-performance web architecture, conversion-focused UI/UX, and sub-second load times built for modern web standards.',
    },
    {
      number: '02',
      title: 'Brand Systems',
      subtitle: 'Distinctive visual identity, cohesive digital presence, and strategic positioning that makes businesses memorable.',
    },
    {
      number: '03',
      title: 'Growth Solutions',
      subtitle: 'Multi-channel digital marketing, Meta Ads campaigns, and ROI-driven conversion optimization engineered to scale.',
    },
  ];

  return (
    <section
      id="growth"
      className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-black py-24 px-6 sm:px-12 font-mono select-none"
    >
      {/* Laser Scanning Line */}
      <ScannerLine duration={7} color="rgba(0, 102, 255, 0.3)" />

      {/* Background Media */}
      <VideoBackground
        poster="/assets/images/laptop_dashboard.jpg"
        overlayOpacity={0.86}
        accentGlow={true}
      />

      {/* SVG Circuit Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-10">
        <SvgNetworkGraph variant="neural" strokeColor="#0066ff" className="w-full h-full" />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>GROWTH // ENGINE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase font-sans mb-4"
          >
            BUILT FOR GROWTH.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed"
          >
            Engineering measurable momentum across every digital touchpoint with precision design and scalable technology.
          </motion.p>
        </div>

        {/* 3-Column Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {capabilityPillars.map((pillar, idx) => (
            <MetricCard
              key={pillar.number}
              number={pillar.number}
              title={pillar.title}
              subtitle={pillar.subtitle}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400"
        >
          <span>MEASURABLE VALUE ACROSS STRATEGY, DESIGN & TECHNOLOGY</span>
          <span className="text-blue-400 font-bold">INBOXCREW GROWTH SYSTEM</span>
        </motion.div>

      </div>
    </section>
  );
};
