"use client";

import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";
import { MathUtils, Group, Points } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState, useMemo, memo } from "react";

useGLTF.preload(
  "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/potsdamer-platz/potsdamer-platz.hdr"
);

const Scene = memo(function Scene({
  scrollY,
  theme,
}: {
  scrollY: number;
  theme: string | undefined;
}) {
  const groupRef = useRef<Group>(null);
  const isMobile = useMobile ? useMobile() : false;

  const mousePositionRef = useRef({ x: 0, y: 0 });

  const throttleMouseMove = (callback: (e: MouseEvent) => void) => {
    let waiting = false;
    return (e: MouseEvent) => {
      if (!waiting) {
        callback(e);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, 16);
      }
    };
  };

  useEffect(() => {
    const handleMouseMove = throttleMouseMove((e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      mousePositionRef.current = { x, y };
    });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      const rotationFactor = isMobile ? 0.05 : 0.1;

      groupRef.current.rotation.x = MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePositionRef.current.y * rotationFactor,
        0.05
      );
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePositionRef.current.x * rotationFactor,
        0.05
      );
      groupRef.current.position.y = MathUtils.lerp(
        groupRef.current.position.y,
        -scrollY * 0.5,
        0.05
      );
    }
  });

  const particleCount = useMemo(() => {
    return isMobile ? 300 : 800;
  }, [isMobile]);

  return (
    <group ref={groupRef}>
      <ParticleField count={particleCount} theme={theme} />
    </group>
  );
});

const ParticleField = memo(function ParticleField({
  count,
  theme,
}: {
  count: number;
  theme: string | undefined;
}) {
  const points = useRef<Points>(null);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ],
      size: Math.random() * 0.05 + 0.01,
    }));
  }, [count]);

  const positionArray = useMemo(() => {
    return new Float32Array(particles.flatMap((p) => p.position));
  }, [particles]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      points.current.rotation.x += delta * 0.025;
    }
  });

  const particleColor = theme === "dark" ? "#7c3aed" : "#4f46e5";

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={positionArray}
          itemSize={3}
          args={[positionArray, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        transparent
        color={particleColor}
        depthTest={true}
        depthWrite={false}
        alphaTest={0.01}
      />
    </points>
  );
});

function throttle(callback: Function, limit: number) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback(...(arguments as unknown as any[]));
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

const HeroCanvas = memo(function HeroCanvas() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const isMobile = useMobile ? useMobile() : false;

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY / window.innerHeight);
    }, 16);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dpr = isMobile ? [1, 1.5] : [1, 2];

  const backgroundColor = useMemo(
    () => (theme === "dark" ? "#09090b" : "#ffffff"),
    [theme]
  );

  return (
    <Canvas
      dpr={dpr as [number, number]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      performance={{ min: 0.5 }}
      gl={{
        antialias: !isMobile,
        powerPreference: "high-performance",
        alpha: false,
        depth: true,
        stencil: false,
      }}
    >
      <color attach="background" args={[backgroundColor]} />
      <fog attach="fog" args={[backgroundColor, 5, 15]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Scene scrollY={scrollY} theme={theme} />
      <Environment preset="city" />
    </Canvas>
  );
});

export default HeroCanvas;
