import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { SUPPORT_MONTHLY_PLANS, HOURLY_RATES, DEDICATED_AGENTS, SUPPORT_ADDONS } from '../data/customerSupportData';
import { SupportGlobe3D } from '../components/3D/SupportGlobe3D';
import { TiltCard3D } from '../components/TiltCard3D';
import { Headset, Check, CheckCircle2, ArrowRight, ShieldCheck, Clock, MessageSquare, Phone, Mail, HelpCircle, Zap } from 'lucide-react';

interface CustomerSupportPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const CustomerSupportPage: React.FC<CustomerSupportPageProps> = ({ onOpenContactWithPackage }) => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'hourly' | 'dedicated' | 'addons'>('monthly');

  const supportFaqs = [
    {
      question: 'How quickly can InboxCrew onboard a dedicated support team for our business?',
      answer: 'Our standard onboarding takes 3 to 5 business days. During this window, we ingest your brand SOPs, configure CRM ticketing queues, and run simulated test scenarios before going live.',
    },
    {
      question: 'Which helpdesks and CRMs does InboxCrew support?',
      answer: 'We integrate with all major customer support platforms including Zendesk, Freshdesk, Gorgias, Intercom, HubSpot, Zoho Desk, Shopify Admin, and Amazon Seller Central.',
    },
    {
      question: 'Can you provide 24/7 or weekend-only coverage?',
      answer: 'Yes! We offer 24/7/365 coverage on our Enterprise and Dedicated plans, as well as standalone weekend or after-hours shifts for international timezone coverage.',
    },
    {
      question: 'How is Quality Assurance (QA) handled?',
      answer: 'Our dedicated QA Team Leads review 15–20% of all handled customer tickets weekly, scoring empathy, policy adherence, accuracy, and first-contact resolution.',
    },
  ];

  const supportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Customer Support Outsourcing',
    provider: {
      '@type': 'Organization',
      name: 'InboxCrew',
      url: 'https://inboxcrew.in',
      telephone: '+918534040174',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Customer Support Packages',
      itemListElement: SUPPORT_MONTHLY_PLANS.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        price: plan.price.replace('$', '').replace('+', ''),
        priceCurrency: 'USD',
      })),
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Customer Support Outsourcing | Dedicated 24/7 Support Teams — InboxCrew"
        description="Scalable customer support outsourcing: Email helpdesk, live chat, phone support, and CRM management starting at $249/mo. 98%+ CSAT guaranteed."
        canonicalPath="/customer-support"
        schema={supportSchema}
      />

      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
              <Headset className="w-3.5 h-3.5 text-blue-400" />
              <span>GLOBAL SUPPORT CLUSTER // 24/7 COVERAGE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
              YOUR CUSTOMERS DESERVE BETTER SUPPORT.
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl">
              InboxCrew provides scalable, empathetic, and metrics-driven customer support teams for growing e-commerce brands, SaaS startups, and digital businesses across India, the US, UK, and global markets.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs mb-8">
              <span className="px-3 py-1.5 rounded-full bg-zinc-900 border border-blue-500/20 text-zinc-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Email & Live Chat
              </span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900 border border-blue-500/20 text-zinc-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Inbound Voice Support
              </span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900 border border-blue-500/20 text-zinc-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Dedicated SOP Training
              </span>
              <span className="px-3 py-1.5 rounded-full bg-zinc-900 border border-blue-500/20 text-zinc-300 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Strict SLA & QA Monitoring
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContactWithPackage('Customer Support — Growth Plan ($499/mo)')}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Build My Support Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/918534040174?text=Hello%20InboxCrew!%20I%20am%20interested%20in%20Customer%20Support%20Outsourcing."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/70 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right 5 Cols: 3D Global Nodes Globe */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <TiltCard3D maxTilt={8} glareOpacity={0.2} className="w-full max-w-md rounded-3xl">
              <div className="p-6 rounded-3xl bg-zinc-950/90 border border-blue-500/30 shadow-[0_0_50px_rgba(0,102,255,0.25)] flex flex-col items-center">
                <div className="w-full h-72 relative">
                  <SupportGlobe3D className="w-full h-full" />
                </div>
                <div className="w-full mt-4 pt-4 border-t border-blue-500/20 flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-300 font-bold">ACTIVE REGIONS</span>
                  </div>
                  <span>INDIA • US • UK • EU</span>
                </div>
              </div>
            </TiltCard3D>
          </div>

        </div>

        {/* Support Category Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-zinc-900/90 border border-blue-500/30 backdrop-blur-xl flex-wrap justify-center gap-1">
            {[
              { id: 'monthly', label: 'Monthly Plans' },
              { id: 'hourly', label: 'Hourly Rates' },
              { id: 'dedicated', label: 'Dedicated Agents' },
              { id: 'addons', label: 'Add-Ons & SOPs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(0,102,255,0.6)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Monthly Support Plans */}
        {activeTab === 'monthly' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {SUPPORT_MONTHLY_PLANS.map((plan) => (
              <TiltCard3D key={plan.id} maxTilt={6} glareOpacity={0.2} className="h-full rounded-2xl">
                <div
                  className={`h-full p-6 sm:p-7 rounded-2xl flex flex-col justify-between text-left transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-b from-blue-950/60 to-zinc-950 border-2 border-blue-500 shadow-[0_0_35px_rgba(0,102,255,0.3)]'
                      : 'bg-zinc-950/80 border border-blue-500/30'
                  }`}
                >
                  <div>
                    {plan.badge && (
                      <div className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest mb-4">
                        {plan.badge}
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white uppercase font-sans mb-1">{plan.name}</h3>
                    <div className="text-[11px] text-zinc-400 mb-4">{plan.tickets} • {plan.hours}</div>

                    <div className="flex items-baseline gap-1 mb-6 border-b border-blue-500/20 pb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-white font-sans">{plan.price}</span>
                      <span className="text-xs text-zinc-400">{plan.period}</span>
                    </div>

                    <ul className="space-y-2.5 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenContactWithPackage(`Customer Support — ${plan.name} (${plan.price})`)}
                    className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(0,102,255,0.5)]'
                        : 'bg-zinc-900 hover:bg-blue-950 text-blue-300 border border-blue-500/30'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </TiltCard3D>
            ))}
          </div>
        )}

        {/* Tab 2: Hourly Support Rates */}
        {activeTab === 'hourly' && (
          <div className="max-w-4xl mx-auto mb-20">
            <div className="rounded-2xl border border-blue-500/30 bg-zinc-950/90 overflow-hidden shadow-2xl">
              <div className="p-5 bg-blue-950/40 border-b border-blue-500/30 flex items-center justify-between">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Hourly Support Matrix</div>
                <div className="text-[11px] text-emerald-400">● Flexible Pay-As-You-Go</div>
              </div>
              <div className="divide-y divide-blue-500/15">
                {HOURLY_RATES.map((rate, rIdx) => (
                  <div key={rIdx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-blue-950/20 transition-colors">
                    <div>
                      <div className="text-sm font-bold text-white font-sans uppercase">{rate.service}</div>
                      <p className="text-xs text-zinc-400 mt-0.5">{rate.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-base font-bold text-cyan-400">{rate.rate}</span>
                      <button
                        onClick={() => onOpenContactWithPackage(`Hourly Support — ${rate.service}`)}
                        className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0"
                      >
                        Hire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Dedicated Agents */}
        {activeTab === 'dedicated' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {DEDICATED_AGENTS.map((agent, aIdx) => (
              <div key={aIdx} className="p-6 rounded-2xl border border-blue-500/30 bg-zinc-950/80 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-sans mb-2">{agent.type}</h3>
                  <div className="flex items-baseline gap-1 mb-4 border-b border-blue-500/20 pb-3">
                    <span className="text-3xl font-bold text-cyan-400 font-sans">{agent.price}</span>
                    <span className="text-xs text-zinc-400">{agent.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {agent.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onOpenContactWithPackage(`Dedicated Agent — ${agent.type} (${agent.price})`)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider text-center cursor-pointer transition-all"
                >
                  Deploy Agent
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Add-Ons & SOPs */}
        {activeTab === 'addons' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {SUPPORT_ADDONS.map((addon, aIdx) => (
              <div key={aIdx} className="p-5 rounded-2xl border border-blue-500/25 bg-zinc-950/70 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white font-sans uppercase">{addon.name}</h4>
                    <span className="text-xs font-bold text-cyan-400">{addon.price}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4">{addon.description}</p>
                </div>
                <button
                  onClick={() => onOpenContactWithPackage(`Support Add-On — ${addon.name} (${addon.price})`)}
                  className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-blue-950 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-center cursor-pointer transition-all"
                >
                  Add to Queue
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Customer Support FAQs */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans mb-3">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs text-zinc-400">Everything you need to know about scaling support with InboxCrew.</p>
          </div>

          <div className="space-y-4">
            {supportFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-blue-500/20 bg-zinc-950/70">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center gap-2 font-sans">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-6 font-mono">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-950/50 via-zinc-950 to-blue-950/50 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.25)]">
          <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase font-sans mb-4">
            READY TO DEPLOY YOUR CUSTOMER SUPPORT TEAM?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mb-8">
            Schedule a 15-minute consultation to discuss your ticket volume, SLAs, and custom support requirements.
          </p>
          <button
            onClick={() => onOpenContactWithPackage('Customer Support Consultation')}
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-100 text-black text-xs font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Get Free Support Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
