import React, { Suspense } from "react";
import { useColorModeValue, Box } from "@chakra-ui/react";
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import sceneUrl from "./test.glb";

function Model() {
  const gltf = useLoader(GLTFLoader, sceneUrl);
  return <primitive object={gltf.scene} />;
}

export default function ShowLetter(props) {
  const bg = useColorModeValue("gray.900", "yellow.50");
  //const border = useColorModeValue("solid white 0.5px", "solid black 0.5px");
  return (
    <Box
      h={[200, 300, 400]}
      mt={[30, 10, 10]}
      ml={[10, 20, 40]}
      mr={[10, 20, 40]}
      style={{
        backgroundColor: bg,
      }}
    >
      <Canvas camera={{ position: [5, 10, 15], fov: 0.45 }}>
        <pointLight position={[10, 10, 10]} intensity={1.0} />
        <Suspense fallback={null}>
          <OrbitControls
            autoRotateSpeed={4.0}
            autoRotate="true"
            minDistance="18"
            maxDistance="25"
            panSpeed="0"
          />
          {bg === "gray.900" ? (
            <Environment preset="dawn" />
          ) : (
            <Environment preset="night" />
          )}
          <Model />
        </Suspense>
      </Canvas>
    </Box>
  );
}
