import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  scale?: number;
  showCyberCorners?: boolean;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = '',
  maxTilt = 10,
  glareOpacity = 0.22,
  scale = 1.02,
  showCyberCorners = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTilt({ x: rotateX, y: rotateY, glareX, glareY, isHovered: true });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt((prev) => ({ ...prev, x: 0, y: 0, isHovered: false }));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: tilt.isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {/* Dynamic Specular Glare Highlight */}
      {tilt.isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 280px at ${tilt.glareX}% ${tilt.glareY}%, rgba(59, 130, 246, ${glareOpacity}), transparent 70%)`,
          }}
        />
      )}

      {/* Cyber Corner Reticles */}
      {showCyberCorners && (
        <div className="absolute inset-0 pointer-events-none z-25 p-1.5 flex flex-col justify-between select-none">
          <div className="flex justify-between items-start">
            <span className="text-[9px] text-blue-500/40 font-mono leading-none">┌</span>
            <span className="text-[9px] text-blue-500/40 font-mono leading-none">┐</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-[9px] text-blue-500/40 font-mono leading-none">└</span>
            <span className="text-[9px] text-blue-500/40 font-mono leading-none">┘</span>
          </div>
        </div>
      )}

      {/* Card Content with 3D Depth */}
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
};
