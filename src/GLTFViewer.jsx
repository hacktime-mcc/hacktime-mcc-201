import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const GLTFModel = ({ url }) => {
  // Load the glTF model
  const { scene } = useGLTF(url);

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

const GLTFViewer = ({ modelUrl }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        {/* Ambient Light and Directional Light */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* Load the glTF model */}
        <GLTFModel url={modelUrl} />

        {/* OrbitControls for interactive rotation */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLTFViewer;
