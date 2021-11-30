import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import MyName from "./MyName";
import Env from "./Env";

const Fresco = () => {
  return (
    <Canvas camera={{ position: [0, 0, 9] }}>
      <ambientLight intensity={3} />
      <pointLight position={[-1, 12, -5]} />
      <color attach="background" args={["#002f0a"]} />
      <fog attach="fog" args={["#002f0a", 10, 50]} />
      <OrbitControls
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 2.8}
        maxZoom={0.1}
      />
      <MyName />
      <Lights count={200} />
      <Env />
    </Canvas>
  );
};

export default Fresco;
