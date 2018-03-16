import React, { Component } from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';
import 'aframe-physics-system';

import { MovementSystem } from './containers';
import { 
  GltfModel, 
  Ground,
  Lamp,
  Sky 
} from './components';
import axelTorvModel from './resources/models/axeltorv.gltf';
import skyDay from './resources/panoramas/day-louvre.jpeg';
import groundTexture from './resources/textures/floor-bricks.png';
import './App.css';
import { AXELTORV_WIDTH, AXELTORV_HEIGHT } from './constants/dimensions';

class App extends Component {
  render() {

    const lamps = Array(4).fill(null).map((_, i) => {
      return (
        <Lamp
          key={i}
          isOn={true} 
          position={`${-20+14.5*i} 0 -10`}
        />
      )
    })

    return (
      <Scene physics="debug: true">
        {/* <Sky src={skyDay} /> */}
        {/* <Light type="ambient" /> */}
        <MovementSystem />
        <GltfModel
          id="axelTorvModel"
          src={axelTorvModel}
          rotation="-90 28 0"
          position="-30 -100 -9"
        />

        { lamps }
        
        <Ground
          position="0 .01 8.5"
          rotation="-90 0 0"
          texture={groundTexture}
          repeat={`${AXELTORV_WIDTH/10} ${AXELTORV_HEIGHT/10}`}
          width={AXELTORV_WIDTH}
          height={AXELTORV_HEIGHT}
        />
      </Scene>
    );
  }
}

export default App;
