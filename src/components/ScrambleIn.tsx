import React, { useEffect, useState, useRef } from 'react';

interface ScrambleInProps {
  text: string;
  delay?: number;
  triggered?: boolean;
  className?: string;
  onComplete?: () => void;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

export const ScrambleIn: React.FC<ScrambleInProps> = ({
  text,
  delay = 0,
  triggered = true,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const isReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  useEffect(() => {
    if (!triggered) {
      setDisplayText('');
      return;
    }

    if (isReducedMotion.current) {
      setDisplayText(text);
      if (onComplete) onComplete();
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    let iteration = 0;
    const totalFrames = text.length * 3;

    timer = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration / 3) {
                return text[index];
              }
              // Random character slightly ahead
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');
        });

        iteration += 1;

        if (iteration >= totalFrames) {
          clearInterval(interval);
          setDisplayText(text);
          if (onComplete) onComplete();
        }
      }, 25);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [text, delay, triggered, onComplete]);

  return <span className={className}>{displayText || (triggered ? '' : '\u00A0'.repeat(text.length))}</span>;
};
