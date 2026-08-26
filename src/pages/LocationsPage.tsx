import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { LOCATIONS_LIST } from '../data/locationsData';
import { TiltCard3D } from '../components/TiltCard3D';
import { MapPin, ArrowRight, ShieldCheck, Building2, CheckCircle2, Terminal } from 'lucide-react';

export const LocationsPage: React.FC = () => {
  const locationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'InboxCrew',
    url: 'https://inboxcrew.in/locations',
    telephone: '+918534040174',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bulandshahr',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Local Service Areas — Bulandshahr, Noida, Delhi NCR & Western UP | InboxCrew"
        description="InboxCrew provides local website development, digital marketing, and business branding across Bulandshahr, Noida, Greater Noida, Gurugram, Delhi NCR, and Western UP."
        canonicalPath="/locations"
        schema={locationsSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>REGIONAL SERVICE ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            LOCAL PRESENCE. GLOBAL QUALITY.
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Headquartered in Bulandshahr and actively serving Delhi NCR, Noida, Gurugram, and Western UP with high-touch, in-market digital solutions.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {LOCATIONS_LIST.map((loc) => (
            <TiltCard3D key={loc.slug} maxTilt={6} glareOpacity={0.2} className="h-full rounded-2xl">
              <div
                className={`h-full p-6 sm:p-7 rounded-2xl flex flex-col justify-between text-left transition-all ${
                  loc.isHeadOffice
                    ? 'bg-gradient-to-b from-blue-950/60 to-zinc-950 border-2 border-blue-500 shadow-[0_0_35px_rgba(0,102,255,0.3)]'
                    : 'bg-zinc-950/80 border border-blue-500/25 hover:border-blue-400/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-blue-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">{loc.region}</span>
                    </div>
                    {loc.isHeadOffice && (
                      <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest">
                        HEAD OFFICE
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-white uppercase font-sans mb-2">{loc.city}</h2>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-mono">{loc.heroSubtitle}</p>

                  <div className="space-y-1.5 mb-6 border-t border-blue-500/15 pt-4">
                    <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Key Industry Focus:</div>
                    {loc.businessFocus.slice(0, 3).map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-mono">{loc.state}</span>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>View Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </div>
  );
};
