import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';
import React, { useRef, Suspense } from "react";
import Component from './Component'
function Model() {
    return (
        <div className="absolute w-1/2 h-3/4 right-0 top-0 
                        bg-transparent">
            <Suspense fallback={null}>
                <Canvas shadows>
                    <OrbitControls />
                    <PerspectiveCamera makeDefault fov={60} position={[15, 6, 7]} />
                    <directionalLight
                        position={[-40, 30, 10]}
                        castShadow
                        intensity={1}
                        color={0x6600cc} />
                    <directionalLight
                        position={[30, -40, -10]}
                        castShadow
                        intensity={1}
                        color={0x00ff55} />
                        {/* <Component /> */}
                        <mesh
                            castShadow
                            receiveShadow>
                            <sphereGeometry args={[1, 32, 32]} />
                            <meshStandardMaterial emissive={[1,1,1]} color='yellow'/>
                        </mesh>
                        <EffectComposer multisampling={3}>
                            <Bloom
                                blendFunction={BlendFunction.ADD}
                                blurPass={undefined}
                                intensity={1.5}
                                height={2000}
                                kernelSize={KernelSize.LARGE}
                                luminanceThreshold={0.001}
                                luminanceSmoothing={0.0025} />
                            <ChromaticAberration 
                                blendFunction={BlendFunction.NORMAL}
                                offset={[0.0005, 0.0012]} />
                        </EffectComposer>
                </Canvas>
            </Suspense>
        </div>
    )
}

export default Model