import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Portfolio } from '../sections/Portfolio';
import { Terminal, Award, Sparkles } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'InboxCrew Selected Work & Case Studies',
    description: 'Explore client case studies, custom website architectures, e-commerce storefronts, and brand design projects by InboxCrew.',
    url: 'https://inboxcrew.in/portfolio',
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Selected Work & Case Studies — InboxCrew Digital Lab"
        description="Browse our portfolio of high-conversion websites, direct-to-consumer e-commerce stores, brand identity systems, and digital marketing campaigns."
        canonicalPath="/portfolio"
        schema={portfolioSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>DEPLOYED CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            SELECTED WORK & CASE STUDIES
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Real brands. Measurable outcomes. Explore how InboxCrew engineers high-speed web systems, iconic identities, and growth infrastructure for businesses across India and global markets.
          </p>
        </div>

        {/* Core Portfolio Matrix */}
        <Portfolio />

      </div>
    </div>
  );
};
