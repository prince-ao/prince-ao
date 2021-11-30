import React, { useEffect, useState, Suspense } from "react";
import { Info, Fresco } from "./components/index.js";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height,
        }}
      >
        <Suspense fallback={null}>
          <Fresco />
        </Suspense>
      </div>
      <Info />
    </>
  );
};

export default App;
