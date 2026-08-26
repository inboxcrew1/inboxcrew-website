import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Wifi, Lock } from 'lucide-react';

export const TerminalHUD: React.FC = () => {
  const [hash, setHash] = useState('0x8F4A2B9C');
  const [latency, setLatency] = useState('0.08ms');
  const [packets, setPackets] = useState(14820);

  useEffect(() => {
    const interval = setInterval(() => {
      // Dynamic simulated cyber telemetry
      const randomHex = '0x' + Math.floor(Math.random() * 0xffffffff).toString(16).toUpperCase().padStart(8, '0');
      setHash(randomHex);
      setLatency((0.04 + Math.random() * 0.06).toFixed(2) + 'ms');
      setPackets((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/60 border-y border-blue-500/20 backdrop-blur-md px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-zinc-400 select-none">
      {/* Left: Terminal Node Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-blue-400">
          <Terminal className="w-3 h-3" />
          <span className="font-bold tracking-wider">IBC_CYBER_TERMINAL://ROOT</span>
        </div>
        <span className="text-zinc-700 hidden sm:inline">|</span>
        <div className="flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>STATUS: SECURE</span>
        </div>
      </div>

      {/* Center: Live Hash & Encryption Protocol */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <Lock className="w-3 h-3 text-blue-400" />
          <span>CIPHER: AES-GCM-256</span>
        </div>
        <span className="text-zinc-700">|</span>
        <div className="flex items-center gap-1 text-zinc-300">
          <span className="text-zinc-500">HASH:</span>
          <span className="text-blue-400 font-bold">{hash}</span>
        </div>
      </div>

      {/* Right: Latency & Node Stream */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3 h-3 text-blue-400" />
          <span>PING: <span className="text-white font-bold">{latency}</span></span>
        </div>
        <span className="text-zinc-700 hidden sm:inline">|</span>
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3 h-3 text-indigo-400" />
          <span>STREAM: <span className="text-blue-300">{packets.toLocaleString()} PKTS</span></span>
        </div>
      </div>
    </div>
  );
};
