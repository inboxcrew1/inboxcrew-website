import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
import { Headset, ArrowRight, ShieldCheck, Clock, Users, Zap, CheckCircle2, ChevronDown, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';

interface HomePageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContactWithPackage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const homeFaqs = [
    {
      question: 'Why is InboxCrew rated the best digital marketing agency in Bulandshahr?',
      answer: 'InboxCrew combines local Bulandshahr market accessibility with international technology standards. We build high-speed custom websites starting at ₹6,000, manage high-retention Instagram reels, dominate Google Maps 3-Pack rankings, and provide dedicated 24/7 client support with transparent deliverables.',
    },
    {
      question: 'What is the cost of website development and marketing in Bulandshahr?',
      answer: 'Website development starts at ₹6,000 for a fast, mobile-friendly Starter business website with WhatsApp ordering, ₹15,000 for a custom multi-page corporate website, and ₹25,000+ for full-scale e-commerce stores. Monthly digital marketing and SEO retainers start at ₹8,000/month.',
    },
    {
      question: 'Do you serve businesses in Kala Aam, Transport Nagar, Khurja, and Sikandrabad?',
      answer: 'Yes! We actively serve retail shops in Kala Aam, transport and auto dealerships in Transport Nagar, ceramic exporters in Khurja, industrial manufacturing units in Sikandrabad, as well as businesses in Gulaothi, Siyana, Anupshahr, and Delhi NCR.',
    },
    {
      question: 'How quickly can InboxCrew deliver a website or start generating leads?',
      answer: 'Starter websites are delivered in 3 to 5 business days. Paid Meta Ads and Google Search campaigns can start driving verified customer calls and WhatsApp inquiries within 24 to 48 hours of launch.',
    },
    {
      question: 'Can you help our business rank #1 on Google Maps in Bulandshahr?',
      answer: 'Yes. Local SEO is our core specialization. We optimize your Google Business Profile, align local directory citations (NAP consistency), embed LocalBusiness schema, and implement customer review workflows to rank your business in the top 3-pack.',
    },
    {
      question: 'Do you develop mobile applications and Shopify e-commerce stores?',
      answer: 'Yes, we engineer cross-platform Android and iOS mobile applications using Flutter and React Native, as well as high-converting Shopify and custom e-commerce stores with automated UPI, COD, and courier tracking.',
    },
  ];

  const localHubLinks = [
    { name: 'Kala Aam Commercial Hub', path: '/digital-marketing-agency-kala-aam-bulandshahr' },
    { name: 'Transport Nagar Hub', path: '/digital-marketing-agency-transport-nagar-bulandshahr' },
    { name: 'Ganga Nagar & DM Colony', path: '/digital-marketing-agency-ganga-nagar-bulandshahr' },
    { name: 'Khurja Ceramic Hub', path: '/marketing-agency-khurja' },
    { name: 'Sikandrabad Industrial Area', path: '/marketing-agency-sikandrabad' },
    { name: 'Gulaothi Trade Center', path: '/digital-marketing-agency-gulaothi-bulandshahr' },
    { name: 'Siyana Commercial Zone', path: '/digital-marketing-agency-siyana-bulandshahr' },
    { name: 'Anupshahr Riverside Hub', path: '/marketing-agency-anupshahr' },
    { name: 'Jahangirabad Market', path: '/marketing-agency-jahangirabad' },
  ];

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://inboxcrew.in/#organization',
        name: 'InboxCrew',
        url: 'https://inboxcrew.in',
        logo: 'https://inboxcrew.in/assets/images/logo.png',
        image: 'https://inboxcrew.in/assets/images/hero-visual.png',
        telephone: '+918534040174',
        email: 'info@inboxcrew.in',
        priceRange: '₹6000 - ₹35000',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Main Market Road',
          addressLocality: 'Bulandshahr',
          addressRegion: 'Uttar Pradesh',
          postalCode: '203001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.4070,
          longitude: 77.8498,
        },
        areaServed: [
          'Bulandshahr',
          'Kala Aam',
          'Transport Nagar',
          'Ganga Nagar',
          'DM Colony',
          'Khurja',
          'Sikandrabad',
          'Gulaothi',
          'Siyana',
          'Anupshahr',
          'Jahangirabad',
          'Noida',
          'Greater Noida',
          'Delhi NCR',
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '21:00',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://inboxcrew.in/#faq',
        mainEntity: homeFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative w-full flex flex-col">
      <SEOHead
        title="Best Digital Marketing Agency in Bulandshahr | InboxCrew"
        description="InboxCrew is the best digital marketing agency and website development company in Bulandshahr. Web design, local SEO, social media, and Meta Ads. Call +91 8534040174."
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

      {/* 10. Frequently Asked Questions & Local Service Hubs */}
      <section className="relative w-full py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white font-mono border-t border-blue-950/70 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>CLIENT QUESTIONS & ANSWERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans uppercase tracking-tight text-white mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Everything you need to know about our digital marketing, website development, local SEO, and pricing for businesses in Bulandshahr.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 max-w-4xl mx-auto mb-16">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-blue-950/80 bg-zinc-950/60 overflow-hidden transition-colors hover:border-blue-500/40"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white font-sans">
                      {faq.question}
                    </span>
                    <div className="shrink-0 p-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-blue-950/40 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Local Service Hubs Grid */}
          <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-500/30 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>BULANDSHAHR DISTRICT SERVICE CORRIDORS</span>
              </div>
              <span className="text-xs text-zinc-400">HQ in Bulandshahr - Serving All Local Markets</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {localHubLinks.map((hub, i) => (
                <Link
                  key={i}
                  to={hub.path}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-blue-500/20 hover:border-blue-400/60 hover:bg-blue-950/40 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <span className="font-sans font-medium">{hub.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <FinalCTA onOpenContact={() => onOpenContactWithPackage()} />
    </div>
  );
};
