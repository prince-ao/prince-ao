import React from "react";

const Env = () => {
  return (
    <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2} scale={100}>
      <planeGeometry />
      <meshStandardMaterial color="#181818" transparent depthWrite={false} />
    </mesh>
  );
};

export default Env;
