import { useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const LogoPanel = props => {
    const texture3 = useLoader(THREE.TextureLoader, '/img/sponsor-logo_blk.png')
    const { gl } = useThree();
    return (
        <mesh {...props}>
            <boxBufferGeometry args={[0.001, 7, 9]} />
            <meshPhongMaterial 
            transparent
            map={texture3} />
        </mesh> 
    )
}

export default LogoPanel