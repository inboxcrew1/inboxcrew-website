import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HackerTypeLayerProps {
  isActive?: boolean;
  className?: string;
  speed?: number;
  theme?: 'blue' | 'cyan' | 'matrix';
}

const CODE_SNIPPETS = [
  'const inbox = new DigitalSystem();',
  'inbox.build().brand().grow();',
  'initializeExperience({ secure: true, nodes: 64 });',
  'await connectGlobalEdge("us-east", "ap-east");',
  'const cipher = createCipheriv("aes-256-gcm", key, iv);',
  'render(<InboxCrewApp telemetry={active} />);',
  'pipeline.execute({ strategy: true, design: true, tech: true });',
  'const response = await dispatchPayload(0x7F4B);',
  'network.nodes.forEach(n => n.synchronize());',
  'export default defineAgencyCore({ latency: 0.04 });',
  'const token = generateHandshake("SHA-256");',
  'system.status === "OPTIMAL" ? deploy() : calibrate();',
];

export const HackerTypeLayer: React.FC<HackerTypeLayerProps> = ({
  isActive = true,
  className = '',
  speed = 90,
  theme = 'blue',
}) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const randomLine = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
      const prefix = `[0x${Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, '0')}] `;
      setLines((prev) => [...prev.slice(-7), prefix + randomLine]);
    }, speed);

    return () => clearInterval(interval);
  }, [isActive, speed]);

  const colorMap = {
    blue: 'text-blue-400/70 border-blue-500/20 bg-blue-950/20',
    cyan: 'text-cyan-400/70 border-cyan-500/20 bg-cyan-950/20',
    matrix: 'text-emerald-400/70 border-emerald-500/20 bg-emerald-950/20',
  };

  return (
    <div
      className={`font-mono text-[11px] leading-relaxed select-none pointer-events-none rounded-lg p-3 border backdrop-blur-md overflow-hidden ${colorMap[theme]} ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-blue-500/20 pb-1 mb-2 text-[9px] text-blue-400/60 uppercase tracking-widest">
        <span>DEV_CONSOLE://INBOXCREW_INTERNAL</span>
        <span className="animate-pulse">● STREAMING</span>
      </div>
      <div className="space-y-0.5 overflow-hidden">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="truncate font-mono"
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
