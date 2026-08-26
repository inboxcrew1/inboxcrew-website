import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { TrustBar } from '../components/TrustBar';
import { TiltCard3D } from '../components/TiltCard3D';
import { ShieldCheck, Target, Eye, Building2, MapPin, Award, Users, CheckCircle2, Terminal } from 'lucide-react';

interface AboutPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContactWithPackage }) => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About InboxCrew',
    description: 'Learn about InboxCrew: Our mission, leadership, office presence in Bulandshahr and Delhi NCR, and creative engineering philosophy.',
    url: 'https://inboxcrew.in/about',
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="About Us — Mission, Vision & Engineering Philosophy | InboxCrew"
        description="InboxCrew is a creative digital technology agency and customer support partner headquartered in Bulandshahr with presence across Delhi NCR."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>WHO WE ARE // CREATIVE DIGITAL LAB</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            BUILD. BRAND. GROW.
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            InboxCrew was founded on a simple principle: businesses deserve world-class digital technology, transparent pricing, and relentless execution without agency fluff.
          </p>
        </div>

        {/* Trust Metrics Bar */}
        <div className="mb-20">
          <TrustBar />
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
          <TiltCard3D maxTilt={5} glareOpacity={0.15} className="h-full rounded-2xl">
            <div className="p-8 rounded-2xl bg-zinc-950/80 border border-blue-500/30 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white uppercase font-sans mb-4">OUR MISSION</h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  To democratize premium digital agency capabilities for ambitious startups, manufacturers, and local businesses in India and across the globe by delivering sub-second web platforms, iconic branding, and scalable customer support.
                </p>
              </div>
            </div>
          </TiltCard3D>

          <TiltCard3D maxTilt={5} glareOpacity={0.15} className="h-full rounded-2xl">
            <div className="p-8 rounded-2xl bg-zinc-950/80 border border-blue-500/30 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white uppercase font-sans mb-4">OUR VISION</h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  To be recognized as India's premier creative technology laboratory—combining deep engineering rigor, cinematic aesthetics, and measurable commercial return for every client partner we serve.
                </p>
              </div>
            </div>
          </TiltCard3D>
        </div>

        {/* Office & Operating Footprint */}
        <div className="p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-zinc-950/90 text-left mb-20">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            <span>GENUINE OPERATIONAL FOOTPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-6">
            OFFICES & PRESENCE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-black/60 border border-blue-500/20">
              <div className="text-xs font-bold text-blue-400 uppercase mb-1">HEADQUARTERS</div>
              <div className="text-lg font-bold text-white font-sans">Bulandshahr, UP</div>
              <p className="text-xs text-zinc-400 mt-2">Executive Strategy, Core Creative & Engineering Lab.</p>
            </div>

            <div className="p-5 rounded-xl bg-black/60 border border-blue-500/20">
              <div className="text-xs font-bold text-cyan-400 uppercase mb-1">CLIENT HUB</div>
              <div className="text-lg font-bold text-white font-sans">Noida & Greater Noida</div>
              <p className="text-xs text-zinc-400 mt-2">Startup Consultations, Tech Deployment & Support Operations.</p>
            </div>

            <div className="p-5 rounded-xl bg-black/60 border border-blue-500/20">
              <div className="text-xs font-bold text-emerald-400 uppercase mb-1">NCR & GLOBAL</div>
              <div className="text-lg font-bold text-white font-sans">Gurugram & International</div>
              <p className="text-xs text-zinc-400 mt-2">D2C E-Com & 24/7 Remote Support Delivery.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenContactWithPackage('General Consultation')}
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
          >
            Start a Conversation With Us
          </button>
        </div>

      </div>
    </div>
  );
};
