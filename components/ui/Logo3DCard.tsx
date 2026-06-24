"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

interface Logo3DCardProps {
  src: string;
  alt: string;
  isActive?: boolean;
}

export const Logo3DCard: React.FC<Logo3DCardProps> = ({
  src,
  alt,
  isActive,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    mesh: THREE.Mesh;
    pointLight: THREE.PointLight;
    fillLight: THREE.PointLight;
    animFrameId: number;
    tl?: gsap.core.Timeline;
  } | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Renderer (sized later once real layout dimensions are known) ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mount.appendChild(renderer.domElement);

    // --- Scene ---
    const scene = new THREE.Scene();

    // --- Camera (aspect set properly once we know real size) ---
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.45);
    dirLight.position.set(3, 5, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Dynamic point light that follows hover — starts dim, gentle punch
    const pointLight = new THREE.PointLight(0x9eb3ff, 0, 10, 1.8);
    pointLight.position.set(0, 0, 2.2);
    scene.add(pointLight);

    // Second hover light — warm fill from below for richer falloff
    const fillLight = new THREE.PointLight(0xffd9a0, 0, 8, 2);
    fillLight.position.set(0, -1, 1.8);
    scene.add(fillLight);

    // Rim light (cool blue from behind)
    const rimLight = new THREE.DirectionalLight(0x4466ff, 0.25);
    rimLight.position.set(-3, -2, -3);
    scene.add(rimLight);

    // --- Logo texture ---
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    // --- Logo plane (created up front with a placeholder, sized once texture loads) ---
    const geo = new THREE.PlaneGeometry(2, 1.3, 1, 1);
    const mat = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 0,
      roughness: 0.25,
      metalness: 0.1,
      envMapIntensity: 1.0,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    scene.add(mesh);

    loader.load(
      src,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = true;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.needsUpdate = true;

        // Correct the plane's aspect ratio to match the actual image (avoids stretched logos)
        const imgAspect = texture.image.width / texture.image.height;
        const baseHeight = 1.3;
        const baseScaleX = imgAspect / (2 / baseHeight);
        mesh.userData.baseScaleX = baseScaleX;
        mesh.scale.set(baseScaleX, 1, 1);

        mat.map = texture;
        mat.opacity = 1;
        mat.color.set(0x888888); // start desaturated grey tint
        mat.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.error("Logo3DCard: failed to load texture", src, err);
      },
    );

    // Shadow catcher plane (below logo)
    const shadowGeo = new THREE.PlaneGeometry(3.5, 2.5);
    const shadowMat = new THREE.ShadowMaterial({
      opacity: 0.18,
      transparent: true,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.position.z = -0.3;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // --- Size the renderer/camera reliably once real layout dims exist ---
    let hasSizedOnce = false;
    const applySize = (w: number, h: number) => {
      if (w <= 0 || h <= 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      hasSizedOnce = true;
    };

    // Try immediately (covers the common case where layout is already done)
    applySize(mount.clientWidth, mount.clientHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        applySize(width, height);
      }
    });
    resizeObserver.observe(mount);

    // --- Render loop ---
    let animFrameId: number;
    const render = () => {
      animFrameId = requestAnimationFrame(render);
      if (!hasSizedOnce) return; // skip rendering until we have valid dimensions
      renderer.render(scene, camera);
    };
    render();

    // --- Pointer tracking for tilt + parallax (stronger response) ---
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;

      gsap.to(mesh.rotation, {
        x: y * 0.32,
        y: x * 0.4,
        duration: 0.45,
        ease: "power2.out",
        overwrite: true,
      });

      // Subtle position parallax so the logo "follows" the cursor slightly
      gsap.to(mesh.position, {
        x: x * 0.18,
        y: y * 0.12,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(pointLight.position, {
        x: x * 1.8,
        y: y * 1.8,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });

      gsap.to(fillLight.position, {
        x: -x * 1.2,
        y: -1 - y * 0.6,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    };

    mount.addEventListener("mousemove", onMouseMove);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      mesh,
      pointLight,
      fillLight,
      animFrameId,
    };

    return () => {
      cancelAnimationFrame(animFrameId);
      resizeObserver.disconnect();
      mount.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      geo.dispose();
      mat.map?.dispose();
      mat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [src]);

  // --- Hover / active state driven by parent via props ---
  useEffect(() => {
    const s = sceneRef.current;
    if (!s) return;

    const { mesh, pointLight, fillLight } = s;
    const mat = mesh.material as THREE.MeshStandardMaterial;

    if (isActive) {
      gsap.to(mat.color, { r: 0.5, g: 0.5, b: 0.5, duration: 0.3 });
      gsap.to(mesh.scale, {
        x: mesh.userData.baseScaleX ?? 1,
        y: 1,
        z: 1,
        duration: 0.3,
      });
    } else {
      // Reset
      gsap.to(mesh.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(mesh.scale, {
        x: mesh.userData.baseScaleX ?? 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(mesh.rotation, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
      gsap.to(mat.color, { r: 0.533, g: 0.533, b: 0.533, duration: 0.4 });
      gsap.to(pointLight, { intensity: 0, duration: 0.4 });
      gsap.to(fillLight, { intensity: 0, duration: 0.4 });
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    const s = sceneRef.current;
    if (!s || isActive) return;
    const { mesh, pointLight, fillLight } = s;
    const mat = mesh.material as THREE.MeshStandardMaterial;

    // Big forward lift + scale pop + brighten + dual-light glow
    gsap.to(mesh.position, { z: 1.1, duration: 0.5, ease: "back.out(2.2)" });
    gsap.to(mesh.scale, {
      x: (mesh.userData.baseScaleX ?? 1) * 1.18,
      y: 1.18,
      z: 1.18,
      duration: 0.5,
      ease: "back.out(2.2)",
    });
    gsap.to(mat.color, { r: 1, g: 1, b: 1, duration: 0.35 });
    gsap.to(pointLight, { intensity: 0.8, duration: 0.4, ease: "power2.out" });
    gsap.to(fillLight, { intensity: 0.35, duration: 0.4, ease: "power2.out" });

    // CSS drop-shadow grows on the mount div itself — cheap, very effective depth cue
    if (mountRef.current) {
      gsap.to(mountRef.current, {
        filter:
          "drop-shadow(0 28px 32px rgba(0,0,0,0.55)) drop-shadow(0 8px 10px rgba(80,100,255,0.25))",
        duration: 0.45,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const s = sceneRef.current;
    if (!s || isActive) return;
    const { mesh, pointLight, fillLight } = s;
    const mat = mesh.material as THREE.MeshStandardMaterial;

    gsap.to(mesh.position, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.55,
      ease: "power3.out",
    });
    gsap.to(mesh.scale, {
      x: mesh.userData.baseScaleX ?? 1,
      y: 1,
      z: 1,
      duration: 0.55,
      ease: "power3.out",
    });
    gsap.to(mesh.rotation, { x: 0, y: 0, duration: 0.65, ease: "power3.out" });
    gsap.to(mat.color, { r: 0.533, g: 0.533, b: 0.533, duration: 0.4 });
    gsap.to(pointLight, { intensity: 0, duration: 0.4 });
    gsap.to(fillLight, { intensity: 0, duration: 0.4 });

    if (mountRef.current) {
      gsap.to(mountRef.current, {
        filter: "drop-shadow(0 0px 0px rgba(0,0,0,0))",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={mountRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full"
      aria-label={alt}
    />
  );
};
