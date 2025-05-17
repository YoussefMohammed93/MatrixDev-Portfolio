"use client";

import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";
import { Environment } from "@react-three/drei";
import { MathUtils, Group, Points } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, useMemo, memo, useCallback } from "react";

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
  const frameRef = useRef(0);

  const throttleMouseMove = useCallback((callback: (e: MouseEvent) => void) => {
    let waiting = false;
    return (e: MouseEvent) => {
      if (!waiting) {
        callback(e);
        waiting = true;
        frameRef.current = requestAnimationFrame(() => {
          waiting = false;
        });
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = throttleMouseMove((e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePositionRef.current = { x, y };
    });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [throttleMouseMove]);

  useFrame(() => {
    if (groupRef.current) {
      const rotationFactor = isMobile ? 0.03 : 0.05;

      groupRef.current.rotation.x = MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePositionRef.current.y * rotationFactor,
        0.03
      );
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePositionRef.current.x * rotationFactor,
        0.03
      );
      groupRef.current.position.y = MathUtils.lerp(
        groupRef.current.position.y,
        -scrollY * 0.3,
        0.03
      );
    }
  });

  const particleCount = useMemo(() => {
    return isMobile ? 150 : 400;
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
  const frameCountRef = useRef(0);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ],
      size: Math.random() * 0.04 + 0.01,
    }));
  }, [count]);

  const positionArray = useMemo(() => {
    return new Float32Array(particles.flatMap((p) => p.position));
  }, [particles]);

  useFrame((_, delta) => {
    frameCountRef.current += 1;

    if (frameCountRef.current % 2 === 0 && points.current) {
      points.current.rotation.y += delta * 0.03;
      points.current.rotation.x += delta * 0.015;
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
        size={0.04}
        sizeAttenuation
        transparent
        color={particleColor}
        depthTest={true}
        depthWrite={false}
        alphaTest={0.01}
        opacity={0.8}
      />
    </points>
  );
});

const useThrottleCallback = (callback: Function, limit: number) => {
  return useCallback(() => {
    let waiting = false;
    let frameId = 0;

    return function () {
      if (!waiting) {
        callback(...(arguments as unknown as any[]));
        waiting = true;
        frameId = requestAnimationFrame(() => {
          setTimeout(() => {
            waiting = false;
          }, limit);
        });
      }

      return () => {
        cancelAnimationFrame(frameId);
      };
    };
  }, [callback, limit]);
};

const HeroCanvas = memo(function HeroCanvas() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const isMobile = useMobile ? useMobile() : false;

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY / window.innerHeight);
  }, []);

  const throttledScroll = useThrottleCallback(handleScroll, 32);

  useEffect(() => {
    const scrollHandler = throttledScroll();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (typeof scrollHandler === "function") {
        scrollHandler();
      }
    };
  }, [throttledScroll]);

  const dpr = isMobile ? [0.8, 1] : [1, 1.5];

  const backgroundColor = useMemo(
    () => (theme === "dark" ? "#09090b" : "#ffffff"),
    [theme]
  );

  return (
    <Canvas
      dpr={dpr as [number, number]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      performance={{ min: 0.3 }}
      frameloop="demand"
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: false,
        depth: true,
        stencil: false,
        precision: "lowp",
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
