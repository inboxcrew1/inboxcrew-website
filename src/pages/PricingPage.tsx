import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { CurrencyToggle, Currency } from '../components/CurrencyToggle';
import { Pricing } from '../sections/Pricing';
import { SUPPORT_MONTHLY_PLANS } from '../data/customerSupportData';
import { TiltCard3D } from '../components/TiltCard3D';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, HelpCircle, Terminal } from 'lucide-react';

interface PricingPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenContactWithPackage }) => {
  const [currency, setCurrency] = useState<Currency>('INR');

  const pricingFaqs = [
    {
      question: 'Are there any hidden costs in the website development packages?',
      answer: 'No. All InboxCrew packages feature 100% upfront, transparent pricing. The quoted price includes UI/UX design, mobile responsiveness, WhatsApp integration, basic SEO, and revisions.',
    },
    {
      question: 'How does payment work for international clients (USD)?',
      answer: 'International clients can pay via Stripe, PayPal, or Wire Transfer with invoicing in USD ($). We provide dedicated timezone flexibility for our US, UK, and European clients.',
    },
    {
      question: 'Can I customize a package or bundle multiple services?',
      answer: 'Yes! Our ₹35,000 All-in-One Digital Growth Package is pre-bundled for complete business launches, or you can request a custom tailored proposal via consultation.',
    },
  ];

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'InboxCrew Official Pricing & Packages Matrix',
    description: 'Transparent pricing for website development, e-commerce stores, Instagram growth, and customer support teams in INR and USD.',
    url: 'https://inboxcrew.in/pricing',
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Official Pricing & Packages (INR / USD) — InboxCrew Digital Lab"
        description="Transparent website development (from ₹6,000 / $69), Instagram management, ₹35,000 growth bundle, and customer support pricing (from $249/mo)."
        canonicalPath="/pricing"
        schema={pricingSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>TRANSPARENT VALUE ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            SYSTEMS & PRICING MATRIX
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
            No hidden costs. No bloated agency retainers. Choose your system module, view verified deliverables, and deploy immediately.
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center mb-6">
            <CurrencyToggle currency={currency} onChange={setCurrency} />
          </div>
        </div>

        {/* Core Interactive Pricing Matrix Component */}
        <div className="mb-20">
          <Pricing onSelectPackage={onOpenContactWithPackage} />
        </div>

        {/* Global Customer Support Pricing Overview */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-2">
              GLOBAL OUTSOURCING TIERS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-sans">
              24/7 CUSTOMER SUPPORT PLANS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORT_MONTHLY_PLANS.map((plan) => (
              <div key={plan.id} className="p-6 rounded-2xl border border-blue-500/30 bg-zinc-950/80 text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-sans mb-1">{plan.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{plan.price} <span className="text-xs text-zinc-400">{plan.period}</span></div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onOpenContactWithPackage(`Customer Support — ${plan.name}`)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider text-center cursor-pointer transition-all"
                >
                  Select Support
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto text-left mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white uppercase font-sans">PRICING FAQS</h2>
          </div>
          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => (
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

      </div>
    </div>
  );
};
