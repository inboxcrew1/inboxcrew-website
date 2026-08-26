import React from 'react';
import { motion } from 'framer-motion';

interface SquashHamburgerProps {
  isOpen: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export const SquashHamburger: React.FC<SquashHamburgerProps> = ({
  isOpen,
  size = 'md',
  className = '',
}) => {
  const isSm = size === 'sm';
  const width = isSm ? 15 : 18;
  const height = isSm ? 10 : 12;
  const strokeWidth = 1.5;

  const spring = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  };

  return (
    <div
      className={`relative flex flex-col justify-between items-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      aria-hidden="true"
    >
      {/* Top Bar */}
      <motion.span
        className="w-full bg-white rounded-full origin-center"
        style={{ height: `${strokeWidth}px` }}
        animate={
          isOpen
            ? { rotate: 45, y: isSm ? 4.25 : 5.25 }
            : { rotate: 0, y: 0 }
        }
        transition={spring}
      />

      {/* Middle Bar */}
      <motion.span
        className="w-full bg-white rounded-full origin-center"
        style={{ height: `${strokeWidth}px` }}
        animate={
          isOpen
            ? { opacity: 0, scale: 0 }
            : { opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.15 }}
      />

      {/* Bottom Bar */}
      <motion.span
        className="w-full bg-white rounded-full origin-center"
        style={{ height: `${strokeWidth}px` }}
        animate={
          isOpen
            ? { rotate: -45, y: isSm ? -4.25 : -5.25 }
            : { rotate: 0, y: 0 }
        }
        transition={spring}
      />
    </div>
  );
};
