import React, { useEffect, useRef } from 'react';

interface CyberMatrixStreamProps {
  className?: string;
  opacity?: number;
}

export const CyberMatrixStream: React.FC<CyberMatrixStreamProps> = ({
  className = '',
  opacity = 0.15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters: Hex + Cyber code glyphs + binary
    const chars = '01ABCDEF0123456789X_//:[]{}<>$#%*';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);

    interface Drop {
      x: number;
      y: number;
      speed: number;
      char: string;
      length: number;
    }

    // Individual falling drops with transparent background clear
    const drops: Drop[] = [];
    for (let i = 0; i < Math.min(columns, 50); i++) {
      drops.push({
        x: Math.floor(Math.random() * columns) * fontSize,
        y: Math.random() * -height,
        speed: 2 + Math.random() * 4,
        char: chars[Math.floor(Math.random() * chars.length)],
        length: 8 + Math.floor(Math.random() * 12),
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let animId: number;
    let lastTime = 0;
    const fpsInterval = 1000 / 30; // 30 FPS throttle

    const draw = (currentTime: number) => {
      animId = requestAnimationFrame(draw);

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = currentTime - (elapsed % fpsInterval);

      // Clean transparent clear — NEVER opaque black
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px "Space Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        
        // Draw trailing characters
        for (let j = 0; j < d.length; j++) {
          const charY = d.y - j * fontSize;
          if (charY > 0 && charY < height) {
            if (j === 0) {
              ctx.fillStyle = '#60a5fa'; // Bright leading character
            } else {
              const alpha = Math.max(0, 1 - j / d.length) * 0.7;
              ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
            }
            const char = chars[(Math.floor(d.y / 10) + j) % chars.length];
            ctx.fillText(char, d.x, charY);
          }
        }

        d.y += d.speed;

        if (d.y - d.length * fontSize > height) {
          d.y = Math.random() * -100;
          d.x = Math.floor(Math.random() * columns) * fontSize;
          d.speed = 2 + Math.random() * 4;
        }
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity }}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
