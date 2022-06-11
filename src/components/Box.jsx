import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const Box = props => {
    const ref = useRef();  //this is replaced by the 'ref' below:
    // const [ref, api] = useBox( () => ({mas: 1, ...props}) )
    const texture = useLoader(THREE.TextureLoader, '/img/faces.png')
    useFrame(state => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    });
    const handlePointerDown = e => {
      console.log(e + 'click')
      e.object.active = true;
      if(window.activeMesh) scaleDown(window.activeMesh)
      window.activeMesh = e.object
    }
    const handlePointerEnter = e => {
      e.object.x = 1.5
      e.object.y = 1.5
      e.object.z = 1.5
    }
    const handlePointerLeave = e => {
        if (!e.object.active) {
            scaleDown(e.object)
        }
    }
    const scaleDown = object => {
      object.x = 1
      object.y = 1
      object.z = 1    
    }

    return(
        <mesh 
        ref={ref} 
        {...props} 
        receiveShadow 
        castShadow 
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        >
            <boxBufferGeometry />
            <meshBasicMaterial 
          map={texture}
            />
        </mesh>
    )
}

export default Box