import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { LOCATIONS_LIST } from '../data/locationsData';
import { MapPin, Phone, MessageSquare, ArrowRight, CheckCircle2, HelpCircle, ShieldCheck, Building2 } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';

interface LocationDetailPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ onOpenContactWithPackage }) => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS_LIST.find((loc) => loc.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `InboxCrew — ${location.city}`,
    url: `https://inboxcrew.in/locations/${location.slug}`,
    telephone: '+918534040174',
    email: 'info@inboxcrew.in',
    priceRange: '₹6000 - ₹35000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'IN',
    },
    areaServed: [location.city, ...location.nearbyAreas],
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title={location.title}
        description={location.metaDesc}
        canonicalPath={`/locations/${location.slug}`}
        schema={localSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link to="/locations" className="hover:text-blue-400">Locations</Link>
          <span>/</span>
          <span className="text-blue-400 font-bold">{location.city}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{location.region} // {location.state}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
              {location.h1}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              {location.localIntro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContactWithPackage(`Website Project in ${location.city}`)}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Start Project in {location.city}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/918534040174?text=Hello%20InboxCrew!%20I%20am%20located%20in%20${encodeURIComponent(location.city)}%20and%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/70 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Local Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Hub Badge Card */}
          <div className="lg:col-span-4 w-full">
            <TiltCard3D maxTilt={6} glareOpacity={0.2} className="rounded-2xl">
              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-blue-500/30 text-left space-y-4">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
                  <span className="text-xs text-zinc-400">HUB STATUS</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE & ACTIVE
                  </span>
                </div>
                <div className="text-xs space-y-2 text-zinc-300">
                  <div><strong className="text-white">Direct Line:</strong> <a href="tel:+918534040174" className="text-blue-400">+91 8534040174</a></div>
                  <div><strong className="text-white">Email:</strong> <a href="mailto:info@inboxcrew.in" className="text-blue-400">info@inboxcrew.in</a></div>
                  <div><strong className="text-white">Turnaround:</strong> 3–5 Days Delivery</div>
                </div>
              </div>
            </TiltCard3D>
          </div>

        </div>

        {/* Business Focus & Local Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          
          {/* Target Industries */}
          <div className="p-7 rounded-2xl border border-blue-500/20 bg-zinc-950/80">
            <h2 className="text-xl font-bold text-white uppercase font-sans mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-400" />
              <span>Who We Serve in {location.city}</span>
            </h2>
            <ul className="space-y-2.5">
              {location.businessFocus.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Challenges We Solve */}
          <div className="p-7 rounded-2xl border border-blue-500/20 bg-zinc-950/80">
            <h2 className="text-xl font-bold text-white uppercase font-sans mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>Local Business Growth Solutions</span>
            </h2>
            <ul className="space-y-2.5">
              {location.keyChallengesSolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Local FAQs */}
        <div className="max-w-4xl mx-auto text-left mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white uppercase font-sans mb-2">
              {location.city} Business FAQs
            </h2>
            <p className="text-xs text-zinc-400">Common questions from clients in {location.city} and surrounding areas.</p>
          </div>

          <div className="space-y-4">
            {location.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-blue-500/20 bg-zinc-950/70">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2 font-sans">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Areas Navigation Matrix */}
        <div className="p-6 rounded-2xl border border-blue-500/20 bg-zinc-950/60 text-left">
          <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
            NEARBY SERVICE COVERAGE IN {location.region.toUpperCase()}:
          </h3>
          <div className="flex flex-wrap gap-2">
            {location.nearbyAreas.map((area) => (
              <span key={area} className="px-3 py-1 rounded-full bg-blue-950/30 border border-blue-500/20 text-xs text-zinc-300">
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
