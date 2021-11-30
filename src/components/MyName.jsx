import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import name from "../assets/nameThree.glb";

const MyName = () => {
  const { nodes, materials } = useGLTF(name);
  const text = useRef();
  useFrame(({ clock }) => {
    text.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.7) * 0.3 + 7.7;
  });
  return (
    <mesh
      ref={text}
      material={materials.Mat}
      geometry={nodes.Text.geometry}
      rotation={[1.5, 0, 0]}
      position={[-5, 0, 0]}
    />
  );
};

export default MyName;
