import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Activity, Sparkles, Zap } from 'lucide-react';

interface ThreeBackgroundProps {
  className?: string;
  interactive?: boolean;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [motionSpeed, setMotionSpeed] = useState<number>(1.6); // 1.6x speed boost
  const [dimMode, setDimMode] = useState<'70percent' | '85percent' | '50percent'>('50percent'); // 50% dimming
  const [showStatusBadge, setShowStatusBadge] = useState<boolean>(false); // Ẩn thanh điều khiển
  const speedRef = useRef<number>(1.6);
  speedRef.current = motionSpeed;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. WebGL Support and Capabilities Probe
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!gl) {
      setIsSupported(false);
      return;
    }

    let isSoftwareGl = false;
    try {
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      if (dbg) {
        const rendererStr = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL);
        isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(rendererStr);
      }
    } catch {
      isSoftwareGl = false;
    }

    // 2. Scene & Camera Setup
    const scene = new THREE.Scene();
    // Deep dark horizon fog for sophisticated dark mood
    scene.fog = new THREE.Fog(0x030712, 30, 105);

    const getWidth = () => container.clientWidth || window.innerWidth || 1200;
    const getHeight = () => container.clientHeight || window.innerHeight || 800;

    let width = getWidth();
    let height = getHeight();

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 5, 42);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });

    const pixelRatio = isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // Darkened exposure for comfortable, non-glaring text readability
    renderer.toneMappingExposure = 0.85;
    renderer.setClearColor(0x030712, 0); // Transparent dark blend

    // Clear previous children if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. Dynamic Studio Lights (Deep Dark Ambient)
    const ambientLight = new THREE.AmbientLight(0x0f172a, 0.55);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x4c1d95, 0.75);
    keyLight.position.set(20, 30, 20);
    scene.add(keyLight);

    const cyanPoint = new THREE.PointLight(0x0284c7, 1.4, 85);
    cyanPoint.position.set(-25, 15, 25);
    scene.add(cyanPoint);

    const magentaPoint = new THREE.PointLight(0x701a75, 1.1, 80);
    magentaPoint.position.set(25, -10, 20);
    scene.add(magentaPoint);

    // 4. Component A: Undulating 3D Cyber Wave Mesh (Terrain of AI Waves - Deep Dark Tones)
    const waveWidth = 140;
    const waveDepth = 90;
    const waveSegX = isSoftwareGl ? 50 : 80;
    const waveSegY = isSoftwareGl ? 40 : 65;
    const waveGeom = new THREE.PlaneGeometry(waveWidth, waveDepth, waveSegX, waveSegY);
    waveGeom.rotateX(-Math.PI / 2.3);
    waveGeom.translate(0, -18, -10);

    // Color gradient for vertices (Deep Cyber Tones)
    const count = waveGeom.attributes.position.count;
    const waveColors = new Float32Array(count * 3);
    const colorCyan = new THREE.Color(0x0284c7);
    const colorIndigo = new THREE.Color(0x3730a3);
    const colorPurple = new THREE.Color(0x581c87);

    for (let i = 0; i < count; i++) {
      const x = waveGeom.attributes.position.getX(i);
      const ratio = (x + waveWidth / 2) / waveWidth;
      const col = ratio < 0.5 ? colorCyan.clone().lerp(colorIndigo, ratio * 2) : colorIndigo.clone().lerp(colorPurple, (ratio - 0.5) * 2);
      waveColors[i * 3] = col.r;
      waveColors[i * 3 + 1] = col.g;
      waveColors[i * 3 + 2] = col.b;
    }
    waveGeom.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.28, // Deep comfortable dark wave mesh
      blending: THREE.AdditiveBlending,
    });
    const waveMesh = new THREE.Mesh(waveGeom, waveMat);
    scene.add(waveMesh);

    // Store original Y positions for dynamic wave oscillation
    const originalPositions = new Float32Array(count);
    const posAttr = waveGeom.attributes.position;
    for (let i = 0; i < count; i++) {
      originalPositions[i] = posAttr.getY(i);
    }

    // 5. Component B: Central 3D Kinetic Aperture Gyroscope (Veo AI Engine Core - Deep Dark Tones)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 4, -5);
    scene.add(coreGroup);

    // Outer Ring 1 (Deep Cyan)
    const ring1Geom = new THREE.TorusGeometry(15, 0.3, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.30,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    coreGroup.add(ring1);

    // Ring 2 (Deep Purple tilted)
    const ring2Geom = new THREE.TorusGeometry(13, 0.32, 16, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x6b21a8,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    coreGroup.add(ring2);

    // Ring 3 (Deep Magenta fast inner ring)
    const ring3Geom = new THREE.TorusGeometry(10.5, 0.26, 12, 80);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x831843,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.x = -Math.PI / 4;
    coreGroup.add(ring3);

    // Central Floating 3D Geometric Crystal (Icosahedron - Deep Indigo)
    const crystalGeom = new THREE.IcosahedronGeometry(4.6, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x312e81,
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.25,
      roughness: 0.45,
      metalness: 0.7,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const crystalMesh = new THREE.Mesh(crystalGeom, crystalMat);
    coreGroup.add(crystalMesh);

    // Inner core sphere (Deep Cyan)
    const innerSphereGeom = new THREE.SphereGeometry(2.3, 16, 16);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeom, innerSphereMat);
    coreGroup.add(innerSphere);

    // 6. Component C: Orbiting Polyhedral Data Nodes
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodeMeshes: {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      orbitSpeed: number;
      orbitRadius: number;
      orbitAngle: number;
      floatPhase: number;
      baseY: number;
      baseZ: number;
    }[] = [];

    const geomIco = new THREE.IcosahedronGeometry(1.6, 0);
    const geomOcta = new THREE.OctahedronGeometry(1.4, 0);
    const geomBox = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const nodeGeoms = [geomIco, geomOcta, geomBox];

    const matCyanNode = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.18,
      roughness: 0.5,
      metalness: 0.7,
      wireframe: true,
      transparent: true,
      opacity: 0.30,
    });
    const matPurpleNode = new THREE.MeshStandardMaterial({
      color: 0x6b21a8,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.18,
      roughness: 0.5,
      metalness: 0.7,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const matAmberNode = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      emissive: 0x78350f,
      emissiveIntensity: 0.18,
      roughness: 0.5,
      metalness: 0.7,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const nodeMaterials = [matCyanNode, matPurpleNode, matAmberNode];

    const nodeCount = isSoftwareGl ? 16 : 28;
    for (let i = 0; i < nodeCount; i++) {
      const g = nodeGeoms[i % nodeGeoms.length];
      const m = nodeMaterials[i % nodeMaterials.length];
      const mesh = new THREE.Mesh(g, m);

      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 18 + (i % 3) * 8 + Math.random() * 4;
      const y = (Math.random() - 0.5) * 24 + 4;
      const z = (Math.random() - 0.5) * 20 - 5;

      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * (radius * 0.7) + z);
      const s = 0.75 + Math.random() * 0.65;
      mesh.scale.set(s, s, s);

      nodesGroup.add(mesh);
      nodeMeshes.push({
        mesh,
        rotSpeedX: 0.012 + Math.random() * 0.02,
        rotSpeedY: 0.015 + Math.random() * 0.02,
        orbitSpeed: (0.003 + Math.random() * 0.004) * (i % 2 === 0 ? 1 : -1),
        orbitRadius: radius,
        orbitAngle: angle,
        floatPhase: Math.random() * Math.PI * 2,
        baseY: y,
        baseZ: z,
      });
    }

    // 7. Component D: Dynamic 3D Neural Constellation Lines
    const lineIndices: [number, number][] = [];
    for (let i = 0; i < nodeMeshes.length; i++) {
      for (let j = i + 1; j < nodeMeshes.length; j++) {
        if (Math.random() < 0.22) {
          lineIndices.push([i, j]);
        }
      }
    }

    const linePositions = new Float32Array(lineIndices.length * 6);
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x4338ca,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const constellationLines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(constellationLines);

    // 8. Component E: Continuous Streaming Particle Field (Deep, Non-distracting Stardust)
    const particleCount = isSoftwareGl ? 280 : 500;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x0284c7);
    const cViolet = new THREE.Color(0x7e22ce);
    const cBlue = new THREE.Color(0x3b82f6);
    const cGold = new THREE.Color(0xd97706);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 115;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 75;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 60;

      // Drift velocities (smooth upward and gentle lateral drift)
      particleVelocities[idx] = (Math.random() - 0.5) * 0.03;
      particleVelocities[idx + 1] = 0.05 + Math.random() * 0.08;
      particleVelocities[idx + 2] = (Math.random() - 0.5) * 0.03;

      const pick = Math.random();
      const col = pick < 0.4 ? cCyan : pick < 0.7 ? cViolet : pick < 0.88 ? cBlue : cGold;
      particleColors[idx] = col.r;
      particleColors[idx + 1] = col.g;
      particleColors[idx + 2] = col.b;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Circular glowing particle texture (Darker subdued falloff)
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      grad.addColorStop(0.3, 'rgba(14, 165, 233, 0.5)');
      grad.addColorStop(0.7, 'rgba(99, 102, 241, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTex = new THREE.CanvasTexture(pCanvas);
    particleTex.needsUpdate = true;

    const particleMat = new THREE.PointsMaterial({
      size: 2.0,
      map: particleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.45, // Deep, eye-friendly moving stardust
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 9. Mouse and Scroll Parallax
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouse.targetX = (e.clientX - halfW) / halfW;
      mouse.targetY = (e.clientY - halfH) / halfH;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 10. Responsive Resizing
    const handleResize = () => {
      if (!container) return;
      width = getWidth();
      height = getHeight();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 11. Main 60 FPS Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const mult = speedRef.current;
      const elapsedTime = clock.getElapsedTime() * mult;

      // Mouse Parallax Lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Camera dynamic sway based on mouse + scroll depth
      camera.position.x = mouse.x * 7;
      camera.position.y = 5 - mouse.y * 6 - (scrollY * 0.012);
      camera.lookAt(0, 3 - (scrollY * 0.012), 0);

      // --- Animate Component A: Wave Mesh Undulation ---
      const wavePos = waveGeom.attributes.position;
      const timeWave = elapsedTime * 1.6;
      for (let i = 0; i < count; i++) {
        const x = wavePos.getX(i);
        const z = wavePos.getZ(i);
        // Multi-frequency wave formula with rolling dynamic crests
        const dynamicY =
          originalPositions[i] +
          Math.sin(x * 0.07 + timeWave) * 3.8 +
          Math.cos(z * 0.10 + timeWave * 0.85) * 3.2 +
          Math.sin((x + z) * 0.05 + timeWave * 1.2) * 1.8;
        wavePos.setY(i, dynamicY);
      }
      wavePos.needsUpdate = true;

      // --- Animate Component B: Core Gyroscope & Crystal ---
      coreGroup.rotation.y = elapsedTime * 0.35 + mouse.x * 0.3;
      coreGroup.position.y = 4 + Math.sin(elapsedTime * 1.2) * 1.2;

      ring1.rotation.z = elapsedTime * 0.45;
      ring1.rotation.x = Math.sin(elapsedTime * 0.5) * 0.25;

      ring2.rotation.y = -elapsedTime * 0.6;
      ring2.rotation.z = Math.cos(elapsedTime * 0.4) * 0.3;

      ring3.rotation.x = elapsedTime * 0.8;
      ring3.rotation.y = elapsedTime * 0.5;

      crystalMesh.rotation.x = elapsedTime * 0.65;
      crystalMesh.rotation.y = elapsedTime * 0.85;

      innerSphere.rotation.y = -elapsedTime * 1.1;

      // --- Animate Component C: Orbiting Polyhedra Nodes ---
      for (let i = 0; i < nodeMeshes.length; i++) {
        const n = nodeMeshes[i];
        n.mesh.rotation.x += n.rotSpeedX * mult;
        n.mesh.rotation.y += n.rotSpeedY * mult;

        n.orbitAngle += n.orbitSpeed * mult;
        n.mesh.position.x = Math.cos(n.orbitAngle) * n.orbitRadius;
        n.mesh.position.z = Math.sin(n.orbitAngle) * (n.orbitRadius * 0.7) + n.baseZ;
        n.mesh.position.y = n.baseY + Math.sin(elapsedTime * 2.0 + n.floatPhase) * 2.2;
      }

      // --- Animate Component D: Dynamic Constellation Lines ---
      const lPos = lineGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < lineIndices.length; i++) {
        const [a, b] = lineIndices[i];
        const nA = nodeMeshes[a]?.mesh;
        const nB = nodeMeshes[b]?.mesh;
        if (nA && nB) {
          const base = i * 6;
          lPos[base] = nA.position.x;
          lPos[base + 1] = nA.position.y;
          lPos[base + 2] = nA.position.z;
          lPos[base + 3] = nB.position.x;
          lPos[base + 4] = nB.position.y;
          lPos[base + 5] = nB.position.z;
        }
      }
      lineGeom.attributes.position.needsUpdate = true;

      // --- Animate Component E: Rising / Drifting Stardust Particles ---
      const pPos = particleGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        pPos[idx] += particleVelocities[idx] * mult;
        pPos[idx + 1] += particleVelocities[idx + 1] * mult;
        pPos[idx + 2] += particleVelocities[idx + 2] * mult;

        // Reset particle when it floats too high or too far
        if (pPos[idx + 1] > 36) {
          pPos[idx + 1] = -34;
          pPos[idx] = (Math.random() - 0.5) * 110;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;

      // Lights dynamic orbit
      cyanPoint.position.x = -25 + Math.sin(elapsedTime * 0.9) * 10;
      cyanPoint.position.y = 15 + Math.cos(elapsedTime * 0.7) * 8;
      magentaPoint.position.x = 25 + Math.cos(elapsedTime * 0.8) * 10;
      magentaPoint.position.y = -10 + Math.sin(elapsedTime * 0.6) * 6;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // 12. Complete Lifecycle Teardown
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Dispose geometries
      waveGeom.dispose();
      waveMat.dispose();

      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();

      crystalGeom.dispose();
      crystalMat.dispose();
      innerSphereGeom.dispose();
      innerSphereMat.dispose();

      geomIco.dispose();
      geomOcta.dispose();
      geomBox.dispose();
      matCyanNode.dispose();
      matPurpleNode.dispose();
      matAmberNode.dispose();

      lineGeom.dispose();
      lineMat.dispose();

      particleGeom.dispose();
      particleMat.dispose();
      particleTex.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  if (!isSupported) {
    return (
      <div className={`fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-indigo-950/20 via-[#070a13] to-[#070a13] ${className}`} />
    );
  }

  return (
    <>
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        style={{ touchAction: 'none' }}
      />

      {/* 1 Lớp nền mờ 70% và màu tối tối theo yêu cầu người dùng để chữ và nội dung cực kỳ dễ đọc */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 transition-all duration-300 ${
          dimMode === '70percent'
            ? 'bg-[#030712]/70 backdrop-blur-[2px]'
            : dimMode === '85percent'
            ? 'bg-[#030712]/85 backdrop-blur-[4px]'
            : 'bg-[#030712]/50 backdrop-blur-[1px]'
        }`}
      />

      {/* Lớp phủ chuyển sắc tối sâu (Deep Dark Vignette) sang trọng, không chói mắt */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_35%,rgba(3,7,18,0.4)_0%,rgba(3,7,18,0.85)_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#030712]/75 via-transparent to-[#030712]/85" />

      {/* Floating Status / Dimmer & Speed Controller Dock (Ẩn theo yêu cầu) */}
      {showStatusBadge && (
        <aside aria-label="3D Background Controls" className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 text-xs text-slate-300 shadow-xl shadow-cyan-950/40">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-medium text-cyan-300 hidden md:inline">Nền 3D:</span>
            <span className="text-slate-300 font-mono">60 FPS</span>

            {/* Readability / Dimming Level Switcher */}
            <button
              type="button"
              onClick={() => setDimMode((prev) => (prev === '50percent' ? '70percent' : prev === '70percent' ? '85percent' : '50percent'))}
              className="ml-1 px-2 py-0.5 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-[11px] font-semibold transition-colors flex items-center gap-1 border border-purple-500/30"
              title="Chỉnh độ mờ nền để tối ưu nhìn rõ chữ nhất"
            >
              <Eye className="w-3 h-3 text-purple-400" />
              <span>{dimMode === '50percent' ? 'Mờ 50%' : dimMode === '70percent' ? 'Mờ tối 70%' : 'Mờ tối 85%'}</span>
            </button>

            {/* Speed toggle */}
            <button
              type="button"
              onClick={() => setMotionSpeed((prev) => (prev === 1.6 ? 1 : prev === 1 ? 0.6 : 1.6))}
              className="px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 text-[11px] font-semibold transition-colors flex items-center gap-1 border border-cyan-500/30"
              title="Thay đổi tốc độ chuyển động 3D"
            >
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>{motionSpeed === 1.6 ? '1.6x' : motionSpeed === 1 ? '1x' : '0.6x'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowStatusBadge(false)}
              className="ml-1 text-slate-500 hover:text-slate-300 text-xs px-1"
              title="Ẩn điều khiển nền"
            >
              ✕
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
