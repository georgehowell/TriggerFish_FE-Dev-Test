import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const Floor = props => {
    const texture = useLoader(THREE.TextureLoader, '/img/TonyAndGuy.png')
    return (
        <mesh {...props} receiveShadow >
            <boxBufferGeometry args={[12,0.001,2.9]} />
            <meshPhongMaterial 
            map={texture}
            opacity={1} 
            transparent
            />
        </mesh>
    )
}
export default Floor