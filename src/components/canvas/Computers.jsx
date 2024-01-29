import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./apple_imac/scene.gltf");

  return (
    <mesh rotation={[0, -0.1, 0]}>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <spotLight
        position={[50, 80, 10]}
        angle={0.6}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <pointLight intensity={ isMobile? 10 : 300.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 5 : 8}
        position={isMobile ? [0, -0.5, -1] : [0, -0.5, -0.5]}
        rotation={[-0.00, 0.1, 0]}
      />
      {/* <Html distanceFactor={10}>
        <div className="p-12  bg-red">
          hello <br />
          world
        </div>
      </Html> */}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={0}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;