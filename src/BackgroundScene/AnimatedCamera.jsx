import { useRef, useEffect } from 'react';
import { PerspectiveCamera, Sparkles } from '@react-three/drei';
import { gsap } from 'gsap';

export const CameraTimeline = new gsap.timeline({
  paused: true,
});

function AnimatedCamera(props) {
  const cameraRef = useRef();

  useEffect(() => {
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -15,
        y: 0,
        z: 5,
        easing: 'easeInOutQuart',
      },
      'project'
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.8,
        z: 0,
        easing: 'easeInOutQuart',
      },

      'project'
    );

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -4,
        y: -0.5,
        z: 0,
        easing: 'easeInOutQuart',
      },
      'end'
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -1.5,
        z: 0,
        easing: 'easeInOutQuart',
      },
      'end'
    );
  }, [cameraRef]);

  return (
    <group dispose={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 12]} rotation={[0, 0, 0]} />
    </group>
  );
}

export default AnimatedCamera;
