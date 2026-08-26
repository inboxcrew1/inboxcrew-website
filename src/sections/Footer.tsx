import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InboxCrewLogo } from '../components/InboxCrewLogo';
import { ArrowRight, Check, Sparkles, Terminal, Shield, Lock, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';
import { Magnetic } from '../components/Magnetic';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  const navColumns = [
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Pricing Matrix', href: '#pricing' },
        { label: 'Our Work', href: '#portfolio' },
        { label: 'Our Process', href: '#process' },
        { label: 'Contact Us', action: onOpenContact },
      ],
    },
    {
      title: 'SERVICES',
      links: [
        { label: 'Website Development', href: '#services' },
        { label: 'E-commerce Stores', href: '#services' },
        { label: 'Instagram Growth', href: '#pricing' },
        { label: 'Reels & Shoots', href: '#pricing' },
        { label: 'Branding & Identity', href: '#services' },
        { label: 'Digital Business Solutions', href: '#services' },
      ],
    },
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'Digital Growth (₹35k)', href: '#pricing' },
        { label: 'Startup Solutions', href: '#services' },
        { label: 'Business Growth', href: '#growth' },
        { label: 'Brand Strategy', href: '#process' },
        { label: 'Creative Strategy', href: '#process' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Verified Pricing', href: '#pricing' },
        { label: 'Case Studies', href: '#portfolio' },
        { label: 'Portfolio Matrix', href: '#portfolio' },
        { label: 'Process Layers', href: '#process' },
        { label: 'FAQs & Support', href: '#about' },
      ],
    },
  ];

  return (
    <footer className="relative w-full min-h-[920px] bg-[#020510] text-white overflow-hidden border-t border-blue-950/70 font-mono select-none">
      
      {/* 1. CINEMATIC BUNNY MASCOT BACKGROUND (ADAPTIVE DESKTOP & MOBILE TUNING) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Desktop & Tablet: High-Fidelity Far-Right Positioning (Official Ref 2) */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-[position:right_center] bg-no-repeat transition-transform duration-1000 opacity-90"
          style={{ backgroundImage: 'url(/assets/images/footer-bunny.png)' }}
        />

        {/* Mobile: Subtle Top-Right Ambient Mascot Silhouette to prevent text clashes */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-[position:88%_top] bg-no-repeat opacity-30 pointer-events-none"
          style={{ backgroundImage: 'url(/assets/images/footer-bunny.png)' }}
        />

        {/* SVG Circuits around bunny stage */}
        <div className="absolute inset-0 opacity-15">
          <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
        </div>

        {/* Ambient Gradient across left & center leaving right bunny illuminated */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020510] via-[#020510]/90 to-transparent md:via-[#020510]/80" />
        
        {/* Top Edge Transition */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />

        {/* Bottom Stage Glow */}
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#020510] to-transparent" />
        
        {/* Volumetric Blue Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* 2. ATMOSPHERIC DOT-GRID OVERLAY */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none z-10" />

      {/* 3. MAIN FOOTER CONTENT CONTAINER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28 pb-12 flex flex-col justify-between min-h-[880px]">
        
        <div className="w-full lg:max-w-[70%]">
          
          {/* Top Brand Header & Direct Contact Bar */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <InboxCrewLogo size="md" withGlow={true} />
              <span className="text-2xl font-bold tracking-tight text-white uppercase font-sans">
                INBOXCREW
              </span>
            </div>
            
            <p className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">
              BUILD. BRAND. GROW.
            </p>
            
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed mb-6">
              A creative digital agency helping businesses and startups build, brand, and grow online through design, technology and digital strategy.
            </p>

            {/* Verified Direct Contact Telemetry Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="tel:+918534040174"
                className="px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-zinc-300 hover:text-white hover:border-blue-400 flex items-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+91 8534040174</span>
              </a>

              <a
                href="mailto:info@inboxcrew.in"
                className="px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-zinc-300 hover:text-white hover:border-blue-400 flex items-center gap-2 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>info@inboxcrew.in</span>
              </a>

              <a
                href="https://wa.me/918534040174"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 flex items-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* CTA Banner with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <TiltCard3D maxTilt={6} glareOpacity={0.25} scale={1.015} className="rounded-2xl">
              <div className="p-6 sm:p-8 rounded-2xl bg-blue-950/30 border border-blue-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,102,255,0.2)] relative overflow-hidden group hover:border-blue-400/50 transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl pointer-events-none -z-10" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2 text-blue-400 text-xs tracking-widest uppercase mb-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>TERMINAL // DISPATCH_PROJECT</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight font-sans">
                      LET'S BUILD SOMETHING GREAT.
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1">
                      Have a project in mind? Let's create something amazing together.
                    </p>
                  </div>

                  {/* Rounded Email / Contact Field */}
                  <div className="md:col-span-5">
                    <form onSubmit={handleSubscribe} className="relative flex items-center">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter work email..."
                        className="w-full pl-4 pr-14 py-3 rounded-full bg-black/80 border border-blue-500/30 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all shadow-inner font-mono"
                      />
                      <Magnetic strength={0.3} className="absolute right-1.5">
                        <button
                          type="submit"
                          aria-label="Submit project inquiry"
                          className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-transform active:scale-90 shadow-md cursor-pointer border border-blue-400/50"
                        >
                          {subscribed ? (
                            <Check className="w-4 h-4 text-emerald-300" />
                          ) : (
                            <ArrowRight className="w-4 h-4" />
                          )}
                        </button>
                      </Magnetic>
                    </form>
                    {subscribed && (
                      <p className="text-[11px] text-emerald-400 mt-1.5 pl-3">
                        [TRANSMISSION LOGGED] We will establish contact shortly.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </motion.div>

          {/* 4 Clean Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-500/20 pb-2 flex items-center gap-1.5 font-sans">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  <span>{col.title}</span>
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.action ? (
                        <button
                          onClick={link.action}
                          className="text-xs text-zinc-400 hover:text-blue-300 hover:translate-x-1 transition-all text-left cursor-pointer font-mono"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-xs text-zinc-400 hover:text-blue-300 hover:translate-x-1 transition-all inline-block font-mono"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dedicated Mobile Mascot Visual Showcase (Clean, Perfectly Positioned for Mobile Phones) */}
          <div className="block md:hidden mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-b from-blue-950/40 via-zinc-950/80 to-black p-4 flex items-center justify-between shadow-[0_0_30px_rgba(0,102,255,0.2)]">
              
              {/* Mascot Info */}
              <div className="space-y-1 z-10 max-w-[60%]">
                <div className="inline-flex items-center gap-1.5 text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>IBC MASCOT // 3D LAB</span>
                </div>
                <div className="text-sm font-bold text-white font-sans uppercase">
                  INBOXCREW
                </div>
                <p className="text-[10px] text-zinc-400 font-mono">
                  Build. Brand. Grow.
                </p>
              </div>

              {/* Compact Mascot Visual on the Right */}
              <div className="w-28 h-32 relative shrink-0">
                <div
                  className="w-full h-full bg-contain bg-right bg-no-repeat filter drop-shadow-[0_0_15px_rgba(0,102,255,0.6)]"
                  style={{ backgroundImage: 'url(/assets/images/footer-bunny.png)' }}
                />
              </div>

            </div>
          </div>

        </div>

        {/* 4. BOTTOM BAR */}
        <div className="w-full pt-8 border-t border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
          
          {/* Bottom-Left: Follow Us + Social Icons */}
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-widest text-[11px] text-blue-300">Follow Us</span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <Magnetic strength={0.3}>
                <a
                  href="https://instagram.com/inbox.crew"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-blue-950/40 border border-blue-500/30 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </Magnetic>

              {/* LinkedIn */}
              <Magnetic strength={0.3}>
                <a
                  href="https://linkedin.com/company/inboxcrew"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-blue-950/40 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(0,102,255,0.5)] transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Bottom-Center: Copyright */}
          <div className="text-center">
            <p>© 2026 InboxCrew. All rights reserved. • inboxcrew.in</p>
          </div>

          {/* Bottom-Right: Legal Links */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
};
