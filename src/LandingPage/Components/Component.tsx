import { useGLTF } from "@react-three/drei";

function Component(props) {
  const { nodes, materials } = useGLTF("../../assets/LandingPage.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.05, 0.1, 0.05]} scale={[5.23, 0.05, 5.23]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[0.52, 4.53, 0.11]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={5.45}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.027"]}
        position={[3.49, 0.42, -1.85]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.2, 0.06, 3.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.040"]}
        position={[-3.74, 0.84, 3.96]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.2, 0.06, 1.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.037"]}
        position={[0.55, 1.02, 0.33]}
        rotation={[-Math.PI, -0.03, 3.14]}
        scale={[2.24, 0.05, 2.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.043"]}
        position={[4.01, 0.55, 4.69]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.042"]}
        position={[4.01, 1.12, 4.69]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.041"]}
        position={[4.01, 1.68, 4.69]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.045"]}
        position={[4.97, 0.76, 3.31]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.044"]}
        position={[4.97, 1.51, 3.31]}
        scale={0.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.051"]}
        position={[5, 0.42, 4.72]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.038"]}
        position={[0.47, 0.63, 0.33]}
        rotation={[-Math.PI, 0, 0]}
        scale={[2.68, 0.06, 3.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.039"]}
        position={[3.39, 0.6, -4.11]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.2, 0.06, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.035"]}
        position={[3.96, 0.6, -4.79]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.6, 0.06, 0.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.036"]}
        position={[2.58, 0.61, -4.75]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.4, 0.06, 0.36]}
      />
      <group position={[-0.45, 2.21, 3.3]} scale={[0.07, 0.39, 0.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group position={[4.2, 2.73, -2.24]} scale={[0.1, 0.44, 0.44]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[0.74, 3.42, 4.16]} scale={[0.03, 0.23, 0.23]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[2.71, 1.99, 5.28]} scale={[0.06, 0.5, 0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[3.01, 1.05, 4.92]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.33}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group
        position={[4.29, 1.22, -0.82]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.16, -0.62, -0.62]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Github.geometry}
        material={materials["Material.016"]}
        position={[-4.7, 2.1, 4.27]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.72, 0.24, 0.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["Material.050"]}
        position={[0.75, 2.42, -3.34]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials["Material.048"]}
        position={[4.81, 2.1, -3.02]}
        scale={0.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["Material.049"]}
        position={[1.34, 1.94, -4.35]}
        scale={0.39}
      />
      <group position={[4.46, 3.29, -2.84]} scale={[0.04, 0.3, 0.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials["Material.018"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CPLang.geometry}
        material={materials["Material.020"]}
        position={[1.23, 3.85, -3.63]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.53}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CLang.geometry}
        material={materials["Material.019"]}
        position={[5.12, 2.15, 4.29]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.63}
      />
      <group position={[5.2, 2.17, 2.16]} scale={[0.09, 0.18, 0.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials["Material.022"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["Material.047"]}
        position={[4.13, 0.62, -2.44]}
        scale={0.34}
      />
      <group
        position={[1.37, 3.9, 5.51]}
        rotation={[0.87, 0, Math.PI]}
        scale={[0.03, 0.24, 0.24]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_1.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_2.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_3.geometry}
          material={materials["Material.024"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["Material.046"]}
        position={[-3.37, 1.12, 4.15]}
        scale={0.25}
      />
      <group position={[4.67, 2.46, -1.17]} scale={[0.05, 0.21, 0.21]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038_1.geometry}
          material={materials["Material.029"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Git.geometry}
        material={materials["Material.030"]}
        position={[-2.56, 3.15, 2.23]}
        rotation={[0.79, -0.05, -1.52]}
        scale={0.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strobe3.geometry}
        material={materials["Material.034"]}
        position={[0.55, 1.3, 0.33]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.41, 0.02, 1.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strobe.geometry}
        material={materials["Material.032"]}
        position={[0.55, 1.97, 0.33]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.99, 0.01, 1.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strobe2.geometry}
        material={materials["Material.033"]}
        position={[0.55, 1.58, 0.33]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.43, 0, 0.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Strobe1.geometry}
        material={materials["Material.031"]}
        position={[0.55, 1.51, 0.33]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.63, 0, 0.67]}
      />
      <group
        position={[3.76, 0.99, -4.82]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.25}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.053"]}
        />
      </group>
      <group
        position={[5.1, 5.11, 3.28]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.19}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials["Material.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials["Material.055"]}
        />
      </group>
      <group position={[-3.06, 1.24, -3.7]} scale={[0.05, 0.32, 0.37]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials["Material.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials["Material.058"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Code.geometry}
        material={materials["Material.064"]}
        position={[-0.18, 4.76, -3.29]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Code1.geometry}
        material={materials["Material.061"]}
        position={[-2.1, 4.59, 2.26]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.63}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Code3.geometry}
        material={materials["Material.063"]}
        position={[0.32, 1.72, -2.26]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Code2.geometry}
        material={materials["Material.062"]}
        position={[-0.99, 2.17, 1.44]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.45}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.059"]}
        position={[-4.11, 0.71, -2.09]}
        scale={0.32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.059"]}
        position={[-4.11, 1.4, -2.09]}
        scale={0.32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.060"]}
        position={[-4.11, 2.09, -2.09]}
        scale={0.32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.040"]}
        position={[-3.74, 0.84, 0.47]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.51, 0.02, 0.61]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mail.geometry}
        material={materials["Material.065"]}
        position={[-3.77, 1.24, 0.76]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.63}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gem.geometry}
        material={materials["Material.066"]}
        position={[-2.89, 2.74, -2.75]}
        rotation={[-0.78, 0, 0]}
        scale={0.48}
      />
      <group
        position={[-1.37, 2.63, -3.63]}
        rotation={[-2.36, 0, -Math.PI / 2]}
        scale={0.2}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials["Material.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_3.geometry}
          material={materials["Material.069"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../assets/LandingPage.glb");

export default Component;
