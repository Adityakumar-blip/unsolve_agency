import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const containerRef = useRef(null);
  const renderer = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const cube = useRef(null);

  useEffect(() => {
    // Set up Three.js
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(width, height);
    container.appendChild(renderer.current.domElement);

    scene.current = new THREE.Scene();

    camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.current.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube.current = new THREE.Mesh(geometry, material);
    scene.current.add(cube.current);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
      renderer.current.render(scene.current, camera.current);
    };
    animate();

    // Clean up
    return () => {
      container.removeChild(renderer.current.domElement);
    };
  }, []);

  // Update cube position based on cursor
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width * 2 - 1;
    const y = -((clientY - top) / height) * 2 + 1;

    cube.current.position.x = x * 3;
    cube.current.position.y = y * 3;
  };

  return <div ref={containerRef} onMouseMove={handleMouseMove} />;
};

export default Cube;
