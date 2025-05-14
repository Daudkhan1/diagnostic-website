import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles, clock;

    scene = new THREE.Scene();
    scene.background = new THREE.Color("#0b1a30"); // Navy Blue Background

    const width = window.innerWidth;
    const height = window.innerHeight;

    camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 80;

    renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    const particleCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: "#418cfd", // Alice Blue Particles
      size: 1.2,
      transparent: true,
      opacity: 0.8,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;
      const time = clock.getElapsedTime();

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        positions[ix] += 0.03; // Moving left to right

        if (positions[ix] > 100) {
          positions[ix] = -100; // Reset when out of view
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="particle-bg" />;
};

export default ParticleBackground;
