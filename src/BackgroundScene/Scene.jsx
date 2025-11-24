import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

import SimpleGLTFAsset from './SimpleGLTFAsset';
import SimpleLight from './SimpleLight';
import AnimatedCamera from './AnimatedCamera';
import styles from '../ProjectCard/ProjectCard.module.css';

export default function Scene() {
  return (
    <div className={styles.canvas_wrapper}>
      <Canvas>
        {/* Camera 🎥 */}
        <AnimatedCamera />

        {/* Environment */}
        <Environment path="/" files="assets/sunset.hdr" />

        {/* Lights replacing sparkles */}
        {/* <pointLight position={[0, 10, 0]} color={'#aa8fdb'} intensity={50} distance={500} />
        <pointLight position={[0, 0, 10]} color={'#b1c5e3'} intensity={50} distance={500} />
        <pointLight position={[10, 0, 0]} color={'#e3b1c9'} intensity={50} distance={500} />
        <pointLight position={[0, 5, 0]} color={'#b1c5e3'} intensity={50} distance={500} />
        <pointLight position={[0, 0, -20]} color={'#ffaa75'} intensity={2} distance={1000} /> */}

        {/* Additional lights */}
        <SimpleLight position={[1, 0, 1]} color={'red'} />
        {/* You can uncomment/add more lights if needed */}
        {/* <SimpleLight position={[-1, 0.5, 0]} color={'blue'} />
        <SimpleLight position={[-1, -5, 0]} color={'green'} />
        <SimpleLight position={[1, -0.5, -0.5]} color={'green'} />
        <SimpleLight position={[-10, 5, 0.5]} color={'#ffaa75'} />
        <SimpleLight position={[-0.5, -0.5, 0]} color={'#b1c5e3'} />
        <SimpleLight position={[1, -10, 0.5]} color={'#ffaa75'} />
        <SimpleLight position={[-0.5, 10, 0.5]} color={'#ffaa75'} /> */}

        {/* Background */}
        <color args={['rgb(232, 229, 229)']} attach="background" />

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <SimpleGLTFAsset position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
