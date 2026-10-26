import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SEOServicePage, getRelatedPages } from '../data/seoPagesData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  HelpCircle, 
  Layers, 
  Briefcase, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Zap,
  MapPin
} from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';

interface SEOContentPageProps {
  page: SEOServicePage;
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const SEOContentPage: React.FC<SEOContentPageProps> = ({ page, onOpenContactWithPackage }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const relatedPages = getRelatedPages(page.relatedSlugs);

  // Structured Schema Markup
  const pageSchema = page.schemaType === 'Service'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: page.h1,
        name: page.title,
        description: page.metaDesc,
        provider: {
          '@type': 'Organization',
          name: 'InboxCrew',
          url: 'https://www.inboxcrew.in',
          telephone: '+918534040174',
          email: 'info@inboxcrew.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Main Market Road',
            addressLocality: 'Bulandshahr',
            addressRegion: 'Uttar Pradesh',
            postalCode: '203001',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Bulandshahr' },
          { '@type': 'AdministrativeArea', name: 'Noida' },
          { '@type': 'AdministrativeArea', name: 'Greater Noida' },
          { '@type': 'AdministrativeArea', name: 'Hapur' },
          { '@type': 'AdministrativeArea', name: 'Aligarh' },
          { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: page.h1,
          itemListElement: page.deliverables.map((del) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: del.title,
              description: del.desc,
            },
          })),
        },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.h1,
        description: page.metaDesc,
        url: `https://www.inboxcrew.in/${page.slug}`,
        author: {
          '@type': 'Organization',
          name: 'InboxCrew',
          url: 'https://www.inboxcrew.in',
        },
        publisher: {
          '@type': 'Organization',
          name: 'InboxCrew',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.inboxcrew.in/assets/images/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.inboxcrew.in/${page.slug}`,
        },
      };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-24 overflow-hidden">
      <SEOHead
        title={page.title}
        description={page.metaDesc}
        canonicalPath={`/${page.slug}`}
        schema={pageSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-left">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-500">{page.categoryLabel}</span>
          <span>/</span>
          <span className="text-blue-400 font-bold">{page.slug}</span>
        </nav>

        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-12 border-b border-blue-950/60">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{page.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mb-6 font-sans leading-tight">
              {page.h1}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-3xl">
              {page.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContactWithPackage(page.h1)}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/918534040174?text=Hi%20InboxCrew%2C%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+918534040174"
                className="px-5 py-3.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 8534040174</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics & Price Card */}
          <div className="lg:col-span-4 w-full">
            <TiltCard3D maxTilt={6} glareOpacity={0.2} className="rounded-2xl">
              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-blue-500/30 space-y-4 shadow-[0_0_30px_rgba(0,102,255,0.15)]">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
                  <span className="text-xs text-zinc-400 font-bold">STARTING INVESTMENT</span>
                  <span className="text-xs font-bold text-emerald-400">{page.pricingStartingAt}</span>
                </div>
                
                <div className="text-xs space-y-2.5 text-zinc-300">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Headquarters:</span>
                    <span className="text-white font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      Bulandshahr, UP
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Delivery SLA:</span>
                    <span className="text-white font-bold">3-10 Business Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Support Channel:</span>
                    <span className="text-white font-bold">24/7 WhatsApp & Phone</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Code & Asset Rights:</span>
                    <span className="text-emerald-400 font-bold">100% Client Ownership</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-blue-500/20">
                  <button
                    onClick={() => onOpenContactWithPackage(page.h1)}
                    className="w-full py-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 text-blue-200 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Request Custom Quote
                  </button>
                </div>
              </div>
            </TiltCard3D>
          </div>
        </header>

        {/* Section 1: Deliverables */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">DETAILED SCOPE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-8">
            What is Included & What We Deliver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {page.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-blue-500/20 hover:border-blue-500/50 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h3 className="text-base font-bold text-white uppercase font-sans">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Who It Is For */}
        <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-blue-950/20 to-black border border-blue-500/30">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">TARGET CLIENTELE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-6">
            Who This Service Is For in Bulandshahr & Regional NCR
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.whoItsFor.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-black/60 border border-blue-500/15">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Process Steps */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">TRANSPARENT WORKFLOW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-8">
            How We Deliver the Work (Our 4-Step Process)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-950/80 border border-blue-500/20 relative space-y-3">
                <div className="text-3xl font-bold text-blue-500/40 font-sans">{step.step}</div>
                <h3 className="text-sm font-bold text-white uppercase font-sans">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Pricing Factors */}
        <section className="mb-16 p-8 rounded-3xl bg-zinc-950/90 border border-blue-500/20">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans mb-6">
            What Factors Affect the Pricing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.pricingFactors.map((pf, idx) => (
              <div key={idx} className="space-y-1.5">
                <h3 className="text-sm font-bold text-blue-400 uppercase">{pf.factor}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{pf.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Hinglish Local Note (If available) */}
        {page.hinglishNote && (
          <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-blue-950/30 border border-blue-500/40 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>BULANDSHAHR LOCAL ASSURANCE</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase font-sans mb-3">
              Aapke Business Ke Liye InboxCrew Ka Vada
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {page.hinglishNote}
            </p>
          </section>
        )}

        {/* Section 6: Frequently Asked Questions */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">CUSTOMER FAQs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {page.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-950/80 border border-blue-500/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-950/20 transition-colors"
                >
                  <span className="text-sm font-bold text-white uppercase font-sans">
                    {faq.question}
                  </span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-blue-500/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Related Services & Internal Links */}
        {relatedPages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans mb-6">
              Related Services & Regional Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedPages.map((relPage) => (
                <Link
                  key={relPage.slug}
                  to={`/${relPage.slug}`}
                  className="p-4 rounded-xl bg-zinc-950/80 border border-blue-500/20 hover:border-blue-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block mb-1">
                      {relPage.categoryLabel}
                    </span>
                    <h3 className="text-xs font-bold text-white uppercase group-hover:text-blue-300 transition-colors font-sans line-clamp-2">
                      {relPage.h1}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mt-4 group-hover:text-blue-400">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Call to Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 via-zinc-950 to-blue-950/60 border border-blue-500/40 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-4">
            Ready to Accelerate Your Business in Bulandshahr?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Connect directly with InboxCrew. Transparent pricing from ₹6,000, sub-second web engineering, and 24/7 client support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContactWithPackage(page.h1)}
              className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer"
            >
              Start Your Project Today
            </button>
            <a
              href="https://wa.me/918534040174"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
