import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers, ShieldCheck, Cpu, Terminal, CheckCircle2, Code2, Sparkles, Play } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';
import { SvgNetworkGraph } from '../components/SvgNetworkGraph';

export const Architecture: React.FC = () => {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const layers = [
    {
      id: 1,
      number: '01',
      tag: 'LAYER 01',
      code: '0x01_STRATEGY_KERNEL',
      title: 'STRATEGY',
      icon: ShieldCheck,
      description: 'Understand the business, audience, positioning and goals.',
      deliverables: ['Market & Competitor Analysis', 'Brand Positioning & Persona', 'Information Architecture', 'Growth Roadmap'],
      codeSnippet: `// 01_STRATEGY_ENGINE.ts
const strategy = new BrandStrategy({
  client: "InboxCrew Partner",
  audit: { marketScore: 94, gapAnalysis: true },
  targetAudience: ["High-Growth Founders", "E-Com Brands"],
  roadmap: ["Positioning", "UX Strategy", "Conversion Funnels"]
});
await strategy.generateArchitecturePlan();
console.log(">> STRATEGY MATRIX: OPTIMAL & LOCKED");`,
    },
    {
      id: 2,
      number: '02',
      tag: 'LAYER 02',
      code: '0x02_DESIGN_SYSTEM',
      title: 'DESIGN',
      icon: Layers,
      description: 'Build a distinctive visual identity and digital experience.',
      deliverables: ['Custom UI/UX Prototypes', 'Visual Brand Guidelines', 'Motion & Micro-interactions', 'Design Systems'],
      codeSnippet: `// 02_DESIGN_SYSTEM.tsx
export const ThemeTokens = defineTheme({
  palette: { primary: "#0066FF", backdrop: "#020510", surface: "glass" },
  typography: { heading: "Anton SC", mono: "Space Mono" },
  physics: { stiffness: 300, damping: 20, perspective: "1200px" },
  lighting: { volumetricBlue: true, floorReflections: true }
});
// 100% Custom Visual System Rendered`,
    },
    {
      id: 3,
      number: '03',
      tag: 'LAYER 03',
      code: '0x03_DISTRIBUTED_ENGINE',
      title: 'TECHNOLOGY',
      icon: Cpu,
      description: 'Turn strategy and design into fast, scalable digital products.',
      deliverables: ['Clean React & TypeScript Code', 'Headless CMS & API Integration', 'Sub-second Performance', 'Technical SEO'],
      codeSnippet: `// 03_DISTRIBUTED_ENGINE.ts
export async function deployProductionApp() {
  const cluster = await EdgeRuntime.initialize({ nodes: 64, cdn: true });
  await cluster.bundleAndOptimize({ brotli: true, webp: true });
  const metrics = await cluster.runAudit();
  // Speed: 99/100 | SEO: 100/100 | Accessibility: 100/100
  return { status: 200, state: "SYSTEM ONLINE" };
}`,
    },
  ];

  const activeLayerData = layers.find((l) => l.id === (expandedLayer || 1)) || layers[0];

  return (
    <section
      id="process"
      className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center bg-black py-24 px-6 sm:px-12 text-center select-none overflow-hidden font-mono"
    >
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* SVG Background Circuits */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <SvgNetworkGraph variant="circuit" strokeColor="#0066ff" className="w-full h-full" />
      </div>

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.035] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]"
        >
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span>PROCESS // ARCHITECTURE & COMPILER</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
        >
          THREE LAYERS. ONE DIRECTION.
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed mb-12"
        >
          Strategy defines the direction. Design creates the identity. Technology turns the vision into a working digital experience.
        </motion.p>

        {/* Dual Column: Left Horizontal Cards, Right Live Code Compiler */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
          
          {/* Left 7 Cols: Three Horizontal System Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {layers.map((layer, index) => {
              const isExpanded = expandedLayer === layer.id;
              const isHovered = hoveredCard === layer.id;
              const Icon = layer.icon;

              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full text-left"
                  onMouseEnter={() => setHoveredCard(layer.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <TiltCard3D maxTilt={6} glareOpacity={0.18} scale={1.015} className="w-full rounded-2xl">
                    <div
                      onClick={() => setExpandedLayer(layer.id)}
                      className={`w-full rounded-2xl border bg-zinc-950/80 backdrop-blur-xl cursor-pointer transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? 'border-blue-500/70 bg-blue-950/30 shadow-[0_0_35px_rgba(0,102,255,0.3)]'
                          : isHovered
                          ? 'border-blue-500/40 bg-zinc-900/60 shadow-[0_0_20px_rgba(0,102,255,0.15)]'
                          : 'border-blue-500/20'
                      }`}
                    >
                      {/* Header Row */}
                      <div className="p-5 sm:p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-5">
                          {/* Number & Glow Node */}
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-emerald-400 animate-ping' : 'bg-blue-500'}`} />
                            <span className="text-xs sm:text-sm font-bold text-blue-400">
                              {layer.number}
                            </span>
                          </div>

                          {/* Title & Icon */}
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                              <Icon className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-lg sm:text-xl tracking-tight text-white font-sans">
                              {layer.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-zinc-500 hidden sm:inline-block font-mono">
                            {layer.code}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180 text-blue-300' : ''
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Collapsible Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-5 sm:px-6 pb-6 pt-1 border-t border-blue-500/20"
                          >
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono mb-4">
                              {layer.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {layer.deliverables.map((item, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-black/40 px-3 py-1.5 rounded-lg border border-blue-500/15"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </TiltCard3D>
                </motion.div>
              );
            })}
          </div>

          {/* Right 5 Cols: Live Real-Time Code Compiler Box */}
          <div className="lg:col-span-5 w-full text-left">
            <div className="p-5 sm:p-6 rounded-2xl border border-blue-500/40 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,102,255,0.25)] relative overflow-hidden">
              
              {/* Compiler Header */}
              <div className="flex items-center justify-between border-b border-blue-500/30 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest font-mono">
                    RUNTIME_COMPILER
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYNCHRONIZED</span>
                </div>
              </div>

              {/* Code Snippet Box with Syntax Highlighting */}
              <div className="p-4 rounded-xl bg-black/80 border border-blue-500/20 font-mono text-[11px] leading-relaxed text-blue-300 overflow-x-auto min-h-[220px]">
                <pre className="whitespace-pre-wrap break-all text-zinc-300">
                  <span className="text-blue-400 font-bold">{activeLayerData.codeSnippet}</span>
                </pre>
              </div>

              {/* Compiler Status Bar */}
              <div className="mt-4 pt-3 border-t border-blue-500/20 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                <span className="text-cyan-300">TARGET: {activeLayerData.code}</span>
                <span className="text-emerald-400 font-bold">READY TO DEPLOY</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
