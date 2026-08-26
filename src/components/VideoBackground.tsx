import React, { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  overlayOpacity?: number;
  priority?: boolean;
  className?: string;
  accentGlow?: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  poster = '/assets/images/digital_globe.jpg',
  overlayOpacity = 0.65,
  priority = false,
  className = '',
  accentGlow = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (shouldLoad && videoRef.current && src) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser policy; muted handles it mostly
      });
    }
  }, [shouldLoad, src]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* Fallback / Poster Image */}
      {poster && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-30' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Video Element */}
      {src && shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          preload={priority ? 'metadata' : 'none'}
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Cinematic Dark Vignette & Gradient Overlays */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-700"
        style={{ opacity: overlayOpacity }}
      />

      {/* Atmospheric Top and Bottom Edge Fades */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

      {/* Subtle Blue/Purple Accent Lighting */}
      {accentGlow && (
        <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      )}
    </div>
  );
};
