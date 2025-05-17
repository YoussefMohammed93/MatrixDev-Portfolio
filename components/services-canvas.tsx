"use client";

import * as THREE from "three";
import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";
import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo, memo } from "react";

function CodeShape({
  theme,
  position = [0, 0, 0],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const codeGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(-0.5, 0.8);
    shape.lineTo(-0.8, 0.5);
    shape.lineTo(-0.8, -0.5);
    shape.lineTo(-0.5, -0.8);
    shape.lineTo(-0.3, -0.6);
    shape.lineTo(-0.5, -0.3);
    shape.lineTo(-0.5, 0.3);
    shape.lineTo(-0.3, 0.6);
    shape.lineTo(-0.5, 0.8);

    shape.moveTo(0.5, 0.8);
    shape.lineTo(0.8, 0.5);
    shape.lineTo(0.8, -0.5);
    shape.lineTo(0.5, -0.8);
    shape.lineTo(0.3, -0.6);
    shape.lineTo(0.5, -0.3);
    shape.lineTo(0.5, 0.3);
    shape.lineTo(0.3, 0.6);
    shape.lineTo(0.5, 0.8);

    const extrudeSettings = {
      steps: 1,
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  const materialColor = useMemo(() => {
    return theme === "dark" ? "#6366f1" : "#4f46e5"; // indigo
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.005;

      meshRef.current.scale.x = THREE.MathUtils.lerp(
        meshRef.current.scale.x,
        hovered ? 1.2 : 1,
        0.1
      );

      meshRef.current.scale.y = THREE.MathUtils.lerp(
        meshRef.current.scale.y,
        hovered ? 1.2 : 1,
        0.1
      );

      meshRef.current.scale.z = THREE.MathUtils.lerp(
        meshRef.current.scale.z,
        hovered ? 1.2 : 1,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={codeGeometry}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={materialColor}
        metalness={0.4}
        roughness={0.3}
        emissive={materialColor}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function LayersShape({
  theme,
  position = [0, 0, 0],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const materialColor = useMemo(() => {
    return theme === "dark" ? "#38bdf8" : "#0ea5e9"; // sky
  }, [theme]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.4 + 1) * 0.1;
      groupRef.current.rotation.y += 0.003;

      const scale = hovered ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh position={[0, -0.2, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.1, 0.8]} />
        <meshStandardMaterial
          color={materialColor}
          metalness={0.4}
          roughness={0.3}
          emissive={materialColor}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI * 0.05, 0]}>
        <boxGeometry args={[1, 0.1, 0.7]} />
        <meshStandardMaterial
          color={materialColor}
          metalness={0.4}
          roughness={0.3}
          emissive={materialColor}
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[0, Math.PI * -0.05, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.6]} />
        <meshStandardMaterial
          color={materialColor}
          metalness={0.4}
          roughness={0.3}
          emissive={materialColor}
          emissiveIntensity={0.7}
        />
      </mesh>
    </group>
  );
}

function PhoneShape({
  theme,
  position = [0, 0, 0],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const materialColor = useMemo(() => {
    return theme === "dark" ? "#f472b6" : "#ec4899"; // pink
  }, [theme]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.3 + 2) * 0.1;
      meshRef.current.rotation.y += 0.002;

      const scale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <boxGeometry args={[0.6, 1.2, 0.1]} />
        <meshStandardMaterial
          color={materialColor}
          metalness={0.5}
          roughness={0.2}
          emissive={materialColor}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.5, 1, 0.01]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}

function Scene() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isMobile = useMobile();

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <CodeShape
        theme={currentTheme}
        position={isMobile ? [-1, 0, 0] : [-2, 0, 0]}
      />

      <LayersShape theme={currentTheme} position={[0, 0.5, 0]} />

      <PhoneShape
        theme={currentTheme}
        position={isMobile ? [1, 0, 0] : [2, 0, 0]}
      />

      <Environment preset="city" />
    </>
  );
}

const ServicesCanvas = memo(function ServicesCanvas() {
  const { theme } = useTheme();
  const isMobile = useMobile();

  const backgroundColor = useMemo(
    () => (theme === "dark" ? "#09090b" : "#ffffff"),
    [theme]
  );

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <color attach="background" args={[backgroundColor]} />
        <Scene />
      </Canvas>
    </div>
  );
});

export default ServicesCanvas;
