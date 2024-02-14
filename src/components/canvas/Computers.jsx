import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Terminal from "../Terminal";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./apple_imac/scene.gltf");

  return (
    <mesh rotation={[0, -0.1, 0]}>
      <pointLight intensity={ isMobile? 10 : 50.5} />
      <directionalLight position={[10, 10, 5]} intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 8 : 12}
        position={isMobile ? [0, -0.5, -1] : [0, 0, -0.5]}
        rotation={[0.0, 1.35, 0]}
      />
      <Html distanceFactor={isMobile ? 4 : 10} zIndexRange={[0, 1]}>
        <div className='absolute top-[-150px] left-[-180px]'>
          <Terminal />
        </div>
      </Html>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

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
      pointerEvents='none' 
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [18, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;