import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';

import SimpleGLTFAsset from './SimpleGLTFAsset';
import SimpleLight from './SimpleLight';
import AnimatedCamera from './AnimatedCamera';
import styles from '../ProjectCard/ProjectCard.module.css';

function Scene() {
  return (
    <div className={styles.canvas_wrapper}>
      <Canvas>
        {/* Camera 🎥 */}
        <AnimatedCamera />
        <Sparkles size={10} color={'#fff'} scale={[10, 10, 10]}></Sparkles>

        {/* Lights 💡 */}
        <SimpleLight position={[1, 0, 0]} color={'red'} />
        <SimpleLight position={[-1, 0.5, 0]} color={'blue'} />
        <SimpleLight position={[-1, -0.5, 0]} color={'green'} />
        {/* <pointLight position={[0, 0, 10]} intensity={10} /> */}

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={['#fff']} attach="background" />

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <SimpleGLTFAsset position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
