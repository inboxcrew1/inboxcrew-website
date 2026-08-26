import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_LIST } from '../data/servicesData';
import { TiltCard3D } from '../components/TiltCard3D';
import { Globe, ShoppingBag, Headset, Palette, TrendingUp, Camera, Rocket, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

interface ServicesPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContactWithPackage }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe': return Globe;
      case 'cart': return ShoppingBag;
      case 'support': return Headset;
      case 'branding': return Palette;
      case 'marketing': return TrendingUp;
      case 'camera': return Camera;
      case 'rocket': return Rocket;
      default: return Globe;
    }
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Agency & Web Development Services',
    provider: {
      '@type': 'Organization',
      name: 'InboxCrew',
      url: 'https://inboxcrew.in',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'InboxCrew Digital Services',
      itemListElement: SERVICES_LIST.map((s) => ({
        '@type': 'Offer',
        name: s.title,
        description: s.shortDesc,
      })),
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Digital Services & Capabilities — InboxCrew Digital Lab"
        description="Comprehensive web development, e-commerce, customer support outsourcing, brand identity, and social growth systems engineered for high conversion."
        canonicalPath="/services"
        schema={servicesSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>FULL-STACK DIGITAL CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            ENGINEERED FOR GROWTH.
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Every service at InboxCrew is designed with a singular focus: transforming attention into measurable business revenue and loyal customer relationships.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            return (
              <TiltCard3D key={service.id} maxTilt={6} glareOpacity={0.2} className="h-full rounded-2xl">
                <div
                  className={`h-full p-6 sm:p-7 rounded-2xl flex flex-col justify-between text-left transition-all ${
                    service.popular
                      ? 'bg-gradient-to-b from-blue-950/40 to-zinc-950 border border-blue-500/60 shadow-[0_0_30px_rgba(0,102,255,0.2)]'
                      : 'bg-zinc-950/80 border border-blue-500/25 hover:border-blue-400/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">{service.systemCode}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white uppercase font-sans mb-2">{service.title}</h2>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-mono">{service.shortDesc}</p>

                    <div className="space-y-2 mb-8 border-t border-blue-500/15 pt-4">
                      {service.deliverables.slice(0, 4).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400">{service.pricingHint}</span>
                    <button
                      onClick={() => onOpenContactWithPackage(service.title)}
                      className="inline-flex items-center gap-1 text-xs text-white hover:text-blue-300 font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </div>
  );
};
