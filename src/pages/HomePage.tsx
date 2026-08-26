import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../sections/Hero';
import { TrustBar } from '../components/TrustBar';
import { BrandStatement } from '../sections/BrandStatement';
import { Services } from '../sections/Services';
import { Pricing } from '../sections/Pricing';
import { Portfolio } from '../sections/Portfolio';
import { Architecture } from '../sections/Architecture';
import { FinalCTA } from '../sections/FinalCTA';
import { SupportGlobe3D } from '../components/3D/SupportGlobe3D';
import { TerminalHUD } from '../components/TerminalHUD';
import { Headset, ArrowRight, ShieldCheck, Clock, Users, Zap, CheckCircle2 } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';

interface HomePageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContactWithPackage }) => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'InboxCrew',
    url: 'https://inboxcrew.in',
    logo: 'https://inboxcrew.in/assets/images/inboxcrew-logo.png',
    image: 'https://inboxcrew.in/assets/images/hero-visual.png',
    telephone: '+918534040174',
    email: 'info@inboxcrew.in',
    priceRange: '₹500 - ₹35000 / $69 - $1499',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bulandshahr',
      addressRegion: 'Uttar Pradesh',
      postalCode: '203001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.4069',
      longitude: '77.8498',
    },
    areaServed: ['Bulandshahr', 'Noida', 'Greater Noida', 'Gurugram', 'Delhi NCR', 'Hapur', 'Khurja', 'Aligarh', 'Sikandrabad', 'India', 'Worldwide'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
  };

  return (
    <div className="relative w-full flex flex-col">
      <SEOHead
        title="InboxCrew | Website Development, Digital Growth & Customer Support Agency"
        description="InboxCrew builds high-performance websites, distinctive brands, digital growth systems, and 24/7 outsourced customer support for ambitious businesses in India and worldwide."
        canonicalPath="/"
        schema={homeSchema}
      />

      {/* 1. Hero Section */}
      <Hero
        isEntered={true}
        onOpenContact={() => onOpenContactWithPackage()}
      />

      {/* 2. Real-Time Telemetry Ribbon */}
      <TerminalHUD />

      {/* 3. Verified Trust Bar */}
      <TrustBar />

      {/* 4. Brand Statement & 3D Interactive Text */}
      <BrandStatement />

      {/* 5. Services Overview */}
      <Services />

      {/* 6. Dedicated Customer Support Spotlight Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-black via-blue-950/20 to-black text-white font-mono select-none overflow-hidden border-t border-blue-950/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Cols: Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
                <Headset className="w-3.5 h-3.5 text-blue-400" />
                <span>24/7 DEDICATED SUPPORT CLUSTER</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
                YOUR CUSTOMERS DESERVE BETTER SUPPORT.
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl">
                InboxCrew deploys dedicated, multilingual customer support teams for growing businesses. From email ticketing and real-time live chat to phone support and CRM management, we ensure sub-minute response times and 98%+ CSAT.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/80 border border-blue-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email, Live Chat & Phone Support</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/80 border border-blue-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SOP & Custom Brand Training</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/80 border border-blue-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Shopify & Amazon CRM Integration</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-950/80 border border-blue-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Plans from $249/mo & $8/hour</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/customer-support"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
                >
                  <span>Explore Support Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenContactWithPackage('Customer Support Outsourcing')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-950/40 border border-blue-500/30 hover:border-blue-400 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>Build My Support Team</span>
                </button>
              </div>
            </div>

            {/* Right 5 Cols: 3D Global Node Globe */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <TiltCard3D maxTilt={8} glareOpacity={0.2} className="w-full max-w-md rounded-3xl">
                <div className="p-6 rounded-3xl bg-zinc-950/90 border border-blue-500/30 shadow-[0_0_50px_rgba(0,102,255,0.25)] flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <SupportGlobe3D className="w-full h-full" />
                  </div>
                  <div className="w-full mt-4 pt-4 border-t border-blue-500/20 flex items-center justify-between text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-emerald-300 font-bold">24/7 ACTIVE NODES</span>
                    </div>
                    <span>AVG FIRST RESPONSE: 48s</span>
                  </div>
                </div>
              </TiltCard3D>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Official Pricing & Systems Matrix with INR/USD Toggle */}
      <Pricing onSelectPackage={onOpenContactWithPackage} />

      {/* 8. Portfolio & Case Studies */}
      <Portfolio />

      {/* 9. Process & Runtime Compiler Architecture */}
      <Architecture />

      {/* 10. Final CTA */}
      <FinalCTA onOpenContact={() => onOpenContactWithPackage()} />
    </div>
  );
};
