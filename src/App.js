import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

import Background from './components/Background'
import Bulb from './components/Bulb'
import Floor from './components/TonyAndGuy'
import LogoPanel from './components/SponsorLogo'
import Orbit from './components/Orbit';

import GltfModel from "./components/GltfModel";
// import Sound from './components/Sound'

  function App() {

      return (
          <div style={{height: '100vh', width: '100vw'}}>
              <Canvas
              style={{background: 'black'}}
              camera={{ position: [3,3,3]}}
              >
                  <ambientLight intensity={0.2} />
                  <Bulb position={[-2.5,6,2]} visible={true}/>
                  <Orbit />
                  {/* <axesHelper args={[4]} /> */}
                  <Suspense fallback={null}>
                      <GltfModel modelPath={'/gltf/dress+hair.glb'} scale={.1} position={[3,-.2,1]} />

                      <GltfModel modelPath={'/gltf/cube_head-shot-1.glb'} scale={1} position={[-1.8,1.75,-3]} />
                      <GltfModel modelPath={'/gltf/cube_head-shot-2.glb'} scale={1} position={[-1.75,-1,3.5]} />
                      <LogoPanel position={[-11.5,1.1,0]} scale={.65}/>
                      <Background />
                  </Suspense>
                  <Floor position={[-3,-2.5,.5]} />
                  {/* <Sound /> */}
              </Canvas>
              <div className="distortion"></div>

          </div>
      )
  }

  export default App;