import { Canvas } from '@react-three/fiber';
import { softShadows, Sky, Stars } from "@react-three/drei"
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import {Model} from './components/Model'
import {FPV} from './components/FPV';
import {Cubes} from './components/Cubes';
import {TextureSelector} from './components/TextureSelector';
import {Menu} from './components/Menu';

function App() {
  softShadows()
  return (
    <>
      <Canvas shadows>
        <Sky sunPosition={[0, 0, 0]} inclination={0} distance={100} azimuth={1}/>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
        <fog attach="fog" color="black" near={5} far={25} />
        <ambientLight intensity={0.2} />


        <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={0.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              // shadow-camera-far={50}
              // shadow-camera-left={-10}
              // shadow-camera-right={10}
              // shadow-camera-top={10}
              // shadow-camera-bottom={-10}
            />
        // <pointLight position={[10, 30, 0]} color="hotpink" intensity={2} />
        // <pointLight position={[-10, 30, 0]} color="blue" intensity={2} />
        // <pointLight position={[0, -10, 0]} intensity={1.5} />

        <FPV />
        <Physics>
          <Player />
          <Model />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
