import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HologramSphere3DProps {
  className?: string;
  size?: number;
}

export const HologramSphere3D: React.FC<HologramSphere3DProps> = ({
  className = '',
  size = 320,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const mount = mountRef.current;
      const width = size;
      const height = size;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const sphereGeo = new THREE.IcosahedronGeometry(2.4, 2);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      group.add(sphere);

      const coreGeo = new THREE.SphereGeometry(0.8, 12, 12);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.6,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      group.add(core);

      const ringGeo1 = new THREE.TorusGeometry(3.6, 0.02, 12, 60);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.5,
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      group.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(4.2, 0.02, 12, 60);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.3,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 4;
      group.add(ring2);

      let targetRotX = 0;
      let targetRotY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        if (!mount) return;
        const rect = mount.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        targetRotX = y * 0.4;
        targetRotY = x * 0.4;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      let animId: number;
      let isPaused = false;

      const handleVisibility = () => {
        isPaused = document.hidden;
      };
      document.addEventListener('visibilitychange', handleVisibility);

      const clock = new THREE.Clock();

      const animate = () => {
        if (!isPaused) {
          const t = clock.getElapsedTime();

          sphere.rotation.y = t * 0.2;
          sphere.rotation.x = t * 0.12;

          ring1.rotation.z = t * 0.25;
          ring2.rotation.z = -t * 0.18;

          const scale = 1 + Math.sin(t * 3) * 0.06;
          core.scale.set(scale, scale, scale);

          group.rotation.x += (targetRotX - group.rotation.x) * 0.05;
          group.rotation.y += (targetRotY - group.rotation.y) * 0.05;

          renderer.render(scene, camera);
        }
        animId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('visibilitychange', handleVisibility);
        cancelAnimationFrame(animId);
        sphereGeo.dispose();
        sphereMat.dispose();
        coreGeo.dispose();
        coreMat.dispose();
        ringGeo1.dispose();
        ringMat1.dispose();
        ringGeo2.dispose();
        ringMat2.dispose();
        renderer.dispose();
        if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.warn('HologramSphere3D initialization skipped:', err);
    }
  }, [size]);

  return (
    <div
      ref={mountRef}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`pointer-events-none select-none will-change-transform ${className}`}
      aria-hidden="true"
    />
  );
};
