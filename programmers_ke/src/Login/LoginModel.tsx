import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';
import React, { useRef, Suspense } from "react";


function LoginModel() {
    return (
        <div className="absolute w-full h-screen top-0 left-0
                        bg-transparent">
            <Suspense fallback={null}>
                <Canvas shadows>
                    <OrbitControls />
                    <PerspectiveCamera makeDefault fov={20} position={[-10, 5, 1]} />
                    <hemisphereLight
                        position={[-40, 30, 10]}
                        castShadow
                        intensity={1}
                        color={0x6600cc} />
                    {/* <spotLight
                        position={[10, -10, 10]}
                        castShadow
                        intensity={1}
                        color={0x00ff55} />
                    <directionalLight
                        position={[40, 30, 20]}
                        castShadow
                        intensity={1}
                        color={0x33ffff} /> */}
                    <mesh
                        castShadow
                        receiveShadow
                        position={[0, 0, -2]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color='grey' />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        position={[2, 1, 2]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color='grey' />
                    </mesh>
                        {/* <EffectComposer multisampling={3}>
                            <Bloom
                                blendFunction={BlendFunction.ADD}
                                intensity={1.5}
                                height={2000}
                                kernelSize={KernelSize.LARGE}
                                luminanceThreshold={0.001}
                                luminanceSmoothing={0.0025} />
                            <ChromaticAberration 
                                blendFunction={BlendFunction.NORMAL}
                                offset={[0.0005, 0.0012]} />
                        </EffectComposer> */}
                </Canvas>
            </Suspense>
        </div>
    )
}

export default LoginModel