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

export function Experience(){

    const { camera, gl } = useThree();

    const boxRef = useRef()
    const sphereRef = useRef()
    const coneRef = useRef();
   
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta  ;
        sphereRef.current.rotation.x += 3 * delta;
        coneRef.current.rotation.z += 1 * delta;
    })
    
    return (
      <>
        //
        <OrbitControls
          enableRotate={true}
          enablePan={false}
          makeDefault={true}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 3, 3]} intensity={1.5} />
        <Center>
          //box
          <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"mediumvioletred"} />
          </mesh>
          //sphere
          <mesh ref={sphereRef} position-x={-3}>
            <sphereGeometry args={[1, 32, 64]} />
            <meshStandardMaterial color={"violet"} />
          </mesh>
          //cone
          <mesh ref={coneRef} position-x={3}>
            <coneGeometry args={[1, 1, 10]} />
            <meshStandardMaterial color={"purple"} />
          </mesh>
          //floor
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry args={[]} />
            <meshStandardMaterial color={"mediumpurple"} />
          </mesh>
        </Center>
      </>
    );
}