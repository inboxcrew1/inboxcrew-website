import React from 'react';

interface InboxCrewLogoProps {
  variant?: 'full' | 'icon' | 'horizontal' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withGlow?: boolean;
}

export const InboxCrewLogo: React.FC<InboxCrewLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  withGlow = false,
}) => {
  // Dimensions map
  const heightMap = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
  };

  return (
    <div className={`relative inline-flex items-center gap-2.5 select-none ${className}`}>
      {withGlow && (
        <div className="absolute -inset-1.5 bg-blue-500/20 rounded-lg blur-md -z-10 pointer-events-none" />
      )}
      
      {/* Official IBC Logo Symbol */}
      {(variant === 'full' || variant === 'horizontal' || variant === 'icon' || variant === 'mark') && (
        <div className="relative flex items-center justify-center shrink-0">
          <img
            src="/assets/images/logo.png"
            alt="INBOXCREW"
            className={`${heightMap[size]} w-auto object-contain transition-transform duration-300`}
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};
