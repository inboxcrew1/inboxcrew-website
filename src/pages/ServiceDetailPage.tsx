import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_LIST } from '../data/servicesData';
import { Globe, ShoppingBag, Headset, Palette, TrendingUp, Camera, Rocket, ArrowRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';

interface ServiceDetailPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenContactWithPackage }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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

  const Icon = getIcon(service.iconName);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'InboxCrew',
      url: 'https://inboxcrew.in',
      telephone: '+918534040174',
    },
    description: service.fullDesc,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.deliverables.map((del) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: del,
        },
      })),
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title={`${service.title} Services — InboxCrew Digital Lab`}
        description={service.fullDesc}
        canonicalPath={`/services/${service.slug}`}
        schema={serviceSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-left">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <span>/</span>
          <span className="text-blue-400 font-bold">{service.title}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
              <Icon className="w-3.5 h-3.5 text-blue-400" />
              <span>MODULE // {service.systemCode}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContactWithPackage(service.title)}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Inquire About {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/pricing"
                className="px-6 py-3.5 rounded-full bg-zinc-900 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Packages ({service.pricingHint})
              </Link>
            </div>
          </div>

          {/* Quick Module Card */}
          <div className="lg:col-span-4 w-full">
            <TiltCard3D maxTilt={6} glareOpacity={0.2} className="rounded-2xl">
              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-blue-500/30 space-y-4">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
                  <span className="text-xs text-zinc-400">ENGINE CODE</span>
                  <span className="text-xs font-bold text-cyan-400">{service.systemCode}</span>
                </div>
                <div className="text-xs space-y-2 text-zinc-300">
                  <div><strong className="text-white">Pricing:</strong> {service.pricingHint}</div>
                  <div><strong className="text-white">SLA Turnaround:</strong> 3–15 Business Days</div>
                  <div><strong className="text-white">Revision Policy:</strong> Full Iteration Support</div>
                </div>
              </div>
            </TiltCard3D>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="p-8 sm:p-10 rounded-3xl border border-blue-500/30 bg-zinc-950/80 mb-16">
          <h2 className="text-2xl font-bold text-white uppercase font-sans mb-6">
            WHAT WE DELIVER
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((del, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-black/60 border border-blue-500/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300">{del}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
