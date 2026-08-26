import React, { useEffect, useRef } from 'react';

interface MatrixRainCanvasProps {
  opacity?: number;
  speed?: number;
  className?: string;
}

export const MatrixRainCanvas: React.FC<MatrixRainCanvasProps> = ({
  opacity = 0.12,
  speed = 35,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = '01ABCDEF{}[]()<>=+*/$#~;:_INBOXCREW';
    const fontSize = 13;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }).map(() => Math.floor(Math.random() * -100));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let lastTime = 0;

    const render = (time: number) => {
      if (time - lastTime > speed) {
        lastTime = time;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px "Space Mono", monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Head of drop is bright blue/white, tail is deep electric blue
          ctx.fillStyle = Math.random() > 0.85 ? '#ffffff' : '#0066FF';
          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[1] ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
