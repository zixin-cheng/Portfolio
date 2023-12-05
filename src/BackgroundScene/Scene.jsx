import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Sparkles, Environment } from '@react-three/drei';
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
        <Environment preset="dawn" resolution={64} />
        <Sparkles count={10} size={30} color={'#aa8fdb'} scale={[20, 20, 20]}></Sparkles>
        <Sparkles count={10} size={50} color={'#e3b1c9'} scale={[20, 20, 20]}></Sparkles>
        <Sparkles count={10} size={30} color={'#e3b1c9'} scale={[20, 20, 20]}></Sparkles>
        <Sparkles count={10} size={50} color={'#e3b1c9'} scale={[20, 20, 20]}></Sparkles>
        <Sparkles count={50} size={20} color={'#ffaa75'} position={[0, 0, -20]} scale={[100, 100, 100]}></Sparkles>

        {/* Lights 💡 */}
        <SimpleLight position={[1, 0, 0]} color={'red'} />
        {/* <SimpleLight position={[-1, 0.5, 0]} color={'blue'} /> */}
        {/* <SimpleLight position={[-1, -0.5, 0]} color={'green'} /> */}
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
