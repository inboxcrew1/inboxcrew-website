import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { AlertTriangle, Home, ArrowRight, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <SEOHead
        title="404 — Page Went Offline | InboxCrew"
        description="The requested page could not be located on the InboxCrew digital network."
        canonicalPath="/404"
      />

      <div className="relative z-10 max-w-lg p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-zinc-950/90 shadow-[0_0_60px_rgba(0,102,255,0.3)]">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto mb-6">
          <Terminal className="w-8 h-8 animate-pulse" />
        </div>

        <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-2">
          ERROR 404 // NODE_NOT_FOUND
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase font-sans mb-4">
          LOOKS LIKE THIS PAGE WENT OFFLINE.
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
          The transmission path you attempted to reach does not exist or has been relocated.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 rounded-full bg-zinc-900 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
