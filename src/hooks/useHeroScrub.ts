import { useEffect, useRef, useState, useCallback } from 'react';

interface UseHeroScrubOptions {
  sensitivity?: number; // default 0.8
}

export function useHeroScrub(
  videoRef: React.RefObject<HTMLVideoElement>,
  containerRef: React.RefObject<HTMLElement>,
  options: UseHeroScrubOptions = {}
) {
  const { sensitivity = 0.8 } = options;
  const [scrubProgress, setScrubProgress] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const prevMouseX = useRef<number | null>(null);
  const isSeeking = useRef(false);
  const queuedTargetTime = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  const applySeek = useCallback(
    (targetTime: number) => {
      const video = videoRef.current;
      if (!video || isNaN(video.duration) || video.duration === 0) return;

      const clampedTime = Math.max(0, Math.min(video.duration, targetTime));

      if (isSeeking.current) {
        queuedTargetTime.current = clampedTime;
        return;
      }

      isSeeking.current = true;
      video.currentTime = clampedTime;
      setScrubProgress(clampedTime / video.duration);
    },
    [videoRef]
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const handleSeeked = () => {
      isSeeking.current = false;
      if (queuedTargetTime.current !== null) {
        const nextTime = queuedTargetTime.current;
        queuedTargetTime.current = null;
        applySeek(nextTime);
      }
    };

    video.addEventListener('seeked', handleSeeked);
    return () => {
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [videoRef, applySeek]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (prevMouseX.current === null) {
        prevMouseX.current = e.clientX;
        return;
      }

      const deltaX = e.clientX - prevMouseX.current;
      prevMouseX.current = e.clientX;

      const video = videoRef.current;
      if (video && video.duration > 0) {
        // Delta sensitivity calculation
        const timeDelta = (deltaX / window.innerWidth) * (video.duration * sensitivity * 2);
        const targetTime = video.currentTime + timeDelta;
        applySeek(targetTime);
      }
    };

    const handleMouseLeave = () => {
      prevMouseX.current = null;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, videoRef, sensitivity, applySeek]);

  return { scrubProgress, isPlaying };
}
