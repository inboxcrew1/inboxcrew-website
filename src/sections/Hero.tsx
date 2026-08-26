import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrambleIn } from '../components/ScrambleIn';
import { Magnetic } from '../components/Magnetic';
import { CursorHUD } from '../components/CursorHUD';
import { HackerTypeLayer } from '../components/HackerTypeLayer';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';
import { ArrowDown, Terminal, Shield, Lock, Radio, Activity, Crosshair, Sparkles } from 'lucide-react';
import { useHeroScrub } from '../hooks/useHeroScrub';

interface HeroProps {
  isEntered: boolean;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isEntered, onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showHackerStream, setShowHackerStream] = useState(false);
  const targetPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Delta-based video scrub hook with seek queue & sensitivity 0.8
  const { scrubProgress } = useHeroScrub(videoRef, containerRef, { sensitivity: 0.8 });

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0px', '-50px']);

  // Smooth RAF-based normalized mouse tracking for 3D parallax
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === 'undefined') return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    targetPos.current = {
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    };
  }, []);

  useEffect(() => {
    const updateMotion = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.06,
        y: prev.y + (targetPos.current.y - prev.y) * 0.06,
      }));
      rafId.current = requestAnimationFrame(updateMotion);
    };

    rafId.current = requestAnimationFrame(updateMotion);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black select-none font-mono"
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      {/* 1. Interactive Cursor Coordinates HUD */}
      <CursorHUD containerRef={containerRef} />

      {/* 2. Volumetric Blue Lighting & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Core Spotlight */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-blue-600/35 via-blue-500/10 to-transparent rounded-full blur-[140px] transition-transform duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate3d(calc(-50% + ${mousePos.x * 50}px), calc(-50% + ${mousePos.y * 35}px), 0)`,
          }}
        />
        {/* Floor Horizon Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-blue-950/50 via-blue-900/15 to-transparent pointer-events-none" />
      </div>

      {/* 3. 3D Perspective Floor Grid */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2400px] h-[520px] pointer-events-none overflow-hidden opacity-25 z-0"
        style={{
          perspective: '600px',
          transform: 'translateX(-50%) rotateX(72deg)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 85%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 85%)',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 102, 255, 0.45) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 102, 255, 0.45) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translateY(${mousePos.y * 15}px)`,
          }}
        />
      </div>

      {/* 4. Mascot 3D Visual & Interactive Scrub Layer (Strict Ref Image 1 Alignment) */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      >
        {/* Background Visual Mascot (Center Bunny with 3D Glowing Text Floor Reflection) */}
        <div
          className="absolute inset-0 bg-contain sm:bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform"
          style={{
            backgroundImage: 'url(/assets/images/hero-visual.png)',
            transform: `translate3d(${mousePos.x * -24}px, ${mousePos.y * -16}px, 0) scale(1.05) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
          }}
        />

        {/* Hidden video element for cursor delta scrubbing */}
        <video
          ref={videoRef}
          src=""
          preload="none"
          playsInline
          muted
          className="hidden"
        />

        {/* Procedural SVG Network Shift */}
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 10}px, 0)`,
          }}
        >
          <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
        </div>

        {/* Central HUD Reticle */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] rounded-full border border-blue-500/20 border-dashed animate-[spin_80s_linear_infinite]" />
          <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] rounded-full border border-blue-400/10" />
        </div>

        {/* Atmospheric vignette overlays */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </motion.div>

      {/* 5. 24px x 24px Dot-Grid Overlay */}
      <div
        className="absolute inset-0 bg-dot-grid opacity-[0.045] pointer-events-none z-15"
        aria-hidden="true"
      />

      {/* 6. Giant Anton SC Atmospheric Background Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-15 select-none"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-white tracking-tighter uppercase leading-none whitespace-nowrap radial-mask will-change-transform"
          style={{
            fontSize: 'clamp(120px, 30vw, 520px)',
            letterSpacing: '-0.06em',
            transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 15}px, -120px) rotateX(${mousePos.y * 3}deg) rotateY(${mousePos.x * -3}deg)`,
          }}
        >
          INBOXCREW
        </motion.div>
      </div>

      {/* 7. Floating Hardware Telemetry Badges */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block overflow-hidden">
        {/* Top-Left Telemetry */}
        <div
          className="absolute top-24 left-12 glass-pill px-3.5 py-1.5 rounded-full text-[10px] tracking-widest text-zinc-400 border border-blue-500/30 flex items-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.2)] backdrop-blur-xl"
          style={{
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 60px)`,
          }}
        >
          <Terminal className="w-3 h-3 text-blue-400" />
          <span className="text-white font-bold">SYSTEM // ONLINE</span>
          <span className="text-zinc-600">|</span>
          <span className="text-blue-400">CREATIVE ENGINE READY</span>
        </div>

        {/* Top-Right Telemetry */}
        <div
          className="absolute top-24 right-12 glass-pill px-3.5 py-1.5 rounded-full text-[10px] tracking-widest text-zinc-400 border border-blue-500/30 flex items-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.2)] backdrop-blur-xl"
          style={{
            transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -8}px, 60px)`,
          }}
        >
          <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span className="text-zinc-300">DIGITAL NODE: CONNECTED</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
      </div>

      {/* Top Navbar Spacer */}
      <div className="h-20 sm:h-24 w-full shrink-0" />

      {/* 8. Main Hero Content */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 6}px, 40px)`,
        }}
        className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-12 flex flex-col justify-end will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-end">
          
          {/* Left Column: Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="glass-pill px-4 py-1.5 rounded-full text-[11px] tracking-widest text-blue-300 uppercase mb-6 flex items-center gap-2.5 border border-blue-500/40 bg-blue-950/40 backdrop-blur-xl shadow-[0_0_25px_rgba(0,102,255,0.3)]">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold tracking-wider">CREATIVE DIGITAL LAB</span>
            </div>

            {/* Main Headline: BUILD. BRAND. GROW. */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[1.02] mb-6 font-sans">
              <span className="block drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
                <ScrambleIn text="BUILD." triggered={isEntered} delay={200} />
              </span>
              <span className="block text-zinc-300 drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
                <ScrambleIn text="BRAND." triggered={isEntered} delay={450} />
              </span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-[460px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              We build digital experiences, powerful brands, and growth systems that help businesses move forward.
            </p>
          </div>

          {/* Right Column: GROW. & Dual CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right">
            
            <div
              onMouseEnter={() => setShowHackerStream(true)}
              onMouseLeave={() => setShowHackerStream(false)}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-[10px] tracking-widest text-blue-400 uppercase cursor-pointer hover:border-blue-400 transition-colors shadow-sm"
            >
              <Crosshair className="w-3 h-3 text-blue-400" />
              <span>[0x7F] GLOBAL DIGITAL PARTNER</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[1.02] mb-8 font-sans">
              <span className="block text-blue-400 drop-shadow-[0_0_30px_rgba(0,102,255,0.6)]">
                <ScrambleIn text="GROW." triggered={isEntered} delay={700} />
              </span>
            </h2>

            {/* CTAs: LET'S TALK & EXPLORE WORK */}
            <div className="flex flex-col items-start lg:items-end gap-3 w-full sm:w-auto">
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Secondary CTA: EXPLORE WORK */}
                <Magnetic strength={0.25}>
                  <button
                    onClick={() => scrollToSection('portfolio')}
                    className="px-6 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-blue-500/30 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>EXPLORE WORK</span>
                  </button>
                </Magnetic>

                {/* Primary CTA: LET'S TALK */}
                <Magnetic strength={0.35}>
                  <button
                    onClick={onOpenContact}
                    onMouseEnter={() => setShowHackerStream(true)}
                    onMouseLeave={() => setShowHackerStream(false)}
                    className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_35px_rgba(0,102,255,0.4)] flex items-center gap-3 cursor-pointer group border border-blue-400/50"
                  >
                    <span>LET'S TALK</span>
                    <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </button>
                </Magnetic>

              </div>

              {/* Revealable Code Console */}
              {showHackerStream && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-[340px]"
                >
                  <HackerTypeLayer speed={70} theme="blue" />
                </motion.div>
              )}
            </div>

          </div>

        </div>

        {/* 9. Bottom Navigation Indicator Bar */}
        <div className="mt-10 sm:mt-14 pt-5 border-t border-blue-500/20 flex items-center justify-between text-[11px] text-zinc-400 uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 font-bold tracking-widest">01 / 08</span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-300">CORE // OPERATING SYSTEM</span>
            <span className="hidden md:inline-block text-zinc-700">|</span>
            <span className="hidden md:inline-block text-zinc-500">BUILD • BRAND • GROW</span>
          </div>

          <Magnetic strength={0.25}>
            <button
              onClick={() => scrollToSection('brand-statement')}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-blue-500/30 text-zinc-300 hover:text-white hover:border-blue-400 hover:bg-blue-600/10 transition-all cursor-pointer group shadow-lg"
            >
              <span>EXPLORE SYSTEM</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-blue-400" />
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};
