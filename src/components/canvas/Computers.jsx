import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Terminal from "../Terminal";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./laptop/scene.gltf");

  return (
    <mesh rotation={[0.07, -0.1, -0.3]}>
      <pointLight intensity={ isMobile? 10 : 2.5} />
      <directionalLight position={[0, 10, 20]} intensity={12} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 8 : 20}
        position={isMobile ? [0, 0.3, 0] : [0, -1.5, 0]}
        rotation={[0.0, 1.35, 0]}
      />
      <Html distanceFactor={isMobile ? 5 : 8} zIndexRange={[0, 1]}>
        <div className='absolute top-[-300px] lg:top-[-190px] left-[-170px]'>
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