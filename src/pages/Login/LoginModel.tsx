// import React, { useRef } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { MeshStandardMaterial, Group, Mesh } from 'three';

// const Model = () => {
//     const modelRef = useRef<Group>(null);
//     const gltf = useLoader(GLTFLoader, '/path/to/model.glb');

//     gltf.scene.traverse((child) => {
//         if ((child as Mesh).isMesh) {
//             (child as Mesh).material = new MeshStandardMaterial({
//                 color: 0xffffff,
//                 emissive: 0xff0000,
//                 emissiveIntensity: 1,
//             });
//         }
//     });

//     return (
//         <group ref={modelRef} dispose={null}>
//             <primitive object={gltf.scene} />
//         </group>
//     );
// };

// export default Model;
