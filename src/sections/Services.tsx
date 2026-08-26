import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
import { VideoBackground } from '../components/VideoBackground';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';
import { ScannerLine } from '../components/ScannerLine';
import { Terminal, Shield, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      number: '01',
      title: 'Website Development',
      description: 'High-performance websites designed to turn attention into action.',
      systemCode: 'WEB',
      iconName: 'globe' as const,
    },
    {
      number: '02',
      title: 'E-commerce',
      description: 'Modern online stores built for strong product presentation and scalable growth.',
      systemCode: 'ECOM',
      iconName: 'cart' as const,
    },
    {
      number: '03',
      title: 'Branding',
      description: 'Distinctive visual identities that make businesses recognizable and memorable.',
      systemCode: 'BRAND',
      iconName: 'branding' as const,
    },
    {
      number: '04',
      title: 'Digital Marketing',
      description: 'Strategic digital campaigns and social presence designed to connect brands with the right audience.',
      systemCode: 'GROWTH',
      iconName: 'marketing' as const,
    },
  ];

  const capabilityBadges = [
    'Social Media Marketing',
    'Meta Ads & ROI Campaigns',
    'UI/UX Product Design',
    'Digital Business Solutions',
    'Creative Direction',
    'Performance Optimization',
  ];

  const workflowSteps = ['IDEA', 'DESIGN', 'BUILD', 'LAUNCH', 'GROW'];

  return (
    <section
      id="services"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black py-24 px-6 sm:px-12 font-mono select-none"
    >
      {/* Laser Scanning Line */}
      <ScannerLine duration={7} color="rgba(0, 102, 255, 0.3)" />

      {/* Background Media */}
      <VideoBackground
        poster="/assets/images/agency_workspace.jpg"
        overlayOpacity={0.88}
        accentGlow={true}
      />

      {/* SVG Background Circuits */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10">
        <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-16">
          
          {/* Left Heading */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>SERVICES // DIGITAL_SYSTEMS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase leading-[1.08] font-sans"
            >
              DIGITAL SYSTEMS
            </motion.h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 lg:text-right flex flex-col items-start lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed"
            >
              From websites and e-commerce to branding and digital marketing, InboxCrew brings creative thinking, technology and strategy together to build solutions around real business goals.
            </motion.p>
          </div>

        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              systemCode={service.systemCode}
              iconName={service.iconName}
              index={index}
            />
          ))}
        </div>

        {/* Supporting Capability Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {capabilityBadges.map((badge, idx) => (
            <div
              key={idx}
              className="glass-pill px-3.5 py-1.5 rounded-full text-[11px] font-mono text-zinc-300 border border-blue-500/25 bg-blue-950/20 backdrop-blur-md flex items-center gap-2 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

        {/* SVG Circuit Workflow: IDEA -> DESIGN -> BUILD -> LAUNCH -> GROW */}
        <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-950/20 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-2 mb-4 text-[10px] text-blue-400 uppercase tracking-widest">
            <span>SYSTEM PIPELINE ARCHITECTURE</span>
            <span>END-TO-END EXECUTION</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="font-bold text-white tracking-widest">{step}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <span className="text-blue-500/60 font-bold hidden sm:inline-block">────────▶</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
