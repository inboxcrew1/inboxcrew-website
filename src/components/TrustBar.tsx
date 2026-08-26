import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Globe, Zap, Users, HeartHandshake } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const metrics = [
    { label: 'Projects Delivered', value: '250+', icon: Award, detail: 'Web, Mobile & Brand' },
    { label: 'Businesses Served', value: '100+', icon: Users, detail: 'India & International' },
    { label: 'Countries Reached', value: '10+', icon: Globe, detail: 'Global Client Network' },
    { label: 'Client Satisfaction', value: '98%', icon: HeartHandshake, detail: 'Long-term Partnerships' },
    { label: 'Fast Turnaround', value: '3–5 Days', icon: Zap, detail: 'Starter Web Launches' },
  ];

  return (
    <section className="relative w-full py-10 bg-zinc-950/80 border-y border-blue-500/20 backdrop-blur-xl font-mono select-none overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-3 rounded-xl hover:bg-blue-950/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                    {item.value}
                  </span>
                </div>
                <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                  {item.detail}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
