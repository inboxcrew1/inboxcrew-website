import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface HeroDevice3DProps {
  className?: string;
}

export const HeroDevice3D: React.FC<HeroDevice3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check device performance / reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = isMobile ? 7 : 5.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const deviceGroup = new THREE.Group();
    scene.add(deviceGroup);

    // 1. Laptop Base / Chassis
    const baseGeo = new THREE.BoxGeometry(3.6, 0.12, 2.4);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x0a1128,
      metalness: 0.85,
      roughness: 0.25,
    });
    const baseMesh = new THREE.Mesh(baseGeo, metalMat);
    baseMesh.position.y = -0.7;
    deviceGroup.add(baseMesh);

    // 2. Glowing Keyboard Area
    const kbGeo = new THREE.PlaneGeometry(2.8, 1.4);
    const kbMat = new THREE.MeshBasicMaterial({ color: 0x0066ff, wireframe: true, transparent: true, opacity: 0.4 });
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.rotation.x = -Math.PI / 2;
    kbMesh.position.set(0, -0.63, 0.1);
    deviceGroup.add(kbMesh);

    // 3. Laptop Screen Frame
    const screenFrameGeo = new THREE.BoxGeometry(3.6, 2.3, 0.08);
    const screenFrame = new THREE.Mesh(screenFrameGeo, metalMat);
    screenFrame.position.set(0, 0.45, -1.15);
    screenFrame.rotation.x = -0.15;
    deviceGroup.add(screenFrame);

    // 4. Glowing Screen Display Surface
    const displayGeo = new THREE.PlaneGeometry(3.3, 2.0);
    const displayMat = new THREE.MeshStandardMaterial({
      color: 0x020510,
      emissive: 0x0044bb,
      emissiveIntensity: 0.35,
      roughness: 0.1,
    });
    const displayMesh = new THREE.Mesh(displayGeo, displayMat);
    displayMesh.position.set(0, 0.45, -1.1);
    displayMesh.rotation.x = -0.15;
    deviceGroup.add(displayMesh);

    // 5. Floating Glass Cards Around Screen
    const cardGeo = new THREE.PlaneGeometry(1.2, 0.7);
    const cardMat = new THREE.MeshBasicMaterial({
      color: 0x00ccff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const card1 = new THREE.Mesh(cardGeo, cardMat);
    card1.position.set(-2.0, 0.8, 0.2);
    card1.rotation.y = 0.3;
    deviceGroup.add(card1);

    const card2 = new THREE.Mesh(cardGeo, cardMat);
    card2.position.set(2.0, 0.2, 0.4);
    card2.rotation.y = -0.35;
    deviceGroup.add(card2);

    // 6. Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x0066ff, 4, 15);
    blueLight.position.set(2, 3, 3);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 2.5, 12);
    cyanLight.position.set(-3, -1, 2);
    scene.add(cyanLight);

    // Mouse Interaction Handling
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.35;
      targetY = y * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible || prefersReducedMotion) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      deviceGroup.rotation.y = mouseX + Math.sin(elapsedTime * 0.5) * 0.04;
      deviceGroup.rotation.x = -mouseY + Math.cos(elapsedTime * 0.4) * 0.03 + 0.1;
      deviceGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;

      card1.position.y = 0.8 + Math.sin(elapsedTime * 1.2) * 0.06;
      card2.position.y = 0.2 + Math.cos(elapsedTime * 1.1) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[320px] flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
