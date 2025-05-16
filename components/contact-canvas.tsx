"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useMobile } from "@/hooks/use-mobile";
import * as THREE from "three";
import { MathUtils } from "three";
import { Environment } from "@react-three/drei";

function PaperPlane({
  theme,
  position = [2, 1.5, -0.5],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Create a paper plane shape
  const planeGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    // Draw a paper plane shape
    shape.moveTo(0, 0);
    shape.lineTo(1, 0.5);
    shape.lineTo(0, 1);
    shape.lineTo(-1, 0.5);
    shape.lineTo(0, 0);

    const extrudeSettings = {
      steps: 2,
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 5,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  // Material color based on theme
  const materialColor = useMemo(() => {
    return theme === "dark" ? "#7c3aed" : "#4f46e5";
  }, [theme]);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // More pronounced floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

      // Continuous gentle rotation
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.15;

      // Hover effect
      meshRef.current.scale.x = MathUtils.lerp(
        meshRef.current.scale.x,
        hovered ? 1.2 : 1,
        0.1
      );
      meshRef.current.scale.y = MathUtils.lerp(
        meshRef.current.scale.y,
        hovered ? 1.2 : 1,
        0.1
      );
      meshRef.current.scale.z = MathUtils.lerp(
        meshRef.current.scale.z,
        hovered ? 1.2 : 1,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={planeGeometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[position[0], position[1], position[2]]}
      rotation={[0.2, 0.3, 0]}
      scale={[0.8, 0.8, 0.8]}
    >
      <meshStandardMaterial
        color={materialColor}
        metalness={0.4}
        roughness={0.2}
        emissive={materialColor}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function ConnectionParticles({
  count = 100,
  theme,
}: {
  count: number;
  theme: string | undefined;
}) {
  const points = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation
  useFrame(() => {
    if (points.current) {
      // Rotate based on mouse position
      points.current.rotation.x = MathUtils.lerp(
        points.current.rotation.x,
        mousePosition.y * 0.2,
        0.05
      );
      points.current.rotation.y = MathUtils.lerp(
        points.current.rotation.y,
        mousePosition.x * 0.2,
        0.05
      );

      // Gentle rotation over time
      points.current.rotation.z += 0.001;
    }
  });

  // Generate particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3; // Increased radius for wider distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push({ position: [x, y, z] });
    }
    return temp;
  }, [count]);

  // Create position array for buffer geometry
  const positionArray = useMemo(() => {
    return new Float32Array(particles.flatMap((p) => p.position));
  }, [particles]);

  // Material color based on theme
  const particleColor = useMemo(() => {
    return theme === "dark" ? "#9f6eff" : "#6366f1";
  }, [theme]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positionArray, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation
        transparent
        color={particleColor}
        depthWrite={false}
        alphaTest={0.01}
        opacity={0.8}
      />
    </points>
  );
}

function Triangle({
  theme,
  position = [0, 0, 0],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Create a triangle shape
  const triangleGeometry = useMemo(() => {
    const shape = new THREE.Shape();

    // Draw a triangle shape
    shape.moveTo(0, 1);
    shape.lineTo(-0.866, -0.5);
    shape.lineTo(0.866, -0.5);
    shape.lineTo(0, 1);

    const extrudeSettings = {
      steps: 1,
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  // Material color based on theme
  const materialColor = useMemo(() => {
    return theme === "dark" ? "#ec4899" : "#f472b6"; // Pink color
  }, [theme]);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;

      // Continuous gentle rotation
      meshRef.current.rotation.z += 0.002;

      // Hover effect
      meshRef.current.scale.x = MathUtils.lerp(
        meshRef.current.scale.x,
        hovered ? 1.1 : 1,
        0.1
      );
      meshRef.current.scale.y = MathUtils.lerp(
        meshRef.current.scale.y,
        hovered ? 1.1 : 1,
        0.1
      );
      meshRef.current.scale.z = MathUtils.lerp(
        meshRef.current.scale.z,
        hovered ? 1.1 : 1,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={triangleGeometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
      rotation={[0.1, 0.1, 0]}
      scale={[0.5, 0.5, 0.5]}
    >
      <meshStandardMaterial
        color={materialColor}
        metalness={0.3}
        roughness={0.4}
        emissive={materialColor}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function Circle({
  theme,
  position = [0, 0, 0],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Create a 3D circle (cylinder) geometry
  const circleGeometry = useMemo(() => {
    return new THREE.CylinderGeometry(1, 1, 0.2, 32, 1, false);
  }, []);

  // Material color based on theme
  const materialColor = useMemo(() => {
    return theme === "dark" ? "#10b981" : "#34d399"; // Green color
  }, [theme]);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.3 + 1) * 0.1;

      // Pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      meshRef.current.scale.set(scale * 0.5, scale * 0.5, scale * 0.5);

      // Hover effect
      if (hovered) {
        meshRef.current.rotation.z += 0.01;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={circleGeometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
      rotation={[Math.PI / 2, 0, Math.PI / 6]}
      scale={[0.7, 0.7, 0.7]}
    >
      <meshStandardMaterial
        color={materialColor}
        metalness={0.3}
        roughness={0.4}
        emissive={materialColor}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function SmallSquares({
  theme,
  count = 10,
}: {
  theme: string | undefined;
  count?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate squares
  const squares = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 2 - 1;
      const rotation = Math.random() * Math.PI * 2;
      const scale = 0.1 + Math.random() * 0.2;

      temp.push({
        position: [x, y, z] as [number, number, number],
        rotation,
        scale,
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  // Material color based on theme
  const materialColors = useMemo(() => {
    return theme === "dark"
      ? ["#f97316", "#0ea5e9", "#8b5cf6", "#ec4899"]
      : ["#fb923c", "#38bdf8", "#a78bfa", "#f472b6"];
  }, [theme]);

  // Animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {squares.map((square, i) => (
        <Square
          key={i}
          position={square.position}
          rotation={square.rotation}
          scale={square.scale}
          color={materialColors[i % materialColors.length]}
          speed={square.speed}
          offset={square.offset}
        />
      ))}
    </group>
  );
}

function Square({
  position,
  rotation,
  scale,
  color,
  speed,
  offset,
}: {
  position: [number, number, number];
  rotation: number;
  scale: number;
  color: string;
  speed: number;
  offset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create a square geometry
  const squareGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(1, 1);
  }, []);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed + offset) * 0.2;

      // Rotation
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={squareGeometry}
      position={position}
      rotation={[0, 0, rotation]}
      scale={[scale, scale, scale]}
    >
      <meshStandardMaterial
        color={color}
        metalness={0.2}
        roughness={0.5}
        emissive={color}
        emissiveIntensity={0.3}
        side={THREE.DoubleSide}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function BigSquare({
  theme,
  position = [-2.5, -2.2, -0.5],
}: {
  theme: string | undefined;
  position?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Create a square geometry with rounded corners
  const squareGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const size = 0.8;
    const radius = 0.2;

    // Draw a rounded square
    shape.moveTo(-size + radius, -size);
    shape.lineTo(size - radius, -size);
    shape.quadraticCurveTo(size, -size, size, -size + radius);
    shape.lineTo(size, size - radius);
    shape.quadraticCurveTo(size, size, size - radius, size);
    shape.lineTo(-size + radius, size);
    shape.quadraticCurveTo(-size, size, -size, size - radius);
    shape.lineTo(-size, -size + radius);
    shape.quadraticCurveTo(-size, -size, -size + radius, -size);

    const extrudeSettings = {
      steps: 1,
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  // Material color based on theme - using a vibrant cyan/sky blue color
  const materialColor = useMemo(() => {
    return theme === "dark" ? "#06b6d4" : "#0ea5e9"; // Cyan/Sky blue color
  }, [theme]);

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;

      // Subtle rotation
      meshRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;

      // Hover effect
      meshRef.current.scale.x = MathUtils.lerp(
        meshRef.current.scale.x,
        hovered ? 1.1 : 1,
        0.1
      );
      meshRef.current.scale.y = MathUtils.lerp(
        meshRef.current.scale.y,
        hovered ? 1.1 : 1,
        0.1
      );
      meshRef.current.scale.z = MathUtils.lerp(
        meshRef.current.scale.z,
        hovered ? 1.1 : 1,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={squareGeometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
      rotation={[0.1, 0.1, Math.PI / 6]} // Slightly tilted
      scale={[1, 1, 1]}
    >
      <meshStandardMaterial
        color={materialColor}
        metalness={0.4}
        roughness={0.3}
        emissive={materialColor}
        emissiveIntensity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene() {
  const { theme, systemTheme } = useTheme();
  const isMobile = useMobile();
  const particleCount = isMobile ? 75 : 200;
  const squareCount = isMobile ? 8 : 15;

  // Use a safe theme value that's consistent between server and client
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <spotLight
        position={[0, 5, 5]}
        intensity={0.5}
        angle={0.3}
        penumbra={1}
      />
      <PaperPlane theme={currentTheme} position={[2, 1.5, -0.5]} />
      <Triangle theme={currentTheme} position={[-2, 1, -1]} />
      <Circle theme={currentTheme} position={[2.5, -2, -0.8]} />
      <BigSquare theme={currentTheme} position={[-2.5, -2.2, -0.5]} />
      <SmallSquares theme={currentTheme} count={squareCount} />
      <ConnectionParticles count={particleCount} theme={currentTheme} />
    </>
  );
}

export default function ContactCanvas() {
  const { theme, systemTheme } = useTheme();
  const isMobile = useMobile();
  const [isMounted, setIsMounted] = useState(false);

  // Use a safe theme value that's consistent between server and client
  const currentTheme = theme === "system" ? systemTheme : theme;
  const backgroundColor = currentTheme === "dark" ? "#09090b" : "#ffffff";

  // Client-side only code to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);

    // Force a re-render after component is mounted
    const timer = setTimeout(() => {
      setIsMounted((state) => state);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return <div className="absolute inset-0 z-0 bg-background/30" />;
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[backgroundColor, 5, 15]} />
        <Scene />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
