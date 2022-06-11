import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo } from 'react';


const Background = props => {

  const {gl} = useThree();

  const texture = useTexture('/img/catwalk.png')
  const formatted = useMemo( 
    () => new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
  )
  return(
    <primitive attach="background" object={formatted.texture} />
  )
}

export default Background