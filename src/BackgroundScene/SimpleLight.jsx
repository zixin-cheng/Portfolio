import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

function SimpleLight(props) {
  const { viewport } = useThree();
  const mouseRef = useRef();
  const { position, color } = props;

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 5 + position[0];
    const y = (mouse.y * viewport.height) / 5 + position[1];

    mouseRef.current.position.x = x;
    mouseRef.current.position.y = y;
  });

  return (
    <pointLight
      ref={mouseRef}
      position={position ? position : mouseRef.current.position}
      color={color ? color : 'blue'}
      intensity={100}
    />
  );
}

export default SimpleLight;
