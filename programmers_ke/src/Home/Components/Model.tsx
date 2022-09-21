import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import react, { Suspense } from 'react';


function Model() {
    return (
        <div className="absolute w-1/2 h-3/4 right-0 top-0 
                              bg-transparent">
            <Suspense fallback={null}>
                <Canvas shadows>
                    <OrbitControls />
                    <PerspectiveCamera makeDefault fov={50} position={[0, 10, 10]} />
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
                    <mesh>
                        <meshStandardMaterial/>
                        <sphereGeometry args={[1, 50, 50]} />
                    </mesh>
                </Canvas>
            </Suspense>
        </div>
    )
}

export default Model