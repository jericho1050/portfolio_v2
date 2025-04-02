
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import { createGeometricShape, createStarfield } from "../lib/three-utils";

interface GeometryProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  size: number;
  shape: 'sphere' | 'box' | 'torus' | 'cone' | 'cylinder' | 'tetrahedron';
  wireframe?: boolean;
  rotationSpeed?: [number, number, number];
}

// Interactive Geometry component
const InteractiveGeometry: React.FC<GeometryProps> = ({
  position,
  rotation,
  color,
  size,
  shape,
  wireframe = false,
  rotationSpeed = [0.003, 0.002, 0.001]
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      // Rotate the mesh
      mesh.current.rotation.x += rotationSpeed[0];
      mesh.current.rotation.y += rotationSpeed[1];
      mesh.current.rotation.z += rotationSpeed[2];
      
      // Add subtle floating motion
      mesh.current.position.y += Math.sin(state.clock.elapsedTime) * 0.001;
      
      // Apply subtle scale effect when hovered
      const targetScale = hovered ? 1.1 : 1;
      mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });
  
  let geometry;
  
  switch (shape) {
    case 'sphere':
      geometry = <sphereGeometry args={[size, 32, 32]} />;
      break;
    case 'box':
      geometry = <boxGeometry args={[size, size, size]} />;
      break;
    case 'torus':
      geometry = <torusGeometry args={[size, size / 3, 16, 100]} />;
      break;
    case 'cone':
      geometry = <coneGeometry args={[size, size * 2, 32]} />;
      break;
    case 'cylinder':
      geometry = <cylinderGeometry args={[size, size, size * 2, 32]} />;
      break;
    case 'tetrahedron':
      geometry = <tetrahedronGeometry args={[size]} />;
      break;
    default:
      geometry = <sphereGeometry args={[size, 32, 32]} />;
  }
  
  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {geometry}
      {wireframe ? (
        <meshBasicMaterial color={hovered ? new THREE.Color(color).offsetHSL(0, 0.1, 0.1) : color} wireframe />
      ) : (
        <meshStandardMaterial 
          color={hovered ? new THREE.Color(color).offsetHSL(0, 0.1, 0.1) : color} 
          roughness={0.3} 
          metalness={0.2} 
          emissive={hovered ? color : undefined}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      )}
    </mesh>
  );
};

// Starfield component
const Starfield: React.FC = () => {
  const points = useRef<THREE.Points>(null);
  const { camera } = useThree();
  
  useEffect(() => {
    if (points.current) {
      // Make the starfield follow the camera
      points.current.position.copy(camera.position);
    }
  }, [camera.position]);
  
  useFrame(() => {
    if (points.current) {
      points.current.position.copy(camera.position);
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={(() => {
            const arr = new Float32Array(2000 * 3);
            for (let i = 0; i < 2000; i++) {
              const i3 = i * 3;
              const radius = 50;
              const theta = Math.random() * Math.PI * 2;
              const phi = Math.acos(2 * Math.random() - 1);
              
              arr[i3] = radius * Math.sin(phi) * Math.cos(theta);
              arr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
              arr[i3 + 2] = radius * Math.cos(phi);
            }
            return arr;
          })()}
          count={2000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.8} />
    </points>
  );
};

// Scene component that contains all 3D elements
const Scene: React.FC = () => {
  useFrame(({ camera }) => {
    // Smoothly rotate the camera around the scene
    camera.position.x = Math.sin(performance.now() / 10000) * 15;
    camera.position.z = Math.cos(performance.now() / 10000) * 15;
    camera.lookAt(0, 0, 0);
  });
  
  // Define geometric shapes to display
  const shapes: GeometryProps[] = [
    { position: [0, 0, 0], rotation: [0, 0, 0], color: "#3b82f6", size: 2, shape: "sphere", wireframe: true },
    { position: [5, 2, -3], rotation: [1, 0.5, 0], color: "#8b5cf6", size: 1.2, shape: "torus" },
    { position: [-4, -2, -1], rotation: [0.5, 0, 1], color: "#ec4899", size: 1, shape: "cone" },
    { position: [3, -3, 3], rotation: [0, 1, 0.5], color: "#10b981", size: 1, shape: "box" },
    { position: [-5, 1, 2], rotation: [0, 0.2, 0.5], color: "#f59e0b", size: 1.3, shape: "cylinder" },
    { position: [0, 4, -5], rotation: [0.5, 0.5, 0], color: "#ef4444", size: 1.1, shape: "tetrahedron" },
  ];
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
      
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Directional light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      {/* Add geometric shapes */}
      {shapes.map((shape, index) => (
        <InteractiveGeometry key={index} {...shape} />
      ))}
      
      {/* Starfield background */}
      <Starfield />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
    </>
  );
};

// Main ThreeScene component
const ThreeScene: React.FC = () => {
  return (
    <div className="three-container">
      <div className="three-inner">
        <Canvas 
          shadows 
          dpr={[1, 2]} 
          gl={{ 
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace // Updated from outputEncoding
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeScene;