import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  isHovered: boolean;
  className?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  isHovered,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  useEffect(() => {
    if (!isHovered || isReducedMotion.current) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const totalFrames = text.length * 4;
    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 4) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      iteration += 1;
      if (iteration >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <span className={className}>{displayText}</span>;
};
