import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorHUDProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const CursorHUD: React.FC<CursorHUDProps> = ({ containerRef }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, node: 7 });
  const [isInside, setIsInside] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        if (!isInside) setIsInside(true);
        const nodeNum = Math.abs(Math.floor((x + y) / 140)) % 16 + 1;
        setCoords({ x, y, node: nodeNum });
      } else {
        setIsInside(false);
      }
    };

    const handleMouseLeave = () => setIsInside(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (el) el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, isInside]);

  if (!isInside) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed pointer-events-none z-40 hidden md:flex items-center gap-2 select-none"
        style={{
          left: coords.x + 20,
          top: coords.y + 15,
        }}
      >
        <div className="glass-pill px-2.5 py-1 rounded border border-blue-500/40 bg-black/80 backdrop-blur-md text-[9px] font-mono text-zinc-300 shadow-[0_0_15px_rgba(0,102,255,0.3)] flex items-center gap-2">
          <span className="text-blue-400 font-bold">X:{coords.x.toString().padStart(4, '0')}</span>
          <span className="text-zinc-600">|</span>
          <span className="text-blue-400 font-bold">Y:{coords.y.toString().padStart(4, '0')}</span>
          <span className="text-zinc-600">|</span>
          <span className="text-emerald-400">NODE:{coords.node.toString().padStart(2, '0')}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
