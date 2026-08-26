import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus, Maximize2, Send, Play, Pause, Trash2, Zap, Shield, Sparkles } from 'lucide-react';

interface CyberTerminalWidgetProps {
  onOpenContact: () => void;
  onTriggerOverdrive: () => void;
}

const STREAM_SNIPPETS = [
  'const system = new InboxCrewOS({ env: "production", region: "ap-south-1" });',
  'await system.initializePipeline({ build: true, brand: true, grow: true });',
  'const nodes = await cluster.getNodes({ status: "ONLINE", count: 64 });',
  'telemetry.track({ latency: "0.02ms", memory: "128MB", throughput: "4.8GB/s" });',
  'securityEngine.verifyHandshake({ cipher: "AES-256-GCM", key: "0x7F4A" });',
  'seoMatrix.optimizeRoutes({ canonical: "https://inboxcrew.in", score: 99 });',
  'render(<DigitalGrowthEngine targetROI="3.8x" scale="unlimited" />);',
  'cache.hydrate({ ttl: 86400, edge: true, compression: "brotli" });',
  'metaAds.syncCampaigns({ roas: "4.2x", status: "ACTIVE" });',
  'ecomPipeline.deployCheckout({ instantPay: true, latency: "42ms" });',
];

export const CyberTerminalWidget: React.FC<CyberTerminalWidgetProps> = ({
  onOpenContact,
  onTriggerOverdrive,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(true);
  const [logs, setLogs] = useState<string[]>([
    'IBC TERMINAL v3.4 [SECURE LAB ENVIRONMENT]',
    'Type "help" for commands, or watch live telemetry stream.',
    '-------------------------------------------------------',
  ]);
  const [inputVal, setInputVal] = useState('');
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Auto-stream code snippets
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      const randomSnippet = STREAM_SNIPPETS[Math.floor(Math.random() * STREAM_SNIPPETS.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      const hex = '0x' + Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, '0');
      
      setLogs((prev) => {
        const next = [...prev.slice(-30), `[${timestamp}] [${hex}] ${randomSnippet}`];
        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isStreaming]);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    setLogs((prev) => [...prev, `> ${inputVal}`]);
    setInputVal('');

    switch (cmd) {
      case 'help':
        setLogs((prev) => [
          ...prev,
          'Available commands:',
          '  help        - Show available system commands',
          '  pricing     - Navigate to Pricing matrix & packages',
          '  services    - Navigate to Digital systems & services',
          '  work        - Navigate to Selected portfolio work',
          '  contact     - Open "Let\'s Talk" intake modal',
          '  whatsapp    - Open direct WhatsApp chat with team',
          '  overdrive   - Activate Quantum Digital Mode Easter Egg',
          '  clear       - Clear terminal screen',
          '  whoami      - Display current node credentials',
        ]);
        break;
      case 'pricing':
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        setLogs((prev) => [...prev, '[EXECUTED] Navigated to #pricing']);
        break;
      case 'services':
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        setLogs((prev) => [...prev, '[EXECUTED] Navigated to #services']);
        break;
      case 'work':
      case 'portfolio':
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        setLogs((prev) => [...prev, '[EXECUTED] Navigated to #portfolio']);
        break;
      case 'contact':
        onOpenContact();
        setLogs((prev) => [...prev, '[EXECUTED] Initialized contact modal']);
        break;
      case 'whatsapp':
        window.open('https://wa.me/918534040174', '_blank');
        setLogs((prev) => [...prev, '[EXECUTED] Opening WhatsApp connection (+91 8534040174)']);
        break;
      case 'overdrive':
      case 'matrix':
        onTriggerOverdrive();
        setLogs((prev) => [...prev, '[WARN] QUANTUM DIGITAL OVERDRIVE ACTIVATED']);
        break;
      case 'clear':
        setLogs(['IBC TERMINAL v3.4 [SECURE LAB ENVIRONMENT]', '-------------------------------------------------------']);
        break;
      case 'whoami':
        setLogs((prev) => [
          ...prev,
          'AGENT: INBOXCREW_GUEST_NODE_0x7F',
          'STATUS: AUTHENTICATED // ACCESS_LEVEL: FULL',
          'REGION: GLOBAL_EDGE',
        ]);
        break;
      default:
        setLogs((prev) => [
          ...prev,
          `Unknown command: "${cmd}". Type "help" for a list of commands.`,
        ]);
        break;
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80] font-mono select-none">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="w-[90vw] sm:w-[480px] h-[340px] rounded-2xl border border-blue-500/40 bg-black/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,102,255,0.35)] flex flex-col overflow-hidden text-left"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-blue-950/40 border-b border-blue-500/30">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-bold text-white tracking-widest uppercase">
                  INBOXCREW // LIVE_CODE_CLI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsStreaming(!isStreaming)}
                  className={`p-1 rounded text-zinc-400 hover:text-white transition-colors ${
                    isStreaming ? 'text-emerald-400' : 'text-zinc-600'
                  }`}
                  title={isStreaming ? 'Pause Stream' : 'Resume Stream'}
                >
                  {isStreaming ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setLogs(['IBC TERMINAL CLEARED'])}
                  className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                  title="Clear"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                  title="Minimize"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Log Stream Output */}
            <div
              ref={logContainerRef}
              className="flex-1 p-3.5 overflow-y-auto space-y-1 text-[11px] leading-relaxed text-blue-300/90 font-mono bg-black/80"
            >
              {logs.map((log, idx) => {
                const isCmd = log.startsWith('>');
                const isExecuted = log.startsWith('[EXECUTED]');
                const isWarn = log.startsWith('[WARN]');
                return (
                  <div
                    key={idx}
                    className={`break-words ${
                      isCmd
                        ? 'text-white font-bold'
                        : isExecuted
                        ? 'text-emerald-300 font-bold'
                        : isWarn
                        ? 'text-amber-300 font-bold'
                        : 'text-blue-300/80'
                    }`}
                  >
                    {log}
                  </div>
                );
              })}
            </div>

            {/* Interactive Input Prompt */}
            <form onSubmit={handleCommand} className="flex items-center border-t border-blue-500/30 bg-blue-950/20 px-3 py-2">
              <span className="text-blue-400 text-xs font-bold mr-2">ibc:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command ('help', 'pricing', 'overdrive')..."
                className="flex-1 bg-transparent text-white text-xs placeholder:text-zinc-600 focus:outline-none font-mono"
              />
              <button
                type="submit"
                className="w-7 h-7 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </motion.div>
        ) : (
          /* Minimized Glowing Cyber Capsule Trigger */
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950/90 border border-blue-500/50 text-white text-xs font-mono tracking-wider shadow-[0_0_30px_rgba(0,102,255,0.4)] backdrop-blur-xl hover:border-blue-400 hover:bg-blue-950/60 transition-all cursor-pointer group"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Terminal className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-white uppercase tracking-widest text-[11px]">
              CODE_CLI
            </span>
            <span className="text-[10px] text-blue-400 border-l border-blue-500/30 pl-2">
              LIVE
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
