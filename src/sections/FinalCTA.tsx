import React from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from '../components/Magnetic';
import { TiltCard3D } from '../components/TiltCard3D';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';
import { Terminal, Sparkles, ArrowRight, ArrowUpRight, Lock } from 'lucide-react';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 bg-black overflow-hidden font-mono select-none flex items-center justify-center border-t border-blue-950/60"
    >
      {/* Volumetric Blue Glows & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-600/25 via-blue-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066ff_1px,transparent_1px)] opacity-[0.04]" style={{ backgroundSize: '32px 32px' }} />
      </div>

      {/* SVG Circuits */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto text-center">
        
        <TiltCard3D maxTilt={6} glareOpacity={0.25} scale={1.01} className="w-full rounded-3xl">
          <div className="p-8 sm:p-14 lg:p-20 rounded-3xl border border-blue-500/40 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_70px_rgba(0,102,255,0.3)] relative overflow-hidden flex flex-col items-center">
            
            {/* Ambient Corner Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-xs tracking-widest text-blue-400 uppercase mb-8 shadow-[0_0_20px_rgba(0,102,255,0.25)]"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>FINAL ACTIVATION // INITIALIZE PROJECT</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight uppercase mb-6 font-sans drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)] max-w-3xl leading-[1.05]"
            >
              LET'S BUILD SOMETHING GREAT.
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12 font-mono"
            >
              Have an idea, a business or a brand ready to move forward? Let's turn it into something people remember.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            >
              {/* Primary CTA: LET'S TALK */}
              <Magnetic strength={0.35}>
                <button
                  onClick={onOpenContact}
                  className="px-8 sm:px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_40px_rgba(0,102,255,0.5)] flex items-center gap-3 cursor-pointer group border border-blue-400/60"
                >
                  <span>LET'S TALK</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>

              {/* Secondary CTA: VIEW OUR WORK */}
              <Magnetic strength={0.25}>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-7 sm:px-8 py-4 rounded-full bg-black/60 hover:bg-zinc-900 border border-blue-500/40 text-zinc-300 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>VIEW OUR WORK</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </button>
              </Magnetic>
            </motion.div>

          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};
