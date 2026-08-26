import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { VideoBackground } from '../components/VideoBackground';
import { HologramSphere3D } from '../components/HologramSphere3D';
import { ScannerLine } from '../components/ScannerLine';
import { Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Precise spring configuration specified in Section 25: stiffness: 15, damping: 32, mass: 1.8
  const springConfig = { stiffness: 15, damping: 32, mass: 1.8 };

  const rawRotateX = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [12, 0, -12]);
  const rawTranslateY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [40, 0, -40]);
  const rawTranslateZ = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [-60, 20, -60]);
  const rawOpacity = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [0.4, 1, 1, 0.4]);

  const rotateX = useSpring(rawRotateX, springConfig);
  const translateY = useSpring(rawTranslateY, springConfig);
  const translateZ = useSpring(rawTranslateZ, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);

  // SVG Circuit path drawing progress based on scroll
  const pathLength = useSpring(useTransform(scrollYProgress, [0.2, 0.7], [0, 1]), {
    stiffness: 40,
    damping: 20,
  });

  const node1Active = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const node2Active = useTransform(scrollYProgress, [0.38, 0.48], [0, 1]);
  const node3Active = useTransform(scrollYProgress, [0.51, 0.61], [0, 1]);
  const node4Active = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black py-24 px-6 sm:px-12 font-mono"
      style={{ perspective: '900px' }}
    >
      {/* Horizontal Laser Scanner Line */}
      <ScannerLine duration={6} color="rgba(0, 102, 255, 0.35)" />

      {/* Cinematic Background Media */}
      <VideoBackground
        poster="/assets/images/digital_globe.jpg"
        overlayOpacity={0.82}
        accentGlow={true}
      />

      {/* Top and bottom transition gradients */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* 3D Holographic Centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 z-10">
        <HologramSphere3D size={480} />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none z-10" />

      {/* Main 3D Scroll Perspective Container */}
      <div className="relative z-20 w-full max-w-[1050px] mx-auto text-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-8 shadow-[0_0_15px_rgba(0,102,255,0.25)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span>ABOUT // BRAND STATEMENT</span>
        </motion.div>

        {/* 3D Scroll-Driven Main Copy */}
        <motion.div
          style={{
            rotateX,
            y: translateY,
            z: translateZ,
            opacity,
            transformStyle: 'preserve-3d',
          }}
          className="will-change-transform space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-[1.08] font-sans drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            WE BUILD WHAT MOVES BRANDS FORWARD.
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto font-sans leading-relaxed drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]">
            InboxCrew is a creative digital agency helping businesses and startups build, brand, and grow online through design, technology and digital strategy.
          </p>

          <p className="text-sm sm:text-lg font-bold text-blue-400 tracking-widest uppercase pt-2 drop-shadow-[0_0_20px_rgba(0,102,255,0.5)]">
            Strategy. Design. Technology. Growth.
          </p>
        </motion.div>

        {/* Dynamic Self-Drawing SVG Circuitry */}
        <div className="w-full max-w-3xl mx-auto my-10 relative">
          <svg viewBox="0 0 800 60" fill="none" className="w-full h-12 overflow-visible">
            {/* Background dashed path */}
            <path
              d="M 50 30 L 250 30 L 450 30 L 650 30 L 750 30"
              stroke="rgba(0, 102, 255, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Animated solid path */}
            <motion.path
              d="M 50 30 L 250 30 L 450 30 L 650 30 L 750 30"
              stroke="#0066FF"
              strokeWidth="2.5"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* 4 Connected Active Nodes (Strategy -> Design -> Technology -> Growth) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs font-mono uppercase tracking-widest">
          
          {/* Node 1: STRATEGY */}
          <div className="p-3 rounded-xl border border-blue-500/30 bg-blue-950/20 backdrop-blur-md flex flex-col items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,102,255,0.15)]">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-[10px] text-blue-300 font-bold">
              01
            </div>
            <span className="text-white font-bold">STRATEGY</span>
            <span className="text-[10px] text-blue-400">DIRECTION</span>
          </div>

          {/* Node 2: DESIGN */}
          <div className="p-3 rounded-xl border border-blue-500/30 bg-blue-950/20 backdrop-blur-md flex flex-col items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,102,255,0.15)]">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-[10px] text-blue-300 font-bold">
              02
            </div>
            <span className="text-white font-bold">DESIGN</span>
            <span className="text-[10px] text-blue-400">IDENTITY</span>
          </div>

          {/* Node 3: TECHNOLOGY */}
          <div className="p-3 rounded-xl border border-blue-500/30 bg-blue-950/20 backdrop-blur-md flex flex-col items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,102,255,0.15)]">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-[10px] text-blue-300 font-bold">
              03
            </div>
            <span className="text-white font-bold">TECHNOLOGY</span>
            <span className="text-[10px] text-blue-400">EXECUTION</span>
          </div>

          {/* Node 4: GROWTH */}
          <div className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-950/20 backdrop-blur-md flex flex-col items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <div className="w-6 h-6 rounded-full bg-emerald-600/30 border border-emerald-400/50 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
              04
            </div>
            <span className="text-emerald-300 font-bold">GROWTH</span>
            <span className="text-[10px] text-emerald-400">MOMENTUM</span>
          </div>

        </div>

      </div>
    </section>
  );
};
