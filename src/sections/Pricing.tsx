import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltCard3D } from '../components/TiltCard3D';
import { VideoBackground } from '../components/VideoBackground';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';
import { ScannerLine } from '../components/ScannerLine';
import {
  Check,
  Zap,
  Star,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Instagram,
  Camera,
  Video,
  Layers,
  ArrowRight,
  Clock,
  MessageSquare,
  Sparkles,
  Award,
} from 'lucide-react';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

type PricingCategory = 'all' | 'web' | 'growth' | 'launch' | 'shoots' | 'branding';

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState<PricingCategory>('all');

  const webPlans = [
    {
      id: 'starter-web',
      name: 'Starter Website',
      price: '₹6,000',
      period: 'one-time',
      delivery: '3–5 DAYS',
      badge: 'STARTER',
      subtitle: 'Perfect for startups, local shops, restaurants, and service providers.',
      features: [
        'Single Page Website',
        'Mobile Responsive Design',
        'Contact & Lead Form',
        'WhatsApp Direct Integration',
        'Google Maps Integration',
        'Social Media Links',
        'Basic SEO Setup',
        '1 Revision Round',
      ],
      popular: false,
    },
    {
      id: 'pro-web',
      name: 'Professional Website',
      price: '₹15,000',
      period: 'one-time',
      delivery: '7–10 DAYS',
      badge: 'MOST POPULAR',
      subtitle: 'Ideal for growing businesses and established brands.',
      features: [
        '5–10 Custom Pages',
        'Premium UI/UX Design',
        'Mobile & Tablet Responsive',
        'Contact & Lead Capture Forms',
        'WhatsApp Integration',
        'Blog Setup & Architecture',
        'Google Maps Integration',
        'Speed & Performance Optimization',
        'Basic SEO Optimization',
        '3 Revision Rounds',
      ],
      popular: true,
    },
    {
      id: 'ecom-web',
      name: 'E-Commerce Store',
      price: '₹25,000',
      period: 'one-time',
      delivery: '10–15 DAYS',
      badge: 'FULL COMMERCE',
      subtitle: 'Complete online selling & checkout solution.',
      features: [
        'Premium Online Store',
        'Up To 100 Product Listings',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management Dashboard',
        'Product Categories Setup',
        'Mobile Responsive Design',
        'WhatsApp Integration',
        'Basic SEO Setup',
        'Admin Training & Support',
      ],
      popular: false,
    },
  ];

  const socialPlans = [
    {
      id: 'basic-growth',
      name: 'Basic Growth',
      price: '₹8,000',
      period: '/ month',
      badge: 'MONTHLY',
      subtitle: 'Essential visual presence and community engagement.',
      features: [
        '12 Creative Posts',
        '8 Story Designs',
        'Caption Writing',
        'Targeted Hashtag Research',
        'Account Management',
      ],
      popular: false,
    },
    {
      id: 'biz-growth',
      name: 'Business Growth',
      price: '₹15,000',
      period: '/ month',
      badge: 'RECOMMENDED',
      subtitle: 'Consistent reel content, calendar scheduling, and active management.',
      features: [
        '20 Creative Posts',
        '15 Story Designs',
        '8 Reels Editing',
        'Monthly Content Calendar',
        'Community Management',
        'Monthly Performance Report',
      ],
      popular: true,
    },
    {
      id: 'premium-brand',
      name: 'Premium Brand',
      price: '₹25,000',
      period: '/ month',
      badge: 'FULL AGENCY',
      subtitle: 'Comprehensive brand takeover and viral growth roadmap.',
      features: [
        'Complete Account Management',
        '30 High-Impact Posts',
        '20 Story Designs',
        '15 Cinematic Reels',
        'Advanced Growth Strategy',
        'Monthly Analytics & Strategic Insights',
      ],
      popular: false,
    },
  ];

  const contentShoots = [
    {
      title: 'Reels Editing',
      price: '₹500',
      period: '/ reel',
      icon: Video,
      features: ['Professional Editing', 'Trending Effects', 'Captions & Subtitles', 'Music Synchronization'],
    },
    {
      title: 'Reels Shoot + Edit',
      price: '₹3,000',
      period: '/ session',
      icon: Video,
      features: ['On-Site Shoot', 'Professional Editing', 'Color Correction', 'Social Media Ready Export'],
    },
    {
      title: 'Product Photography',
      price: '₹2,500',
      period: 'starting',
      icon: Camera,
      features: ['Professional Product Photos', 'Retouching & Editing', 'High Resolution Delivery'],
    },
    {
      title: 'Business Shoot',
      price: '₹5,000',
      period: 'starting',
      icon: Camera,
      features: ['Store / Office Coverage', 'Team Photography', 'Interior & Exterior Shots', 'Social Media Content'],
    },
  ];

  const brandingItems = [
    { name: 'Logo Design', price: '₹2,500', icon: '🎨' },
    { name: 'Business Card Design', price: '₹1,000', icon: '📇' },
    { name: 'Brochure Design', price: '₹2,500', icon: '📄' },
    { name: 'Menu Design', price: '₹1,500', icon: '📋' },
    { name: 'Social Media Kit', price: '₹3,000', icon: '📱' },
    { name: 'Google Business Profile Setup', price: '₹2,000', icon: '📍' },
    { name: 'WhatsApp Business Setup', price: '₹1,500', icon: '💬' },
  ];

  const handleSelect = (planName: string, price: string) => {
    onSelectPackage(`${planName} (${price})`);
  };

  const handleWhatsApp = (planName: string, price: string) => {
    const text = encodeURIComponent(
      `Hello InboxCrew! I would like to book the *${planName}* (${price}). Please share the onboarding details.`
    );
    window.open(`https://wa.me/918534040174?text=${text}`, '_blank');
  };

  return (
    <section
      id="pricing"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black py-24 px-6 sm:px-12 font-mono select-none"
    >
      {/* Laser Scanning Line */}
      <ScannerLine duration={7} color="rgba(0, 102, 255, 0.35)" />

      {/* Background Media */}
      <VideoBackground
        poster="/assets/images/laptop_dashboard.jpg"
        overlayOpacity={0.88}
        accentGlow={true}
      />

      {/* SVG Circuits */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10">
        <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_20px_rgba(0,102,255,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRICING MATRIX // VERIFIED TIERS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase leading-[1.08] font-sans mb-4"
          >
            TRANSPARENT VALUE. MEASURABLE RESULTS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed"
          >
            Fixed, transparent pricing designed for startups, growing brands, and businesses looking for real momentum.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'web', label: 'Website Development' },
              { id: 'growth', label: 'Instagram Growth' },
              { id: 'launch', label: 'All-In-One Launch (₹35k)' },
              { id: 'shoots', label: 'Reels & Shoots' },
              { id: 'branding', label: 'Branding À La Carte' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as PricingCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.6)] border border-blue-400'
                    : 'bg-zinc-950/60 border border-blue-500/25 text-zinc-400 hover:text-white hover:border-blue-500/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. SIGNATURE ALL-IN-ONE DIGITAL GROWTH PACKAGE (₹35,000) */}
        {(activeTab === 'all' || activeTab === 'launch') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <TiltCard3D maxTilt={6} glareOpacity={0.3} scale={1.01} className="w-full rounded-3xl">
              <div className="relative p-7 sm:p-10 rounded-3xl border-2 border-blue-400 bg-gradient-to-br from-blue-950/60 via-zinc-950/90 to-black backdrop-blur-2xl shadow-[0_0_60px_rgba(0,102,255,0.35)] overflow-hidden">
                
                {/* Ambient Radial Spotlight */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Specs */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                        🚀 COMPLETE BUSINESS LAUNCH SOLUTION
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold tracking-widest uppercase">
                        PERFECT FOR FIRST-TIME ONLINE
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-sans">
                      DIGITAL GROWTH PACKAGE
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                      Everything your business needs to establish a premium online presence, capture leads, and launch authority from Day 1.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {[
                        'Professional Custom Website',
                        'Complete Instagram Setup',
                        'Google Business Profile Setup',
                        'WhatsApp Business Setup',
                        'Brand Identity & Logo Design',
                        'Initial Launch Content Creation',
                        'Digital Marketing Strategic Consultation',
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-mono text-white bg-blue-950/30 p-2.5 rounded-lg border border-blue-500/20"
                        >
                          <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-blue-300" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Pricing & Actions */}
                  <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center p-6 sm:p-8 rounded-2xl bg-black/60 border border-blue-500/30 text-center lg:text-right">
                    <span className="text-xs text-blue-400 font-mono tracking-widest uppercase mb-1">
                      COMPLETE BUNDLE INVESTMENT
                    </span>
                    
                    <div className="text-5xl sm:text-6xl font-bold text-white font-sans mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 drop-shadow-[0_0_30px_rgba(0,102,255,0.6)]">
                      ₹35,000
                    </div>

                    <span className="text-[11px] text-zinc-400 font-mono mb-6">
                      ALL-INCLUSIVE ONE-TIME LAUNCH
                    </span>

                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-end">
                      <button
                        onClick={() => handleWhatsApp('Digital Growth Package', '₹35,000')}
                        className="px-5 py-3 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Us</span>
                      </button>

                      <button
                        onClick={() => handleSelect('Digital Growth Package (All-in-One)', '₹35,000')}
                        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_25px_rgba(0,102,255,0.5)] border border-blue-400"
                      >
                        <span>INITIALIZE PLAN</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </TiltCard3D>
          </motion.div>
        )}

        {/* 2. WEBSITE DEVELOPMENT TIERS */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 border-b border-blue-500/20 pb-3">
              <Rocket className="w-4 h-4 text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-sans">
                WEBSITE DEVELOPMENT PACKAGES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webPlans.map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <TiltCard3D maxTilt={10} glareOpacity={0.2} scale={1.02} className="h-full">
                    <div
                      className={`h-full p-6 sm:p-7 rounded-2xl border flex flex-col justify-between backdrop-blur-xl transition-all ${
                        plan.popular
                          ? 'border-blue-400 bg-blue-950/30 shadow-[0_0_35px_rgba(0,102,255,0.25)]'
                          : 'border-blue-500/20 bg-zinc-950/70'
                      }`}
                    >
                      <div>
                        {/* Badge & Delivery */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                              plan.popular
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-blue-950/60 text-blue-300 border border-blue-500/30'
                            }`}
                          >
                            {plan.badge}
                          </span>
                          <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-blue-400" />
                            <span>{plan.delivery}</span>
                          </span>
                        </div>

                        {/* Title & Price */}
                        <h4 className="text-xl font-bold text-white uppercase font-sans mb-1">
                          {plan.name}
                        </h4>
                        <p className="text-xs text-zinc-400 font-mono mb-4">
                          {plan.subtitle}
                        </p>

                        <div className="flex items-baseline gap-2 mb-6 pb-4 border-b border-blue-500/20">
                          <span className="text-3xl sm:text-4xl font-bold text-white font-sans">
                            {plan.price}
                          </span>
                          <span className="text-[11px] text-zinc-400 font-mono">{plan.period}</span>
                        </div>

                        {/* Feature List */}
                        <ul className="space-y-2.5 mb-8">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                              <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleSelect(plan.name, plan.price)}
                        className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          plan.popular
                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                            : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-blue-500/30'
                        }`}
                      >
                        <span>SELECT {plan.name.toUpperCase()}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </TiltCard3D>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 3. INSTAGRAM MANAGEMENT & GROWTH TIERS */}
        {(activeTab === 'all' || activeTab === 'growth') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 border-b border-blue-500/20 pb-3">
              <Instagram className="w-4 h-4 text-pink-400" />
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-sans">
                INSTAGRAM MANAGEMENT & GROWTH
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialPlans.map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <TiltCard3D maxTilt={10} glareOpacity={0.2} scale={1.02} className="h-full">
                    <div
                      className={`h-full p-6 sm:p-7 rounded-2xl border flex flex-col justify-between backdrop-blur-xl transition-all ${
                        plan.popular
                          ? 'border-blue-400 bg-blue-950/30 shadow-[0_0_35px_rgba(0,102,255,0.25)]'
                          : 'border-blue-500/20 bg-zinc-950/70'
                      }`}
                    >
                      <div>
                        {/* Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                              plan.popular
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-blue-950/60 text-blue-300 border border-blue-500/30'
                            }`}
                          >
                            {plan.badge}
                          </span>
                        </div>

                        {/* Title & Price */}
                        <h4 className="text-xl font-bold text-white uppercase font-sans mb-1">
                          {plan.name}
                        </h4>
                        <p className="text-xs text-zinc-400 font-mono mb-4">
                          {plan.subtitle}
                        </p>

                        <div className="flex items-baseline gap-2 mb-6 pb-4 border-b border-blue-500/20">
                          <span className="text-3xl sm:text-4xl font-bold text-white font-sans">
                            {plan.price}
                          </span>
                          <span className="text-[11px] text-zinc-400 font-mono">{plan.period}</span>
                        </div>

                        {/* Feature List */}
                        <ul className="space-y-2.5 mb-8">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                              <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleSelect(plan.name, plan.price + plan.period)}
                        className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          plan.popular
                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                            : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-blue-500/30'
                        }`}
                      >
                        <span>START {plan.name.toUpperCase()}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </TiltCard3D>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 4. REELS, CONTENT CREATION & BUSINESS SHOOTS */}
        {(activeTab === 'all' || activeTab === 'shoots') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 border-b border-blue-500/20 pb-3">
              <Camera className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-sans">
                REELS, CONTENT CREATION & BUSINESS SHOOTS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contentShoots.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-blue-500/20 bg-zinc-950/70 backdrop-blur-xl flex flex-col justify-between hover:border-blue-400 transition-all group"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>

                      <h4 className="text-base font-bold text-white font-sans uppercase mb-1">
                        {item.title}
                      </h4>

                      <div className="text-2xl font-bold text-blue-300 font-sans mb-3">
                        {item.price}{' '}
                        <span className="text-xs text-zinc-400 font-mono font-normal">
                          {item.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs text-zinc-300 font-mono">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-400" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleSelect(item.title, item.price)}
                      className="w-full py-2 rounded-full bg-black/60 hover:bg-blue-600 border border-blue-500/30 text-white text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Book Session
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. BRANDING SERVICES À LA CARTE */}
        {(activeTab === 'all' || activeTab === 'branding') && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6 border-b border-blue-500/20 pb-3">
              <Layers className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-sans">
                BRANDING SERVICES & DIGITAL SETUP (À LA CARTE)
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {brandingItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.name, item.price)}
                  className="p-4 rounded-xl border border-blue-500/20 bg-zinc-950/60 backdrop-blur-md flex flex-col justify-between hover:border-blue-400 hover:bg-blue-950/20 transition-all cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {item.price}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 pt-6 border-t border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold">● FAST ONBOARDING</span>
            <span className="text-zinc-600">|</span>
            <span>DIRECT WHATSAPP & PHONE SUPPORT</span>
          </div>
          <a
            href="https://wa.me/918534040174"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-bold tracking-wider flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CUSTOM QUOTE? CHAT DIRECTLY (+91 8534040174)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
