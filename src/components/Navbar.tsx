import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { InboxCrewLogo } from './InboxCrewLogo';
import { SquashHamburger } from './SquashHamburger';
import { ScrambleText } from './ScrambleText';
import { Magnetic } from './Magnetic';
import { Activity, Sparkles, Phone, MessageSquare, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenHandshake?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenHandshake }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Customer Support', path: '/customer-support' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Locations', path: '/locations' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-mono px-4 sm:px-8 md:px-12 flex items-center justify-between pointer-events-none ${
          isScrolled ? 'h-16 bg-black/80 backdrop-blur-xl border-b border-blue-500/20' : 'h-20 bg-transparent'
        }`}
      >
        {/* Left: Brand Logo Capsule */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <Magnetic strength={0.25}>
            <Link
              to="/"
              className="glass-pill px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2.5 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-blue-500/30 bg-black/70 backdrop-blur-xl hover:border-blue-400 hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all"
              aria-label="INBOXCREW Home"
            >
              <InboxCrewLogo size="sm" withGlow={true} />
              <span className="text-xs font-bold tracking-widest text-white uppercase font-sans">
                INBOXCREW
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Navigation Links Pill */}
          <nav className="hidden xl:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-blue-500/25 bg-black/60 backdrop-blur-xl shadow-inner">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`px-3 py-1 text-xs rounded-full transition-all font-mono tracking-wide ${
                    isActive
                      ? 'bg-blue-600/40 text-white font-bold border border-blue-400/40 shadow-[0_0_10px_rgba(0,102,255,0.3)]'
                      : 'text-zinc-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ScrambleText text={item.label} isHovered={hoveredNav === item.label} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Consultation CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
          
          {/* Quick WhatsApp Link on Desktop */}
          <a
            href="https://wa.me/918534040174"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-[11px] hover:bg-emerald-900/50 transition-all"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA: Get Free Consultation */}
          <Magnetic strength={0.3}>
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white hover:bg-zinc-100 text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Free Consultation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            </motion.button>
          </Magnetic>

          {/* Mobile / Tablet Menu Trigger */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full border border-blue-500/30 bg-black/80 text-white hover:bg-blue-600/20 transition-all flex items-center justify-center cursor-pointer"
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMenuOpen}
            >
              <SquashHamburger isOpen={isMenuOpen} size="md" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl xl:hidden pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto font-mono"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest border-b border-blue-500/20 pb-2 mb-2">
                SYS_NAV // INBOXCREW DIGITAL ECOSYSTEM
              </div>

              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-600/30 border border-blue-400/50 text-white'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-blue-400">→</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Contact Block */}
            <div className="pt-6 border-t border-blue-500/20 space-y-3">
              <div className="text-xs text-zinc-400">
                Official Inquiries: <a href="tel:+918534040174" className="text-blue-400">+91 8534040174</a>
              </div>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider text-center cursor-pointer shadow-[0_0_20px_rgba(0,102,255,0.4)]"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
