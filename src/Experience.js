 /**
  * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
  * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
  * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
  * React three drei: https://github.com/pmndrs/drei
  * Three.js: https://threejs.org/docs/
  * 
*/

import { Center, OrbitControls, PointerLockControls, PresentationControls } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef } from "react";
import { ConeGeometry } from "three";

export function Experience(){
    const boxRef = useRef()
    const sphereRef = useRef()
    const coneRef = useRef();

    // const {camera, gl} = useThree()
   
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta  ;
        sphereRef.current.rotation.x += 10 * delta;
        coneRef.current.rotation.z += 10 * delta;
    })
    
    return (
      <>
        <OrbitControls enableRotate={true} />
        <ambientLight />

        <directionalLight position={[10, 3, 3]} intensity={1.5} />
        <Center>
          <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"mediumpurple"} />
          </mesh>
          <mesh ref={sphereRef} position-x={-3}>
            <sphereGeometry args={[1, 32, 64]} />
            <meshStandardMaterial color={"violet"} />
          </mesh>
          <mesh ref={coneRef} position-x={3}>
            <coneGeometry args={[1, 1, 10]} />
            <meshStandardMaterial color={"purple"} />
          </mesh>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry args={[]} />
            <meshStandardMaterial color={"lavender"} />
          </mesh>
        </Center>
      </>
    );
}