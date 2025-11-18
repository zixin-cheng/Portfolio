import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { gsap } from 'gsap';

import Blob from './assets/Abstract-shape.tsx';

function SimpleGLTFAsset(props) {
  const group = useRef();
  const { position, scale, modelUrl } = props;
  // const gltf = useGLTF(modelUrl);
  const gltf = useLoader(GLTFLoader, 'assets/abstract-shape.glb');
  // const [rotationSpeed, setRotationSpeed] = useState(0.0001);

  // const modelRef = useRef();
  // useFrame(() => {
  //   modelRef.current.rotation.x += rotationSpeed;
  //   modelRef.current.rotation.y -= rotationSpeed;
  //   modelRef.current.rotation.z += rotationSpeed;
  // });

  return (
    <group dispose={null}>
      {/* <primitive
        ref={modelRef}
        position={position ? position : [0, 0, 0]}
        scale={scale ? scale : [3, 3, 3]}
        object={gltf.scene}
      ></primitive> */}
      <Blob scale={[50, 50, 50]} rotation={[0, 0, 0]} />
    </group>
  );
}

export default SimpleGLTFAsset;
