import React from 'react';
import { motion } from 'framer-motion';

export type Currency = 'INR' | 'USD';

interface CurrencyToggleProps {
  currency: Currency;
  onChange: (c: Currency) => void;
}

export const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ currency, onChange }) => {
  return (
    <div className="inline-flex items-center p-1 rounded-full bg-zinc-900/90 border border-blue-500/30 backdrop-blur-xl shadow-inner font-mono text-xs select-none">
      <button
        onClick={() => onChange('INR')}
        className={`relative px-4 py-1.5 rounded-full font-bold tracking-wider transition-colors cursor-pointer ${
          currency === 'INR' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        {currency === 'INR' && (
          <motion.div
            layoutId="currency-active"
            className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(0,102,255,0.6)]"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span>🇮🇳</span>
          <span>INR (₹)</span>
        </span>
      </button>

      <button
        onClick={() => onChange('USD')}
        className={`relative px-4 py-1.5 rounded-full font-bold tracking-wider transition-colors cursor-pointer ${
          currency === 'USD' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        {currency === 'USD' && (
          <motion.div
            layoutId="currency-active"
            className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(0,102,255,0.6)]"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span>🌐</span>
          <span>USD ($)</span>
        </span>
      </button>
    </div>
  );
};
