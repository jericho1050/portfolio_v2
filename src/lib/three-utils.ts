
import * as THREE from 'three';

// Create a geometric shape with custom material
export const createGeometricShape = (
  type: 'sphere' | 'box' | 'torus' | 'cone' | 'cylinder' | 'tetrahedron',
  size: number = 1,
  color: string = '#ffffff',
  wireframe: boolean = false
): THREE.Mesh => {
  // Create geometry based on type
  let geometry;
  
  switch (type) {
    case 'sphere':
      geometry = new THREE.SphereGeometry(size, 32, 32);
      break;
    case 'box':
      geometry = new THREE.BoxGeometry(size, size, size);
      break;
    case 'torus':
      geometry = new THREE.TorusGeometry(size, size / 3, 16, 100);
      break;
    case 'cone':
      geometry = new THREE.ConeGeometry(size, size * 2, 32);
      break;
    case 'cylinder':
      geometry = new THREE.CylinderGeometry(size, size, size * 2, 32);
      break;
    case 'tetrahedron':
      geometry = new THREE.TetrahedronGeometry(size);
      break;
    default:
      geometry = new THREE.SphereGeometry(size, 32, 32);
  }

  // Create material
  const material = wireframe
    ? new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
      })
    : new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.2,
      });

  // Create and return mesh
  return new THREE.Mesh(geometry, material);
};

// Create starfield particles
export const createStarfield = (count: number = 1000, radius: number = 100): THREE.Points => {
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  });

  const particlesPositions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const randomRadius = Math.random() * radius;
    const randomAngleXY = Math.random() * Math.PI * 2;
    const randomAngleZ = (Math.random() - 0.5) * Math.PI;
    
    particlesPositions[i3] = Math.cos(randomAngleXY) * Math.cos(randomAngleZ) * randomRadius; // x
    particlesPositions[i3 + 1] = Math.sin(randomAngleZ) * randomRadius; // y
    particlesPositions[i3 + 2] = Math.sin(randomAngleXY) * Math.cos(randomAngleZ) * randomRadius; // z
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
  
  return new THREE.Points(particlesGeometry, particlesMaterial);
};

// Animate camera to look at a specific position
export const animateCameraToPosition = (
  camera: THREE.Camera,
  targetPosition: THREE.Vector3,
  duration: number = 2000,
  onComplete?: () => void
): void => {
  const startPosition = camera.position.clone();
  const startTime = Date.now();
  
  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Use easing function for smooth animation
    const easeProgress = easeInOutCubic(progress);
    
    // Interpolate between start and target positions
    camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else if (onComplete) {
      onComplete();
    }
  };
  
  animate();
};

// Easing function for smooth animation
const easeInOutCubic = (x: number): number => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};
