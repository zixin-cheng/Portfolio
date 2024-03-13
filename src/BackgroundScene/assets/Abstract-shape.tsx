/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 abstract-shape.glb --types 
*/

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Caustics, useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Shape001: THREE.Mesh;
    Shape003: THREE.Mesh;
    Shape004: THREE.Mesh;
    Shape005: THREE.Mesh;
    Shape006: THREE.Mesh;
    Shape007: THREE.Mesh;
    Shape008: THREE.Mesh;
    Shape009: THREE.Mesh;
    Shape010: THREE.Mesh;
    Shape011: THREE.Mesh;
    Shape012: THREE.Mesh;
    Shape013: THREE.Mesh;
    Shape014: THREE.Mesh;
  };
  materials: {};
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

export default function Blob(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./assets/abstract-shape.glb') as GLTFResult;
  const [rotationSpeed, setRotationSpeed] = useState(0.0002);

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.x += rotationSpeed;
    modelRef.current.rotation.y -= rotationSpeed;
    modelRef.current.rotation.z += rotationSpeed;
  });
  // b48181
  const mat = (
    <MeshTransmissionMaterial resolution={64} distortion={0.25} color="#edeff0" thickness={0.5} anisotropy={1} />
  );
  //  f7d7d2
  const matMetal = <meshStandardMaterial color="#ccd5e3" roughness={0.1} metalness={0.925} />;

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh geometry={nodes.Shape001.geometry}>{mat}</mesh>
      {/* 
      <mesh geometry={nodes.Shape003.geometry} rotation={[0.413, 0.133, -2.854]}>
        <MeshTransmissionMaterial
          color="#ffc299"
          backside
          backsideThickness={1}
          thickness={0.2}
          chromaticAberration={1}
          anisotropicBlur={1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
        />
      </mesh> */}

      <mesh geometry={nodes.Shape004.geometry} position={[0.44, 0.005, -0.064]} rotation={[-0.911, -0.597, 2.086]}>
        {' '}
        {matMetal}
      </mesh>

      <mesh geometry={nodes.Shape011.geometry} rotation={[-0.096, -0.241, 2.015]}>
        {matMetal}
      </mesh>
      {/* d1b3ff */}
      <mesh geometry={nodes.Shape012.geometry} rotation={[2.037, -1.023, -0.056]}>
        <MeshTransmissionMaterial resolution={512} distortion={0.5} color="#f0e9ea" thickness={1} anisotropy={1} />
      </mesh>

      <mesh geometry={nodes.Shape013.geometry} rotation={[0.658, 0.98, -2.575]}>
        <meshStandardMaterial color="white" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* 92bfd6 */}
      <mesh geometry={nodes.Shape014.geometry} rotation={[0.247, 0.081, -2.004]}>
        <MeshTransmissionMaterial resolution={128} distortion={0.5} color="#fcf5ed" thickness={1} anisotropy={0} />
      </mesh>

      {/* <mesh geometry={nodes.Shape014.geometry} rotation={[0.247, 0.081, -2.004]}>
        <LayerMaterial
          color={'#ffffff'}
          lighting={'physical'} //
          transmission={1}
          roughness={0.1}
          thickness={2}
        >
          <Depth near={0} far={1} origin={[-0.5, 0.5, 0]} colorA={'#fec5da'} colorB={'#00b8fe'} />
          <Fresnel color={'#fefefe'} bias={0} intensity={2} power={3} factor={0} mode={'screen'} />
        </LayerMaterial>
      </mesh> */}
    </group>
  );
}

useGLTF.preload('./assets/abstract-shape.glb');
