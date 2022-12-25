import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export const Model = () => {
  const gltf = useLoader(GLTFLoader, "../images/Horse.gltf");
  return (
    <div>
      <primitive object={gltf.scene} scale={1} />
    </div>
  );
};