"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Environment, Float } from "@react-three/drei"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "Node.js",
  "GraphQL",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
  "CI/CD",
  "Jest",
  "Figma",
]

function SkillsCloud() {
  const group = useRef()
  const { theme } = useTheme()
  const isMobile = useMobile()

  // Adjust number of visible skills based on device
  const visibleSkills = isMobile ? skills.slice(0, 10) : skills

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={group}>
      {visibleSkills.map((skill, i) => {
        // Calculate position on a sphere
        const phi = Math.acos(-1 + (2 * i) / visibleSkills.length)
        const theta = Math.sqrt(visibleSkills.length * Math.PI) * phi
        const radius = 3

        return (
          <Float
            key={skill}
            speed={1}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            position={[
              radius * Math.cos(theta) * Math.sin(phi),
              radius * Math.sin(theta) * Math.sin(phi),
              radius * Math.cos(phi),
            ]}
          >
            <Text
              color={theme === "dark" ? "#7c3aed" : "#4f46e5"}
              fontSize={0.3}
              maxWidth={0.5}
              lineHeight={1}
              letterSpacing={0.02}
              textAlign="center"
              font="/fonts/Inter-Bold.ttf"
            >
              {skill}
            </Text>
          </Float>
        )
      })}
    </group>
  )
}

export default function SkillsGlobe() {
  const { theme } = useTheme()

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
      <color attach="background" args={[theme === "dark" ? "#09090b" : "#ffffff"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <SkillsCloud />
      <Environment preset="city" />
    </Canvas>
  )
}
