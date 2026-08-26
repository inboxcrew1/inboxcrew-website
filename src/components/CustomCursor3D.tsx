import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop / mouse pointer devices
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Ultra-smooth cursor interpolation loop
    const loop = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.25;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.25;
      setMousePos({ x: posRef.current.x, y: posRef.current.y });
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden select-none" aria-hidden="true">
      {/* Dynamic 3D Glowing Trail Ring */}
      <motion.div
        className="absolute rounded-full border border-blue-400/40 mix-blend-screen will-change-transform"
        style={{
          left: 0,
          top: 0,
          x: mousePos.x,
          y: mousePos.y,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 30,
          height: isHovered ? 48 : 30,
          backgroundColor: isHovered ? 'rgba(0, 102, 255, 0.12)' : 'rgba(0, 102, 255, 0.03)',
          boxShadow: isHovered
            ? '0 0 25px rgba(59, 130, 246, 0.5), inset 0 0 15px rgba(59, 130, 246, 0.3)'
            : '0 0 10px rgba(59, 130, 246, 0.15)',
          transform: isClicking ? 'scale(0.85)' : 'scale(1)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
      />

      {/* Center Core Dot */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]"
        style={{
          left: targetRef.current.x,
          top: targetRef.current.y,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute rounded-full border border-blue-400 pointer-events-none will-change-transform"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 36,
            height: 36,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};
