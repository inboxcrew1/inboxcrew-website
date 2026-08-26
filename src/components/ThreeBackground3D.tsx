import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackground3DProps {
  className?: string;
  particleCount?: number;
  showRings?: boolean;
}

export const ThreeBackground3D: React.FC<ThreeBackground3DProps> = ({
  className = '',
  particleCount = 500,
  showRings = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const container = containerRef.current;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      // 1. Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 25;

      // 2. WebGL Renderer
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // 3. 3D Particles Field
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color('#3b82f6');
      const color2 = new THREE.Color('#818cf8');
      const color3 = new THREE.Color('#ffffff');

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 60;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

        const mixedColor = Math.random() > 0.6 ? color1 : Math.random() > 0.5 ? color2 : color3;
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // 4. Floating 3D Geometric Ring / Wireframe
      let ringGroup: THREE.Group | null = null;
      let ringGeo: THREE.TorusGeometry | null = null;
      let ringMat: THREE.MeshBasicMaterial | null = null;
      let icosaGeo: THREE.IcosahedronGeometry | null = null;
      let icosaMat: THREE.MeshBasicMaterial | null = null;

      if (showRings) {
        ringGroup = new THREE.Group();

        ringGeo = new THREE.TorusGeometry(8, 0.03, 12, 60);
        ringMat = new THREE.MeshBasicMaterial({
          color: 0x2563eb,
          transparent: true,
          opacity: 0.22,
          wireframe: true,
        });

        const ring1 = new THREE.Mesh(ringGeo, ringMat);
        ring1.rotation.x = Math.PI / 3;
        ringGroup.add(ring1);

        const ring2 = new THREE.Mesh(ringGeo, ringMat);
        ring2.rotation.y = Math.PI / 4;
        ring2.scale.set(1.15, 1.15, 1.15);
        ringGroup.add(ring2);

        icosaGeo = new THREE.IcosahedronGeometry(4, 1);
        icosaMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          wireframe: true,
          transparent: true,
          opacity: 0.15,
        });
        const ring3 = new THREE.Mesh(icosaGeo, icosaMat);
        ringGroup.add(ring3);

        ringGroup.position.set(12, -2, -5);
        scene.add(ringGroup);
      }

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        targetX = (e.clientX - window.innerWidth / 2) * 0.0008;
        targetY = (e.clientY - window.innerHeight / 2) * 0.0008;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });

      const onResize = () => {
        if (!container) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize, { passive: true });

      let animationFrameId: number;
      let isPaused = false;

      const handleVisibility = () => {
        isPaused = document.hidden;
      };
      document.addEventListener('visibilitychange', handleVisibility);

      const clock = new THREE.Clock();

      const animate = () => {
        if (!isPaused) {
          const elapsedTime = clock.getElapsedTime();

          mouseX += (targetX - mouseX) * 0.04;
          mouseY += (targetY - mouseY) * 0.04;

          camera.position.x = mouseX * 6;
          camera.position.y = -mouseY * 6;
          camera.lookAt(scene.position);

          particles.rotation.y = elapsedTime * 0.025;
          particles.rotation.x = elapsedTime * 0.012;

          if (ringGroup) {
            ringGroup.rotation.x = elapsedTime * 0.06;
            ringGroup.rotation.y = elapsedTime * 0.09;
          }

          renderer.render(scene, camera);
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', handleVisibility);
        cancelAnimationFrame(animationFrameId);

        geometry.dispose();
        material.dispose();
        if (ringGeo) ringGeo.dispose();
        if (ringMat) ringMat.dispose();
        if (icosaGeo) icosaGeo.dispose();
        if (icosaMat) icosaMat.dispose();
        renderer.dispose();
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.warn('WebGL initialization skipped:', err);
    }
  }, [particleCount, showRings]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 will-change-transform ${className}`}
      aria-hidden="true"
    />
  );
};
